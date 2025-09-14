import express from "express";
import { db } from "./db/connection.ts";
import { schema } from "./db/schema/index.ts";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

app.get("/health", (_, res) => {
  res.send("OK!");
});

app.get("/products", async (_, res) => {
  const queryResult = await db.select().from(schema.productsTable);

  res.send(queryResult);
});
