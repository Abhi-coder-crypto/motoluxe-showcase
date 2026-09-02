import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  Check,
  ShoppingCart,
  Minus,
  Plus,
  Flame,
} from "lucide-react";
import { getProduct, getCategory, getProductsByCategory } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$product")({
  loader: ({ params }) => {
    const product = getProduct(params.product);
    if (!product) throw notFound();
    return {
      product,
      category: getCategory(product.category)!,
      related: getProductsByCategory(product.category).filter(
        (p) => p.slug !== product.slug,
      ),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — Motoluxe" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Motoluxe`;
    const desc = `${product.tagline}. ${product.size}, ${product.price}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product, category, related } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  // Single studio shot per product: reuse it across the gallery frames with
  // varied crop anchors for an editorial gallery feel.
  const frames = ["center", "top", "bottom"];

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Link to="/" className="transition-colors hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          to="/category/$category"
          params={{ category: category.slug }}
          className="transition-colors hover:text-primary"
        >
          {category.name}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="relative overflow-hidden border border-border bg-card">
            <img
              src={product.image}
              alt={product.name}
              width={640}
              height={800}
              className="aspect-4/5 w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 gloss" />
            {product.badge && (
              <span
                className={`slash-tag absolute left-0 top-5 px-3.5 py-1.5 pr-6 font-display text-[11px] uppercase tracking-[0.24em] ${
                  product.badge === "Premium"
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {frames.map((pos) => (
              <div
                key={pos}
                className="overflow-hidden border border-border bg-card opacity-70 transition-opacity hover:opacity-100"
              >
                <img
                  src={product.image}
                  alt={`${product.name} detail`}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="aspect-square w-full object-cover"
                  style={{ objectPosition: `center ${pos}` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <span className="eyebrow text-primary">{category.name}</span>
          <h1 className="mt-3 text-5xl font-bold sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 flex items-end gap-4 border-y border-border py-6">
            <span className="font-display text-5xl font-bold">
              {product.price}
            </span>
            <span className="mb-1.5 eyebrow text-muted-foreground">
              {product.size} · incl. taxes
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-stretch gap-3">
            <div className="flex items-center border border-border">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-full w-11 place-items-center transition-colors hover:bg-surface-raised"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-display text-lg">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="grid h-full w-11 place-items-center transition-colors hover:bg-surface-raised"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setAdded(true)}
              className={`inline-flex flex-1 items-center justify-center gap-2 px-8 py-4 font-display text-sm uppercase tracking-[0.22em] transition-all sm:flex-none ${
                added
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground hover:ember-glow"
              }`}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </>
              )}
            </button>
          </div>
          <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Flame className="h-3.5 w-3.5 text-accent" />
            Checkout is not wired up — this build is a UI demonstration.
          </p>

          {/* Benefits */}
          <div className="mt-10 border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">Key Benefits</h2>
            <ul className="mt-5 space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-snug text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className="mt-6 border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">Application</h2>
            <ol className="mt-5 space-y-4">
              {product.usage.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm">
                  <span className="grid h-7 w-7 shrink-0 place-items-center border border-primary/40 font-display text-sm text-primary">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-muted-foreground">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20 border-t border-border pt-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            More from {category.name}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
