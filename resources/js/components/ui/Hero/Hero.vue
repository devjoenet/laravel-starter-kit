<script setup lang="ts">
  import { cn } from "@/lib/utils";
  import { heroVariants, HeroVariantProps } from "./cva";

  const props = defineProps<HeroVariantProps>();
</script>

<template>
  <div :class="cn(heroVariants(props), props.class)">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ props.title }}</h1>
        <p v-if="props.subtitle" class="py-6">{{ props.subtitle }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>
