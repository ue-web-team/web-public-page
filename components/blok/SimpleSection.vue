<template>
  <section
    v-editable="blok"
    class="max-w-5xl my-12 mx-auto p-4 sm:p-6 bg-gray-100 sm:shadow-sharp"
  >
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._id"
      :blok="blok"
    />
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
