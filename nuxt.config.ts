// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@picocss/pico/css/pico.min.css'
  ],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },
})
