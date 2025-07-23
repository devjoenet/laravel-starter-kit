<script setup lang="ts">
  import { ref } from "vue";
  import { useMotion } from "@vueuse/motion";
  import type { CarouselItemProps } from "./types";

  const props = defineProps<CarouselItemProps>();

  const itemRef = ref<HTMLElement>();

  useMotion(itemRef, {
    initial: { opacity: 0, scale: 0.95 },
    visibleOnce: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 100,
        type: "spring",
        stiffness: 250,
        damping: 25,
      },
    },
  });
</script>

<template>
  <div ref="itemRef" class="carousel-item" :class="{ 'w-full': props.fullWidth }">
    <slot />
  </div>
</template>
