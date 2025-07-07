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

  const inputId = props.id || `input-${Math.random().toString(36).substring(2, 9)}`;

  const variantClasses = computed(() => {
    const baseInputClasses = [
      "peer block h-14 w-full text-base text-on-surface outline-none transition-colors duration-200 ease-in-out",
      "hover:border-on-surface",
      "disabled:pointer-events-none disabled:border-on-surface/12 disabled:text-on-surface/38",
      "focus:border-2 focus:border-primary",
      "aria-[invalid=true]:border-2 aria-[invalid=true]:border-error",
      "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
    ];

    const baseLabelClasses = [
      "pointer-events-none absolute left-4 origin-top-left text-base text-on-surface-variant transition-all duration-200 ease-in-out",
      "group-focus-within:scale-75 group-focus-within:text-primary",
      "peer-[:not(:placeholder-shown)]:scale-75",
      "peer-disabled:text-on-surface/38",
      "peer-aria-[invalid=true]:text-error",
    ];

    if (props.variant === "filled") {
      return {
        input: cn(baseInputClasses, {
          "rounded-t-lg border-b border-outline bg-surface-container-highest px-4 pb-2 pt-6": true,
          "focus:pt-[23px]": true,
          "disabled:bg-on-surface/4": true,
          "aria-[invalid=true]:pt-[23px]": true,
        }),
        label: cn(baseLabelClasses, {
          "top-4": true,
          "group-focus-within:top-2 group-focus-within:-translate-y-1": true,
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-1": true,
        }),
      };
    }

    // Default to 'outlined'
    return {
      input: cn(baseInputClasses, {
        "rounded-lg border border-outline bg-transparent px-4 py-4": true,
        "focus:py-[15px]": true,
        "aria-[invalid=true]:py-[15px]": true,
      }),
      label: cn(baseLabelClasses, {
        "top-1/2 -translate-y-1/2": true,
        "group-focus-within:top-0 group-focus-within:bg-background group-focus-within:px-1": true,
        "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-1":
          true,
      }),
    };
  });
</script>

<template>
  <div :class="cn('group relative w-full', props.class)">
    <input
      :id="inputId"
      :name="name"
      v-model="modelValue"
      placeholder=" "
      :type="type"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :tabindex="tabindex"
      :class="variantClasses.input" />
    <label :for="inputId" :class="variantClasses.label">
      {{ label }}
    </label>
  </div>
</template>
