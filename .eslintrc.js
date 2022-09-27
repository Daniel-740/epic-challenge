module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true
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
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"

  },
  "overrides": [
    {
      "files": ["test/**"],
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": { "jest/prefer-expect-assertions": "off" }
    }
  ],

}
