
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../home"


let selector=new HomePage


Given('open ecommerseGK GreenKart',()=>{
    selector.visitUrl(selector.selector.GKUrl)
})

When('serch products starts with {string}',(str)=>{
    selector.searchForProduct(str)
}) 
    
And('add product to cart {string} in cart',(prod)=>{
    
    selector.selectProduct(prod)
})
    
When('place your order and select country',()=>{
    selector.placeOrderSelectCountry()
}) 
    

Then('validate for thankyou message',()=>{
    selector.validation("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
})