// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-particles', '@nuxtjs/i18n', "nuxt-gtag"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'pt',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'pt',
        iso: 'pt-PT',
        name: 'Português',
      },
    ]
  },

  gtag: {
    id: 'G-NG7C66SSFB'
  },

  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.NUXT_API_ENDPOINT,
    },
  },

  app: {
    head: {
      title: 'Medgical - You save lives, we note it',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-TileColor', content: '#2d89ef' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'description', content: 'Medgical: Plataforma de IA para criar registos clínicos automáticos, personalizados e seguros. Reduza o tempo de documentação e melhore a eficiência no cuidado ao paciente.' },
        { name: 'og:title', content: 'Medgical - You save lives, we note it' },
        { name: 'og:description', content: 'Medgical: Plataforma de IA para criar registos clínicos automáticos, personalizados e seguros. Reduza o tempo de documentação e melhore a eficiência no cuidado ao paciente.' },
        { name: 'og:image', content: 'https://www.medgical.ai/android-chrome-384x384.png' },
        { name: 'og:url', content: 'https://www.medgical.ai' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Medgical - You save lives, we note it' },
        { name: 'twitter:description', content: 'Medgical: Plataforma de IA para criar registos clínicos automáticos, personalizados e seguros. Reduza o tempo de documentação e melhore a eficiência no cuidado ao paciente.' },
        { name: 'twitter:image', content: 'https://www.medgical.ai/android-chrome-384x384.png' },
        { name: 'twitter:site', content: '@medgical' },
        { name: 'twitter:creator', content: '@medgical' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#044477' },
      ],

    },
  },

  compatibilityDate: '2024-08-03',
})
