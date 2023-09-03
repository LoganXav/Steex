import { SalaryPayApi } from "configs/StoreQueryConfig";

export const BASE_URL = "/self/authentication";

export const SelfServiceAuthenticationApi = SalaryPayApi.injectEndpoints({
  endpoints: (builder) => ({
    selfAuthentication: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}`,
        method: "post",
        ...config,
      }),
    }),
    selfAuthenticationLogin: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/login`,
        method: "post",
        ...config,
      }),
    }),
  }),
});
