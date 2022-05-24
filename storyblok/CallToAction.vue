<template>
  <div v-editable="blok" style="overflow-x: clip" class="relative min-h-96">
    <div class="text-yellow-200">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="currentColor"
          d="M0,96L80,122.7C160,149,320,203,480,224C640,245,800,235,960,192C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="currentColor"
          d="M0,96L80,122.7C160,149,320,203,480,224C640,245,800,235,960,192C1120,149,1280,75,1360,37.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
    <div
      class="
        absolute
        flex flex-col
        sm:flex-row
        justify-center
        gap-8
        items-center
        inset-0
        text-gray-900
      "
    >
      <div style="perspective: 100px">
        <h2 class="bold-font uppercase font-black text-4xl sm:text-4xl mb-6">
          Gå med i <span class="text-red-600 text-5xl">partiet</span>
        </h2>
        <p class="sway-1 font-semibold sm:text-lg bg-pink-300 px-3 py-2 trans">
          Vill du göra skillnad på riktigt?
        </p>
        <p class="sway-2 font-semibold sm:text-lg bg-green-300 px-3 py-2">
          Kan du bidra med $$$
        </p>
        <p
          class="
            sway-3
            font-semibold
            sm:text-lg
            bg-red-500
            text-white
            px-3
            py-2
          "
        >
          Tveka inte. Bli medlem!
        </p>
      </div>

      <form class="max-w-86  relative">
        <div>
          <label
          for="signup"
          class="
            swing
            border-black border-2
            px-3
            py-2
            transform
            translate-y-3 translate-x-2
            -rotate-3
            bg-white
            inline-block
            font-semibold
            uppercase
          "
          >Din E-post</label
        >
        <input
          class="px-5 font-semibold py-4 shadow-sharp w-full max-w-96"
          type="email"
          required
          name="mail"
          id="signup"
        />
        </div>
        
        <p class="text-gray-600 text-sm mt-2 max-w-70">
          {{blok.text}}
        </p>
        <button
          class="
            text-2xl
            absolute
            -right-2
            bottom-6
            bg-lime-400
            px-4
            border-black border-3
            py-2
            transform-gpu
            transition
            duration-300
            hover:scale-110 hover:-rotate-6
          "
          type="submit"
        >
          🡆
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="pcss" scoped>
.swing {
  animation: rotating 2s infinite alternate;
}
.sway-1 {
  animation: sway 2s infinite alternate;
}
.sway-2 {
  animation: sway 2s infinite alternate;
  animation-delay: 1s;
}
.sway-3 {
  animation: sway 2s infinite alternate;
  animation-delay: 2s;
}
@keyframes rotating {
  from {
    transform: translate3d(1rem, 0.5rem, 0) rotate(-15deg);
  }
  to {
    transform: translate3d(1rem, 0.7rem, 0) rotate(15deg);
  }
}
@keyframes sway {
  from {
    transform: translate3d(0.5rem, 0, 0);
  }
  50% {
    transform: translate3d(0, 0, 0.5rem);
  }
  to {
    transform: translate3d(-0.5rem, 0, 0);
  }
}
</style>