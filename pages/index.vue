<template>
  <component
    v-if="data.story.content.component"
    :is="data.story.content.component"
    :key="data.story.content._uid"
    :blok="data.story.content"
  />
</template>

<script lang="ts" setup>
import { useStoryblokApi, useStoryblokBridge } from "@storyblok/vue";

// fetch the story before rendering the page ('usally at the server')
const storyblokApi = useStoryblokApi();
const { data } = await useAsyncData("index", async () => {
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
  return data;
});

// enable bridge for WYSIWYG integration
onMounted(() => {
  useStoryblokBridge(
    data.value.story.id,
    (story) => (data.value.story = story)
  );
});
</script>
