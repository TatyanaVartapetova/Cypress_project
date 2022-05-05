/// <reference types="Cypress" />
/// <reference types="Cypress" />

//const { should } = require("chai")

it('by id', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get("#searchInput")
})

it('by class', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get(".search-catalog__block")
})

it('by tag', ()=> {
    cy.visit('https://www.ozon.ru/')
    cy.get("ul")
})

it('by attribute', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get('[data-wba-header-name="Country"]')
})

it('by different attribute', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get('[type="button"][aria-label="Онлайн чат"]')
})

it('by different types', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get('[type="button"][aria-label="Онлайн чат"]')
})

it('by tag and attribute', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get('button[aria-label="Навигация по сайту"]')
})

it.only('by contains name', ()=> {
    cy.visit('https://www.wildberries.ru/')
    cy.get('*[href^="/services"]') // class name start with goods for all (*) selectors
})