/// <reference types="cypress" />

describe("Contact functionality Test",() => {
    it('verify that the Page Object Model feature is functional"Home"', ()=>{
        cy.visit('https://webdriveruniversity.com/index.html')
        cy.get('#page-object-model').should('be.visible')
        .then(($button)=> {
           const url= $button.prop('href');
           cy.visit(url);
        })
        cy.get('#button-find-out-more').click()// Find out more feature
        cy.get('.modal-content').should('be.visible')//Assertion embedded in the find out more feature
        cy.wait(1000)
        cy.get('.btn.btn-default').eq(1).should('be.visible').click()///Close the find out feature
        cy.get('a[href="products.html"]').click() // Our Products
        cy.get('#container-special-offers').click()// Special offers
        cy.contains('button', 'Close').click()
        cy.get('a[href="../Contact-Us/contactus.html"]').click()// Contact us
        cy.get('[name="first_name"]').type('Jen')
        cy.get('[name="last_name"]').type('Secundi')
        cy.get('[name="email"]').type('jensec@gmail.com')
        cy.get('[name="message"]').type('Automation Test')
        cy.get('[type="submit"]').click()
        cy.get('#contact_reply').contains('Thank You for your Message!')


    })

})
        
        

        




