//import fx from "../../../../fixtures/AEsignup.json"

class HomePage{

    selector = {

         // Rahul Shetty
        GKUrl:'https://rahulshettyacademy.com/seleniumPractise/#/',
        searchBox : '[placeholder="Search for Vegetables and Fruits"]',
        searchClk : '[class="search-button"]',
        productLst : 'h4[class="product-name"]',
        addToCart : '[class="product-action"] button',
        selectCart : 'img[alt="Cart"]',
        proceedToChkOut : '[class="action-block"] > button',
        countryLst : 'select',
        checkBox : '.chkAgree',
        proceedBtn : 'button',

        //Automation Exercise
        AEUrl : 'https://automationexercise.com/',
        signUp : 'a[href="/login"]',
        textValidate : '.signup-form >h2',
        userNameS : '[data-qa="signup-name"] ',
        userEmailS :'[data-qa="signup-email"] ',
        signUpBtn : '[data-qa="signup-button"] ',
        mrsbtn : '#id_gender2',
        mrbtn : '#id_gender1',
        pw : '#password',
        day : '#days',
        month : '#months',
        year : '#years',
        newsletter : '#newsletter',
        optin : '#optin',
        fname : '#first_name',
        lname : '#last_name',
        company : '#company',
        address1 : '#address1',
        address2 : '#address2',
        country : '#country',
        state : '#state',
        city : '#city',
        zipcode : '#zipcode',
        mobno : '#mobile_number',
        creatacc : '[data-qa="create-account"]',
        acccreatedtxt : '.title.text-center > b',
        loginemail : '[data-qa="login-email"]',
        loginpw : '[data-qa="login-password"]',
        loginbtn : '[data-qa="login-button"]',
        logout : 'a[href="/logout"]'


    }
    // Rahul Shetty  //Automation Exercise
    visitUrl(url){
        cy.visit(url)
    }

    // Rahul Shetty
    searchForProduct(str){
        cy.get(this.selector.searchBox).type(str)
        cy.get(this.selector.searchClk).click()
    }

    // Rahul Shetty
    selectProduct(prod){
        cy.wait(4000)
        cy.get(this.selector.productLst).each((el,index,arr)=>{
            cy.log(el.text())
            //cy.log(typeof(el.text().split('-')))
            let prodArr=el.text().split('-')
            if(prodArr[0].trim()==prod){
                cy.get(this.selector.addToCart).eq(index).click({force:true})
            }

        })
    }

    // Rahul Shetty
    placeOrderSelectCountry(){
        cy.get(this.selector.selectCart).click()
        cy.get(this.selector.proceedToChkOut).first().click()
        cy.contains('Place Order').click()
        cy.get(this.selector.countryLst).select('India')
        cy.get(this.selector.checkBox).click()
        cy.get(this.selector.proceedBtn).click()
    }

    // Rahul Shetty
    validation(txt){
        cy.contains(txt).should('be.visible')
    }

    clickOnBtn(btn){
        cy.get(btn).click()
    }

    textValaditation(css,text){
        cy.get(css).should('have.text',text)
    }
    //Automation Exercise
    userSignUp(user){
        cy.get(this.selector.userNameS).type(user.name)
        cy.get(this.selector.userEmailS).type(user.email)
    }

    //Automation Exercise

    CreateUser(user){
        cy.get(this.selector.mrsbtn).click()
        cy.get(this.selector.pw).type(user.password)
        cy.get(this.selector.day).type(user.day)
        cy.get(this.selector.month).type(user.month)
        cy.get(this.selector.year).type(user.year)
        cy.get(this.selector.newsletter).click()
        cy.get(this.selector.optin).click()
        cy.get(this.selector.fname).type(user.fname)
        cy.get(this.selector.lname).type(user.lname)
        cy.get(this.selector.company).type(user.company)
        cy.get(this.selector.address1).type(user.address1)
        cy.get(this.selector.address2).type(user.address2)
        cy.get(this.selector.country).select(user.country)
        cy.get(this.selector.state).type(user.state)
        cy.get(this.selector.city).type(user.city)
        cy.get(this.selector.zipcode).type(user.zipcode)
        cy.get(this.selector.mobno).type(user.mobno)
    }

    //Automation Exercise
    userLogin(user){
        cy.get(this.selector.logout).click()
        cy.get(this.selector.loginemail).type(user.email)
        cy.get(this.selector.loginpw).type(user.password)

    }


}

export default HomePage