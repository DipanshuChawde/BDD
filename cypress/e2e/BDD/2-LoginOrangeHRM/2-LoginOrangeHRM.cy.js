/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("I navigate to the orangeHRM Website",() =>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});


When("I entered valid login credential", (loginData) =>{
    loginData.hashes().forEach(element => {
        cy.get('[name="username"]').type(element.Username)
        cy.get('[name="password"]').type(element.Password)       
    });

And('User click on Login button',() =>{
    cy.get('[type="submit"]').eq(0).click()
    cy.wait(4000)
});

Then('Validate the title after login orangeHRM',() =>{
    cy.get('[class="oxd-userdropdown-name"]').should('have.text',"oEvncexZWy Collings") 
    //"oEvncexZWy Collings" this text may differ need to check befor assertion (test case may fail some time)
    cy.title().should("eq", "OrangeHRM");
})

});