<script setup lang="ts">
  import { type HTMLAttributes, computed } from "vue";
  import { AccordionContent, type AccordionContentProps } from "reka-ui";
  import { reactiveOmit } from "@vueuse/core";
  import { cn } from "@/lib/utils";

  const props = defineProps<AccordionContentProps & { class?: HTMLAttributes["class"] }>();

  const delegatedProps = computed(() => {
    return reactiveOmit(props, "class");
  });
</script>

<template>
  <AccordionContent v-bind="delegatedProps" class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
    <div :class="cn('pb-4 pt-0 text-body-medium', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
