<script lang="ts" setup>
  import { computed } from "vue";
  import { tableVariants } from "./cva";

  defineProps<{
    zebra?: boolean;
    pinRows?: boolean;
    pinCols?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
  }>();
  const props = defineProps<any>();
  const classes = computed(() => tableVariants({ zebra: props.zebra, pinRows: props.pinRows, pinCols: props.pinCols, size: props.size }));
</script>

<template>
  <div class="overflow-x-auto">
    <table :class="classes">
      <slot />
    </table>
  </div>
</template>
