import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { DateFormatEnum } from "constants/DateContants";

export const defaultTheme = customizeTheme();

export const lightTheme = responsiveFontSizes(
  customizeTheme({
    palette: {
      primary: {
        main: "#3762EA",
        dark: "#3258D3",
        // darker: "#0F274D",
        // darkAlt: "#193F7C",
        light: "#97979A",
        lighter: "#EEF0F7",
        lightAlt: "#F7F7F7",
        tertiary: "#98A6Ad",
      },
      secondary: {
        lightAlt: "#222328",
        main: "#1E1A22",
        dark: "#181A20",
        contrastText: "#7C7F7B",
      },
      success: {
        ...defaultTheme.palette.success,
        lighter: "#5FD25533",
      },
      background: {
        ...defaultTheme.palette.background,
        default: "#F7F7F7",
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
