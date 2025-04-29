

import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginNext from '@next/eslint-plugin-next';

const config = {
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
