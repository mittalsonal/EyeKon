"use client";

import { MessageCircleMore, Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useEnquiry } from "@/contexts/EnquiryContext";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";

export function ProductInfo({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, isInEnquiry } = useEnquiry();

  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">{product.category}</p>
      {product.code ? (
        <div className="mt-3 inline-flex rounded-full bg-ice-blue px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-sapphire">
          {product.code}
        </div>
      ) : null}
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-deep-navy md:text-5xl">
        {product.name}
      </h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
        {product.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {["Precision Equipment", "Professional Support", "WhatsApp Assistance"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-deep-navy"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sapphire">Price</p>
        <p className="mt-2 text-2xl font-bold text-deep-navy">Price on Request</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Connect with EYEKON on WhatsApp for pricing, availability, and technical guidance.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex items-center rounded-full border border-border bg-white shadow-[var(--shadow-card)]">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            className="px-4 py-3 text-deep-navy"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm font-semibold text-deep-navy">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.min(99, current + 1))}
            className="px-4 py-3 text-deep-navy"
            aria-label="Increase quantity"
          >
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
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
