<script lang="ts" setup>
  import { computed } from "vue";
  import { indicatorItemVariants } from "./cva";

  const props = defineProps<{ placement?: "start" | "middle" | "end" | "top" | "bottom"; class?: string }>();
  const classes = computed(() => indicatorItemVariants({ placement: props.placement }) + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
