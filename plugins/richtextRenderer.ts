import { defineNuxtPlugin } from "#app";
import {
  defineResolvers,
  plugin,
} from "@marvr/storyblok-rich-text-vue-renderer";
import BlokVideo from "~/components/blok/Video.vue";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(
    plugin({
      resolvers: defineResolvers({
        components: {
          "blok-video": ({ fields }) =>
            h(BlokVideo, { blok: { youtube_video_id: fields.youtube_video_id} }),
        },
      }),
    })
  );
});
