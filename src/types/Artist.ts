import { Crowdfunding } from "./Crowdfunding";
import { Discography } from "./Discography";
import { Merchandising } from "./Merchandising";

export type Artist = {
  id: number;
  nome: string;
  biografia: string;
  fotoPerfil: string;
  fotoCapa: string;
  crowdfundings: Crowdfunding[];
  merch: Merchandising[];
  discografias: Discography[];
  integrantes: string;
  usuario: number;
  arquivo: string;
  genero: string;
  facebook: string;
  instagram: string;
  celular: string;
  youTube: string;
};
