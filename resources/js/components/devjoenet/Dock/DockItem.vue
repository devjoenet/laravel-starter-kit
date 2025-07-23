<script setup lang="ts">
  import type { DockItemProps } from "./types";

  const props = defineProps<DockItemProps>();
</script>

<template>
  <button :class="{ 'dock-active': props.active }">
    <slot name="icon" />
    <span class="dock-label">
      <slot />
    </span>
  </button>
</template>
