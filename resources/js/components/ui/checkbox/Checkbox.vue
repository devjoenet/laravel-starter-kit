<script setup lang="ts">
  import { cn } from "@/lib/utils";
  import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui";
  import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui";
  import { computed, type HTMLAttributes } from "vue";
  import { reactiveOmit } from "@vueuse/core";
  import { Variants as checkboxVariants, Indeterminate, Checked } from ".";

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

  const checkboxId = props.id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
</script>

<template>
  <label :for="checkboxId" :class="cn('flex items-center gap-x-3 text-base text-on-surface', props.class)">
    <CheckboxRoot :id="checkboxId" data-slot="checkbox" v-bind="forwarded" :class="cn(checkboxVariants())">
      <CheckboxIndicator data-slot="checkbox-indicator" class="grid place-content-center text-current">
        <Indeterminate v-if="isIndeterminate" />
        <Checked v-else />
      </CheckboxIndicator>
    </CheckboxRoot>
    <!-- Slot for the label text -->
    <slot />
  </label>
</template>
