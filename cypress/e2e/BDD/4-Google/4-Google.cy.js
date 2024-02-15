///<reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I open Google Page',()=>{
    cy.visit('https://www.google.com/')
})

When('I see {string} in the title',(title)=>{
    cy.title().should('include',title)
})

Then('I see {string} in url',(url)=>{
    cy.url().should('include',url)

})