/** @format */

import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem("hero-access-token");
    axiosSecure.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // logout stopped
          // logOut();
          // navigate("/");
          console.log("axios error", error);
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return [axiosSecure];
};

export default useAxiosSecure;
