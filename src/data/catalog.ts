import chainCleaner from "@/assets/p-chain-cleaner.jpg";
import chainLube from "@/assets/p-chain-lube.jpg";
import degreaser from "@/assets/p-degreaser.jpg";
import engineFlush from "@/assets/p-engine-flush.jpg";
import oilBooster from "@/assets/p-oil-booster.jpg";
import coolant from "@/assets/p-coolant.jpg";
import wax from "@/assets/p-wax.jpg";
import detailer from "@/assets/p-detailer.jpg";
import tyreShine from "@/assets/p-tyre-shine.jpg";

import catChain from "@/assets/cat-chain-care.jpg";
import catEngine from "@/assets/cat-engine-care.jpg";
import catBody from "@/assets/cat-body-detailing.jpg";

export type CategorySlug = "chain-care" | "engine-care" | "body-detailing";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: CategorySlug;
  price: string;
  size: string;
  image: string;
  badge?: string;
  description: string;
  benefits: string[];
  usage: string[];
};

export type Category = {
  slug: CategorySlug;
  name: string;
  short: string;
  blurb: string;
  image: string;
  index: string;
};

export const categories: Category[] = [
  {
    slug: "chain-care",
    name: "Chain Care",
    short: "Drive-train grip, zero fling",
    blurb:
      "Cleaners, lubricants and degreasers engineered for O-, X- and Z-ring chains under sustained high load.",
    image: catChain,
    index: "01",
  },
  {
    slug: "engine-care",
    name: "Engine Care",
    short: "Internals, protected cold to redline",
    blurb:
      "Flushes, additives and coolants formulated to strip deposits and hold a film where heat is highest.",
    image: catEngine,
    index: "02",
  },
  {
    slug: "body-detailing",
    name: "Body & Detailing",
    short: "Depth, gloss and hydrophobic armour",
    blurb:
      "Waxes, ceramic detailers and trim dressings that build a hard, water-shedding shell over paint and plastics.",
    image: catBody,
    index: "03",
  },
];

