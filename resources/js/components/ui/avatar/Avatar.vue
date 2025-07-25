<script lang="ts" setup>
  import { type HTMLAttributes } from "vue";
  import { avatarVariants, type AvatarVariantProps } from "./cva";
  import { cn } from "@/lib/utils";

  const props = defineProps<{
    src?: HTMLImageElement["src"];
    alt?: HTMLImageElement["alt"];
    shape?: AvatarVariantProps["shape"];
    status?: AvatarVariantProps["status"];
    class?: HTMLAttributes["class"];
    fallback?: string;
  }>();

  function onError(e: Event) {
    const img = e.target as HTMLImageElement;
    if (props.fallback) img.src = props.fallback;
  }
</script>

<template>
  <div :class="cn(avatarVariants({ shape: props.shape, status: props.status }), props.class)">
    <div>
      <img v-if="props.src" :src="props.src" :alt="props.alt || ''" @error="onError" />
      <slot v-else />
    </div>
  </div>
</template>
