import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { userEvent, within } from "@storybook/testing-library";
//import { expect } from '@storybook/jest';

const meta: Meta<typeof Navbar> = {
    component: Navbar
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Render: Story = {
    render: () => <Navbar />
};

export const DarkMode: Story = {
    //render: () => <Navbar />,
    play: async ({ canvasElement }) => {

        
        const canvas = within(canvasElement);       
        const darkModeButton = canvas.getByTestId('darkModeButton');
        await userEvent.dblClick(darkModeButton);

        //lightSvg !== null ? await expect(canvas.queryByTitle('dark')).toBeTruthy() : 
        //    await expect(canvas.queryByTitle('light')).toBeTruthy();

    }
};