<script setup lang="ts">
  import { menuVariants } from "./variants";
  import type { MenuProps } from "./types";

  const props = defineProps<MenuProps>();
</script>

<template>
  <ul :class="menuVariants(props)">
    <slot />
  </ul>
</template>
