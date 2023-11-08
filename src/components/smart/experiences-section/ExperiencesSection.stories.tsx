import { Meta, StoryObj } from "@storybook/react";
import { ExperiencesSection } from "./ExperiencesSection";

const meta: Meta<typeof ExperiencesSection> = {
    component: ExperiencesSection
};

export default meta;

type Story = StoryObj<typeof ExperiencesSection>;

export const Render: Story = {
    render: () => <ExperiencesSection />
};