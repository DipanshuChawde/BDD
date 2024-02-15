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
        signUpBtn : '[data-qa="signup-button"] '


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

    userSignUp(){
        cy.get(this.selector.userNameS).type('dipanshu')
        cy.get(this.selector.userEmailS).type('dipanshu@gmail.com')

    }

}

export default HomePage