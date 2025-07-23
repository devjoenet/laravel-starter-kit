<script setup lang="ts">
  import { withDefaults } from "vue";
  import type { CardTitleProps } from "./types";

  const props = withDefaults(defineProps<CardTitleProps>(), {
    as: "h2",
  });
</script>

<template>
  <component :is="props.as" class="card-title">
    <slot />
  </component>
</template>
