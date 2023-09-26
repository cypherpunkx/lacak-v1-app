import axios from "axios";
import qs from "qs";

const axiosClient = axios.create({
  baseURL: "https://api.binderbyte.com",
  maxContentLength: Infinity,
  paramsSerializer: {
    serialize: (params) =>
      qs.stringify({
        ...params,
        api_key:
          "a2a86b605dfb8a3e9dd6223e860ed70522422a835ad9a17c8d2b4e2ca97e08be",
      }),
  },
});

axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }

    return response;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
