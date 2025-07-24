<script lang="ts" setup>
  import { ref, watch } from "vue";
  import ModalOverlay from "./ModalOverlay.vue";
  import ModalContent from "./ModalContent.vue";
  import ModalHeader from "./ModalHeader.vue";
  import ModalFooter from "./ModalFooter.vue";
  import ModalClose from "./ModalClose.vue";

  const props = defineProps<{
    modelValue: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "full";
  }>();
  const emit = defineEmits(["update:modelValue"]);

  function close() {
    emit("update:modelValue", false);
  }

  // prevent background scroll
  watch(
    () => props.modelValue,
    (val) => {
      document.body.style.overflow = val ? "hidden" : "";
    },
  );
</script>

<template>
  <ModalOverlay v-if="props.modelValue">
    <ModalContent :size="props.size">
      <slot name="header">
        <ModalHeader><slot name="title" /></ModalHeader>
      </slot>
      <ModalClose @close="close" />
      <div class="mt-2">
        <slot />
      </div>
      <slot name="footer">
        <ModalFooter>
          <slot name="actions" />
        </ModalFooter>
      </slot>
    </ModalContent>
  </ModalOverlay>
</template>
