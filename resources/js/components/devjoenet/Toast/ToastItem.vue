<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import { toastVariants } from './cva'

const props = defineProps<{
  id: number
  message: string
  variant: 'info' | 'success' | 'warning' | 'error'
  duration: number
}>()
const emit = defineEmits<{
  (e: 'remove', id: number): void
}>()

const toastRef = ref<HTMLElement | null>(null)

useMotion(toastRef, {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  leave: { opacity: 0, y: 20 },
  transition: { type: 'spring', stiffness: 300 }
})

onMounted(() => {
  setTimeout(() => emit('remove', props.id), props.duration)
})
</script>

<template>
  <div
    ref="toastRef"
    :class="toastVariants({ variant: props.variant })"
    role="status"
    aria-live="polite"
  >
    {{ props.message }}
  </div>
</template>
