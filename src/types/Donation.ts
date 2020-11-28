import { Crowdfunding } from "./Crowdfunding";

export type Donation = {
  id: string;
  nomeDoador: string;
  mensagem: string;
  valor: number;
  crowdfunding: Crowdfunding;
};
