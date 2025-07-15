<script setup lang="ts">
  import { cn } from "@/lib/utils";
  import { Primitive } from "reka-ui";
  import { computed } from "vue";
  import { reactiveOmit } from "@vueuse/core";
  import { type ButtonProps, variants } from ".";

  const props = withDefaults(defineProps<ButtonProps>(), { as: "button" });
  const delegatedProps = computed(() => reactiveOmit(props, ["variant", "size", "class"]));
</script>

<template>
  <Primitive data-slot="button" v-bind="delegatedProps" :class="cn(variants({ variant, size }), props.class)">
    <slot />
  </Primitive>
</template>
