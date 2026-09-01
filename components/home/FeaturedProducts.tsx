"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Check,
  Headphones,
  Lightbulb,
  Plus,
  ScanEye,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import type { Product } from "@/data/products";
import { featuredProducts } from "@/data/products";
import { useEnquiry } from "@/contexts/EnquiryContext";

const benefits = [
  {
    icon: Award,
    title: "Precision Engineering",
    description: "Built with advanced technology for superior accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Reliability",
    description: "Tested for durability and consistent performance.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Professional guidance and responsive after-sales support.",
  },
  {
    icon: UsersRound,
    title: "Trusted by Professionals",
    description: "Preferred by eye-care specialists.",
  },
];

const featureFallbacks = ["Precision optics", "Stable illumination", "Ergonomic design"];

function TechnologyWave() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] overflow-hidden lg:block" aria-hidden="true">
      <svg viewBox="0 0 900 320" className="absolute right-0 top-0 h-full w-full opacity-70" fill="none">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <path
            key={index}
            d={`M-40 ${214 + index * 10} C 145 ${75 + index * 3}, 260 ${300 - index * 7}, 472 ${130 + index * 5} S 715 ${18 + index * 14}, 950 ${130 + index * 10}`}
            stroke={index % 2 === 0 ? "#0F52BA" : "#A6C5D7"}
            strokeWidth="1"
            opacity={0.22 + index * 0.035}
          />
        ))}
      </svg>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle,rgba(15,82,186,0.42)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20" />
    </div>
  );
}

