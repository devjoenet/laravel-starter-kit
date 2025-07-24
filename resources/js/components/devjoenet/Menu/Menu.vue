<script lang="ts" setup>
  import { computed } from "vue";
  import { menuVariants } from "./cva";

  const props = defineProps<{
    direction?: "vertical" | "horizontal";
    style?: "default" | "compact" | "dropdown";
  }>();

  const classes = computed(() => menuVariants({ direction: props.direction, style: props.style }));
</script>

<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>
