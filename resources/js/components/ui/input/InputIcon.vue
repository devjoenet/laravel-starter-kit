<script lang="ts" setup>
  const props = defineProps<{ side: "left" | "right" }>();
</script>
<template>
  <span :class="['absolute top-1/2 -translate-y-1/2 flex items-center', side === 'left' ? 'left-3' : 'right-3']">
    <slot />
  </span>
</template>
