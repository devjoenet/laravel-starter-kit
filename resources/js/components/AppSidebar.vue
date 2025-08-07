<script setup lang="ts">
  import { Link, usePage } from "@inertiajs/vue3";
  import { LayoutGrid, Folder, BookOpen } from "lucide-vue-next";
  import AppLogo from "./AppLogo.vue";
  import { computed } from "vue";

  const mainNavItems = [{ title: "Dashboard", href: "/dashboard", icon: LayoutGrid }];

  const footerNavItems = [
    { title: "GitHub Repo", href: "https://github.com/laravel/vue-starter-kit", icon: Folder },
    { title: "Documentation", href: "https://laravel.com/docs/starter-kits#vue", icon: BookOpen },
  ];

  const currentUrl = computed(() => usePage().url);
</script>

<template>
  <nav class="flex flex-col h-full w-full bg-base-200 text-base-content">
    <!-- Logo/Header -->
    <div class="p-4 border-b border-base-300 flex items-center gap-2">
      <Link href="/dashboard" class="flex items-center gap-2">
        <span class="text-lg font-semibold">Vue Starter Kit</span>
      </Link>
    </div>

    <!-- Main Navigation -->
    <ul class="menu px-4 py-2 flex-1">
      <li v-for="item in mainNavItems" :key="item.href" :class="{ active: currentUrl === item.href }">
        <Link :href="item.href" class="flex items-center gap-2">
          <component :is="item.icon" class="w-4 h-4" />
          <span>{{ item.title }}</span>
        </Link>
      </li>
    </ul>

    <!-- Footer Links -->
    <div class="px-4 py-2 border-t border-base-300">
      <ul class="menu">
        <li v-for="item in footerNavItems" :key="item.href" :class="{ active: currentUrl === item.href }">
          <a :href="item.href" target="_blank" class="flex items-center gap-2">
            <component :is="item.icon" class="w-4 h-4" />
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul>

      <!-- User Info (stubbed) -->
      <div class="mt-4 text-xs text-base-content/70">Logged in as: <strong>username@example.com</strong></div>
    </div>
  </nav>
</template>
