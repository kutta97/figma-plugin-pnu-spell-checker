module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  importOrder: [
    '^@Data/(.*)$',
    '^@Services/(.*)$',
    '^@Store/(.*)$',
    '^@Assets/(.*)$',
    '^@Components/(.*)$',
    '^@Hooks/(.*)$',
    '^@Views/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
