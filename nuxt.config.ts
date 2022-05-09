import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  components: {
    global: true,
    dirs: ["~/components",{ global: true, path: '~/components/blok' }],
  },
  build: {
    // storyblok/nuxt needed because of this https://github.com/storyblok/storyblok-nuxt/issues/81
    //transpile: ["#app"],
    transpile: ["@marvr/storyblok-rich-text-vue-renderer"],
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
