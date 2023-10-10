import { Meta, StoryObj } from "@storybook/react";
import { InfoSection } from "./InfoSection";

const meta: Meta<typeof InfoSection> = {
    component: InfoSection
};

export default meta;
type Story = StoryObj<typeof InfoSection>;


export const Render: Story = {
    render: () => <InfoSection />
};