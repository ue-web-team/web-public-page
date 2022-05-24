<template>
  <div v-editable="blok">
    <iframe
      v-if="blok.youtube_video_id"
      class="w-full min-h-50 sm:min-h-sm"
      :src="`https://www.youtube.com/embed/${blok.youtube_video_id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="w-full min-h-sm grid place-content-center text-red-500 font-bold text-2xl" v-else>
      No Youtube id found
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
