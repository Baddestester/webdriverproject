/// <reference types="cypress" />

describe("Contact functionality Test",() => {

    it('Verify that button clicks is functional', () => {
        cy.visit('https://webdriveruniversity.com/index.html');
        cy.get('#button-clicks').click()
        cy.get('#nav-title').should('be.visible').contains('WebdriverUniversity.com')
        cy.get('.caption').should('be.visible')
        cy.get('.caption').click()
        .then(($button) => {
            const url = $button.prop('href');
            console.log('Navigating to URL:', url);
            //cy.visit(url);
            
        })
        

            



        
    })
    
       
       
          


        



})
        
           

        
 
     
