import axios from "axios";
import { useMemo } from "react";

export default function useAxios() {
  const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

  const instance = useMemo(() => {
    const api = axios.create({
      baseURL,
      timeout: 15000,
      headers: { Accept: "application/json" },
      
    });

   
    api.interceptors.request.use((config) => config, (err) => Promise.reject(err));

   
    api.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(normalizeAxiosError(error))
    );

    return api;
  }, [baseURL]);

  return instance;
}

function normalizeAxiosError(error) {
  const status = error?.response?.status ?? null;
  const data = error?.response?.data ?? null;
  const method = error?.config?.method?.toUpperCase?.() || null;
  const url = error?.config?.url || null;

  let message =
    (data && (data.message || data.error || data.msg)) ||
    error?.message ||
    "Request failed";

  if (message?.toLowerCase?.().includes("timeout")) message = "Request timeout";
  if (message === "Network Error") message = "Network error";

  return { message, status, data, method, url };
}
