<script lang="ts" setup>
  import { computed } from "vue";
  import { badgeVariants } from "./cva";

  const props = defineProps<{
    color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
    style?: "solid" | "outline" | "dash" | "soft" | "ghost";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    class?: string;
  }>();

  const classes = computed(
    () =>
      badgeVariants({
        color: props.color,
        style: props.style,
        size: props.size,
      }) + (props.class ? ` ${props.class}` : ""),
  );
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
