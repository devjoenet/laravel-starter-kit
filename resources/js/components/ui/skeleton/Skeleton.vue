<script lang="ts" setup>
  import { computed } from "vue";
  import { skeletonBase, type SkeletonVariant } from "./cva";
  import { cn } from "@/lib/utils";

  defineOptions({ name: "UiSkeleton" });

  interface Props {
    /** One of: square | circle | circleWithContent | rectangleWithContent */
    variant?: SkeletonVariant;
    /** Extra classes for the outer wrapper (content variants only) */
    wrapperClass?: string;
    /** Extra classes for each skeleton block */
    blockClass?: string;
    /** Width helper for content variants (e.g., 'w-52') */
    widthClass?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: "square",
    wrapperClass: "",
    blockClass: "",
    widthClass: "w-52",
  });

  const isSingle = computed(() => props.variant === "square" || props.variant === "circle");

  const singleClasses = computed(() => {
    const shape = props.variant === "circle" ? "circle" : "square";
    return cn(skeletonBase({ shape }), props.blockClass);
  });

  const lineClass = computed(() => cn(skeletonBase({ shape: "contentBlock" }), props.blockClass));
</script>

<template>
  <!-- Single block variants -->
  <div v-if="isSingle" :class="singleClasses" role="status" aria-busy="true" aria-live="polite" />

  <!-- circle with content -->
  <div v-else-if="variant === 'circleWithContent'" :class="cn('flex flex-col gap-4', widthClass, wrapperClass)" role="status" aria-busy="true" aria-live="polite">
    <div class="flex items-center gap-4">
      <div :class="cn('skeleton h-16 w-16 shrink-0 rounded-full', blockClass)" />
      <div class="flex flex-col gap-4">
        <div :class="cn('skeleton h-4 w-20', blockClass)" />
        <div :class="cn('skeleton h-4 w-28', blockClass)" />
      </div>
    </div>
    <div :class="cn('skeleton h-32 w-full', blockClass)" />
  </div>

  <!-- rectangle with content -->
  <div v-else :class="cn('flex flex-col gap-4', widthClass, wrapperClass)" role="status" aria-busy="true" aria-live="polite">
    <div :class="cn('skeleton h-32 w-full', blockClass)" />
    <div :class="cn('skeleton h-4 w-28', blockClass)" />
    <div :class="lineClass" />
    <div :class="lineClass" />
  </div>
</template>
