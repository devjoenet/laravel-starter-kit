<script lang="ts" setup>
  import { provide, ref, computed } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { tabsVariants } from "./cva";

  const props = defineProps<{
    modelValue: string | number;
    style?: "default" | "boxed" | "lift" | "border";
    direction?: "horizontal" | "vertical";
    size?: "sm" | "md" | "lg";
  }>();
  const emit = defineEmits(["update:modelValue"]);

  const selectedValue = ref(props.modelValue);
  provide("selectedValue", selectedValue);
  provide("onSelect", (val: string | number) => {
    selectedValue.value = val;
    emit("update:modelValue", val);
  });

  const tabsRef = ref<HTMLElement | null>(null);
  useMotion(tabsRef, {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    transition: { duration: 200 },
  });

  const classes = computed(() => {
    return tabsVariants({ style: props.style, direction: props.direction, size: props.size });
  });
</script>

<template>
  <ul ref="tabsRef" :class="classes" role="tablist">
    <slot />
  </ul>
</template>
