import { Hero } from "@/components/sections/Hero";
import { ProblemLeak } from "@/components/sections/ProblemLeak";
import { SolutionCards } from "@/components/sections/SolutionCards";
import { TailoredSection } from "@/components/sections/TailoredSection";
import { HearItYourself } from "@/components/sections/HearItYourself";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { OfferStack } from "@/components/sections/OfferStack";
import { GuaranteeBand } from "@/components/sections/GuaranteeBand";
import { ProofBlock } from "@/components/sections/ProofBlock";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Faq } from "@/components/sections/Faq";
import { FinalClose } from "@/components/sections/FinalClose";

export default function HomePage() {
  return (
    <>
      {/* 4.1 → 4.12 — PAS structure wrapped in Hormozi value-stacking. */}
      <Hero />
      <ProblemLeak />
      <SolutionCards />
      <TailoredSection />
      <HearItYourself />
      <HowItWorks />
      <OfferStack />
      <GuaranteeBand />
      <ProofBlock />
      <ComparisonTable />
      <Faq limit={6} />
      <FinalClose />
    </>
  );
}
