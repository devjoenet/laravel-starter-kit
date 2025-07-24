<script lang="ts" setup>
  import { computed } from "vue";
  import { statsVariants } from "./cva";

  const props = defineProps<{ direction?: "horizontal" | "vertical" }>();
  const classes = computed(() => statsVariants({ direction: props.direction }));
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
