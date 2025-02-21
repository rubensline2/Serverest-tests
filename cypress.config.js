const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://serverest.dev",
    baseUrl: "https://front.serverest.dev/",
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config);
      // implement node event listeners here
    },
    env: {
      username: 'rubens@test.com',
      products_url: 'PASS'
    },
    experimentalRunAllSpecs: true
  },
});