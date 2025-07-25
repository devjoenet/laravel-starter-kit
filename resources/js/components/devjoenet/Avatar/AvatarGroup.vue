<script lang="ts" setup>
  const props = defineProps<{ sizeClass?: string }>();
</script>

<template>
  <div :class="['avatar-group', props.sizeClass]">
    <slot />
  </div>
</template>
