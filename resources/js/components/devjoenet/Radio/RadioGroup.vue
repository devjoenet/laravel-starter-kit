<script setup lang="ts">
  import { provide, computed } from "vue"; // 'toRef' removed
  import { RadioGroupContextKey, type RadioGroupProps } from "./types";

  const props = defineProps<RadioGroupProps>();
  const model = defineModel<string | number>();

  const groupName = computed(() => props.name || `radio-group-${crypto.randomUUID()}`);

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
