<script lang="ts" setup>
  const props = defineProps<{ title?: string }>();
</script>

<template>
  <div class="flex-1 min-w-0">
    <strong v-if="props.title" class="block mb-1">{{ props.title }}</strong>
    <slot />
  </div>
</template>
