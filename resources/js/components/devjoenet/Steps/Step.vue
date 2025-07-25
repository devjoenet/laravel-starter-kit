<script lang="ts" setup>
  import { inject, computed, unref, ref } from "vue";
  import type { Ref } from "vue";

  const props = defineProps<{ index: number }>();

  // Inject a Ref<number>, defaulting to ref(0) if none is provided
  const rawCurrent = inject<Ref<number>>("currentStep", ref(0));
  const current = computed(() => unref(rawCurrent));

  const isActive = computed(() => props.index === current.value);
  const isComplete = computed(() => props.index < current.value);
</script>

<template>
  <div :class="['step', isActive ? 'step-primary' : '', isComplete ? 'step-success' : '']">
    <slot />
  </div>
</template>
