<script setup lang="ts">
  import { ref, provide, computed } from "vue";
  import { selectVariants } from "./variants";
  import { SelectContextKey, type SelectProps } from "./types";
  import { Menu } from "@/components/devjoenet/Menu";

  const props = defineProps<SelectProps>();
  const model = defineModel<any>();

  const selectedLabel = ref("");

  // A simple counter for unique IDs
  let idCounter = 0;
  const popoverId = computed(() => `select-popover-${idCounter++}`);

  function onSelect(value: any, label: string) {
    model.value = value;
    selectedLabel.value = label;
    // Programmatically close the popover after selection
    const popover = document.getElementById(popoverId.value);
    if (popover) {
      popover.hidePopover();
    }
  }

  provide(SelectContextKey, {
    modelValue: model,
    onSelect,
  });

  const displayLabel = computed(() => selectedLabel.value || props.placeholder || "Select an option");
</script>

<template>
  <div class="relative w-full">
    <button type="button" :class="selectVariants(props)" :popovertarget="popoverId">
      <span class="truncate">{{ displayLabel }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 ml-auto">
        <path
          fill-rule="evenodd"
          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div :id="popoverId" popover class="z-10 w-[var(--trigger-width)]">
      <Menu class="shadow-lg bg-base-100 rounded-box">
        <slot />
      </Menu>
    </div>
  </div>
</template>
