/// <reference types="cypress" />

describe("Contact functionality Test",() => {
    beforeEach(()=> {
        cy.visit('https://webdriveruniversity.com/index.html');
        
     })

     it.only('Verify that the login feature is functional', () => {
        cy.get('#login-portal').should('be.visible');
        cy.get('#login-portal').click()
        .then(($button) => {
            const url = $button.prop('href');
            cy.visit(url);
        })

        cy.get('#text').type ('Becca01')
    
     })


})    
