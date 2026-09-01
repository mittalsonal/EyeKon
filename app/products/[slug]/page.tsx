import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductDetailsClient } from "@/components/product/ProductDetailsClient";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { allProducts, getProductBySlug, getRelatedProducts } from "@/data/products";

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found | EYEKON" };
  }

  return {
    title: `${product.code ? `${product.code} ` : ""}${product.name} | EYEKON`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.category, product.slug);

  return (
    <section className="section-space">
      <div className="container-shell">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
          <Link href="/">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/products#${encodeURIComponent(product.category)}`}>{product.category}</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-deep-navy">{product.code || product.name}</span>
        </nav>
        <ProductDetailsClient product={product} />
        <RelatedProducts products={relatedProducts} />
      </div>
    </section>
  );
}
