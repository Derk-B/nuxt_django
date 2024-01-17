// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/main.sass" as *\n'
        }
      }
    }
  },

  modules: [
    "@pinia/nuxt"
  ]
})