import { EnderecoRequest } from './endereco';
import { EnderecoResponse } from './endereco';

export interface UsuarioRequest {
  nome: string;
  tipoDocumento: string;
  documento: string;
  email: string;
  telefone: string;
  celular: string;
  endereco: EnderecoRequest;
  senha: string;
}

export interface UsuarioUpdateRequest {
  nome: string;
  tipoDocumento: string;
  documento: string;
  email: string;
  telefone: string;
  celular: string;
  clienteStatus: string;
  endereco: EnderecoRequest;
}

export interface UsuarioResponse {
  id: string;
  nome: string;
  tipoDocumento: string;
  documento: string;
  email: string;
  telefone: string;
  celular: string;
  dataCadastro: string;
  clienteStatus: string;
  endereco: EnderecoResponse;
}
