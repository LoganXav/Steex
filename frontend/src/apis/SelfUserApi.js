import { SalaryPayApi } from "configs/StoreQueryConfig";
import { StoreQueryTagEnum } from "constants/StoreConstants";

export const BASE_URL = "/self/user";

export const SelfUserApi = SalaryPayApi.injectEndpoints({
  endpoints: (builder) => ({
    getSelfUser: builder.query({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path?.userId}`,
        ...config,
      }),
      providesTags: () => [{ type: StoreQueryTagEnum.USER }],
    }),
    updateSelfUser: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}`,
        method: "put",
        ...config,
      }),
      invalidatesTags: () => [{ type: StoreQueryTagEnum.USER }],
    }),
  }),
});
