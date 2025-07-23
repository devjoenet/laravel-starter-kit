<script setup lang="ts">
  import { provide, computed } from "vue";
  import { RadioGroupContextKey, type RadioGroupProps } from "./types";

  const props = defineProps<RadioGroupProps>();
  const model = defineModel<string | number>();

  // A simple counter for unique IDs
  let idCounter = 0;
  const groupName = computed(() => props.name || `radio-group-${idCounter++}`);

  provide(RadioGroupContextKey, {
    name: groupName,
    modelValue: model,
  });
</script>

<template>
  <div role="radiogroup" class="flex flex-col gap-2">
    <slot />
  </div>
</template>
