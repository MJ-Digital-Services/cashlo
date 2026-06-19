import { Hero } from "@/components/sections/Hero";
import { EarningsBand } from "@/components/sections/EarningsBand";
import { SoundBoxSection } from "@/components/sections/SoundBoxSection";
import { QuickServices } from "@/components/sections/QuickServices";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustBand } from "@/components/sections/TrustBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EarningsBand />
      <SoundBoxSection />
      <QuickServices />
      <HowItWorks />
      <TrustBand />
    </>
  );
}