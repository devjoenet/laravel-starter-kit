<script lang="ts" setup>
  import { computed } from "vue";
  import { textareaVariants } from "./cva";

  const props = defineProps<{
    modelValue: string;
    rows?: number;
    style?: keyof ReturnType<typeof textareaVariants>["variants"]["style"];
    size?: keyof ReturnType<typeof textareaVariants>["variants"]["size"];
    disabled?: boolean;
    id?: string;
  }>();
  const emit = defineEmits(["update:modelValue"]);

  const textareaId = props.id || `textarea-${Math.random().toString(36).slice(2, 6)}`;
  const classes = computed(() => textareaVariants({ style: props.style, size: props.size }) + (props.disabled ? " opacity-50 cursor-not-allowed" : ""));
  function onInput(e: Event) {
    emit("update:modelValue", (e.target as HTMLTextAreaElement).value);
  }
</script>

<template>
  <textarea :id="textareaId" :class="classes" :rows="props.rows || 4" :value="props.modelValue" :disabled="props.disabled" @input="onInput"></textarea>
</template>
