<template>
  <div
    v-editable="blok"
    :class="{ 'md:flex-row-reverse': blok.left }"
    class="flex flex-col-reverse md:flex-row max-w-5xl mx-auto my-8"
  >
    <div class="hidden md:block relative h-96 w-1/2">
      <OptImage
        class="object-cover h-96 inset-y-0 w-full"
        :image="blok.image"
        loading="lazy"
        params="0x384"
      />
      <svg
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        :class="{ 'right-full': blok.left }"
        class="hidden md:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
      >
        <polygon points="50,0 100,0 50,100 0,100"></polygon>
      </svg>
    </div>

    <article class="relative px-4 sm:px-6">
      <div class="relative">
        <OptImage
          class="md:hidden object-cover absolute rounded-lg h-full w-full"
          :image="blok.image"
          loading="lazy"
          params="0x202"
        />
        <div class="<md:(relative p-8 mb-4 text-white bg-black/40 rounded-lg)">
          <h2
            class="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-green-100 md:text-green-700 mb-3 <md:mt-18"
          >
            {{ blok.heading }}
          </h2>
          <p
            class="text-3xl md:mb-8 lg:text-4xl leading-none font-extrabold tracking-tight"
          >
            {{ blok.subheading }}
          </p>
        </div>
      </div>

      <div class="prose <sm:prose-sm">
        <rich-text-renderer :document="blok.description" />
      </div>
    </article>
  </div>
</template>

<script setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
