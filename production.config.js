const { defineConfig } = require("cypress");


module.exports = defineConfig({
  

  env: {
    username : 'Testing Production Environment' 
    
  },

  e2e: {
    baseUrl : "https://www.google.com/"
  },
});