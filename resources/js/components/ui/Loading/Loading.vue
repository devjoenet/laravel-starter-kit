<script lang="ts" setup>
  import { computed } from "vue";
  import { loadingVariants } from "./cva";

  const props = defineProps<{
    style?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    class?: string;
  }>();

  const classes = computed(() => loadingVariants({ style: props.style, size: props.size }) + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <span :class="classes" role="status" aria-label="Loading"></span>
</template>
