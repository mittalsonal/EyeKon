"use client";

import { useEnquiry } from "@/contexts/EnquiryContext";
import type { Product } from "@/data/products";
import { ProductAccessories } from "@/components/product/ProductAccessories";
import { ProductEnquiryCTA } from "@/components/product/ProductEnquiryCTA";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductSection } from "@/components/product/ProductSection";

export function ProductDetailsClient({ product }: { product: Product }) {
  const { addItem } = useEnquiry();

  return (
    <div className="space-y-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      <div className="mx-auto max-w-6xl space-y-10">
        {product.description ? (
          <section>
            <h2 className="text-2xl font-bold text-deep-navy">Product Overview</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-muted">{product.description}</p>
          </section>
        ) : null}

        {product.features?.length ? (
          <section>
            <h2 className="text-2xl font-bold text-deep-navy">Key Features</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[22px] border border-border bg-white px-4 py-4 text-sm leading-7 text-muted shadow-[var(--shadow-card)]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {product.specifications?.length ? (
          <ProductSection
            section={{ title: "Technical Specifications", specifications: product.specifications }}
          />
        ) : null}

        {product.additionalSections?.map((section) => (
          <ProductSection key={section.title} section={section} />
        ))}

        {product.accessories?.length ? <ProductAccessories items={product.accessories} /> : null}

        {product.applications?.length ? (
          <section>
            <h2 className="text-2xl font-bold text-deep-navy">Applications</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.applications.map((application) => (
                <li
                  key={application}
                  className="rounded-[22px] border border-border bg-slate-50 px-4 py-4 text-sm leading-7 text-muted"
                >
                  {application}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <ProductEnquiryCTA product={product} onAddToEnquiry={() => addItem(product.id, 1)} />
      </div>
    </div>
  );
}
