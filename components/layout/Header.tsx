"use client";

import Image from "next/image";
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
      <div className="sticky top-0 z-40 px-4 pt-3.5 sm:px-4 bg-[#000926]">
        <header
          className={`mx-auto max-w-[1180px] rounded-full border border-black/5 bg-white transition-shadow duration-300 ${
            isScrolled
              ? "shadow-[0_1px_1px_rgba(16,24,68,0.05),0_16px_40px_rgba(16,24,68,0.12)]"
              : "shadow-[0_1px_1px_rgba(16,24,68,0.04),0_8px_24px_rgba(16,24,68,0.06)]"
          }`}
        >
          <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-5">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center pl-1">
              <Image
                src="/Navbar/Logo.png"
                alt="EYEKON"
                width={500}
                height={52}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[13.5px] font-semibold text-deep-navy/72 transition hover:bg-sapphire/8 hover:text-deep-navy"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={open}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-deep-navy/8 bg-white text-deep-navy transition hover:-translate-y-0.5 hover:border-sapphire/30 hover:bg-sapphire/5"
                aria-label="Search products"
              >
                <Search className="h-[15px] w-[15px]" />
              </button>

              <Link
                href="/enquiry"
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-deep-navy/8 bg-white text-deep-navy transition hover:-translate-y-0.5 hover:border-sapphire/30 hover:bg-sapphire/5"
                aria-label="View enquiry list"
              >
                <ShoppingBag className="h-[15px] w-[15px]" />
                {hydrated && totalItems > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-sapphire px-1 text-[9.5px] font-bold text-white shadow-[0_0_0_2px_rgba(255,255,255,0.9)]">
                    {totalItems}
                  </span>
                ) : null}
              </Link>

              <a
                href={buildGeneralWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-gradient-to-br from-deep-navy to-[#1e3a8a] px-5 py-[9px] text-[13.5px] font-semibold text-white shadow-[0_6px_16px_rgba(16,24,68,0.25)] transition hover:-translate-y-0.5 hover:from-[#1e3a8a] hover:to-sapphire hover:shadow-[0_8px_20px_rgba(37,99,235,0.32)]"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={open}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-deep-navy/8 bg-white text-deep-navy transition hover:bg-sapphire/5"
                aria-label="Search products"
              >
                <Search className="h-[15px] w-[15px]" />
              </button>
              <Link
                href="/enquiry"
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-deep-navy/8 bg-white text-deep-navy transition hover:bg-sapphire/5"
                aria-label="View enquiry list"
              >
                <ShoppingBag className="h-[15px] w-[15px]" />
                {hydrated && totalItems > 0 ? (
                  <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-sapphire px-1 text-[9.5px] font-bold text-white shadow-[0_0_0_2px_rgba(255,255,255,0.9)]">
                    {totalItems}
                  </span>
                ) : null}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-deep-navy/8 bg-white text-deep-navy transition hover:bg-sapphire/5"
                aria-label="Open menu"
              >
                <Menu className="h-[15px] w-[15px]" />
              </button>
            </div>
          </div>
        </header>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}