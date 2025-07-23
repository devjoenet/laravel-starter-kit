<script setup lang="ts">
  import { computed } from "vue";
  import type { IndicatorItemProps } from "./types";

  const props = defineProps<IndicatorItemProps>();

  const placementClasses = computed(() => ({
    [`indicator-${props.horizontal}`]: props.horizontal,
    [`indicator-${props.vertical}`]: props.vertical,
  }));
</script>

<template>
  <span class="indicator-item" :class="placementClasses">
    <slot />
  </span>
</template>
