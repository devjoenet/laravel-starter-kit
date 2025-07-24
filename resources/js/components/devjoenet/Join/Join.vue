<script lang="ts" setup>
  import { computed } from "vue";
  import { joinVariants } from "./cva";

  const props = defineProps<{ direction?: "horizontal" | "vertical" }>();
  const classes = computed(() => joinVariants({ direction: props.direction as any }));
</script>
<template>
  <div :class="classes">
    <slot />
  </div>
</template>
