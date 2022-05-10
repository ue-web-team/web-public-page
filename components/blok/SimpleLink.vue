<template>
  <Component
    v-editable="blok"
    :is="blok.href ? 'a' : NuxtLink"
    :to="'/' + blok.to.cached_url"
    :href="href"
    :target="blok.open_new ? '_blank' : ''"
    class="text-white text-xl rounded-xl bg-blue-800 px-4 py-3 block font-semibold hover:underline"
  >
    {{ blok.name }}
  </Component>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const href = computed(() =>
  props.blok.href.length ? props.blok.href : undefined
);
// needed for dynamic components
const NuxtLink = resolveComponent("NuxtLink");
</script>
