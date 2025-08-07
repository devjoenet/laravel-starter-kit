<script setup lang="ts">
  import AppLogoIcon from "@/components/AppLogoIcon.vue";
  import { Card, CardBody, CardTitle } from "@/components/ui/Card";
  import { Link } from "@inertiajs/vue3";

  defineProps<{
    title?: string;
    description?: string;
  }>();
</script>

<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
    <div class="flex w-full max-w-md flex-col gap-6">
      <Link :href="route('home')" class="flex items-center gap-2 self-center font-medium">
        <div class="flex h-9 w-9 items-center justify-center">
          <AppLogoIcon class="size-9 fill-current text-black dark:text-white" />
        </div>
      </Link>
      <div class="flex flex-col gap-6">
        <Card>
          <CardTitle />
          <CardBody>
            <slot />
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
</template>
