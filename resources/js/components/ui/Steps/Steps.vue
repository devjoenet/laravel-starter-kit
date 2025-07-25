<script lang="ts" setup>
  import { provide, toRef, computed } from "vue";
  import { stepsVariants } from "./cva";

  // Make `current` optional and default it to 0, `direction` defaults to 'horizontal'
  const props = withDefaults(
    defineProps<{
      current?: number;
      direction?: "horizontal" | "vertical";
    }>(),
    {
      current: 0,
      direction: "horizontal",
    },
  );

  // Turn that prop into a ref so updates flow downhill
  const currentStep = toRef(props, "current");
  provide("currentStep", currentStep);

  const classes = computed(() => stepsVariants({ direction: props.direction }));
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
