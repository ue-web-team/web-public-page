<template>
  <div v-if="jokes?.length" class="mb-16">
  </div>
</template>

<script lang="ts" setup>
// No esm build availible but importing the component directly works
// see https://github.com/nuxt/framework/discussions/4924
import MarqueeText from "vue-marquee-text-component/src/components/MarqueeText.vue";
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const { data: jokes } = await useFetch<any>(
  "https://api.icndb.com/jokes/random/10"
);

</script>
