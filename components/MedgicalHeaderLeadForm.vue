<template>
    <header
        class=" absolute hide-on-modal z-30 top-0 left-0 right-0 container">
        <nav
            class="flex items-center justify-between pl-6 pr-3 md:pr-0 md:pl-8 h-28">
            <nuxt-link to="/" class="logo"><img class="h-6"
                    src="~/assets/logo-white.svg" alt="Medgical" /></nuxt-link>
            <div class="flex gap-3">
                <button class="text-sm font-semibold" :class="{
                            'opacity-70': locale !== 'pt',
                            'opacity-100': locale === 'pt'
                        }" @click="setLocale('pt')">PT</button>
                <button class="text-sm font-semibold mr-2" :class="{
                            'opacity-70': locale !== 'en',
                            'opacity-100': locale === 'en'
                        }" @click="setLocale('en')">EN</button>
            </div>
        </nav>
    </header>
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