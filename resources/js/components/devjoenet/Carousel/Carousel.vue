<script lang="ts" setup>
  import { computed } from "vue";
  import { carouselVariants } from "./cva";

  const props = defineProps<{
    start?: boolean;
    center?: boolean;
    end?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
  }>();
  const classes = computed(() => carouselVariants({ start: props.start, center: props.center, end: props.end, horizontal: props.horizontal, vertical: props.vertical }));
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
