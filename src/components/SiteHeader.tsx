import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { categories } from "@/data/catalog";
import { Logo } from "./Logo";

const linkBase =
  "font-display uppercase tracking-[0.18em] text-xs text-muted-foreground transition-colors hover:text-foreground";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const nav = (
    <>
      <Link
        to="/"
        className={linkBase}
        activeProps={{ className: "text-foreground" }}
        activeOptions={{ exact: true }}
        onClick={() => setOpen(false)}
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
          onClick={() => setOpen(false)}
        >
          {c.name}
        </Link>
      ))}
      <Link
        to="/contact"
        className={linkBase}
        activeProps={{ className: "text-foreground" }}
        onClick={() => setOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">{nav}</nav>

        <div className="flex items-center gap-3">
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
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center border border-border bg-surface lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-border bg-surface px-5 py-5 lg:hidden">
          {nav}
        </div>
      )}
    </header>
  );
}
