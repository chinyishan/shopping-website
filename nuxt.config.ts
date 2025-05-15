// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@unocss/nuxt"],
  css: ["@unocss/reset/tailwind.css"],
  runtimeConfig: {
    public: {
      apiBase: "https://fakestoreapi.com",
    },
  },
  ssr: true,
  app: {
    head: {
      title: "Nuxt3 購物網站",
      meta: [
        { name: "description", content: "一個基本的 Nuxt3 SSR 電商網站" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});
