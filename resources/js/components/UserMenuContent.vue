<script setup lang="ts">
  import UserInfo from "@/components/UserInfo.vue";
  import type { User } from "@/types";
  import { Link, router } from "@inertiajs/vue3";
  import { LogOut, Settings } from "lucide-vue-next";

  interface Props {
    user: User;
  }

  const handleLogout = () => {
    router.flushAll();
  };

  defineProps<Props>();
</script>

<template>
  <li class="p-2">
    <UserInfo :user="user" :show-email="true" />
  </li>
  <li>
    <hr class="mx-2 my-1 border-base-200" />
  </li>
  <li>
    <Link class="flex w-full items-center gap-2" :href="route('profile.edit')" prefetch as="button">
      <Settings class="h-4 w-4" />
      Settings
    </Link>
  </li>
  <li>
    <Link class="flex w-full items-center gap-2" method="post" :href="route('logout')" @click="handleLogout" as="button">
      <LogOut class="h-4 w-4" />
      Log out
    </Link>
  </li>
</template>
