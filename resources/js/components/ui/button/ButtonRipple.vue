<script lang="ts" setup>
  import { ref } from "vue";

  const props = defineProps<{ color?: string }>();
  const ripples = ref<Array<{ id: number; style: any }>>([]);

  let rippleId = 0;

  function trigger(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - diameter / 2;
    const y = e.clientY - rect.top - diameter / 2;

    const style = {
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${x}px`,
      top: `${y}px`,
      background: props.color ?? "currentColor",
    };

    ripples.value.push({ id: rippleId++, style });
    setTimeout(() => ripples.value.shift(), 480);
  }

  defineExpose({ trigger });
</script>

<template>
  <span class="pointer-events-none absolute inset-0 z-10">
    <span v-for="r in ripples" :key="r.id" class="absolute rounded-full opacity-20 animate-[ripple_0.48s_linear]" :style="r.style" />
  </span>
</template>

<style scoped>
  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2.5);
    }
  }
</style>
