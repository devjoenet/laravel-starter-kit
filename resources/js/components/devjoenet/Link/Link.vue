<script setup lang="ts">
  import { LinkVariants, linkVariants } from "./variants";
  import { Link, type InertiaLinkProps } from "@inertiajs/vue3";

  export interface Props extends InertiaLinkProps {
    class?: string;
    tabindex?: number;
    linkStyle?: LinkVariants["linkStyle"];
    color?: LinkVariants["color"];
  }

  const props = withDefaults(defineProps<Props>(), { tabindex: 0, method: "get", as: "a" });
  const { href, tabindex, method, as } = props;
</script>

<template>
  <Link :href="href" :tabindex="tabindex" :method="method" :as="as" :class="linkVariants(props)">
    <slot />
  </Link>
</template>
