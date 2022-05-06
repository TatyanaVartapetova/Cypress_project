/// <reference types="Cypress" />
it('type, click,wait', ()=> {
cy.visit("https://fantasy-worlds.ru/")
.get(".row_auth").find("a")
.click()
.get("#login-login")
.type("vartapetova")
.wait(2000) //wait for 2 sec
.clear() //clear input
})

it('submit', ()=> {
    cy.visit("https://fantasy-worlds.ru/")
    .get(".row_auth").find("a")
    .click()
    .get("form[method='POST']")
    .submit() // может использоваться только для form!!!!!
    })

    it('checkbox', ()=> { //применим только к атрибутам radio or checkbox
        cy.visit("https://fantasy-worlds.ru/")
        .get(".row_auth").find("a")
        .click()
        .get("#remember")
        .uncheck() //если сделать чек на уже зачеканом, то ничего не изменится, а тест успешен
        })

        it('select', ()=> { //применим для выпадашек
            cy.visit("https://fantasy-worlds.ru/")
            .get("select").eq(0)
            .select(5)
            })

            it('scrollIntoView', ()=> { 
                cy.visit("https://fantasy-worlds.ru/")
                .get("footer")
                .scrollIntoView() //прокручивает страницу до выбранного элемента по вертикали
                })

                it.only('scrollTo', ()=> { 
                    cy.visit("https://fantasy-worlds.ru/")
                    cy.scrollTo(0, 1000) //прокручивает страницу до указанных координат по гориз и верт
                    })