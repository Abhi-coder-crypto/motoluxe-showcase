import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { categories } from "@/data/catalog";
import { Logo } from "./Logo";

const linkBase =
  "shrink-0 font-display uppercase tracking-[0.16em] text-[11px] text-muted-foreground transition-colors hover:text-foreground";

export function SiteHeader() {
  const nav = (
    <>
      <Link
        to="/"
        className={linkBase}
        activeProps={{ className: "text-foreground" }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          to="/category/$category"
          params={{ category: c.slug }}
          className={linkBase}
          activeProps={{ className: "text-foreground" }}
        >
          {c.name}
        </Link>
      ))}
      <Link
        to="/contact"
        className={linkBase}
        activeProps={{ className: "text-foreground" }}
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex shrink-0 items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 overflow-x-auto md:flex lg:gap-8">
          {nav}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Cart"
            className="relative grid h-9 w-9 place-items-center border border-border bg-surface text-foreground transition-colors hover:border-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -right-1.5 -top-1.5 grid h-4 w-4 place-items-center bg-accent font-display text-[10px] text-accent-foreground">
              0
            </span>
          </button>
        </div>
      </div>

      <div className="border-t border-border bg-surface md:hidden">
        <nav className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-5 py-3">
          {nav}
        </nav>
      </div>
    </header>
  );
}
