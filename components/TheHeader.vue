<template>
  <div class="w-full relative bg-white border-b-2 border-black">
    <header class="px-4 sm:px-6 flex tracking-wide font-display">
      <nav class="py-3 sm:py-5 flex w-full items-center">
        <NuxtLink
          class="text-lime-400 transition-colors duration-700 text-xl font-black uppercase text-shadow-sharp hover:text-brown"
          to="/"
        >
          <span>Miljöfascisterna</span>
        </NuxtLink>
        <div class="flex-grow"></div>

        <Popover v-slot="{ open }">
          <PopoverButton
            class="group inline-flex items-center rounded-md text-black px-3 py-2 text-base font-medium transition-colors hover:bg-gray-300"
          >
            <span class="mr-2 hidden sm:inline">Meny</span>
            <XIcon
              v-if="open"
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <MenuIcon v-else class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute shadow-sharp right-0 bg-lime-100 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0"
            >
              <ul v-if="story?.content.nav_items.length">
                <li v-for="navItem in story?.content.nav_items">
                  <Component :is="navItem.component" :blok="navItem">
                  </Component>
                </li>
              </ul>
            </PopoverPanel>
          </transition>
        </Popover>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/solid";
import { useStoryblokApi } from "@storyblok/vue";

// fetch our global settings for the navigation menu
const storyblokApi = useStoryblokApi();
const path = "cdn/stories/global/global-settings";
const { data: story } = await useAsyncData(path, async () => {
  const { data } = await storyblokApi.get(path, {
    version: "draft",
  });
  return data.story;
});

onMounted(async () => {
  const { data: alerts } = await storyblokApi.get('cdn/stories', {
    version: "draft",
    starts_with: "global/_globalalerts"
  });
  console.log('Alerts', alerts);
})

</script>
