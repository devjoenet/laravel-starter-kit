<script lang="ts" setup>
  import { computed, type HTMLAttributes } from "vue";
  import { cardVariants, type CardVariantProps } from "./cva";
  import CardBody from "./CardBody.vue";
  import CardActions from "./CardActions.vue";
  import CardTitle from "./CardTitle.vue";
  import { cn } from "@/lib/utils";

  const props = defineProps<CardVariantProps & { class?: HTMLAttributes["class"] }>();

  const classes = computed(() =>
    cn(
      cardVariants({
        variant: props.variant,
        style: props.style,
        side: props.side,
        imageFull: props.imageFull,
        size: props.size,
        shadow: props.shadow,
      }),
      props.class,
    ),
  );
</script>

<template>
  <div :class="classes">
    <slot name="image" />
    <CardBody>
      <template #default>
        <CardTitle v-if="$slots.header">
          <slot name="header" />
        </CardTitle>
        <slot />
        <CardActions v-if="$slots.actions">
          <slot name="actions" />
        </CardActions>
      </template>
    </CardBody>
  </div>
</template>
