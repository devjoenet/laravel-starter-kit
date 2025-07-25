<script lang="ts" setup>
  defineProps<{
    hasLeftIcon: boolean;
    hasRightIcon: boolean;
    disabled?: boolean;
    error?: boolean;
  }>();
</script>
<template>
  <div class="relative w-full">
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </div>
</template>
