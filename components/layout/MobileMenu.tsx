"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-deep-navy/60 backdrop-blur-sm md:hidden">
      <div className="ml-auto h-full w-[86%] max-w-sm bg-white px-6 py-6 shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-deep-navy">EYEKON</p>
            <p className="text-sm text-muted">Manufacturer of Ophthalmic Equipments</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border p-2 text-deep-navy"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-deep-navy transition hover:bg-ice-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={buildGeneralWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-sapphire px-5 py-3 text-sm font-semibold text-white"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
