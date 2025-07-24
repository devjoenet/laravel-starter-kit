<script lang="ts" setup>
  import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
  import Modal from "../Modal/Modal.vue";

  // Props
  const props = defineProps<{
    modelValue: boolean;
    id?: string;
    shortcut?: string;
    searchText?: string;
    noResultsText?: string;
    url?: string;
    fallbackAvatar?: string;
    append?: any;
  }>();
  const emit = defineEmits(["update:modelValue"]);

  // Generate UUID for input id
  const uuid = computed(() => props.id ?? `spotlight-${Math.random().toString(36).substr(2, 9)}`);
  // API URL
  const apiUrl = computed(() => props.url ?? `/api/spotlight`);

  // Reactive state
  const open = ref(props.modelValue);
  const value = ref("");
  const results = ref<any[]>([]);
  const elapsed = ref(0);
  const elapsedStep = 200;
  const elapsedMax = 500;
  const maxDebounce = 250;
  let debounceTimer: ReturnType<typeof setTimeout>;
  let searchTimer: ReturnType<typeof setInterval>;
  let controller = new AbortController();
  const searchedWithNoResults = ref(false);

  // Sync external v-model
  watch(open, (val) => emit("update:modelValue", val));
  watch(
    () => props.modelValue,
    (val) => (open.value = val),
  );

  // Debounce helper
  function debounce(fn: () => void, wait: number) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn(), wait);
  }

  // Timer controls
  function startTimer() {
    elapsed.value = 0;
    searchTimer = setInterval(() => (elapsed.value += elapsedStep), elapsedStep);
  }
  function resetTimer() {
    clearInterval(searchTimer);
    elapsed.value = 0;
  }

  // Search logic
  async function search() {
    if (!value.value) {
      results.value = [];
      searchedWithNoResults.value = false;
      return;
    }
    startTimer();
    try {
      controller.abort();
      controller = new AbortController();
      const res = await fetch(`${apiUrl.value}?search=${encodeURIComponent(value.value)}`, { signal: controller.signal });
      results.value = await res.json();
    } catch (e) {
      console.error(e);
      return;
    } finally {
      resetTimer();
      searchedWithNoResults.value = !results.value.length;
    }
  }

  // Show/Close/Focus
  function show() {
    open.value = true;
  }
  function close() {
    open.value = false;
  }
  function focus() {
    nextTick(() => {
      const input = document.getElementById(uuid.value) as HTMLInputElement;
      input?.focus();
      input?.select();
    });
  }

  // Keyboard shortcuts
  function onKeydown(e: KeyboardEvent) {
    if (props.shortcut && e.key === props.shortcut.replace("meta.", "Meta")) {
      e.preventDefault();
      show();
      focus();
    }
    if (e.key === "Escape") close();
  }
  onMounted(() => window.addEventListener("keydown", onKeydown));
  onUnmounted(() => window.removeEventListener("keydown", onKeydown));

  // Watch input value
  watch(value, () => debounce(search, maxDebounce));
</script>

<template>
  <Modal v-model="open" :id="uuid">
    <div @click.outside="close">
      <div class="flex items-center gap-2 mb-2">
        <input :id="uuid" v-model="value" :placeholder="props.searchText" class="w-full input border-none focus:ring-0" />
        <slot name="append">{{ props.append }}</slot>
      </div>
      <progress v-if="elapsed.value > elapsedMax" class="progress h-[2px] mb-2" :class="{ block: elapsed.value > elapsedMax, hidden: elapsed.value <= elapsedMax }"></progress>
      <div v-if="searchedWithNoResults" class="text-base-content/50 p-3 border-t">
        {{ props.noResultsText }}
      </div>
      <div v-for="(item, i) in results" :key="i" @click="close">
        <a :href="item.link" class="block p-2 hover:bg-base-200 flex items-center gap-2" tabindex="0">
          <template v-if="item.icon">
            <span v-html="item.icon"></span>
          </template>
          <template v-else-if="item.avatar">
            <img :src="item.avatar" class="w-8 h-8 rounded-full" @error="(e) => (e.currentTarget.src = props.fallbackAvatar)" />
          </template>
          <div class="flex-1">
            <div class="font-semibold truncate">{{ item.name }}</div>
            <div v-if="item.description" class="text-sm text-base-content/50 truncate">
              {{ item.description }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </Modal>
</template>
