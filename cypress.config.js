const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  //   reporterOptions: {
  //     charts: true,
  //     reportPageTitle: 'custom-title',
  //     embeddedScreenshots: true,
  //     inlineAssets: true,
  //     saveAllAttempts: false,
  // },

  env: {
    "TAGS": "not @ignore"
  },

  e2e: {
    includeShadowDom: true,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});


