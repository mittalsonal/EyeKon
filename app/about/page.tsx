import { Building2, Eye, ShieldCheck, Users2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const audience = [
  { icon: Building2, title: "Eye Hospitals" },
  { icon: Eye, title: "Ophthalmologists" },
  { icon: ShieldCheck, title: "Clinics" },
  { icon: Users2, title: "Distributors" },
];

export default function AboutPage() {
  return (
    <div className="section-space">
      <div className="container-shell">
        <section className="rounded-[36px] bg-deep-navy px-6 py-12 text-white shadow-[var(--shadow-soft)] md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-powder-blue">About EYEKON</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Precision That Supports Better Vision
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            EYEKON is presented as a modern ophthalmic equipment manufacturer focused on clinical credibility, clean design language, and an easy product enquiry experience.
          </p>
        </section>
        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Our Story",
              description:
                "Use this section to introduce how EYEKON began, the needs it addresses, and the product philosophy behind the brand.",
            },
            {
              title: "Our Mission",
              description:
                "Position EYEKON around precision, trust, and dependable ophthalmic solutions for medical professionals.",
            },
            {
              title: "Our Approach",
              description:
                "Communicate a practical, engineering-led mindset built around usability, professionalism, and product clarity.",
            },
            {
              title: "Quality & Precision",
              description:
                "Keep this copy factual and editable without inventing certifications, counts, or unsupported manufacturing claims.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-bold text-deep-navy">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-muted">{item.description}</p>
            </div>
          ))}
        </section>
        <section className="mt-14 rounded-[36px] border border-border bg-white p-6 shadow-[var(--shadow-soft)] md:p-10">
          <SectionHeading
            eyebrow="Who We Serve"
            title="A professional fit for multiple ophthalmic buying contexts"
            description="The site is structured to speak clearly to institutions, clinicians, and distribution partners without slipping into a retail ecommerce tone."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {audience.map((item) => (
              <div key={item.title} className="rounded-[24px] bg-slate-50 p-6">
                <div className="inline-flex rounded-2xl bg-ice-blue p-3 text-sapphire">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-deep-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Tailored messaging for professional buyers, procurement teams, and clinical decision makers.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
