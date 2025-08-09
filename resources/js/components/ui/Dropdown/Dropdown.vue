<script lang="ts" setup>
  import { computed, ref } from "vue";
  import { dropdownVariants } from "./cva";

  const props = defineProps<{
    placement?: "start" | "center" | "end" | "top" | "bottom" | "left" | "right";
    trigger?: "click" | "hover" | "open";
  }>();

  const open = ref(false);
  const classes = computed(() => dropdownVariants({ placement: props.placement, trigger: props.trigger }));

  function toggle() {
    open.value = !open.value;
  }

  function onMouseEnter() {
    if (props.trigger === "hover") open.value = true;
  }

  function onMouseLeave() {
    if (props.trigger === "hover") open.value = false;
  }
</script>

<template>
  <div :class="classes" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <slot name="trigger" @click.prevent="toggle" />
    <ul v-if="open" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
      <slot />
    </ul>
  </div>
</template>
