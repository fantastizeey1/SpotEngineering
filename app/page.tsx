import { ClientsSection } from "@/components/ClientsSection";
import { CTASection } from "@/components/CTASection";
import { FieldDeskSection } from "@/components/FieldDeskSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsStrip } from "@/components/StatsStrip";
import { WhyUsSection } from "@/components/WhyUsSection";


export const metadata = {
  title: "Spot Engineering Services Limited — Precision. Power. Progress.",
  description:
    "Multi-discipline engineering firm delivering reliable, cost-effective electrical, mechanical, energy, telecom, and FTTH solutions across Nigeria since 2017.",
  openGraph: {
    title: "Spot Engineering Services Limited",
    description: "Engineering Excellence. Delivered.",
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <main>
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
