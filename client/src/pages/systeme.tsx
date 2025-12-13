import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Snowflake, Flame, Sun, Battery, Check, Sparkles, ArrowRight, Zap, Shield, Clock, ThumbsUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function Systeme() {
  const { language } = useLanguage();
  const t = uiTranslations[language];
  const [, setLocation] = useLocation();

  const scrollToCalculator = () => {
    setLocation("/#calculator");
  };

  const content = {
    tr: {
      badge: "4 in 1 Enerji Sistemleri",
      title: "Akdeniz'de Komple",
      titleHighlight: "Enerji Çözümü",
      subtitle: "Güneş paneli, ısı pompası, akıllı klima ve enerji depolama - tek yatırımda dört farklı çözüm. Antalya, Alanya ve tüm Akdeniz bölgesinde Alman kalitesi, Türk hizmeti.",
      ctaButton: "Ücretsiz Keşif Al",
      whyTitle: "Neden Entegre Sistem?",
      whySubtitle: "Tek kurulum, tek muhatap, tek garanti ile %30 maliyet avantajı",
      advantage1: "Tek Kurulum",
      advantage1Desc: "Tüm sistemler bir seferde kurulur",
      advantage2: "Tek Muhatap",
      advantage2Desc: "Tüm sorularınız için tek numara",
      advantage3: "Tek Garanti",
      advantage3Desc: "10 yıl kapsamlı garanti",
      advantage4: "%30 Tasarruf",
      advantage4Desc: "Ayrı kurulumlara göre maliyet avantajı",
    },
    de: {
      badge: "4 in 1 Energiesysteme",
      title: "Komplette Energielösung",
      titleHighlight: "am Mittelmeer",
      subtitle: "Solarpanel, Wärmepumpe, Smart-Klima und Energiespeicher - vier verschiedene Lösungen in einer Investition. Deutsche Qualität, türkischer Service in Antalya, Alanya und der gesamten Mittelmeerregion.",
      ctaButton: "Kostenlose Beratung",
      whyTitle: "Warum integriertes System?",
      whySubtitle: "Eine Installation, ein Ansprechpartner, eine Garantie mit 30% Kostenvorteil",
      advantage1: "Eine Installation",
      advantage1Desc: "Alle Systeme werden auf einmal installiert",
      advantage2: "Ein Ansprechpartner",
      advantage2Desc: "Eine Nummer für alle Ihre Fragen",
      advantage3: "Eine Garantie",
      advantage3Desc: "10 Jahre umfassende Garantie",
      advantage4: "30% Ersparnis",
      advantage4Desc: "Kostenvorteil gegenüber Einzelinstallationen",
    },
    en: {
      badge: "4 in 1 Energy Systems",
      title: "Complete Energy Solution",
      titleHighlight: "in the Mediterranean",
      subtitle: "Solar panel, heat pump, smart climate and energy storage - four different solutions in one investment. German quality, Turkish service in Antalya, Alanya and the entire Mediterranean region.",
      ctaButton: "Free Consultation",
      whyTitle: "Why Integrated System?",
      whySubtitle: "One installation, one contact, one warranty with 30% cost advantage",
      advantage1: "One Installation",
      advantage1Desc: "All systems installed at once",
      advantage2: "One Contact",
      advantage2Desc: "One number for all your questions",
      advantage3: "One Warranty",
      advantage3Desc: "10 years comprehensive warranty",
      advantage4: "30% Savings",
      advantage4Desc: "Cost advantage over separate installations",
    },
    ru: {
      badge: "4 в 1 Энергосистемы",
      title: "Комплексное энергетическое решение",
      titleHighlight: "на Средиземноморье",
      subtitle: "Солнечная панель, тепловой насос, умный климат и накопитель энергии - четыре разных решения в одной инвестиции. Немецкое качество, турецкий сервис в Анталии, Аланье и всём Средиземноморье.",
      ctaButton: "Бесплатная консультация",
      whyTitle: "Почему интегрированная система?",
      whySubtitle: "Одна установка, один контакт, одна гарантия с 30% экономией",
      advantage1: "Одна установка",
      advantage1Desc: "Все системы устанавливаются сразу",
      advantage2: "Один контакт",
      advantage2Desc: "Один номер для всех ваших вопросов",
      advantage3: "Одна гарантия",
      advantage3Desc: "10 лет комплексной гарантии",
      advantage4: "30% экономия",
      advantage4Desc: "Преимущество по сравнению с отдельными установками",
    },
    uk: {
      badge: "4 в 1 Енергосистеми",
      title: "Комплексне енергетичне рішення",
      titleHighlight: "на Середземномор'ї",
      subtitle: "Сонячна панель, тепловий насос, розумний клімат та накопичувач енергії - чотири різних рішення в одній інвестиції. Німецька якість, турецький сервіс в Анталії, Аланії та всьому Середземномор'ї.",
      ctaButton: "Безкоштовна консультація",
      whyTitle: "Чому інтегрована система?",
      whySubtitle: "Одна установка, один контакт, одна гарантія з 30% економією",
      advantage1: "Одна установка",
      advantage1Desc: "Всі системи встановлюються одразу",
      advantage2: "Один контакт",
      advantage2Desc: "Один номер для всіх ваших питань",
      advantage3: "Одна гарантія",
      advantage3Desc: "10 років комплексної гарантії",
      advantage4: "30% економія",
      advantage4Desc: "Перевага порівняно з окремими установками",
    },
    ar: {
      badge: "4 في 1 أنظمة الطاقة",
      title: "حل طاقة متكامل",
      titleHighlight: "في البحر المتوسط",
      subtitle: "لوحة شمسية، مضخة حرارية، مناخ ذكي وتخزين طاقة - أربعة حلول مختلفة في استثمار واحد. جودة ألمانية، خدمة تركية في أنطاليا وألانيا ومنطقة البحر المتوسط بأكملها.",
      ctaButton: "استشارة مجانية",
      whyTitle: "لماذا النظام المتكامل؟",
      whySubtitle: "تركيب واحد، جهة اتصال واحدة، ضمان واحد مع توفير 30%",
      advantage1: "تركيب واحد",
      advantage1Desc: "يتم تركيب جميع الأنظمة دفعة واحدة",
      advantage2: "جهة اتصال واحدة",
      advantage2Desc: "رقم واحد لجميع أسئلتك",
      advantage3: "ضمان واحد",
      advantage3Desc: "10 سنوات ضمان شامل",
      advantage4: "توفير 30%",
      advantage4Desc: "ميزة التكلفة مقارنة بالتركيبات المنفصلة",
    },
  };

  const c = content[language as keyof typeof content] || content.de;

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
    },
  ];

  const advantages = [
    { icon: Zap, title: c.advantage1, desc: c.advantage1Desc },
    { icon: ThumbsUp, title: c.advantage2, desc: c.advantage2Desc },
    { icon: Shield, title: c.advantage3, desc: c.advantage3Desc },
    { icon: Clock, title: c.advantage4, desc: c.advantage4Desc },
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="page-systeme">
      <Header onCtaClick={scrollToCalculator} />
      
      <section className="relative pt-20 pb-8 overflow-hidden" data-testid="section-systeme-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              {c.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {c.title}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                {c.titleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {c.subtitle}
            </p>
            
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg"
              data-testid="button-systeme-cta"
            >
              {c.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-why-integrated">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.whyTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.whySubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <Card key={index} className="text-center border-border/50" data-testid={`card-advantage-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                    <adv.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background" data-testid="section-features-detail">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              {t.features.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.features.title}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                {t.features.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="overflow-visible border-border/50 bg-gradient-to-br from-card to-card/80"
                data-testid={`card-system-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl ${feature.iconBg} flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className={`text-base font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-4`}>
                        {feature.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{feature.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {feature.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3">
                            <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                            <span className="text-foreground/90">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t.features.whyIntegrated}
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                {t.features.whyIntegratedDescription}{" "}
                <span className="bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent font-semibold">{t.features.costSavings}</span>,{" "}
                <span className="text-primary font-semibold">{t.features.easierManagement}</span>.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {t.features.successNote}
              </p>
              <Button 
                onClick={scrollToCalculator}
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 border-0"
                data-testid="button-systeme-cta-bottom"
              >
                {c.ctaButton}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
