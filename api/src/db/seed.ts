import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.ts";
import { schema } from "./schema/index.ts";

await reset(db, schema);
console.log("DB Reset!");

await seed(db, schema).refine((f) => ({
  productsTable: {
    count: 5,
    columns: {
      id: f.uuid(),
      nome: f.companyName(),
      descricao: f.loremIpsum({ sentencesCount: 2 }),
      preco: f.int({ minValue: 0 }),
      url_imagem: f.valuesFromArray({
        values: [
          "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/rockfit/media/uploads/produtos/foto/rtcdsjwr/moletom-unissex-cinza.jpg",
        ],
      }),
      quantidade_em_estoque: f.int({ minValue: 0, maxValue: 999 }),
    },
  },
}));

await sql.end();

console.log("database seeded!");
