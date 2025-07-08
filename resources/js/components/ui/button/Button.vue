<script setup lang="ts">
  import { cn } from "@/lib/utils";
  import { Primitive, type PrimitiveProps } from "reka-ui";
  import { computed, type HTMLAttributes } from "vue";
  import { reactiveOmit } from "@vueuse/core";
  import { type ButtonVariants, Variants } from ".";

  interface Props extends PrimitiveProps {
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: HTMLAttributes["class"];
  }

  const props = withDefaults(defineProps<Props>(), {
    as: "button",
  });

  const delegatedProps = computed(() => reactiveOmit(props, ["variant", "size", "class"]));
</script>

<template>
  <Primitive data-slot="button" v-bind="delegatedProps" :class="cn(Variants({ variant, size }), props.class)">
    <slot />
  </Primitive>
</template>
