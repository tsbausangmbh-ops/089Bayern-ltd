import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import System4in1Calculator from "@/components/System4in1Calculator";
import LeadCaptureForm from "@/components/LeadCaptureForm";

interface CalculatorData {
  propertyType: string;
  propertySize: number;
  monthlyElectricity: number;
  monthlyHeating: number;
  monthlyHotWater: number;
  monthlyCooling: number;
  roofArea: number;
  batterySize: number;
}

export default function Rechner() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData | undefined>();

  const handleCtaClick = () => {
    setIsLeadFormOpen(true);
  };

  const handleCalculatorComplete = (data: CalculatorData) => {
    setCalculatorData(data);
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCtaClick={handleCtaClick} />
      
      <div className="pt-16">
        <System4in1Calculator onComplete={handleCalculatorComplete} />
      </div>
      
      <Footer />
      
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        calculatorData={calculatorData}
      />
    </div>
  );
}
