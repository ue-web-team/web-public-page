<template>
  <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  // optional parameters https://www.storyblok.com/docs/image-service
  params: {
    type: String,
    default: "",
  },
});

const src = computed(() => props.image?.filename + "/m/" + props.params);
const alt = computed(() => props.image?.alt);
const width = computed(() => props.image?.filename.split("/")[5].split("x")[0]);
const height = computed(
  () => props.image?.filename.split("/")[5].split("x")[1]
);
</script>
