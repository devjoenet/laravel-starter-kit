<script setup lang="ts">
  import { computed, withDefaults } from "vue";
  import { ratingVariants } from "./variants";
  import type { RatingProps } from "./types";

  const props = withDefaults(defineProps<RatingProps>(), {
    maxRating: 5,
    mask: "mask-star-2",
  });

  const model = defineModel<number>();

  const groupName = computed(() => props.name || `rating-group-${crypto.randomUUID()}`);
</script>

<template>
  <div :class="ratingVariants(props)">
    <input v-if="clearable" type="radio" :name="groupName" class="rating-hidden" :checked="!model" @change="model = 0" />

    <template v-for="i in maxRating" :key="i">
      <input type="radio" :name="groupName" :class="mask" :checked="model === i" @change="model = i" />
    </template>
  </div>
</template>
