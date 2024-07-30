import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { StoreQueryTagEnum } from "constants/StoreConstants";
import CoreHttp from "./HttpConfig";

export const CoreApi = createApi({
  reducerPath: "steex",
  baseQuery: axiosBaseQuery({ url: "/api/v1", method: "post" }, CoreHttp),
  endpoints: () => ({}),
});
[CoreApi].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(StoreQueryTagEnum) });
});

/**
 *
 * @param {import("axios").AxiosRequestConfig} baseConfig
 */
export function axiosBaseQuery(baseConfig = {}, http = axios) {
  return request;

  /**
   *
   * @param {import("axios").AxiosRequestConfig} config
   */
  async function request(config = {}) {
    const url = config.url ? (baseConfig.url || "") + config.url : baseConfig.url;
    const data = config.body || config.data || baseConfig.data;
    try {
      const response = await http.request({
        ...baseConfig,
        ...config,
        url,
        data,
      });

      return {
        ...response,
        data: response.data,
        message: response.data?.defaultUserMessage || null,
        defaultUserMessage: response.data?.defaultUserMessage || null,
        status: response.status || 200,
        meta: { request: response.request, response },
      };
    } catch (error) {
      return {
        error: error.response
          ? {
              defaultUserMessage: error.response.data?.errors?.[0]?.defaultUserMessage || error.response.data?.defaultUserMessage,
              message: error.response.data?.errors?.[0]?.defaultUserMessage || error.response.data?.defaultUserMessage,
              status: error.response.status || error.response.data?.status,
              data: error.response.data,
            }
          : {
              defaultUserMessage: "Something went wrong",
              data: { defaultUserMessage: "Something went wrong" },
            },
      };
    }
  }
}
