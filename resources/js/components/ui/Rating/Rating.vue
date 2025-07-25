<script lang="ts" setup>
  import { ref } from "vue";
  import { ratingVariants } from "./cva";

  const props = defineProps<{
    modelValue: number;
    max?: number;
    disabled?: boolean;
    size?: keyof ReturnType<typeof ratingVariants>["variants"]["size"];
  }>();
  const emit = defineEmits(["update:modelValue"]);

  const current = ref(props.modelValue);
  const stars = Array(props.max || 5).fill(0);

  function select(idx: number) {
    if (!props.disabled) {
      current.value = idx + 1;
      emit("update:modelValue", current.value);
    }
  }
</script>

<template>
  <div :class="ratingVariants({ size: props.size })">
    <input
      v-for="(s, idx) in stars"
      :key="idx"
      type="radio"
      :name="`rating-${Math.random()}`"
      class="mask mask-star"
      :checked="idx < current"
      @click="select(idx)"
      :disabled="props.disabled"
    />
  </div>
</template>
