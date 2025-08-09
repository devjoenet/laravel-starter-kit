import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Dropdown from "../Dropdown.vue";

const meta = {
  title: "UI/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Dropdown },
    template: `
      <Dropdown>
        <template #trigger>
          <button class="btn btn-primary">Open</button>
        </template>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </Dropdown>
    `,
  }),
};
