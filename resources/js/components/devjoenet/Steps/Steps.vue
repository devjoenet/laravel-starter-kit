<script lang="ts" setup>
  import { provide, computed } from "vue";
  import { stepsVariants } from "./steps.cva";

  const props = defineProps<{ current: number; direction?: "horizontal" | "vertical" }>();
  provide("currentStep", props.current);
  const classes = computed(() => stepsVariants({ direction: props.direction as any }));
</script>
<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>
