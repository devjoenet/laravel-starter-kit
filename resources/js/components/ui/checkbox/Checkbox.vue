<script setup lang="ts">
  import { cn, generateId } from "@/lib/utils";
  import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui";
  import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui";
  import { computed, type HTMLAttributes } from "vue";
  import { reactiveOmit } from "@vueuse/core";
  import { Variants as checkboxVariants, Indeterminate, Checked } from ".";

  const props = defineProps<{ class?: HTMLAttributes["class"]; id?: string } & CheckboxRootProps>();
  const emits = defineEmits<CheckboxRootEmits>();
  const checkboxId = props.id || generateId("patern");
  const isIndeterminate = computed(() => props.modelValue === "indeterminate");
  const forwarded = useForwardPropsEmits(
    computed(() => reactiveOmit(props, ["class", "id"])),
    emits,
  );
</script>

<template>
  <label :for="checkboxId" :class="cn('flex items-center gap-x-3 text-base text-on-surface', props.class)">
    <CheckboxRoot :id="checkboxId" data-slot="checkbox" v-bind="forwarded" :class="cn(checkboxVariants())">
      <CheckboxIndicator data-slot="checkbox-indicator" class="grid place-content-center text-current">
        <Indeterminate v-if="isIndeterminate" />
        <Checked v-else />
      </CheckboxIndicator>
    </CheckboxRoot>
    <slot />
  </label>
</template>
