<script setup lang="ts">
  import type { DiffProps } from "./types";

  const props = defineProps<DiffProps>();
</script>

<template>
  <figure class="diff" :class="props.aspectRatioClass">
    <div class="diff-item-1">
      <slot name="item-one" />
    </div>
    <div class="diff-item-2">
      <slot name="item-two" />
    </div>
    <div class="diff-resizer" />
  </figure>
</template>
