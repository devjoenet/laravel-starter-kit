<script setup lang="ts">
  import { ref, withDefaults } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { buttonVariants } from "./variants";
  import type { ButtonProps } from "./types";

  const props = withDefaults(defineProps<ButtonProps>(), {
    as: "button",
    type: "button",
    active: false,
    disabled: false,
  });

  const buttonRef = ref<HTMLElement>();

  useMotion(buttonRef, {
    hovered: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5,
      },
    },
    tapped: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5,
      },
    },
  });
</script>

<template>
  <component
    :is="props.as"
    ref="buttonRef"
    :class="buttonVariants(props)"
    :type="props.type"
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
    :role="props.as !== 'button' ? 'button' : undefined"
  >
    <slot />
  </component>
</template>
