<script setup lang="ts">
  import { cn } from "@/lib/utils";
  import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui";
  import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui";
  import { computed, type HTMLAttributes } from "vue";
  import { reactiveOmit } from "@vueuse/core";

  const props = defineProps<
    {
      class?: HTMLAttributes["class"];
      id?: string;
    } & CheckboxRootProps
  >();

  const emits = defineEmits<CheckboxRootEmits>();

  const delegatedProps = computed(() => reactiveOmit(props, ["class", "id"]));

  const forwarded = useForwardPropsEmits(delegatedProps, emits);

  const isIndeterminate = computed(() => props.modelValue === "indeterminate");

  // Generate a unique ID if one isn't provided for the label association
  const checkboxId = props.id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

  const checkboxRootClasses = computed(() => {
    return cn(
      // --- Base classes ---
      "peer flex size-5 shrink-0 items-center justify-center rounded border transition-colors",
      // --- Resting state ---
      "border-outline",
      // --- Checked/Indeterminate state ---
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:text-primary-foreground",
      // --- Focus state (M3 style halo) ---
      "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
      // --- Disabled state ---
      "disabled:cursor-not-allowed disabled:border-on-surface/12 disabled:bg-on-surface/12",
      "disabled:data-[state=checked]:bg-on-surface/12 disabled:data-[state=checked]:text-on-surface/38",
      // --- Invalid state ---
      "aria-[invalid=true]:border-error",
    );
  });
</script>

<template>
  <label :for="checkboxId" :class="cn('flex items-center gap-x-3 text-base text-on-surface', props.class)">
    <CheckboxRoot :id="checkboxId" data-slot="checkbox" v-bind="forwarded" :class="checkboxRootClasses">
      <CheckboxIndicator data-slot="checkbox-indicator" class="grid place-content-center text-current">
        <!-- Indeterminate Icon (Minus) -->
        <svg
          v-if="isIndeterminate"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 6H9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <!-- Checked Icon (Checkmark) -->
        <svg v-else width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 3.5L4.5 9L2 6.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </CheckboxIndicator>
    </CheckboxRoot>
    <!-- Slot for the label text -->
    <slot />
  </label>
</template>
