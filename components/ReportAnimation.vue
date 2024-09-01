<template>
    <div
        @click="continueAnimation()" @mouseenter="continueAnimation()"
        @mouseleave="stop()"
        style="background-color: #1A191D;"
        class="flex-1 min-h-0 mt-5 p-4 relative overflow-hidden rounded-xl flex flex-col justify-between">
        <div class="text-sm flex-1 overflow-hidden text-zinc-500 hover:text-zinc-400 pb-4 h-36 max-h-36 min-h-36 relative">
            <b class=" text-zinc-600 font-semibold block mb-1 opacity-50">
                {{ $t('reportanim.title') }}
            </b>
            {{ reportTranscription }}
        </div>
        <Microphone ref="microphone" class="h-20 scale-75 w-full shrink-0 translate-y-1.5" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            reportTranscription: "",
            reportTranscriptionWords: [],
            timer: null,
            active: false
        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            this.reportTranscriptionWords = this.$t('reportanim.transcription').split(" ");
            this.timer = setInterval(() => {
                if(!this.active) return
                if (this.reportTranscriptionWords.length > 0) {
                    this.reportTranscription += this.reportTranscriptionWords.shift() + " ";
                } else {
                    this.reportTranscription = "";
                    this.reportTranscriptionWords = this.$t('reportanim.transcription').split(" ");
                }
            }, 500)
        },
        continueAnimation() {
            this.active = true
            this.$refs.microphone.setActive(true)
        },
        stop() {
            this.active = false
            this.$refs.microphone.setActive(false)

        }
    },
    beforeUnmount() {
        clearInterval(this.timer)
    },
}
</script>