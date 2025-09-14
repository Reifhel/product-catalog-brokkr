import { api } from "@/lib/axios";

export interface GetProductsDetailsParams {
  productId: string | undefined;
}

export interface GetProductsDetailsResponse {
  id: string;
  nome: string;
  descricao: string | null;
  preco: number;
  url_imagem: string;
  quantidade_em_estoque: number;
}

export async function getProductsDetails({
  productId,
}: GetProductsDetailsParams) {
  const response = await api.get<GetProductsDetailsResponse>(
    `/products/${productId}`
  );

  return response.data;
}
