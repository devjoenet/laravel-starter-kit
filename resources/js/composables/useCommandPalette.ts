import { ref } from "vue";

export const useCommandPalette = () => {
  const open = ref(false);
  const searchQuery = ref("");

  const openCommandPalette = () => {
    searchQuery.value = "";
    open.value = !open.value;
  };

  return { open, searchQuery, openCommandPalette };
};
