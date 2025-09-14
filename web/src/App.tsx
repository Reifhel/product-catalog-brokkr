import "./index.css";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { queryClient } from "./lib/react-query";
import { router } from "./routes";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="@product-cataolog:ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
