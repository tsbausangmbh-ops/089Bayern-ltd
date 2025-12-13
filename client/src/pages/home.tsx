import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SEOHead from "@/components/SEOHead";
import FeaturesGrid from "@/components/FeaturesGrid";
import ProblemSolverSection from "@/components/ProblemSolverSection";
import BenefitsSection from "@/components/BenefitsSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import LogoCarousel from "@/components/LogoCarousel";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
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

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    scrollToHash();

    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

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
      <SEOHead page="home" />
      <Header onCtaClick={handleCtaClick} />
      <HeroSection onCtaClick={handleCtaClick} onLearnMoreClick={handleLearnMoreClick} />
      <FeaturesGrid />
      <ProblemSolverSection />
      <LogoCarousel />
      <BenefitsSection />
      <SavingsCalculator onComplete={handleCalculatorComplete} />
      <TeamSection />
      <FAQSection />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        calculatorData={calculatorData}
      />
    </div>
  );
}
