<script lang="ts" setup>
  import { type ImgHTMLAttributes } from "vue";
  import { cn } from "@/lib/utils";
  const props = defineProps<{ src?: ImgHTMLAttributes["src"]; alt?: ImgHTMLAttributes["alt"]; class?: ImgHTMLAttributes["class"] }>();
</script>
<template>
  <figure :v-if="props.src || $slots.length">
    <slot>
      <img :src="props.src" :alt="props.alt" :class="cn('w-full', props.class)" />
    </slot>
  </figure>
</template>
