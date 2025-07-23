<script setup lang="ts">
  import { withDefaults } from "vue";
  import { Link as InertiaLink } from "@inertiajs/vue3";
  import { linkVariants } from "./variants";
  import type { LinkProps } from "./types";

  const props = withDefaults(defineProps<LinkProps>(), {
    as: InertiaLink,
  });
</script>

<template>
  <component :is="props.as" :class="linkVariants(props)">
    <slot />
  </component>
</template>
