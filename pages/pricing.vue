<template>
    <div class="gradient-wrapper">
        <MedgicalHeader />
        <div class="sparks-background opacity-90" style="z-index:0"></div>
        <div class="section-pricing relative">
            <div class="mt-52 mb-32">
                <div class="mx-auto w-full max-w-xs md:max-w-2xl flex flex-col mb-10">
                    <h2 class="font-book font-styling font-display mb-2 text-center text-[2.5rem] md:text-[3rem] tracking-tight leading-[120%] font-gradient"
                        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;">
                        {{ $t('pricing.title') }}
                    </h2>
                    <div
                        class="font-sans mb-24 display-paragraph text-center font-medium">
                        {{ $t('pricing.description') }}
                    </div>
                </div>

                <div class="grid mx-auto w-full grid-cols-1 md:grid-cols-2 max-w-4xl items-center px-8 gap-8 md:gap-0">
                    <div
                        class="rounded-2xl md:rounded-r-none max-w-md mx-auto p-10 ring-2 ring-[#CDEAC0]/90 bg-zinc-800">
                        <h3 id="tier-hobby" class="text-[#CDEAC0] leading-7 font-semibold text-base">
                            {{ $t('pricing.medical_license') }}
                        </h3>
                        <div>
                            <s class=" text-accent">1.99€/{{ $t('pricing.hour') }}</s> <span class="text-sm ml-2 bg-[#CDEAC0] text-black/70 px-3 py-0.5 whitespace-nowrap inline-block font-semibold rounded-full">-50% {{ $t('pricing.limited_offer') }}*</span>
                        </div>
                        <p class=" mt-4 flex gap-2 items-baseline">
                            <span class="font-bold text-5xl">0.99€</span>
                            <span class="text-white/70 text-base">/{{ $t('pricing.hour') }}</span>
                        </p>
                        <p class=" leading-7 text-white/70 mt-6 font-medium">
                            {{ $t('pricing.medical_license_description') }}
                        </p>
                        <p class="text-white/70 mt-2 font-medium text-xs">*{{ $t('pricing.limited_description') }}</p>
                        <ul role="list" class="feature-list-pricing">
                            <li class="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.medical_license_point1') }}
                            </li>
                            <li><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.medical_license_point2') }}
                            </li>
                            <li><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" >
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.medical_license_point3') }}
                            </li>
                            <li ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" >
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.medical_license_point4') }}
                            </li>
                        </ul>
                        <button @click="openModal('medical_license')"
                            class=" text-sm mt-10 block cursor-pointer font-semibold py-2 w-full rounded-md text-center hover:bg-[#b6d8a6] bg-[#CDEAC0] text-black/70">
                            {{ $t('navbar.try') }}
                    </button>
                    </div>
                    <div class="p-10 max-w-md mx-auto ring-1 ring-white/10 bg-zinc-800 rounded-2xl relative shadow-lg">
                        <h3 id="tier-enterprise" class="text-[#FF6B6B] leading-7 font-semibold text-base">
                            {{ $t('pricing.hospital_license') }}
                        </h3>
                        <p class=" mt-4 flex gap-2 items-baseline"><span
                                class="font-bold text-3xl">
                                {{ $t('pricing.hospital_license_price') }}
                          </span></p>
                        <p class="leading-7 text-white/70 mt-6 font-medium">
                            {{ $t('pricing.hospital_license_description1') }}<br />
                            {{ $t('pricing.hospital_license_description2') }}
                        </p>
                        <ul role="list" class="feature-list-pricing">
                            <li ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.hospital_license_point1') }}
                            </li>
                            <li ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.hospital_license_point2') }}
                            </li>
                            <li ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.hospital_license_point3') }}
                            </li>
                            <li ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.hospital_license_point4') }}
                                </li>
                            <li ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.hospital_license_point5') }}
                            </li>
                            <li ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('pricing.hospital_license_point6') }}
                            </li>
                        </ul><button @click="openModal('hospital_clinics_license')"
                            class="text-sm mt-10 block cursor-pointer font-semibold py-2 w-full rounded-md text-center hover:bg-[#ed5e5e] bg-[#FF6B6B] text-white">
                            {{ $t('pricing.contactus') }}
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <MedgicalStats />
        <MedgicalFaq />
        <MedgicalFooter />
    </div>
</template>

<script>
export default {
    name: 'MedgicalLandingPricing',
    methods: {
        openModal(cta) {
            this.$store.commit('changeModalState', true)
            this.$store.commit('modalReason', cta)
        }
    },
}
</script>
