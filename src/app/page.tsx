import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { LogosMarquee } from "@/components/landing/LogosMarquee";
import { FeaturePills } from "@/components/landing/FeaturePills";
import { ModulesGrid } from "@/components/landing/ModulesGrid";
import { FormationTimeline } from "@/components/landing/FormationTimeline";
import { StatsSection } from "@/components/landing/StatsSection";
import { WhyJoinSection } from "@/components/landing/WhyJoinSection";
import { WhoIsItForSection } from "@/components/landing/WhoIsItForSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { BookingSection } from "@/components/landing/BookingSection";
import { ProgramFormSection } from "@/components/landing/ProgramFormSection";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { TrustBadges } from "@/components/landing/TrustBadges";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogosMarquee />
        <FeaturePills />
        <ModulesGrid />
        <FormationTimeline />
        <StatsSection />
        <WhyJoinSection />
        <WhoIsItForSection />
        <TestimonialsSection />
        <PricingSection />
        <BookingSection />
        <ProgramFormSection />
        <LandingFAQ />
        <TrustBadges />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
