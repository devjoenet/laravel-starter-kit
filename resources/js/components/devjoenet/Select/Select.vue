<script lang="ts" setup>
  import { computed } from "vue";
  import { selectVariants } from "./cva";

  const props = defineProps<{
    modelValue: string | number;
    options: Array<{ label: string; value: string | number }>;
    style?: keyof ReturnType<typeof selectVariants>["variants"]["style"];
    size?: keyof ReturnType<typeof selectVariants>["variants"]["size"];
    disabled?: boolean;
    id?: string;
  }>();
  const emit = defineEmits(["update:modelValue"]);

  const selectId = props.id || `select-${Math.random().toString(36).slice(2, 6)}`;
  const classes = computed(() => selectVariants({ style: props.style, size: props.size }) + (props.disabled ? " opacity-50 cursor-not-allowed" : ""));
  function onChange(e: Event) {
    emit("update:modelValue", (e.target as HTMLSelectElement).value);
  }
</script>

<template>
  <div class="flex flex-col">
    <select :id="selectId" :class="classes" :value="props.modelValue" :disabled="props.disabled" @change="onChange">
      <option v-for="opt in props.options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>
