<template>
  <section
    v-editable="blok"
    :aria-labelledby="blok._uid"
    class="max-w-5xl mx-auto px-4 sm:px-6"
  >
    <FormKit
      form-class="shadow-sharp rounded-lg p-4 sm:p-8 bg-gradient-to-br from-transparent to-green-100"
      type="form"
      v-model="formData"
      :submit-label="blok.submit"
      @submit="submitHandler"
    >
      <div class="prose prose-sm md:prose-lg mb-4">
        <h2 :id="blok._uid">{{ blok.heading }}</h2>
        <rich-text-renderer
          v-if="blok.description"
          :document="blok.description"
        />
      </div>
      <template v-for="input in blok.inputs">
        <FormKit
          v-if="input.component == 'blok-input'"
          :name="input.label"
          :type="input.type"
          :label="input.label"
          :placeholder="input.placeholder"
          :help="input.help"
          :options="options(input.options)"
          :validation="input.validation"
          outer-class="mb-6"
          label-class="$reset block mb-2 font-semibold text-sm"
          inner-class="!border-2 !border-gray-600 rounded-lg mb-1 focus-within:border-blue-500"
          fieldset-class="!border-2 !border-gray-600"
        />
        <Component
          v-else
          class="my-4 sm:my-6 max-w-[25em]"
          :is="input.component"
          :blok="input"
          :key="input._uid"
        />
      </template>
    </FormKit>
  </section>
</template>

<script lang="ts" setup>
import { RichTextRenderer } from "@marvr/storyblok-rich-text-vue-renderer";

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});

// asuming options in comma separated string
const options = (field: string): string[] | undefined => {
  if (field?.length) {
    return field.split(",").map((option) => option.trim());
  }
  return undefined;
};

const submitted = ref(false);
const formData = ref({});
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
  alert(JSON.stringify(formData.value, null, 3));
};
</script>

<style lang="css" scoped></style>
