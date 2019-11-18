module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    'no-console': 0,
    "prettier/prettier": ["error"],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  plugins: ['prettier', 'import', 'jest', '@typescript-eslint'], //
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
      }
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx']
  }
}