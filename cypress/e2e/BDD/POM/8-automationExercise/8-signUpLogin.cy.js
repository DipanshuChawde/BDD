import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../home"
import fx from "../../../../fixtures/AEsignup.json"

let hp = new HomePage

Given('Open Practice Automation - Sign up page',()=>{
    hp.visitUrl(hp.selector.AEUrl)
})

And('Fill the infomarton for create new User',()=>{
    hp.clickOnBtn(hp.selector.signUp)
    hp.textValaditation(hp.selector.textValidate,"New User Signup!")
    hp.userSignUp()
    hp.clickOnBtn(hp.selector.signUpBtn)
    hp.validation('Enter Account Information')


})

Then('Validates the User created message',()=>{

})