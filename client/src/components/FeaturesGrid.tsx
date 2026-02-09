import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Flame, Sun, Battery, Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import workerClimateImage from "@assets/images/optimized/worker-climate-unit.jpg";
import workerHeatPumpImage from "@assets/images/optimized/team-heat-pump-installation.jpg";
import workerSolarImage from "@assets/images/optimized/worker-solar-inverter.jpg";
import workerBatteryImage from "@assets/images/optimized/worker-battery-storage.jpg";

export default function FeaturesGrid() {
  const { language } = useLanguage();
  const t = uiTranslations[language];

  const features = [
    {
      icon: Snowflake,
      title: t.features.climateTitle,
      subtitle: t.features.climateSubtitle,
      description: t.features.climateDescription,
      benefits: t.features.climateBenefits,
      gradient: "from-sky-500 to-blue-600",
      bgGradient: "from-sky-500/20 to-blue-600/10",
      iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
      image: workerClimateImage,
      seoAlt: "089 Bayern teknisyeni Samsung WindFree klima iç dış ünite montajı yapıyor Antalya villası enerji verimli sessiz soğutma ısıtma sistemi kurulumu Akdeniz",
    },
    {
      icon: Flame,
      title: t.features.heatPumpTitle,
      subtitle: t.features.heatPumpSubtitle,
      description: t.features.heatPumpDescription,
      benefits: t.features.heatPumpBenefits,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/20 to-red-600/10",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
      image: workerHeatPumpImage,
      seoAlt: "089 Bayern ekibi Vaillant aroTHERM ısı pompası dış ünite profesyonel montajı villa ısıtma soğutma sistemi kurulumu Antalya Alanya Akdeniz bölgesi",
    },
    {
      icon: Sun,
      title: t.features.solarTitle,
      subtitle: t.features.solarSubtitle,
      description: t.features.solarDescription,
      benefits: t.features.solarBenefits,
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-500/20 to-yellow-500/10",
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
      image: workerSolarImage,
      seoAlt: "089 Bayern teknisyeni güneş paneli inverter kablo bağlantısı yapıyor villa çatısı photovoltaik sistem kurulumu Antalya Alanya Akdeniz",
    },
    {
      icon: Battery,
      title: t.features.batteryTitle,
      subtitle: t.features.batterySubtitle,
      description: t.features.batteryDescription,
      benefits: t.features.batteryBenefits,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/20 to-green-600/10",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
      image: workerBatteryImage,
      seoAlt: "089 Bayern lityum iyon batarya depolama sistemi profesyonel kurulumu villa enerji depolama güneş enerjisi gece kullanımı Antalya Türkiye",
    },
  ];

  return (
    <section id="features" className="py-4 md:py-5 bg-background relative overflow-hidden" data-testid="section-features">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="text-center mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-medium text-foreground">{t.features.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            {t.features.title}{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              {t.features.titleHighlight}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-card/80"
              data-testid={`card-feature-${index}`}
            >
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.seoAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className={`absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${feature.iconBg} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <CardContent className="p-4 sm:p-6 relative">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-0.5 sm:mb-1">{feature.title}</h3>
                  <p className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                    {feature.subtitle}
                  </p>
                  <p className="text-xs sm:text-base text-muted-foreground mb-3 sm:mb-5 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/90">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-emerald-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 sm:mt-5 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              {t.features.whyIntegrated}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3 sm:mb-4">
              {t.features.whyIntegratedDescription}{" "}
              <span className="bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent font-semibold">{t.features.costSavings}</span>,{" "}
              <span className="text-primary font-semibold">{t.features.easierManagement}</span>.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t.features.successNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
