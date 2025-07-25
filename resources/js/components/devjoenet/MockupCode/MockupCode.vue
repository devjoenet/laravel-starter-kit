<script lang="ts" setup>
  import { computed } from "vue";
  import { mockupCodeVariants } from "./cva";

  const props = defineProps<{ codePrefix?: string; class?: string }>();
  const classes = computed(() => mockupCodeVariants() + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <div :class="classes">
    <pre :data-prefix="props.codePrefix ?? '$'"><code><slot /></code></pre>
  </div>
</template>
