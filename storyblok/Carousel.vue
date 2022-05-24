<template>
  <section v-editable="blok" class="max-w-5xl mx-auto px-4 sm:px-6 my-8">
    <ClientOnly>
      <Carousel
        v-if="slides?.length"
        :items-to-show="1"
        :breakpoints="breakpoints"
      >
        <Slide v-for="slide in slides" :key="slides.uuid">
          <CarouselSlide :blok="slide"/>
        </Slide>
        <template #addons>
          <Navigation />
          <!--Pagination class="p-0" /-->
        </template>
      </Carousel>
    </ClientOnly>
  </section>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useStoryblokApi } from "@storyblok/vue";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// fetch the articles before rendering the page ('usally at the server')
const storyblokApi = useStoryblokApi();
const slugs = props.blok.slides
  .map((slide) => slide.article.cached_url)
  .join(",");
const { data: slides } = await useAsyncData(slugs, async () => {
  // only get specific articles by slugs
  if (props.blok.slides.length) {
    const { data } = await storyblokApi.get("cdn/stories", {
      by_slugs: slugs,
      version: "draft",
    });
    return data.stories;
  }
});

const breakpoints = {
  // 600px and up
  600: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "center",
  },
};
</script>

<style>
.carousel__pagination {
  padding: 0;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 8px solid white;
}
</style>