export const products: Product[] = [
  {
    slug: "chain-cleaner",
    name: "Chain Cleaner X1",
    tagline: "Dissolves baked-on grime in 60 seconds",
    category: "chain-care",
    price: "₹649",
    size: "500 ml",
    image: chainCleaner,
    badge: "Best Seller",
    description:
      "A solvent-balanced aerosol that breaks down old lube, road tar and abrasive grit without attacking O-ring seals. Sprays foam-thick so it clings to the run instead of dripping onto your rim.",
    benefits: [
      "Safe on O-, X- and Z-ring seals",
      "Cuts hardened lube and tar in under a minute",
      "Leaves no residue film before re-lubing",
      "Non-corrosive to alloy sprockets",
    ],
    usage: [
      "Put the bike on a paddock stand and shake the can for 20 seconds.",
      "Spray the full chain run while slowly rotating the rear wheel.",
      "Let it dwell 60 seconds, then agitate with a chain brush.",
      "Rinse with low-pressure water and dry fully before lubing.",
    ],
  },
  {
    slug: "chain-lube",
    name: "Chain Lube Pro",
    tagline: "High-tack film that refuses to fling",
    category: "chain-care",
    price: "₹899",
    size: "400 ml",
    image: chainLube,
    badge: "Premium",
    description:
      "A PTFE-reinforced lubricant that penetrates thin, then sets into a high-tack film. Rated for sustained highway speeds and wet-weather commuting alike.",
    benefits: [
      "PTFE-reinforced, extreme-pressure rated",
      "Sets tack-dry — minimal fling on the rim",
      "Water-resistant film holds through monsoon runs",
      "Extends chain and sprocket service life",
    ],
    usage: [
      "Apply only to a clean, fully dry chain.",
      "Spray the inner side plates while rotating the wheel two full turns.",
      "Wait 10 minutes for the carrier to flash off.",
      "Wipe excess from the outer plates before riding.",
    ],
  },
  {
    slug: "chain-degreaser",
    name: "Heavy Degreaser",
    tagline: "Industrial strength on the worst build-up",
    category: "chain-care",
    price: "₹549",
    size: "500 ml",
    image: degreaser,
    description:
      "For neglected drive-trains, swingarms and engine casings. A concentrated trigger-spray degreaser that emulsifies heavy grease so it rinses away with plain water.",
    benefits: [
      "Emulsifies heavy grease and oil deposits",
      "Water-rinseable — no solvent wipe-down needed",
      "Safe on painted and powder-coated surfaces",
      "Biodegradable surfactant base",
    ],
    usage: [
      "Spray directly onto cold, dry, heavily soiled areas.",
      "Allow 2-3 minutes of dwell time.",
      "Agitate stubborn spots with a stiff brush.",
      "Rinse thoroughly and dry with compressed air or a cloth.",
    ],
  },
  {
    slug: "engine-flush",
    name: "Engine Flush",
    tagline: "Clears sludge before every oil change",
    category: "engine-care",
    price: "₹749",
    size: "300 ml",
    image: engineFlush,
    badge: "Best Seller",
    description:
      "A pre-drain detergent treatment that suspends varnish and sludge so they leave with the old oil instead of settling in the sump.",
    benefits: [
      "Suspends sludge and varnish deposits",
      "Restores hydraulic tappet and ring response",
      "Wet-clutch safe for motorcycle engines",
      "Compatible with mineral and synthetic oils",
    ],
    usage: [
      "Add the full bottle to warm engine oil before draining.",
      "Idle the engine for 10 minutes — do not rev or ride.",
      "Drain the oil hot and replace the oil filter.",
      "Refill with fresh oil to the manufacturer's spec.",
    ],
  },
  {
    slug: "oil-booster",
    name: "Oil Booster MT",
    tagline: "Friction modifier for the top end",
    category: "engine-care",
    price: "₹1,199",
    size: "250 ml",
    image: oilBooster,
    badge: "Premium",
    description:
      "A German-formulated ester and moly complex that plates onto bearing surfaces, holding protection through cold starts and sustained high-RPM work.",
    benefits: [
      "Reduces friction and top-end mechanical noise",
      "Holds film strength at high oil temperatures",
      "Cold-start protection from the first crank",
      "One dose lasts a full oil-change interval",
    ],
    usage: [
      "Shake well before opening.",
      "Pour into the fill port with fresh oil at every change.",
      "Use 250 ml per 3-4 litres of engine oil.",
      "Run the engine for 5 minutes to circulate fully.",
    ],
  },
  {
    slug: "coolant",
    name: "Track Coolant",
    tagline: "Thermal control under sustained load",
    category: "engine-care",
    price: "₹899",
    size: "1 L",
    image: coolant,
    description:
      "A ready-to-use silicate-free coolant with organic acid corrosion inhibitors — built for liquid-cooled engines that spend real time at redline.",
    benefits: [
      "Raises boiling point, lowers freezing point",
      "Silicate-free — safe for alloy radiators",
      "Long-life organic corrosion inhibitors",
      "Pre-mixed, ready to pour",
    ],
    usage: [
      "Drain the old coolant from a fully cold engine.",
      "Flush the system with distilled water.",
      "Fill to the radiator neck and the reservoir mark.",
      "Run to operating temperature, then bleed and top up.",
    ],
  },
  {
    slug: "carnauba-wax",
    name: "Carnauba Wax",
    tagline: "Deep, wet-look gloss with real depth",
    category: "body-detailing",
    price: "₹1,499",
    size: "200 g",
    image: wax,
    badge: "Premium",
    description:
      "A high-grade carnauba paste that lays down warm depth on dark paint and buffs off without dust or streaking.",
    benefits: [
      "High-grade carnauba for warm gloss depth",
      "Buffs off clean with no white residue",
      "8-10 weeks of protection per application",
      "Safe on clear coat, chrome and gloss trim",
    ],
    usage: [
      "Wash and fully dry the panel first.",
      "Load a foam applicator and work a thin layer in straight passes.",
      "Let it haze for 5 minutes in the shade.",
      "Buff off with a clean microfibre towel.",
    ],
  },
  {
    slug: "ceramic-detailer",
    name: "Ceramic Detailer",
    tagline: "SiO2 top-up in a single wipe",
    category: "body-detailing",
    price: "₹1,099",
    size: "500 ml",
    image: detailer,
    description:
      "A spray-on SiO2 sealant that adds slickness and beading on top of existing wax or coatings. Ideal as a post-wash finisher.",
    benefits: [
      "SiO2 sealant — sharp water beading",
      "Adds slickness over existing coatings",
      "Streak-free on glass and paint alike",
      "Under 5 minutes for a full bike",
    ],
    usage: [
      "Work on a cool surface out of direct sunlight.",
      "Mist two or three sprays onto one panel at a time.",
      "Spread with a folded microfibre towel.",
      "Flip to a dry side and buff to a clear finish.",
    ],
  },
  {
    slug: "tyre-shine",
    name: "Tyre & Trim Gel",
    tagline: "Satin black that survives the rain",
    category: "body-detailing",
    price: "₹699",
    size: "300 ml",
    image: tyreShine,
    description:
      "A non-sling gel dressing that restores faded sidewalls and plastic trim to a deep satin black without a greasy surface.",
    benefits: [
      "Non-sling gel formula — no spatter on paint",
      "Restores faded plastic and rubber trim",
      "Satin finish, not a greasy shine",
      "UV inhibitors slow future fading",
    ],
    usage: [
      "Clean and dry the sidewall or trim surface.",
      "Apply an even coat with the foam applicator.",
      "Let it cure for 10 minutes before riding.",
      "Add a second coat for a deeper finish.",
    ],
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const featuredProducts = products.filter((p) => p.badge);
