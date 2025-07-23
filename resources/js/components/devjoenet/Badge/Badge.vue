<script setup lang="ts">
  import { ref } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { badgeVariants } from "./variants";
  import type { BadgeProps } from "./types";

  const props = defineProps<BadgeProps>();

  const badgeRef = ref<HTMLElement>();

  useMotion(badgeRef, {
    initial: {
      opacity: 0,
      y: 5,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 50,
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  });
</script>

<template>
  <span ref="badgeRef" :class="badgeVariants(props)">
    <slot />
  </span>
</template>
