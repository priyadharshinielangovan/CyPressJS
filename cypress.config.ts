import { defineConfig } from "cypress";
declare var require: any

export default defineConfig({

  env: {
    url: 'https://demoqa.com/'
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
