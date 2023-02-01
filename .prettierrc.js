module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  importOrder: [
    '^@data/(.*)$',
    '^@services/(.*)$',
    '^@store/(.*)$',
    '^@assets/(.*)$',
    '^@components/(.*)$',
    '^@hooks/(.*)$',
    '^@views/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
