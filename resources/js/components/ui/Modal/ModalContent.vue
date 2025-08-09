<script lang="ts" setup>
  import { computed } from "vue";
  import { modalContentVariants } from "./cva";
  import { cn } from "@/lib/utils";

  const props = defineProps<{ size?: "sm" | "md" | "lg" | "xl" | "full"; class?: string }>();

  const classes = computed(() => cn(modalContentVariants({ size: props.size }), props.class));
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
