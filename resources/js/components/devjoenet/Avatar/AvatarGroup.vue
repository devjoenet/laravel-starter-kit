<script setup lang="ts">
  import { withDefaults } from "vue";
  import type { AvatarGroupProps } from "./types";

  const props = withDefaults(defineProps<AvatarGroupProps>(), {
    spaceClass: "-space-x-6 rtl:space-x-reverse",
  });
</script>

<template>
  <div class="avatar-group" :class="props.spaceClass">
    <slot />
  </div>
</template>
