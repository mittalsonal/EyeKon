"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { Product } from "@/data/products";

interface EnquiryItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export function EnquiryItem({ product, quantity, onUpdateQuantity, onRemove }: EnquiryItemProps) {
  return (
    <article className="grid gap-4 rounded-[28px] border border-border bg-white p-4 shadow-[var(--shadow-card)] sm:grid-cols-[128px_1fr_auto] sm:items-center">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ice-blue">
        <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
      </div>
      <div>
        {product.code ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sapphire">{product.code}</p>
        ) : null}
        <h2 className="mt-2 text-xl font-bold text-deep-navy">{product.name}</h2>
        <p className="mt-2 text-sm text-muted">{product.category}</p>
      </div>
      <div className="flex flex-col items-start gap-4 sm:items-end">
        <div className="flex items-center rounded-full border border-border bg-slate-50">
          <button type="button" onClick={() => onUpdateQuantity(quantity - 1)} className="px-4 py-3 text-deep-navy" aria-label={`Decrease quantity for ${product.name}`}>
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm font-semibold text-deep-navy">{quantity}</span>
          <button type="button" onClick={() => onUpdateQuantity(quantity + 1)} className="px-4 py-3 text-deep-navy" aria-label={`Increase quantity for ${product.name}`}>
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button type="button" onClick={onRemove} className="inline-flex items-center rounded-full border border-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50">
          <Trash2 className="mr-2 h-4 w-4" />
          Remove
        </button>
      </div>
    </article>
  );
}
