
describe('Projects page', () => {

    beforeEach(() => {
        
    });
    
    it('should view Titles', () => {
        cy.visit('http://localhost:3000/projects');
        cy.get('[data-testid="projectTitle"]').contains('Progetti');
        cy.get('[data-testid="contributionTitle"]').contains('Contributi');
    });
    
    it('should view repo cards', () => {
        
        cy.visit('http://localhost:3000');
        cy.intercept('GET','**/development/projects.json', { fixture: 'users.json'}).as('userRepository');
        cy.get('[data-testid="projectsLink"]').eq(0).click();

      
        cy.wait('@userRepository');

        cy.get('[data-testid="repoCard"]').should('have.length', 7);
        
    });

    it('should visit homepage', () => {
        cy.visit('http://localhost:3000/projects');
        cy.get('[data-testid="homepageLink"]').eq(0).click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

});