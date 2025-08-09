import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Tabs from "../Tabs.vue";
import TabItem from "../TabItem.vue";
import TabPanels from "../TabPanels.vue";
import TabPanel from "../TabPanel.vue";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabItem, TabPanels, TabPanel },
    data() {
      return { tab: "one" };
    },
    template: `
      <Tabs v-model="tab">
        <TabItem value="one">First</TabItem>
        <TabItem value="two">Second</TabItem>
      </Tabs>
      <TabPanels>
        <TabPanel value="one">Panel One</TabPanel>
        <TabPanel value="two">Panel Two</TabPanel>
      </TabPanels>
    `,
  }),
};
