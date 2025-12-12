import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Flame, Sun, Battery, Check, Sparkles } from "lucide-react";

const features = [
  {
    icon: Snowflake,
    title: "Akıllı Soğutma",
    subtitle: "Yazın Serin Kalın",
    description: "Akdeniz'in bunaltıcı yaz sıcağında evinizi serinleten, sessiz ve verimli iklimlendirme sistemi.",
    benefits: [
      "Sessiz çalışma - gece bile rahatsız etmez",
      "Güneş enerjisiyle entegre çalışır",
      "Akıllı telefon ile uzaktan kontrol",
      "Homojen serinlik, çekiş yapmaz",
      "Sıcak havalarda düşük elektrik tüketimi",
    ],
    gradient: "from-sky-500 to-blue-600",
    bgGradient: "from-sky-500/20 to-blue-600/10",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
  },
  {
    icon: Flame,
    title: "Isı Pompası",
    subtitle: "Kışın Sıcak Kalın",
    description: "Doğalgaz ve elektrik bağımlılığına son! Havadan enerji çekerek evinizi ısıtan akıllı sistem.",
    benefits: [
      "Elektrik ve doğalgaza kıyasla %70 tasarruf",
      "Çevre dostu - sıfır emisyon",
      "Yerden ısıtma ile tam uyum",
      "Düşük bakım, uzun ömür",
      "Tek cihazla ısıtma ve soğutma",
    ],
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-500/20 to-red-600/10",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    icon: Sun,
    title: "Güneş Paneli",
    subtitle: "Kendi Elektriğinizi Üretin",
    description: "Akdeniz güneşini avantaja çevirin! Yılda 300+ güneşli gün ile maksimum verim.",
    benefits: [
      "Ücretsiz güneş enerjisinden elektrik",
      "Fazla enerjiyi şebekeye satın",
      "Yatırımınızı 3-5 yılda geri alın",
      "Evinizin değerini artırın",
      "25+ yıl performans garantisi",
    ],
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-500/20 to-yellow-500/10",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
  },
  {
    icon: Battery,
    title: "Enerji Depolama",
    subtitle: "Gece Gündüz Bağımsızlık",
    description: "Ürettiğiniz enerjiyi depolayın, elektrik kesintilerinden etkilenmeyin, tam bağımsızlık.",
    benefits: [
      "Gece bile güneş enerjisi kullanın",
      "Elektrik kesintilerine son",
      "Şebeke bağımsızlığı",
      "Akıllı enerji yönetim sistemi",
      "Modüler tasarım - ihtiyaca göre genişletin",
    ],
    gradient: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-500/20 to-green-600/10",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-10 md:py-12 bg-background relative overflow-hidden" data-testid="section-features">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-foreground">Komple Enerji Çözümü</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            4'ü 1 Arada{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              Akıllı Sistem
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Alman mühendisliği ile tasarlanmış, Türkiye'nin Akdeniz iklimi için özelleştirilmiş 
            entegre enerji sistemi. <span className="text-foreground font-medium">Tek yatırım, dört farklı çözüm.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group overflow-visible hover-elevate active-elevate-2 transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-card/80"
              data-testid={`card-feature-${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`} />
              <CardContent className="p-6 relative">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${feature.iconBg} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-3`}>
                      {feature.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/90">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Neden Ayrı Ayrı Sistem Alasınız?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4'ü 1 arada sistemle tek seferde kurulum, tek muhatap, tek garanti. 
              Ayrı sistemlere kıyasla <span className="bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent font-semibold">%30 daha az maliyet</span>, 
              <span className="text-primary font-semibold"> %50 daha kolay yönetim</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
