<script setup lang="ts">
  import { dockVariants } from "./variants";
  import type { DockProps } from "./types";

  const props = defineProps<DockProps>();
</script>

<template>
  <div :class="dockVariants(props)">
    <slot />
  </div>
</template>
