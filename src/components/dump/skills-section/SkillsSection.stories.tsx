import { Meta, StoryObj } from "@storybook/react";
import { SkillsSection } from "./SkillsSection";

const meta: Meta<typeof SkillsSection> = {
    component: SkillsSection
};

export default meta;
type Story = StoryObj<typeof SkillsSection>;

export const Render: Story = {
    render: () => <SkillsSection/>
};