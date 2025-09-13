import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "react-router";

export function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-5">
        <div>
          <img
            src="https://cdn.shoppub.io/cdn-cgi/image/w=800,h=600,q=80,f=auto/rockfit/media/uploads/produtos/foto/rtcdsjwr/moletom-unissex-cinza.jpg"
            alt="imagem de um moletom cinza"
            className="aspect-square cursor-pointer transition hover:opacity-75 rounded-2xl sm:object-cover"
          />
        </div>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-3xl font-bold antialiased">
              Produto {id}
            </CardTitle>
            <CardContent>
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam in volutpat augue. Fusce blandit pharetra mi. Nulla
                  viverra, leo vel tincidunt luctus, odio sapien euismod erat,
                  vel placerat sem nulla id nibh. Donec non rhoncus nulla, id
                  mollis leo. Morbi leo turpis, dictum sed quam in, venenatis
                  vulputate neque. In a augue molestie, faucibus tortor id,
                  faucibus sapien. Curabitur suscipit dolor at vulputate
                  posuere. Pellentesque ac sapien euismod, hendrerit nisl eget,
                  semper quam. Nullam vitae turpis rutrum, pretium orci eu,
                  consequat eros. Curabitur laoreet lobortis ante et malesuada.
                  Nulla facilisi. Suspendisse pulvinar leo non nibh aliquam,
                  eget egestas nulla eleifend. Fusce varius feugiat arcu et
                  vestibulum. Fusce efficitur, magna non ultricies mattis, dui
                  justo porttitor mi, a convallis arcu turpis sit amet ex.
                  Mauris convallis mauris magna, id imperdiet justo consequat
                  in. Nunc tincidunt vulputate nisi sed ornare. Vestibulum a
                  tristique risus. Maecenas pulvinar mauris non est sagittis, ac
                  vulputate dolor semper. Duis efficitur faucibus urna, sed
                  ultricies arcu rutrum ac. Maecenas non ex vel tellus placerat
                  scelerisque. Duis eget urna ipsum. Quisque vitae sem posuere,
                  hendrerit nulla eu, aliquam arcu.
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <span>
                  Preço:{" "}
                  {(4000).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <span>Quantidade em estoque: 4</span>
              </div>
            </CardFooter>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
