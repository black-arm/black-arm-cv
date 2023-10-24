import { Meta, StoryObj } from "@storybook/react";
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
    component: Layout
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Render: Story = {
    render: () => <Layout>
        <h1>Hello World</h1>
    </Layout>
};