<script lang="ts" setup>
  import { computed } from "vue";
  import { dividerVariants } from "./cva";

  const props = defineProps<{ direction?: "horizontal" | "vertical"; color?: string }>();
  const classes = computed(() => dividerVariants({ direction: props.direction as any, color: props.color as any }));
</script>
<template>
  <div :class="classes" />
</template>
