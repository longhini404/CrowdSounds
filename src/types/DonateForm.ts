export type DonateForm = {
  nome: string;
  valor: number;
  email: string;
  numeroCartao: string;
  cvv: string;
  anonimo: Boolean;
  cpf: string;
  validadeCartao: Date;
  idCrowdfunding: string;
  tipoPagamento: string;
};
