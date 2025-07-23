<script setup lang="ts">
  import { ref } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { carouselVariants } from "./variants";
  import type { CarouselProps } from "./types";

  const props = defineProps<CarouselProps>();
  const carouselRef = ref<HTMLElement>();

  useMotion(carouselRef, {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        delay: 100,
        duration: 300,
      },
    },
  });
</script>

<template>
  <div ref="carouselRef" :class="carouselVariants(props)">
    <slot />
  </div>
</template>
