import axios, { AxiosPromise } from "axios";
import { TipoPagamento } from "../types/TipoPagamento";

const findAll = (): AxiosPromise<TipoPagamento[]> =>
  axios.get(`http://51.158.123.66:5000/api/tipos-pagamento/`);

export default {
  findAll,
};
