<script lang="ts" setup>
  import { type HTMLAttributes } from "vue";
  import { cardVariants, type CardVariantProps } from "./cva";
  import { cn } from "@/lib/utils";

  const props: CardVariantProps = defineProps<{
    variant?: CardVariantProps["variant"];
    style?: CardVariantProps["style"];
    side?: CardVariantProps["side"];
    imageFull?: CardVariantProps["imageFull"];
    size?: CardVariantProps["size"];
    class?: HTMLAttributes["class"];
  }>();
</script>

<template>
  <div :class="cn(cardVariants({ side: side, imageFull: imageFull, size: size, variant: variant }))">
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
