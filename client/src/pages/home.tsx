import { useState, useEffect, lazy, Suspense } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";

// Lazy load components below the fold for better performance
const FeaturesGrid = lazy(() => import("@/components/FeaturesGrid"));
const ProblemSolverSection = lazy(() => import("@/components/ProblemSolverSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const SavingsCalculator = lazy(() => import("@/components/SavingsCalculator"));
const LogoCarousel = lazy(() => import("@/components/LogoCarousel"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const EmbeddedChatSection = lazy(() => import("@/components/EmbeddedChatSection"));
const TeamWorkSection = lazy(() => import("@/components/TeamWorkSection"));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-12 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

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
      <Suspense fallback={<SectionLoader />}>
        <FeaturesGrid />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TeamWorkSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <EmbeddedChatSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProblemSolverSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <LogoCarousel />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BenefitsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SavingsCalculator onComplete={handleCalculatorComplete} />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        calculatorData={calculatorData}
      />
    </div>
  );
}
