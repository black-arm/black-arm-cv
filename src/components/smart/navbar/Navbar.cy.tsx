
import { Navbar } from './Navbar';

describe('<Navbar />', () => {

  beforeEach(() => {
    cy.readFile('public/images/profile.jpeg', null).then((img) => {
      cy.intercept('_next/image*', {
        statusCode: 200,
        headers: { 'Content-Type': 'image/png' },
        body: img.buffer,
      });
    });
  });

  it('should render', () => {
    cy.mount(<Navbar />);
    cy.get('[data-testid="navbar"]').should('exist');
  });

  it('should have navbar class', () => {
    cy.mount(<Navbar />);
    cy.get('[data-testid="navbar"]').should('have.class', 'navbar');
  });

  it('should have light and dark icon', () => {
    cy.mount(<Navbar />);
    cy.get('[data-testid="darkModeButton"]').should('exist');
  });
});
