<script setup lang="ts">
  import { type HTMLAttributes, computed } from "vue";
  import { AspectRatio, type AspectRatioProps } from "reka-ui";
  import { reactiveOmit } from "@vueuse/core";
  import { cn } from "@/lib/utils";

  const props = defineProps<AspectRatioProps & { class?: HTMLAttributes["class"] }>();

  const delegatedProps = computed(() => {
    return reactiveOmit(props, "class");
  });
</script>

<template>
  <AspectRatio v-bind="delegatedProps">
    <div :class="cn('h-full w-full object-cover', props.class)">
      <slot />
    </div>
  </AspectRatio>
</template>
