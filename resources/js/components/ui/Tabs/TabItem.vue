<script lang="ts" setup>
  import { computed, inject } from "vue";

  const props = defineProps<{ value: string | number; disabled?: boolean }>();

  const selectedValue = inject("selectedValue") as { value: string | number };
  const onSelect = inject<(val: string | number) => void>("onSelect");

  const isSelected = computed(() => selectedValue.value === props.value);

  function handleClick() {
    if (props.disabled) return;
    onSelect?.(props.value);
  }
</script>

<template>
  <li>
    <button :class="['tab', isSelected ? 'tab-active' : '', props.disabled ? 'opacity-50 cursor-not-allowed' : '']" @click="handleClick" :disabled="props.disabled">
      <slot />
    </button>
  </li>
</template>
