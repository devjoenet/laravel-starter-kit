<script setup lang="ts">
  import { inject } from "vue";
  import { withDefaults } from "vue";
  import type { TabProps, TabsProps } from "./types";

  // This is a simplified way to get the parent's 'name' prop for radio tabs.
  // For a more robust solution in a complex app, Vue's provide/inject would be used.
  const parentProps = inject<TabsProps>("tabs-props", {});

  const props = withDefaults(defineProps<TabProps>(), {
    as: "button",
  });
</script>

<template>
  <button v-if="props.as === 'button'" role="tab" class="tab" :class="{ 'tab-active': props.active, 'tab-disabled': props.disabled }">
    <slot />
  </button>
  <input v-else type="radio" :name="parentProps.name" class="tab" role="tab" :aria-label="props.label" :checked="props.active" :disabled="props.disabled" />
</template>
