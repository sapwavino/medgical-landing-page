<template>
    <div class="gradient-wrapper relative">
        <div class="hover" style="opacity: 0;"></div>
        <div
            class="glow-background opacity-0 xl:opacity-0 translate-y-24 h-[130vh] lg:h-[100vh]">
        </div>
        <div class="sparks-background opacity-90" style="z-index:0"></div>
        <MedgicalHeader />
        <div class="section-hero">
            <div
                class="container-max flex flex-col text-center lg:text-left lg:flex-row items-center justify-around lg:justify-between sm:px-10">
                <div
                    class="intro-block min-h-56 h-[50vh] lg:pt-0 items-center lg:items-start">
                    <h1 class="display-1">{{ $t('hero1') }}<br />{{ $t('hero2') }}
                    </h1>
                    <p class="display-paragraph w-full max-w-md px-0 sm:px-10 md:px-0">{{ $t('herotext') }}</p>
                    <JoinButton cta="try" />
                </div>
                <div class="relative h-96 w-72 text-left lg:mr-14">
                    <div style="z-index: 2;"
                        class="absolute -top-16 overflow-hidden rounded-full -right-24 -bottom-24 -left-24 shadow-inner ">
                        <ClientOnly>
                            <Sparks class="h-full w-full" />
                        </ClientOnly>
                    </div>
                    <div
                        class="paralax top-0 left-0 absolute z-10 h-96 w-72 md:h-[26rem] md:w-[19rem]">
                        <ClientOnly>
                            <TranscriptorBot @generated="generated = true"
                                ref="transcriptorbot"
                                class="asr h-96 w-72 md:h-[26rem] md:w-[19rem]"
                                :class="{
                                    '-translate-x-10 translate-y-5 scale-90': generated
                                }" />
                        </ClientOnly>
                    </div>

                    <div class="paralax1 absolute z-20 top-5 left-0">
                        <div class="bg-zinc-300 transition-all duration-1000 text-zinc-800 ring-white/5 rounded-3xl shadow-lg shadow-black/10 h-96 w-72 md:h-[26rem] md:w-[19rem] flex flex-col p-5 "
                            :class="{
                                    'opacity-0 translate-x-10 scale-110': !generated,
                                    'opacity-100 translate-x-0 scale-100': generated
                                }">
                            <div class="flex items-center">
                                <b class="flex-1">{{ $t('consultation') }}</b>
                                <span class="opacity-50 text-sm">{{
                                    todayDate
                                }}</span>
                            </div>
                            <div
                                class="mt-3 text-sm w-full flex flex-col gap-1 flex-1 overflow-hidden relative">
                                <div> <b>{{ $t('notes.patient') }}:</b> João Silva</div>
                                <div> <b>{{ $t('notes.age') }}:</b> {{ $t('notes.age_value') }}</div>
                                <div> <b>{{ $t('notes.motive') }}:</b> {{ $t('notes.motive_value') }}</div>
                                <div> <b>{{ $t('notes.previousdiagnosis') }}:</b> {{ $t('notes.previousdiagnosis_value') }}
                                </div>
                                <div> <b>{{ $t('notes.medication') }}:</b> {{ $t('notes.medication_value') }}</div>
                                <div> <b>{{ $t('notes.symptoms') }}:</b> {{ $t('notes.symptoms_value') }}</div>
                                <div> <b>{{ $t('notes.exams') }}:</b> {{ $t('notes.exams_value') }}</div>

                                <div
                                    class="bg-gradient-to-t from-zinc-300 to-transparent h-10 absolute bottom-0 left-0 right-0">
                                </div>
                            </div>
                            <button @click="reset()"
                                class="mt-5 text-sm bg-zinc-300 flex gap-2 items-center cursor-pointer transition-all hover:translate-y-1 hover:shadow-sm rounded-full text-zinc-700 ring-1 ring-zinc-400/50 font-semibold shadow-md shadow-black/10 ring-inset py-3 pl-3 pr-6 mx-auto">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z">
                                    </path>
                                </svg>
                                {{ $t('notes.restart') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MedgicalStats />
        <div id="features" class="section-features relative">
            <div class="container px-5">
                <div
                    class="grid-features mx-auto max-w-4xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div class="card sm:col-span-2 flex items-stretch">
                        <div class="card-title">{{ $t('features.feature1_title') }}</div>
                        <div class="card-text">{{ $t('features.feature1_text') }}</div>
                        <div
                            class="bg-black/10 rounded-xl mb-10 mt-5 relative overflow-hidden">
                            <div class="scroll-parent-vertical w-80 mx-auto">
                                <div
                                    class="scroll-element-vertical primary-vertical">
                                    <div class="flex flex-col gap-5">
                                        <div class="consultation-type">{{ $t('features.feature1_hospitalconsultation') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_mgf') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_icpc') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_pacing') }}</div>
                                    </div>
                                </div>
                                <div
                                    class="scroll-element-vertical secondary-vertical">
                                    <div class="flex flex-col gap-5">
                                        <div class="consultation-type">{{ $t('features.feature1_hospitalconsultation') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_mgf') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_icpc') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_pacing') }}</div>
                                    </div>
                                </div>

                                <div
                                    class="scroll-element-vertical right-0 primary-vertical-down">
                                    <div class="flex flex-col gap-5">
                                        <div class="consultation-type">{{ $t('features.feature1_oncology') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_radiology') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_hospitalconsultation') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_pacing') }}</div>
                                    </div>
                                </div>
                                <div
                                    class="scroll-element-vertical right-0 secondary-vertical-down">
                                    <div class="flex flex-col gap-5">
                                        <div class="consultation-type">{{ $t('features.feature1_oncology') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_radiology') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_hospitalconsultation') }}</div>
                                        <div class="consultation-type">{{ $t('features.feature1_pacing') }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <b
                            class="absolute bottom-5 right-5 bg-accent rounded-full py-1 px-3 text-xs text-white/90">{{ $t('features.feature1_contactforcustomization') }}</b>
                    </div>
                    <div class="card">
                        <div
                            class="relative h-44 mb-5 flex items-center justify-center">
                            <div
                                class="bg-zinc-800 ring-1 ring-black/30 h-2 rounded-full absolute w-28 left-1/2 -ml-14">
                            </div>
                            <div
                                class="bg-zinc-800 translate-y-4 ring-1 ring-black/30 h-2 rounded-full absolute w-28 left-1/2 -ml-14">
                            </div>
                            <div
                                class="bg-zinc-800 -translate-y-4 ring-1 ring-black/30 h-2 rounded-full absolute w-28 left-1/2 -ml-14">
                            </div>
                            <div
                                class=" bg-zinc-700 ring-1 ring-inset absolute ring-white/10 shadow-md shadow-black/30 border-b-2 border-zinc-900 rounded-lg h-20 w-20 text-2xl font-semibold text-opacity-50 flex items-center justify-center ">
                                {{ $t('features.feature2_ai') }}
                            </div>
                        </div>
                        <div class="card-title">{{ $t('features.feature2_title') }}</div>
                        <div class="card-text">{{ $t('features.feature2_text') }}</div>
                    </div>
                    <div class="card">
                        <ClientOnly>
                            <div class="h-40 mb-5 relative">
                                <div
                                    class="h-10 text-zinc-700 ring-1 gap-2 ring-white/40 transition-all cursor-pointer hover:translate-y-0.5 hover:shadow-sm font-semibold pr-5 pl-4 items-center justify-center absolute left-5 top-5 rounded-md bg-gradient-to-t from-zinc-500 to-zinc-50 shadow-black/20 shadow-md flex">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24"
                                        viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" class="h-5 w-5">
                                        <path stroke="none" d="M0 0h24v24H0z"
                                            fill="none" />
                                        <path
                                            d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                                        <path
                                            d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                    </svg> {{ $t('features.feature3_copy') }}
                                </div>
                                <div
                                    class="h-10 text-zinc-700 ring-1 gap-2 ring-white/40 transition-all cursor-pointer hover:translate-y-0.5 hover:shadow-sm font-semibold pr-5 pl-4 items-center justify-center absolute right-0 bottom-5 rounded-md bg-gradient-to-t from-zinc-500 to-zinc-50 shadow-black/20 shadow-md flex">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24"
                                        viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" class="h-5 w-5">
                                        <path stroke="none" d="M0 0h24v24H0z"
                                            fill="none" />
                                        <path
                                            d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                        <path d="M7 11l5 5l5 -5" />
                                        <path d="M12 4l0 12" />
                                    </svg>
                                    {{ $t('features.feature3_download') }}
                                </div>
                            </div>
                        </ClientOnly>
                        <div class="card-title">{{ $t('features.feature3_title') }}</div>
                        <div class="card-text">{{ $t('features.feature3_text') }}</div>
                    </div>
                    <div class="card sm:col-span-2">
                        <div class="card-title">{{ $t('features.feature4_title') }}</div>
                        <div class="card-text">{{ $t('features.feature4_text') }}</div>

                        <div
                            class="text-reveal-container h-52 bg-black/10 mt-5 flex items-center justify-center relative overflow-hidden rounded-xl">
                            <ul>
                                <li>{{ $t('features.feature4_point1') }}</li>
                                <li>{{ $t('features.feature4_point2') }}</li>
                                <li>{{ $t('features.feature4_point3') }}</li>
                            </ul>
                            <div class="text-reveal absolute border-r-4 border-zinc-800 top-0 left-0 bottom-0 min-w-10 overflow-hidden magic-report-transform"
                                style="background: #1A191D; width: 20px;">
                                <div
                                    class="text-reveal-safe-container relative bg-gradient-to-br from-[#51a7ee] via-[#065799] to-[#0b4068]">
                                    <ClientOnly>
                                        <div
                                            class="absolute top-0 left-0 right-0 bottom-0">
                                            <Sparks :div-id="'particles-text'"
                                                :config="{
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
                                        color: {
                                            value: '#ffffff'
                                        },
                                        shape: {
                                            type: 'star',
                                            stroke: {
                                                width: 0,
                                                color: '#000000'
                                            },
                                            polygon: {
                                                nb_sides: 2
                                            },
                                            image: {
                                                src: 'img/github.svg',
                                                width: 100,
                                                height: 100
                                            }
                                        },
                                        opacity: {
                                            animation: {
                                                enable: true,
                                                speed: 1,
                                                sync: false,
                                            },
                                            value: { min: 0.1, max: 0.5 },
                                        },
                                        size: {
                                            value: { min: 1, max: 1.5 },
                                        },
                                        line_linked: {
                                            enable: false,
                                            distance: 150,
                                            color: '#ffffff',
                                            opacity: 1,
                                            width: 1
                                        },
                                        move: {
                                            direction: 'none',
                                            enable: true,
                                            outModes: 'out',
                                            random: true,
                                            speed: 0.1,
                                            straight: false,
                                        }
                                    },
                                    interactivity: {
                                        detect_on: 'canvas',
                                        events: {
                                            onhover: {
                                                enable: true,
                                                mode: 'bubble'
                                            },
                                            onclick: {
                                                enable: true,
                                                mode: 'push'
                                            },
                                            resize: true
                                        },
                                        modes: {
                                            grab: {
                                                distance: 400,
                                                line_linked: {
                                                    opacity: 1
                                                }
                                            },
                                            bubble: {
                                                distance: 83.91608391608392,
                                                size: 1,
                                                duration: 3,
                                                opacity: 1,
                                                speed: 3
                                            },
                                            repulse: {
                                                distance: 200,
                                                duration: 0.1
                                            },
                                            push: {
                                                particles_nb: 4
                                            },
                                            remove: {
                                                particles_nb: 2
                                            }
                                        }
                                    },
                                    detectRetina: true
                                }
                                    " class="w-full h-full" />
                                        </div>
                                    </ClientOnly>
                                    <div
                                        class="leading-6 w-full h-full items-center mx-auto pt-6 pl-12 pr-6 flex justify-center font-semibold text-white/90 text-opacity-75 text-lg">
                                        {{ $t('features.feature4_summary1') }}<br />
                                        {{ $t('features.feature4_summary2') }}<br />...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card sm:col-span-2">
                        <div
                            class="h-52 group bg-black/10 mb-5 relative overflow-hidden rounded-xl">
                            <div
                                class="absolute shadow-lg text-sm font-semibold text-center text-black/50 shadow-black/10 w-32 top-16 left-2 sm:left-10 h-40 rounded-lg bg-[#EFE9AE] px-3 group-hover:opacity-100 transition-all py-5 group-hover:-translate-y-2 group-hover:rotate-3 ">
                                {{ $t('features.feature5_notes1') }}
                            </div>
                            <div
                                class="absolute shadow-lg text-sm font-semibold text-center text-black/50 shadow-black/10 w-32 top-20 left-1/2 -ml-16 h-40 rounded-lg bg-[#3082c0] px-3 group-hover:opacity-100 transition-all py-5 group-hover:-translate-y-3 group-hover:-rotate-6">
                                {{ $t('features.feature5_notes2') }}
                            </div>
                            <div
                                class="absolute shadow-lg text-sm font-semibold text-center text-black/50 shadow-black/10 w-32 top-14 right-2 sm:right-10 h-40 rounded-lg bg-[#CDEAC0] px-3 group-hover:opacity-100 transition-all py-5 group-hover:-translate-y-2 group-hover:rotate-6">
                                {{ $t('features.feature5_notes3') }}
                            </div>
                        </div>
                        <div class="card-title">{{ $t('features.feature5_title') }}</div>
                        <div class="card-text">{{ $t('features.feature5_text') }}</div>
                        <b class="absolute bottom-5 right-5 bg-accent rounded-full py-1 px-3 text-xs text-white/90">{{ $t('features.feature1_contactforcustomization') }}</b>
                    </div>
                    <div class="card flex flex-col">
                        <div class="card-title sm:max-w-44">{{ $t('features.feature6_title') }}
                        </div>
                        <div class="card-text">{{ $t('features.feature6_text') }}</div>
                        <ClientOnly>
                            <ReportAnimation />
                        </ClientOnly>
                    </div>

                    <div class="card">
                        <div
                            class="h-52 mb-6 security-hologram overflow-hidden relative group/card">
                            <div style="background: radial-gradient(circle, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0) 23%);"
                                class="absolute z-10 flex items-center justify-center inset-0">
                                <svg class="h-7 w-7 opacity-90"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z">
                                    </path>
                                </svg>
                            </div>
                            <div
                                class="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50">
                            </div>
                            <div class="security-hologram-inner absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
                                style="mask-image: radial-gradient(250px at 4px 258px, white, transparent);">
                            </div>
                            <div class="security-hologram-inner2 absolute inset-0 rounded-2xl opacity-50 mix-blend-overlay group-hover/card:opacity-100"
                                style="mask-image: radial-gradient(250px at 125px 125px, white, transparent);">
                                <p id="security-hologram-text"
                                    class="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
                                    NAlT17XDh0A9AhVb3Bd9ZX2qf3Rdv0A4V98EY5C4cVN8yMI0i2pWvATRFBrrLOLd5F75Q4j6CNttR3bviM4YrUe0IFIwkZv5p6fEjdql4YOoEKpL8F4EHvjazxLopJl6zkUG2gTvlfxRCoAI34GT5sokBrGHV08ObmRMZd5chx274OG05nuVJS019rbOSByGwItZGdPgWOUOJDPBKvt50aluEhYeJoGJBk2VJ4RsfdaClxNEmHgybOGlrtuQEGgZ7dCJbo5yVhV7kDOSH7teTyNaetRuV7ReNF59H4Bm8Ee0eiD4AIVwodqjTWs0L1UV8cSJeujmFblBc2G4veaMzSZDg8bJ3ccpsE9k7ttIqMOt7vfyIGFtqUL2uzPCEibN1ElUBNlYQvYhycrTet5JkakInp02iGrj6UxSPXAweZXlDq9dZX73bvnzul4X0c8zqmeioR79mTGpwGavyiEnZ3iY1JL3Nud8ie8EECHObTR2Tqs0Ob0SeVuj19avhBvQmfAJQP1e1i884NL9nEj5kbvQ8Cg4GIrhgdRK8w7JRhkqyBLrvcH7b6DBteuzLJI3gVFHtU0V9HCgK99x9pyS1mcwCgzSo6CMQOfCVkSq1Z1CpyZx1EP7UDxSnEgXfBmbBdnMXYEQBkfNQTNDjOQdehEYY5olP5YeTrGJaRQdINjtuYfDRMzYvkH3pta5aVIdWfkfofpXkZ4FiihvIbIo9Cd03Y80JFHleVxKtYoHwNholn1AHjBwFM9eTePO9o2aDLN2GpvaB0c2c37cOzbZ5JTETfqSHxDjJ42K51NQ3uhyIw6rQmMkcypHYqZuEu7Jm6XzGZdOMVZJBSUBLy757TiQez3Sl2bqFKIELzWK5CU1IpTAHPZ6QGwBI6bdeISOexD6HYZA8iQmSMlMildN0zzqEefNf8GCDLOl9Rz3gEoM3rVql5GynLH2EiPB4Xk48ZtuOa5ROzgVEHs6wlaK1Ech9km9h5ewvskunqkVPMNZAsGGX6w6LBTbRGLwXOmdoyssAH41011fGDpaY5Y6JiScsm1kIertY5hx07PvbmWVf20GPn4fo2HCzwhbdlPHLbubmUq1wV6yATnDssgtbV3L8tf2if5wVMLtGMA9nmYw3kPvtN9oA3LdCMSXZtGYnTzjocJn5wxdJ93cKaVNg8896KidWN0KPa8RTftGvdI1xG8sMcPE3JGRBcRFPJQ4cHqP5efT6f3h4xWKFxe6Y9lljQxMAVxNVV2ZFW2XPMtCN5OKssYcZi7Kv94MetQxLGWQ8fsM3hBsaln8QA7GYpNIkLreelqgLsjaeg6BAkFjH4bsXgBwXKrzzhdqwRiOWMhrArTANMPzAiQC7dnGxT8SkPo9WHp9YU5M4OCfV4FLLKD9TJEC9Sf5SGOOkY4iv9gr4gTaTglZYZaryjzjbksA9qyo2hkvXXVmCXOGMjkPcByuR0PSSR7k3QiE8hjrzBSPVXGUvNRyiydLuJCihMQeWoHO
                                </p>
                            </div>
                        </div>
                        <div class="card-title">{{ $t('features.feature7_title') }}</div>
                        <div class="card-text">{{ $t('features.feature7_text') }}</div>
                    </div>
                    <div class="card flex flex-col">
                        <div class="card-title">{{ $t('features.feature8_title') }}</div>
                        <div class="card-text">{{ $t('features.feature8_text') }}</div>

                        <div
                            class=" flex-1 flex-col justify-center mt-5 bg-black/10 mb-3 cursor-default leading-6 relative overflow-hidden p-5 rounded-xl text-zinc-500 hover:text-zinc-400 transition-all text-sm">
                            <b
                                class=" text-zinc-600 font-bold opacity-50 mb-1 block">{{ $t('features.feature8_transcription') }}</b>
                                {{ $t('features.feature8_transcription1') }} <s
                                class="inline-block px-2 py-1 rounded-xl text-zinc-500/50 cursor-default hover:text-zinc-500/80 bg-black/30 mx-1">João</s>
                                {{ $t('features.feature8_transcription2') }}<br />
                                {{ $t('features.feature8_transcription3') }} <s
                                class="inline-block px-2 py-1 rounded-xl text-zinc-500/50 cursor-default hover:text-zinc-500/80 bg-black/30 mx-1">912
                                236 23</s>
                        </div>
                    </div>
                    <div class="card">
                        <div class="bg-black/10 mb-5 rounded-xl">
                            <MedgicalShredder class="mx-auto" />
                        </div>
                        <div class="card-title">
                            {{ $t('features.feature9_title') }}
                        </div>
                        <div class="card-text">
                            {{ $t('features.feature9_text') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-feedback">
            <div class="my-32">
                <div class="mx-auto w-full max-w-2xl flex flex-col mb-10">
                    <h2 class="font-book font-styling font-display mb-2 text-center text-[2rem] md:text-[3rem] tracking-tight leading-[120%] font-gradient"
                        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;">
                        {{ $t('feedback.title') }}
                    </h2>
                    <div
                        class="font-sans mb-24 mt-5 display-paragraph text-center font-medium mx-auto">
                        {{ $t('feedback.description') }}<br />
                        {{ $t('feedback.description2') }}
                    </div>
                </div>
                <div class="scroll-parent">
                    <div class="w-screen h-full relative gradient-feedback">
                        <div
                            class="h-full w-1/6 from-black/70 to-black/0 bg-gradient-to-r z-10 absolute">
                        </div>
                        <div
                            class="h-full w-1/6 right-0 from-black/70 to-black/0 bg-gradient-to-l  z-10 absolute">
                        </div>
                    </div>
                    <div class="scroll-element primary">
                        <div class="flex gap-10 px-5">
                            <div
                                class="card-feedback flex flex-col items-start justify-start gap-5">
                                <div class="card-feedback-text flex-1">
                                    "{{ $t('feedback.feedback1') }}"
                                </div>
                                <div class="flex gap-5 items-center">
                                    <img src="@/assets/feedback2.png"
                                        class="h-10 w-10 rounded-full" />
                                    <div>
                                        <div class="feedback-name">
                                            {{ $t('feedback.feedback1_name') }}
                                        </div>
                                        <div class="feedback-title">
                                            {{ $t('feedback.feedback1_role') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="card-feedback flex flex-col items-start justify-start gap-5">
                                <div class="card-feedback-text flex-1">
                                    "{{ $t('feedback.feedback2') }}"
                                </div>
                                <div
                                    class="flex gap-5 items-center justify-start">
                                    <img src="@/assets/feedback1.png"
                                        class="h-10 w-10 rounded-full" />
                                    <div>
                                        <div class="feedback-name">
                                            {{ $t('feedback.feedback2_name') }}
                                        </div>
                                        <div class="feedback-title">
                                            {{ $t('feedback.feedback2_role') }}<br />
                                            {{ $t('feedback.feedback2_role2') }}<br />
                                            {{ $t('feedback.feedback2_role3') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="card-feedback flex flex-col items-start justify-start gap-5">
                                <div class="card-feedback-text flex-1">
                                    "{{ $t('feedback.feedback3') }}"
                                </div>
                                <div class="flex gap-5 items-center">
                                    <img src="@/assets/feedback3.jpg"
                                        class="h-10 w-10 rounded-full" />
                                    <div>
                                        <div class="feedback-name">
                                            {{ $t('feedback.feedback3_name') }}
                                        </div>
                                        <div class="feedback-title">
                                            {{ $t('feedback.feedback3_role') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="scroll-element secondary">
                        <div class="flex gap-10 px-5">
                            <div
                                class="card-feedback flex flex-col items-start justify-start gap-5">
                                <div class="card-feedback-text flex-1">
                                    "{{ $t('feedback.feedback1') }}"
                                </div>
                                <div class="flex gap-5 items-center">
                                    <img src="@/assets/feedback2.png"
                                        class="h-10 w-10 rounded-full" />
                                    <div>
                                        <div class="feedback-name">
                                            {{ $t('feedback.feedback1_name') }}
                                        </div>
                                        <div class="feedback-title">
                                            {{ $t('feedback.feedback1_role') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="card-feedback flex flex-col items-start justify-start gap-5">
                                <div class="card-feedback-text flex-1">
                                    "{{ $t('feedback.feedback2') }}"
                                </div>
                                <div
                                    class="flex gap-5 items-center justify-start">
                                    <img src="@/assets/feedback1.png"
                                        class="h-10 w-10 rounded-full" />
                                    <div>
                                        <div class="feedback-name">
                                            {{ $t('feedback.feedback2_name') }}
                                        </div>
                                        <div class="feedback-title">
                                            {{ $t('feedback.feedback2_role') }}<br />
                                            {{ $t('feedback.feedback2_role2') }}<br />
                                            {{ $t('feedback.feedback2_role3') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="card-feedback flex flex-col items-start justify-start gap-5">
                                <div class="card-feedback-text flex-1">
                                    "{{ $t('feedback.feedback3') }}"
                                </div>
                                <div class="flex gap-5 items-center">
                                    <img src="@/assets/feedback3.jpg"
                                        class="h-10 w-10 rounded-full" />
                                    <div>
                                        <div class="feedback-name">
                                            {{ $t('feedback.feedback3_name') }}
                                        </div>
                                        <div class="feedback-title">
                                            {{ $t('feedback.feedback3_role') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MedgicalFaq />
        <MedgicalFooter />
    </div>
</template>
<script>
//import Sparks from '~/components/sparks.vue';
export default defineNuxtComponent({
    //components: {
    //    x
    //},
    data() {
        return {
            active: true,
            generated: false,
            todayDate: new Date().toLocaleDateString(),
            transcriptionWords: [],
            timers: [],
        }
    },
    head() {
      return {
        title: 'Medgical',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'Medgical é uma plataforma que gera notas clínicas e relatórios médicos automaticamente, através de IA e Machine Learning.'
          }
        ]
      }
    },
    mounted() {
        //verify if there is an anchor on the URL
        //this.goToSection()

        //change transcription value
        const hover = document.querySelector(".hover");
        const hoverWHalf = hover.offsetWidth / 2;
        const container = document.querySelector(".gradient-wrapper");
        const paralax = document.querySelector(".paralax");
        const asr = document.querySelector(".asr");
        const asr2 = document.querySelector(".paralax1");
        setTimeout(() => {
            this.calculateParalax(null, null, asr, paralax, asr2)
        }, 100)
        const self = this
        container.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;
            self.calculateParalax(x, y, asr, paralax, asr2)
            /*const rx = ((-(w / 2) + x) / 16);
            const ry = ((-(h / 2) + y) / 16);
            asr.style.setProperty('--x', rx + 'px');
            asr.style.setProperty('--y', ry + 'px');
            asr.style.setProperty('--r', ((rx + ry) / 8) + 'deg');
            paralax.style.setProperty('--x', rx + 'px');
            paralax.style.setProperty('--y', ry + 'px');
            paralax.style.setProperty('--r', ((rx + ry) / 8) + 'deg');

            asr2.style.setProperty('--x', rx + 'px');
            asr2.style.setProperty('--y', ry + 'px');
            asr2.style.setProperty('--r', ((rx + ry) / 8) + 'deg');*/

            //hover.style.top = e.pageY - hoverWHalf + "px";
            //hover.style.left = e.pageX - hoverWHalf + "px";
            //hover.style.opacity = "1";
        });

        //Safety hologram
        const hologram = document.querySelector(".security-hologram");
        const hoverHologram = document.querySelector(".security-hologram-inner");
        const hoverHologram2 = document.querySelector(".security-hologram-inner2");

        hologram.addEventListener("mousemove", (e) => {
            //const x = e.clientX;
            //const y = e.clientY;

            let pos = hologram.getBoundingClientRect();
            //position inside the element
            let left = e.clientY - pos.top + 125 / 2 + "px";
            let top = e.clientX - pos.left + 125 / 2 + "px";
            //for each hoverHologram
            console.log(left, top, hoverHologram)
            hoverHologram.style.maskImage = 'radial-gradient(250px at ' + top + ' ' + left + ', white, transparent)';
            hoverHologram2.style.maskImage = 'radial-gradient(250px at ' + top + ' ' + left + ', white, transparent)';
            //change security hologram text
            let text = this.generateRandomString(950);
            //change text security-hologram-text
            document.getElementById("security-hologram-text").innerText = text;
        });
        hologram.addEventListener("touchmove", (e) => {
            let pos = hologram.getBoundingClientRect();
            const x = e.touches[0].clientX;
            const y = e.touches[0].clientY;
            //position inside the element
            let left = y - pos.top + 125 / 2 + "px";
            let top = x - pos.left + 125 / 2 + "px";
            //for each hoverHologram
            console.log(left, top, hoverHologram)
            hoverHologram.style.maskImage = 'radial-gradient(250px at ' + top + ' ' + left + ', white, transparent)';
            hoverHologram2.style.maskImage = 'radial-gradient(250px at ' + top + ' ' + left + ', white, transparent)';
            //change security hologram text
            let text = this.generateRandomString(950);
            //change text security-hologram-text
            document.getElementById("security-hologram-text").innerText = text;
        });

        //detect mouse leave
        container.addEventListener("mouseleave", () => {
            hover.style.opacity = "0";
        });

        //text reveal animation
        const textRevealContainer = document.querySelector(".text-reveal-container");
        const textRevealSafeContainer = document.querySelector(".text-reveal-safe-container");
        //add same width to text-reveal-safe-container than text-reveal-container
        textRevealSafeContainer.style.width = textRevealContainer.offsetWidth + "px";
        textRevealSafeContainer.style.height = textRevealContainer.offsetHeight + "px";

        const textReveal = document.querySelector(".text-reveal");
        textRevealContainer.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;
            let pos = textRevealContainer.getBoundingClientRect();
            //calculate new width of the textReveal
            let width = x - pos.left + "px";
            textReveal.style.width = width;
        });

        textRevealContainer.addEventListener("touchmove", (e) => {
            //const x = e.clientX;
            //const y = e.clientY;
            const x = e.touches[0].clientX;
            //const y = e.touches[0].clientY;
            let pos = textRevealContainer.getBoundingClientRect();
            //calculate new width of the textReveal
            let width = x - pos.left + "px";
            textReveal.style.width = width;
        });

        /*hologram.addEventListener("mouseleave", () => {
            hoverHologram.style.opacity = "0";
        });*/
    },
    methods: {
        goToSection() {
            let nuxt = document.getElementById("__nuxt");
            if (process.client && window.location.hash) {
                console.log(window.location.hash);
                let anchor = window.location.hash
                let element = document.getElementById(anchor.substring(1));
                console.log(element)
                if (element) {
                    nuxt.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: "instant",
                    });
                    /*element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });*/
                }
            } else {
                nuxt.scrollTo({
                    top: 0,
                    behavior: "instant",
                });
            }
        },
        calculateParalax(x = null, y = null, asr, paralax, asr2) {
            const w = window.innerWidth;
            const h = window.innerHeight;
            if (x == null) {
                x = w / 2;
            }
            if (y == null) {
                y = h / 2;
            }
            const rx = ((-(w / 2) + x) / 16);
            const ry = ((-(h / 2) + y) / 16);
            if (asr) {
                asr.style.setProperty('--x', rx + 'px');
                asr.style.setProperty('--y', ry + 'px');
                asr.style.setProperty('--r', ((rx + ry) / 8) + 'deg');
            }
            if (paralax) {
                paralax.style.setProperty('--x', rx + 'px');
                paralax.style.setProperty('--y', ry + 'px');
                paralax.style.setProperty('--r', ((rx + ry) / 8) + 'deg');
            }

            if (asr2) {
                asr2.style.setProperty('--x', rx + 'px');
                asr2.style.setProperty('--y', ry + 'px');
                asr2.style.setProperty('--r', ((rx + ry) / 8) + 'deg');
            }
        },
        generateRandomString(length) {
            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        },
        reset() {
            this.generated = false
            this.$refs.transcriptorbot.start()
        }
    },
    watch: {
        $route(to, from) {
            this.goToSection()
        },
    }
})
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.paralax {
    translate: calc(var(--x, 0) / 3) calc(var(--y, 0) / 2);
}

.paralax .asr {
    transition: transform 1s;
    box-shadow: calc(var(--x, 0) / 2.1) calc(var(--y, 0) / 2.1) 124px #51a7ee43, calc(var(--x, 0) / 2.1) calc(var(--y, 0) / 2.1) 28px #51a7ee3b, 0 0 1px #51a7ee5b;
}
/* Old code 
.paralax .asr {
    transition: transform 1s;
    box-shadow: calc(var(--x, 0) / 2.1) calc(var(--y, 0) / 2.1) 124px #7036ec7a, calc(var(--x, 0) / 2.1) calc(var(--y, 0) / 2.1) 38px #4e24da5e, 0 0 1px #ffffff87;
}*/

.paralax1 {
    translate: calc(var(--x, 0) / 4) calc(var(--y, 0) / 3);
    transition: opacity 0.50s;
}

.card ul {
    list-style-type: disc;
    padding: 0px 20px;
    line-height: 1.5;
    margin: 0;
    opacity: 0.7;
    @apply font-semibold
}
</style>