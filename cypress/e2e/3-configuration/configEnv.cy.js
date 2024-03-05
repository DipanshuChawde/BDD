describe('Environment Configuration',()=>{
    it('testing with different configuration',()=>{
        cy.visit("")  //this will take base url from production or stagging config.js file
        cy.log('pring the username: ' +Cypress.env('username'))
    })
})

    it.only('Testing with json env file: 3rd way',()=>{
        cy.visit(Cypress.env('production_url'))
        cy.visit(Cypress.env('staging_url'))
    })





// cy.visit("https://www.uat1.amzon.com")
// cy.visit("https://www.uat3.google.com")

// First Way
// npx cypress open --config-file stag.config.js
// npx cypress open --config-file prod.config.js



// Second Way
// package.json

// include following line on package.json first { }
// "cypress-stage-test ": "npx cypress run --headed --browser electron --spec cypress/e2e/3-configuration/configEnv.cy.js --config-file staging.config.js",
//"cypress-prod-test": "npx cypress run --headed --browser electron --spec cypress/e2e/3-configuration/configEnv.cy.js --config-file production.config.js"

//copy path of cy.js file in above command and change the slash and select proper browser
//C:\Users\tanis\Documents\dipanshu_sw\BDD\BDDProject\cypress\e2e\3-configuration

//and run using following command
// npm run cypress-stage-test
// npm run cypress-prod-test


// Third Way
// create env file(cypress.env.json)
//copy staging and production url in it as json data as follow
// {
//     "production_url" : "https://www.google.com/",
//     "staging_url" : "https://www.amazon.in/"
// }

// change spec pattern as follow in cypressConfig.config.js
// specPattern: ["**/*.feature", "**/*.cy.js"],

//run by command mpx cypress open
