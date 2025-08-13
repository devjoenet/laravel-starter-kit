<script lang="ts" setup>
  import { computed } from "vue";
  import { cardVariants, type CardVariant, type CardSize } from "./cva";

  import CardBody from "./CardBody.vue";
  import CardActions from "./CardActions.vue";
  import CardTitle from "./CardTitle.vue";
  import { cn } from "@/lib/utils";

  defineOptions({ name: "UiCard" });

  interface Props {
    variant?: CardVariant;
    size?: CardSize;
    class?: string; // extra classes on outer card
    as?: keyof HTMLElementTagNameMap | "div";
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: "filled",
    size: "md",
    class: "",
    as: "div",
  });

  const rootClass = computed(() => cn(cardVariants({ variant: props.variant, size: props.size }), props.class));
</script>

<template>
  <component :is="as" :class="rootClass">
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
  </component>
</template>
