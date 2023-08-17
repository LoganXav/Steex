import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { EnvVarEnum } from "constants/Global";
import { StoreQueryTagEnum } from "constants/StoreConstants";
import SalaryPayHttp from "./HttpConfig";

export const SalaryPayApi = createApi({
  reducerPath: "salaryPay",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: EnvVarEnum.API_BASE_URL + "/fineract-provider/api/v1/",
  //   // mode: "no-cors",
  //   // fetchFn: (input, init) => {
  //   //   console.log(input, init, input.headers.get("Fineract-Platform-TenantId"));
  //   //   return fetch(input, init);
  //   // },
  //   prepareHeaders: (headers, { getState }) => {
  //     headers.set("Fineract-Platform-TenantId", "default");
  //     const { token } = getState()?.global?.authUser || {};
  //     if (token) {
  //       headers.set("Authorization", `Bearer ${token}`);
  //     }
  //     return headers;
  //   },
  // }),
  baseQuery: axiosBaseQuery({ url: "" }, SalaryPayHttp),
  endpoints: (builder) => ({}),
});

[SalaryPayApi].forEach((api) => {
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
    const url = config.url
      ? (baseConfig.url || "") + config.url
      : baseConfig.url;
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
              defaultUserMessage:
                error.response.data?.errors?.[0]?.defaultUserMessage ||
                error.response.data?.defaultUserMessage,
              message:
                error.response.data?.errors?.[0]?.defaultUserMessage ||
                error.response.data?.defaultUserMessage,
              status: error.response.status,
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
