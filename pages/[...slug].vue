<template>
  <NuxtLayout name="default">
    <StoryblokComponent :blok="story.content" :story="story"/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const route = useRoute();
const storyblokApi = useStoryblokApi();

// construct the correct path to get the right story from storyblok 
const slug = route.params.slug;
let path = `cdn/stories/${Array.isArray(slug) ? slug.join("/") : slug}`;
// special case for root story as this should map to the home story
if (path === "cdn/stories/") {
  path = "cdn/stories/home";
}

// fetch the story before rendering the page ('usally at the server')
const { data: story } = await useAsyncData(path, async () => {
  const { data } = await storyblokApi.get(path, {
    version: "draft",
  });
  return data.story;
});

// enable bridge for WYSIWYG integration
onMounted(() => {
  useStoryblokBridge(story.value?.id, (newStory) => (story.value = newStory));
});
</script>
