<script lang="ts" setup>
  import { computed } from "vue";
  import { avatarVariants } from "./Cva";

  const props = defineProps<{
    src?: string;
    alt?: string;
    shape?: "circle" | "squircle" | "hexagon" | "triangle" | "square";
    status?: "online" | "offline" | "placeholder";
    sizeClass?: string;
    fallback?: string;
  }>();

  function onError(e: Event) {
    const img = e.target as HTMLImageElement;
    if (props.fallback) img.src = props.fallback;
  }

  const classes = computed(() => avatarVariants({ shape: props.shape, status: props.status }) + (props.sizeClass ? ` ${props.sizeClass}` : ""));
</script>

<template>
  <div :class="classes">
    <div>
      <img v-if="props.src" :src="props.src" :alt="props.alt || ''" @error="onError" />
      <slot v-else />
    </div>
  </div>
</template>
