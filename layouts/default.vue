<template>
  <div
    class="
      
      min-h-screen
      flex flex-col
      
    "
  >
    <TheHeader />
    <main class="">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style  scoped>
.pattern {
  background-image: url('~assets/topography.svg');
  background-color: #1A1A2E;
}
</style>