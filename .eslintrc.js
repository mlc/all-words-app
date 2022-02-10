module.exports = {
  root: true,
  settings: {
    react: {
      pragma: 'h',
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:compat/recommended',
  ],
  env: { browser: true },
  parserOptions: {
    project: './tsconfig.lint.json',
  },
  rules: {
    'no-else-return': 'off',
    'react/prop-types': 'off',
    'react/no-invalid-html-attribute': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
