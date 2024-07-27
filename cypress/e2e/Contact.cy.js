/// <reference types="cypress" />

describe("Contact functionality Test",() => {
              
   it('Verify that the contact us feature is functional', () => {
        cy.visit('https://webdriveruniversity.com/index.html');
        //cy.get('#contact-us > .thumbnail > .section-title > h1').click()// Contact feature/ Class
        cy.get('#contact-us').should('be.visible')
        .then(($button)=> {
            const url = $button.prop('href');
            cy.visit(url);
        })
        cy.get('[name="first_name"]').type('Becca');
        cy.get('[name="last_name"]').type('Edo');
        cy.get('[name="email"]').type('becca94@yopmail.com');
        cy.get('[name="message"]').type('Automation');
        //cy.get('[type="reset"]').click()// Reset button
        cy.get('[type="submit"]').click()// Submit button
        cy.get('#contact_reply').contains('Thank You for your Message!')


    })
       
       
        
})
   
   



    
        


    
