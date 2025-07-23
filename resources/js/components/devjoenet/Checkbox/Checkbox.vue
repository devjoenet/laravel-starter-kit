<script setup lang="ts">
  import { ref, watchEffect } from "vue";
  import { checkboxVariants } from "./variants";
  import type { CheckboxProps } from "./types";

  const props = defineProps<CheckboxProps>();
  const model = defineModel<boolean>();
  const inputRef = ref<HTMLInputElement | null>(null);

  // The indeterminate state must be set programmatically
  watchEffect(() => {
    if (inputRef.value) {
      inputRef.value.indeterminate = !!props.indeterminate;
    }
  });
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input ref="inputRef" v-model="model" type="checkbox" class="sr-only" />
    <span :class="checkboxVariants(props)" class="flex items-center justify-center">
      <svg v-if="model || indeterminate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full text-current">
        <path v-if="indeterminate" fill-rule="evenodd" d="M3.75 12a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        <path
          v-else
          fill-rule="evenodd"
          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208Z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
    <span v-if="$slots.default" class="label-text ml-2">
      <slot />
    </span>
  </label>
</template>
