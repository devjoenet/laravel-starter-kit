<script lang="ts" setup>
  const emit = defineEmits(["close"]);
</script>

<template>
  <button class="btn btn-sm btn-circle btn-ghost ml-2" @click="emit('close')" aria-label="Dismiss">✕</button>
</template>
