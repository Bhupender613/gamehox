module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
