const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 0,
    setupNodeEvents(on, config) {},
    viewportHeight: 420,
    viewportWidth: 800,
    
  },
});