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
  });

  it('should view projects page', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="projectsLink"]').eq(0).click();
    cy.url().should('include', '/projects');
  });
  
  it("Should open another tab with a different domain URL on click", () => {

    cy.visit("http://localhost:3000");
    cy.get('[data-testid="externalLink"]')
    .find("a").eq(0)
    .invoke('removeAttr', 'target')
    .click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);

    cy.origin('https://github.com', () => {
      cy.url().should('include', 'black-arm');
    });
  });
  

});