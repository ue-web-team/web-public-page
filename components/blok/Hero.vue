<template>
  <div v-editable="blok" class="relative">
    <div class="sm:bg-fixed bg-no-repeat h-xl" :style="bdrop"></div>
    <div class="absolute top-0 h-full flex items-center justify-center w-full">
      <div
        class="nice shadow-sharp py-8 px-12 flex flex-col items-center justify-center sm:w-1/2 max-w-4xl"
      >
        <img class="h-46 sm:h-52 lg:h-72" :src="blok.foreground.filename" />
        <h1
          class="px-4 absolute lg:text-5xl sm:text-3xl text-xl font-display font-black uppercase text-white text-center tracking-tight lg:tracking-wide text-shadow-sharp small-caps"
        >
          <span class="text-red-700">{{ first }}</span> <span>{{ rest }}</span>
        </h1>
        <p class="mt-4 italic">'{{ blok.quote }}'</p>
      </div>
    </div>
    <!--div class="w-full h-32 -mt-32">
      <svg height="100%" width="100%" preserveAspectRatio="none" viewBox="0 0 500 500">
		    <polygon fill="white" points="0,0 0,500 500,500" class="triangle" />
		    Sorry, your browser does not support inline SVG.
	  </svg>
    </div-->
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

const bdrop = computed(() => {
  const imgUrl = (props.blok.image.filename);
  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundPosition: "center top",
    backgroundRepeat: "repeat",
  };
});

const first = computed(() => {
  const arr = props.blok.heading.split(" ");
  return arr[0];
});
const rest = computed(() => {
  const arr = props.blok.heading.split(" ");
  arr.shift();
  return arr.join(" ");
});
</script>

<style lang="pcss" scoped>
.nice {
  backdrop-filter: blur(2px) contrast(160%) hue-rotate(240deg);
  transform: rotateZ(3deg);
}
</style>
