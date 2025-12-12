import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Flame, Sun, Battery, Check } from "lucide-react";

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
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
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
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
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
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
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
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Komple Enerji Çözümü</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            4'ü 1 Arada Akıllı Sistem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Alman mühendisliği ile tasarlanmış, Türkiye'nin Akdeniz iklimi için özelleştirilmiş 
            entegre enerji sistemi. Tek yatırım, dört farklı çözüm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group overflow-visible hover-elevate active-elevate-2 transition-all duration-300 border-2 ${feature.borderColor}`}
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className={`text-sm font-medium ${feature.color} mb-3`}>{feature.subtitle}</p>
                    <p className="text-muted-foreground mb-5">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-sm text-foreground">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feature.color}`} />
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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Neden Ayrı Ayrı Sistem Alasınız?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4'ü 1 arada sistemle tek seferde kurulum, tek muhatap, tek garanti. 
              Ayrı sistemlere kıyasla <strong className="text-foreground">%30 daha az maliyet</strong>, 
              <strong className="text-foreground"> %50 daha kolay yönetim</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
