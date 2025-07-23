<script setup lang="ts">
  import { timelineVariants } from "./variants";
  import type { TimelineProps } from "./types";

  const props = defineProps<TimelineProps>();
</script>

<template>
  <ul :class="timelineVariants(props)">
    <slot />
  </ul>
</template>
