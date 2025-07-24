<script lang="ts" setup>
  import { computed } from "vue";
  import { drawerVariants } from "./cva";

  const props = defineProps<{
    id: string;
    side?: "start" | "end";
    modelValue?: boolean;
    responsive?: "none" | "lg";
  }>();
  const emit = defineEmits(["update:modelValue"]);

  const classes = computed(() => drawerVariants({ side: props.side, open: !!props.modelValue, responsive: props.responsive }));

  function toggle() {
    emit("update:modelValue", !props.modelValue);
  }
</script>

<template>
  <div :class="classes">
    <input :id="props.id" type="checkbox" class="drawer-toggle" :checked="props.modelValue" @change="toggle" />
    <div class="drawer-content">
      <slot name="content" />
    </div>
    <div class="drawer-side">
      <label :for="props.id" class="drawer-overlay"></label>
      <slot name="sidebar" />
    </div>
  </div>
</template>