function FeaturedHeroProduct({ product }: { product: Product }) {
  const { addItem, isInEnquiry } = useEnquiry();
  const added = isInEnquiry(product.id);
  const features = product.features?.slice(0, 3) ?? featureFallbacks;
  const FeatureIcons = [ScanEye, Lightbulb, BadgeCheck];

  return (
    <article className="relative isolate overflow-hidden rounded-[24px] border border-sapphire/15 bg-[linear-gradient(135deg,#ffffff_0%,#f3f8ff_62%,#eaf3ff_100%)] p-6 shadow-[0_22px_48px_rgba(15,82,186,0.12)] sm:col-span-2 sm:p-7 lg:col-span-2 lg:row-span-2 lg:min-h-[600px] xl:p-8">
      <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-sapphire/5 blur-3xl" />
      <div className="relative grid h-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative z-10 flex h-full flex-col lg:py-2">
          <div className="inline-flex w-fit items-center overflow-hidden rounded-full border border-sapphire/30 bg-white/75 text-xs font-bold uppercase tracking-[0.18em] text-sapphire">
            <span className="bg-sapphire px-3 py-2 text-white">01</span>
            <span className="px-3 py-2">Featured</span>
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.19em] text-sapphire">{product.category}</p>
          <h3 className="mt-3 max-w-sm text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-deep-navy xl:text-[44px]">
            {product.name}
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-[#4d638b]">{product.shortDescription}</p>
          <ul className="mt-7 space-y-3.5">
            {features.map((feature, index) => {
              const Icon = FeatureIcons[index];
              return (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium text-[#36527e]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dceafd] text-sapphire">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  {feature}
                </li>
              );
            })}
          </ul>
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <Link href={`/products/${product.slug}`} className="inline-flex items-center justify-center rounded-2xl bg-sapphire px-5 py-3.5 text-sm font-bold text-white shadow-[0_9px_22px_rgba(15,82,186,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0d47a1]">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <button type="button" onClick={() => addItem(product.id, 1)} className={`inline-flex items-center justify-center rounded-2xl border px-5 py-3.5 text-sm font-bold transition ${added ? "border-sapphire bg-sapphire/10 text-sapphire" : "border-sapphire/45 bg-white/80 text-deep-navy hover:bg-ice-blue"}`}>
              {added ? <Check className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}
              {added ? "Added" : "Add to Enquiry"}
            </button>
          </div>
        </div>
        <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-full">
          <div className="absolute h-[78%] w-[78%] rounded-full border border-white/90 bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(216,234,255,0.62)_48%,rgba(15,82,186,0.04)_70%)] shadow-[0_0_55px_rgba(15,82,186,0.12)]" />
          <div className="absolute bottom-[8%] h-12 w-[86%] rounded-[50%] bg-white shadow-[0_16px_20px_rgba(15,82,186,0.18)]" />
          <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 32vw" className="z-10 object-contain px-3 py-4 drop-shadow-[0_18px_14px_rgba(0,9,38,0.18)] transition duration-500 hover:scale-[1.025]" />
        </div>
      </div>
    </article>
  );
}

function FeaturedMiniProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem, isInEnquiry } = useEnquiry();
  const added = isInEnquiry(product.id);
  const number = String(index + 2).padStart(2, "0");

  return (
    <article className={`group flex min-h-[285px] flex-col overflow-hidden rounded-[20px] border border-sapphire/[0.13] bg-[linear-gradient(145deg,#ffffff,#f8fbff)] p-4 shadow-[0_12px_28px_rgba(0,9,38,0.07)] transition duration-300 hover:-translate-y-1 hover:border-sapphire/35 hover:shadow-[0_18px_32px_rgba(15,82,186,0.13)] ${index === 6 ? "lg:col-span-2" : ""}`}>
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#58709b]">
        <span className="rounded-full bg-[#e0edff] px-2 py-1 text-sapphire">{number}</span>
        <span className="truncate">{product.category}</span>
      </div>
      <div className="relative mt-3 h-32 overflow-hidden rounded-xl bg-[linear-gradient(145deg,#f7faff,#eaf3ff)] sm:h-36">
        <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 767px) 50vw, (max-width: 1279px) 40vw, 18vw" className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <h3 className="mt-4 line-clamp-2 text-base font-extrabold leading-5 tracking-[-0.03em] text-deep-navy">{product.name}</h3>
      <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#56709a]">{product.shortDescription}</p>
      <div className="mt-auto flex items-center justify-between pt-4">
        <Link href={`/products/${product.slug}`} className="inline-flex items-center text-xs font-bold text-sapphire transition hover:text-[#0d47a1]">
          View Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </Link>
        <button type="button" onClick={() => addItem(product.id, 1)} aria-label={`Add ${product.name} to enquiry`} className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${added ? "border-sapphire bg-sapphire text-white" : "border-sapphire/55 bg-white text-sapphire hover:bg-[#e6f0ff]"}`}>
          {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </button>
      </div>
    </article>
  );
}

export function FeaturedProducts() {
  const [heroProduct, ...supportingProducts] = featuredProducts;

  if (!heroProduct) return null;

  return (
    <section className="overflow-hidden bg-[#f7faff] pt-0">
      <div className="relative min-h-[300px] overflow-hidden bg-deep-navy text-white">
        <TechnologyWave />
        <div className="absolute -bottom-16 left-[-5%] h-28 w-[110%] rounded-[50%] bg-[#f7faff]" />
        <div className="container-shell relative z-10 flex min-h-[282px] flex-col justify-center py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div className="max-w-[670px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-sapphire bg-[#071538]/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Featured Equipment <span className="h-1.5 w-1.5 rounded-full bg-sapphire" />
            </div>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-[54px]">
              Precision-engineered solutions for modern <span className="text-[#1767db]">ophthalmic practices.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#d6e6f3]/90 sm:text-base">High-performance ophthalmic equipment designed for accuracy, reliability and exceptional clinical outcomes.</p>
          </div>
          <div className="relative z-10 mt-8 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
            <Link href="/products" className="inline-flex items-center rounded-full bg-sapphire px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(15,82,186,0.3)] transition hover:-translate-y-0.5 hover:bg-[#1464d8]">Explore All Products <ArrowRight className="ml-3 h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center rounded-full border border-powder-blue/55 bg-deep-navy/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-powder-blue hover:bg-white/5">Request a Quote <ArrowRight className="ml-3 h-4 w-4" /></Link>
          </div>
        </div>
      </div>

      <div className="container-shell relative z-20 -mt-7 pb-16">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2">
          <FeaturedHeroProduct product={heroProduct} />
          {supportingProducts.map((product, index) => <FeaturedMiniProductCard key={product.id} product={product} index={index} />)}
        </div>
        <div className="mt-3 grid overflow-hidden rounded-[22px] bg-deep-navy text-white shadow-[0_16px_34px_rgba(0,9,38,0.16)] sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className={`flex gap-4 px-5 py-6 ${index < benefits.length - 1 ? "xl:border-r xl:border-sapphire/25" : ""}`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sapphire/70 text-powder-blue"><Icon className="h-5 w-5" strokeWidth={1.7} /></span>
                <div><h3 className="text-sm font-bold">{benefit.title}</h3><p className="mt-1 text-xs leading-5 text-powder-blue/85">{benefit.description}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
