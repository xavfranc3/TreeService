module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    commonjs: true,
    mocha: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
