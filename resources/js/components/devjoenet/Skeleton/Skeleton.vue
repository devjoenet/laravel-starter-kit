<script setup lang="ts">
  import { withDefaults } from "vue";
  import type { SkeletonProps } from "./types";

  const props = withDefaults(defineProps<SkeletonProps>(), {
    widthClass: "w-full",
    heightClass: "h-4",
  });
</script>

<template>
  <div class="skeleton" :class="[props.widthClass, props.heightClass]">
    <slot />
  </div>
</template>
