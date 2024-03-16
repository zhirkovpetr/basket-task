module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
    es2021: true
  },
  extends: [
    "prettier",
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      "jsx": true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ['react-refresh', "react", "prettier", "react-hooks", "@typescript-eslint", "import"],
  rules: {
    "no-shadow": "off",
    "no-alert": "error",
    "no-plusplus": "off",
    "no-debugger": "error",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 1
      }
    ],
    "prettier/prettier": "error",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {allowExpressions: true},
    ],
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/prop-types": 0,
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
      }
    ],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-useless-return": "off",
    "import/no-unresolved": [
      2,
      {
        caseSensitive: false
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": ["react"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "groups": ["builtin", "external", "parent", "sibling", "index"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "optionalDependencies": true,
        "peerDependencies": true
      }
    ]
  },
  globals: {"page": true},
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
