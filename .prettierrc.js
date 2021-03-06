module.exports = {
  printWidth: 100,
  proseWrap: "always",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  overrides: [
    {
      files: "*.scss",
      options: {
        singleQuote: false
      }
    }
  ]
}
