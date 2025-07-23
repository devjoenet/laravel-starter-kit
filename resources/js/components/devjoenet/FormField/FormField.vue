<script setup lang="ts">
  import { provide, computed, useSlots, type VNode, cloneVNode } from "vue";
  import type { FormFieldProps } from "./types";

  const props = defineProps<FormFieldProps>();
  const slots = useSlots();

  const hasError = computed(() => props.errors && props.errors.length > 0);

  // Provide state to child inputs
  provide("field-has-error", hasError);

  // Function to clone the input from the slot and add error classes/props
  function renderSlot() {
    const defaultSlot = slots.default ? slots.default() : [];
    if (defaultSlot.length === 0) return [];

    const inputVNode: VNode = defaultSlot[0];
    const newProps: Record<string, any> = { ...inputVNode.props };

    // Add error class if there are errors
    if (hasError.value) {
      const existingClass = newProps.class || "";
      // Add a placeholder to ensure the label floats correctly on load if there's a value
      newProps.placeholder = newProps.placeholder || " ";
      newProps.class = [existingClass, "input-error"].join(" ");
    } else {
      // Add a placeholder to ensure the label floats correctly on load if there's a value
      newProps.placeholder = newProps.placeholder || " ";
    }

    return cloneVNode(inputVNode, newProps);
  }
</script>

<template>
  <div class="form-control w-full">
    <label class="floating-label">
      <component :is="renderSlot()" />
      <span>{{ props.label }}</span>
    </label>

    <div v-if="props.errors && props.errors.length > 0" class="label">
      <span class="label-text-alt text-error">{{ props.errors[0] }}</span>
    </div>
  </div>
</template>
