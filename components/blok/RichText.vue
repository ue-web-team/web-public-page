<template>
  <div class="prose prose-sm md:prose-lg mb-4">
    <rich-text-renderer v-if="blok.content" :document="blok.content" />
    <p v-else><strong>Nothing written yet!</strong></p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
