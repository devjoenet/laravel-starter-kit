<script setup lang="ts">
  import { provide, toRef, computed } from "vue";
  import { withDefaults } from "vue";
  import { AccordionContextKey, type AccordionProps } from "./types";

  const props = withDefaults(defineProps<AccordionProps>(), {
    style: "arrow",
  });

  // A simple counter for unique IDs
  let idCounter = 0;
  // Provide a unique name for the radio group if none is passed
  const accordionName = computed(() => props.name || `accordion-${idCounter++}`);

  provide(AccordionContextKey, {
    name: accordionName,
    style: toRef(props, "style"),
  });
</script>

<template>
  <div>
    <slot />
  </div>
</template>
