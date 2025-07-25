<script setup lang="ts">
  import { computed, type CSSProperties } from "vue";

  const props = defineProps({
    fill: { type: Boolean, default: false },
    weight: { type: Number, default: 400 },
    grade: { type: Number, default: 0 },
    opticalSize: { type: Number, default: 24 },
  });

  const iconStyle = computed(
    (): CSSProperties => ({
      fontVariationSettings: `'FILL' ${props.fill ? 1 : 0}, 'wght' ${props.weight}, 'GRAD' ${props.grade}, 'opsz' ${props.opticalSize}`,
    }),
  );
</script>

<template>
  <span class="material-symbols-outlined" :style="iconStyle" aria-hidden="true">
    <slot />
  </span>
</template>

<style scoped>
  .material-symbols-outlined {
    font-size: v-bind(opticalSize + "px");
  }
</style>
