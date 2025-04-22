import { createSlice } from "@reduxjs/toolkit";
import { CoreAuthenticationApi } from "../apis/CoreAuthenticationApi";
import { logoutAction } from "./StoreActionConfig";

export const globalInitialState = {
  themeMode: "light", // 'dark'| 'light' | 'media'
  isLoadingModal: false,
  isSideNavigation: false,
  authUser: null,
};

const slice = createSlice({
  name: "global",
  initialState: globalInitialState,
  reducers: {
    toggleLoadingModalAction: (state, { payload }) => {
      state.isLoadingModal =
        payload !== undefined ? !!payload : !state.isLoadingModal;
    },
    toggleSideNavigationAction: (state, { payload }) => {
      state.isSideNavigation =
        payload !== undefined ? !!payload : !state.isSideNavigation;
    },
    toggleThemeModeAction: (state, { payload }) => {
      state.themeMode = payload !== undefined ? payload : state.themeMode;
    },
    setAuthUserAction: (state, { payload }) => {
      state.authUser = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logoutAction, () => ({ ...globalInitialState }))
      .addMatcher(
        CoreAuthenticationApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.authUser = { ...payload };
        },
      )
      .addMatcher(
        CoreAuthenticationApi.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.authUser = { ...payload };
        },
      ),
});

export const {
  toggleLoadingModalAction,
  toggleSideNavigationAction,
  toggleThemeModeAction,
  setAuthUserAction,
} = slice.actions;

export default slice;

export function getGlobalSliceStorageState({ authUser }) {
  return { authUser };
}
