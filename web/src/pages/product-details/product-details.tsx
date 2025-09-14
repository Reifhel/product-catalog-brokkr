import { getProductsDetails } from "@/api/get-products-details";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router";

export function ProductDetails() {
  const { id } = useParams();

  const { data: result } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductsDetails({ productId: id }),
  });

  if (!id) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className="flex flex-col gap-8">
      {result && (
        <div className="grid grid-cols-3 gap-5">
          <div>
            <img
              src={result.url_imagem}
              className="aspect-square cursor-pointer transition hover:opacity-75 rounded-2xl sm:object-cover"
            />
          </div>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-3xl font-bold antialiased">
                {result.nome}
              </CardTitle>
              <CardContent>
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-muted-foreground">
                    {result.descricao}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <span>
                    Preço:{" "}
                    {(result.preco / 100).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <span>
                    Quantidade em estoque: {result.quantidade_em_estoque}
                  </span>
                </div>
              </CardFooter>
            </CardHeader>
          </Card>
        </div>
      )}
    </div>
  );
}
