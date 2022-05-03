describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })
  })

  //в файле cypress.json указан baseurl, поэтому этот код открывает его главную страницу 