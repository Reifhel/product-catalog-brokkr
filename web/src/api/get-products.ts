import { api } from "@/lib/axios";

export interface GetProductsQuery {
  page?: string | null;
  limit?: string | null;
  search?: string | null;
  sort?: string | null;
}

export type GetProductsResponse = {
  id: string;
  nome: string;
  preco: number;
  url_imagem: string;
}[];

export async function getProducts({
  page,
  search,
  limit,
  sort,
}: GetProductsQuery) {
  const response = await api.get<GetProductsResponse>("/products", {
    params: {
      page,
      search,
      limit,
      sort,
    },
  });

  return response.data;
}
