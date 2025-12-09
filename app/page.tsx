import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ethereal-50 selection:bg-rose-gold selection:text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
