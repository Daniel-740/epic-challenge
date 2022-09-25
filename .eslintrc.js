module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
         {
           singleQuote: true,
           trailingComma: 'none',
           arrowParens: 'avoid',
           semi: false
        }
      ],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
}