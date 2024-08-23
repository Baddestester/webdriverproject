/// <reference types="cypress" />

describe("Contact functionality Test",() => {

    it('Verify that the Accordion & Text Affects feature is functional', () => {
        cy.visit('https://webdriveruniversity.com/index.html');
        cy.get('a[href="Accordion/index.html"]').should('be.visible')
        .then(($button)=> {
            const url= $button.prop('href');
            cy.visit(url);
         })
        cy.get('#main-header').contains('Click on One of the Accordian Items Below!')
        cy.get('.accordion').first().click()// Manual Testing
        cy.get('#manual-testing-description').contains('Manual testing has for some time been the most popular way to test code. For this method, the tester plays an important role of end user and verifies that all the features of the application work correctly. Manual testing however is on the decline. Companies and developers have realised the efficiency, accuracy and cost savings that is possible by adopting the use of automation testing.')
        cy.get('.accordion').first().click()

        // Cucumber BDD
        cy.get('.accordion').eq(1).click()
        cy.get('#cucumber-testing-description').contains('Cucumber (BDD) simplifies the requirement capturing process. Requirements can be captured, broken down and simplified effortlessly; making the captured requirements readable to anyone within the organisation and in turn providing the required details and backbone to develop accurate test cases also known as ‘Feature Files’.')
        cy.get('.accordion').eq(1).click()

        //Automation Testing
        cy.get('.accordion').eq(2).click()
        cy.get('#automation-testing-description').contains('Automation testing has been steadily grown in popularity these past few years thanks to the time/ cost savings and efficiency that it offers. Companies throughout the world have or plan to use automation testing to rapidly speed up their test capabilities. Automation test engineers are in great demand and offer an average salary of £45,000+ (2018). Now is a great time to learn about automation test engineering and this course has been carefully developed to slowly introduce you from the basics, all the way to building advanced frameworks.')
        cy.get('.accordion').eq(2).click()

        //Keep Clicking!
        cy.get('.accordion').eq(3).should('be.visible')
        //Loading complete feature
        cy.get('#hidden-text').should('exist')
        cy.get('#hidden-text', { timeout: 10000 }).should('contain.text', 'LOADING COMPLETE.'); // Increase timeout to 10 seconds
    })
})    