import cors from "cors";
import express from "express";
import getProductDetails from "./http/routes/get-product-details.ts";
import getProducts from "./http/routes/get-products.ts";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

app.get("/health", (_, res) => {
  res.send("OK!");
});

app.use(getProducts);
app.use(getProductDetails);
