import axios, { AxiosPromise } from "axios";
import { DiscographyForm } from "../types/DiscographyForm";

const post = (data: DiscographyForm): AxiosPromise<any> =>
  axios.post(`http://51.158.123.66:5000/api/discografia/`, data, {
    headers: { "Content-Type": "application/json" },
  });

export default {
  post,
};
