<script lang="ts" setup>
import { inject, computed } from 'vue'

const props = defineProps<{ value: string | number }>()
const selectedValue = inject('selectedValue') as { value: string | number }

const isVisible = computed(() => selectedValue.value === props.value)
</script>

<template>
  <div v-show="isVisible" role="tabpanel">
    <slot />
  </div>
</template>
