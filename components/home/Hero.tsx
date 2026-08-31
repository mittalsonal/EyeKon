import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Headset, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="overflow-hidden bg-deep-navy text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-powder-blue">
            Trusted Ophthalmic Equipment Manufacturer
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Precision Equipment for Better Vision Care
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Advanced ophthalmic equipment engineered for precision, reliability and exceptional clinical performance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-sapphire px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d47a1]"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/8"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: BadgeCheck, label: "20+ Ophthalmic Products" },
              { icon: ShieldCheck, label: "Quality Focused" },
              { icon: Headset, label: "Professional Support" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm">
                <item.icon className="h-5 w-5 text-powder-blue" />
                <p className="mt-3 text-sm font-semibold text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(166,197,215,0.25),transparent_48%)]" />
          <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] p-5 shadow-[0_28px_60px_rgba(0,0,0,0.25)]">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] overflow-hidden rounded-[24px] bg-white/10">
                <Image src="/products/hero-equipment.svg" alt="Premium ophthalmic equipment" fill priority className="object-cover" />
              </div>
              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/10 bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-powder-blue">Clinical Design</p>
                  <p className="mt-2 text-lg font-semibold">Built for eye-care professionals</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Balanced industrial design, clean instrumentation, and premium visual identity.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-powder-blue">Workflow Ready</p>
                  <p className="mt-2 text-lg font-semibold">Catalogue plus enquiry experience</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Designed to help hospitals, clinics, and distributors enquire quickly with clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
