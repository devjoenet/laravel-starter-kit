<script lang="ts" setup>
  const props = defineProps<{
    loading?: boolean;
    variant?: string;
  }>();
</script>

<template>
  <!-- Icon slot (left, except for icon/FAB) -->
  <span v-if="$slots.icon && variant !== 'icon' && variant !== 'fab'" class="mr-2 flex items-center">
    <slot name="icon" />
  </span>
  <!-- Main content -->
  <span v-if="variant !== 'icon' && variant !== 'fab'">
    <slot />
  </span>
  <!-- Icon-only or FAB slot -->
  <span v-if="variant === 'icon' || variant === 'fab'">
    <slot name="icon" />
  </span>
  <!-- Loading spinner -->
  <span v-if="loading" class="loading loading-spinner ml-2"></span>
</template>
