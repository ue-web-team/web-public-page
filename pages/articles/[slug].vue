<template>
  <NuxtLayout name="default">
    <section>
      <BlokArticle :blok="data.story.content" :story="data.story" />
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useStoryblokApi, useStoryblokBridge } from "@storyblok/vue";

const route = useRoute();
const storyblokApi = useStoryblokApi();

// fetch the story before rendering the page ('usally at the server')
const path = `cdn/stories/articles/${route.params.slug}`;
const { data } = await useAsyncData(path, async () => {
  const { data } = await storyblokApi.get(path, {
    version: "draft",
  });
  return data;
});

const articles = useArticles();
onMounted(() => {
  useStoryblokBridge(
    data.value.story.id,
    (story) => (data.value.story = story)
  );
});
</script>
