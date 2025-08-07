<script lang="ts" setup>
  import { computed, ref } from "vue";
  import { usePage } from "@inertiajs/vue3";

  import { Drawer } from "@/components/ui/Drawer";
  import { Breadcrumb } from "@/components/ui/Breadcrumb";

  const page = usePage();
  const breadcrumbs = computed(() => page.props.breadcrumbs ?? []);
  const title = computed(() => page.props.title ?? "");

  const sidebarOpen = ref(false);
  const openSidebar = () => {
    sidebarOpen.value = true;
  };
  const closeSidebar = () => {
    sidebarOpen.value = false;
  };
</script>

<template>
  <div class="flex min-h-screen bg-base-100 text-base-content relative">
    <!-- Mobile: Drawer overlay -->
    <Drawer v-if="sidebarOpen" :open="sidebarOpen" class="fixed inset-0 z-40 block md:hidden" @close="closeSidebar" />

    <!-- Backdrop for mobile sidebar (click to close) -->
    <div v-if="sidebarOpen" class="fixed inset-0 bg-black/40 z-30 md:hidden" @click="closeSidebar"></div>

    <!-- Sidebar (Desktop) -->
    <Drawer class="shrink-0 hidden md:block border-r border-base-200 bg-base-200" />

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <!-- Mobile menu button (hamburger) -->
      <button type="button" class="md:hidden p-3 m-3 rounded btn btn-ghost inline-flex items-center" @click="openSidebar" aria-label="Open sidebar">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div class="px-6 pt-2">
        <Breadcrumb v-if="breadcrumbs" :items="breadcrumbs" />
        <h1 v-else class="text-xl font-semibold mb-4">{{ title }}</h1>
      </div>
      <main class="flex-1 px-6 pb-6 pt-2">
        <slot />
      </main>
    </div>
  </div>
</template>
