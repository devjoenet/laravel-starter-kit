<script setup lang="ts">
  import { loadingVariants } from "./variants";
  import type { LoadingProps } from "./types";

  const props = defineProps<LoadingProps>();
</script>

<template>
  <span :class="loadingVariants(props)" />
</template>
