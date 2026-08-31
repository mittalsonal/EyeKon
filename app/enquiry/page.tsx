"use client";

import { useMemo } from "react";
import { EmptyState } from "@/components/common/EmptyState";
import { EnquiryItem } from "@/components/enquiry/EnquiryItem";
import { EnquirySummary } from "@/components/enquiry/EnquirySummary";
import { allProducts } from "@/data/products";
import { useEnquiry } from "@/contexts/EnquiryContext";

export default function EnquiryPage() {
  const { items, hydrated, clearEnquiry, removeItem, updateQuantity } = useEnquiry();

  const populatedItems = useMemo(
    () =>
      items
        .map((item) => ({
          product: allProducts.find((product) => product.id === item.productId),
          quantity: item.quantity,
        }))
        .filter((item): item is { product: (typeof allProducts)[number]; quantity: number } => Boolean(item.product)),
    [items],
  );

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sapphire">Enquiry</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-deep-navy">Your Product Enquiry</h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Build a clean product list and send it to EYEKON through WhatsApp when you’re ready.
          </p>
        </div>
        {hydrated && populatedItems.length === 0 ? (
          <EmptyState
            title="Your enquiry list is empty."
            description="Browse the catalogue to add ophthalmic equipment and create a WhatsApp-ready enquiry list."
            ctaLabel="Explore Products"
            ctaHref="/products"
          />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-5">
              {populatedItems.map((item) => (
                <EnquiryItem
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                  onUpdateQuantity={(quantity) => updateQuantity(item.product.id, quantity)}
                  onRemove={() => removeItem(item.product.id)}
                />
              ))}
            </div>
            <EnquirySummary items={populatedItems} onClear={clearEnquiry} />
          </div>
        )}
      </div>
    </section>
  );
}
