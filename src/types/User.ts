import { Artist } from "./Artist";
import { Crowdfunding } from "./Crowdfunding";
import { Donation } from "./Donation";

export type User = {
  id: string;
  nomeUsuario: string;
  email: string;
  login: string;
  status: string;
  cpf: string;
  telefone: string;
  favoritos: Artist[];
  historico: Donation[];
  crowdfundingsFavoritos: Crowdfunding[];
  token: string;
  fotoPerfil: string;
};
