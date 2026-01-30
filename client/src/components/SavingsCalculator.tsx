import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Home, Building2, Store, ArrowRight, ArrowLeft, Check, Calculator, TrendingUp, Leaf, Banknote, Flame, Snowflake, Battery, Zap, RefreshCw } from "lucide-react";
import { translations, isRTL } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";
import { useExchangeRate, formatTL, formatEUR } from "@/hooks/useExchangeRate";
import logoImage from "@assets/logo-white.png";

const turkishLocations = [
  { id: "antalya", key: "locationAntalya" as const, sun: "2.900+" },
  { id: "kemer", key: "locationKemer" as const, sun: "2.900+" },
  { id: "belek", key: "locationBelek" as const, sun: "2.920+" },
  { id: "serik", key: "locationSerik" as const, sun: "2.910+" },
  { id: "manavgat", key: "locationManavgat" as const, sun: "2.940+" },
  { id: "side", key: "locationSide" as const, sun: "2.950+" },
  { id: "alanya", key: "locationAlanya" as const, sun: "2.950+" },
  { id: "mahmutlar", key: "locationMahmutlar" as const, sun: "2.950+" },
  { id: "konakli", key: "locationKonakli" as const, sun: "2.950+" },
  { id: "gazipasa", key: "locationGazipasa" as const, sun: "2.940+" },
  { id: "other", key: "otherRegion" as const, sun: "2.900+" },
];

const croatianLocations = [
  { id: "split", key: "locationSplit" as const, sun: "2.700+" },
  { id: "dubrovnik", key: "locationDubrovnik" as const, sun: "2.600+" },
  { id: "zadar", key: "locationZadar" as const, sun: "2.650+" },
  { id: "sibenik", key: "locationSibenik" as const, sun: "2.680+" },
  { id: "pula", key: "locationPula" as const, sun: "2.400+" },
  { id: "rovinj", key: "locationRovinj" as const, sun: "2.450+" },
  { id: "rijeka", key: "locationRijeka" as const, sun: "2.200+" },
  { id: "opatija", key: "locationOpatija" as const, sun: "2.250+" },
  { id: "makarska", key: "locationMakarska" as const, sun: "2.750+" },
  { id: "hvar", key: "locationHvar" as const, sun: "2.800+" },
  { id: "other", key: "otherRegion" as const, sun: "2.500+" },
];

interface SavingsCalculatorProps {
  onComplete?: (data: CalculatorData) => void;
}

interface CalculatorData {
  propertyType: string;
  location: string;
  monthlyBill: number;
  propertySize: number;
  heatingSystem: string;
  coolingNeed: string;
  batteryInterest: string;
}

