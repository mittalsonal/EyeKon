"use client";

import { MessageCircleMore, Trash2 } from "lucide-react";
import type { Product } from "@/data/products";
import { buildEnquiryWhatsAppLink } from "@/lib/whatsapp";

export function EnquirySummary({
  items,
  onClear,
}: {
  items: Array<{ product: Product; quantity: number }>;
  onClear: () => void;
}) {
  return (
    <aside className="rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sapphire">Enquiry Summary</p>
      <h2 className="mt-3 text-2xl font-bold text-deep-navy">Ready to send your product list?</h2>
      <p className="mt-3 text-sm leading-7 text-muted">
        Your enquiry is shared through WhatsApp as one clear message, including products and quantities.
      </p>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.product.id} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm">
            <span className="font-semibold text-deep-navy">
              {item.product.code} {item.product.name}
            </span>
            <span className="text-muted">Qty {item.quantity}</span>
          </div>
        ))}
      </div>
      <a
        href={buildEnquiryWhatsAppLink(items)}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sapphire px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d47a1]"
      >
        <MessageCircleMore className="mr-2 h-4 w-4" />
        Send Enquiry on WhatsApp
      </a>
      <button
        type="button"
        onClick={onClear}
        className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-deep-navy transition hover:bg-ice-blue"
      >
        <Trash2 className="mr-2 h-4 w-4" />
        Clear Enquiry
      </button>
    </aside>
  );
}
