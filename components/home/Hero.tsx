"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Headphones,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Glasses,
  ScanEye,
  Armchair,
  Eye,
  Settings,
  UsersRound,
} from "lucide-react";

const trustItems = [
  {
    icon: BadgeCheck,
    title: "20+",
    subtitle: "Ophthalmic Products",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    subtitle: "Focused",
  },
  {
    icon: Headphones,
    title: "Professional",
    subtitle: "Support",
  },
  {
    icon: UsersRound,
    title: "Trusted by",
    subtitle: "Professionals",
  },
];

const categories = [
  {
    icon: Stethoscope,
    label: "Diagnostic\nEquipment",
    href: "/products#Diagnostic%20Equipment",
  },
  {
    icon: Microscope,
    label: "Slit Lamps",
    href: "/products#Slit%20Lamps",
  },
  {
    icon: Glasses,
    label: "Refraction\nEquipment",
    href: "/products#Refraction%20Equipment",
  },
  {
    icon: ScanEye,
    label: "Trial Lens\nSets",
    href: "/products#Trial%20Lens%20Sets",
  },
  {
    icon: Armchair,
    label: "Ophthalmic\nChairs & Units",
    href: "/products#Ophthalmic%20Chairs%20%26%20Units",
  },
  {
    icon: Eye,
    label: "Vision Testing\nEquipment",
    href: "/products#Vision%20Testing%20Equipment",
  },
  {
    icon: Microscope,
    label: "Microscopes",
    href: "/products#Microscopes",
  },
  {
    icon: Settings,
    label: "Accessories",
    href: "/products#Accessories",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000926] text-white">
      {/* =====================================================
          TOP HERO AREA
      ====================================================== */}

      <div className="relative mx-auto max-w-[1440px]">
        <div className="relative min-h-[390px] lg:min-h-[405px]">
          {/* =================================================
              EYE IMAGE - RIGHT SIDE ONLY
          ================================================= */}

          <div className="absolute inset-y-0 right-0 hidden w-[59%] overflow-hidden lg:block">
            <Image
              src="/Landing Page/HeroSection.png" 
              alt="Advanced ophthalmic vision technology"
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />

            {/* Blend image into navy background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000926] via-[#000926]/50 to-transparent" />

            {/* subtle bottom blend */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#000926] to-transparent" />

            {/* subtle top blend */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#000926]/50 to-transparent" />
          </div>

          {/* Mobile eye */}
          <div className="absolute inset-0 block opacity-25 lg:hidden">
            <Image
              src="/Landing Page/HeroSection.png"
              alt=""
              fill
              priority
              className="object-cover object-[65%_center]"
            />

            <div className="absolute inset-0 bg-[#000926]/65" />
          </div>

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 flex min-h-[390px] items-center px-6 py-12 sm:px-10 lg:min-h-[405px] lg:w-[52%] lg:px-14 xl:px-16">
            <div className="w-full">
              {/* Badge */}

              <div className="inline-flex rounded-full border border-[#A6C5D7]/25 bg-[#071536]/70 px-4 py-[7px]">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#A6C5D7]">
                  Trusted Ophthalmic Equipment Manufacturer
                </span>
              </div>

              {/* Heading */}

              <h1 className="mt-5 max-w-[570px] text-[40px] font-bold leading-[0.98] tracking-[-0.045em] sm:text-[48px] lg:text-[51px] xl:text-[54px]">
                Precision Equipment
                <br />
                for Better{" "}
                <span className="text-[#1261D4]">
                  Vision Care.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-5 max-w-[500px] text-[13px] leading-[1.7] text-[#D6E6F3]/75 lg:text-[14px]">
                Advanced ophthalmic equipment engineered for precision,
                reliability and exceptional clinical performance.
              </p>

              {/* Buttons */}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/products"
                  className="
                    inline-flex h-[42px] items-center justify-center
                    rounded-full bg-[#0F52BA] px-6
                    text-[12px] font-semibold text-white
                    shadow-[0_7px_24px_rgba(15,82,186,0.28)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#1464D8]
                  "
                >
                  Explore Products
                </Link>

                <Link
                  href="/contact"
                  className="
                    group inline-flex h-[42px] items-center justify-center
                    rounded-full border border-[#A6C5D7]/35
                    bg-[#000926]/30 px-6
                    text-[12px] font-semibold text-white
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:border-[#A6C5D7]/70
                    hover:bg-white/[0.05]
                  "
                >
                  Request a Quote

                  <ArrowRight className="ml-3 h-[14px] w-[14px] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

       {/* =====================================================
    TRUST / FEATURE BAR
====================================================== */}

<div className="relative z-30 border-y border-white/[0.08] bg-[#020C29]/80">
  <div className="grid grid-cols-2 lg:grid-cols-4">
    {trustItems.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title + item.subtitle}
          className={`
            flex min-h-[112px] items-center justify-center gap-4
            px-6 py-7

            ${index !== 3 ? "lg:border-r lg:border-white/[0.08]" : ""}

            ${
              index < 2
                ? "border-b border-white/[0.08] lg:border-b-0"
                : ""
            }
          `}
        >
          <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#A6C5D7]/25">
            <Icon
              strokeWidth={1.5}
              className="h-[21px] w-[21px] text-[#A6C5D7]"
            />
          </div>

          <div>
            <p className="text-[15px] font-semibold leading-tight text-white">
              {item.title}
            </p>

            <p className="mt-[3px] text-[12px] text-[#A6C5D7]/70">
              {item.subtitle}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

        {/* =====================================================
            CATEGORY SECTION
        ====================================================== */}

        <div className="relative z-20 bg-[#000926] px-5 pb-9 pt-6 sm:px-8 lg:px-14">
          {/* heading */}

          <div className="text-center">
            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#1671E8]">
              Explore Our Categories
            </p>

            <h2 className="mt-2 text-[17px] font-semibold tracking-[-0.02em] text-white">
              Complete Range. Clinical Excellence.
            </h2>
          </div>

          {/* Cards */}

          <div className="mt-5 grid grid-cols-2 gap-[7px] sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.label}
                  href={category.href}
                  className="
                    group
                    flex min-h-[100px]
                    flex-col items-center justify-center
                    rounded-[7px]
                    border border-[#0F52BA]/25
                    bg-[#071534]
                    px-2 py-3
                    text-center
                    transition-all duration-300

                    hover:-translate-y-[3px]
                    hover:border-[#2A73DA]/60
                    hover:bg-[#091B42]
                    hover:shadow-[0_8px_25px_rgba(15,82,186,0.14)]
                  "
                >
                  <Icon
                    strokeWidth={1.4}
                    className="
                      h-[25px] w-[25px]
                      text-[#A6C5D7]
                      transition
                      group-hover:text-[#D6E6F3]
                    "
                  />

                  <span className="mt-3 whitespace-pre-line text-[8px] font-medium leading-[1.3] text-white">
                    {category.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}