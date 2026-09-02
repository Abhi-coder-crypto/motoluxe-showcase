import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, FlaskConical, Headset } from "lucide-react";
import heroImg from "@/assets/hero-banner.jpg";
import { categories, featuredProducts } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motoluxe — Premium Autocare & Bike Care Products" },
      {
        name: "description",
        content:
          "German-formulated chain care, engine care and detailing products engineered for high-performance motorcycles and cars.",
      },
      {
        property: "og:title",
        content: "Motoluxe — Premium Autocare & Bike Care Products",
      },
      {
        property: "og:description",
        content:
          "German-formulated chain care, engine care and detailing products engineered for high performance.",
      },
    ],
  }),
  component: Home,
});

const trust = [
  {
    icon: BadgeCheck,
    title: "ISO 9001 Certified",
    body: "Every batch is blended and tested under a certified quality management system.",
  },
  {
    icon: FlaskConical,
    title: "German Formulation",
    body: "Base chemistry developed with German additive specialists, tuned for Indian conditions.",
  },
  {
    icon: Headset,
    title: "Direct Feedback Line",
    body: "Talk to our technical team about application, compatibility or bulk supply.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Motorcycle chain being treated with Motoluxe chain lubricant"
          width={1920}
          height={720}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-5 py-24">
          <div className="max-w-2xl rise-in">
            <span className="slash-tag inline-block bg-primary px-3.5 py-1.5 pr-6 font-display text-[11px] uppercase tracking-[0.28em] text-primary-foreground">
              Autocare · Bike Care
            </span>
            <h1 className="mt-6 text-6xl font-bold sm:text-7xl lg:text-8xl">
              Built for the
              <br />
              <span className="text-primary">Punishment</span>
              <br />
              You Call Riding
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              High-tack chain films, deposit-stripping engine treatments and
              hydrophobic gloss systems. No compromise chemistry for machines
              that get used hard.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/category/$category"
                params={{ category: "chain-care" }}
                className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm uppercase tracking-[0.22em] text-primary-foreground transition-all hover:ember-glow"
              >
                Shop the Range
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center border border-border bg-background/40 px-7 py-4 font-display text-sm uppercase tracking-[0.22em] backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                Bulk Enquiry
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-accent" />
      </section>

      {/* CATEGORIES */}
      <section className="relative mx-auto max-w-7xl px-5 py-24">
        <SectionHead
          eyebrow="Shop by Category"
          title="Three Systems. One Standard."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/category/$category"
              params={{ category: c.slug }}
              className="group relative isolate block overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:ember-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={960}
                  height={720}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent" />
                <span className="absolute right-4 top-4 font-display text-5xl font-bold text-foreground/15 transition-colors group-hover:text-primary/60">
                  {c.index}
                </span>
              </div>
              <div className="relative -mt-14 p-6">
                <h3 className="text-2xl font-bold">{c.name}</h3>
                <p className="mt-1 font-display text-xs uppercase tracking-[0.22em] text-primary">
                  {c.short}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.24em] text-accent">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead eyebrow="Featured" title="The Hero Line-Up" />
            <span className="eyebrow text-muted-foreground">Scroll →</span>
          </div>
          <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {featuredProducts.map((p) => (
              <div
                key={p.slug}
                className="w-72 shrink-0 snap-start sm:w-80"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead eyebrow="Why Motoluxe" title="No Marketing Chemistry." />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {trust.map((t) => (
            <div key={t.title} className="group bg-card p-8 transition-colors hover:bg-surface-raised">
              <div className="grid h-12 w-12 place-items-center border border-primary/40 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <span className="eyebrow flex items-center gap-3 text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h2>
    </div>
  );
}
