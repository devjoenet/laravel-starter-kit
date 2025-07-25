<script lang="ts" setup>
  import { computed } from "vue";
  import { chatVariants, chatBubbleVariants } from "./cva";

  const props = defineProps<{
    placement?: "start" | "end";
    color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  }>();

  const containerClasses = computed(() => chatVariants({ placement: props.placement }));
  const bubbleClasses = computed(() => chatBubbleVariants({ color: props.color }));
</script>

<template>
  <div :class="containerClasses">
    <div class="chat-image">
      <slot name="image" />
    </div>
    <div class="chat-header">
      <slot name="header" />
    </div>
    <div :class="bubbleClasses">
      <slot />
    </div>
    <div class="chat-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
