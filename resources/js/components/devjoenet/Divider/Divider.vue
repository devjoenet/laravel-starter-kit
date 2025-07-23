<script setup lang="ts">
  import { dividerVariants } from "./variants";
  import type { DividerProps } from "./types";

  const props = defineProps<DividerProps>();
</script>

<template>
  <div :class="dividerVariants(props)">
    <slot />
  </div>
</template>
