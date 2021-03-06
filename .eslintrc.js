module.exports = {
  root: true,
  settings: {
    react: {
      pragma: 'h',
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
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
  },
};
