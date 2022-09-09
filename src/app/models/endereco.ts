export interface EnderecoResponse {
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  cidadeId: number;
  cidade: string;
}

export interface EnderecoRequest {
  rua: string;
  numero: string;
  bairro: string;
  cep: string;
  cidadeId: number;
}
