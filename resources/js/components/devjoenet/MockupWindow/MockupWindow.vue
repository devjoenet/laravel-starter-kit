<script lang="ts" setup>
  import { computed } from "vue";
  import { mockupWindowVariants } from "./cva";

  const props = defineProps<{ class?: string }>();
  const classes = computed(() => mockupWindowVariants() + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
