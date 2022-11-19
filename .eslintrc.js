module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@assets': './src/assets',
          '@common': './src/common',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@theme': './src/theme',
        },
      },
    },
  },
};
