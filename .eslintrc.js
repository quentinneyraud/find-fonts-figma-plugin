module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    figma: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@qneyraud/eslint-config/vanilla'
  ],
  plugins: [],
  rules: {}
}
