<script setup lang="ts">
  import { computed, ref, withDefaults } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { avatarVariants } from "./variants";
  import type { AvatarProps } from "./types";

  const props = withDefaults(defineProps<AvatarProps>(), {
    alt: "avatar",
    sizeClass: "w-16",
  });

  const isPlaceholder = computed(() => !!props.placeholder);

  const imageRef = ref<HTMLElement>();

  useMotion(imageRef, {
    initial: { opacity: 0, scale: 0.95 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 100,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  });
</script>

<template>
  <div ref="imageRef" :class="avatarVariants({ isPlaceholder, status: props.status })">
    <div :class="[sizeClass, ringClass, props.mask ? `mask mask-${props.mask}` : '']">
      <span v-if="isPlaceholder">{{ placeholder }}</span>
      <img v-else :src="src" :alt="alt" />
    </div>
  </div>
</template>
