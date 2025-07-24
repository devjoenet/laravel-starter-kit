<script lang="ts" setup>
  import { inject, computed } from "vue";

  const props = defineProps<{ index: number }>();
  const current = inject<number>("currentStep");
  const isActive = computed(() => props.index === current);
  const isComplete = computed(() => props.index < current);
</script>
<template>
  <li :class="[isActive ? 'step-primary' : '', isComplete ? 'step-success' : '']">
    <slot />
  </li>
</template>
