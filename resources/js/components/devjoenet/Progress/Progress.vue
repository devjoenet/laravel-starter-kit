<script setup lang="ts">
  import { withDefaults } from "vue";
  import { progressVariants } from "./variants";
  import type { ProgressProps } from "./types";

  const props = withDefaults(defineProps<ProgressProps>(), {
    max: 100,
  });
</script>

<template>
  <progress :class="progressVariants(props)" :value="value" :max="max" />
</template>
