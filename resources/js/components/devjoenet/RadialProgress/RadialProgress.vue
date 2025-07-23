<script setup lang="ts">
  import { computed } from "vue";
  import type { RadialProgressProps } from "./types";

  const props = defineProps<RadialProgressProps>();

  const style = computed(() => ({
    "--value": Math.max(0, Math.min(100, props.value)),
    "--size": props.size,
    "--thickness": props.thickness,
  }));
</script>

<template>
  <div class="radial-progress" :style="style" role="progressbar" :aria-valuenow="value">
    <slot>{{ value }}%</slot>
  </div>
</template>
