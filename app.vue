<template>
  <div>
    <NuxtPage />
  </div>
</template>


<script lang="ts" setup>
import { useStoryblokApi } from "@storyblok/vue";

const storyblokApi = useStoryblokApi();

// fetch all blog articles
const articles = useArticles();
console.log("Already present", articles);
if (!articles.value) {
  const { data } = await storyblokApi.get("cdn/stories/", {
    starts_with: "articles/",
    version: "draft",
  });
  console.log("got articles", data);
  articles.value = data.stories;
}

</script>