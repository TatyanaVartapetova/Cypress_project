/// <reference types="Cypress" />

//const { should } = require("chai")

it('should', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get("[id='searchInput']")
    .type('neva')
    .should('have.value', 'neva') //если цифры то без кавычек и тут и выше
    .and('be.visible')
})


it('should', ()=> {
    cy.visit('https://www.ozon.ru/highlight/ozon-retail-186820/?delivery=1')
    cy.get('[data-widget="searchResultsFilters"]')
})

it('should', ()=> {
    cy.visit('https://litportal.ru/')
    cy.get('#searchbox')
    .type("мураками")
    .should("have.value", "мураками")
})

it('expect', ()=> {    //чем отличаются эти два теста я пока не поняла, явные и неявные проверки. 
    cy.visit('https://litportal.ru/')
    cy.get('#searchbox')
    .type("мураками").then(input=> {
        expect(input).to.have.value("мураками")
    })
})

it('should be checked', ()=> {    
    cy.visit('https://fenzin.org/library/dir/all/popular/')
    cy.get('[name="sort"][value="downloads"]') //value="rating"
    .should('not.be.checked')       //('be.checked')
    
})

it('mouseover', ()=> {    //этот кейс у меня не сработал ни на спортмастере ни на ламоде.
    cy.visit('https://www.sportmaster.ru/')
    cy.contains('ВИДЫ СПОРТА')
    .trigger('mouseover')
    .contains('Велоспорт')
    .should("be.visible")
})

it.only('check correct type of attr', ()=> { 
    cy.visit('https://fantasy-worlds.ru/')
    cy.get('#main_searchbox') 
    .should('have.attr', 'type')
    .and('match',/text/) //тут пишем какое значение у атрибута выше (type)
})