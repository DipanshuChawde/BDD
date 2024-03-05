const { defineConfig } = require("cypress");


module.exports = defineConfig({
  

  env: {
    username : 'Testing Staging Environment' 
    
  },

  e2e: {
    baseUrl : "https://www.amazon.in/"
  },
});