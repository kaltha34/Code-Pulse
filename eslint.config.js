import eslint from '@eslint/js';
import * as parser from '@typescript-eslint/parser';
import * as pluginTypescript from '@typescript-eslint/eslint-plugin';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  eslint.configs.recommended,
  {
    // API configuration
    files: ['packages/api/**/*.ts'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './packages/api/tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypescript,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    // Web configuration
    files: ['packages/web/**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': pluginTypescript,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './packages/web/tsconfig.json',
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  }
];