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
import { SearchIcon, XIcon } from "lucide-react";
import { useState, type FormEvent } from "react";
import { NavLink, useSearchParams } from "react-router";

export function Catalog() {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const sort = searchParams.get("sort");
  const search = searchParams.get("search");

  const { data: result } = useQuery({
    queryKey: ["products", page, limit, sort, search],
    queryFn: () => getProducts({ page, limit, sort, search }),
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(searchText);

    setSearchParams((state) => {
      if (searchText) {
        state.set("search", searchText);
      }

      return state;
    });

    setSearchText("");
  }

  function handleClearFilter() {
    setSearchParams((state) => {
      state.delete("search");

      return state;
    });
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <form
        className="flex w-3xl gap-2 items-center"
        onSubmit={(event) => handleSubmit(event)}
      >
        <Input
          placeholder="Pesquise por um produto"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button type="submit">
          <SearchIcon className="font-bold" />
        </Button>
        <Button
          type="button"
          variant={"outline"}
          onClick={handleClearFilter}
          disabled={!search}
        >
          <XIcon className="font-bold" /> Limpar Filtro
        </Button>
      </form>

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
