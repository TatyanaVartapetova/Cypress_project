       describe ('check api', ()=> {
        it ('check api',()=> {
            cy.request('https://litportal.ru/')
      .then((response) => {
          expect(response.body).to.have.property('code', 200)
      })
       })
       })

       //test doesn't work