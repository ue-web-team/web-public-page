<template>
  <div class="prose prose-sm md:prose-lg lg:prose-xl mb-8">
    <component v-editable="blok" :is="blok.as || 'h2'">{{
      blok.text
    }}</component>
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
