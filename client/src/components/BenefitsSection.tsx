import { Check, TrendingDown, Shield, Home, Leaf, Wallet, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mainBenefits = [
  {
    icon: TrendingDown,
    title: "Aylık Faturalarda Devrim",
    description: "Elektrik ve doğalgaz faturalarınızda %70'e varan tasarruf. Akdeniz güneşiyle kendi enerjinizi üretin, fazlasını şebekeye satın.",
    stat: "%70",
    statLabel: "Tasarruf",
  },
  {
    icon: Shield,
    title: "Tam Enerji Bağımsızlığı",
    description: "Enerji fiyat artışlarından, şebeke kesintilerinden ve tedarikçi değişikliklerinden etkilenmeyin. Kendi enerjinizin efendisi olun.",
    stat: "7/24",
    statLabel: "Kesintisiz",
  },
  {
    icon: Home,
    title: "Mülk Değeriniz Artar",
    description: "Enerji verimli evler emlak piyasasında %15-25 daha değerli. Yatırımınız hem bugün hem yarın kazandırır.",
    stat: "+%20",
    statLabel: "Değer Artışı",
  },
  {
    icon: Leaf,
    title: "Doğaya Katkı Sağlayın",
    description: "Sıfır karbon ayak izi ile çocuklarınıza temiz bir dünya bırakın. Her yıl onlarca ağaç dikmiş kadar çevreye fayda.",
    stat: "0",
    statLabel: "CO₂ Salınımı",
  },
];

const additionalBenefits = [
  {
    icon: Wallet,
    title: "Hızlı Yatırım Geri Dönüşü",
    description: "Akdeniz'in yoğun güneşi sayesinde 3-5 yılda yatırımınızı geri alın, sonrası tamamen kazanç.",
  },
  {
    icon: Users,
    title: "Tek Muhatap, Sıfır Karmaşa",
    description: "Kurulum, bakım, garanti - her şey tek elden. Farklı firmalarla uğraşmaya son.",
  },
  {
    icon: Zap,
    title: "Akıllı Enerji Yönetimi",
    description: "Mobil uygulama ile evinizin enerji tüketimini gerçek zamanlı takip edin ve optimize edin.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-muted/30" data-testid="section-benefits">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-accent-foreground">Neden 089 Bayern?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Aileniz İçin Akıllı Yatırım
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Türk ailelerinin enerji ihtiyaçlarını anlıyoruz. Yazın kavurucu sıcakta serinlik, 
            kışın soğukta sıcaklık - hem de cebinizi yakmadan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="overflow-visible"
              data-testid={`benefit-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{benefit.stat}</div>
                      <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {additionalBenefits.map((benefit, index) => (
            <Card key={benefit.title} className="overflow-visible" data-testid={`additional-benefit-${index}`}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Akdeniz Villalarında Kanıtlanmış Performans
              </h3>
              <div className="space-y-4">
                {[
                  "Antalya, Muğla, İzmir bölgelerinde 500+ başarılı kurulum",
                  "Ortalama müşteri memnuniyeti: %98",
                  "Kurulum sonrası 7/24 teknik destek hattı",
                  "Yıllık ücretsiz bakım ve performans kontrolü",
                  "10 yıl parça garantisi, 25 yıl panel garantisi",
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

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "500+", label: "Mutlu Aile" },
                { value: "%98", label: "Memnuniyet" },
                { value: "10+", label: "Yıl Garanti" },
                { value: "24/7", label: "Destek" },
              ].map((stat, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center border border-card-border">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
