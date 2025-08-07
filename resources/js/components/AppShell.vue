<script setup lang="ts">
  import AppLayout from "../layouts/AppLayout.vue";
  import { defineProps, withDefaults } from "vue";

  withDefaults(
    defineProps<{
      title?: string;
      subtitle?: string;
      withCloseButton?: boolean;
    }>(),
    {
      withCloseButton: true,
    },
  );
</script>

<template>
  <AppLayout :title="title" :subtitle="subtitle" :withCloseButton="withCloseButton">
    <slot />
  </AppLayout>
</template>
