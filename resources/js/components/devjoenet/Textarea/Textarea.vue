<script setup lang="ts">
  import { ref, watch, onMounted, nextTick } from "vue";
  import { textareaVariants } from "./variants";
  import type { TextareaProps } from "./types";

  const props = defineProps<TextareaProps>();
  const model = defineModel<string>({ default: "" });

  const textareaRef = ref<HTMLTextAreaElement | null>(null);

  const resize = () => {
    const el = textareaRef.value;
    if (el) {
      // Reset height to shrink correctly
      el.style.height = "auto";
      // Set height to the scroll height to grow
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  // Watch for changes in the model (e.g., user typing)
  watch(model, () => {
    // Wait for the DOM to update before resizing
    nextTick(resize);
  });

  // Set the initial size when the component mounts
  onMounted(resize);
</script>

<template>
  <textarea ref="textareaRef" v-model="model" :class="textareaVariants(props)" rows="1" style="overflow: hidden" />
</template>
