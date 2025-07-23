<script setup lang="ts">
  import { fileInputVariants } from "./variants";
  import type { FileInputProps } from "./types";

  // Define props to get a cleanly-typed object for the variants function
  const props = defineProps<FileInputProps>();
  const model = defineModel<FileList>();
</script>

<template>
  <input type="file" :class="fileInputVariants(props)" @change="model = ($event.target as HTMLInputElement).files ?? undefined" />
</template>
