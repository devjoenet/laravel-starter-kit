<script setup lang="ts">
  import { ref } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { chatBubbleVariants, bubbleVariants } from "./variants";
  import type { ChatBubbleProps } from "./types";

  const props = defineProps<ChatBubbleProps>();
  const bubbleRef = ref<HTMLElement>();

  useMotion(bubbleRef, {
    initial: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 100,
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  });
</script>

<template>
  <div ref="bubbleRef" :class="chatBubbleVariants(props)">
    <div v-if="$slots.image" class="chat-image">
      <slot name="image" />
    </div>
    <div v-if="$slots.header" class="chat-header">
      <slot name="header" />
    </div>
    <div :class="bubbleVariants(props)">
      <slot />
    </div>
    <div v-if="$slots.footer" class="chat-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
