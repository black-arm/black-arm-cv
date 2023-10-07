describe('template spec', () => {
  it('should active dark mode', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="darkModeButton"]').dblclick();
    cy.get('[data-theme="dark"]').should('exist');
    cy.get('body').should('have.css', 'background-color', "rgba(0, 0, 0, 0)");
  });

  it('should view Antonio Basile section', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="sectionInfoTitle"]').should('exist')
      .contains('Hello World! Mi chiamo Antonio');
    cy.get('[data-testid="profileImage"]')
      .should('exist')
      .and('have.attr', 'src');
      //.should('have.a.property', 'src', '/images/profile.jpeg');
  });

});