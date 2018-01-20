module.exports = {
    root: true,
    parser: "babel-eslint",
    extends: "airbnb",
    env: {
      mocha: true
    },
    rules: {
      "jsx-a11y/href-no-hash": [0],
      "generator-star-spacing": [0],
      "consistent-return": [0],
      "react/react-in-jsx-scope": [0],
      "react/forbid-prop-types": [0],
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      "global-require": [1],
      "import/prefer-default-export": [0],
      "react/jsx-no-bind": [0],
      "react/prop-types": [0],
      "react/prefer-stateless-function": [0],
      "no-else-return": [0],
      "no-restricted-syntax": [0],
      "import/no-extraneous-dependencies": [0],
      "no-use-before-define": [0],
      "jsx-a11y/no-static-element-interactions": [0],
      "no-nested-ternary": [0],
      "arrow-body-style": [0],
      "import/extensions": [0],
      "no-bitwise": [0],
      "no-cond-assign": [0],
      "import/no-unresolved": [0],
      "require-yield": [1],
      "no-param-reassign": [0],
      "no-shadow": [0],
      "no-underscore-dangle": [0],
      "spaced-comment": [0],
      "quotes": [0],
      "func-names": [0]
    },
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true
      }
    }
  }
  