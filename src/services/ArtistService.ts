import axios, { AxiosPromise } from "axios";
import { Artist } from "../types/Artist";
import { CreateArtistForm } from "../types/CreateArtistForm";

const findAll = (): AxiosPromise<Artist[]> =>
  axios.get(`http://51.158.123.66:5000/api/artistas/`);

const load = (id: string): AxiosPromise<Artist> =>
  axios.get(`http://51.158.123.66:5000/api/artistas/${id}`);

const create = (data: CreateArtistForm): AxiosPromise<Artist> =>
  axios.post(`http://51.158.123.66:5000/api/artistas/`, {
    ...data,
  });

const post = (data: any): AxiosPromise<Artist> =>
  axios.post(`http://51.158.123.66:5000/api/artistas/`, {
    ...data,
  });
const put = (id: any, data: any): AxiosPromise<Artist> =>
  axios.put(`http://51.158.123.66:5000/api/artistas/${id}`, data);

const onDelete = (id: any, motivo: any): AxiosPromise<any> =>
  axios.delete(`http://51.158.123.66:5000/api/crowdfundings/${id}`, motivo);

const aprovar = (id: any): AxiosPromise<any> =>
  axios.post(`http://51.158.123.66:5000/api/crowdfundings/aprovar/${id}`);

export default {
  findAll,
  load,
  create,
  post,
  put,
  onDelete,
  aprovar,
};
