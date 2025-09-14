import { getProducts } from "@/api/get-products";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import { NavLink, useSearchParams } from "react-router";

export function Catalog() {
  const [searchParams, _] = useSearchParams();

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const sort = searchParams.get("sort");
  const search = searchParams.get("search");

  const { data: result } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({ page, limit, sort, search }),
  });

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex w-3xl gap-2 items-center">
        <Input placeholder="Pesquise por um produto" />
        <Button>
          <SearchIcon className="font-bold" />
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h1>Produtos</h1>

        <div className="grid grid-cols-4 gap-4">
          {result &&
            result.map((item) => {
              return (
                <NavLink to={`/products/${item.id}`} key={item.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {item.nome.substring(0, 22) + "..."}
                      </CardTitle>
                      <CardDescription>
                        {
                          (item.preco / 100).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }) // price in cents
                        }
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={item.url_imagem}
                        alt="imagem de um moletom cinza"
                        className="w-50 h-50 rounded-2xl bg-cover"
                      />
                    </CardContent>
                  </Card>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
}
