<script setup lang="ts">
  import { inject, ref } from 'vue';
  import { useMotion } from '@vueuse/motion';
  import { tableItemVariants } from './variants';
  import { TableContextKey, type TableItemProps } from './types';

  const props = defineProps<TableItemProps>();

  const context = inject(TableContextKey);

  if (!context) {
    throw new Error('TableItem must be used within a Table component.');
  }

  const itemRef = ref<HTMLElement>();

  useMotion(itemRef, {
    initial: { opacity: 0, scale: 0.95 },
    visibleOnce: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 100,
        type: 'spring',
        stiffness: 250,
        damping: 25,
      },
    },
  });
</script>

<template>
  <div ref="itemRef" :class="tableItemVariants(props)">
    <slot />
  </div>
</template>
