"use client";

import Link from "next/link";
import { MessageCircleMore, Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useEnquiry } from "@/contexts/EnquiryContext";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";

export function ProductDetailsClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, isInEnquiry } = useEnquiry();

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
      <ProductGallery images={product.images} name={product.name} />
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-ice-blue px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-sapphire">
            {product.code}
          </span>
          <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {product.category}
          </span>
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-deep-navy">{product.name}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{product.shortDescription}</p>
        <p className="mt-5 text-sm font-semibold text-sapphire">{product.availability}</p>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex items-center rounded-full border border-border bg-white">
            <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="px-4 py-3 text-deep-navy" aria-label="Decrease quantity">
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-10 text-center text-sm font-semibold text-deep-navy">{quantity}</span>
            <button type="button" onClick={() => setQuantity((current) => Math.min(99, current + 1))} className="px-4 py-3 text-deep-navy" aria-label="Increase quantity">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => addItem(product.id, quantity)}
            className="inline-flex items-center justify-center rounded-full bg-sapphire px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d47a1]"
          >
            {isInEnquiry(product.id) ? "Added to Enquiry" : "Add to Enquiry"}
          </button>
          <a
            href={buildProductWhatsAppLink(product, quantity)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-deep-navy/12 bg-white px-6 py-3.5 text-sm font-semibold text-deep-navy transition hover:bg-ice-blue"
          >
            <MessageCircleMore className="mr-2 h-4 w-4" />
            Order / Enquire on WhatsApp
          </a>
        </div>

        <div className="mt-8 rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-bold text-deep-navy">Need Help Choosing?</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Tell us your clinic setup, workflow, or preferred product category and we’ll help direct your enquiry to the right solution.
          </p>
          <Link href="/contact" className="mt-4 inline-flex rounded-full bg-deep-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-sapphire">
            Speak With Our Team
          </Link>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-deep-navy">Product Overview</h2>
              <p className="mt-4 text-base leading-8 text-muted">{product.description}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-deep-navy">Key Features</h2>
              <ul className="mt-4 grid gap-3">
                {product.features.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-border bg-white px-4 py-4 text-sm text-muted shadow-[var(--shadow-card)]">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-deep-navy">Applications</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.applications.map((application) => (
                  <li key={application} className="rounded-2xl border border-border bg-slate-50 px-4 py-4 text-sm text-muted">
                    {application}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <section>
            <h2 className="text-2xl font-bold text-deep-navy">Technical Specifications</h2>
            <div className="mt-4">
              <ProductSpecifications specifications={product.specifications} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
