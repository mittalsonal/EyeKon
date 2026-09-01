import { Check } from "lucide-react";

export function ProductAccessories({
  title = "Standard Accessories",
  items,
}: {
  title?: string;
  items: string[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-deep-navy">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-[22px] border border-border bg-white px-4 py-4 shadow-[var(--shadow-card)]"
          >
            <span className="mt-0.5 inline-flex rounded-full bg-ice-blue p-2 text-sapphire">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-sm leading-7 text-deep-navy">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
