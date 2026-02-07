import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PricingSection } from "@/components/PricingSection";
import { StepsSection } from "@/components/StepsSection";
import { ResellerCTA } from "@/components/ResellerCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050a12] text-white selection:bg-[#00aaff] selection:text-white">
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <PricingSection />
      <StepsSection />
      <ResellerCTA />
      <Footer />
    </main>
  );
}
