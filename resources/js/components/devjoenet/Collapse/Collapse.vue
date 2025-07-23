<script setup lang="ts">
  import { ref, computed, withDefaults } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { collapseVariants } from "./variants";
  import type { CollapseProps } from "./types";

  const props = withDefaults(defineProps<CollapseProps>(), {
    control: "focus",
  });

  // Determine the correct root and title elements based on the control prop
  const rootEl = computed(() => (props.control === "details" ? "details" : "div"));
  const titleEl = computed(() => (props.control === "details" ? "summary" : "div"));

  const contentRef = ref<HTMLElement>();

  // Animate the opening/closing of the content
  useMotion(contentRef, {
    initial: {
      height: 0,
      opacity: 0,
      marginTop: "0rem",
      overflow: "hidden",
    },
    enter: {
      height: "auto",
      opacity: 1,
      marginTop: "1rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.5,
      },
    },
    leave: {
      height: 0,
      opacity: 0,
      marginTop: "0rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.5,
      },
    },
  });
</script>

<template>
  <component :is="rootEl" :tabindex="props.control === 'focus' ? 0 : undefined" :class="collapseVariants(props)">
    <input v-if="props.control === 'checkbox'" type="checkbox" :checked="props.isOpen" />
    <component :is="titleEl" class="collapse-title text-xl font-medium">
      <slot name="title">{{ props.title }}</slot>
    </component>
    <div ref="contentRef" class="collapse-content">
      <slot />
    </div>
  </component>
</template>
