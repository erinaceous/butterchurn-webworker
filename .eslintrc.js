module.exports = {
  extends: 'eslint:recommended',
  plugins: ['prettier'],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  rules: {
    curly: 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    semi: ['error', 'always'],
    strict: ['error', 'global'],
  },
};
