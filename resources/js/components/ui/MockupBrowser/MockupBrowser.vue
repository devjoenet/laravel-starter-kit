<script lang="ts" setup>
  import { computed } from "vue";
  import { mockupBrowserVariants } from "./cva";

  const props = defineProps<{ toolbarClass?: string; class?: string }>();
  const classes = computed(() => mockupBrowserVariants() + (props.class ? ` ${props.class}` : ""));
</script>

<template>
  <div :class="classes">
    <div :class="['mockup-browser-toolbar', props.toolbarClass]">
      <slot name="toolbar" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
