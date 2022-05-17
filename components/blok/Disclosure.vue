<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-2 text-left font-medium text-gray-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    >
      <span>{{ blok?.heading }}</span>
      <ChevronUpIcon
        :class="open ? 'rotate-180 transform' : ''"
        class="h-5 w-5 text-purple-500"
      />
    </DisclosureButton>
    <DisclosurePanel class="px-4 pt-4 pb-2 text-gray-600">
      <slot>
        {{blok?.text}}
      </slot>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
