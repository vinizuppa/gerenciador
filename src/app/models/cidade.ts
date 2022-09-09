import { UfResponse } from './uf';

export interface CidadeRequest {
  nome: string;
  ufId: number
}
export interface CidadeResponse {
  id: string;
  nome: string;
  uf: UfResponse;
}
export interface content {
  content: CidadeResponse[];
}
