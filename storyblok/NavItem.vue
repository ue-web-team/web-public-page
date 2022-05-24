<template>
  <NuxtLink
    class="block px-4 py-2 bg-transparent hover:bg-red-300 transition-all"
    :to="'/' + props.blok.to.cached_url"
    >{{ props.blok?.name }}</NuxtLink
  >
</template>

<script lang="ts" setup>
import { PropType } from "vue";

interface LinkField {
  id: string;
  url: string;
  linktype: "story" | "url";
  fieldtype: string;
  cached_url: string;
}

const props = defineProps({
  blok: {
    type: Object as PropType<{
      name: string;
      to: LinkField;
    }>,
    required: true,
  },
});
</script>
