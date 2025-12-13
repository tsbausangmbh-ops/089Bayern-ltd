import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Home, Building2, Store, ArrowRight, ArrowLeft, Check, Calculator, TrendingUp, Leaf, Banknote, Flame, Snowflake, Battery, MapPin, Zap } from "lucide-react";

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

const propertyTypes = [
  { id: "villa", label: "Müstakil Villa / Konut", description: "Antalya, Bodrum, Fethiye villaları", icon: Home, gradient: "from-amber-500 to-orange-600" },
  { id: "apartment", label: "Apartman Dairesi", description: "Çatı kullanım hakkı olan daireler", icon: Building2, gradient: "from-sky-500 to-blue-600" },
  { id: "commercial", label: "İşyeri / Otel / Fabrika", description: "Ticari, turizm veya endüstriyel tesis", icon: Store, gradient: "from-emerald-500 to-green-600" },
];

const locations = [
  { id: "antalya", label: "Antalya", sun: "2.900+ saat/yıl" },
  { id: "mugla", label: "Muğla (Bodrum, Fethiye)", sun: "2.800+ saat/yıl" },
  { id: "izmir", label: "İzmir (Çeşme, Alaçatı)", sun: "2.700+ saat/yıl" },
  { id: "aydin", label: "Aydın (Kuşadası, Didim)", sun: "2.750+ saat/yıl" },
  { id: "mersin", label: "Mersin (Alanya)", sun: "2.900+ saat/yıl" },
  { id: "other", label: "Diğer Akdeniz Bölgesi", sun: "2.500+ saat/yıl" },
];

const heatingSystems = [
  { id: "gas", label: "Doğalgaz Kombisi", description: "Mevcut doğalgaz ısıtması", icon: Flame },
  { id: "electric", label: "Elektrikli Isıtma", description: "Elektrikli radyatör veya ısıtıcı", icon: Zap },
  { id: "coal", label: "Kömür / Odun Sobası", description: "Geleneksel yakıt sistemi", icon: Flame },
  { id: "none", label: "Isıtma Yok", description: "Sadece yazlık kullanım", icon: Home },
];

const coolingOptions = [
  { id: "yes", label: "Evet, Klima Kullanıyorum", description: "Yaz aylarında aktif klima kullanımı" },
  { id: "partial", label: "Kısmen İhtiyacım Var", description: "Bazı odalarda klima mevcut" },
  { id: "no", label: "Hayır, Klima Kullanmıyorum", description: "Doğal havalandırma yeterli" },
];

const batteryOptions = [
  { id: "yes", label: "Evet, Enerji Bağımsızlığı İstiyorum", description: "Elektrik kesintilerine karşı koruma + gece kullanımı" },
  { id: "no", label: "Hayır, Şebekeye Bağlı Kalabilirim", description: "Sadece gündüz üretim yeterli" },
];

