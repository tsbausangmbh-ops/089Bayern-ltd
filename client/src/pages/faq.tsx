import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ArrowRight, Phone, Sun, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQ() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const scrollToCalculator = () => {
    setLocation("/#calculator");
  };

  const content = {
    tr: {
      badge: "Sıkça Sorulan Sorular",
      title: "Merak Ettikleriniz",
      titleHighlight: "Yanıtlarıyla",
      subtitle: "Güneş enerjisi ve ısı pompası sistemleri hakkında en çok sorulan soruların cevapları burada.",
      ctaTitle: "Başka Sorularınız mı Var?",
      ctaText: "Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır. Ücretsiz danışmanlık için hemen iletişime geçin.",
      ctaButton: "Ücretsiz Keşif Al",
      ctaButton2: "Hemen Arayın",
      faq1Question: "Güneş paneli sistemi ne kadar tasarruf sağlar ve yatırımım ne zaman geri döner?",
      faq1Answer: "Akdeniz bölgesinde yılda ortalama 300 güneş günü ile güneş paneli sisteminiz elektrik faturanızda %60-80 oranında tasarruf sağlayabilir. Ortalama bir villa için kurulum maliyeti, enerji tasarrufları sayesinde 4-6 yıl içinde kendini amorti eder. Bunun ötesinde, güneş paneli kurulu evler emlak piyasasında %10-15 daha değerli kabul edilir. Alman DIN standartlarında üretilen panellerimiz 25 yıl performans garantisi ile gelir, bu da uzun vadeli yatırım güvenliği anlamına gelir.",
      faq2Question: "Isı pompası sistemi nasıl çalışır ve Akdeniz ikliminde verimli mi?",
      faq2Answer: "Isı pompası, dış havadan ısı enerjisi çekerek evinizi ısıtır veya soğutur - tıpkı ters çalışan bir buzdolabı gibi. Akdeniz'in ılıman kış sıcaklıkları (ortalama 10-15°C), ısı pompalarının maksimum verimlilikle çalışması için idealdir. Vaillant aroTHERM sistemimiz, harcanan her 1 kW elektrik için 4-5 kW ısı enerjisi üretir (COP 4-5). Bu, geleneksel elektrikli ısıtmaya kıyasla %75'e varan enerji tasarrufu demektir. Yazın ise aynı sistem evinizi doğal gazdan bağımsız olarak soğutur.",
    },
    de: {
      badge: "Häufig gestellte Fragen",
      title: "Ihre Fragen",
      titleHighlight: "Unsere Antworten",
      subtitle: "Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu Solar- und Wärmepumpensystemen.",
      ctaTitle: "Haben Sie weitere Fragen?",
      ctaText: "Unser Expertenteam steht bereit, alle Ihre Fragen zu beantworten. Kontaktieren Sie uns jetzt für eine kostenlose Beratung.",
      ctaButton: "Kostenlose Beratung",
      ctaButton2: "Jetzt anrufen",
      faq1Question: "Wie viel spart ein Solarpanelsystem und wann amortisiert sich meine Investition?",
      faq1Answer: "In der Mittelmeerregion mit durchschnittlich 300 Sonnentagen pro Jahr kann Ihr Solarsystem Ihre Stromrechnung um 60-80% reduzieren. Die Installationskosten für eine durchschnittliche Villa amortisieren sich dank der Energieeinsparungen innerhalb von 4-6 Jahren. Darüber hinaus werden Häuser mit Solaranlagen auf dem Immobilienmarkt als 10-15% wertvoller angesehen. Unsere nach deutschen DIN-Standards gefertigten Panels kommen mit 25 Jahren Leistungsgarantie, was langfristige Investitionssicherheit bedeutet.",
      faq2Question: "Wie funktioniert ein Wärmepumpensystem und ist es im Mittelmeerklima effizient?",
      faq2Answer: "Eine Wärmepumpe entzieht der Außenluft Wärmeenergie, um Ihr Zuhause zu heizen oder zu kühlen - wie ein umgekehrter Kühlschrank. Die milden Wintertemperaturen am Mittelmeer (durchschnittlich 10-15°C) sind ideal für den Betrieb von Wärmepumpen mit maximaler Effizienz. Unser Vaillant aroTHERM System erzeugt für jede verbrauchte 1 kW Strom 4-5 kW Wärmeenergie (COP 4-5). Das bedeutet bis zu 75% Energieeinsparung im Vergleich zu herkömmlicher Elektroheizung. Im Sommer kühlt dasselbe System Ihr Zuhause unabhängig von Erdgas.",
    },
    en: {
      badge: "Frequently Asked Questions",
      title: "Your Questions",
      titleHighlight: "Answered",
      subtitle: "Find answers to the most frequently asked questions about solar and heat pump systems here.",
      ctaTitle: "Have More Questions?",
      ctaText: "Our expert team is ready to answer all your questions. Contact us now for a free consultation.",
      ctaButton: "Free Consultation",
      ctaButton2: "Call Now",
      faq1Question: "How much does a solar panel system save and when will my investment pay off?",
      faq1Answer: "In the Mediterranean region with an average of 300 sunny days per year, your solar system can reduce your electricity bill by 60-80%. Installation costs for an average villa pay for themselves within 4-6 years thanks to energy savings. Furthermore, homes with solar panels are considered 10-15% more valuable in the real estate market. Our panels manufactured to German DIN standards come with a 25-year performance guarantee, meaning long-term investment security.",
      faq2Question: "How does a heat pump system work and is it efficient in Mediterranean climate?",
      faq2Answer: "A heat pump extracts heat energy from outside air to heat or cool your home - like a refrigerator working in reverse. The mild winter temperatures in the Mediterranean (average 10-15°C) are ideal for heat pumps to operate at maximum efficiency. Our Vaillant aroTHERM system produces 4-5 kW of heat energy for every 1 kW of electricity consumed (COP 4-5). This means up to 75% energy savings compared to conventional electric heating. In summer, the same system cools your home independently of natural gas.",
    },
    ru: {
      badge: "Часто задаваемые вопросы",
      title: "Ваши вопросы",
      titleHighlight: "Наши ответы",
      subtitle: "Здесь вы найдёте ответы на наиболее часто задаваемые вопросы о солнечных и тепловых насосных системах.",
      ctaTitle: "Есть ещё вопросы?",
      ctaText: "Наша команда экспертов готова ответить на все ваши вопросы. Свяжитесь с нами для бесплатной консультации.",
      ctaButton: "Бесплатная консультация",
      ctaButton2: "Позвоните сейчас",
      faq1Question: "Сколько экономит система солнечных панелей и когда окупятся мои инвестиции?",
      faq1Answer: "В Средиземноморском регионе, где в среднем 300 солнечных дней в году, ваша солнечная система может снизить счёт за электричество на 60-80%. Затраты на установку для средней виллы окупаются за 4-6 лет благодаря экономии энергии. Кроме того, дома с солнечными панелями считаются на 10-15% более ценными на рынке недвижимости. Наши панели, изготовленные по немецким стандартам DIN, имеют 25-летнюю гарантию производительности.",
      faq2Question: "Как работает система теплового насоса и эффективна ли она в средиземноморском климате?",
      faq2Answer: "Тепловой насос извлекает тепловую энергию из наружного воздуха для обогрева или охлаждения вашего дома — как холодильник, работающий наоборот. Мягкие зимние температуры Средиземноморья (в среднем 10-15°C) идеальны для работы тепловых насосов с максимальной эффективностью. Наша система Vaillant aroTHERM производит 4-5 кВт тепловой энергии на каждый потреблённый 1 кВт электроэнергии (COP 4-5). Это означает до 75% экономии энергии по сравнению с обычным электрическим отоплением.",
    },
    uk: {
      badge: "Часті запитання",
      title: "Ваші запитання",
      titleHighlight: "Наші відповіді",
      subtitle: "Тут ви знайдете відповіді на найпоширеніші запитання про сонячні та теплонасосні системи.",
      ctaTitle: "Маєте ще запитання?",
      ctaText: "Наша команда експертів готова відповісти на всі ваші запитання. Зв'яжіться з нами для безкоштовної консультації.",
      ctaButton: "Безкоштовна консультація",
      ctaButton2: "Зателефонуйте зараз",
      faq1Question: "Скільки економить система сонячних панелей і коли окупляться мої інвестиції?",
      faq1Answer: "У Середземноморському регіоні, де в середньому 300 сонячних днів на рік, ваша сонячна система може знизити рахунок за електрику на 60-80%. Витрати на встановлення для середньої вілли окупаються за 4-6 років завдяки економії енергії. Крім того, будинки з сонячними панелями вважаються на 10-15% ціннішими на ринку нерухомості. Наші панелі, виготовлені за німецькими стандартами DIN, мають 25-річну гарантію продуктивності.",
      faq2Question: "Як працює система теплового насоса і чи ефективна вона в середземноморському кліматі?",
      faq2Answer: "Тепловий насос витягує теплову енергію з зовнішнього повітря для обігріву або охолодження вашого дому — як холодильник, що працює навпаки. М'які зимові температури Середземномор'я (в середньому 10-15°C) ідеальні для роботи теплових насосів з максимальною ефективністю. Наша система Vaillant aroTHERM виробляє 4-5 кВт теплової енергії на кожен спожитий 1 кВт електроенергії (COP 4-5). Це означає до 75% економії енергії порівняно зі звичайним електричним опаленням.",
    },
    ar: {
      badge: "الأسئلة الشائعة",
      title: "أسئلتكم",
      titleHighlight: "إجاباتنا",
      subtitle: "هنا تجدون إجابات على الأسئلة الأكثر شيوعاً حول أنظمة الطاقة الشمسية والمضخات الحرارية.",
      ctaTitle: "هل لديك المزيد من الأسئلة؟",
      ctaText: "فريق خبرائنا مستعد للإجابة على جميع أسئلتك. اتصل بنا الآن للحصول على استشارة مجانية.",
      ctaButton: "استشارة مجانية",
      ctaButton2: "اتصل الآن",
      faq1Question: "كم توفر لوحة الطاقة الشمسية ومتى ستسترد استثماري؟",
      faq1Answer: "في منطقة البحر المتوسط مع متوسط 300 يوم مشمس سنوياً، يمكن لنظامك الشمسي تقليل فاتورة الكهرباء بنسبة 60-80%. تكاليف التركيب لفيلا متوسطة تسترد نفسها خلال 4-6 سنوات بفضل توفير الطاقة. علاوة على ذلك، تعتبر المنازل المزودة بالألواح الشمسية أكثر قيمة بنسبة 10-15% في سوق العقارات. ألواحنا المصنعة وفق معايير DIN الألمانية تأتي مع ضمان أداء لمدة 25 عاماً.",
      faq2Question: "كيف يعمل نظام المضخة الحرارية وهل هو فعال في مناخ البحر المتوسط؟",
      faq2Answer: "المضخة الحرارية تستخرج الطاقة الحرارية من الهواء الخارجي لتدفئة أو تبريد منزلك - مثل ثلاجة تعمل بالعكس. درجات الحرارة الشتوية المعتدلة في البحر المتوسط (متوسط 10-15 درجة مئوية) مثالية لتشغيل المضخات الحرارية بأقصى كفاءة. نظام Vaillant aroTHERM الخاص بنا ينتج 4-5 كيلوواط من الطاقة الحرارية لكل 1 كيلوواط من الكهرباء المستهلكة (COP 4-5). هذا يعني توفيراً في الطاقة يصل إلى 75% مقارنة بالتدفئة الكهربائية التقليدية.",
    },
  };

  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  const faqs = [
    { 
      icon: Sun, 
      question: c.faq1Question, 
      answer: c.faq1Answer,
      color: "from-amber-500 to-orange-600"
    },
    { 
      icon: Zap, 
      question: c.faq2Question, 
      answer: c.faq2Answer,
      color: "from-primary to-blue-600"
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-faq">
      <Header onCtaClick={scrollToCalculator} />
      
      <section className="pt-28 pb-12 bg-gradient-to-b from-muted/50 to-background" data-testid="section-faq-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            {c.badge}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {c.title}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {c.titleHighlight}
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12 bg-background" data-testid="section-faq-list">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border/50 overflow-visible" data-testid={`card-faq-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center flex-shrink-0`}>
                      <faq.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {faq.question}
                    </h2>
                  </div>
                  <div className={`${isRtl ? "pr-16" : "pl-16"}`}>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" data-testid="section-faq-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.ctaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{c.ctaText}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg px-8"
              data-testid="button-faq-cta"
            >
              {c.ctaButton}
              <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 bg-white/50 backdrop-blur-sm px-8" 
              onClick={() => window.location.href = "tel:+905071832036"}
              data-testid="button-faq-phone"
            >
              <Phone className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
              {c.ctaButton2}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
