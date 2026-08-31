"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchModal } from "@/components/common/SearchModal";
import { useEnquiry } from "@/contexts/EnquiryContext";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";
import { MobileMenu } from "@/components/layout/MobileMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { totalItems, hydrated } = useEnquiry();
  const { open } = useSearchModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all ${
          isScrolled
            ? "border-b border-white/60 bg-white/92 shadow-[0_16px_40px_rgba(0,9,38,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-shell">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <div className="text-lg font-extrabold tracking-[0.18em] text-deep-navy">EYEKON</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted">
                Ophthalmic Equipments
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-deep-navy/88 transition hover:text-sapphire"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={open}
                className="rounded-full border border-border bg-white p-3 text-deep-navy transition hover:-translate-y-0.5 hover:border-sapphire/30"
                aria-label="Search products"
              >
                <Search className="h-4 w-4" />
              </button>
              <Link
                href="/enquiry"
                className="relative rounded-full border border-border bg-white p-3 text-deep-navy transition hover:-translate-y-0.5"
                aria-label="View enquiry list"
              >
                <ShoppingBag className="h-4 w-4" />
                {hydrated && totalItems > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-sapphire px-1 text-[10px] font-bold text-white">
                    {totalItems}
                  </span>
                ) : null}
              </Link>
              <a
                href={buildGeneralWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-deep-navy px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sapphire"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={open}
                className="rounded-full border border-border bg-white p-3 text-deep-navy"
                aria-label="Search products"
              >
                <Search className="h-4 w-4" />
              </button>
              <Link
                href="/enquiry"
                className="relative rounded-full border border-border bg-white p-3 text-deep-navy"
                aria-label="View enquiry list"
              >
                <ShoppingBag className="h-4 w-4" />
                {hydrated && totalItems > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-sapphire px-1 text-[10px] font-bold text-white">
                    {totalItems}
                  </span>
                ) : null}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="rounded-full border border-border bg-white p-3 text-deep-navy"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
