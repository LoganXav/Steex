import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";
import { DateFormatEnum } from "constants/DateContants";

export const defaultTheme = customizeTheme();

export const lightTheme = responsiveFontSizes(
  customizeTheme({
    palette: {
      primary: {
        main: "#3762EA",
        dark: "#3258D3",

        lighter: "#ffff",
        light: "#000",

        // darker: "#0F274D",
        // darkAlt: "#193F7C",
        lightAlt: "#F7F7F7",
        tertiary: "#98A6Ad",
        contrastText: "#F7F7F7",
      },
      secondary: {
        lightAlt: "#ffff",
        // lightAlt: "#222328",
        main: "#1E1A22",
        dark: "#181A20",
        contrastText: "#7C7F7B",
      },
      text: {
        ...defaultTheme.palette.text,
        default: "#000",
      },
      white: {
        ...defaultTheme.palette.white,
        default: "#fff",
      },
      info: {
        ...defaultTheme.palette.info,
        contrastText: "#4AB0C1",
      },
      success: {
        ...defaultTheme.palette.success,
        lighter: alpha(defaultTheme.palette.success.main, 0.2),
      },
      warning: {
        ...defaultTheme.palette.warning,
        lighter: alpha(defaultTheme.palette.warning.main, 0.2),
      },
      error: {
        ...defaultTheme.palette.error,
        lighter: alpha(defaultTheme.palette.error.main, 0.2),
      },
      background: {
        ...defaultTheme.palette.background,
        default: "#F7F7F7",
      },
    },
  })
);
export const darkTheme = responsiveFontSizes(
  customizeTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#181A20",
        dark: "#222328",

        lighter: "#181A20",
        light: "#fff",

        // darker: "#0F274D",
        // darkAlt: "#193F7C",
        lightAlt: "#F7F7F7",
        tertiary: "#98A6Ad",
        contrastText: "#F7F7F7",
      },
      secondary: {
        lightAlt: "#222328",
        main: "#fff",
        dark: "#181A20",
        contrastText: "#7C7F7B",
      },
      text: {
        ...defaultTheme.palette.text,
        default: "#fff",
      },
      info: {
        ...defaultTheme.palette.info,
        contrastText: "#4AB0C1",
      },
      success: {
        ...defaultTheme.palette.success,
        lighter: alpha(defaultTheme.palette.success.main, 0.2),
      },
      warning: {
        ...defaultTheme.palette.warning,
        lighter: alpha(defaultTheme.palette.warning.main, 0.2),
      },
      error: {
        ...defaultTheme.palette.error,
        lighter: alpha(defaultTheme.palette.error.main, 0.2),
      },
      background: {
        ...defaultTheme.palette.background,
        default: "#333",
      },
    },
  })
);

/**
 *
 * @param {import("@mui/material").Theme} theme
 */
export function customizeTheme(theme) {
  return createTheme({
    ...theme,
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
    typography: {
      fontFamily: [
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
      ].join(),
      fontSize: 12,
      color: "#000051",
      body1: {
        fontWeight: 400,
      },
      body2: {
        fontWeight: 400,
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
      caption: {
        fontWeight: 400,
      },
      overline: {
        fontWeight: 600,
      },
    },
    components: {
      MuiIcon: {
        defaultProps: {
          baseClassName: "material-symbols-outlined",
        },
      },
      MuiDatePicker: {
        defaultProps: {
          inputFormat: DateFormatEnum.FORMAT,
        },
      },
      MuiDesktopDatePicker: {
        defaultProps: {
          inputFormat: DateFormatEnum.FORMAT,
        },
      },
      MuiMobileDatePicker: {
        defaultProps: {
          inputFormat: DateFormatEnum.FORMAT,
        },
      },
      MuiTabs: {
        defaultProps: {
          variant: "scrollable",
          scrollButtons: "auto",
          allowScrollButtonsMobile: true,
        },
      },
      MuiLoadingButton: {
        defaultProps: {
          variant: "contained",
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: "contained",
        },
        variants: [
          {
            props: { borderRadius: "default" },
            style: ({ theme }) => ({}),
          },
          {
            props: { borderRadius: "square" },
            style: ({ theme }) => ({ borderRadius: 0 }),
          },
          {
            props: { borderRadius: "circular" },
            style: ({ theme }) => ({ borderRadius: 4 }),
          },
        ],
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            ...(!isNaN(Number(ownerState.borderRadius))
              ? { borderRadius: Number(ownerState.borderRadius) }
              : {}),
            ...(ownerState.variant === "soft"
              ? {
                  color:
                    theme.palette[ownerState.color]?.main ||
                    theme.palette.grey[500],
                  backgroundColor: alpha(
                    theme.palette[ownerState.color]?.main ||
                      theme.palette.grey[500],
                    0.2
                  ),
                  "&:hover": {
                    backgroundColor: alpha(
                      theme.palette[ownerState.color]?.main ||
                        theme.palette.grey[500],
                      0.3
                    ),
                  },
                }
              : {}),
          }),
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            "&.MuiInputBase-formControl": {
              // borderRadius: 24,
            },
          }),
        },
      },
      MuiDialog: {
        defaultProps: {
          maxWidth: "xs",
        },
      },
      MuiChip: {
        defaultProps: { variant: "soft" },
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            if (ownerState.variant !== "soft") return {};
            return {
              color:
                theme.palette[ownerState.color]?.main ||
                theme.palette.grey[500],
              backgroundColor: alpha(
                theme.palette[ownerState.color]?.main ||
                  theme.palette.grey[500],
                0.1
              ),
            };
          },
        },
      },
      MuiTypography: {
        // defaultProps: { variant: "soft" },
        styleOverrides: {
          root: ({ theme }) => {
            return {
              color: theme.palette.text.default,
            };
          },
        },
      },
      MuiContainer: {
        // defaultProps: { variant: "soft" },
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            if (ownerState.variant == "soft")
              return {
                color:
                  theme.palette[ownerState.color]?.main ||
                  theme.palette.grey[500],
                backgroundColor: alpha(
                  theme.palette[ownerState.color]?.main ||
                    theme.palette.grey[500],
                  0.2
                ),
              };
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            const mainColor =
              theme.palette[ownerState.color]?.main || theme.palette.grey[500];

            return {
              color: mainColor,
              backgroundColor: alpha(mainColor, 0.1),
              border: `1px solid ${alpha(mainColor, 0.3)}`, // Border color with alpha
              borderRadius: theme.shape.borderRadius, // Use the theme's border radius
            };
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
          borderRadius: "circular",
        },
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            return {
              boxShadow: `0px 2px 4px -1px  ${alpha(
                theme.palette.success.main,
                0.06
              )}`,
              color:
                theme.palette[ownerState.color]?.main ||
                theme.palette.grey[500],
              backgroundColor: alpha(theme.palette.primary.lighter, 1),
            };
          },
        },
        variants: [
          {
            props: { borderRadius: "default" },
            style: () => ({}),
          },
          {
            props: { borderRadius: "square" },
            style: () => ({ borderRadius: 0 }),
          },
          {
            props: { borderRadius: "circular" },
            style: () => ({ borderRadius: 8 }),
          },
        ],
      },
    },
  });
}
