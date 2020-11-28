import axios from "axios";
import jwt from "jsonwebtoken";

export default function setAuthToken(token: any) {
  if (token) {
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}
