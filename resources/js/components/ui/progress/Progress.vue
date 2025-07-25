<script lang="ts" setup>
  import { computed } from "vue";
  import { progressVariants } from "./cva";

  const props = defineProps<{
    value: number;
    max?: number;
    color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    class?: string;
  }>();

  const classes = computed(() => progressVariants({ color: props.color }) + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <progress :class="classes" :value="props.value" :max="props.max ?? 100"></progress>
</template>
