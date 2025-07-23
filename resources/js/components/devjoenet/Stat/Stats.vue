<script setup lang="ts">
  import { statsVariants } from "./variants";
  import type { StatsProps } from "./types";

  const props = defineProps<StatsProps>();
</script>

<template>
  <div :class="statsVariants(props)">
    <slot />
  </div>
</template>
