<template>
    <header
        class="fixed hide-on-modal md:absolute z-30 top-0 left-0 right-0 container bg-zinc-800/50 shadow-xl backdrop-blur-xl shadow-black/10 ring-1 ring-inset ring-white/5 rounded-b-2xl md:ring-0 md:bg-transparent md:shadow-none">
        <nav
            class="flex items-center justify-between py-4 pr-4 pl-6 md:px-8 md:py-6">
            <nuxt-link to="/" class="logo"><img class="h-6"
                    src="~/assets/logo-white.svg" alt="Medgical" /></nuxt-link>
            <ul class="hidden md:flex gap-9 text-base">
                <li><nuxt-link :to="localePath('/#features')">
                    {{ $t('navbar.features') }}
                </nuxt-link>
                </li>
                <li><nuxt-link :to="localePath('/pricing')">
                    {{ $t('navbar.pricing') }}
                </nuxt-link></li>
                <li><nuxt-link :to="localePath('/about')">
                    {{ $t('navbar.about') }}
                </nuxt-link>
                </li>
                <li><nuxt-link to="https://app.medgical.ai" class="flex gap-1 items-center">
                    {{ $t('navbar.app') }}
                    <svg class="text-white h-4 w-4" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </nuxt-link>
                </li>
            </ul>
            <div class="hidden md:flex gap-3">
                <button class="text-sm font-semibold" :class="{
                            'opacity-70': locale !== 'pt',
                            'opacity-100': locale === 'pt'
                        }" @click="setLocale('pt')">PT</button>
                <button class="text-sm font-semibold mr-2" :class="{
                            'opacity-70': locale !== 'en',
                            'opacity-100': locale === 'en'
                        }" @click="setLocale('en')">EN</button>
                <JoinButton cta="try" />
            </div>
            <button v-if="!isMenuExpanded" class="p-2 rounded-md md:hidden"
                @click="expandMenu">
                <svg class="h-6 w-6 opacity-75"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </button>
            <button v-else class="p-2 rounded-md md:hidden" @click="expandMenu">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
        </nav>
        <div class="menu-mobile text-right opacity-80 overflow-hidden text-xl md:hidden transition-all duration-500"
            :class="{
                'h-[21.5rem]': isMenuExpanded,
                'h-0': !isMenuExpanded
            }">
            <div class="py-7 px-7 flex flex-col gap-8 items-right">
                <nuxt-link :to="localePath('/#features')" class="nav"
                    @click="closeMenu()">  {{ $t('navbar.features') }}</nuxt-link>
                <nuxt-link :to="localePath('/pricing')" class="nav" @click="closeMenu()">
                    {{ $t('navbar.pricing') }}
                </nuxt-link>
                <nuxt-link :to="localePath('/about')" class="nav" @click="closeMenu()">
                    {{ $t('navbar.about') }}
                </nuxt-link>
                <nuxt-link to="https://app.medgical.ai" class="nav flex gap-1 items-center justify-end">
                    {{ $t('navbar.app') }}
                    <svg class="text-white h-4 w-4" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </nuxt-link>
                <div class="flex justify-between items-center">
                    <div class="flex gap-3 items-center">
                        <button class="text-base font-semibold" :class="{
                            'opacity-70': locale !== 'pt',
                            'opacity-100': locale === 'pt'
                        }" @click="setLocale('pt')">PT</button>
                        <button class="text-base font-semibold mr-2" :class="{
                            'opacity-70': locale !== 'en',
                            'opacity-100': locale === 'en'
                        }" @click="setLocale('en')">EN</button>
                    </div>
                    <JoinButton @click="closeMenu()" cta="try" />
                </div>
            </div>
        </div>
    </header>
    <div class="hidden md:block fixed z-40 transition-all top-0 left-0 right-0 p-5 ease-in-out"
        :class="{
                'translate-y-0': isSubMenuExpanded,
                '-translate-y-full': !isSubMenuExpanded
            }">
        <div
            class="transition-all flex items-center gap-6 mx-auto max-w-2xl bg-black/30 backdrop-blur-md shadow-black/20 shadow-xl ring-1 ring-inset ring-white/5 rounded-full py-2 pl-7 pr-2">
            <nuxt-link :to="localePath('/')" class="logo"><img class="h-6"
                    src="~/assets/logo-white.svg" alt="Medgical" /></nuxt-link>
            <ul
                class="submenu flex-1 flex gap-9 justify-center text-sm whitespace-nowrap font-semibold text-white/50 items-center">
                <li><nuxt-link :to="localePath('/#features')">  {{ $t('navbar.features') }}</nuxt-link>
                </li>
                <li><nuxt-link :to="localePath('pricing')">  {{ $t('navbar.pricing') }}</nuxt-link></li>
                <li><nuxt-link :to="localePath('about')">  {{ $t('navbar.about') }}</nuxt-link>
                </li>
            </ul>
            <JoinButton small cta="try" />
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        let internationalization = useI18n()
        const locale = internationalization.locale
        const setLocale = internationalization.setLocale
        return { locale, setLocale }
    },
    data() {
        return {
            isMenuExpanded: false,
            isSubMenuExpanded: false
        }
    },
    /*computed: {
        localePath() {
            return this.$localePath
        }
    },*/
    methods: { 
        expandMenu() {
            this.isMenuExpanded = !this.isMenuExpanded
        },
        closeMenu() {
            this.isMenuExpanded = false
        },
    },
    mounted() {
        //add scroll event listener to #__nuxt
        document.getElementById('__nuxt').addEventListener('scroll', () => {
            //if scroll is more than 100px, expand the submenu
            if (document.getElementById('__nuxt').scrollTop > window.innerHeight / 2) {
                this.isSubMenuExpanded = true
            } else {
                this.isSubMenuExpanded = false
            }
        })
    }
    /*mounted() {
        document.querySelectorAll('a').forEach(anchor => {
            let anc = anchor.getAttribute('href')?.split('#')[1]
            if (anc) {
                anchor.addEventListener('click', function (e) {
                    //cancel link click
                    e.preventDefault();
                    //scroll to the element
                    /*setTimeout(() => {
                        document.getElementById(anc)?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }, 100);
                });
            }
        });
    },*/
}
</script>