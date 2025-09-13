import "./index.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="@product-cataolog:ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
