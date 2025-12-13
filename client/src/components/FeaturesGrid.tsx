import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Flame, Sun, Battery, Check, Sparkles } from "lucide-react";

const features = [
  {
    icon: Snowflake,
    title: "Smart-Klimasystem",
    subtitle: "Effiziente Kühlung für Antalya und Mittelmeer",
    description: "Halten Sie Ihr Zuhause in der drückenden Sommerhitze des Mittelmeers kühl mit Samsung und Vaillant Marken-Klimaanlagen mit Inverter-Technologie und Energieeffizienz. Professionelle Installation in Antalya, Mugla und Izmir.",
    benefits: [
      "A+++ Energieklasse - niedriger Stromverbrauch",
      "Integriert mit Solarpanelen",
      "WiFi-Steuerung per Smartphone",
      "Homogene Kühlung, gesunde Luftverteilung",
      "24/7 technischer Support und Wartung",
    ],
    gradient: "from-sky-500 to-blue-600",
    bgGradient: "from-sky-500/20 to-blue-600/10",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
  },
  {
    icon: Flame,
    title: "Wärmepumpen-Systeme",
    subtitle: "Vaillant Autorisierte Installation - Türkei",
    description: "Heizen Sie Ihr Zuhause mit der deutschen Vaillant Luft-Wärmepumpe und verbrauchen Sie 70% weniger Energie. Umweltfreundliches Heizsystem als Alternative zu Erdgas, das auch in Antalyas Wintermonaten effizient arbeitet.",
    benefits: [
      "70% Ersparnis im Vergleich zu Erdgas und Elektroheizung",
      "Null Kohlenstoffemission - umweltfreundlich",
      "Kompatibel mit Fußbodenheizung und Heizkörpern",
      "10 Jahre Vaillant Herstellergarantie",
      "Heizen und Kühlen mit einem Gerät",
    ],
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-500/20 to-red-600/10",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    icon: Sun,
    title: "Solarenergie-Panele",
    subtitle: "300+ Sonnentage im Jahr am Mittelmeer",
    description: "Nutzen Sie Antalyas jährliches 2.900+ Stunden Sonnenpotenzial. Erzeugen Sie mit Premium-Solarpanelen Ihren eigenen Strom und verkaufen Sie den Überschuss an das Netz. Installation in Mugla, Izmir, Aydin und Mersin.",
    benefits: [
      "15.000-25.000 TL jährliche Stromersparnis",
      "Verkaufen Sie überschüssige Energie an TEDAS",
      "Investitionsrückfluss in 3-5 Jahren",
      "15-25% Wertsteigerung der Immobilie",
      "25 Jahre Panel-Leistungsgarantie",
    ],
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-500/20 to-yellow-500/10",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
  },
  {
    icon: Battery,
    title: "Energiespeicher-Batterien",
    subtitle: "Samsung SDI und BYD Lithium-Batterie",
    description: "Speichern Sie tagsüber erzeugte Solarenergie in Samsung SDI oder BYD Lithium-Batterien. Nutzen Sie sie nachts und bleiben Sie bei Stromausfällen unabhängig. Spezielle Lösungen für Villen in Antalya und am Mittelmeer.",
    benefits: [
      "Solarenergienutzung auch nachts",
      "Unterbrechungsfreie Stromversorgung bei Ausfällen",
      "Netzunabhängiges Leben möglich",
      "Smart Energy Management App",
      "Modulares Design - Kapazität nach Bedarf erweiterbar",
    ],
    gradient: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-500/20 to-green-600/10",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-4 md:py-5 bg-background relative overflow-hidden" data-testid="section-features">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-foreground">Komplette Energielösung</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            4-in-1{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              Energiesystem-Installation in Antalya
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mit deutscher Ingenieurskunst entwickelt, speziell angepasst an das Mittelmeerklima der Türkei - 
            integriertes Solarenergie- und Wärmepumpensystem. Mit Vaillant, Samsung und BYD Marken: 
            <span className="text-foreground font-medium"> vier verschiedene Lösungen in einer Investition.</span>
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

        <div className="mt-5 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Warum sollten Sie in Antalya ein integriertes Energiesystem wählen?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              4-in-1 Solarenergie, Wärmepumpe, Klima und Batteriesystem mit einmaliger Installation, einem Ansprechpartner, einer Garantie. 
              Im Vergleich zu separaten Systemen <span className="bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent font-semibold">30% weniger Kosten</span>, 
              <span className="text-primary font-semibold"> 50% einfachere Verwaltung</span>.
            </p>
            <p className="text-sm text-muted-foreground">
              500+ erfolgreiche Installationen in Antalya, Mugla, Izmir, Aydin und Mersin. Deutsche Qualität, türkischer Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
