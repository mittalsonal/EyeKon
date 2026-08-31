"use client";

import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { buildEnquiryWhatsAppLink, buildGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    productInterest: "",
    message: "",
  });

  const contactCards = [
    { icon: Phone, title: "Call Us", value: "+91 00000 00000" },
    { icon: MessageCircleMore, title: "WhatsApp", value: "Quick product assistance" },
    { icon: Mail, title: "Email Us", value: "sales@eyekon.example" },
    { icon: MapPin, title: "Location", value: "India" },
  ];

  return (
    <div className="section-space">
      <div className="container-shell">
        <section className="rounded-[36px] bg-deep-navy px-6 py-12 text-white shadow-[var(--shadow-soft)] md:px-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Talk Ophthalmic Solutions"
            description="Use WhatsApp as the primary enquiry channel while still presenting a polished, professional contact experience."
            invert
          />
        </section>
        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <div key={card.title} className="rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="inline-flex rounded-2xl bg-ice-blue p-3 text-sapphire">
                <card.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-deep-navy">{card.title}</h2>
              <p className="mt-3 text-sm text-muted">{card.value}</p>
            </div>
          ))}
        </section>
        <section className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[32px] border border-border bg-white p-7 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold text-deep-navy">Direct WhatsApp</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              For quick discussion about product specifications, pricing, or availability, connect with the EYEKON team on WhatsApp.
            </p>
            <a
              href={buildGeneralWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-sapphire px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d47a1]"
            >
              <MessageCircleMore className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
          <form
            className="rounded-[32px] border border-border bg-white p-7 shadow-[var(--shadow-card)]"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(buildEnquiryWhatsAppLink([], form), "_blank", "noopener,noreferrer");
            }}
          >
            <h2 className="text-2xl font-bold text-deep-navy">Send Enquiry on WhatsApp</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              This form does not send data to a server. It packages your information into a WhatsApp enquiry message instead.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { name: "fullName", label: "Full Name", type: "text" },
                { name: "phone", label: "Phone Number", type: "tel" },
                { name: "email", label: "Email", type: "email" },
                { name: "company", label: "Company / Clinic", type: "text" },
                { name: "productInterest", label: "Product of Interest", type: "text", full: true },
              ].map((field) => (
                <label key={field.name} className={field.full ? "md:col-span-2" : ""}>
                  <span className="mb-2 block text-sm font-semibold text-deep-navy">{field.label}</span>
                  <input
                    type={field.type}
                    value={form[field.name as keyof typeof form]}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, [field.name]: event.target.value }))
                    }
                    className="w-full rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm text-deep-navy outline-none transition focus:border-sapphire"
                  />
                </label>
              ))}
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-deep-navy">Message</span>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  rows={5}
                  className="w-full rounded-2xl border border-border bg-slate-50 px-4 py-3 text-sm text-deep-navy outline-none transition focus:border-sapphire"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center rounded-full bg-deep-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sapphire"
            >
              <MessageCircleMore className="mr-2 h-4 w-4" />
              Send Enquiry on WhatsApp
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
