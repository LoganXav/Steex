import { SalaryPayApi } from "configs/StoreQueryConfig";
import { StoreQueryTagEnum } from "constants/StoreConstants";

export const BASE_URL = "/self/userdetails";

export const SelfUserDetailsApi = SalaryPayApi.injectEndpoints({
  endpoints: (builder) => ({
    getSelfUserDetails: builder.query({
      query: (config) => ({
        url: `${BASE_URL}`,
        ...config,
      }),
      providesTags: () => [{ type: StoreQueryTagEnum.USER }],
    }),
  }),
});
