module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'no-undef': 'off',
    semi: ['error', 'never'],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'no-trailing-spaces': 'error',
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    indent: [
      'error',
      2
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ]
  }
}
