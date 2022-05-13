<template>
  <div v-if="jokes?.length" class="mb-16">
  </div>
</template>

<script lang="ts" setup>
//import MarqueeText from "vue-marquee-text-component";
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
