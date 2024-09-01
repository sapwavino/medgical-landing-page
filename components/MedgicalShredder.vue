<template>
    <div class=" h-44 w-56 relative overflow-hidden transform cursor-default" @click="start()" @mouseenter="start()">
        <div class="relative" style="transform: scale(0.2) translateY(-600px) translateX(-480px); height: 400px; width: 400px;">
            <div class="shredded-paper">
                <div class="content">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-1">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-2">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-3">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-4">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>

                </div>
                <div class="part-5">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-6">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-7">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-8">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-9">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
                <div class="part-10">
                    <div class="alert">
                        {{ $t('data') }}
                    </div>
                </div>
            </div>

            <div class="shredder-holder absolute top-1/2 -mt-5 left-0 right-0">
                <div class="shredder h-96 w-full">
                    <div class="h-5 w-5 bg-accent rounded-full animate-pulse "></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            animating: false
        }
    },
    methods: {
        start() {
            if (this.animating) return;
            this.animating = true;
            const shreddedPaper = document.querySelector('.shredded-paper');
            const shreddedPaperContent = document.querySelector('.shredded-paper > .content');
            const shredderHolder = document.querySelectorAll('.shredder-holder');
            shreddedPaper.classList.add('animate-shredded-paper');
            shreddedPaperContent.classList.add('animate-content');
            //shredderHolder.add('animate-shredder-holder');
            //animate even parts
            for (let i = 0; i <= 10; i += 2) {
                const part = document.querySelector(`.shredded-paper .part-${i}`);
                if(!part) continue;
                part.classList.add('shredded-paper-p-animate');
            }
            //animate odd parts
            for (let i = 1; i <= 10; i += 2) {
                const part = document.querySelector(`.shredded-paper .part-${i}`);
                if(!part) continue;
                part.classList.add('shredded-paper-q-animate');
            }
            //reset after 4 seconds
            setTimeout(() => {
                console.log('reset');
                shreddedPaper.classList.remove('animate-shredded-paper');
                shreddedPaperContent.classList.remove('animate-content');
                //shredderHolder.remove('animate-shredder-holder');
                for (let i = 0; i <= 10; i++) {
                    const part = document.querySelector(`.shredded-paper .part-${i}`);
                    if(!part) continue;
                    part.classList.remove('shredded-paper-p-animate');
                    part.classList.remove('shredded-paper-q-animate');
                }
                this.animating = false;
            }, 5000)
        }
    }
}
</script>