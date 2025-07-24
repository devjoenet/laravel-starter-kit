<script lang="ts" setup>
const emit = defineEmits(['close'])
</script>

<template>
  <button class="btn btn-square btn-ghost absolute top-4 right-4" @click="emit('close')" aria-label="Close modal">
    ✕
  </button>
</template>
