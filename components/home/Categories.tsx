import Link from "next/link";
import {
  Activity,
  Armchair,
  Eye,
  Microscope,
  ScanSearch,
  Settings2,
  TestTubeDiagonal,
  View,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { productCategories } from "@/data/products";
import { formatCategoryForUrl } from "@/lib/utils";

const iconMap = [ScanSearch, View, TestTubeDiagonal, Eye, Armchair, Activity, Microscope, Settings2];

export function Categories() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Categories"
          title="Explore Our Ophthalmic Solutions"
          description="A refined portfolio covering diagnostics, refraction, examination room setups, and essential ophthalmic accessories."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((category, index) => {
            const Icon = iconMap[index];
            return (
              <Link
                key={category}
                href={`/products#${formatCategoryForUrl(category)}`}
                className="group rounded-[28px] border border-border bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-sapphire/30"
              >
                <div className="inline-flex rounded-2xl bg-ice-blue p-3 text-sapphire transition group-hover:bg-sapphire group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-deep-navy">{category}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Professionally presented equipment group tailored for clinical and institutional use.
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
