<script lang="ts" setup>
  import { computed } from "vue";
  import { timelineVariants } from "./cva";

  const props = defineProps<{
    direction?: "vertical" | "horizontal";
    snapIcon?: boolean;
    box?: boolean;
    compact?: boolean;
  }>();
  const classes = computed(() => timelineVariants({ direction: props.direction, snapIcon: props.snapIcon, box: props.box, compact: props.compact }));
</script>

<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>
