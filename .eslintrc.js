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
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:compat/recommended',
  ],
  env: { browser: true },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-else-return': 'off',
    'react/prop-types': 'off',
  },
};
