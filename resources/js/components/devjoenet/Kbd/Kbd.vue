<script setup lang="ts">
  import { kbdVariants } from "./variants";
  import type { KbdProps } from "./types";

  const props = defineProps<KbdProps>();
</script>

<template>
  <kbd :class="kbdVariants(props)">
    <slot />
  </kbd>
</template>
