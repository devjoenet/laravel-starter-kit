<script lang="ts" setup>
import { Teleport } from 'vue'
</script>

<template>
  <Teleport to="body">
    <div class="modal modal-open fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <slot />
    </div>
  </Teleport>
</template>
