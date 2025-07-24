<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue'
import { pinVariants } from './cva'

const props = defineProps<{
  modelValue: string
  length?: 4 | 6 | 8
  autoFocus?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const inputs = ref<string[]>(Array(props.length || 4).fill(''))
const refs = ref<Array<HTMLInputElement | null>>([])

watch(inputs, async (newVal) => {
  emit('update:modelValue', newVal.join(''))
  const idx = newVal.findIndex(val => val === '')
  if (props.autoFocus && idx >= 0) {
    await nextTick()
    refs.value[idx]?.focus()
  }
})

function onInput(e: Event, idx: number) {
  const val = (e.target as HTMLInputElement).value.slice(-1)
  inputs.value[idx] = val
}
</script>

<template>
  <div class="flex space-x-2">
    <input
      v-for="(_, idx) in (props.length || 4)"
      :key="idx"
      ref="el => refs.value[idx] = el"
      type="text"
      maxlength="1"
      :class="pinVariants({ length: props.length })"
      v-model="inputs[idx]"
      @input="e => onInput(e, idx)"
    />
  </div>
</template>
