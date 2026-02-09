import { Check, TrendingDown, Shield, Home, Leaf, Wallet, Users, Zap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import happyCustomerImage from "@assets/images/optimized/happy-customer.jpg";

export default function BenefitsSection() {
  const { language } = useLanguage();
  const t = uiTranslations[language];

  const mainBenefits = [
    {
      icon: TrendingDown,
      title: t.benefits.benefit1Title,
      description: t.benefits.benefit1Description,
      stat: t.benefits.benefit1Stat,
      statLabel: t.benefits.benefit1Label,
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: Shield,
      title: t.benefits.benefit2Title,
      description: t.benefits.benefit2Description,
      stat: t.benefits.benefit2Stat,
      statLabel: t.benefits.benefit2Label,
      gradient: "from-sky-500 to-blue-600",
    },
    {
      icon: Home,
      title: t.benefits.benefit3Title,
      description: t.benefits.benefit3Description,
      stat: t.benefits.benefit3Stat,
      statLabel: t.benefits.benefit3Label,
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: Leaf,
      title: t.benefits.benefit4Title,
      description: t.benefits.benefit4Description,
      stat: t.benefits.benefit4Stat,
      statLabel: t.benefits.benefit4Label,
      gradient: "from-teal-500 to-emerald-600",
    },
  ];

  const additionalBenefits = [
    {
      icon: Wallet,
      title: t.benefits.additionalBenefit1Title,
      description: t.benefits.additionalBenefit1Description,
    },
    {
      icon: Users,
      title: t.benefits.additionalBenefit2Title,
      description: t.benefits.additionalBenefit2Description,
    },
    {
      icon: Zap,
      title: t.benefits.additionalBenefit3Title,
      description: t.benefits.additionalBenefit3Description,
    },
  ];

  const references = [
    t.benefits.reference1,
    t.benefits.reference2,
    t.benefits.reference3,
    t.benefits.reference4,
    t.benefits.reference5,
  ];

  const stats = [
    { value: t.benefits.stat1Value, label: t.benefits.stat1Label, gradient: "from-sky-500 to-blue-600" },
    { value: t.benefits.stat2Value, label: t.benefits.stat2Label, gradient: "from-emerald-500 to-green-600" },
    { value: t.benefits.stat3Value, label: t.benefits.stat3Label, gradient: "from-amber-500 to-orange-600" },
    { value: t.benefits.stat4Value, label: t.benefits.stat4Label, gradient: "from-violet-500 to-purple-600" },
  ];

  return (
    <section id="benefits" className="py-4 md:py-5 bg-gradient-to-b from-card/50 to-background relative overflow-hidden" data-testid="section-benefits">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="text-center mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-2 sm:mb-3">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-medium text-foreground">{t.benefits.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t.benefits.title}{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              {t.benefits.titleHighlight}
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {mainBenefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="overflow-visible border-border/50 bg-card/80 backdrop-blur-sm"
              data-testid={`benefit-card-${index}`}
            >
              <CardContent className="p-3 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg mb-2 sm:mb-4`}>
                      <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className={`text-xl sm:text-3xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                        {benefit.stat}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{benefit.statLabel}</div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {additionalBenefits.map((benefit, index) => (
            <Card key={benefit.title} className="overflow-visible border-border/50 bg-card/80 hover-elevate" data-testid={`additional-benefit-${index}`}>
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">{benefit.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden">
          <img 
            src={happyCustomerImage} 
            alt="089 Bayern mutlu villa sahipleri Antalya Alanya - güneş paneli ısı pompası klima batarya kurulumu başarılı referanslar Akdeniz Türkiye" 
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </div>

        <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                {t.benefits.referencesTitle}
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                  {t.benefits.referencesTitleHighlight}
                </span>
              </h3>
              <div className="space-y-2 sm:space-y-4">
                {references.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-background/50 rounded-lg sm:rounded-xl p-3 sm:p-6 text-center border border-border/50 hover-elevate">
                  <div className={`text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-0.5 sm:mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
