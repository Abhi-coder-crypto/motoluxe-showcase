export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const text = size === "lg" ? "text-3xl" : "text-xl";
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-7 w-2.5 -skew-x-12 flex-col">
        <span className="h-1/2 w-full bg-primary" />
        <span className="h-1/2 w-full bg-accent" />
      </span>
      <span
        className={`font-display font-bold uppercase leading-none tracking-tight ${text}`}
      >
        Moto<span className="text-primary">luxe</span>
      </span>
    </span>
  );
}
