// eslint.config.mjs

import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginNext from '@next/eslint-plugin-next';

/** @type {import('eslint').Linter.Config} */
const config = {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      React: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    react: eslintPluginReact,
    '@next/next': eslintPluginNext,
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
  },
};

export default config;
