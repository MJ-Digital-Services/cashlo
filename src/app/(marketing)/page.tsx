import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WithdrawalLimits } from "@/components/sections/withdrawal-limits";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { PartnerCta } from "@/components/sections/partner-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WithdrawalLimits />
      <Services />
      <Benefits />
      <PartnerCta />
    </>
  );
}