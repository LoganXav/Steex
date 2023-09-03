import axios from "axios";
import { EnvVarEnum } from "constants/Global";

export const CoreHttp = axios.create({
  baseURL: EnvVarEnum.CORE_API_BASE_URL + "/fineract-service/api/v1",
  method: "post",
  // headers: {
  //   // "Fineract-Platform-TenantId": "default",
  //   // withCredentials: true,
  //   "Access-Control-Allow-Origin": "*",
  //   // Referer: "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  // },
  // // withCredentials: false,
});

export default CoreHttp;
