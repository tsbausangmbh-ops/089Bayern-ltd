import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Sun, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FAQSection() {
  const { language } = useLanguage();

  const content = {
    tr: {
      badge: "Sıkça Sorulan Sorular",
      title: "Merak Ettikleriniz",
      titleHighlight: "Yanıtlarıyla",
      faq1Question: "Güneş paneli sistemi ne kadar tasarruf sağlar ve yatırımım ne zaman geri döner?",
      faq1Answer: "Akdeniz bölgesinde yılda ortalama 300 güneş günü ile güneş paneli sisteminiz elektrik faturanızda %60-80 oranında tasarruf sağlayabilir. Ortalama bir villa için kurulum maliyeti, enerji tasarrufları sayesinde 4-6 yıl içinde kendini amorti eder. Bunun ötesinde, güneş paneli kurulu evler emlak piyasasında %10-15 daha değerli kabul edilir. Alman DIN standartlarında üretilen panellerimiz 25 yıl performans garantisi ile gelir, bu da uzun vadeli yatırım güvenliği anlamına gelir.",
      faq2Question: "Isı pompası sistemi nasıl çalışır ve Akdeniz ikliminde verimli mi?",
      faq2Answer: "Isı pompası, dış havadan ısı enerjisi çekerek evinizi ısıtır veya soğutur - tıpkı ters çalışan bir buzdolabı gibi. Akdeniz'in ılıman kış sıcaklıkları (ortalama 10-15°C), ısı pompalarının maksimum verimlilikle çalışması için idealdir. Vaillant aroTHERM sistemimiz, harcanan her 1 kW elektrik için 4-5 kW ısı enerjisi üretir (COP 4-5). Bu, geleneksel elektrikli ısıtmaya kıyasla %75'e varan enerji tasarrufu demektir. Yazın ise aynı sistem evinizi doğal gazdan bağımsız olarak soğutur.",
    },
    de: {
      badge: "Häufig gestellte Fragen",
      title: "Ihre Fragen",
      titleHighlight: "Unsere Antworten",
      faq1Question: "Wie viel spart ein Solarpanelsystem und wann amortisiert sich meine Investition?",
      faq1Answer: "In der Mittelmeerregion mit durchschnittlich 300 Sonnentagen pro Jahr kann Ihr Solarsystem Ihre Stromrechnung um 60-80% reduzieren. Die Installationskosten für eine durchschnittliche Villa amortisieren sich dank der Energieeinsparungen innerhalb von 4-6 Jahren. Darüber hinaus werden Häuser mit Solaranlagen auf dem Immobilienmarkt als 10-15% wertvoller angesehen. Unsere nach deutschen DIN-Standards gefertigten Panels kommen mit 25 Jahren Leistungsgarantie, was langfristige Investitionssicherheit bedeutet.",
      faq2Question: "Wie funktioniert ein Wärmepumpensystem und ist es im Mittelmeerklima effizient?",
      faq2Answer: "Eine Wärmepumpe entzieht der Außenluft Wärmeenergie, um Ihr Zuhause zu heizen oder zu kühlen - wie ein umgekehrter Kühlschrank. Die milden Wintertemperaturen am Mittelmeer (durchschnittlich 10-15°C) sind ideal für den Betrieb von Wärmepumpen mit maximaler Effizienz. Unser Vaillant aroTHERM System erzeugt für jede verbrauchte 1 kW Strom 4-5 kW Wärmeenergie (COP 4-5). Das bedeutet bis zu 75% Energieeinsparung im Vergleich zu herkömmlicher Elektroheizung. Im Sommer kühlt dasselbe System Ihr Zuhause unabhängig von Erdgas.",
    },
    en: {
      badge: "Frequently Asked Questions",
      title: "Your Questions",
      titleHighlight: "Answered",
      faq1Question: "How much does a solar panel system save and when will my investment pay off?",
      faq1Answer: "In the Mediterranean region with an average of 300 sunny days per year, your solar system can reduce your electricity bill by 60-80%. Installation costs for an average villa pay for themselves within 4-6 years thanks to energy savings. Furthermore, homes with solar panels are considered 10-15% more valuable in the real estate market. Our panels manufactured to German DIN standards come with a 25-year performance guarantee, meaning long-term investment security.",
      faq2Question: "How does a heat pump system work and is it efficient in Mediterranean climate?",
      faq2Answer: "A heat pump extracts heat energy from outside air to heat or cool your home - like a refrigerator working in reverse. The mild winter temperatures in the Mediterranean (average 10-15°C) are ideal for heat pumps to operate at maximum efficiency. Our Vaillant aroTHERM system produces 4-5 kW of heat energy for every 1 kW of electricity consumed (COP 4-5). This means up to 75% energy savings compared to conventional electric heating. In summer, the same system cools your home independently of natural gas.",
    },
    ru: {
      badge: "Часто задаваемые вопросы",
      title: "Ваши вопросы",
      titleHighlight: "Наши ответы",
      faq1Question: "Сколько экономит система солнечных панелей и когда окупятся мои инвестиции?",
      faq1Answer: "В Средиземноморском регионе, где в среднем 300 солнечных дней в году, ваша солнечная система может снизить счёт за электричество на 60-80%. Затраты на установку для средней виллы окупаются за 4-6 лет благодаря экономии энергии. Кроме того, дома с солнечными панелями считаются на 10-15% более ценными на рынке недвижимости. Наши панели, изготовленные по немецким стандартам DIN, имеют 25-летнюю гарантию производительности.",
      faq2Question: "Как работает система теплового насоса и эффективна ли она в средиземноморском климате?",
      faq2Answer: "Тепловой насос извлекает тепловую энергию из наружного воздуха для обогрева или охлаждения вашего дома — как холодильник, работающий наоборот. Мягкие зимние температуры Средиземноморья (в среднем 10-15°C) идеальны для работы тепловых насосов с максимальной эффективностью. Наша система Vaillant aroTHERM производит 4-5 кВт тепловой энергии на каждый потреблённый 1 кВт электроэнергии (COP 4-5). Это означает до 75% экономии энергии по сравнению с обычным электрическим отоплением.",
    },
    uk: {
      badge: "Часті запитання",
      title: "Ваші запитання",
      titleHighlight: "Наші відповіді",
      faq1Question: "Скільки економить система сонячних панелей і коли окупляться мої інвестиції?",
      faq1Answer: "У Середземноморському регіоні, де в середньому 300 сонячних днів на рік, ваша сонячна система може знизити рахунок за електрику на 60-80%. Витрати на встановлення для середньої вілли окупаються за 4-6 років завдяки економії енергії. Крім того, будинки з сонячними панелями вважаються на 10-15% ціннішими на ринку нерухомості. Наші панелі, виготовлені за німецькими стандартами DIN, мають 25-річну гарантію продуктивності.",
      faq2Question: "Як працює система теплового насоса і чи ефективна вона в середземноморському кліматі?",
      faq2Answer: "Тепловий насос витягує теплову енергію з зовнішнього повітря для обігріву або охолодження вашого дому — як холодильник, що працює навпаки. М'які зимові температури Середземномор'я (в середньому 10-15°C) ідеальні для роботи теплових насосів з максимальною ефективністю. Наша система Vaillant aroTHERM виробляє 4-5 кВт теплової енергії на кожен спожитий 1 кВт електроенергії (COP 4-5). Це означає до 75% економії енергії порівняно зі звичайним електричним опаленням.",
    },
    ar: {
      badge: "الأسئلة الشائعة",
      title: "أسئلتكم",
      titleHighlight: "إجاباتنا",
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
    <section 
      id="faq" 
      className={`py-16 bg-gradient-to-b from-muted/30 to-background ${isRtl ? "rtl" : ""}`} 
      dir={isRtl ? "rtl" : "ltr"} 
      data-testid="section-faq-home"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            {c.badge}
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {c.title}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {c.titleHighlight}
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border/50 overflow-visible" data-testid={`card-faq-home-${index}`}>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center flex-shrink-0`}>
                    <faq.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    {faq.question}
                  </h3>
                </div>
                <div className={`${isRtl ? "pr-14 md:pr-16" : "pl-14 md:pl-16"}`}>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
