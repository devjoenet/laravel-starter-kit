<script lang="ts" setup>
import { computed } from 'vue'
import { rangeVariants } from './cva'

const props = defineProps<{
  modelValue: number
  min?: number
  max?: number
  step?: number
  color?: keyof ReturnType<typeof rangeVariants>['variants']['color']
  size?: keyof ReturnType<typeof rangeVariants>['variants']['size']
  disabled?: boolean
  id?: string
}>()
const emit = defineEmits(['update:modelValue'])

const rangeId = props.id || `range-${Math.random().toString(36).slice(2,6)}`
const classes = computed(() =>
  rangeVariants({ color: props.color, size: props.size }) + (props.disabled ? ' opacity-50 cursor-not-allowed' : '')
)
function onInput(e: Event) {
  emit('update:modelValue', parseFloat((e.target as HTMLInputElement).value))
}
</script>

<template>
  <input
    :id="rangeId"
    type="range"
    :class="classes"
    :min="props.min || 0"
    :max="props.max || 100"
    :step="props.step || 1"
    :value="props.modelValue"
    :disabled="props.disabled"
    @input="onInput"
  />
</template>
