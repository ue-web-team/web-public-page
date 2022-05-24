<template>
  <div class="p-6 bg-red-200 shadow-xl rounded-xl h-full">
    <div class="h-56 relative flex flex-col justify-end">
      <img class="absolute w-full h-full object-cover" :src="blok.content.image.filename" :alt="blok.content.image.alt">
      <h2 class="relative text-white font-semibold text-xl px-4 py-8 bg-gradient-to-b from-transparent to-black">{{title}}</h2>
    </div>
    
    <NuxtLink
      :to="to"
      class="text-lg font-semibold mt-4 leading-7 block transition-colors duration-300 !hover:text-brown"
    >
      <div class="line-clamp">
        <RichTextRenderer :document="intro" />
      </div>
      
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
  if (props.blok?.full_slug) {
    return "/" + props.blok.full_slug;
  }
  return "/" + standalone.value?.full_slug;
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

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
