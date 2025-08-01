// src/api/axiosClient.ts

import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authStateString = localStorage.getItem("auth_state");

    let authState = null;
    try {
      if (authStateString) {
        authState = JSON.parse(authStateString);
      }
    } catch (e) {
      console.error("Failed to parse auth_state from localStorage", e);
      localStorage.removeItem("auth_state");
    }

    if (authState && authState.accessToken) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${authState.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
apiClient.interceptors.response.use(
  (Response: AxiosResponse) => {
    return Response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error("인증 토큰 만료. 로그아웃 진행");
      localStorage.removeItem("auth_state");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default apiClient;
