<script lang="ts" setup>
  import { computed } from "vue";
  import { breadcrumbsVariants } from "./cva";

  const props = defineProps<{ separator?: "slash" | "arrow" | "dot" }>();

  const classes = computed(() => breadcrumbsVariants({ separator: props.separator as any }));
</script>
<template>
  <nav aria-label="breadcrumb">
    <ol :class="classes">
      <slot />
    </ol>
  </nav>
</template>
