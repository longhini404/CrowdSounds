import axios, { AxiosPromise } from "axios";

const create = (data: any): AxiosPromise<any> =>
  axios.post(`http://51.158.123.66:5000/api/merch/`, data);

export default {
  create,
};
