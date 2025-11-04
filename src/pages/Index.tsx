import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TrainingSection } from "@/components/TrainingSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { CareerPathsSection } from "@/components/CareerPathsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <TrainingSection />
      <AwardsSection />
      <div id="programs">
        <ProgramsSection />
      </div>
      <CareerPathsSection />
      <div id="partners">
        <ClientsSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
