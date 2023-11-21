// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    'github:azoom-phan-hong-nam/azoom-base'
  ],
  modules: ['@nuxtjs/tailwindcss'],
})
