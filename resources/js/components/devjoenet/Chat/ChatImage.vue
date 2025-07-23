<script setup lang="ts">
  // Assuming you have the Avatar component we built earlier
  import { Avatar } from "@/components/ui/Avatar";
  import type { ChatImageProps } from "./types";

  const props = withDefaults(defineProps<ChatImageProps>(), {
    alt: "User Avatar",
  });
</script>

<template>
  <Avatar :src="props.src" :alt="props.alt" />
</template>
