import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Flame, Sun, Battery } from "lucide-react";

const features = [
  {
    icon: Snowflake,
    title: "Soğutma",
    subtitle: "Akıllı İklimlendirme",
    benefits: [
      "Sessiz ve verimli soğutma",
      "Güneş enerjisiyle çalışır",
      "Mobil uygulama kontrolü",
      "Minimum maliyet, maksimum konfor",
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Flame,
    title: "Isıtma",
    subtitle: "Isı Pompası Teknolojisi",
    benefits: [
      "Elektriksiz ve doğalgazsız",
      "Çevre dostu hava ısısı kullanımı",
      "Yerden ısıtma uyumlu",
      "Düşük bakım maliyeti",
    ],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Sun,
    title: "Güneş Enerjisi",
    subtitle: "Fotovoltaik Sistem",
    benefits: [
      "Ücretsiz güneş enerjisi",
      "Fazla enerji depolanabilir",
      "Sıfır CO₂ salınımı",
      "Gayrimenkul değeri artışı",
    ],
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Battery,
    title: "Enerji Depolama",
    subtitle: "Akıllı Batarya Sistemi",
    benefits: [
      "7/24 enerji erişimi",
      "Şebeke bağımsızlığı",
      "Akıllı enerji yönetimi",
      "Uzun ömürlü batarya",
    ],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-background" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            4'ü 1 Arada Enerji Sistemi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soğutma, ısıtma, güneş enerjisi üretimi ve enerji depolama tek bir entegre sistemde birleştirilmiştir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group overflow-visible hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.subtitle}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-foreground">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full ${feature.color.replace('text-', 'bg-')}`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
