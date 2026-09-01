import { MessageCircleMore } from "lucide-react";
import type { Product } from "@/data/products";
import { buildProductWhatsAppLink } from "@/lib/whatsapp";

export function ProductEnquiryCTA({
  product,
  onAddToEnquiry,
}: {
  product: Product;
  onAddToEnquiry: () => void;
}) {
  return (
    <section className="rounded-[32px] bg-deep-navy px-6 py-8 text-white shadow-[var(--shadow-soft)] md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-powder-blue">Need Assistance?</p>
      <h2 className="mt-3 text-2xl font-bold md:text-3xl">
        Need More Information About {product.code || product.name}?
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
        Speak with the EYEKON team for pricing, availability and product assistance.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={buildProductWhatsAppLink(product, 1)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-sapphire px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d47a1]"
        >
          <MessageCircleMore className="mr-2 h-4 w-4" />
          Request Quote on WhatsApp
        </a>
        <button
          type="button"
          onClick={onAddToEnquiry}
          className="inline-flex items-center justify-center rounded-full border border-white/16 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/8"
        >
          Add to Enquiry
        </button>
      </div>
    </section>
  );
}
