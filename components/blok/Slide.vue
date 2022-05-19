<template>
  <NuxtLink
    class="bg-blue-300 min-h-56 w-full mx-2 grid items-end relative group overflow-hidden"
    :to="'/' + blok.full_slug"
  >
    <OptImage
      class="absolute h-full min-w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
      :image="blok.content.image"
      params="0x224"
    />
    <div
      class="bg-gradient-to-t from-gray-700 to to-transparent flex justify-center relative p-4"
    >
      <span
        class="transform transition-transform duration-500 group-hover:scale-95 truncate text-white text-xl font-semibold"
      >
        {{ blok.content.title }}
      </span>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
