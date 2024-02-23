///<reference types ="cypress" />
import { Given, When } from "cypress-cucumber-preprocessor/steps"

Given('Custom Command for login with {word} and {word}',(email,pw)=>{
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    // cy.get('[id="input-email"]').type('lambdatest11@yopmail.com');
    // cy.get('[id="input-password"]').type('lambdatest21');
    // cy.get('[type="submit"]').eq(0).click();
    // cy.title().should("eq", "Search -");
    cy.login(email,pw)
})

When('Dual Custom Command',()=>{

})