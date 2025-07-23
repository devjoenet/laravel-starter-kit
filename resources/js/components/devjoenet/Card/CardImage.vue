<script setup lang="ts">
  import type { CardImageProps } from "./types";

  const props = withDefaults(defineProps<CardImageProps>(), {
    alt: "Card Image",
  });
</script>

<template>
  <figure>
    <img :src="props.src" :alt="props.alt" />
  </figure>
</template>
