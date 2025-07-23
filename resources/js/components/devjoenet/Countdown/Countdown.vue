<script setup lang="ts">
  import { computed, withDefaults } from "vue";
  import type { CountdownProps } from "./types";

  const props = withDefaults(defineProps<CountdownProps>(), {
    value: 0,
  });

  const displayValue = computed(() => {
    const num = Math.max(0, Math.min(99, Math.floor(props.value)));
    return num;
  });

  const style = computed(() => ({
    "--value": displayValue.value,
  }));
</script>

<template>
  <span class="countdown" :style="style" :aria-label="`${displayValue}`" aria-live="polite" role="timer">
    <span :style="style" />
  </span>
</template>
