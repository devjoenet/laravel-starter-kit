import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Modal from "../Modal.vue";

const meta = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Modal },
    data() {
      return { open: true };
    },
    template: `
      <Modal v-model="open">
        <template #title>Modal Title</template>
        <p>Modal content goes here.</p>
        <template #actions>
          <button class="btn" @click="open = false">Close</button>
        </template>
      </Modal>
    `,
  }),
};
