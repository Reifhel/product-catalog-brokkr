import { eq } from "drizzle-orm";
import { Router } from "express";
import { db } from "../../db/connection.ts";
import { productsTable } from "../../db/schema/products.ts";

const router = Router();

router.get("/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    const baseQuery = await db.query.productsTable.findFirst({
      where: eq(productsTable.id, productId),
    });

    if (baseQuery) {
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
