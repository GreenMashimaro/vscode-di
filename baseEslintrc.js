/* eslint-disable no-magic-numbers, quote-props */
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    'sourceType': 'module',
    'parser': 'babel-eslint'
  },
  env: {
    'node': true,
    'jquery': true,
    'jest/globals': true,
  },
  plugins: [
    'sonarjs',
    'jest',
    'vue',
  ],
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:sonarjs/recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'array-callback-return': 'error',
    'complexity': ['error', 10],
    'sonarjs/cognitive-complexity': ['error', 15],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'no-else-return': 'error',
    'no-magic-numbers': ['error', { ignore: [0, -1, 1] }],
    'require-await': 'error',

    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
    'max-depth': ['error', 3],
    'max-len': ['error', { code: 100 }],
    'max-lines-per-function': ['error', 50],
    'max-statements-per-line': ['error', { max: 3 }],
    'max-params': ['error', { max: 3 }],
    'max-nested-callbacks': ['error', { max: 2 }],
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',

    'no-confusing-arrow': 'error',
    'no-var': 'error',
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'max-lines-per-function': 'off',
        'max-nested-callbacks': ['warn', 10],
        'no-magic-numbers': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'max-len': ['error', { code: 170 }],
      }
    }
  ]
}
