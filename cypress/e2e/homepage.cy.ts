describe('template spec', () => {
  it('should active dark mode', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="darkModeButton"]').dblclick();
    cy.get('[data-theme="dark"]').should('exist');
    cy.get('body').should('have.css', 'background-color', "rgba(0, 0, 0, 0)");
  });

  /*it('should view Antonio Basile section', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="info"]').should('exist')
      .contains('Antonio Basile Info');
    cy.get('[data-testid="profileImage"').should('exist')
      .should('have.a.property', 'src', '/images/profile.jpeg');
  });*/
});