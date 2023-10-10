import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Info } from "@/models";

const meta: Meta<typeof Card> = {
    component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

const info: Info = {
    title: 'Be gear',
    info: 'Bla bla bla bla',
    image: 'images/begear.png'
};

export const Render: Story = {
    render: () => <Card {... info} />
};