export default function SavingsCalculator({ onComplete }: SavingsCalculatorProps) {
  const [step, setStep] = useState(1);
  const { language: lang, detectedCountry } = useLanguage();
  const { rate: exchangeRate, loading: rateLoading, lastUpdated } = useExchangeRate();
  
  const isCroatian = detectedCountry === "HR" || lang === "hr";
  const locationData = isCroatian ? croatianLocations : turkishLocations;
  const [data, setData] = useState<CalculatorData>({
    propertyType: "",
    location: "antalya",
    monthlyBill: 3000,
    propertySize: 200,
    heatingSystem: "",
    coolingNeed: "",
    batteryInterest: "",
  });
  const [showResults, setShowResults] = useState(false);

  const t = translations[lang];
  const rtl = isRTL(lang);

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return data.propertyType !== "";
      case 2: return data.location !== "";
      case 3: return data.monthlyBill > 0;
      case 4: return data.propertySize > 0;
      case 5: return data.heatingSystem !== "";
      case 6: return data.coolingNeed !== "";
      case 7: return data.batteryInterest !== "";
      default: return false;
    }
  };

  const baseSavingsRate = 0.7;
  const heatingBonus = data.heatingSystem === "gas" ? 0.1 : data.heatingSystem === "electric" ? 0.15 : 0.05;
  const coolingBonus = data.coolingNeed === "yes" ? 0.1 : data.coolingNeed === "partial" ? 0.05 : 0;
  const batteryBonus = data.batteryInterest === "yes" ? 0.05 : 0;
  const totalSavingsRate = Math.min(baseSavingsRate + heatingBonus + coolingBonus + batteryBonus, 0.95);

  const estimatedMonthlySavings = Math.round(data.monthlyBill * totalSavingsRate);
  const yearlySavings = estimatedMonthlySavings * 12;
  
  // Preise mit 30% Aufschlag
  const baseCostPerSqm = 1560; // 1200 + 30%
  const heatPumpCost = data.heatingSystem !== "none" ? data.propertySize * 390 : 0; // 300 + 30%
  const climateCost = data.coolingNeed !== "no" ? data.propertySize * 195 : 0; // 150 + 30%
  const batteryCost = data.batteryInterest === "yes" ? 104000 : 0; // 80000 + 30%
  const estimatedCost = (data.propertySize * baseCostPerSqm) + heatPumpCost + climateCost + batteryCost;
  
  const roiYears = yearlySavings > 0 ? Math.round(estimatedCost / yearlySavings * 10) / 10 : 0;
  const co2Saved = Math.round(data.propertySize * 0.15 * (1 + heatingBonus + coolingBonus));
  const treesEquivalent = Math.round(co2Saved / 20);

  const getSystemComponents = () => {
    const components = [t.solarPanel];
    if (data.heatingSystem !== "none") components.push(t.heatPump);
    if (data.coolingNeed !== "no") components.push(t.smartAC);
    if (data.batteryInterest === "yes") components.push(t.batteryStorage);
    return components;
  };

  const propertyTypes = [
    { id: "villa", label: t.propertyVilla, description: t.propertyVillaDesc, icon: Home, gradient: "from-amber-500 to-orange-600" },
    { id: "apartment", label: t.propertyApartment, description: t.propertyApartmentDesc, icon: Building2, gradient: "from-sky-500 to-blue-600" },
    { id: "commercial", label: t.propertyCommercial, description: t.propertyCommercialDesc, icon: Store, gradient: "from-emerald-500 to-green-600" },
  ];

  const heatingSystems = [
    { id: "gas", label: t.heatingGas, description: t.heatingGasDesc, icon: Flame },
    { id: "electric", label: t.heatingElectric, description: t.heatingElectricDesc, icon: Zap },
    { id: "coal", label: t.heatingCoal, description: t.heatingCoalDesc, icon: Flame },
    { id: "none", label: t.heatingNone, description: t.heatingNoneDesc, icon: Home },
  ];

  const coolingOptions = [
    { id: "yes", label: t.coolingYes, description: t.coolingYesDesc },
    { id: "partial", label: t.coolingPartial, description: t.coolingPartialDesc },
    { id: "no", label: t.coolingNo, description: t.coolingNoDesc },
  ];

  const batteryOptions = [
    { id: "yes", label: t.batteryYes, description: t.batteryYesDesc },
    { id: "no", label: t.batteryNo, description: t.batteryNoDesc },
  ];

  if (showResults) {
    return (
      <section id="calculator" className="py-4 md:py-5 bg-background relative overflow-hidden" dir={rtl ? "rtl" : "ltr"} data-testid="section-calculator">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-6 md:px-8 relative">
          <Card className="overflow-hidden border-emerald-500/30 bg-gradient-to-br from-card via-card to-emerald-500/5 shadow-2xl shadow-emerald-500/10">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3">{t.resultsTitle}</h3>
                <p className="text-lg text-muted-foreground">{t.resultsSubtitle}</p>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 mb-8 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3 text-sm">{t.systemComponents}</h4>
                <div className="flex flex-wrap gap-2">
                  {getSystemComponents().map((comp, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-3 mb-6 flex items-center justify-center gap-2 text-sm">
                <RefreshCw className={`w-4 h-4 text-muted-foreground ${rateLoading ? "animate-spin" : ""}`} />
                <span className="text-muted-foreground">
                  {lang === "de" ? "Aktueller Kurs" : lang === "en" ? "Current rate" : "Güncel kur"}: 
                  <span className="font-semibold text-foreground ml-1">1 EUR = {exchangeRate.toFixed(2)} TL</span>
                </span>
                {lastUpdated && (
                  <span className="text-xs text-muted-foreground">
                    ({lastUpdated.toLocaleTimeString()})
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20">
                  <Banknote className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{formatEUR(Math.round(estimatedMonthlySavings / exchangeRate))}</div>
                  <div className="text-lg text-primary/70 mb-1">{formatTL(estimatedMonthlySavings)}</div>
                  <p className="text-sm text-muted-foreground">{t.monthlySavings}</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl border border-accent/20">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-accent mb-1">{formatEUR(Math.round(yearlySavings / exchangeRate))}</div>
                  <div className="text-lg text-accent/70 mb-1">{formatTL(yearlySavings)}</div>
                  <p className="text-sm text-muted-foreground">{t.yearlySavings}</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl border border-emerald-500/20">
                  <Leaf className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-emerald-500 mb-1">{treesEquivalent}</div>
                  <p className="text-sm text-muted-foreground">{t.treesEquivalent}</p>
                </div>
              </div>

              <div className="bg-background/50 rounded-xl p-6 mb-8 border border-border/50">
                <h4 className="font-semibold text-foreground mb-4">{t.investmentSummary}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">{t.estimatedCost}</span>
                    <span className="block font-semibold text-foreground">{formatEUR(Math.round(estimatedCost / exchangeRate))}</span>
                    <span className="block text-xs text-muted-foreground">{formatTL(estimatedCost)}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{t.paybackPeriod}</span>
                    <span className="block font-semibold text-foreground">~{roiYears} {t.years}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{t.tenYearSavings}</span>
                    <span className="block font-semibold text-emerald-400">{formatEUR(Math.round((yearlySavings * 10) / exchangeRate))}</span>
                    <span className="block text-xs text-muted-foreground">{formatTL(yearlySavings * 10)}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">{t.yearlyCO2}</span>
                    <span className="block font-semibold text-foreground">{co2Saved} {t.tons}</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-muted-foreground text-sm mb-6">{t.disclaimer}</p>

              <Button
                className="w-full py-6 text-lg bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg shadow-accent/30"
                size="lg"
                onClick={() => onComplete?.(data)}
                data-testid="button-get-quote"
              >
                {t.ctaButton}
                <ArrowRight className={`w-5 h-5 ${rtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="py-4 md:py-5 bg-gradient-to-b from-card/30 to-background relative overflow-hidden" dir={rtl ? "rtl" : "ltr"} data-testid="section-calculator">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src={logoImage} 
              alt="089 Bayern Logo Alman kalitesi enerji sistemleri Türkiye - güneş paneli Vaillant ısı pompası Samsung klima batarya Antalya Alanya kurulumu" 
              className="h-12 w-auto object-contain"
            />
            <div className="text-left">
              <span className="block text-xl font-bold text-foreground">089 Bayern</span>
              <span className="block text-sm text-muted-foreground">Germany</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-6">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-foreground">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <Card className="overflow-hidden border-border/50 bg-card/90 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <span className="font-medium">{t.step} {step} {t.of} {totalSteps}</span>
                <span>{Math.round(progress)}% {t.completed}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">{t.step1Title}</h3>
                <p className="text-muted-foreground">{t.step1Subtitle}</p>
                <div className="grid grid-cols-1 gap-4">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setData({ ...data, propertyType: type.id })}
                      className={`p-6 rounded-xl border-2 transition-all hover-elevate active-elevate-2 text-left flex items-center gap-5 ${
                        data.propertyType === type.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-property-${type.id}`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                        data.propertyType === type.id ? `bg-gradient-to-br ${type.gradient}` : "bg-muted"
                      }`}>
                        <type.icon className={`w-7 h-7 ${data.propertyType === type.id ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <span className={`block font-semibold text-lg ${data.propertyType === type.id ? "text-primary" : "text-foreground"}`}>
                          {type.label}
                        </span>
                        <span className="text-sm text-muted-foreground">{type.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">{t.step2Title}</h3>
                <p className="text-muted-foreground">{t.step2Subtitle}</p>
                <div className="grid grid-cols-2 gap-4">
                  {locationData.map((loc) => {
                    const locLabel = t[loc.key];
                    return (
                      <button
                        key={loc.id}
                        onClick={() => setData({ ...data, location: loc.id })}
                        className={`p-4 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 ${
                          data.location === loc.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                        }`}
                        data-testid={`button-location-${loc.id}`}
                      >
                        <span className={`block font-semibold ${data.location === loc.id ? "text-primary" : "text-foreground"}`}>
                          {locLabel}
                        </span>
                        <span className="text-xs text-muted-foreground">{t.sunPrefix} {loc.sun} {t.hoursPerYear}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.step3Title}</h3>
                  <p className="text-muted-foreground">{t.step3Subtitle}</p>
                </div>
                <div>
                  <Label htmlFor="monthlyBill" className="text-base font-medium">{t.step3Label}</Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.step3Hint}</p>
                  <Input
                    id="monthlyBill"
                    type="number"
                    value={data.monthlyBill}
                    onChange={(e) => setData({ ...data, monthlyBill: Number(e.target.value) })}
                    className="h-14 text-lg bg-background/50"
                    placeholder="3000"
                    data-testid="input-monthly-bill"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.step4Title}</h3>
                  <p className="text-muted-foreground">{t.step4Subtitle}</p>
                </div>
                <div>
                  <Label htmlFor="propertySize" className="text-base font-medium">{t.step4Label}</Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.step4Hint}</p>
                  <Input
                    id="propertySize"
                    type="number"
                    value={data.propertySize}
                    onChange={(e) => setData({ ...data, propertySize: Number(e.target.value) })}
                    className="h-14 text-lg bg-background/50"
                    placeholder="200"
                    data-testid="input-property-size"
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.step5Title}</h3>
                  <p className="text-muted-foreground">{t.step5Subtitle}</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {heatingSystems.map((system) => (
                    <button
                      key={system.id}
                      onClick={() => setData({ ...data, heatingSystem: system.id })}
                      className={`p-5 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 flex items-center gap-4 ${
                        data.heatingSystem === system.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-heating-${system.id}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        data.heatingSystem === system.id ? "bg-primary/20" : "bg-muted"
                      }`}>
                        <system.icon className={`w-6 h-6 ${data.heatingSystem === system.id ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <span className={`block font-semibold ${data.heatingSystem === system.id ? "text-primary" : "text-foreground"}`}>
                          {system.label}
                        </span>
                        <span className="text-sm text-muted-foreground">{system.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.step6Title}</h3>
                  <p className="text-muted-foreground">{t.step6Subtitle}</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {coolingOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setData({ ...data, coolingNeed: option.id })}
                      className={`p-5 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 flex items-center gap-4 ${
                        data.coolingNeed === option.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-cooling-${option.id}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        data.coolingNeed === option.id ? "bg-primary/20" : "bg-muted"
                      }`}>
                        <Snowflake className={`w-6 h-6 ${data.coolingNeed === option.id ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <span className={`block font-semibold ${data.coolingNeed === option.id ? "text-primary" : "text-foreground"}`}>
                          {option.label}
                        </span>
                        <span className="text-sm text-muted-foreground">{option.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.step7Title}</h3>
                  <p className="text-muted-foreground">{t.step7Subtitle}</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {batteryOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setData({ ...data, batteryInterest: option.id })}
                      className={`p-5 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 flex items-center gap-4 ${
                        data.batteryInterest === option.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-battery-${option.id}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        data.batteryInterest === option.id ? "bg-primary/20" : "bg-muted"
                      }`}>
                        <Battery className={`w-6 h-6 ${data.batteryInterest === option.id ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <span className={`block font-semibold ${data.batteryInterest === option.id ? "text-primary" : "text-foreground"}`}>
                          {option.label}
                        </span>
                        <span className="text-sm text-muted-foreground">{option.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className={`flex items-center justify-between gap-4 mt-10 pt-6 border-t border-border/50 ${rtl ? "flex-row-reverse" : ""}`}>
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="h-12"
                data-testid="button-calc-back"
              >
                <ArrowLeft className={`w-4 h-4 ${rtl ? "ml-2 rotate-180" : "mr-2"}`} />
                {t.back}
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="h-12 px-8 bg-gradient-to-r from-primary to-blue-600 border-0"
                data-testid="button-calc-next"
              >
                {step === totalSteps ? t.seeResults : t.continue}
                <ArrowRight className={`w-4 h-4 ${rtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">{t.privacyNote}</p>
      </div>
    </section>
  );
}
