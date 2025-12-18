import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Sun, Zap, Wind, Battery, Settings } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FAQSection() {
  const { language } = useLanguage();

  const content = {
    tr: {
      badge: "Sıkça Sorulan Sorular",
      title: "Merak Ettikleriniz",
      titleHighlight: "Yanıtlarıyla",
      faq1Question: "Güneş paneli sistemi ne kadar tasarruf sağlar ve yatırımım ne zaman geri döner?",
      faq1Answer: "Akdeniz bölgesinde yılda ortalama 300 güneş günü ile güneş paneli sisteminiz elektrik faturanızda %60-80 oranında tasarruf sağlayabilir. Ortalama bir villa için kurulum maliyeti, enerji tasarrufları sayesinde 4-6 yıl içinde kendini amorti eder. Bunun ötesinde, güneş paneli kurulu evler emlak piyasasında %10-15 daha değerli kabul edilir. Alman DIN standartlarında üretilen panellerimiz 25 yıl performans garantisi ile gelir.",
      faq2Question: "Isı pompası sistemi nasıl çalışır ve Akdeniz ikliminde verimli mi?",
      faq2Answer: "Isı pompası, dış havadan ısı enerjisi çekerek evinizi ısıtır veya soğutur - tıpkı ters çalışan bir buzdolabı gibi. Akdeniz'in ılıman kış sıcaklıkları (ortalama 10-15°C), ısı pompalarının maksimum verimlilikle çalışması için idealdir. Vaillant aroTHERM sistemimiz, harcanan her 1 kW elektrik için 4-5 kW ısı enerjisi üretir (COP 4-5).",
      faq3Question: "Samsung klima sistemleri neden tercih edilmeli?",
      faq3Answer: "Samsung Wind-Free klimalar, doğrudan rüzgar hissi olmadan 23.000 mikro delikten nazik hava akışı sağlar. Inverter teknolojisi sayesinde geleneksel klimalardan %70'e kadar daha az enerji tüketir. Wi-Fi bağlantısı ile uzaktan kontrol edilebilir ve güneş panellerinizle entegre çalışarak enerji maliyetlerinizi minimize eder.",
      faq4Question: "Enerji depolama sistemi ne işe yarar?",
      faq4Answer: "Samsung All-in-One batarya sistemi, güneş panellerinizin ürettiği fazla enerjiyi depolar ve gece veya bulutlu günlerde kullanmanızı sağlar. Şebeke kesintilerinde evinize 24 saat kesintisiz enerji sağlar. 10 yıl garanti ile gelir ve günde birden fazla şarj döngüsünü destekler.",
      faq5Question: "4-in-1 sistem ayrı kurulumdan neden daha avantajlı?",
      faq5Answer: "Entegre sistemimiz, tüm bileşenlerin birbirleriyle mükemmel uyum içinde çalışmasını sağlar. Tek bir muhatap, tek bir garanti ve optimize edilmiş maliyetler. Ayrı kurulum yerine 4-in-1 tercih ettiğinizde %20'ye varan maliyet avantajı elde eder ve tüm sistemin kusursuz koordinasyonunu garanti altına alırsınız.",
    },
    de: {
      badge: "Häufig gestellte Fragen",
      title: "Ihre Fragen",
      titleHighlight: "Unsere Antworten",
      faq1Question: "Wie viel spart ein Solarpanelsystem und wann amortisiert sich meine Investition?",
      faq1Answer: "In der Mittelmeerregion mit durchschnittlich 300 Sonnentagen pro Jahr kann Ihr Solarsystem Ihre Stromrechnung um 60-80% reduzieren. Die Installationskosten für eine durchschnittliche Villa amortisieren sich dank der Energieeinsparungen innerhalb von 4-6 Jahren. Häuser mit Solaranlagen werden auf dem Immobilienmarkt als 10-15% wertvoller angesehen.",
      faq2Question: "Wie funktioniert ein Wärmepumpensystem und ist es im Mittelmeerklima effizient?",
      faq2Answer: "Eine Wärmepumpe entzieht der Außenluft Wärmeenergie, um Ihr Zuhause zu heizen oder zu kühlen - wie ein umgekehrter Kühlschrank. Die milden Wintertemperaturen am Mittelmeer (durchschnittlich 10-15°C) sind ideal für den Betrieb von Wärmepumpen mit maximaler Effizienz. Unser Vaillant aroTHERM System erzeugt für jede verbrauchte 1 kW Strom 4-5 kW Wärmeenergie (COP 4-5).",
      faq3Question: "Warum sollte man Samsung Klimaanlagen wählen?",
      faq3Answer: "Samsung Wind-Free Klimaanlagen bieten sanfte Luftzirkulation durch 23.000 Mikrolöcher ohne direkten Luftzug. Dank Inverter-Technologie verbrauchen sie bis zu 70% weniger Energie als herkömmliche Klimaanlagen. Mit Wi-Fi-Konnektivität können Sie sie fernsteuern, und sie arbeiten nahtlos mit Ihren Solarpanels zusammen.",
      faq4Question: "Wozu dient ein Energiespeichersystem?",
      faq4Answer: "Das Samsung All-in-One Batteriesystem speichert überschüssige Energie Ihrer Solarpanels und ermöglicht deren Nutzung nachts oder an bewölkten Tagen. Bei Stromausfällen versorgt es Ihr Zuhause 24 Stunden lang unterbrechungsfrei mit Energie. Es kommt mit 10 Jahren Garantie und unterstützt mehrere Ladezyklen pro Tag.",
      faq5Question: "Warum ist das 4-in-1 System vorteilhafter als separate Installationen?",
      faq5Answer: "Unser integriertes System gewährleistet, dass alle Komponenten perfekt zusammenarbeiten. Ein Ansprechpartner, eine Garantie und optimierte Kosten. Wenn Sie sich für 4-in-1 statt separater Installationen entscheiden, erzielen Sie bis zu 20% Kostenvorteil und garantieren eine reibungslose Koordination des gesamten Systems.",
    },
    en: {
      badge: "Frequently Asked Questions",
      title: "Your Questions",
      titleHighlight: "Answered",
      faq1Question: "How much does a solar panel system save and when will my investment pay off?",
      faq1Answer: "In the Mediterranean region with an average of 300 sunny days per year, your solar system can reduce your electricity bill by 60-80%. Installation costs for an average villa pay for themselves within 4-6 years thanks to energy savings. Homes with solar panels are considered 10-15% more valuable in the real estate market.",
      faq2Question: "How does a heat pump system work and is it efficient in Mediterranean climate?",
      faq2Answer: "A heat pump extracts heat energy from outside air to heat or cool your home - like a refrigerator working in reverse. The mild winter temperatures in the Mediterranean (average 10-15°C) are ideal for heat pumps to operate at maximum efficiency. Our Vaillant aroTHERM system produces 4-5 kW of heat energy for every 1 kW of electricity consumed (COP 4-5).",
      faq3Question: "Why choose Samsung air conditioning systems?",
      faq3Answer: "Samsung Wind-Free air conditioners provide gentle air circulation through 23,000 micro-holes without direct airflow sensation. Thanks to inverter technology, they consume up to 70% less energy than conventional air conditioners. With Wi-Fi connectivity, you can control them remotely, and they work seamlessly with your solar panels.",
      faq4Question: "What is an energy storage system used for?",
      faq4Answer: "The Samsung All-in-One battery system stores excess energy from your solar panels and allows you to use it at night or on cloudy days. During power outages, it provides your home with uninterrupted energy for 24 hours. It comes with a 10-year warranty and supports multiple charge cycles per day.",
      faq5Question: "Why is the 4-in-1 system more advantageous than separate installations?",
      faq5Answer: "Our integrated system ensures all components work together perfectly. One contact person, one warranty, and optimized costs. By choosing 4-in-1 instead of separate installations, you achieve up to 20% cost advantage and guarantee seamless coordination of the entire system.",
    },
    ru: {
      badge: "Часто задаваемые вопросы",
      title: "Ваши вопросы",
      titleHighlight: "Наши ответы",
      faq1Question: "Сколько экономит система солнечных панелей и когда окупятся мои инвестиции?",
      faq1Answer: "В Средиземноморском регионе, где в среднем 300 солнечных дней в году, ваша солнечная система может снизить счёт за электричество на 60-80%. Затраты на установку для средней виллы окупаются за 4-6 лет благодаря экономии энергии. Дома с солнечными панелями считаются на 10-15% более ценными на рынке недвижимости.",
      faq2Question: "Как работает система теплового насоса и эффективна ли она в средиземноморском климате?",
      faq2Answer: "Тепловой насос извлекает тепловую энергию из наружного воздуха для обогрева или охлаждения вашего дома — как холодильник, работающий наоборот. Мягкие зимние температуры Средиземноморья (в среднем 10-15°C) идеальны для работы тепловых насосов с максимальной эффективностью. Наша система Vaillant aroTHERM производит 4-5 кВт тепловой энергии на каждый потреблённый 1 кВт электроэнергии.",
      faq3Question: "Почему стоит выбрать кондиционеры Samsung?",
      faq3Answer: "Кондиционеры Samsung Wind-Free обеспечивают мягкую циркуляцию воздуха через 23 000 микроотверстий без ощущения прямого потока. Благодаря инверторной технологии они потребляют до 70% меньше энергии, чем обычные кондиционеры. С Wi-Fi подключением вы можете управлять ими удалённо, и они отлично работают с вашими солнечными панелями.",
      faq4Question: "Для чего нужна система накопления энергии?",
      faq4Answer: "Аккумуляторная система Samsung All-in-One сохраняет избыточную энергию от солнечных панелей и позволяет использовать её ночью или в пасмурные дни. При отключении электричества она обеспечивает ваш дом энергией в течение 24 часов. Гарантия 10 лет, поддержка нескольких циклов зарядки в день.",
      faq5Question: "Почему система 4-в-1 выгоднее отдельных установок?",
      faq5Answer: "Наша интегрированная система обеспечивает идеальную совместную работу всех компонентов. Один контакт, одна гарантия и оптимизированные затраты. Выбирая 4-в-1 вместо отдельных установок, вы получаете до 20% экономии и гарантированную координацию всей системы.",
    },
    uk: {
      badge: "Часті запитання",
      title: "Ваші запитання",
      titleHighlight: "Наші відповіді",
      faq1Question: "Скільки економить система сонячних панелей і коли окупляться мої інвестиції?",
      faq1Answer: "У Середземноморському регіоні, де в середньому 300 сонячних днів на рік, ваша сонячна система може знизити рахунок за електрику на 60-80%. Витрати на встановлення для середньої вілли окупаються за 4-6 років завдяки економії енергії. Будинки з сонячними панелями вважаються на 10-15% ціннішими на ринку нерухомості.",
      faq2Question: "Як працює система теплового насоса і чи ефективна вона в середземноморському кліматі?",
      faq2Answer: "Тепловий насос витягує теплову енергію з зовнішнього повітря для обігріву або охолодження вашого дому — як холодильник, що працює навпаки. М'які зимові температури Середземномор'я (в середньому 10-15°C) ідеальні для роботи теплових насосів з максимальною ефективністю. Наша система Vaillant aroTHERM виробляє 4-5 кВт теплової енергії на кожен спожитий 1 кВт електроенергії.",
      faq3Question: "Чому варто обрати кондиціонери Samsung?",
      faq3Answer: "Кондиціонери Samsung Wind-Free забезпечують м'яку циркуляцію повітря через 23 000 мікроотворів без відчуття прямого потоку. Завдяки інверторній технології вони споживають до 70% менше енергії, ніж звичайні кондиціонери. З Wi-Fi підключенням ви можете керувати ними дистанційно, і вони чудово працюють з вашими сонячними панелями.",
      faq4Question: "Для чого потрібна система накопичення енергії?",
      faq4Answer: "Акумуляторна система Samsung All-in-One зберігає надлишкову енергію від сонячних панелей і дозволяє використовувати її вночі або в похмурі дні. При відключенні електрики вона забезпечує ваш дім енергією протягом 24 годин. Гарантія 10 років, підтримка кількох циклів зарядки на день.",
      faq5Question: "Чому система 4-в-1 вигідніша за окремі установки?",
      faq5Answer: "Наша інтегрована система забезпечує ідеальну спільну роботу всіх компонентів. Один контакт, одна гарантія та оптимізовані витрати. Обираючи 4-в-1 замість окремих установок, ви отримуєте до 20% економії та гарантовану координацію всієї системи.",
    },
    ar: {
      badge: "الأسئلة الشائعة",
      title: "أسئلتكم",
      titleHighlight: "إجاباتنا",
      faq1Question: "كم توفر لوحة الطاقة الشمسية ومتى ستسترد استثماري؟",
      faq1Answer: "في منطقة البحر المتوسط مع متوسط 300 يوم مشمس سنوياً، يمكن لنظامك الشمسي تقليل فاتورة الكهرباء بنسبة 60-80%. تكاليف التركيب لفيلا متوسطة تسترد نفسها خلال 4-6 سنوات بفضل توفير الطاقة. تعتبر المنازل المزودة بالألواح الشمسية أكثر قيمة بنسبة 10-15% في سوق العقارات.",
      faq2Question: "كيف يعمل نظام المضخة الحرارية وهل هو فعال في مناخ البحر المتوسط؟",
      faq2Answer: "المضخة الحرارية تستخرج الطاقة الحرارية من الهواء الخارجي لتدفئة أو تبريد منزلك - مثل ثلاجة تعمل بالعكس. درجات الحرارة الشتوية المعتدلة في البحر المتوسط (متوسط 10-15 درجة مئوية) مثالية لتشغيل المضخات الحرارية بأقصى كفاءة. نظام Vaillant aroTHERM ينتج 4-5 كيلوواط من الطاقة الحرارية لكل 1 كيلوواط من الكهرباء.",
      faq3Question: "لماذا تختار مكيفات سامسونج؟",
      faq3Answer: "توفر مكيفات Samsung Wind-Free دوران هواء لطيف عبر 23,000 فتحة صغيرة دون الشعور بتيار هواء مباشر. بفضل تقنية العاكس، تستهلك حتى 70% طاقة أقل من المكيفات التقليدية. مع اتصال Wi-Fi يمكنك التحكم بها عن بُعد، وتعمل بسلاسة مع الألواح الشمسية.",
      faq4Question: "ما فائدة نظام تخزين الطاقة؟",
      faq4Answer: "يخزن نظام بطارية Samsung All-in-One الطاقة الزائدة من الألواح الشمسية ويتيح لك استخدامها ليلاً أو في الأيام الغائمة. أثناء انقطاع التيار الكهربائي، يوفر لمنزلك طاقة متواصلة لمدة 24 ساعة. يأتي بضمان 10 سنوات ويدعم دورات شحن متعددة يومياً.",
      faq5Question: "لماذا نظام 4-في-1 أفضل من التركيبات المنفصلة؟",
      faq5Answer: "يضمن نظامنا المتكامل أن جميع المكونات تعمل معاً بشكل مثالي. جهة اتصال واحدة، ضمان واحد، وتكاليف محسّنة. باختيار 4-في-1 بدلاً من التركيبات المنفصلة، تحصل على توفير يصل إلى 20% وتنسيق سلس للنظام بأكمله.",
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
    { 
      icon: Wind, 
      question: c.faq3Question, 
      answer: c.faq3Answer,
      color: "from-sky-500 to-cyan-600"
    },
    { 
      icon: Battery, 
      question: c.faq4Question, 
      answer: c.faq4Answer,
      color: "from-emerald-500 to-green-600"
    },
    { 
      icon: Settings, 
      question: c.faq5Question, 
      answer: c.faq5Answer,
      color: "from-violet-500 to-purple-600"
    },
  ];

  return (
    <section 
      id="faq" 
      className={`py-4 md:py-5 bg-gradient-to-b from-muted/30 to-background ${isRtl ? "rtl" : ""}`} 
      dir={isRtl ? "rtl" : "ltr"} 
      data-testid="section-faq-home"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
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
