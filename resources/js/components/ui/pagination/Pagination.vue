<script lang="ts" setup>
  import { computed } from "vue";
  import { paginationVariants } from "./cva";

  declare const defineProps: any;
  const props = defineProps<{ pages: number; modelValue: number; size?: string }>();
  const emit = defineEmits(["update:modelValue"]);
  const classes = computed(() => paginationVariants({ size: props.size as any }));
  function select(page: number) {
    emit("update:modelValue", page);
  }
</script>
<template>
  <div :class="classes">
    <button v-for="page in props.pages" :key="page" class="btn" :class="{ 'btn-active': page === props.modelValue }" @click="select(page)">
      {{ page }}
    </button>
  </div>
</template>
