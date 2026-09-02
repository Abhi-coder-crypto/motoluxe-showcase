import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$product"
      params={{ product: product.slug }}
      className="group relative flex h-full flex-col border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:ember-glow"
    >
      {product.badge && (
        <span
          className={`slash-tag absolute left-0 top-4 z-10 px-3 py-1 pr-5 font-display text-[10px] uppercase tracking-[0.2em] ${
            product.badge === "Premium"
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {product.badge}
        </span>
      )}

      <div className="relative overflow-hidden bg-background">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={640}
          height={800}
          className="aspect-4/5 w-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
        <div className="pointer-events-none absolute inset-0 gloss" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-primary py-2.5 font-display text-xs uppercase tracking-[0.28em] text-primary-foreground transition-transform duration-300 group-hover:translate-y-0">
          View Details
        </div>
      </div>

      <div className="flex flex-1 flex-col border-t border-border p-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-snug text-muted-foreground">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="font-display text-xl text-foreground">
            {product.price}
          </span>
          <span className="eyebrow text-muted-foreground">{product.size}</span>
        </div>
      </div>
    </Link>
  );
}
