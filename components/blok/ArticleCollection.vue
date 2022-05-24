<template>
  <div v-editable="blok">
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-content-stretch">
      <li v-for="(article, index) in articles" :key="article._uid">
        <BlokArticleItem v-if="article.content" :blok="article"></BlokArticleItem>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useStoryblokApi } from "@storyblok/vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// fetch the story before rendering the page ('usally at the server')
const storyblokApi = useStoryblokApi();

const { data: articles } = await useAsyncData(
  props.blok.articles.join(","),
  async () => {
    // only get specific articles
    if (props.blok.articles.length) {
      const { data } = await storyblokApi.get("cdn/stories/", {
        by_uuids_ordered: props.blok.articles.join(","),
        version: "draft",
      });
      return data.stories;
    }
  }
);
</script>
