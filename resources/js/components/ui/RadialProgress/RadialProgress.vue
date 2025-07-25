<script lang="ts" setup>
  import { computed } from "vue";

  const props = defineProps<{
    value: number;
    size?: string;
    thickness?: string;
    class?: string;
  }>();

  const styleVars = computed(
    () =>
      ({
        "--value": `${props.value}`,
        "--size": props.size ?? "5rem",
        "--thickness": props.thickness ?? "0.25rem",
      }) as Record<string, string>,
  );
</script>

<template>
  <div class="radial-progress" :class="props.class" :style="styleVars" role="progressbar" :aria-valuenow="props.value" aria-valuemin="0" aria-valuemax="100">
    {{ props.value }}%
  </div>
</template>
