import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(({ vueApp }) => {
  const config = useRuntimeConfig();
  vueApp.use(StoryblokVue, {
    accessToken: config.public.storyblokApiToken,
    use: [apiPlugin],
  });
});