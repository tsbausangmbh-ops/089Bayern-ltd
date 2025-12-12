import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Home, Building2, Store, ArrowRight, ArrowLeft, Check, Calculator } from "lucide-react";

interface SavingsCalculatorProps {
  onComplete?: (data: CalculatorData) => void;
}

interface CalculatorData {
  propertyType: string;
  monthlyBill: number;
  propertySize: number;
  location: string;
}

const propertyTypes = [
  { id: "villa", label: "Ev / Villa", icon: Home },
  { id: "apartment", label: "Apartman", icon: Building2 },
  { id: "commercial", label: "İşyeri", icon: Store },
];

const locations = [
  "Antalya", "İstanbul", "İzmir", "Ankara", "Muğla", "Aydın", "Mersin", "Diğer"
];

export default function SavingsCalculator({ onComplete }: SavingsCalculatorProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CalculatorData>({
    propertyType: "",
    monthlyBill: 2000,
    propertySize: 150,
    location: "",
  });
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 3;
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
      case 1:
        return data.propertyType !== "";
      case 2:
        return data.monthlyBill > 0;
      case 3:
        return data.location !== "";
      default:
        return false;
    }
  };

  const estimatedSavings = Math.round(data.monthlyBill * 0.7);
  const yearlyySavings = estimatedSavings * 12;
  const roiYears = Math.round((data.propertySize * 800) / yearlyySavings);

  if (showResults) {
    return (
      <section id="calculator" className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-calculator">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Tasarruf Analizi Hazır!</h3>
                <p className="text-muted-foreground">
                  İşte sizin için hesaplanan potansiyel enerji tasarrufunuz
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    ₺{estimatedSavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">Aylık Tasarruf</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    ₺{yearlyySavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">Yıllık Tasarruf</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    ~{roiYears} Yıl
                  </div>
                  <p className="text-sm text-muted-foreground">Geri Ödeme Süresi</p>
                </div>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={() => onComplete?.(data)}
                data-testid="button-get-quote"
              >
                Detaylı Teklif Al
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-calculator">
      <div className="max-w-2xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tasarruf Hesaplayıcı</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ne Kadar Tasarruf Edebilirsiniz?
          </h2>
          <p className="text-muted-foreground">
            3 basit adımda potansiyel enerji tasarrufunuzu hesaplayın
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Adım {step} / {totalSteps}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Mülk Tipinizi Seçin</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setData({ ...data, propertyType: type.id })}
                      className={`p-6 rounded-lg border-2 transition-all hover-elevate active-elevate-2 ${
                        data.propertyType === type.id
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}
                      data-testid={`button-property-${type.id}`}
                    >
                      <type.icon className={`w-8 h-8 mb-3 mx-auto ${
                        data.propertyType === type.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <span className={`block font-medium ${
                        data.propertyType === type.id ? "text-primary" : "text-foreground"
                      }`}>
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Enerji Bilgileriniz</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="monthlyBill">Aylık Enerji Faturanız (₺)</Label>
                    <Input
                      id="monthlyBill"
                      type="number"
                      value={data.monthlyBill}
                      onChange={(e) => setData({ ...data, monthlyBill: Number(e.target.value) })}
                      className="mt-2"
                      placeholder="2000"
                      data-testid="input-monthly-bill"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Elektrik ve doğalgaz toplam tutarı
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="propertySize">Mülk Alanı (m²)</Label>
                    <Input
                      id="propertySize"
                      type="number"
                      value={data.propertySize}
                      onChange={(e) => setData({ ...data, propertySize: Number(e.target.value) })}
                      className="mt-2"
                      placeholder="150"
                      data-testid="input-property-size"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Konumunuz</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setData({ ...data, location: loc })}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all hover-elevate active-elevate-2 ${
                        data.location === loc
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-foreground"
                      }`}
                      data-testid={`button-location-${loc}`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                data-testid="button-calc-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Geri
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                data-testid="button-calc-next"
              >
                {step === totalSteps ? "Hesapla" : "Devam"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
