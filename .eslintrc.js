module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  "settings": {
    "react": {
        "version": "detect"
    }
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    "requireConfigFile": false,
  },
  plugins: ['react'],
  "parser": "@babel/eslint-parser",
  rules: {
    'react/react-in-jsx-scope': 'off',
    "react/prop-types": "off",
    "no-unused-vars": 'off',
    "prefer-const": 'off',
    "lines-between-class-members": "off",
  }
}
