<script setup lang="ts">
  import { footerVariants } from "./variants";
  import type { FooterProps } from "./types";

  const props = defineProps<FooterProps>();
</script>

<template>
  <footer :class="footerVariants(props)">
    <slot />
  </footer>
</template>
