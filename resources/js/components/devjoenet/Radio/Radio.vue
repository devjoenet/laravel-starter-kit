<script setup lang="ts">
  import { inject, computed } from "vue";
  import { radioVariants } from "./variants";
  import { RadioGroupContextKey, type RadioProps } from "./types";

  const props = defineProps<RadioProps>();
  const context = inject(RadioGroupContextKey);

  if (!context) {
    throw new Error("Radio component must be used within a RadioGroup component.");
  }

  // Added a check for context to satisfy TypeScript
  const isChecked = computed(() => (context ? context.modelValue.value === props.value : false));

  function handleChange() {
    if (context) {
      context.modelValue.value = props.value;
    }
  }
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="radio" :name="context.name.value" :value="props.value" :checked="isChecked" class="sr-only" @change="handleChange" />
    <span :class="radioVariants(props)" />
    <span v-if="$slots.default" class="label-text ml-2">
      <slot />
    </span>
  </label>
</template>
