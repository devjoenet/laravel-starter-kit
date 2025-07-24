<script lang="ts" setup>
import { computed, inject } from 'vue'
import { tabsVariants } from './cva'

const props = defineProps<{
  value: string | number
  disabled?: boolean
}>()
const emit = defineEmits<{
  (e: 'select', value: string | number): void
}>()

// Inject selectedValue from parent
const selectedValue = inject('selectedValue') as { value: string | number }

const isSelected = computed(() => {
  return selectedValue.value === props.value
})

function onClick() {
  if (!props.disabled) emit('select', props.value)
}
</script>

<template>
  <li>
    <button
      :class="[
        'tab',
        isSelected ? 'tab-active' : '',
        props.disabled ? 'opacity-50 cursor-not-allowed' : ''
      ]"
      @click="onClick"
      :disabled="props.disabled"
    >
      <slot />
    </button>
  </li>
</template>
