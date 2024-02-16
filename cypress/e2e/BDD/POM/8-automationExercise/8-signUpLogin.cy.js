import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../home"
//import fx from "../../../../fixtures/AEsignup.json"
import fx from "../../../../fixtures/AEsinup.js"
const fs = require('fs');

let hp = new HomePage
let userPayload;
let currentUser;

// Given('Open Practice Automation - Sign up page',()=>{
//     hp.visitUrl(hp.selector.AEUrl)
// })

Given('Open Practice Automation - Sign up page for index {string}', function (index) {
    // Load user data from the fixture file
    //users = JSON.parse(fs.readFileSync(`C:\Users\tanis\Documents\dipanshu_sw\BDD\BDDProject\cypress\fixtures\AEsignup.json`)).users;
    //currentUser = fx.users[index];
    currentUser = fx[index];
    hp.visitUrl(hp.selector.AEUrl)
});

// And('Fill the infomarton for create new User',()=>{
//     hp.clickOnBtn(hp.selector.signUp)
//     hp.textValaditation(hp.selector.textValidate,"New User Signup!")
//     hp.userSignUp()
//     hp.clickOnBtn(hp.selector.signUpBtn)
//     hp.validation('Enter Account Information')


// })


And('Fill the infomarton for create new User',()=>{
    //const user = this.currentUser;
    hp.clickOnBtn(hp.selector.signUp)
    hp.textValaditation(hp.selector.textValidate,"New User Signup!")
    hp.userSignUp(currentUser)
    hp.clickOnBtn(hp.selector.signUpBtn)
    hp.validation('Enter Account Information')
    hp.CreateUser(currentUser)
    hp.clickOnBtn(hp.selector.creatacc)
    hp.textValaditation(hp.selector.acccreatedtxt,"Account Created!")

})

Then('check for user login',()=>{
    hp.visitUrl(hp.selector.AEUrl)
    hp.userLogin(currentUser)
    hp.clickOnBtn(hp.selector.loginbtn)
    hp.validation(currentUser.name)

})