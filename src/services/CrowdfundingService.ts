import axios, { AxiosPromise } from "axios";
import { Crowdfunding } from "../types/Crowdfunding";
import { CrowdfundingForm } from "../types/CrowdfundingForm";
import { Donation } from "../types/Donation";
import { DonateForm } from "../types/DonateForm";

const findAll = (): AxiosPromise<Crowdfunding[]> =>
  axios.get(`http://51.158.123.66:5000/api/crowdfundings/`);

const load = (id: string): AxiosPromise<Crowdfunding> =>
  axios.get(`http://51.158.123.66:5000/api/crowdfundings/${id}`);

const donate = (
  data: DonateForm,
  id: string,
  idUsuario: number
): AxiosPromise<Donation> =>
  axios.post(`http://51.158.123.66:5000/api/doacao/`, {
    ...data,
    idCrowdfunding: id,
    idUsuario: idUsuario,
  });

const create = (data: CrowdfundingForm): AxiosPromise<Crowdfunding> => {
  return axios.post(`http://51.158.123.66:5000/api/crowdfundings/`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

const onDelete = (id: any, motivo: any): AxiosPromise<any> =>
  axios.delete(`http://51.158.123.66:5000/api/crowdfundings/${id}`, motivo);

const aprovar = (id: any): AxiosPromise<any> =>
  axios.post(`http://51.158.123.66:5000/api/crowdfundings/aprovar/${id}`);

export default {
  findAll,
  load,
  donate,
  create,
  onDelete,
  aprovar,
};
