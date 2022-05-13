<template>
  <div
    class="my-24 px-4 sm:px-6 max-w-xl md:max-w-3xl mx-auto"
    v-editable="blok"
  >
    <h1
      class="font-extrabold text-shadow-sharp font-display text-green-400 text-3xl sm:text-5xl lg:text-6xl"
    >
      <span class="text-red-400">{{ first }}</span>
      {{ rest }}
    </h1>
    <div class="font-display italic text-gray-600 text-sm my-4 lg:my-6">
      <p>Publicerad: {{ new Date(story.created_at).toLocaleString() }}</p>
    </div>

    <div class="prose prose-sm md:prose-lg lg:prose-xl">
      <img
        class="transform rotate-2"
        :src="blok.image.filename"
        sizes="sm:100vw md:80vw lg:600px xl:800px"
      />
      <rich-text-renderer :document="blok.intro" />
      <rich-text-renderer :document="blok.content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
  story: {
    type: Object,
    required: true,
  },
});

const first = computed(() => {
  if (props.blok.title) {
    const arr = props.blok.title.split(" ");
    return arr[0];
  }
  return "Fallback ";
});
const rest = computed(() => {
  if (props.blok.title) {
    const arr = props.blok.title.split(" ");
    arr.shift();
    return arr.join(" ");
  }
  return "title";
});
</script>
