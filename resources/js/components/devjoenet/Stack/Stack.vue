<script lang="ts" setup>
  import { computed } from "vue";
  import { stackVariants } from "./cva";

  const props = defineProps<{ direction?: "row" | "col"; placement?: string }>();
  const classes = computed(() => stackVariants({ direction: props.direction as any, placement: props.placement as any }));
</script>
<template>
  <div :class="classes">
    <slot />
  </div>
</template>
