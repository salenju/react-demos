module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      module: true,
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
}
