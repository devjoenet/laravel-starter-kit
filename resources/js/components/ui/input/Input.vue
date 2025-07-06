<script setup lang="ts">
  import { cn } from "@/lib/utils";
  import { useVModel } from "@vueuse/core";
  import { type HTMLAttributes, InputHTMLAttributes, InputTypeHTMLAttribute, computed } from "vue";

  const props = withDefaults(
    defineProps<{
      id: string;
      name?: InputHTMLAttributes["name"];
      label: string;
      type?: InputTypeHTMLAttribute;
      required?: InputHTMLAttributes["required"];
      disabled?: InputHTMLAttributes["disabled"];
      readonly?: InputHTMLAttributes["readonly"];
      autofocus?: InputHTMLAttributes["autofocus"];
      autocomplete?: InputHTMLAttributes["autocomplete"];
      defaultValue?: string | number;
      modelValue?: string | number;
      class?: HTMLAttributes["class"];
      tabindex?: HTMLAttributes["tabindex"];
      variant?: "filled" | "outlined";
    }>(),
    {
      type: "text",
      variant: "outlined",
      required: false,
      disabled: false,
      readonly: false,
      autofocus: false,
    },
  );

  const emits = defineEmits<{
    (e: "update:modelValue", payload: string | number): void;
  }>();

  const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
  });

  // We need a unique ID for the input to link the label correctly with `for`.
  // If the user doesn't provide one, we'll generate it.
  const inputId = props.id || `input-${Math.random().toString(36).substring(2, 9)}`;

  const inputVariantClasses = computed(() => {
    const defaults = {
      "peer block h-14 w-full text-base text-on-surface outline-none transition-colors duration-200 ease-in-out": true,
      "hover:border-on-surface": true,
      "disabled:pointer-events-none disabled:border-on-surface/12 disabled:text-on-surface/38": true,
      "focus:border-2 focus:border-primary": true,
      "aria-[invalid=true]:border-2 aria-[invalid=true]:border-error": true,
      "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none":
        true,
    };

    if (props.variant === "filled") {
      return cn(defaults, {
        "rounded-t-lg border-b border-outline bg-surface-container-highest px-4 pb-2 pt-6": true,
        "focus:pt-[23px]": true,
        "disabled:bg-on-surface/4": true,
        "aria-[invalid=true]:pt-[23px]": true,
      });
    }

    return cn(defaults, {
      "rounded-lg border border-outline bg-transparent px-4 py-4": true,
      "focus:py-[15px]": true,
      "aria-[invalid=true]:py-[15px]": true,
    });
  });

  const labelVariantClasses = computed(() => {
    const defaults = {
      "pointer-events-none absolute left-4 origin-top-left text-base text-on-surface-variant transition-all duration-200 ease-in-out":
        true,
      "group-focus-within:scale-75 group-focus-within:text-primary": true,
      "peer-[:not(:placeholder-shown)]:scale-75": true,
      "peer-disabled:text-on-surface/38": true,
      "peer-aria-[invalid=true]:text-error": true,
    };

    if (props.variant === "filled") {
      return cn(defaults, {
        "top-4": true,
        "group-focus-within:top-2 group-focus-within:-translate-y-1": true,
        "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-1": true,
      });
    }

    return cn(defaults, {
      "top-1/2 -translate-y-1/2": true,
      "group-focus-within:top-0 group-focus-within:bg-background group-focus-within:px-1": true,
      "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-1":
        true,
    });
  });
</script>

<template>
  <div :class="cn('group relative w-full', props.class)">
    <input
      v-model="modelValue"
      v-bind="$attrs"
      placeholder=" "
      :type="props.type"
      :tabindex="props.tabindex"
      :id="inputId"
      :name="inputId"
      :class="inputVariantClasses" />
    <label :for="inputId" :class="labelVariantClasses">
      {{ props.label }}
    </label>
  </div>
</template>
