import { CoreApi } from "configs/StoreQueryConfig"
import { StoreQueryTagEnum } from "constants/StoreConstants"

export const BASE_URL = "/auth"

export const CoreAuthenticationApi = CoreApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/signin`,
        method: "POST",
        ...config,
      }),
      invalidatesTags: () => [{ type: StoreQueryTagEnum.USER }],
    }),
    register: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/signup`,
        method: "POST",
        ...config,
      }),
      invalidatesTags: () => [{ type: StoreQueryTagEnum.USER }],
    }),
    resetPassword: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/reset-password`,
        method: "POST",
        ...config,
      }),
    }),
  }),
})

export default CoreAuthenticationApi
