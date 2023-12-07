import tailwindDefaultTheme from "tailwindcss/defaultTheme";
import resolveTailwindConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "configs/TailwindConfig";

export const resolvedTailwindConfig = resolveTailwindConfig(tailwindConfig);

export const MediaQueryBreakpointEnum = {
  "2xl": `(min-width: ${tailwindDefaultTheme.screens["2xl"]})`,
  lg: `(min-width: ${tailwindDefaultTheme.screens.lg})`,
  md: `(min-width: ${tailwindDefaultTheme.screens.md})`,
  sm: `(min-width: ${tailwindDefaultTheme.screens.sm})`,
  xl: `(min-width: ${tailwindDefaultTheme.screens.xl})`,
};

export const EnvVarEnum = {
  PROD: import.meta.env.PROD,
  DEV: import.meta.env.DEV,
  CORE_API_BASE_URL: import.meta.env.VITE_CORE_API_BASE_URL,
  AES_ENCRYPTION_KEY: import.meta.env.VITE_AES_ENCRYPTION_KEY,
};

export const APP_SIDE_MENU_WIDTH = 270;

export const PaginationParamsDefault = {
  offset: 0,
  limit: 10,
};

export const PaginationDefault = {
  pageIndex: 0,
  pageSize: 10,
};

export const ErrorMessages = {
  GENERIC_ERROR_MESSAGE: "Something Went wrong!",
};

export const AppConstant = {
  ACTIVATION_CHANNEL_ID: "41",
};
