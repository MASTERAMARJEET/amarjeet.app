import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: ["**/.astro", "**/.sst", "**/.wrangler"],
  lessOpinionated: true,
  stylistic: {
    overrides: {
      "style/arrow-parens": "off",
    },
    semi: true,
  },
  isInEditor: false,
  formatters: {
    prettierOptions: {
      printWidth: 80,
    },
    astro: "prettier",
  },
  astro: {
    overrides: {
      "antfu/no-top-level-await": "off",
    },
  },
});
