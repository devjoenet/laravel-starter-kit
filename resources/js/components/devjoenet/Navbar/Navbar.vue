<template>
  <div class="navbar">
    <div v-if="$slots.start" class="navbar-start">
      <slot name="start" />
    </div>
    <div v-if="$slots.center" class="navbar-center">
      <slot name="center" />
    </div>
    <div v-if="$slots.end" class="navbar-end">
      <slot name="end" />
    </div>
  </div>
</template>
