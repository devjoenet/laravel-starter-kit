<script lang="ts" setup>
  import { computed } from "vue";
  import { kbdVariants } from "./cva";

  const props = defineProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    class?: string;
  }>();

  const classes = computed(() => kbdVariants({ size: props.size }) + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <kbd :class="classes">
    <slot />
  </kbd>
</template>
<template>
  <kbd :class="classes">
    <slot />
  </kbd>
</template>
