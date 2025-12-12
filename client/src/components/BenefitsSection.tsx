import { Check, TrendingDown, Shield, Home, Leaf } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "İşletme Maliyetlerinde %70'e Varan Azalma",
    description: "Yüksek enerji tasarrufu sayesinde aylık enerji faturalarınız önemli ölçüde düşer.",
  },
  {
    icon: Shield,
    title: "Enerji Bağımsızlığı",
    description: "Enerji sağlayıcılarına ve fiyat dalgalanmalarına daha az bağımlılık.",
  },
  {
    icon: Home,
    title: "Gayrimenkul Değeri Artışı",
    description: "Sürdürülebilir teknoloji ile mülkünüzün piyasa değeri yükselir.",
  },
  {
    icon: Leaf,
    title: "Çevre Dostu Teknoloji",
    description: "Sıfır CO₂ salınımı ile doğaya katkı sağlayın.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 lg:py-32 bg-muted/30" data-testid="section-benefits">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Neden 089 Bayern?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Alman mühendisliği ve Türkiye pazarına özel tasarım ile enerji ihtiyaçlarınız için
              en verimli çözümü sunuyoruz.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-4"
                  data-testid={`benefit-item-${index}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-xl p-8 border border-card-border">
              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">%70</div>
                <p className="text-lg text-muted-foreground">Enerji Tasarrufu</p>
              </div>

              <div className="space-y-4">
                {[
                  "Yıl boyu konfor - Kışın ısıtma, yazın soğutma",
                  "Her şey tek elden - tek sistem, tek muhatap",
                  "Akıllı kontrol - mobil uygulama ile yönetim",
                  "10+ yıl garanti - Alman kalitesi güvencesi",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
