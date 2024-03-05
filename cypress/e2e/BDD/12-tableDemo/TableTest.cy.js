/// <reference types = "cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given('Table data',()=>{
    cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.table').within(()=>{
        cy.get('.bg-primary > [scope="col"]').first().should('have.text',"#")
        cy.get('.bg-primary > [scope="col"]').last().should('have.text',"Last")
        cy.get('.bg-primary > [scope="col"]').eq(1).should('have.text',"First")
        cy.get('.bg-primary > [scope="col"]').should('have.length',3)
        cy.wait(4000)
        //cy.get('.table > tbody > .bg-info').should('have.length',3)
        cy.get('[class="bg-info"]').should('have.length',3)
        
    })
})

Then('check for data',()=>{

})