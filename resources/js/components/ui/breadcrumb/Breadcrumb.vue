<script lang="ts" setup>
  import { computed } from "vue";
  import { breadcrumbsVariants } from "./cva";

  defineProps<{ separator?: "slash" | "arrow" | "dot" }>();
  const props = defineProps<{ separator?: string }>();
  const classes = computed(() => breadcrumbsVariants({ separator: props.separator as any }));
</script>
<template>
  <nav aria-label="breadcrumb">
    <ol :class="classes">
      <slot />
    </ol>
  </nav>
</template>
