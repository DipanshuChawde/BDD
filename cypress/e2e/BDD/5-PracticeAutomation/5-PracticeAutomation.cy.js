///<reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
//import { when } from "cypress/types/jquery";

let userName=""
Given('visit Paractice Automation url',()=>{
    cy.visit('https://practice.automationtesting.in/my-account/')
})

When('user login with Username and password',(datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get('#username').type(element.username)
        cy.get('#password').type(element.password)
    });
    
})

And('click on sign in button',()=>{
    cy.get('[name="login"]').click()

})

Then('dashboard should be visible',()=>{
    cy.get('.is-active > a').should('have.text', 'Dashboard')
})

//--------------------Scenario Outline-----------------

When('user login with {word} and {word}',(un,pw)=>{
    cy.log(un)
    cy.get('#username').type(un)
    cy.get('#password').type(pw)
})

//--------------------Scenario Outline-----------------

When('users login with {string} and {string}',(un,pw)=>{
    cy.log(un)
    cy.get('#username').type(un)
    cy.get('#password').type(pw)
})

//--------------------Scenario Outline-----------------

When('users are login with {word} and {word}',(uid,psw)=>{
    cy.log(uid)
    userName=uid.split('@')[0]
    cy.log(userName)
    cy.get('#username').type(uid)
    cy.get('#password').type(psw)
})


Then('dashboard should be visible for {word} Credentials',(cred)=>{
    
    if(cred=='Valid'){
        cy.get('p  strong ').should('have.text',userName)
    }
    else{
        cy.get(' li strong ').eq(0).should('have.text',"Error:")
    }
})
