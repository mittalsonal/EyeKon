import { SectionHeading } from "@/components/common/SectionHeading";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function FeaturedProducts() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured Equipment"
          title="Precision-engineered solutions for modern ophthalmic practices."
          description="Selected products that combine clinical utility, professional presentation, and a quote-led purchasing flow."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
