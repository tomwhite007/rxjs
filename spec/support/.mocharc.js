module.exports = {
  require: [
    'spec/support/mocha-path-mappings.js',
    'dist/spec/helpers/polyfills.js',
    'dist/spec/helpers/testScheduler-ui.js'
  ],
  ui: [
    'dist/spec/helpers/testScheduler-ui.js'
  ],
  reporter: 'dot',
  timeout: 5000,
  recursive: true,
};