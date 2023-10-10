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
    info: `Consulenza in un azienda in ambito banking. Qui ho lavorato su molteplici progetti e 
        mi sono occupato di creare Batch in Java, sviluppi frontend con React e creazione di Rest API con Spring Boot`,
    image: 'images/begear.png'
};

export const Render: Story = {
    render: () => <Card {... info} />
};