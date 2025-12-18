import { useState, useEffect } from "react";
import { useLocation } from "wouter";
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
import AiAdvisorSection from "@/components/AiAdvisorSection";
import EmbeddedChatSection from "@/components/EmbeddedChatSection";

interface CalculatorData {
  propertyType: string;
  monthlyBill: number;
  propertySize: number;
  location: string;
}

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData | undefined>();
  const [, setLocation] = useLocation();

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
    setLocation("/team");
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
      <EmbeddedChatSection />
      <ProblemSolverSection />
      <LogoCarousel />
      <BenefitsSection />
      <AiAdvisorSection />
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
