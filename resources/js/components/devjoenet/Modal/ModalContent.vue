<script lang="ts" setup>
  import { computed } from "vue";
  import { modalVariants } from "./cva";

  const props = defineProps<{ size?: "sm" | "md" | "lg" | "xl" | "full"; class?: string }>();

  const classes = computed(() => modalVariants({ size: props.size }) + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <div :class="classes + ' modal-box relative bg-base-100 shadow-lg p-6 rounded-lg'">
    <slot />
  </div>
</template>
