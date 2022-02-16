module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off'
  }
};
