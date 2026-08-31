import { Cpu, Gem, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const items = [
  {
    icon: Cpu,
    title: "Precision Engineering",
    description: "Thoughtful product design focused on consistent examination performance and dependable handling.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Performance",
    description: "Equipment selections presented with a clinical tone suited for institutions and daily professional use.",
  },
  {
    icon: Gem,
    title: "Quality Assurance",
    description: "A premium visual system that communicates care, trust, and a methodical product approach.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "WhatsApp-first enquiry tools that make it easy for teams to ask for pricing, specifications, and availability.",
  },
];

export function WhyEyekon() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] bg-deep-navy p-8 text-white shadow-[var(--shadow-soft)] md:p-10">
          <SectionHeading
            eyebrow="Why EYEKON"
            title="Why Professionals Choose EYEKON"
            description="A premium B2B buying experience shaped for doctors, hospitals, clinics, distributors, and optical businesses."
            invert
          />
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            EYEKON is positioned as a modern ophthalmic equipment manufacturer with a focus on precision,
            clean engineering language, and a smooth enquiry process instead of a retail-style checkout flow.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="inline-flex rounded-2xl bg-ice-blue p-3 text-sapphire">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-deep-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
