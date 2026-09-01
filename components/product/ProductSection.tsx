import type { ProductSection as ProductSectionType } from "@/data/products";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";

export function ProductSection({ section }: { section: ProductSectionType }) {
  const hasSpecifications = Boolean(section.specifications?.length);
  const hasBullets = Boolean(section.bullets?.length);

  if (!hasSpecifications && !hasBullets && !section.description) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-deep-navy">{section.title}</h2>
      {section.description ? (
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{section.description}</p>
      ) : null}
      {hasSpecifications ? (
        <div className="mt-5">
          <ProductSpecifications specifications={section.specifications ?? []} />
        </div>
      ) : null}
      {hasBullets ? (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {section.bullets?.map((bullet) => (
            <li
              key={bullet}
              className="rounded-[22px] border border-border bg-white px-4 py-4 text-sm leading-7 text-muted shadow-[var(--shadow-card)]"
            >
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