export default function SavingsCalculator({ onComplete }: SavingsCalculatorProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CalculatorData>({
    propertyType: "",
    location: "",
    monthlyBill: 3000,
    propertySize: 200,
    heatingSystem: "",
    coolingNeed: "",
    batteryInterest: "",
  });
  const [showResults, setShowResults] = useState(false);

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
      case 1:
        return data.propertyType !== "";
      case 2:
        return data.location !== "";
      case 3:
        return data.monthlyBill > 0;
      case 4:
        return data.propertySize > 0;
      case 5:
        return data.heatingSystem !== "";
      case 6:
        return data.coolingNeed !== "";
      case 7:
        return data.batteryInterest !== "";
      default:
        return false;
    }
  };

  const baseSavingsRate = 0.7;
  const heatingBonus = data.heatingSystem === "gas" ? 0.1 : data.heatingSystem === "electric" ? 0.15 : 0.05;
  const coolingBonus = data.coolingNeed === "yes" ? 0.1 : data.coolingNeed === "partial" ? 0.05 : 0;
  const batteryBonus = data.batteryInterest === "yes" ? 0.05 : 0;
  const totalSavingsRate = Math.min(baseSavingsRate + heatingBonus + coolingBonus + batteryBonus, 0.95);

  const estimatedMonthlySavings = Math.round(data.monthlyBill * totalSavingsRate);
  const yearlySavings = estimatedMonthlySavings * 12;
  
  const baseCostPerSqm = 1200;
  const heatPumpCost = data.heatingSystem !== "none" ? data.propertySize * 300 : 0;
  const climateCost = data.coolingNeed !== "no" ? data.propertySize * 150 : 0;
  const batteryCost = data.batteryInterest === "yes" ? 80000 : 0;
  const estimatedCost = (data.propertySize * baseCostPerSqm) + heatPumpCost + climateCost + batteryCost;
  
  const roiYears = yearlySavings > 0 ? Math.round(estimatedCost / yearlySavings * 10) / 10 : 0;
  const co2Saved = Math.round(data.propertySize * 0.15 * (1 + heatingBonus + coolingBonus));
  const treesEquivalent = Math.round(co2Saved / 20);

  const getSystemComponents = () => {
    const components = ["Güneş Paneli Sistemi"];
    if (data.heatingSystem !== "none") components.push("Isı Pompası (Vaillant)");
    if (data.coolingNeed !== "no") components.push("Akıllı Klima (Samsung)");
    if (data.batteryInterest === "yes") components.push("Enerji Depolama (BYD)");
    return components;
  };

  if (showResults) {
    return (
      <section id="calculator" className="py-6 md:py-8 bg-background relative overflow-hidden" data-testid="section-calculator">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-3xl mx-auto px-6 md:px-8 relative">
          <Card className="overflow-hidden border-emerald-500/30 bg-gradient-to-br from-card via-card to-emerald-500/5 shadow-2xl shadow-emerald-500/10">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3">
                  4'ü 1 Arada Sistem Analiziniz Hazır!
                </h3>
                <p className="text-lg text-muted-foreground">
                  İşte {data.location || "bölgeniz"} için özel hesaplanan potansiyel kazancınız
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 mb-8 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3 text-sm">Önerilen Sistem Bileşenleri:</h4>
                <div className="flex flex-wrap gap-2">
                  {getSystemComponents().map((comp, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20">
                  <Banknote className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold text-primary mb-1">
                    ₺{estimatedMonthlySavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">Aylık Tasarruf</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl border border-accent/20">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-4xl font-bold text-accent mb-1">
                    ₺{yearlySavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">Yıllık Tasarruf</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl border border-emerald-500/20">
                  <Leaf className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-emerald-500 mb-1">
                    {treesEquivalent}
                  </div>
                  <p className="text-sm text-muted-foreground">Ağaç Eşdeğeri/Yıl</p>
                </div>
              </div>

              <div className="bg-background/50 rounded-xl p-6 mb-8 border border-border/50">
                <h4 className="font-semibold text-foreground mb-4">Yatırım Özeti</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Tahmini Sistem Maliyeti:</span>
                    <span className="block font-semibold text-foreground">₺{estimatedCost.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Geri Ödeme Süresi:</span>
                    <span className="block font-semibold text-foreground">~{roiYears} Yıl</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">10 Yıllık Toplam Tasarruf:</span>
                    <span className="block font-semibold text-emerald-400">₺{(yearlySavings * 10).toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Yıllık CO₂ Azaltma:</span>
                    <span className="block font-semibold text-foreground">{co2Saved} ton</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-muted-foreground text-sm mb-6">
                Bu hesaplama tahmini değerlerdir. Kesin fiyat için ücretsiz keşif randevusu alın.
              </p>

              <Button
                className="w-full py-6 text-lg bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg shadow-accent/30"
                size="lg"
                onClick={() => onComplete?.(data)}
                data-testid="button-get-quote"
              >
                Ücretsiz Keşif Randevusu Al
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="py-6 md:py-8 bg-gradient-to-b from-card/30 to-background relative overflow-hidden" data-testid="section-calculator">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-2xl mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-6">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-foreground">4'ü 1 Arada Sistem Hesaplama</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Antalya'da Enerji Sistemi ile{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              Ne Kadar Tasarruf Edersiniz?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Akdeniz bölgesi için özel 4'ü 1 arada hesaplama: Güneş paneli, ısı pompası, klima ve batarya 
            yatırımınızın potansiyel getirisini öğrenin - <span className="text-foreground font-medium">sadece 2 dakika!</span>
          </p>
        </div>

        <Card className="overflow-hidden border-border/50 bg-card/90 backdrop-blur-sm shadow-xl">
          <CardContent className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <span className="font-medium">Adım {step} / {totalSteps}</span>
                <span>{Math.round(progress)}% Tamamlandı</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Mülkünüzün Türünü Seçin</h3>
                <p className="text-muted-foreground">Hangi tip yapıya sistem kurulacak?</p>
                <div className="grid grid-cols-1 gap-4">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setData({ ...data, propertyType: type.id })}
                      className={`p-6 rounded-xl border-2 transition-all hover-elevate active-elevate-2 text-left flex items-center gap-5 ${
                        data.propertyType === type.id
                          ? "border-primary bg-primary/10"
                          : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-property-${type.id}`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                        data.propertyType === type.id 
                          ? `bg-gradient-to-br ${type.gradient}` 
                          : "bg-muted"
                      }`}>
                        <type.icon className={`w-7 h-7 ${data.propertyType === type.id ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <span className={`block font-semibold text-lg ${
                          data.propertyType === type.id ? "text-primary" : "text-foreground"
                        }`}>
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
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Konumunuz</h3>
                  <p className="text-muted-foreground">Mülkünüz hangi bölgede? Güneşlenme oranı tasarrufu etkiler.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setData({ ...data, location: loc.label })}
                      className={`p-4 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 ${
                        data.location === loc.label
                          ? "border-primary bg-primary/10"
                          : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-location-${loc.id}`}
                    >
                      <span className={`block font-semibold ${
                        data.location === loc.label ? "text-primary" : "text-foreground"
                      }`}>
                        {loc.label}
                      </span>
                      <span className="text-xs text-muted-foreground">Güneş: {loc.sun}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Aylık Enerji Faturanız</h3>
                  <p className="text-muted-foreground">Mevcut aylık toplam enerji harcamanız ne kadar?</p>
                </div>
                <div>
                  <Label htmlFor="monthlyBill" className="text-base font-medium">
                    Aylık Toplam Enerji Faturası (₺)
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">Elektrik + Doğalgaz toplamı</p>
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mülk Alanı</h3>
                  <p className="text-muted-foreground">Toplam kapalı alanı belirtin - sistem boyutlandırması için gerekli.</p>
                </div>
                <div>
                  <Label htmlFor="propertySize" className="text-base font-medium">
                    Mülk Alanı (m²)
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">Toplam kapalı alan (brüt)</p>
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">Mevcut Isıtma Sisteminiz</h3>
                  <p className="text-muted-foreground">Şu an hangi ısıtma yöntemini kullanıyorsunuz? Isı pompası ile değiştirilebilir.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {heatingSystems.map((system) => (
                    <button
                      key={system.id}
                      onClick={() => setData({ ...data, heatingSystem: system.id })}
                      className={`p-5 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 flex items-center gap-4 ${
                        data.heatingSystem === system.id
                          ? "border-primary bg-primary/10"
                          : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-heating-${system.id}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        data.heatingSystem === system.id 
                          ? "bg-primary/20" 
                          : "bg-muted"
                      }`}>
                        <system.icon className={`w-6 h-6 ${data.heatingSystem === system.id ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <span className={`block font-semibold ${
                          data.heatingSystem === system.id ? "text-primary" : "text-foreground"
                        }`}>
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">Klima / Soğutma İhtiyacınız</h3>
                  <p className="text-muted-foreground">Yaz aylarında klima kullanıyor musunuz? Akıllı klima sistemi önerilir.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {coolingOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setData({ ...data, coolingNeed: option.id })}
                      className={`p-5 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 flex items-center gap-4 ${
                        data.coolingNeed === option.id
                          ? "border-primary bg-primary/10"
                          : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-cooling-${option.id}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        data.coolingNeed === option.id 
                          ? "bg-primary/20" 
                          : "bg-muted"
                      }`}>
                        <Snowflake className={`w-6 h-6 ${data.coolingNeed === option.id ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <span className={`block font-semibold ${
                          data.coolingNeed === option.id ? "text-primary" : "text-foreground"
                        }`}>
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">Enerji Bağımsızlığı</h3>
                  <p className="text-muted-foreground">Batarya depolama sistemi ile 24 saat enerji bağımsızlığı ister misiniz?</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {batteryOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setData({ ...data, batteryInterest: option.id })}
                      className={`p-5 rounded-xl border-2 text-left transition-all hover-elevate active-elevate-2 flex items-center gap-4 ${
                        data.batteryInterest === option.id
                          ? "border-primary bg-primary/10"
                          : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-battery-${option.id}`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        data.batteryInterest === option.id 
                          ? "bg-primary/20" 
                          : "bg-muted"
                      }`}>
                        <Battery className={`w-6 h-6 ${data.batteryInterest === option.id ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <span className={`block font-semibold ${
                          data.batteryInterest === option.id ? "text-primary" : "text-foreground"
                        }`}>
                          {option.label}
                        </span>
                        <span className="text-sm text-muted-foreground">{option.description}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-border/50">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="h-12"
                data-testid="button-calc-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Geri
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="h-12 px-8 bg-gradient-to-r from-primary to-blue-600 border-0"
                data-testid="button-calc-next"
              >
                {step === totalSteps ? "Sonucu Gör" : "Devam Et"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Hiçbir kişisel bilgi istenmez. Sonuçlar tamamen anonim hesaplanır.
        </p>
      </div>
    </section>
  );
}
