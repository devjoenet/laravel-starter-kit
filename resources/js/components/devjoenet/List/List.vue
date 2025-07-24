<script lang="ts" setup>
  import { computed } from "vue";
  import { listItemVariants } from "./cva";

  const props = defineProps<{
    wrap?: boolean;
    grow?: boolean;
  }>();
  const classes = computed(() => listItemVariants({ wrap: props.wrap, grow: props.grow }));
</script>

<template>
  <li :class="classes">
    <slot />
  </li>
</template>
