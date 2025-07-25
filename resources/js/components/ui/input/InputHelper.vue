<script lang="ts" setup>
  const props = defineProps<{ error?: boolean }>();
</script>
<template>
  <p :class="['mt-1 text-xs', error ? 'text-error' : 'text-base-content/70']">
    <slot />
  </p>
</template>
