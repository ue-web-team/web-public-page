<template>
  <div class="mb-8" v-if="standalone">
    <h2
      class="font-display text-white uppercase text-shadow-sharp font-bold mb-4 text-2xl lg:text-4xl"
    >
      {{ title }}
    </h2>
    <NuxtLink
      :to="to"
      class="prose prose-sm md:prose-lg lg:prose-xl block transition-colors duration-300 !hover:text-brown"
    >
      <RichTextRenderer v-if="intro" :document="intro" />
    </NuxtLink>
  </div>
  <div v-else class="py-6 px-6 shadow-sharp">
    <h2
      class="font-display text-white uppercase text-shadow-sharp font-bold mb-4 text-2xl lg:text-4xl"
    >
      {{ title }}
    </h2>
    <NuxtLink
      :to="to"
      class="prose prose-sm md:prose-lg lg:prose-xl block transition-colors duration-300 !hover:text-brown"
    >
      <RichTextRenderer v-if="intro" :document="intro" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";
import { useStoryblokApi } from "@storyblok/vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const title = computed(
  () => props.blok?.content?.title || standalone.value?.content?.title
);
const intro = computed(
  () => props.blok?.content?.intro || standalone.value?.content?.intro
);
const to = computed(() => {
  if(props.blok?.full_slug) {
    return '/' + props.blok.full_slug;
  }
  return '/' + standalone.value?.full_slug;
});

const standalone = ref();

if (props.blok?.link?.cached_url) {
  const storyblokApi = useStoryblokApi();
  const path = `cdn/stories/${props.blok.link.cached_url}`;
  const { data } = await useAsyncData(path, async () => {
    // only get specified article
    const { data } = await storyblokApi.get(path, {
      version: "draft",
    });
    return data.story;
  });
  standalone.value = data.value;
}
</script>
