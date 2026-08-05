import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { StatsBand } from "@/components/sections/StatsBand";
import { ProblemLeak } from "@/components/sections/ProblemLeak";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { TailoredSection } from "@/components/sections/TailoredSection";
import { HearItYourself } from "@/components/sections/HearItYourself";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { GuaranteeBand } from "@/components/sections/GuaranteeBand";
import { IndustriesShowcase } from "@/components/sections/IndustriesShowcase";
import { ProofBlock } from "@/components/sections/ProofBlock";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Faq } from "@/components/sections/Faq";
import { FinalClose } from "@/components/sections/FinalClose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatsBand />
      <ProblemLeak />
      <BentoGrid />
      <TailoredSection />
      <HearItYourself />
      <HowItWorks />
      <PricingTiers />
      <GuaranteeBand />
      <IndustriesShowcase />
      <ProofBlock />
      <ComparisonTable />
      <Faq limit={6} />
      <FinalClose />
    </>
  );
}
