<script lang="ts" setup>
  import { ref } from "vue";
  import { useMotion } from "@vueuse/motion";
  import { buttonVariants } from "./cva";
  import { buttonMotion } from "./motion";
  import ButtonRipple from "./ButtonRipple.vue";
  import ButtonContent from "./ButtonContent.vue";

  const props = defineProps<{
    variant?: "filled" | "elevated" | "outlined" | "tonal" | "text" | "icon" | "fab";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    ariaLabel?: string;
  }>();

  const emit = defineEmits(["click"]);

  const btnRef = ref<HTMLButtonElement | null>(null);
  const rippleRef = ref<InstanceType<typeof ButtonRipple> | null>(null);

  useMotion(btnRef, buttonMotion);

  function handleClick(event: MouseEvent) {
    if (rippleRef.value) rippleRef.value.trigger(event);
    if (!props.loading && !props.disabled) emit("click", event);
  }
</script>

<template>
  <button
    ref="btnRef"
    :type="props.type ?? 'button'"
    :class="
      buttonVariants({
        variant: props.variant,
        size: props.size,
        loading: props.loading,
        disabled: props.disabled,
      })
    "
    :aria-label="props.ariaLabel"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
  >
    <!-- Material ripple (only for visible buttons) -->
    <ButtonRipple ref="rippleRef" v-if="['filled', 'elevated', 'tonal', 'outlined', 'text'].includes(props.variant || '')" />
    <ButtonContent :loading="props.loading" :variant="props.variant">
      <template #icon><slot name="icon" /></template>
      <slot />
    </ButtonContent>
  </button>
</template>

<style scoped>
  button:focus-visible {
    outline: 2px solid var(--color-primary, #6366f1);
    outline-offset: 2px;
  }
</style>
