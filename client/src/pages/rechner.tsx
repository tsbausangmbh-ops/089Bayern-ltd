import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SavingsCalculator from "@/components/SavingsCalculator";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useLanguage } from "@/lib/LanguageContext";
import { Calculator, Shield, Clock, Leaf } from "lucide-react";

interface CalculatorData {
  propertyType: string;
  monthlyBill: number;
  propertySize: number;
  location: string;
}

const translations: Record<string, { title: string; subtitle: string; feature1: string; feature2: string; feature3: string }> = {
  de: {
    title: "Ersparnis-Rechner",
    subtitle: "Berechnen Sie Ihr persönliches Sparpotenzial in nur 2 Minuten",
    feature1: "Kostenlose Berechnung",
    feature2: "Unverbindlich",
    feature3: "Sofort Ergebnis",
  },
  tr: {
    title: "Tasarruf Hesaplayıcı",
    subtitle: "Kişisel tasarruf potansiyelinizi sadece 2 dakikada hesaplayın",
    feature1: "Ücretsiz hesaplama",
    feature2: "Bağlayıcı değil",
    feature3: "Anında sonuç",
  },
  en: {
    title: "Savings Calculator",
    subtitle: "Calculate your personal savings potential in just 2 minutes",
    feature1: "Free calculation",
    feature2: "No obligation",
    feature3: "Instant results",
  },
  ru: {
    title: "Калькулятор экономии",
    subtitle: "Рассчитайте свой потенциал экономии всего за 2 минуты",
    feature1: "Бесплатный расчёт",
    feature2: "Без обязательств",
    feature3: "Мгновенный результат",
  },
  uk: {
    title: "Калькулятор заощаджень",
    subtitle: "Розрахуйте свій потенціал заощаджень всього за 2 хвилини",
    feature1: "Безкоштовний розрахунок",
    feature2: "Без зобов'язань",
    feature3: "Миттєвий результат",
  },
  ar: {
    title: "حاسبة التوفير",
    subtitle: "احسب إمكانات التوفير الشخصية في دقيقتين فقط",
    feature1: "حساب مجاني",
    feature2: "بدون التزام",
    feature3: "نتيجة فورية",
  },
  hr: {
    title: "Kalkulator uštede",
    subtitle: "Izračunajte svoj potencijal uštede u samo 2 minute",
    feature1: "Besplatni izračun",
    feature2: "Bez obveza",
    feature3: "Trenutni rezultat",
  },
};

export default function Rechner() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData | undefined>();
  const { language } = useLanguage();
  
  const t = translations[language];

  const handleCtaClick = () => {
    setIsLeadFormOpen(true);
  };

  const handleCalculatorComplete = (data: CalculatorData) => {
    setCalculatorData(data);
    setIsLeadFormOpen(true);
  };

  const features = [
    { icon: Calculator, text: t.feature1 },
    { icon: Clock, text: t.feature2 },
    { icon: Leaf, text: t.feature3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onCtaClick={handleCtaClick} />
      
      <section className="pt-24 pb-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.title}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <SavingsCalculator onComplete={handleCalculatorComplete} />
      
      <Footer />
      
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        calculatorData={calculatorData}
      />
    </div>
  );
}
