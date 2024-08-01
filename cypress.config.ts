import { defineConfig } from "cypress";

export default defineConfig({

  env: {
    url: 'https://demoqa.com/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
