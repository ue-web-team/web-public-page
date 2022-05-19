import { defineNuxtPlugin } from "#app";
import {
  defineResolvers,
  plugin,
} from "@marvr/storyblok-rich-text-vue-renderer";
import OptImage from "~/components/opt/Image.vue";
import BlokVideo from "~/components/blok/Video.vue";
import BlokDisclosure from "~/components/blok/Disclosure.vue";
import BlokTeaserLink from "~/components/blok/TeaserLink.vue";
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
          "blok-video": ({ fields }) =>
            h(BlokVideo, {
              blok: { youtube_video_id: fields.youtube_video_id },
            }),
          "blok-disclosure": ({ fields }) =>
            h(
              BlokDisclosure,
              { blok: { heading: fields.heading } },
              () => fields.text
            ),
          "blok-teaser-link": ({ fields }) =>
            h(BlokTeaserLink, { blok: { link: fields.link, embedded: true } }),
        },
      }),
    })
  );
});

