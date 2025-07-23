<script setup lang="ts">
  import { alertVariants } from "./variants";
  import type { AlertProps } from "./types";

  const props = defineProps<AlertProps>();
</script>

<template>
  <div role="alert" :class="alertVariants(props)">
    <slot />
  </div>
</template>
