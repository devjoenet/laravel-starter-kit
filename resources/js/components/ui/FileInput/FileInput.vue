<script lang="ts" setup>
  import { computed, ref } from "vue";
  import { fileInputVariants } from "./cva";

  const props = defineProps<{
    modelValue?: FileList;
    style?: keyof ReturnType<typeof fileInputVariants>["variants"]["style"];
    size?: keyof ReturnType<typeof fileInputVariants>["variants"]["size"];
    disabled?: boolean;
    id?: string;
  }>();
  const emit = defineEmits(["update:modelValue"]);

  const inputId = props.id || `fileinput-${Math.random().toString(36).slice(2, 6)}`;
  const classes = computed(() => fileInputVariants({ style: props.style, size: props.size }) + (props.disabled ? " opacity-50 cursor-not-allowed" : ""));
  const fileList = ref<FileList | undefined>(props.modelValue);

  function onChange(e: Event) {
    fileList.value = (e.target as HTMLInputElement).files || undefined;
    emit("update:modelValue", fileList.value);
  }
</script>

<template>
  <input :id="inputId" type="file" :class="classes" :disabled="props.disabled" @change="onChange" />
</template>
