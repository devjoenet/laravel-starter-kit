<script setup lang="ts">
  import type { StepItemProps } from "./types";

  const props = defineProps<StepItemProps>();
</script>

<template>
  <li class="step" :data-content="props.dataContent" :class="[props.color ? `step-${props.color}` : '']">
    <slot />
  </li>
</template>
