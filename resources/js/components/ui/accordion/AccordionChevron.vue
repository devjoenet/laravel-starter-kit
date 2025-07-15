<script setup lang="ts">
  import { ChevronDown } from "lucide-vue-next";
  import { cn } from "@/lib/utils";
  import type { HTMLAttributes } from "vue";

  interface AccordionChevronProps {
    class?: HTMLAttributes["class"];
  }

  const props = defineProps<AccordionChevronProps>();
</script>

<template>
  <ChevronDown :class="cn('h-4 w-4 shrink-0 transition-transform duration-200 text-on-surface-variant', props.class)" aria-hidden="true" />
</template>
