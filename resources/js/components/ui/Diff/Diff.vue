<script lang="ts" setup>
  import { computed } from "vue";
  import { diffVariants } from "./cva";

  const props = defineProps<{ aspect?: "none" | "16/9" | "1/1" }>();
  const classes = computed(() => diffVariants({ aspect: props.aspect }));
</script>

<template>
  <figure :class="classes">
    <div class="diff-item-1"><slot name="item1" /></div>
    <div class="diff-item-2"><slot name="item2" /></div>
    <div class="diff-resizer"></div>
  </figure>
</template>
