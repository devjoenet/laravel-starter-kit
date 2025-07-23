<script setup lang="ts">
  import { joinVariants } from "./variants";
  import type { JoinProps } from "./types";

  const props = defineProps<JoinProps>();
</script>

<template>
  <div :class="joinVariants(props)">
    <slot />
  </div>
</template>
