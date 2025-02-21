const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://serverest.dev",
    baseUrl: "https://front.serverest.dev/",
    setupNodeEvents(on, config) {
<<<<<<< HEAD
=======
      require('@bahmutov/cy-grep/src/plugin')(config);
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
      // implement node event listeners here
    },
    env: {
      username: 'rubens@test.com',
      products_url: 'PASS'
    },
    experimentalRunAllSpecs: true
  },
});