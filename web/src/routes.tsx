import { createBrowserRouter } from "react-router";
import { AppLayout } from "./pages/_Layouts/app";
import { Catalog } from "./pages/catalog/catalog";
import { ProductDetails } from "./pages/product-details/product-details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Catalog />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
