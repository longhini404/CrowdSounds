import axios, { AxiosPromise } from "axios";
import { ContactForm } from "../types/ContactForm";

const create = (data: ContactForm): AxiosPromise<any> =>
  axios.post(`http://51.158.123.66:5000/api/contatos-artista/`, data);

export default {
  create,
};
