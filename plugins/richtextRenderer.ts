import { defineNuxtPlugin } from "#app";
import {
  defineResolvers,
  plugin,
} from "@marvr/storyblok-rich-text-vue-renderer";
import OptImage from "~/components/opt/Image.vue";
import Video from  "~/storyblok/Video.vue";
import Disclosure from "~/storyblok/Disclosure.vue";
import TeaserLink from "~/storyblok/TeaserLink.vue";
import { NodeTypes } from "@marvr/storyblok-rich-text-types";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(
    plugin({
      resolvers: defineResolvers({
        [NodeTypes.IMAGE]: ({ attrs }) =>
          h(OptImage, {
            image: { filename: attrs.src, alt: attrs.alt },
            params: "0x500",
          }),
        components: {
          "video": ({ fields }) =>
            h(Video, {
              blok: { youtube_video_id: fields.youtube_video_id },
            }),
          "disclosure": ({ fields }) =>
            h(
              Disclosure,
              { blok: { heading: fields.heading } },
              () => fields.text
            ),
          "teaser-link": ({ fields }) =>
            h(TeaserLink, { blok: { link: fields.link, embedded: true } }),
        },
      }),
    })
  );
});

