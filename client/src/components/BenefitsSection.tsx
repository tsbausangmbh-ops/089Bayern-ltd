import { Check, TrendingDown, Shield, Home, Leaf, Wallet, Users, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mainBenefits = [
  {
    icon: TrendingDown,
    title: "Aylık Faturalarda Devrim",
    description: "Elektrik ve doğalgaz faturalarınızda %70'e varan tasarruf. Akdeniz güneşiyle kendi enerjinizi üretin, fazlasını şebekeye satın.",
    stat: "%70",
    statLabel: "Tasarruf",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Tam Enerji Bağımsızlığı",
    description: "Enerji fiyat artışlarından, şebeke kesintilerinden ve tedarikçi değişikliklerinden etkilenmeyin. Kendi enerjinizin efendisi olun.",
    stat: "7/24",
    statLabel: "Kesintisiz",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Home,
    title: "Mülk Değeriniz Artar",
    description: "Enerji verimli evler emlak piyasasında %15-25 daha değerli. Yatırımınız hem bugün hem yarın kazandırır.",
    stat: "+%20",
    statLabel: "Değer Artışı",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Leaf,
    title: "Doğaya Katkı Sağlayın",
    description: "Sıfır karbon ayak izi ile çocuklarınıza temiz bir dünya bırakın. Her yıl onlarca ağaç dikmiş kadar çevreye fayda.",
    stat: "0",
    statLabel: "CO₂ Salınımı",
    gradient: "from-teal-500 to-emerald-600",
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
    <section id="benefits" className="py-10 md:py-12 bg-gradient-to-b from-card/50 to-background relative overflow-hidden" data-testid="section-benefits">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-foreground">Neden 089 Bayern?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Aileniz İçin{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              Akıllı Yatırım
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Türk ailelerinin enerji ihtiyaçlarını anlıyoruz. Yazın kavurucu sıcakta serinlik, 
            kışın soğukta sıcaklık - <span className="text-foreground font-medium">hem de cebinizi yakmadan.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {mainBenefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="overflow-visible border-border/50 bg-card/80 backdrop-blur-sm"
              data-testid={`benefit-card-${index}`}
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg mb-4`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                        {benefit.stat}
                      </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {additionalBenefits.map((benefit, index) => (
            <Card key={benefit.title} className="overflow-visible border-border/50 bg-card/80 hover-elevate" data-testid={`additional-benefit-${index}`}>
              <CardContent className="p-4 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Akdeniz Villalarında
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                  Kanıtlanmış Performans
                </span>
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
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Mutlu Aile", gradient: "from-sky-500 to-blue-600" },
                { value: "%98", label: "Memnuniyet", gradient: "from-emerald-500 to-green-600" },
                { value: "10+", label: "Yıl Garanti", gradient: "from-amber-500 to-orange-600" },
                { value: "24/7", label: "Destek", gradient: "from-violet-500 to-purple-600" },
              ].map((stat, index) => (
                <div key={index} className="bg-background/50 rounded-xl p-6 text-center border border-border/50 hover-elevate">
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
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
