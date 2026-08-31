import Link from "next/link";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-16 bg-deep-navy text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="text-xl font-bold tracking-[0.18em]">EYEKON</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Premium ophthalmic equipment designed to support clinics, hospitals, distributors, and eye-care professionals with reliable, modern solutions.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-powder-blue">
            Manufacturer of Ophthalmic Equipments
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-powder-blue">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-powder-blue">Products</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/products#Slit%20Lamps">Slit Lamps</Link>
            <Link href="/products#Trial%20Lens%20Sets">Trial Lens Sets</Link>
            <Link href="/products#Ophthalmic%20Chairs%20%26%20Units">Chair Units</Link>
            <Link href="/products#Diagnostic%20Equipment">Diagnostic Equipment</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-powder-blue">Contact</p>
          <div className="mt-4 space-y-4 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-powder-blue" />
              +91 00000 00000
            </p>
            <a href={buildGeneralWhatsAppLink()} target="_blank" rel="noreferrer" className="flex items-start gap-3">
              <MessageCircleMore className="mt-0.5 h-4 w-4 text-powder-blue" />
              WhatsApp Support
            </a>
            <p className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-powder-blue" />
              sales@eyekon.example
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-powder-blue" />
              India
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 EYEKON. All Rights Reserved.</p>
          <p>Precision in Vision. Excellence in Care.</p>
        </div>
      </div>
    </footer>
  );
}
