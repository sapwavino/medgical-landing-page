<template>
    <div>
        <div class="gradient-wrapper min-h-screen">
            <div class="sparks-background pointer-events-none opacity-90"
                style="z-index:0"></div>
            <MedgicalHeader />

            <div class="section-aboutus z-10 relative container">
                <div class="mb-32 mt-52">
                    <div class="mx-auto w-full max-w-2xl flex flex-col mb-10">
                        <h2 class="font-book font-styling font-display mb-2 text-center text-[2.5rem] md:text-[3rem] tracking-tight leading-[120%] font-gradient"
                            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;">
                            It's medgical! ✨
                        </h2>
                    </div>
                </div>
                <p
                    class="font-sans text-lg text-white/60 text-left font-medium w-full max-w-xl mx-auto mb-20 px-10">
                    <span
                        class=" float-left leading-10 text-6xl pt-1.5 pr-2.5">
                        {{ $t('about.letter') }}
                    </span>
                    {{ $t('about.text') }}
                </p>
            </div>

            <div class="section-team">
                <div class=" mb-40 mt-64">
                    <div class="mx-auto w-full max-w-2xl flex flex-col mb-10">
                        <h2 class="font-book font-styling font-display mb-2 text-center text-[2.5rem] md:text-[3rem] tracking-tight leading-[120%] font-gradient"
                            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;">
                            {{ $t('about.team_title') }}
                        </h2>
                        <div
                            class="mb-24 font-sans display-paragraph text-center font-medium max-w-xl mx-auto px-10">
                            {{ $t('about.team_description') }}
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-2xl mx-auto mt-20">
                        <div class="flex flex-col items-center">
                            <img src="~/assets/team/BrunoC_darkblue.jpg"
                                alt="Bruno Castilho"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">
                                Bruno
                                Castilho</h3>
                            <p class="text-center leading-5 text-sm">
                                CEO
                            </p>
                            <a href="https://www.linkedin.com/in/bruno-m-castilho/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/team/TeresaT_darkblue.jpg"
                                alt="Teresa Tong"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">
                                Teresa Tong</h3>
                            <p class="text-center leading-5 text-sm">
                                COO
                            </p>
                            <a href="https://www.linkedin.com/in/teresasytong/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/team/MiguelR_darkblue.jpg"
                                alt="Miguel Regedor"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">Miguel Regedor
                            </h3>
                            <p class="text-center leading-5 text-sm">
                                CTO
                            </p>
                            <a href="https://www.linkedin.com/in/regedor/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/team/ArmandoV_darkblue.jpg"
                                alt="Armando Vieira"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">Armando
                                Vieira</h3>
                            <p class="text-center leading-5 text-sm">
                                CSO
                            </p>
                            <a href="https://www.linkedin.com/in/asvieira/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/team/FilipaC_darkblue.jpg"
                                alt="Filipa Cordeiro"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">Filipa Cordeiro</h3>
                            <p class="text-center leading-5 text-sm">
                                Medical Officer
                            </p>
                            <a href="https://www.linkedin.com/in/filipafc/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/team/BrunoS_darkblue.jpg"
                                alt="Bruno Silva"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">Bruno Silva</h3>
                            <p class="text-center leading-5 text-sm">
                                Lead UX Engineer
                            </p>
                            <a href="https://www.linkedin.com/in/youfoundbruno/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/team/EduardoN_darkblue.jpg"
                                alt="Team member"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">Eduardo Noronha
                            </h3>
                            <p class="text-center leading-5 text-sm">
                                Backend Software Engineer
                            </p>
                            <a href="https://www.linkedin.com/in/eduardoperesnoronha/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="~/assets/team/LuisaV_darkblue.jpg"
                                alt="Luisa Vieira"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">Luisa Vieira
                            </h3>
                            <p class="text-center leading-5 text-sm">
                                Founders Associate
                            </p>
                            <a href="https://www.linkedin.com/in/luisa-vieira/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center">
                            <img  src="~/assets/team/TiagoF_darkblue.jpg"
                                alt="Tiago Freitas"
                                class="rounded-full w-32 h-32 mb-4" />
                            <h3 class="font-bold text-xl mb-2">Tiago Freitas</h3>
                            <p class="text-center leading-5 text-sm">
                                Backend Software Engineer
                            </p>
                            <a href="https://www.linkedin.com/in/tiagofreitas85/"
                                class=" opacity-80 hover:opacity-100 mt-2 cursor-pointer"
                                target="_blank">
                                <svg class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path
                                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <MedgicalFooter />
        </div>
    </div>
</template>