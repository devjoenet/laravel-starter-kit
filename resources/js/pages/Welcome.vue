<script setup lang="ts">
  import AppLayout from "@/layouts/AppLayout.vue";
  import { Head, Link } from "@inertiajs/vue3";
</script>

<template>
  <Head title="Welcome">
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>
  <AppLayout title="Welcome" subtitle="Your dashboard overview" :withCloseButton="true">
    <template #actions>
      <button class="btn btn-sm btn-accent">Do Action</button>
    </template>

    <div class="card bg-base-100 shadow p-6">
      <h1 class="text-xl font-bold">Hello World</h1>
      <p>This is the content inside AppContent.</p>
    </div>
  </AppLayout>
</template>
