<script lang="ts" setup>
  import { type HTMLAttributes } from "vue";
  import { cardVariants, type CardVariantProps } from "./cva";
  import CardBody from "./CardBody.vue";
  import CardActions from "./CardActions.vue";
  import CardTitle from "./CardTitle.vue";
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
