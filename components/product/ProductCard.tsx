"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useEnquiry } from "@/contexts/EnquiryContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem, isInEnquiry } = useEnquiry();
  const added = isInEnquiry(product.id);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-sapphire/25">
      <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(180deg,#f8fbfe,#dbe8f2)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-ice-blue px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sapphire">
            {product.code}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {product.category}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-deep-navy">{product.name}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{product.shortDescription}</p>
        <p className="mt-4 text-sm font-semibold text-sapphire">Request Price</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-deep-navy/12 px-4 py-3 text-sm font-semibold text-deep-navy transition hover:bg-ice-blue"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => addItem(product.id, 1)}
            className={`inline-flex flex-1 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${
              added ? "bg-emerald-50 text-emerald-700" : "bg-sapphire text-white hover:bg-[#0d47a1]"
            }`}
          >
            {added ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Added
              </>
            ) : (
              "Add to Enquiry"
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
