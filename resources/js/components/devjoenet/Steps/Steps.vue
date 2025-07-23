<script setup lang="ts">
  import { stepsVariants } from "./variants";
  import type { StepsProps } from "./types";

  const props = defineProps<StepsProps>();
</script>

<template>
  <ul :class="stepsVariants(props)">
    <slot />
  </ul>
</template>
