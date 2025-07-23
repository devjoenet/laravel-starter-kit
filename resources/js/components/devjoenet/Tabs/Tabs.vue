<script setup lang="ts">
  import { tabsVariants } from "./variants";
  import type { TabsProps } from "./types";

  const props = defineProps<TabsProps>();
</script>

<template>
  <div role="tablist" :class="tabsVariants(props)">
    <slot />
  </div>
</template>
