import { defineNuxtPlugin } from "#app";
import {
  defineResolvers,
  plugin,
} from "@marvr/storyblok-rich-text-vue-renderer";
import BlokVideo from "~/components/blok/Video.vue";
import BlokDisclosure from "~/components/blok/Disclosure.vue";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(
    plugin({
      resolvers: defineResolvers({
        components: {
          "blok-video": ({ fields }) =>
            h(BlokVideo, {
              blok: { youtube_video_id: fields.youtube_video_id },
            }),
          "blok-disclosure": ({ fields }) =>
            h(
              BlokDisclosure,
              { blok: { heading: fields.heading } },
              () => fields.text,
            ),
        },
      }),
    })
  );
});
