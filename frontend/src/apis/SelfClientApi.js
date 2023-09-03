import { SalaryPayApi } from "configs/StoreQueryConfig";
import { StoreQueryTagEnum } from "constants/StoreConstants";
import { objectToFormData } from "utils/ObjectUtils";
import { invalidateTags, provideTags } from "utils/QueryUtils";

export const BASE_URL = "/self/clients";

export const SelfClientApi = SalaryPayApi.injectEndpoints({
  endpoints: (builder) => ({
    getSelfClient: builder.query({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path.clientId}`,
        ...config,
      }),
      providesTags: (data, error) =>
        error ? [] : provideTags(StoreQueryTagEnum.USER, [data]),
    }),
    updateSelfClient: builder.mutation({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path.clientId}`,
        method: "put",
        ...config,
      }),
      invalidatesTags: (data, error) =>
        error ? [] : invalidateTags(StoreQueryTagEnum.USER),
    }),
    getSelfClientImage: builder.query({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path.clientId}/images`,
        ...config,
      }),
      providesTags: (data, error) =>
        error ? [] : provideTags(StoreQueryTagEnum.USER),
    }),
    updateSelfClientImage: builder.mutation({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path.clientId}/images`,
        method: "post",
        ...config,
        data: objectToFormData(config.data),
      }),
      invalidatesTags: (data, error) =>
        error ? [] : invalidateTags(StoreQueryTagEnum.USER),
    }),
  }),
});
