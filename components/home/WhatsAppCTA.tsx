import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppCTA() {
  return (
    <section className="section-space">
      <div className="container-shell rounded-[36px] bg-deep-navy px-6 py-10 text-white shadow-[var(--shadow-soft)] md:px-10 md:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-powder-blue">Quick Enquiry</p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Looking for the Right Ophthalmic Equipment?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Speak with our team for product specifications, pricing and availability.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={buildGeneralWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sapphire px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d47a1]"
            >
              <MessageCircleMore className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/18 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/8"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
