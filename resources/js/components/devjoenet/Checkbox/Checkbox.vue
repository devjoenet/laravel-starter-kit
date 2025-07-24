<script lang="ts" setup>
import { computed } from 'vue'
import { checkboxVariants } from './cva'

const props = defineProps<{
  modelValue: boolean
  color?: keyof ReturnType<typeof checkboxVariants>['variants']['color']
  size?: keyof ReturnType<typeof checkboxVariants>['variants']['size']
  disabled?: boolean
  id?: string
}>()
const emit = defineEmits(['update:modelValue'])

const inputId = props.id || `checkbox-${Math.random().toString(36).slice(2,6)}`
const classes = computed(() =>
  checkboxVariants({ color: props.color, size: props.size }) + (props.disabled ? ' opacity-50 cursor-not-allowed' : '')
)
function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

<template>
  <div class="flex items-center">
    <input
      :id="inputId"
      type="checkbox"
      :class="classes"
      :checked="props.modelValue"
      :disabled="props.disabled"
      @change="onChange"
    />
    <label :for="inputId" class="ml-2"><slot /></label>
  </div>
</template>
