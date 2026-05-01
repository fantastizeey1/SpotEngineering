import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { FieldDeskSection } from "@/components/FieldDeskSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    // FIX: Added w-full and overflow-x-hidden to strictly enforce screen width
    <main className="w-full overflow-x-hidden relative">
      <NavBar />
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <WhyUsSection />
      <ClientsSection />
      <FieldDeskSection />
      <CTASection />
      <Footer />
    </main>
  );
}
