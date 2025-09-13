import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { NavLink } from "react-router";

export function Catalog() {
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
          <NavLink to={"/product/123"}>
            <Card>
              <CardHeader>
                <CardTitle>Moletom cinza</CardTitle>
                <CardDescription>
                  Moletom Unissex: Estilo e Conforto em uma Única Peça
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/rockfit/media/uploads/produtos/foto/rtcdsjwr/moletom-unissex-cinza.jpg"
                  alt="imagem de um moletom cinza"
                  className="w-50 h-50 rounded-2xl bg-cover"
                />
              </CardContent>
            </Card>
          </NavLink>
          <NavLink to={"/product/123"}>
            <Card>
              <CardHeader>
                <CardTitle>Moletom cinza</CardTitle>
                <CardDescription>
                  Moletom Unissex: Estilo e Conforto em uma Única Peça
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/rockfit/media/uploads/produtos/foto/rtcdsjwr/moletom-unissex-cinza.jpg"
                  alt="imagem de um moletom cinza"
                  className="w-50 h-50 rounded-2xl bg-cover"
                />
              </CardContent>
            </Card>
          </NavLink>
          <NavLink to={"/product/123"}>
            <Card>
              <CardHeader>
                <CardTitle>Moletom cinza</CardTitle>
                <CardDescription>
                  Moletom Unissex: Estilo e Conforto em uma Única Peça
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/rockfit/media/uploads/produtos/foto/rtcdsjwr/moletom-unissex-cinza.jpg"
                  alt="imagem de um moletom cinza"
                  className="w-50 h-50 rounded-2xl bg-cover"
                />
              </CardContent>
            </Card>
          </NavLink>
          <NavLink to={"/product/123"}>
            <Card>
              <CardHeader>
                <CardTitle>Moletom cinza</CardTitle>
                <CardDescription>
                  Moletom Unissex: Estilo e Conforto em uma Única Peça
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/rockfit/media/uploads/produtos/foto/rtcdsjwr/moletom-unissex-cinza.jpg"
                  alt="imagem de um moletom cinza"
                  className="w-50 h-50 rounded-2xl bg-cover"
                />
              </CardContent>
            </Card>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
