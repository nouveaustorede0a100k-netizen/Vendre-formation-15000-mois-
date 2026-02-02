import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ModulesGrid } from "@/components/landing/ModulesGrid";
import { FormationTimeline } from "@/components/landing/FormationTimeline";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { BookingSection } from "@/components/landing/BookingSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ModulesGrid />
        <FormationTimeline />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <BookingSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
