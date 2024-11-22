import typography from "@tailwindcss/typography";

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsl(var(${variableName}) / ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
    },

    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-fg"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-bg"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-bg"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fg"),
          surface: withOpacity("--color-surface"),
          muted: withOpacity("--color-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-fg"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-fg"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
      stroke: {
        skin: {
          accent: withOpacity("--color-accent"),
        },
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },

      typography: {
        DEFAULT: {
          css: {
            pre: {
              color: false,
            },
            code: {
              color: false,
            },
          },
        },
      },
    },
  },
  daisyui: {
    themes: ["light"],
    logs: false,
  },
  plugins: [typography],
};
