import {
  int,
  mysqlSchema,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

export const productsTable = mysqlTable("products", {
  id: varchar("id", { length: 36 }).primaryKey().notNull(),
  nome: text("nome").notNull(),
  descricao: text("descricao"),
  preco: int().notNull(),
  url_imagem: text("url_imagem").notNull(),
  quantidade_em_estoque: int().notNull(),
});
