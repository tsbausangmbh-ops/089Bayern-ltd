import { Check, TrendingDown, Shield, Home, Leaf, Wallet, Users, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mainBenefits = [
  {
    icon: TrendingDown,
    title: "70% Energieeinsparung in Antalya",
    description: "Sparen Sie dank der intensiven Sonneneinstrahlung am Mittelmeer bis zu 70% bei Ihren Strom- und Gasrechnungen. Erzeugen Sie mit Solarpanelen Ihren eigenen Strom und verkaufen Sie den Überschuss an TEDAS für zusätzliches Einkommen.",
    stat: "70%",
    statLabel: "Ersparnis",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Unabhängig von Stromausfällen",
    description: "Mit Energiespeicherbatterien sind Sie unabhängig von Netzausfällen und Energiepreiserhöhungen. 24/7 unterbrechungsfreie Stromversorgung für Villen in Antalya und am Mittelmeer.",
    stat: "24/7",
    statLabel: "Unterbrechungsfrei",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Home,
    title: "Wertsteigerung Ihrer Immobilie",
    description: "Häuser mit Solarenergie und Wärmepumpe werden auf dem Antalya-Immobilienmarkt 15-25% teurer verkauft. Ihre Investition gewinnt mit energiezertifizierter Immobilie an Wert.",
    stat: "+20%",
    statLabel: "Wertsteigerung",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Leaf,
    title: "Reduzieren Sie Ihren CO2-Fußabdruck",
    description: "Hinterlassen Sie Ihren Kindern mit einem emissionsfreien Energiesystem ein sauberes Mittelmeer. Durchschnittlich 15-20 Tonnen CO2-Einsparung pro Jahr - so viel Nutzen für die Umwelt wie 1000 gepflanzte Bäume.",
    stat: "0",
    statLabel: "CO2-Emission",
    gradient: "from-teal-500 to-emerald-600",
  },
];

const additionalBenefits = [
  {
    icon: Wallet,
    title: "Schneller ROI",
    description: "Amortisieren Sie Ihre Investition in 3-5 Jahren dank der intensiven Mittelmeersonne, danach ist alles Gewinn.",
  },
  {
    icon: Users,
    title: "Ein Ansprechpartner, null Komplikationen",
    description: "Installation, Wartung, Garantie - alles aus einer Hand. Schluss mit verschiedenen Firmen.",
  },
  {
    icon: Zap,
    title: "Smartes Energiemanagement",
    description: "Überwachen und optimieren Sie den Energieverbrauch Ihres Hauses in Echtzeit über die mobile App.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-4 md:py-5 bg-gradient-to-b from-card/50 to-background relative overflow-hidden" data-testid="section-benefits">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-foreground">Warum 089 Bayern?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Vorteile einer Solarenergie-Investition{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              am Mittelmeer
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wir verstehen die Energiebedürfnisse von Familien in Antalya, Mugla und Izmir. Kühlung bei 45°C im Sommer, 
            Heizkomfort im Winter - <span className="text-foreground font-medium">mit deutscher Technologie und ohne Ihr Budget zu belasten.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
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
                Unsere Solarenergie-Referenzen in
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                  Antalya, Mugla und Izmir
                </span>
              </h3>
              <div className="space-y-4">
                {[
                  "300+ Villa-Installationen in Antalya Konyaalti, Lara, Belek",
                  "150+ Projekte in Mugla Bodrum, Fethiye, Marmaris",
                  "50+ Wohnhäuser in Izmir Cesme, Alacati, Urla",
                  "24/7 türkischer technischer Support nach der Installation",
                  "10 Jahre Vaillant-Garantie, 25 Jahre Panel-Garantie",
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
                { value: "500+", label: "Zufriedene Familien", gradient: "from-sky-500 to-blue-600" },
                { value: "98%", label: "Zufriedenheit", gradient: "from-emerald-500 to-green-600" },
                { value: "10+", label: "Jahre Garantie", gradient: "from-amber-500 to-orange-600" },
                { value: "24/7", label: "Support", gradient: "from-violet-500 to-purple-600" },
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
