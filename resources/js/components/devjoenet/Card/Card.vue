<script setup lang="ts">
  import { ref } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { cardVariants } from "./variants";
  import type { CardProps } from "./types";

  const props = defineProps<CardProps>();
  const cardRef = ref<HTMLElement>();

  useMotion(cardRef, {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    enter: {
      opacity: 1,
      y: 0,
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
  <div ref="cardRef" :class="cardVariants(props)">
    <slot />
  </div>
</template>
