<template>
  <div v-editable="blok">
    <Head>
      <Title>{{blok.meta?.title}}</Title>
      <Meta name="description" :content="blok.meta?.description" />
    </Head>
  
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._id"
      :blok="blok"
    />
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
