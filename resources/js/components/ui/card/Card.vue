<script lang="ts" setup>
  import { computed } from "vue";
  import { cardVariants } from "./cva";

  const props = defineProps<{
    style?: "none" | "bordered" | "dash";
    side?: "vertical" | "horizontal";
    imageFull?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    class?: string;
  }>();

  const variantClass = computed(
    () =>
      cardVariants({
        style: props.style,
        side: props.side,
        imageFull: props.imageFull,
        size: props.size,
      }) + (props.class ? ` ${props.class}` : ""),
  );
</script>

<template>
  <div :class="variantClass">
    <slot name="image" />
    <CardBody>
      <template #default>
        <CardHeader v-if="$slots.header">
          <slot name="header" />
        </CardHeader>
        <slot />
        <CardActions v-if="$slots.actions">
          <slot name="actions" />
        </CardActions>
      </template>
    </CardBody>
  </div>
</template>
