describe('template spec', () => {
  it('should active dark mode', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="darkModeButton"]').dblclick();
    cy.get('[data-theme="dark"]').should('exist');
    cy.get('body').should('have.css', 'background-color', "rgba(0, 0, 0, 0)");
  });
});