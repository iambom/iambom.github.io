module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['unused-imports', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'unused-imports/no-unused-imports': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off', // 문자열 내부 ' " 허용
  },
};