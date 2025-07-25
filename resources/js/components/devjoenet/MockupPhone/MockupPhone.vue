<script lang="ts" setup>
  import { computed } from "vue";
  import { mockupPhoneVariants } from "./cva";

  const props = defineProps<{ class?: string }>();
  const classes = computed(() => mockupPhoneVariants() + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <div :class="classes">
    <div class="mockup-phone-camera"></div>
    <div class="mockup-phone-display">
      <slot />
    </div>
  </div>
</template>
