<script setup lang="ts">
  import type { DrawerProps } from "./types";

  defineProps<DrawerProps>();
  const model = defineModel<boolean>(); // v-model:open
</script>

<template>
  <div class="drawer" :class="{ 'drawer-end': end }">
    <input :id="id" v-model="model" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side">
      <label :for="id" aria-label="close sidebar" class="drawer-overlay"></label>
      <slot name="side" />
    </div>
  </div>
</template>
