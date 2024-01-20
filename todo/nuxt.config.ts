// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],

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
