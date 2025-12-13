import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, TrendingUp, Zap, ThermometerSun, Sparkles, ArrowRight, Check, MapPin, Calendar, Battery, Coins, Leaf, Award } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function Vorteile() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const scrollToCalculator = () => {
    setLocation("/#calculator");
  };

  const content = {
    tr: {
      badge: "10 Ay Güneş",
      title: "Akdeniz'in",
      titleHighlight: "Güneş Avantajı",
      subtitle: "Antalya bölgesi yılda 300+ güneşli gün ile Avrupa'nın en güneşli bölgelerinden biri. Bu eşsiz iklim koşulları solar enerji yatırımınızı maksimum verimli kılar.",
      ctaButton: "Tasarruf Hesapla",
      statsTitle: "Akdeniz İklimi Rakamlarla",
      stat1Value: "300+",
      stat1Label: "Güneşli Gün/Yıl",
      stat2Value: "2.800",
      stat2Label: "Güneş Saati/Yıl",
      stat3Value: "%40",
      stat3Label: "Daha Yüksek Verim",
      stat4Value: "10",
      stat4Label: "Ay Güneş Garantisi",
      benefitsTitle: "Neden Akdeniz'de Solar?",
      benefitsSubtitle: "10 aylık güneş ile enerji yatırımınız maksimum getiri sağlar",
      benefit1Title: "Yüksek Enerji Üretimi",
      benefit1Desc: "Almanya'ya kıyasla %40 daha fazla enerji üretimi. Aynı panel sistemi ile çok daha yüksek verim.",
      benefit2Title: "Hızlı Geri Ödeme",
      benefit2Desc: "Yüksek güneş radyasyonu sayesinde yatırım 4-6 yılda kendini amorti eder.",
      benefit3Title: "Düşük Elektrik Faturası",
      benefit3Desc: "Yılın büyük bölümünde şebekeden bağımsız enerji kullanımı.",
      benefit4Title: "Isı Pompası Verimliliği",
      benefit4Desc: "Ilıman kışlar sayesinde ısı pompaları %300-400 verimle çalışır.",
      benefit5Title: "Klima Maliyeti Düşer",
      benefit5Desc: "Güneş enerjisi ile çalışan klimalar sıfır maliyetli serinlik sağlar.",
      benefit6Title: "Çevre Dostu Yaşam",
      benefit6Desc: "Temiz enerji ile karbon ayak izinizi minimuma indirin.",
      comparisonTitle: "Almanya vs. Akdeniz Karşılaştırması",
      comparisonSubtitle: "Aynı solar sistem, farklı sonuçlar",
      germanyLabel: "Almanya (Münih)",
      mediterraneanLabel: "Akdeniz (Antalya)",
      sunHoursLabel: "Güneş Saati/Yıl",
      energyLabel: "kWh/kWp Üretim",
      roiLabel: "Geri Ödeme Süresi",
      germanyValues: { sunHours: "1.700", energy: "950", roi: "10-12 Yıl" },
      mediterraneanValues: { sunHours: "2.800", energy: "1.600", roi: "4-6 Yıl" },
    },
    de: {
      badge: "10 Monate Sonne",
      title: "Der Sonnen-Vorteil",
      titleHighlight: "am Mittelmeer",
      subtitle: "Die Region Antalya gehört mit über 300 Sonnentagen pro Jahr zu den sonnigsten Regionen Europas. Diese einzigartigen Klimabedingungen maximieren die Effizienz Ihrer Solarinvestition.",
      ctaButton: "Ersparnis berechnen",
      statsTitle: "Mittelmeerklima in Zahlen",
      stat1Value: "300+",
      stat1Label: "Sonnentage/Jahr",
      stat2Value: "2.800",
      stat2Label: "Sonnenstunden/Jahr",
      stat3Value: "40%",
      stat3Label: "Höhere Effizienz",
      stat4Value: "10",
      stat4Label: "Monate Sonnengarantie",
      benefitsTitle: "Warum Solar am Mittelmeer?",
      benefitsSubtitle: "Mit 10 Monaten Sonne maximiert Ihre Energieinvestition den Ertrag",
      benefit1Title: "Hohe Energieproduktion",
      benefit1Desc: "40% mehr Energieproduktion im Vergleich zu Deutschland. Gleiche Panelanlage mit deutlich höherem Ertrag.",
      benefit2Title: "Schnelle Amortisation",
      benefit2Desc: "Dank hoher Sonneneinstrahlung amortisiert sich die Investition in 4-6 Jahren.",
      benefit3Title: "Niedrige Stromrechnung",
      benefit3Desc: "Den größten Teil des Jahres netzunabhängige Energienutzung.",
      benefit4Title: "Wärmepumpen-Effizienz",
      benefit4Desc: "Dank milder Winter arbeiten Wärmepumpen mit 300-400% Effizienz.",
      benefit5Title: "Klimakosten sinken",
      benefit5Desc: "Solarbetriebene Klimaanlagen bieten Kühlung ohne Kosten.",
      benefit6Title: "Umweltfreundliches Leben",
      benefit6Desc: "Minimieren Sie Ihren CO2-Fußabdruck mit sauberer Energie.",
      comparisonTitle: "Deutschland vs. Mittelmeer Vergleich",
      comparisonSubtitle: "Gleiches Solarsystem, unterschiedliche Ergebnisse",
      germanyLabel: "Deutschland (München)",
      mediterraneanLabel: "Mittelmeer (Antalya)",
      sunHoursLabel: "Sonnenstunden/Jahr",
      energyLabel: "kWh/kWp Produktion",
      roiLabel: "Amortisationszeit",
      germanyValues: { sunHours: "1.700", energy: "950", roi: "10-12 Jahre" },
      mediterraneanValues: { sunHours: "2.800", energy: "1.600", roi: "4-6 Jahre" },
    },
    en: {
      badge: "10 Months of Sun",
      title: "The Sunshine Advantage",
      titleHighlight: "in the Mediterranean",
      subtitle: "The Antalya region is one of Europe's sunniest areas with over 300 sunny days per year. These unique climate conditions maximize the efficiency of your solar investment.",
      ctaButton: "Calculate Savings",
      statsTitle: "Mediterranean Climate in Numbers",
      stat1Value: "300+",
      stat1Label: "Sunny Days/Year",
      stat2Value: "2,800",
      stat2Label: "Sun Hours/Year",
      stat3Value: "40%",
      stat3Label: "Higher Efficiency",
      stat4Value: "10",
      stat4Label: "Months Sun Guarantee",
      benefitsTitle: "Why Solar in the Mediterranean?",
      benefitsSubtitle: "With 10 months of sunshine, your energy investment maximizes returns",
      benefit1Title: "High Energy Production",
      benefit1Desc: "40% more energy production compared to Germany. Same panel system with significantly higher yield.",
      benefit2Title: "Fast Payback",
      benefit2Desc: "Thanks to high solar radiation, the investment pays for itself in 4-6 years.",
      benefit3Title: "Low Electricity Bills",
      benefit3Desc: "Grid-independent energy use for most of the year.",
      benefit4Title: "Heat Pump Efficiency",
      benefit4Desc: "Thanks to mild winters, heat pumps operate at 300-400% efficiency.",
      benefit5Title: "Lower Cooling Costs",
      benefit5Desc: "Solar-powered air conditioning provides zero-cost cooling.",
      benefit6Title: "Eco-Friendly Living",
      benefit6Desc: "Minimize your carbon footprint with clean energy.",
      comparisonTitle: "Germany vs. Mediterranean Comparison",
      comparisonSubtitle: "Same solar system, different results",
      germanyLabel: "Germany (Munich)",
      mediterraneanLabel: "Mediterranean (Antalya)",
      sunHoursLabel: "Sun Hours/Year",
      energyLabel: "kWh/kWp Production",
      roiLabel: "Payback Period",
      germanyValues: { sunHours: "1,700", energy: "950", roi: "10-12 Years" },
      mediterraneanValues: { sunHours: "2,800", energy: "1,600", roi: "4-6 Years" },
    },
    ru: {
      badge: "10 месяцев солнца",
      title: "Преимущество солнца",
      titleHighlight: "на Средиземноморье",
      subtitle: "Регион Анталья - одно из самых солнечных мест Европы с более чем 300 солнечными днями в году. Эти уникальные климатические условия максимизируют эффективность ваших солнечных инвестиций.",
      ctaButton: "Рассчитать экономию",
      statsTitle: "Средиземноморский климат в цифрах",
      stat1Value: "300+",
      stat1Label: "Солнечных дней/год",
      stat2Value: "2.800",
      stat2Label: "Часов солнца/год",
      stat3Value: "40%",
      stat3Label: "Выше эффективность",
      stat4Value: "10",
      stat4Label: "Месяцев гарантии солнца",
      benefitsTitle: "Почему солнечная энергия на Средиземноморье?",
      benefitsSubtitle: "С 10 месяцами солнца ваши инвестиции в энергию максимизируют доход",
      benefit1Title: "Высокое производство энергии",
      benefit1Desc: "На 40% больше производства энергии по сравнению с Германией. Та же система панелей со значительно более высокой отдачей.",
      benefit2Title: "Быстрая окупаемость",
      benefit2Desc: "Благодаря высокой солнечной радиации инвестиции окупаются за 4-6 лет.",
      benefit3Title: "Низкие счета за электричество",
      benefit3Desc: "Независимое от сети использование энергии большую часть года.",
      benefit4Title: "Эффективность теплового насоса",
      benefit4Desc: "Благодаря мягким зимам тепловые насосы работают с эффективностью 300-400%.",
      benefit5Title: "Снижение затрат на охлаждение",
      benefit5Desc: "Кондиционеры на солнечной энергии обеспечивают охлаждение без затрат.",
      benefit6Title: "Экологичная жизнь",
      benefit6Desc: "Минимизируйте свой углеродный след с помощью чистой энергии.",
      comparisonTitle: "Сравнение Германии и Средиземноморья",
      comparisonSubtitle: "Одна и та же солнечная система, разные результаты",
      germanyLabel: "Германия (Мюнхен)",
      mediterraneanLabel: "Средиземноморье (Анталья)",
      sunHoursLabel: "Часов солнца/год",
      energyLabel: "кВтч/кВп Производство",
      roiLabel: "Срок окупаемости",
      germanyValues: { sunHours: "1.700", energy: "950", roi: "10-12 лет" },
      mediterraneanValues: { sunHours: "2.800", energy: "1.600", roi: "4-6 лет" },
    },
    uk: {
      badge: "10 місяців сонця",
      title: "Перевага сонця",
      titleHighlight: "на Середземномор'ї",
      subtitle: "Регіон Анталія - одне з найсонячніших місць Європи з понад 300 сонячними днями на рік. Ці унікальні кліматичні умови максимізують ефективність ваших сонячних інвестицій.",
      ctaButton: "Розрахувати економію",
      statsTitle: "Середземноморський клімат у цифрах",
      stat1Value: "300+",
      stat1Label: "Сонячних днів/рік",
      stat2Value: "2.800",
      stat2Label: "Годин сонця/рік",
      stat3Value: "40%",
      stat3Label: "Вища ефективність",
      stat4Value: "10",
      stat4Label: "Місяців гарантії сонця",
      benefitsTitle: "Чому сонячна енергія на Середземномор'ї?",
      benefitsSubtitle: "З 10 місяцями сонця ваші інвестиції в енергію максимізують дохід",
      benefit1Title: "Високе виробництво енергії",
      benefit1Desc: "На 40% більше виробництва енергії порівняно з Німеччиною. Та сама система панелей зі значно вищою віддачею.",
      benefit2Title: "Швидка окупність",
      benefit2Desc: "Завдяки високій сонячній радіації інвестиції окупаються за 4-6 років.",
      benefit3Title: "Низькі рахунки за електрику",
      benefit3Desc: "Незалежне від мережі використання енергії більшу частину року.",
      benefit4Title: "Ефективність теплового насоса",
      benefit4Desc: "Завдяки м'яким зимам теплові насоси працюють з ефективністю 300-400%.",
      benefit5Title: "Зниження витрат на охолодження",
      benefit5Desc: "Кондиціонери на сонячній енергії забезпечують охолодження без витрат.",
      benefit6Title: "Екологічне життя",
      benefit6Desc: "Мінімізуйте свій вуглецевий слід за допомогою чистої енергії.",
      comparisonTitle: "Порівняння Німеччини та Середземномор'я",
      comparisonSubtitle: "Одна і та сама сонячна система, різні результати",
      germanyLabel: "Німеччина (Мюнхен)",
      mediterraneanLabel: "Середземномор'я (Анталія)",
      sunHoursLabel: "Годин сонця/рік",
      energyLabel: "кВтг/кВп Виробництво",
      roiLabel: "Термін окупності",
      germanyValues: { sunHours: "1.700", energy: "950", roi: "10-12 років" },
      mediterraneanValues: { sunHours: "2.800", energy: "1.600", roi: "4-6 років" },
    },
    ar: {
      badge: "10 أشهر من الشمس",
      title: "ميزة الشمس",
      titleHighlight: "في البحر المتوسط",
      subtitle: "تعد منطقة أنطاليا واحدة من أكثر المناطق المشمسة في أوروبا مع أكثر من 300 يوم مشمس سنوياً. هذه الظروف المناخية الفريدة تعظم كفاءة استثمارك الشمسي.",
      ctaButton: "احسب التوفير",
      statsTitle: "مناخ البحر المتوسط بالأرقام",
      stat1Value: "+300",
      stat1Label: "يوم مشمس/سنة",
      stat2Value: "2,800",
      stat2Label: "ساعة شمس/سنة",
      stat3Value: "40%",
      stat3Label: "كفاءة أعلى",
      stat4Value: "10",
      stat4Label: "أشهر ضمان الشمس",
      benefitsTitle: "لماذا الطاقة الشمسية في البحر المتوسط؟",
      benefitsSubtitle: "مع 10 أشهر من الشمس، يحقق استثمارك في الطاقة أقصى عائد",
      benefit1Title: "إنتاج طاقة عالي",
      benefit1Desc: "إنتاج طاقة أكثر بنسبة 40% مقارنة بألمانيا. نفس نظام الألواح مع عائد أعلى بكثير.",
      benefit2Title: "استرداد سريع",
      benefit2Desc: "بفضل الإشعاع الشمسي العالي، يسترد الاستثمار نفسه في 4-6 سنوات.",
      benefit3Title: "فواتير كهرباء منخفضة",
      benefit3Desc: "استخدام طاقة مستقل عن الشبكة معظم العام.",
      benefit4Title: "كفاءة المضخة الحرارية",
      benefit4Desc: "بفضل الشتاء المعتدل، تعمل المضخات الحرارية بكفاءة 300-400%.",
      benefit5Title: "انخفاض تكاليف التبريد",
      benefit5Desc: "مكيفات الهواء التي تعمل بالطاقة الشمسية توفر تبريداً بدون تكلفة.",
      benefit6Title: "حياة صديقة للبيئة",
      benefit6Desc: "قلل بصمتك الكربونية بالطاقة النظيفة.",
      comparisonTitle: "مقارنة ألمانيا مقابل البحر المتوسط",
      comparisonSubtitle: "نفس النظام الشمسي، نتائج مختلفة",
      germanyLabel: "ألمانيا (ميونخ)",
      mediterraneanLabel: "البحر المتوسط (أنطاليا)",
      sunHoursLabel: "ساعات الشمس/سنة",
      energyLabel: "كيلوواط ساعة/كيلوواط ذروة إنتاج",
      roiLabel: "فترة الاسترداد",
      germanyValues: { sunHours: "1,700", energy: "950", roi: "10-12 سنة" },
      mediterraneanValues: { sunHours: "2,800", energy: "1,600", roi: "4-6 سنوات" },
    },
  };

  const c = content[language as keyof typeof content] || content.de;

  const stats = [
    { value: c.stat1Value, label: c.stat1Label, icon: Calendar },
    { value: c.stat2Value, label: c.stat2Label, icon: Sun },
    { value: c.stat3Value, label: c.stat3Label, icon: TrendingUp },
    { value: c.stat4Value, label: c.stat4Label, icon: Award },
  ];

  const benefits = [
    { icon: Zap, title: c.benefit1Title, desc: c.benefit1Desc },
    { icon: Coins, title: c.benefit2Title, desc: c.benefit2Desc },
    { icon: Battery, title: c.benefit3Title, desc: c.benefit3Desc },
    { icon: ThermometerSun, title: c.benefit4Title, desc: c.benefit4Desc },
    { icon: Sun, title: c.benefit5Title, desc: c.benefit5Desc },
    { icon: Leaf, title: c.benefit6Title, desc: c.benefit6Desc },
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="page-vorteile">
      <Header onCtaClick={scrollToCalculator} />
      
      <section className="relative pt-24 pb-16 overflow-hidden" data-testid="section-vorteile-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-amber-500/20 backdrop-blur-md border-amber-400/30 text-white">
              <Sun className="w-4 h-4 mr-2 text-amber-400" />
              {c.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {c.title}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                {c.titleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {c.subtitle}
            </p>
            
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 border-0 shadow-lg"
              data-testid="button-vorteile-cta"
            >
              {c.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.statsTitle}</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border/50 bg-gradient-to-br from-amber-500/5 to-orange-500/5" data-testid={`card-stat-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background" data-testid="section-benefits-detail">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              {c.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {c.benefitsTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {c.benefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border/50 bg-gradient-to-br from-card to-card/80"
                data-testid={`card-benefit-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.comparisonTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.comparisonSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50 bg-card/50" data-testid="card-comparison-germany">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-muted-foreground" />
                  <h3 className="text-xl font-bold text-foreground">{c.germanyLabel}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">{c.sunHoursLabel}</span>
                    <span className="font-bold text-foreground">{c.germanyValues.sunHours}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="text-muted-foreground">{c.energyLabel}</span>
                    <span className="font-bold text-foreground">{c.germanyValues.energy}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">{c.roiLabel}</span>
                    <span className="font-bold text-foreground">{c.germanyValues.roi}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10" data-testid="card-comparison-mediterranean">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sun className="w-6 h-6 text-amber-500" />
                  <h3 className="text-xl font-bold text-foreground">{c.mediterraneanLabel}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-amber-500/20">
                    <span className="text-muted-foreground">{c.sunHoursLabel}</span>
                    <span className="font-bold text-amber-600">{c.mediterraneanValues.sunHours}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-amber-500/20">
                    <span className="text-muted-foreground">{c.energyLabel}</span>
                    <span className="font-bold text-amber-600">{c.mediterraneanValues.energy}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">{c.roiLabel}</span>
                    <span className="font-bold text-amber-600">{c.mediterraneanValues.roi}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 border-0"
              data-testid="button-vorteile-cta-bottom"
            >
              {c.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
