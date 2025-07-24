<script lang="ts" setup>
  import { computed } from "vue";
  import { navbarVariants } from "./cva";

  const props = defineProps<{
    color?: keyof typeof navbarVariants.__config.variants.color;
    shadow?: keyof typeof navbarVariants.__config.variants.shadow;
    position?: keyof typeof navbarVariants.__config.variants.position;
    padding?: keyof typeof navbarVariants.__config.variants.padding;
    class?: string;
  }>();

  const classes = computed(
    () =>
      navbarVariants({
        color: props.color,
        shadow: props.shadow,
        position: props.position,
        padding: props.padding,
      }) + (props.class ? ` ${props.class}` : ""),
  );
</script>

<template>
  <nav :class="classes" aria-label="Main Navigation">
    <div class="navbar-start">
      <slot name="start" />
    </div>
    <div class="navbar-center hidden lg:flex">
      <slot name="center" />
    </div>
    <div class="navbar-end">
      <slot name="end" />
    </div>
  </nav>
</template>
