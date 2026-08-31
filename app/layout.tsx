import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SearchProvider } from "@/components/common/SearchModal";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { EnquiryProvider } from "@/contexts/EnquiryContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyekon.example"),
  title: "EYEKON | Ophthalmic Equipment Manufacturer",
  description:
    "Explore professional ophthalmic equipment by EYEKON, designed for hospitals, clinics and eye-care professionals.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <EnquiryProvider>
          <SearchProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
          </SearchProvider>
        </EnquiryProvider>
      </body>
    </html>
  );
}
