<template>
  <Component
    v-editable="blok"
    :is="props.blok.to.linktype === 'story' ? NuxtLink: 'a'"
    :to="'/' + blok.to.cached_url"
    :href="href"
    :target="blok.open_new ? '_blank' : ''"
    class="text-white text-xl rounded-xl bg-blue-800 px-4 py-3 block font-semibold transform transition-transform duration-500 hover:(underline scale-110)"
  >
    {{ blok.name }}
  </Component>
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
      open_new: boolean;
    }>,
    required: true,
  },
});

const href = computed(() =>
  props.blok.to.linktype === 'url' ? props.blok.to.url: undefined
);

// needed for dynamic components
const NuxtLink = resolveComponent("NuxtLink");
</script>
