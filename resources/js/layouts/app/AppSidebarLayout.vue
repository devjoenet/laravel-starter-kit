<script setup lang="ts">
  import AppContent from "@/components/AppContent.vue";
  import AppShell from "@/components/AppShell.vue";
  import AppSidebar from "@/components/AppSidebar.vue";
  import AppSidebarHeader from "@/components/AppSidebarHeader.vue";
  import type { BreadcrumbItemType } from "@/types";

  interface Props {
    breadcrumbs?: BreadcrumbItemType[];
  }

  withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
  });
</script>

<template>
  <div class="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
    <div
      class="relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:-left-12 before:w-px before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] after:absolute after:inset-y-0 after:-right-12 after:w-px after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]">
      <AppShell variant="sidebar" class="relative flex min-h-screen flex-col">
        <AppSidebar />
        <AppContent variant="sidebar" class="overflow-x-hidden">
          <AppSidebarHeader :breadcrumbs="breadcrumbs" />
          <slot />
        </AppContent>
      </AppShell>
    </div>
  </div>
</template>
