<script lang="ts" setup>
  const props = defineProps<{ src: string; alt?: string }>();
</script>
<template>
  <figure>
    <img :src="props.src" :alt="props.alt || ''" class="w-full" />
  </figure>
</template>
