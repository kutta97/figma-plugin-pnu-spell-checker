module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,

  importOrder: [
    '^@Assets/(.*)$',
    '^@Components/(.*)$',
    '^@Data/(.*)$',
    '^@Hooks/(.*)$',
    '^@Services/(.*)$',
    '^@Store/(.*)$',
    '^@Views/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
