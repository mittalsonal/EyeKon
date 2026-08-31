"use client";

import { MessageCircleMore } from "lucide-react";
import { buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={buildGeneralWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#16a34a] px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(22,163,74,0.28)] transition hover:-translate-y-0.5 md:bottom-6 md:right-6"
    >
      <MessageCircleMore className="h-5 w-5" />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}
