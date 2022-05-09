<template>
<NuxtLayout name="default">
  <component
    v-if="data.story.content.component"
    :is="data.story.content.component"
    :key="data.story.content._uid"
    :blok="data.story.content"
    :story="data.story"
  />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useStoryblokApi, useStoryblokBridge } from "@storyblok/vue";
const route = useRoute();


// fetch the story before rendering the page ('usally at the server')
const slug = route.params.slug;
const path = `cdn/stories/${Array.isArray(slug)? slug.join('/'): slug}`
console.log('PATHMATCH', path);
// fetch the story before rendering the page ('usally at the server')
const storyblokApi = useStoryblokApi();
const { data } = await useAsyncData(path, async () => {
  const { data } = await storyblokApi.get(path, {
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
