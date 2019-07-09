module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // "extends": "eslint:recommended",
  extends: ['airbnb'],
//   settings: {
//     'import/resolver': {
//       //   'babel-module': {},
//       node: {
//         paths: ['src'],
//       },
//     },
//   },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
