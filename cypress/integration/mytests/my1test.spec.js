/// <reference types="Cypress" />

//const { should } = require("chai")

it('should', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get("[id='searchInput']")
    .type('neva')
    .should('have.value', 'neva') //если цифры то без кавычек и тут и выше
    .and('be.visible')
})


it.only('should', ()=> {
    cy.visit('https://www.ozon.ru/highlight/ozon-retail-186820/?delivery=1')
    cy.get('[data-widget="searchResultsFilters"]')
})