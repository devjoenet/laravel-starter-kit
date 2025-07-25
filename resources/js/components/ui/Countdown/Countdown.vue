<script lang="ts" setup>
  const props = defineProps<{
    value: number;
    class?: string;
  }>();
</script>

<template>
  <span :class="['countdown', props.class]">
    <span :style="{ '--value': props.value } as any"></span>
  </span>
</template>
