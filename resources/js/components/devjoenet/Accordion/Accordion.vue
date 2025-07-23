<script setup lang="ts">
  import { provide, toRef, computed } from "vue";
  import { withDefaults } from "vue";
  import { AccordionContextKey, type AccordionProps } from "./types";

  const props = withDefaults(defineProps<AccordionProps>(), {
    style: "arrow",
  });

  // Provide a unique name for the radio group if none is passed
  const accordionName = computed(() => props.name || `accordion-${crypto.randomUUID()}`);

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
