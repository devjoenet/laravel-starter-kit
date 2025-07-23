<script setup lang="ts">
  import { toastVariants } from "./variants";
  import type { ToastProps } from "./types";

  const props = defineProps<ToastProps>();
</script>

<template>
  <div :class="toastVariants(props)">
    <slot />
  </div>
</template>
