import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactHooksExtra from 'eslint-plugin-react-hooks-extra'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.app.json'],
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      'react-hooks': reactHooks,
      'react-hooks-extra': reactHooksExtra,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: { alwaysTryTypes: true },
        node: { extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'] },
      },
    },
    rules: {
      // Indentation (4 spaces — as in main frontend)
      'indent': ['error', 4],

      // General
      'no-underscore-dangle': 'off',
      'arrow-body-style': 'warn',
      'prefer-promise-reject-errors': 'warn',
      'no-unused-expressions': 'warn',
      'max-len': ['warn', {
        code: 120,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'unicode-bom': 'off',
      'camelcase': 'off',
      'no-shadow': 'off',
      'func-names': ['error', 'never'],
      'eqeqeq': ['error', 'always'],
      'no-trailing-spaces': 'warn',
      'function-paren-newline': 'warn',
      'spaced-comment': 'warn',
      'no-console': 'error',
      'semi': 'off',
      'no-use-before-define': 'off',

      // React
      ...reactPlugin.configs.recommended.rules,
      'react/jsx-indent-props': ['error', 4],
      'react/jsx-indent': ['error', 4],
      'react/jsx-one-expression-per-line': ['warn', { allow: 'non-jsx' }],
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/destructuring-assignment': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/no-array-index-key': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',

      // TypeScript
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      }],
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Imports
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-unresolved': 'error',
      'import/no-cycle': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': ['error', 'ignorePackages', {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }],

      // JSX A11y
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/label-has-for': 'off',
    },
  },

  {
    ignores: ['dist/', 'node_modules/', '**/rsuite/**/*.js'],
  },
]
