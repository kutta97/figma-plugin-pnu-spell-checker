module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  importOrder: [
    '^@consts/(.*)$',
    '^@utils/(.*)$',
    '^@components/(.*)$',
    '^@data/(.*)$',
    '^@services/(.*)$',
    '^@store/(.*)$',
    '^@assets/(.*)$',
    '^@hooks/(.*)$',
    '^@fragments/(.*)$',
    '^@views/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
