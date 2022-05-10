<template>
  <div v-editable="blok" style="overflow-x: clip" class="relative">
    <div
      class="bg-yellow-200 border-t-2 border-black absolute w-[120%] h-24 transform translate-x[-10%] rotate-3"
    ></div>
    <div
      class="bg-pink-300 border-t-2 border-black w-[120%] transform translate-x[-10%] -rotate-6"
    >
      <h2
        class="py-6 text-3xl sm:text-5xl text-black font-black font-display text-center"
      >
        {{ blok.heading }}
      </h2>
    </div>

    <div class="max-w-5xl mt-16 mx-auto px-4 sm:px-6">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
        <li
          v-for="(article, index) in sortedArticles"
          :key="article._uid"
          class="flex-auto transform"
          :class="[index % 2 ? '-rotate-1' : 'rotate-1']"
          style="min-width: 33%"
        >
          <BlokTeaserLink
            v-if="article.content"
            :blok="article"
          ></BlokTeaserLink>

          <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
            This content loads on save.
            <strong>Save the entry & reload.</strong>
          </p>
        </li>
      </ul>
    </div>
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

const { data } = await useAsyncData(props.blok.articles.join(","), async () => {
  // only get specific articles
  if (props.blok.articles.length) {
    const { data } = await storyblokApi.get("cdn/stories/", {
      by_uuids: props.blok.articles.join(","),
      version: "draft",
    });
    return data.stories;
  }
});

const sortedArticles = computed(() => {
  if(!data.value) return;
  const featuredArticles = data.value;
  // Enable ordering of the article previews
  return featuredArticles.sort((a: any, b: any) => {
    return (
      props.blok.articles.indexOf(a.uuid) - props.blok.articles.indexOf(b.uuid)
    );
  });
});
</script>
