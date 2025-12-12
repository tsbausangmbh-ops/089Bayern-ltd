import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import BenefitsSection from "@/components/BenefitsSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import LogoCarousel from "@/components/LogoCarousel";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";

interface CalculatorData {
  propertyType: string;
  monthlyBill: number;
  propertySize: number;
  location: string;
}

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData | undefined>();

  const handleCtaClick = () => {
    setIsLeadFormOpen(true);
  };

  const handleLearnMoreClick = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCalculatorComplete = (data: CalculatorData) => {
    setCalculatorData(data);
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCtaClick={handleCtaClick} />
      <HeroSection onCtaClick={handleCtaClick} onLearnMoreClick={handleLearnMoreClick} />
      <FeaturesGrid />
      <LogoCarousel />
      <BenefitsSection />
      <SavingsCalculator onComplete={handleCalculatorComplete} />
      <TeamSection />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        calculatorData={calculatorData}
      />
    </div>
  );
}
