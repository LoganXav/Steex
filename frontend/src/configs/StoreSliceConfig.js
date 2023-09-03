import { createSlice } from "@reduxjs/toolkit";
import { SelfServiceAuthenticationApi } from "../apis/SelfServiceAuthenticationApi";
import { logoutAction } from "./StoreActionConfig";
import { SelfUserDetailsApi } from "../apis/SelfUserDetails";
import { SelfUserApi } from "../apis/SelfUserApi";
import { SelfClientApi } from "../apis/SelfClientApi";

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
  },
  extraReducers: (builder) =>
    builder
      .addCase(logoutAction, () => ({ ...globalInitialState }))
      .addMatcher(
        SelfServiceAuthenticationApi.endpoints.selfAuthenticationLogin
          .matchFulfilled,
        (state, { payload }) => {
          state.authUser = { ...payload };
        }
      )
      .addMatcher(
        SelfUserApi.endpoints.getSelfUser.matchFulfilled,
        (state, { payload }) => {
          if (payload.id === state.authUser.userId) {
            state.authUser = {
              ...state.authUser,
              ...payload,
              clients: state.authUser.clients || payload.clients,
            };
          }
        }
      )
      .addMatcher(
        SelfClientApi.endpoints.getSelfClient.matchFulfilled,
        (state, { payload }) => {
          state.authUser.clients = state.authUser.clients.map((infoOrId) => {
            const id = infoOrId?.id || infoOrId;
            return {
              id,
              ...(typeof infoOrId === "object" ? infoOrId : {}),
              ...(payload.id === id ? payload : {}),
            };
          });
        }
      )
      .addMatcher(
        SelfClientApi.endpoints.getSelfClientImage.matchFulfilled,
        (state, { payload, meta }) => {
          const id = meta.arg.originalArgs.path?.clientId;
          state.authUser.clients = state.authUser.clients.map((info) => {
            return { ...info, ...(info.id === id ? { avatar: payload } : {}) };
          });
        }
      )
      .addMatcher(
        SelfUserApi.endpoints.updateSelfUser.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            ...state.authUser,
            base64EncodedAuthenticationKey:
              payload?.changes?.base64EncodedAuthenticationKey,
          };
        }
      ),
});

export const { toggleLoadingModalAction, toggleSideNavigationAction } =
  slice.actions;

export default slice;

export function getGlobalSliceStorageState({ authUser }) {
  return { authUser };
}
