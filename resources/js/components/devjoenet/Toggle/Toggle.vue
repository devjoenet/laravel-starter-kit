<script setup lang="ts">
  import { toggleVariants } from "./variants";
  import type { ToggleProps } from "./types";

  const props = defineProps<ToggleProps>();
  const model = defineModel<boolean>();
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input v-model="model" type="checkbox" :class="toggleVariants(props)" />
    <span v-if="$slots.default" class="label-text ml-2">
      <slot />
    </span>
  </label>
</template>
