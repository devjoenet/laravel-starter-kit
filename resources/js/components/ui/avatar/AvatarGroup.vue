<script lang="ts" setup>
  const props = withDefaults(defineProps<{ class?: string }>(), {
    class: "-space-x-6",
  });
</script>

<template>
  <div :class="['avatar-group', props.class]">
    <slot />
  </div>
</template>
