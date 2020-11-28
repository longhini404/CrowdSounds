import axios, { AxiosPromise } from "axios";
import { Artist } from "../types/Artist";
import { KeepUserForm } from "../types/KeepUserForm";
import { LoginForm } from "../types/LoginForm";
import { SignUpForm } from "../types/SignUpForm";
import { User } from "../types/User";

const findAll = (): AxiosPromise<User[]> =>
  axios.get(`http://51.158.123.66:5000/api/usuarios/`);

const load = (id: string): AxiosPromise<User> =>
  axios.get(`http://51.158.123.66:5000/api/usuarios/${id}`);

const register = (data: SignUpForm): AxiosPromise<User> =>
  axios.post(`http://51.158.123.66:5000/api/login/register`, {
    ...data,
    idSituacaoUsuario: 1,
    idTipoUsuario: 1,
    telefone: 1,
  });

const login = (data: LoginForm): AxiosPromise<User> =>
  axios.post(`http://51.158.123.66:5000/api/login/login`, data);

const post = (data: KeepUserForm): AxiosPromise<User> =>
  axios.post(`http://51.158.123.66:5000/api/usuarios/`, data);

const getIdArtista = (id: string | undefined): AxiosPromise<any> =>
  axios.get(`http://51.158.123.66:5000/api/artistas-usuario/${id}`);

const put = (id: any, data: KeepUserForm): AxiosPromise<User> =>
  axios.put(`http://51.158.123.66:5000/api/usuarios/${id}`, data);

const onDelete = (id: any, motivo: any): AxiosPromise<any> =>
  axios.delete(`http://51.158.123.66:5000/api/usuarios/${id}`, motivo);

export default {
  findAll,
  load,
  register,
  login,
  post,
  getIdArtista,
  put,
  onDelete,
};
