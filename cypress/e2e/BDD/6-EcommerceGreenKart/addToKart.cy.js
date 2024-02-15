///<reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
//import { contains } from "cypress/types/jquery"

Given('open ecommerse GreenKart',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When('serch product starts with ca',()=>{
    cy.get('[class="search-keyword"]').type('ca')

})

And('add to cart cashews in cart',()=>{
    cy.get('h4[class="product-name"]').each((el, index, arr) => {
        // cy.log(el.text())
        // el.text().replace(' - 1 Kg', ' ').trim()  // Cashews 
        if (el.text().replace(' - 1 Kg', ' ').trim() == 'Cashews') {
            // cy.get(':nth-child(4) > .product-action > button').click()
            cy.get('[class="product-action"] button').eq(index).click({ force: true })
        }
    })
})

When('place order and select country',()=>{
    cy.get('img[alt="Cart"]').click()
    cy.get('[class="action-block"] button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[type="checkbox"]').check()
    cy.contains('Proceed').click()
})

Then('validate thankyou message',()=>{
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})
