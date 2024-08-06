/// <reference types="cypress" />

describe("Contact functionality Test",() => {

    it('Verify that To Do List feature is functional', () => {
        cy.visit('https://webdriveruniversity.com/index.html');
        cy.get('#to-do-list').should('be.visible');
        cy.get('#to-do-list').click()
        .then(($button) => {
            const url = $button.prop('href');
            cy.visit(url);
        })
         //To verify that tasks can be struck out
            //cy.get('#plus-icon').click()// The To Do List Icon
            cy.get('[type="text"]').type('Go to the market')
            cy.contains('Go to potion class').should('be.visible')
            cy.contains('Go to potion class').click();
            cy.contains('Go to potion class').should('have.css', 'text-decoration', 'line-through solid rgb(128, 128, 128)'); 
             // To verify that task 2 can be struck out
            cy.contains('Buy new robes').should('be.visible')
            cy.contains('Buy new robes').click();
            cy.contains('Buy new robes').should('have.css', 'text-decoration', 'line-through solid rgb(128, 128, 128)')

            
        // To verify that a task can be added and also deleted
            cy.get('[type="text"]').type('Go to the office{enter}');
            cy.contains('Go to the office').should('be.visible');
            cy.contains('Go to the office').trigger('mouseover');
            cy.contains('Go to the office').parent().within(() => {
            cy.get('.fa-trash').last().click();
        });
            cy.contains('Go to the office').should('not.exist');

    })  
})
