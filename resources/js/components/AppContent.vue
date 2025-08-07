<script setup lang="ts">
  import { type HTMLAttributes } from "vue";
  defineProps<{
    class?: HTMLAttributes["class"];
  }>();
</script>

<template>
  <section class="w-full max-w-7xl mx-auto flex flex-col gap-6" :class="class">
    <slot />
  </section>
</template>
