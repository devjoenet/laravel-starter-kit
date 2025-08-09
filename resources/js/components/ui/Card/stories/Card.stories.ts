import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Card from "../Card.vue";
import CardActions from "../CardActions.vue";
import CardBody from "../CardBody.vue";
import CardTitle from "../CardTitle.vue";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { Card, CardActions, CardBody, CardTitle },
    template: `
      <Card class="w-64">
        <template #header>Title</template>
        Content
        <template #actions>
          <button class="btn btn-primary btn-sm">Action</button>
        </template>
      </Card>
    `,
  }),
};
