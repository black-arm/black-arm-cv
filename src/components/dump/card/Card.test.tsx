import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Card } from "./Card";
describe('Card Component', () => {

    test('should show title, info and image', async () => {

        render(<Card title="BeGear srl" info="Info su progetti a cui ho partecipato" image="/image/begear.jpeg"/>);

        const title = await screen.findByTestId('title');
        expect(title.textContent).toBe('BeGear srl');
        
        const info = await screen.findByTestId('info');
        expect(info.textContent).toBe('Info su progetti a cui ho partecipato');

        const image = await screen.findByTestId<HTMLImageElement>('image');
        expect(image.src).contain('begear.jpeg');

    });
});