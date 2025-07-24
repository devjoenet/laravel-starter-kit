
<script lang="ts" setup>
import { computed } from 'vue'
import { radioVariants } from './cva'

const props = defineProps<{
  modelValue: string | number
  value: string | number
  color?: keyof ReturnType<typeof radioVariants>['variants']['color']
  size?: keyof ReturnType<typeof radioVariants>['variants']['size']
  disabled?: boolean
  id?: string
}>()
const emit = defineEmits(['update:modelValue'])

const inputId = props.id || `radio-${Math.random().toString(36).slice(2,6)}`
const classes = computed(() =>
  radioVariants({ color: props.color, size: props.size }) + (props.disabled ? ' opacity-50 cursor-not-allowed' : '')
)
function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="flex items-center">
    <input
      :id="inputId"
      type="radio"
      :class="classes"
      :value="props.value"
      :checked="props.modelValue === props.value"
      :disabled="props.disabled"
      @change="onChange"
    />
    <label :for="inputId" class="ml-2"><slot /></label>
  </div>
</template>
