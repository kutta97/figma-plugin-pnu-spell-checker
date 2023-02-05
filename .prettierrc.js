module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  importOrder: [
    '^@consts/(.*)$',
    '^@pureComponents/(.*)$',
    '^@data/(.*)$',
    '^@services/(.*)$',
    '^@store/(.*)$',
    '^@assets/(.*)$',
    '^@hooks/(.*)$',
    '^@components/(.*)$',
    '^@views/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
