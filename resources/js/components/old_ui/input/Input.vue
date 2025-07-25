<script setup lang="ts">
  import { cn, generateId } from "@/lib/utils";
  import { useVModel } from "@vueuse/core";
  import { type HTMLAttributes, InputHTMLAttributes, InputTypeHTMLAttribute } from "vue";
  import { inputVariants, labelVariants } from ".";

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

  const emits = defineEmits<{ (e: "update:modelValue", payload: string | number): void }>();

  const modelValue = useVModel(props, "modelValue", emits, { passive: true, defaultValue: props.defaultValue });

  const inputId = props.id || generateId("input");
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
      :class="cn(inputVariants({ variant }))"
    />
    <label :for="inputId" :class="cn(labelVariants({ variant }))">
      {{ label }}
    </label>
  </div>
</template>
