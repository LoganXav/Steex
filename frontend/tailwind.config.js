/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mui: {
          primary: {
            main: "var(--color-mui-primary-main)",
            tertiary: "var(--color-mui-primary-tertiary)",
            light: "var(--color-mui-primary-light)",
            lighter: "var(--color-mui-primary-lighter)",
            lightAlt: "var(--color-mui-primary-lightAlt)",
            dark: "var(--color-mui-primary-dark)",
            darker: "var(--color-mui-primary-darker)",
            darkAlt: "var(--color-mui-primary-darkAlt)",
            contrastText: "var(--color-mui-primary-contrastText)",
          },
          secondary: {
            main: "var(--color-mui-secondary-main)",
            light: "var(--color-mui-secondary-light)",
            lighter: "var(--color-mui-secondary-lighter)",
            lightAlt: "var(--color-mui-secondary-lightAlt)",
            dark: "var(--color-mui-secondary-dark)",
            contrastText: "var(--color-mui-secondary-contrastText)",
          },
          success: {
            main: "var(--color-mui-success-main)",
            light: "var(--color-mui-success-light)",
            lighter: "var(--color-mui-success-lighter)",
            dark: "var(--color-mui-success-dark)",
            contrastText: "var(--color-mui-success-contrastText)",
          },
          info: {
            main: "var(--color-mui-info-main)",
            light: "var(--color-mui-info-light)",
            dark: "var(--color-mui-info-dark)",
            contrastText: "var(--color-mui-info-contrastText)",
          },
          warning: {
            main: "var(--color-mui-warning-main)",
            light: "var(--color-mui-warning-light)",
            dark: "var(--color-mui-warning-dark)",
            contrastText: "var(--color-mui-warning-contrastText)",
          },
          error: {
            main: "var(--color-mui-error-main)",
            light: "var(--color-mui-error-light)",
            dark: "var(--color-mui-error-dark)",
            contrastText: "var(--color-mui-error-contrastText)",
          },
          common: {
            black: "var(--color-mui-common-black)",
            white: "var(--color-mui-common-white)",
          },
          text: {
            primary: "var(--color-mui-text-primary)",
            secondary: "var(--color-mui-text-secondary)",
            disabled: "var(--color-mui-text-disabled)",
          },
          background: {
            paper: "var(--color-mui-background-paper)",
            default: "var(--color-mui-background-default)",
          },
          action: {
            active: "var(--color-mui-action-active)",
            hover: "var(--color-mui-action-hover)",
            selected: "var(--color-mui-action-selected)",
            disabled: "var(--color-mui-action-disabled)",
            disabledBackground: "var(--color-mui-action-disabledBackground)",
            focus: "var(--color-mui-action-focus)",
          },
        },
      },
    },
  },
  plugins: [],
};
