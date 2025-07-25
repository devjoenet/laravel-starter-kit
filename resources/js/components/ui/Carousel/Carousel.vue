<script lang="ts" setup>
  import { type HTMLAttributes } from "vue";
  import { carouselVariants } from "./cva";
  import { cn } from "@/lib/utils";

  const props = withDefaults(
    defineProps<{
      start?: boolean;
      center?: boolean;
      end?: boolean;
      horizontal?: boolean;
      vertical?: boolean;
      class?: HTMLAttributes["class"];
    }>(),
    {
      start: false,
      center: false,
      end: false,
      horizontal: true,
      vertical: false,
    },
  );
</script>

<template>
  <div :class="cn(carouselVariants({ start: props.start, center: props.center, end: props.end, horizontal: props.horizontal, vertical: props.vertical }))">
    <slot />
  </div>
</template>
