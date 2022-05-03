describe ('testing something on Google', ()=> {
    it ('i can search smth',()=> {
        cy.visit('https://www.google.com/');
        cy.get("input[name='q']").type('cypress').type('{enter}')
        cy.contains('https://github.com')
    })
})