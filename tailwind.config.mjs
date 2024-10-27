import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        md: '768px',
      },
      maxWidth: {
        md: '768px',
      },
    },
  },
  daisyui: {
    themes: ['light'],
    logs: false,
  },
  plugins: [daisyui],
};
