<script setup lang="ts">
  import { inject, ref } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { withDefaults } from "vue";
  import { accordionItemVariants } from "./variants";
  import { AccordionContextKey, type AccordionItemProps } from "./types";

  const props = withDefaults(defineProps<AccordionItemProps>(), {
    defaultOpen: false,
  });

  const context = inject(AccordionContextKey);

  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion component.");
  }

  const contentRef = ref<HTMLElement>();

  useMotion(contentRef, {
    initial: {
      opacity: 0,
      height: 0,
      marginTop: "0rem",
    },
    enter: {
      opacity: 1,
      height: "auto",
      marginTop: "1rem",
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
  <div :class="accordionItemVariants({ style: context.style.value })">
    <input type="radio" :name="context.name.value" :checked="props.defaultOpen" aria-label="Toggle accordion" />
    <div class="collapse-title text-xl font-medium">
      <slot name="title">
        {{ props.title }}
      </slot>
    </div>
    <div ref="contentRef" class="collapse-content">
      <slot />
    </div>
  </div>
</template>
