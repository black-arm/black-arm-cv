import { Card } from "./Card";

describe('Card Component', () => {

    it('should show title, info and image', () => {
        cy.readFile('public/images/begear.png', null).then((img) => {
            // Intercept requests to Next.js backend image endpoint
            cy.intercept('_next/image*', {
              statusCode: 200,
              headers: { 'Content-Type': 'image/png' },
              body: img.buffer,
            });
        });
        cy.mount(<Card title="BeGear srl" info="Info su progetti a cui ho partecipato" image="/image/begear.jpeg"/>);
        cy.get('[data-testid="title"]').contains('BeGear srl');
        cy.get('[data-testid="info"]').contains("Info su progetti a cui ho partecipato");
    });
});