import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  meta: {
    title: 'Public page test',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt3 + Storyblok + windicss',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: {
    global: true,
    dirs: ["~/components",{ global: true, path: '~/components/blok' }],
  },
  
  build: {
    // storyblok/nuxt needed because of this https://github.com/storyblok/storyblok-nuxt/issues/81
    //transpile: ["#app"],
    transpile: ["@marvr/storyblok-rich-text-vue-renderer", "vue-marquee-text-component"],
  },
  
  runtimeConfig: {
    public: {
      storyblokApiUrl: '',
      storyblokApiToken: '',
    }
  },
  
  modules: [
    //["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_TOKEN }],
    // ...
  ],
  
  buildModules: [
    'nuxt-windicss',
  ],
});
