module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/no-array-index-key': 0,
    '@typescript-eslint/camelcase': 0,
    'consistent-return': 0,
    'no-plusplus': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-rest-params': 0,
    'no-console': 0
  }
};
