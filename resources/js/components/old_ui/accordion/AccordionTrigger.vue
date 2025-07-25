<script setup lang="ts">
  import { type HTMLAttributes } from "vue";
  import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from "reka-ui";
  import { reactiveOmit } from "@vueuse/core";
  import { Icon } from "@/components/ui/icon";
  import { cn } from "@/lib/utils";

  const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes["class"] }>();

  const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      :class="
        cn(
          'flex flex-1 items-center justify-between rounded-md px-2 py-4 text-body-large transition-all hover:bg-surface-container [&[data-state=open]>span]:-rotate-180',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <slot />
      <Icon :optical-size="24" class="shrink-0 text-on-surface-variant transition-transform duration-200"> expand_more </Icon>
    </AccordionTrigger>
  </AccordionHeader>
</template>
