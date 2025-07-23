<script setup lang="ts">
  import { ref } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { inputVariants } from "./variants";
  import type { InputProps } from "./types";

  const props = defineProps<InputProps>();

  const elRef = ref<HTMLElement>();

  useMotion(elRef, {
    initial: { opacity: 0, y: 5 },
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
  <div ref="elRef" :class="inputVariants(props)">
    <slot />
  </div>
</template>
