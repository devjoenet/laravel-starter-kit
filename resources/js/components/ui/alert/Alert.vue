<script lang="ts" setup>
  import { computed } from "vue";
  import { alertVariants } from "./cva";
  import AlertIcon from "./AlertIcon.vue";
  import AlertContent from "./AlertContent.vue";
  import AlertDismiss from "./AlertDismiss.vue";

  const props = defineProps<{
    severity?: "info" | "success" | "warning" | "error";
    variant?: "filled" | "outlined" | "soft";
    icon?: boolean;
    dismissible?: boolean;
    title?: string;
    class?: string;
  }>();

  const emit = defineEmits(["close"]);

  const variantClass = computed(() => {
    return (
      alertVariants({
        severity: props.severity,
        variant: props.variant,
      }) + (props.class ? ` ${props.class}` : "")
    );
  });
</script>

<template>
  <div :class="variantClass">
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
