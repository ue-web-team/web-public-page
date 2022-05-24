import { defineNuxtConfig } from "nuxt";
import fs from 'fs';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      https: {
        key: fs.readFileSync('cert/localhost+2-key.pem'),
        cert: fs.readFileSync('cert/localhost+2.pem'),
      },
      hmr: {
        protocol: 'wss'
      }
    }
  },
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
    '@vueuse/nuxt',
    '@formkit/nuxt',
    ["@storyblok/nuxt", { 
      accessToken: process.env.NUXT_PUBLIC_STORYBLOK_API_TOKEN,
      bridge: process.env.NODE_ENV !== "production",
      https: true
    }],
  ],
  
  buildModules: [
    'nuxt-windicss',
  ],
});
