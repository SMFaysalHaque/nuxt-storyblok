// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'w7xKuEr9hqEEHmwRFyGpIQtt',
        apiOptions: {
           region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    optimizeDeps: { exclude: ["fsevents"] }
  }
})

