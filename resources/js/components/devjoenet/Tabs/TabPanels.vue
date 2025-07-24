<script lang="ts" setup>
  import { provide, ref } from "vue";

  const props = defineProps<{ modelValue: string | number }>();
  provide("selectedValue", ref(props.modelValue));
</script>

<template>
  <div class="tab-panels">
    <slot />
  </div>
</template>
