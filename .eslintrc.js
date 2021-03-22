module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/base",
    "plugin:vue/recommended",
    "plugin:vue/strongly-recommended",
    "plugin:vue/essential",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "object-curly-spacing": ["error", "never"],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "max-len": ["error", {ignoreUrls: true, code: 120}],
    "vue/mustache-interpolation-spacing": ["error", "never"],
    "vue/name-property-casing": ["error", "kebab-case"],
    quotes: ["error", "double"],
  },
};
