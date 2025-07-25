<script lang="ts" setup>
  const props = defineProps<{
    width?: string;
    height?: string;
    class?: string;
  }>();
</script>

<template>
  <div class="skeleton" :class="props.class" :style="{ width: props.width, height: props.height }"></div>
</template>
