// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    baseURL: '/todo/',
  },

  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/style/global.sass" as *\n',
        }
      }
    }
  }
})
