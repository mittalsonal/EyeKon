import { AboutPreview } from "@/components/home/AboutPreview";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";
import { WhyEyekon } from "@/components/home/WhyEyekon";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Categories />
      <FeaturedProducts />
      <WhyEyekon />
      <AboutPreview />
      <WhatsAppCTA />
    </>
  );
}
