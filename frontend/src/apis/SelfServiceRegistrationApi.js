import { SalaryPayApi } from "configs/StoreQueryConfig";

export const BASE_URL = "/self/registration";

export const SelfServiceRegistrationApi = SalaryPayApi.injectEndpoints({
  endpoints: (builder) => ({
    selfRegistration: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}`,
        method: "post",
        ...config,
      }),
    }),
    selfRegistrationGetStarted: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/getstarted`,
        method: "post",
        ...config,
      }),
    }),
    selfRegistrationGetStartedResend: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/getstarted/resend`,
        method: "post",
        ...config,
      }),
    }),
    selfRegistrationResetPassword: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/reset-password`,
        method: "post",
        ...config,
      }),
    }),
    selfRegistrationUser: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/user`,
        method: "post",
        ...config,
      }),
    }),
    selfRegistrationGetStartedValidate: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/validate`,
        method: "post",
        ...config,
      }),
    }),
  }),
});
