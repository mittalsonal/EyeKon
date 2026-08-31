import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

export function AboutPreview() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell rounded-[36px] border border-border bg-[linear-gradient(135deg,#ffffff_0%,#eef5fb_100%)] px-6 py-10 shadow-[var(--shadow-soft)] md:px-10 md:py-14">
        <SectionHeading
          eyebrow="About EYEKON"
          title="Built for Precision. Designed for Professionals."
          description="EYEKON focuses on ophthalmic equipment that supports clinics, hospitals, and eye-care professionals with premium presentation and practical product access."
        />
        <div className="mt-8 grid gap-4 text-sm leading-7 text-muted md:grid-cols-3">
          <p>Editable company messaging keeps the site honest while still presenting a credible, polished B2B brand experience.</p>
          <p>Clear product data structure makes it simple to replace descriptions, images, and specifications later without code rewrites.</p>
          <p>The UI balances medical cleanliness with premium contrast, using Deep Navy and Sapphire strategically throughout the journey.</p>
        </div>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center rounded-full bg-deep-navy px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sapphire"
        >
          Learn More About EYEKON
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
