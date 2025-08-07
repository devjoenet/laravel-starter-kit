<script lang="ts" setup>
  import { cn } from "@/lib/utils";
  import { onMounted, onUnmounted, computed, type HTMLAttributes } from "vue";

  const props = defineProps<{
    isOpen?: boolean;
    class?: HTMLAttributes["class"];
  }>();

  const emit = defineEmits(["close"]);

  function handleKeydown(e: KeyboardEvent) {
    if (props.isOpen && e.key === "Escape") {
      emit("close");
    }
  }

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
  });

  const asideClasses = computed(() =>
    cn(
      "h-full w-64 bg-base-200 border-base-200 border-r shadow-lg z-40 transition-transform duration-200 ease-in-out",
      props.isOpen !== undefined ? (props.isOpen ? "fixed inset-y-0 left-0 translate-x-0" : "fixed inset-y-0 left-0 -translate-x-full pointer-events-none") : "relative",
      props.class,
    ),
  );
</script>

<template>
  <template>
    <aside :class="asideClasses" @click.stop tabindex="-1" aria-label="Sidebar">
      <!-- Optional close button (mobile only) -->
      <button v-if="isOpen !== undefined" class="absolute top-3 right-3 btn btn-ghost btn-sm md:hidden" @click="$emit('close')" aria-label="Close sidebar">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
      <slot />
    </aside>
  </template>
</template>
