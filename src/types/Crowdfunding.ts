import { Artist } from "./Artist";
import { Donation } from "./Donation";

export type Crowdfunding = {
  id: string;
  descricao: string;
  percentualAtingido: number;
  titulo: string;
  meta: number;
  valorArrecadado: number;
  doacoes: Donation[];
  artista: Artist;
  arquivo: string;
};
