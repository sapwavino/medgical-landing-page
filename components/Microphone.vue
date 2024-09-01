<template>
    <div class="bg-black rounded-full py-3 px-5 mx-auto flex gap-5 items-center">
        <svg class=" text-white opacity-40 h-10 w-10" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" /><path d="M5 10a7 7 0 0 0 14 0" /><path d="M8 21l8 0" /><path d="M12 17l0 4" /></svg>
        <div class="w-full h-full relative">
            <div
                class="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-between">
                <div v-for="(param, p) in voice1" :key="'voice1' + p"
                    class="w-1.5 mix-blend-lighten rounded-full min-h-2 transition-all"
                    style="background-color: #8AE786;" :style="{
                    height: param + '%'
                }"></div>
            </div>
            <div
                class="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-between">
                <div v-for="(param, p) in voice2" :key="'voice2' + p"
                    class="w-1.5 mix-blend-lighten rounded-full min-h-2 transition-all"
                    style="background-color: #E79C50;" :style="{
                    height: param + '%'
                }"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            voice1: [5, 5, 30, 45, 50, 33, 20, 15, 10, 5, 5, 5, 5, 5],
            voice2: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            active: false
        }
    },
    mounted() {
        setInterval(() => {
            this.voiceAnimation()
        }, 100)
    },
    methods: {
        voiceAnimation() {
            let decay = 0.2
            let voice1startIndex = 3
            let voice2startIndex = 11
            if (this.active) {
                this.voice1[voice1startIndex] = Math.floor(Math.random() * 100)
                //this.voice2[voice2startIndex] = Math.floor(Math.random() * 100)
            } else {
                this.voice1[voice1startIndex] = 5
                //this.voice2[voice2startIndex] = 5
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
            /*let voice2simetryIndex = voice2startIndex + 1
            for (let l = voice2startIndex - 1; l >= 0; l--) {
                let randomDecayWeight = this.active ? Math.random() * decay : decay
                let value = Math.floor(this.voice2[l + 1] * (1 - randomDecayWeight))
                this.voice2[l] = value
                if (voice2simetryIndex <= this.voice2.length - 1) {
                    this.voice2[voice2simetryIndex] = value
                    voice2simetryIndex++
                }
            }*/
        },
        setActive(value) {
            this.active = value
        }
    }
}
</script>