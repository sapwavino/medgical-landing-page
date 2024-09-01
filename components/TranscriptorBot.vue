<template>
    <div class="ring-1 ring-inset bg-zinc-800 ring-white/50 rounded-3xl shadow-md shadow-black/10 pt-1 flex flex-col">
        <div class="w-56 h-16 bg-black rounded-full py-3 mt-2 mx-auto">
            <div v-if="generating"
                class="w-full h-full pl-4 gap-3 flex font-semibold items-center"
                style="color: #8AE786;">
                <svg class="h-7 w-7 animate-spin" style="fill:#8AE786"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                        d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z">
                    </path>
                </svg>
                <div class="flex-1">
                    {{ $t('notes.generating_notes') }}
                </div>
            </div>
            <div v-else class="w-full h-full relative">
                <div
                    class="absolute top-0 left-12 bottom-0 right-12 flex items-center justify-between">
                    <div v-for="(param, p) in voice1" :key="'voice1' + p"
                        class="w-1.5 mix-blend-lighten rounded-full min-h-2 transition-all"
                        style="background-color: #8AE786;" :style="{
            height: param + '%'
        }"></div>
                </div>
                <div
                    class="absolute top-0 left-12 bottom-0 right-12 flex items-center justify-between">
                    <div v-for="(param, p) in voice2" :key="'voice2' + p"
                        class="w-1.5 mix-blend-lighten rounded-full min-h-2 transition-all"
                        style="background-color: #E79C50;" :style="{
            height: param + '%'
        }"></div>
                </div>
            </div>
        </div>
        <div class="relative px-7 pb-7 pt-1 flex-1 min-h-0">
            <div
                class="z-10 bg-gradient-to-t from-transparent h-12 to-zinc-800 absolute top-0 left-1 right-1">
            </div>
            <div class="text-sm scrollbar-hide text-white/50 h-full overflow-y-auto pt-3"
                ref="autoscroll">
                <span v-for="(word, w) in transcription"
                    :key="'transcription_' + w">
                    <b v-if="word == 'doctor'"
                        class="block mt-3 mb-0.5">{{ $t('notes.doctor') }}:</b>
                    <b v-else-if="word == 'pacient'"
                        class="block mt-3 mb-0.5">{{ $t('notes.patient') }}:</b>
                    <template v-else>{{ word + ' ' }}</template>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TranscriptorBot',
    data() {
        return {
            voice1: [5, 5, 30, 45, 50, 33, 20, 15, 10, 5, 5, 5, 5, 5],
            voice2: [5, 5, 5, 5, 5, 40, 50, 40, 30, 20, 10, 5, 5, 5],
            transcription: [],
            generating: false,
            transcriptionWords: [],
            timers: []
        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            this.transcription = []
            this.active = true
            this.generating = false
            this.generated = false
            this.transcriptionWords = this.$t('notes.transcript').split(' ')
            //cancel timers
            this.timers.forEach(timer => {
                clearInterval(timer)
            })
            this.timers = []
            this.finishTranscription()
            //change voice1 and voice2 values 
            this.timers.push(setInterval(() => {
                this.voiceAnimation()
            }, 120))
        },
        async finishTranscription() {
            if (this.transcriptionWords.length > 0) {
                this.transcription.push(this.transcriptionWords.shift())
                //auto scroll smoth
                if (this.active) {
                    this.$nextTick(() => {
                        if (this.$refs.autoscroll) {
                            this.$refs.autoscroll.scrollTop = this.$refs.autoscroll.scrollHeight
                        }
                    })
                }
                await new Promise(resolve => setTimeout(resolve, 120))
                await this.finishTranscription()
            } else {
                this.active = false
                await new Promise(resolve => setTimeout(resolve, 500))
                this.generating = true
                await new Promise(resolve => setTimeout(resolve, 3000))
                this.$emit('generated')
            }

        },
        voiceAnimation() {
            let decay = 0.2
            let voice1startIndex = 3
            let voice2startIndex = 11
            if (this.active) {
                this.voice1[voice1startIndex] = Math.floor(Math.random() * 100)
                this.voice2[voice2startIndex] = Math.floor(Math.random() * 100)
            } else {
                this.voice1[voice1startIndex] = 5
                this.voice2[voice2startIndex] = 5
            }
            let voice1simetryIndex = voice1startIndex - 1
            for (let i = voice1startIndex + 1; i < this.voice1.length; i++) {
                let randomDecayWeight = this.active ? Math.random() * decay : decay
                let value = Math.floor(this.voice1[i - 1] * (1 - randomDecayWeight))
                this.voice1[i] = value
                if (voice1simetryIndex >= 0) {
                    this.voice1[voice1simetryIndex] = value
                    voice1simetryIndex--
                }
            }
            let voice2simetryIndex = voice2startIndex + 1
            for (let l = voice2startIndex - 1; l >= 0; l--) {
                let randomDecayWeight = this.active ? Math.random() * decay : decay
                let value = Math.floor(this.voice2[l + 1] * (1 - randomDecayWeight))
                this.voice2[l] = value
                if (voice2simetryIndex <= this.voice2.length - 1) {
                    this.voice2[voice2simetryIndex] = value
                    voice2simetryIndex++
                }
            }
        },
    },
}
</script>