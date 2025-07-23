<script setup lang="ts">
  import { inject, ref, onMounted, computed } from "vue"; // Added 'computed'
  import { SelectContextKey, type SelectOptionProps } from "./types";
  import { MenuItem } from "@/components/devjoenet/Menu"; // Reusing our MenuItem component

  const props = defineProps<SelectOptionProps>();

  const context = inject(SelectContextKey);
  if (!context) {
    throw new Error("SelectOption must be used within a Select component.");
  }

  const labelRef = ref<HTMLElement | null>(null);
  // Added check for context
  const isSelected = computed(() => (context ? context.modelValue.value === props.value : false));

  function handleSelect() {
    if (props.disabled || !context) return;
    const label = labelRef.value?.textContent || String(props.value);
    context.onSelect(props.value, label);
  }

  onMounted(() => {
    // Set initial display label if this option is pre-selected
    if (isSelected.value && context) {
      const label = labelRef.value?.textContent || String(props.value);
      // Use onSelect to set the initial state in the parent
      context.onSelect(props.value, label);
    }
  });
</script>

<template>
  <MenuItem :active="isSelected" :disabled="props.disabled" @click="handleSelect">
    <span ref="labelRef">
      <slot />
    </span>
  </MenuItem>
</template>
