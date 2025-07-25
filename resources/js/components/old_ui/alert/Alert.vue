<script setup lang="ts">
  import type { HTMLAttributes } from "vue";
  import { InformationCircleIcon, CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from "@heroicons/vue/24/solid";
  import { alertVariants, type AlertVariants } from "@/components/ui/alert/AlertVariants";
  import { cn } from "@/lib/utils";

  const props = defineProps<{
    class?: HTMLAttributes["class"];
    variant?: AlertVariants["variant"];
  }>();

  const iconComponent = {
    info: InformationCircleIcon,
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
  }[props.variant || "info"];
</script>

<template>
  <div :class="cn(alertVariants({ variant }), props.class)" role="alert">
    <component :is="iconComponent" class="h-5 w-5" />
    <slot />
  </div>
</template>
