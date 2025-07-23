<script setup lang="ts">
  import type { MenuItemProps } from "./types";

  const props = defineProps<MenuItemProps>();
</script>

<template>
  <li
    :class="{
      'menu-disabled': props.disabled,
      'menu-active': props.active,
      'menu-focus': props.focused,
    }"
  >
    <slot />
  </li>
</template>
