import { HomeIcon } from "lucide-react";
import { NavLink } from "react-router";
import { ThemeToggle } from "./theme/theme-toggle";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <div className="border-b ">
      <div className="flex h-16 items-center gap-4 px-6">
        <h1 className="font-bold text-2xl">Product Catalog</h1>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex w-20 items-center space-x-4 lg:space-x-6">
          <NavLink
            to="/"
            className="flex justify-center gap-2 leading-4 hover:text-muted-foreground"
          >
            <HomeIcon className="h-4 w-4" />
            Início
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
