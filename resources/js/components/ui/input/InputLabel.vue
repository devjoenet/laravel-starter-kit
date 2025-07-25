<script lang="ts" setup>
  const props = defineProps<{
    forId: string;
    floating: boolean;
    focused: boolean;
    hasValue: boolean;
    disabled?: boolean;
    error?: boolean;
  }>();
</script>

<template>
  <label
    :for="forId"
    :class="[
      'absolute left-4 top-1/2 z-10 pointer-events-none origin-[0] transition-all duration-150',
      floating || focused || hasValue ? 'scale-90 -translate-y-6 text-xs font-medium' : 'text-base text-base-content',
      error ? 'text-error' : '',
      disabled ? 'text-base-content/60' : '',
    ]"
  >
    <slot />
  </label>
</template>
