import { and, asc, like, sql } from "drizzle-orm";
import { Router } from "express";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

const router = Router();

router.get("/products", async (req, res) => {
  const { search, page = 0, limit = 10, sort = "nome, asc" } = req.query;
  console.log(req.query);
  const [sortParam, sortDirection] = String(sort).split(",");

  const sortColumn =
    {
      preco: schema.productsTable.preco,
      nome: schema.productsTable.nome,
      id: schema.productsTable.id,
    }[sortParam] || schema.productsTable.nome;

  try {
    const baseQuery = await db
      .select({
        id: schema.productsTable.id,
        nome: schema.productsTable.nome,
        preco: schema.productsTable.preco,
        url_imagem: schema.productsTable.url_imagem,
      })
      .from(schema.productsTable)
      .where(
        search ? like(schema.productsTable.nome, `%${search}%`) : undefined
      )
      .offset(Number(page))
      .limit(Number(limit))
      .orderBy(
        sortDirection === "desc"
          ? sql`${sortColumn} DESC`
          : sql`${sortColumn} ASC`
      );

    if (baseQuery.length > 0) {
      res.status(200).send(baseQuery);
    } else {
      res.status(401).send("Nenhum dado encontrado");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Erro ao tentar localizar os produtos");
  }
});

export default router;
