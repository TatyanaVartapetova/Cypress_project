/// <reference types="Cypress" />
it.only('using get with find and eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq')
cy.get('div').find('nav').find('[href="#Syntax"]')
});
