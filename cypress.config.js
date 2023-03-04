const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

const eyesPlugin = require('@applitools/eyes-cypress')
module.exports = eyesPlugin(
  defineConfig({
    // the e2e or component configuration
    e2e: {
      setupNodeEvents(on, config) {},
    },
  }),
)
