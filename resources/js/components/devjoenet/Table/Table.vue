<script setup lang="ts">
  import { tableVariants } from "./variants";
  import type { TableProps } from "./types";

  const props = defineProps<TableProps>();
</script>

<template>
  <table :class="tableVariants(props)">
    <slot />
  </table>
</template>
