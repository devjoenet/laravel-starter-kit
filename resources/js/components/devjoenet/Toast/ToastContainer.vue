<script lang="ts" setup>
import { Teleport } from 'vue'
import { toasts, useToast } from './useToast'
import ToastItem from './ToastItem.vue'
</script>

<template>
  <Teleport to="body">
    <div class="fixed bottom-4 right-4 z-50 flex flex-col-reverse">
      <ToastItem
        v-for="t in toasts"
        :key="t.id"
        :id="t.id"
        :message="t.message"
        :variant="t.variant"
        :duration="t.duration"
        @remove="useToast().removeToast"
      />
    </div>
  </Teleport>
</template>
