<script lang="ts" setup>
  import { computed } from "vue";
  import { Link as InertiaLink } from "@inertiajs/inertia-vue3";
  import { linkVariants } from "./cva";

  const props = defineProps<{
    href: string;
    style?: "normal" | "hover";
    color?: keyof typeof linkVariants.__config.variants.color;
  }>();

  const classes = computed(() => linkVariants({ style: props.style, color: props.color }));
</script>

<template>
  <!-- Use InertiaLink for internal navigation -->
  <InertiaLink v-if="props.href.startsWith('/')" :href="props.href" :class="classes">
    <slot />
  </InertiaLink>

  <!-- Fallback for external links -->
  <a v-else :href="props.href" :class="classes" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>
