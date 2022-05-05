/// <reference types="Cypress" />

it('using get with find and eq', ()=> {
    cy.visit('https://kuchaknig.org/fotoalbums/')
    cy.get(".wrap").find(".album_cover").find(".comment").eq(3)
})

it.only('using get with find and eq', ()=> {
    cy.visit('https://kuchaknig.org/')
    cy.get("#left_navigation").find("ul").find("li").find("a").eq(0)
})