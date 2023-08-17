import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { DateFormatEnum } from "constants/DateContants";

export const defaultTheme = customizeTheme();

export const lightTheme = responsiveFontSizes(
  customizeTheme({
    palette: {
      primary: {
        lighter: "#CEDAEC",
        lightAlt: "#F2F5FA",
        light: "#A7BBDC",
        tertiary: "#6082B9",
        dark: "#0474BC",
        main: "#0480FC",
        darkAlt: "#193F7C",
        darker: "#0F274D",
      },
      secondary: {
        lightAlt: "#FFFAF5",
        main: "#341C34",
        contrastText: "#FFFFFF",
      },
      success: {
        ...defaultTheme.palette.success,
        lighter: "#5FD25533",
      },
    },
  })
);
export const darkTheme = responsiveFontSizes(
  customizeTheme({ palette: { mode: "dark" } })
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
        "'BR Firma'",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
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
      button: {
        textTransform: "none",
        // width: "8rem",
        // height: "3rem",
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
    },
  });
}
