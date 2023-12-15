/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // important: "#app",
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        mui: {
          primary: {
            main: "var(--color-primary-main)",
            light: "var(--color-primary-light)",
            lighter: "var(--color-primary-lighter)",
            lightAlt: "var(--color-primary-lightAlt)",
            dark: "var(--color-primary-dark)",
            darker: "var(--color-primary-darker)",
            darkAlt: "var(--color-primary-darkAlt)",
            contrastText: "var(--color-primary-contrastText)",
          },
          primaryGradient: {
            main: "var(--color-primary-main)",
            contrastText: "var(--color-primary-contrastText)",
          },
          text: {
            default: "var(--color-mui-text-default)",
          },
          secondary: {
            main: "var(--color-secondary-main)",
            light: "var(--color-secondary-light)",
            lighter: "var(--color-secondary-lighter)",
            lightAlt: "var(--color-secondary-lightAlt)",
            dark: "var(--color-secondary-dark)",
            darker: "var(--color-secondary-darker)",
            contrastText: "var(--color-secondary-contrastText)",
          },
          success: {
            main: "var(--color-success-main)",
            light: "var(--color-success-light)",
            lighter: "var(--color-success-lighter)",
            dark: "var(--color-success-dark)",
            contrastText: "var(--color-success-contrastText)",
          },
          info: {
            main: "var(--color-info-main)",
            light: "var(--color-info-light)",
            lighter: "var(--color-info-lighter)",
            dark: "var(--color-info-dark)",
            contrastText: "var(--color-info-contrastText)",
          },
          warning: {
            main: "var(--color-warning-main)",
            light: "var(--color-warning-light)",
            lighter: "var(--color-warning-lighter)",
            dark: "var(--color-warning-dark)",
            contrastText: "var(--color-warning-contrastText)",
          },
          error: {
            main: "var(--color-error-main)",
            light: "var(--color-error-light)",
            lighter: "var(--color-error-lighter)",
            dark: "var(--color-error-dark)",
            contrastText: "var(--color-error-contrastText)",
          },
          common: {
            black: "var(--color-common-black)",
            white: "var(--color-common-white)",
          },
          text: {
            primary: "var(--color-text-primary)",
            secondary: "var(--color-text-secondary)",
            disabled: "var(--color-text-disabled)",
          },
          background: {
            paper: "var(--color-background-paper)",
            default: "var(--color-background-default)",
          },
          action: {
            active: "var(--color-action-active)",
            hover: "var(--color-action-hover)",
            selected: "var(--color-action-selected)",
            disabled: "var(--color-action-disabled)",
            disabledBackground: "var(--color-action-disabledBackground)",
            focus: "var(--color-action-focus)",
          },
        },

        fontFamily: {
          inherit: ["inherit"],
          segoeui: [
            "Segoe UI",
            "-apple-system",
            "BlinkMacSystemFont",
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "sans-serif",
          ],
        },
        zIndex: {
          mobileStepper: 1000,
          speedDial: 1050,
          appBar: 1100,
          drawer: 1200,
          modal: 1300,
          snackbar: 1400,
          tooltip: 1500,
        },
        backgroundImage: {
          primaryGradient: "linear-gradient(180deg, #2B88D8 0%, #1E00D4 100%)",
        },
      },
    },
  },
  plugins: [],
};
