import axios from "axios";
import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const useAxiosSecure = () => {
  const { user } = useAuth();
  useEffect(() => {
    // request interceptor
    const reqInterceptor = instance.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    // clean
    return () => instance.interceptors.request.eject(reqInterceptor);
  });

  return instance;
};
