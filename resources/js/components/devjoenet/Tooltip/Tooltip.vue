<script setup lang="ts">
  import { tooltipVariants } from "./variants";
  import type { TooltipProps } from "./types";

  const props = defineProps<TooltipProps>();
</script>

<template>
  <div :data-tip="tip" :class="tooltipVariants(props)">
    <slot />
  </div>
</template>
