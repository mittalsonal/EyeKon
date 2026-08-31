import type { Product } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold text-deep-navy md:text-3xl">Related Products</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
