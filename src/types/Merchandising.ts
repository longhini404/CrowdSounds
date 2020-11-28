import CardMerchandising from "../Components/CardMerchandising/CardMerchandising";
import { Artist } from "./Artist";
import { Crowdfunding } from "./Crowdfunding";

export type Merchandising = {
  id: number;
  artista: Artist;
  categoria: string;
  titulo: string;
  foto: string;
  imagem: string;
  preco: number;
  descricao: string;
};
