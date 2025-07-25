<script lang="ts" setup>
  const props = defineProps<{ severity?: "info" | "success" | "warning" | "error" }>();
</script>

<template>
  <span class="flex items-center mr-2">
    <slot>
      <span v-if="props.severity === 'info'">ℹ️</span>
      <span v-else-if="props.severity === 'success'">✅</span>
      <span v-else-if="props.severity === 'warning'">⚠️</span>
      <span v-else-if="props.severity === 'error'">❌</span>
      <span v-else>🔔</span>
    </slot>
  </span>
</template>
