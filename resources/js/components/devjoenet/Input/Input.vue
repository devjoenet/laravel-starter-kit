<script lang="ts" setup>
  import { ref, computed, watch } from "vue";
  import { useVModel } from "@vueuse/core";
  import { useMotion } from "@vueuse/motion";
  import { inputVariants } from "./input.cva";
  import InputLabel from "./InputLabel.vue";
  import InputContent from "./InputContent.vue";
  import InputHelper from "./InputHelper.vue";
  import InputIcon from "./InputIcon.vue";

  const props = defineProps<{
    modelValue?: string;
    label?: string;
    id?: string;
    type?: string;
    placeholder?: string;
    variant?: "filled" | "outlined";
    state?: "default" | "error" | "success" | "disabled";
    helper?: string;
    errorMessage?: string;
    leftIcon?: boolean;
    rightIcon?: boolean;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string;
  }>();

  const emit = defineEmits(["update:modelValue", "blur", "focus", "input"]);

  const inputId = computed(() => props.id || `input-${Math.random().toString(36).slice(2, 8)}`);
  const value = useVModel(props, "modelValue", emit);
  const focused = ref(false);

  const showError = computed(() => props.state === "error" && !!props.errorMessage);
  const floating = computed(() => !!props.label);
  const hasValue = computed(() => value.value && value.value.length > 0);

  const inputRef = ref<HTMLInputElement | null>(null);
  useMotion(inputRef, {
    initial: { scale: 1 },
    focus: { scale: 1.01, boxShadow: "0 2px 6px 0 var(--color-primary, #6366f1)" },
  });

  function handleFocus(e: FocusEvent) {
    focused.value = true;
    emit("focus", e);
  }
  function handleBlur(e: FocusEvent) {
    focused.value = false;
    emit("blur", e);
  }
  function handleInput(e: Event) {
    emit("input", e);
  }
</script>

<template>
  <div class="w-full mb-4 relative">
    <InputContent :hasLeftIcon="!!$slots['icon-left']" :hasRightIcon="!!$slots['icon-right']" :disabled="props.disabled" :error="props.state === 'error'">
      <InputIcon v-if="$slots['icon-left']" side="left"><slot name="icon-left" /></InputIcon>
      <input
        ref="inputRef"
        :id="inputId"
        :type="props.type || 'text'"
        :placeholder="floating ? ' ' : props.placeholder || ''"
        :disabled="props.disabled || props.state === 'disabled'"
        :autocomplete="props.autocomplete"
        :required="props.required"
        v-model="value"
        :class="
          inputVariants({
            variant: props.variant,
            state: props.state || (props.disabled ? 'disabled' : 'default'),
          })
        "
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      />
      <InputLabel
        v-if="floating && props.label"
        :for-id="inputId"
        :floating="floating"
        :focused="focused"
        :has-value="hasValue"
        :disabled="props.disabled"
        :error="props.state === 'error'"
      >
        {{ props.label }}
      </InputLabel>
      <InputIcon v-if="$slots['icon-right']" side="right"><slot name="icon-right" /></InputIcon>
    </InputContent>
    <InputHelper v-if="props.helper && !showError" :error="false">{{ props.helper }}</InputHelper>
    <InputHelper v-if="showError" :error="true">{{ props.errorMessage }}</InputHelper>
  </div>
</template>
