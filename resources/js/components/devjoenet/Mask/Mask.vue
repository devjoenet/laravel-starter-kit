<script setup lang="ts">
  import type { MaskProps } from "./types";

  const props = defineProps<MaskProps>();
</script>

<template>
  <div class="mask" :class="[`mask-${props.shape}`, { 'mask-half-1': props.half1, 'mask-half-2': props.half2 }]">
    <slot />
  </div>
</template>
