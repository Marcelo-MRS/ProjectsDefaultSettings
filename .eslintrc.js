module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    __DEV__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    semi: ['error', 'never'],
    'global-require': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-raw-text': 'off',
    'react/prop-types': 'off',
    'react/no-unused-state': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'no-constant-condition': 'off',
    'array-callback-return': 'off',
    camelcase: 'off',
    'no-param-reassign': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': { rootPathSuffix: 'src' },
    },
  },
}
