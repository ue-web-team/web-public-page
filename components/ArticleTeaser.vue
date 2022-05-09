<template>
  <div class="py-6 px-6 shadow-sharp">
    <h2 class="font-display uppercase text-shadow-sharp font-bold mb-4 text-2xl lg:text-4xl text-white">
      {{ articleContent.title }}
    </h2>
    <NuxtLink
      :to="'/' + articleLink"
      class="prose prose-sm md:prose-lg lg:prose-xl block transition-colors duration-300 !hover:text-brown"
    >
      <RichTextRenderer
        v-if="articleContent.intro"
        :document="articleContent.intro"
      />
    </NuxtLink>
  </div>
</template>
 
 
<script setup lang="ts">
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";

defineProps({
  articleContent: {
      type: Object,
      required: true,
    },
    articleLink: {
      type: String,
      required: true,
    }
});

</script>

<style lang="pcss" scoped>
.nice {
  backdrop-filter: brightness(0.8) blur(3px);
}
</style>