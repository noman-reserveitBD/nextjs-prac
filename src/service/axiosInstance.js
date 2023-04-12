import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

if (typeof window === "undefined") {
  // Server-side rendering
  axiosInstance.defaults.proxy = {
    host: "my-proxy-server",
    port: 8080,
  };
}

export default axiosInstance;
