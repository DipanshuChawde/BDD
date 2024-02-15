/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
//import { when } from "cypress/types/jquery"

Given('visit Orange HRM site',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('Enter Username and Password',()=>{
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
})

And('Click on Login button',()=>{
    cy.get('[type="submit"]').eq(0).click()
    cy.wait(4000)
})

Then('validate the {string}',(title)=>{
    cy.get('.oxd-text.oxd-text--h6').should('have.text', title)
})

When('Enter invalid Username and Password',()=>{
    cy.get('[name="username"]').type('dip')
    cy.get('[name="password"]').type('dip123')
})

Then('validate the Error',()=>{
    cy.get('.oxd-alert-content-text').should('have.text', "Invalid credentials")
})