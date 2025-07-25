<script lang="ts" setup>
  import { HTMLAttributes } from "vue";
  import { cn } from "@/lib/utils";
  import { alertVariants, type AlertVariantProps } from "./cva";
  import AlertIcon from "./AlertIcon.vue";
  import AlertContent from "./AlertContent.vue";
  import AlertDismiss from "./AlertDismiss.vue";

  const props = withDefaults(
    defineProps<{
      severity: AlertVariantProps["severity"];
      variant: AlertVariantProps["variant"];
      icon: boolean;
      dismissible: boolean;
      title?: string;
      class?: HTMLAttributes["class"];
    }>(),
    {
      severity: "info",
      variant: "filled",
      icon: true,
      dismissible: false,
      title: undefined,
      class: undefined,
    },
  );

  const emit = defineEmits(["close"]);
</script>

<template>
  <div :class="cn(alertVariants({ severity, variant }), props.class)">
    <AlertIcon v-if="props.icon || $slots.icon" :severity="props.severity">
      <template #default>
        <slot name="icon" />
      </template>
    </AlertIcon>
    <AlertContent :title="props.title">
      <slot />
    </AlertContent>
    <AlertDismiss v-if="props.dismissible" @close="emit('close')" />
  </div>
</template>
