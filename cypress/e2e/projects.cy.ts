
describe('Projects page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/projects');
    });
    
    it('should view Titles', () => {
        cy.get('[data-testid="projectTitle"]').contains('I Miei Progetti');
        cy.get('[data-testid="contributionTitle"]').contains('Contributi');
    });
    
    it('should view repo cards', () => {
        
        cy.intercept('https://api.github.com/graphql', { fixture: 'users.json'}).as('userRepository');

        cy.wait('@userRepository');

        cy.get('[data-testid="repoCard"]').should('hava.length', 8);
        
    });

});