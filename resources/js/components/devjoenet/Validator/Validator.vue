<script lang="ts" setup>
  const props = defineProps<{
    message: string;
    class?: string;
  }>();
</script>

<template>
  <p :class="['validator-hint', props.class]">{{ props.message }}</p>
</template>
