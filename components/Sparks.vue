<template>
    <div class="relative">
        <NuxtParticles class="absolute top-0 left-0 right-0 bottom-0" :id="divId" :options="config"></NuxtParticles>
    </div>
</template>
<script>

export default {
    props: {
        divId: {
            type: String,
            default: 'particles'
        },
        config: {
            type: Object,
            default: () => ({
                autoPlay: true,
            preset: 'stars',
            fullScreen: {
                enable: false
            },
            particles: {
                number: {
                    value: 2000,
                    density: {
                        enable: true,
                        value_area: 500
                    }
                },
                opacity: {
                    value: 0.75,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 1.75,
                        opacity_min: 1,
                        sync: false
                    }
                },
                size: {
                    value: 1,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 50,
                    color: '#ffffff',
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            detectRetina: true,
            })
        }
    },
}
</script>