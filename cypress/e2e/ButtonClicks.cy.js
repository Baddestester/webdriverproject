/// <reference types="cypress" />

describe("Contact functionality Test",() => {

    it('Verify that button clicks is functional', () => {
        cy.visit('https://webdriveruniversity.com/index.html');
        
        cy.get('#button-clicks').should('be.visible')
        .then(($button) => {
            const url = $button.prop('href');
           // console.log('Navigating to URL:', url);
            cy.visit(url);
        })
            
        cy.get('.thumbnail').contains('WebElement Click')
       // cy.get('.caption').contains('CLICK ME!')
        cy.get('#button1').click()
        
            
            
        
        

            



        
    })
    
       
       
          


        



})
        
           

        
 
     
