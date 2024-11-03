/** @type {import("prettier").Config} */
export default {
  htmlWhitespaceSensitivity: 'ignore',
  semi: true,
  singleQuote: true,
  printWidth: 80,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
