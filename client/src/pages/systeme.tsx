import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Snowflake, Flame, Sun, Battery, Check, Sparkles, ArrowRight, Zap, Shield, Clock, ThumbsUp, Phone, Wallet, Home, HelpCircle, Users, Settings } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CrossLinks from "@/components/CrossLinks";
import TrustCallToAction from "@/components/TrustCallToAction";
import SectionCTA from "@/components/SectionCTA";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@assets/images/optimized/hero-system.jpg";
import systemPresentationImage from "@assets/images/optimized/system-presentation.jpg";
import climateInstallImage from "@assets/images/optimized/system-climate-install.jpg";
import heatpumpInstallImage from "@assets/images/optimized/system-heatpump-install.jpg";
import solarInstallImage from "@assets/images/optimized/system-solar-install.jpg";
import batteryInstallImage from "@assets/images/optimized/system-battery-install.jpg";

export default function Systeme() {
  const { language } = useLanguage();
  const t = uiTranslations[language];
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const goToContact = () => {
    setIsLeadFormOpen(true);
  };

  const content = {
    tr: {
      badge: "089 Bayern 4-in-1 German System",
      title: "089 Bayern",
      titleHighlight: "4-in-1 German System",
      subtitle: "089 Bayern 4-in-1 German System: Güneş paneli, ısı pompası, akıllı klima ve enerji depolama - tek yatırımda dört farklı çözüm. Antalya, Alanya ve tüm Akdeniz bölgesinde Alman kalitesi.",
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
      
      nlpTitle: "Gerçekten Ne Kazanıyorsunuz",
      nlpSubtitle: "Sadece teknoloji değil - gerçek yaşam kalitesi",
      nlp1Title: "Finansal Özgürlük",
      nlp1Stat: "ca. %70",
      nlp1StatLabel: "Tasarruf",
      nlp1Text: "Düşünün: Her ay sizi zorlayan elektrik faturası küçücük kalıyor. 5-7 yıl içinde yatırımınızı geri alıyorsunuz - sonrası tamamen kar. Her ay gerçekten önemli olan şeyler için daha fazla para.",
      nlp2Title: "Tam Bağımsızlık",
      nlp2Stat: "24/7",
      nlp2StatLabel: "Enerji",
      nlp2Text: "Elektrik kesintisi mi? Sizi etkilemiyor. Fiyat artışları mı? Artık size dokunmuyor. Kendi enerjinizi üretiyorsunuz, depoluyorsunuz ve istediğiniz zaman kullanıyorsunuz. Bu gerçek özgürlük.",
      nlp3Title: "Değer Artışı",
      nlp3Stat: "+%15",
      nlp3StatLabel: "Emlak Değeri",
      nlp3Text: "Eviniz daha değerli hale geliyor. Komple enerji sistemine sahip bir villa emlak piyasasında çok daha cazip. Yatırımınız iki kat karşılığını veriyor.",
      nlp4Title: "Kaygısız Gelecek",
      nlp4Stat: "10 Yıl",
      nlp4StatLabel: "Garanti",
      nlp4Text: "Sözümüzün arkasındayız. 10 yıl kapsamlı garanti: Arkanıza yaslanın ve konforlu evinizin keyfini çıkarın. Sorun olursa hemen oradayız.",
      
      synergyTitle: "Neden 4-in-1 Tek Çözümlerden Daha İyi",
      synergySubtitle: "Bileşenler bir orkestra gibi birlikte çalışıyor",
      synergy1Title: "Mükemmel Sinerji",
      synergy1Text: "Güneş, ısı pompası, klima ve depolama birbiriyle uyumlu. Birbirleriyle iletişim kuruyor ve enerji akışını otomatik optimize ediyor. Sonuç: maksimum verimlilik, minimum tüketim.",
      synergy2Title: "Tek Muhatap",
      synergy2Text: "Farklı firmalar arasında koşuşturmak yok. Tek telefon numarası, her şeyi bilen tek teknisyen. Sorularınız veya sorunlarınız için kimi arayacağınızı biliyorsunuz - ve hızlı yanıt alıyorsunuz.",
      synergy3Title: "Optimize Maliyet",
      synergy3Text: "Ayrı ayrı almak daha pahalı. Tek elden planlama, teslimat ve kurulum - bu zamandan, sinirden ve ayrı ayrı satın almaya göre %20'ye kadar tasarruf sağlar.",
      synergy4Title: "Geleceğe Hazır",
      synergy4Text: "Sistem ihtiyaçlarınızla birlikte büyür. Daha fazla depolama? Daha büyük güneş sistemi? Kolayca genişletilebilir. Bir kez doğru yatırım yapıyorsunuz - ve geleceğe hazırsınız.",
      
      faqTitle: "4-in-1 Sistem Hakkında Sık Sorulan Sorular",
      faq1Q: "Komple 4-in-1 sistemin kurulumu ne kadar sürer?",
      faq1A: "Kurulum villanızın büyüklüğüne bağlı olarak genellikle 3-5 iş günü sürer. Her şeyi minimum rahatsızlık verecek şekilde planlıyoruz. Tamamlandığında tüm sistemi size tanıtıyor ve tüm sorularınızı yanıtlıyoruz.",
      faq2Q: "Elektrik kesintisinde sistem çalışır mı?",
      faq2A: "Evet! Samsung batarya depolama tam da bunun için var. Elektrik kesintisinde sistem otomatik olarak ada moduna geçer. Buzdolabı, klima, aydınlatma ve tüm önemli cihazlarınız için elektriğiniz devam eder.",
      faq3Q: "Gerçek tasarruf ne kadar?",
      faq3A: "Akdeniz bölgesinde müşterilerimiz ortalama enerji maliyetlerinin %60-70'ini tasarruf ediyor. Antalya'daki tipik bir villa için bu yılda yaklaşık 800-1.200 EUR anlamına geliyor. Kesin tasarruf tüketiminize bağlı - bunu sizin için bireysel olarak hesaplıyoruz.",
      faq4Q: "Villam için komple 4-in-1 sistem ne kadar?",
      faq4A: "Tipik bir 200m² villa için sistemlerimiz yaklaşık 31.200 EUR'dan başlıyor (taahhütsüz). Kesin fiyat çatı alanı, istenen güç ve depolama boyutu gibi faktörlere bağlı. Ücretsiz yerinde analizden sonra size özel bir teklif hazırlıyoruz.",
      faq5Q: "Neden Alman kalitesi? Fark ne?",
      faq5A: "Alman mühendisliği hassasiyet, dayanıklılık ve güvenilirlik demek. Sadece Vaillant ve Samsung gibi premium markalar kullanıyoruz, DIN standartlarına göre çalışıyoruz ve 10 yıl garanti sunuyoruz. Sistemlerimiz 25+ yıl dayanır - ucuz alternatifler genellikle 5 yıl sonra sorun çıkarır.",
    },
    de: {
      badge: "089 Bayern 4-in-1 German System",
      title: "089 Bayern",
      titleHighlight: "4-in-1 German System",
      subtitle: "089 Bayern 4-in-1 German System: Solarpanel, Wärmepumpe, Smart-Klima und Energiespeicher - vier Lösungen in einer Investition. Deutsche Qualität am Mittelmeer.",
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
      
      nlpTitle: "Was Sie wirklich gewinnen",
      nlpSubtitle: "Mehr als nur Technik - echte Lebensqualität",
      nlp1Title: "Finanzielle Freiheit",
      nlp1Stat: "ca. 70%",
      nlp1StatLabel: "Ersparnis",
      nlp1Text: "Stellen Sie sich vor: Die monatliche Stromrechnung, die Sie jeden Monat belastet hat, schrumpft auf einen Bruchteil. Nach 5-7 Jahren haben Sie Ihre Investition zurück - danach ist es reiner Gewinn. Jeden Monat mehr Geld für das, was wirklich zählt.",
      nlp2Title: "Absolute Unabhängigkeit",
      nlp2Stat: "24/7",
      nlp2StatLabel: "Energie",
      nlp2Text: "Stromausfälle? Betreffen Sie nicht mehr. Preiserhöhungen? Berühren Sie kaum noch. Sie produzieren Ihre eigene Energie, speichern sie und nutzen sie wann immer Sie wollen. Das ist echte Freiheit.",
      nlp3Title: "Wertsteigerung",
      nlp3Stat: "+15%",
      nlp3StatLabel: "Immobilienwert",
      nlp3Text: "Ihr Zuhause wird wertvoller. Eine Villa mit komplettem Energiesystem ist auf dem Immobilienmarkt deutlich attraktiver. Ihre Investition zahlt sich doppelt aus.",
      nlp4Title: "Sorgenfreie Zukunft",
      nlp4Stat: "10 Jahre",
      nlp4StatLabel: "Garantie",
      nlp4Text: "Wir stehen hinter unserem Wort. 10 Jahre umfassende Garantie bedeutet: Sie können sich zurücklehnen und Ihr komfortables Zuhause genießen. Bei Problemen sind wir sofort da.",
      
      synergyTitle: "Warum 4-in-1 besser ist als Einzellösungen",
      synergySubtitle: "Die Komponenten arbeiten zusammen wie ein Orchester",
      synergy1Title: "Perfekte Synergie",
      synergy1Text: "Solar, Wärmepumpe, Klima und Speicher sind aufeinander abgestimmt. Sie kommunizieren miteinander und optimieren automatisch den Energiefluss. Das Ergebnis: maximale Effizienz, minimaler Verbrauch.",
      synergy2Title: "Ein Ansprechpartner",
      synergy2Text: "Kein Hin und Her zwischen verschiedenen Firmen. Eine Telefonnummer, ein Techniker, der alles kennt. Bei Fragen oder Problemen wissen Sie genau, wen Sie anrufen - und wir reagieren schnell.",
      synergy3Title: "Optimierte Kosten",
      synergy3Text: "Einzeln kaufen kostet mehr. Wir planen, liefern und installieren alles aus einer Hand - das spart Zeit, Nerven und bis zu 20% gegenüber Einzelkäufen.",
      synergy4Title: "Zukunftssicher",
      synergy4Text: "Das System wächst mit Ihren Bedürfnissen. Mehr Speicher? Größere Solaranlage? Einfach erweiterbar. Sie investieren einmal richtig - und sind für die Zukunft gerüstet.",
      
      faqTitle: "Häufige Fragen zum 4-in-1 System",
      faq1Q: "Wie lange dauert die Installation des kompletten 4-in-1 Systems?",
      faq1A: "Die Installation dauert in der Regel 3-5 Werktage, je nach Größe Ihrer Villa. Wir planen alles so, dass Sie minimal gestört werden. Nach Abschluss führen wir Sie durch das gesamte System und beantworten alle Fragen.",
      faq2Q: "Funktioniert das System auch bei Stromausfall?",
      faq2A: "Ja! Genau dafür ist der Samsung-Batteriespeicher da. Bei Stromausfall schaltet das System automatisch auf Inselbetrieb um. Sie haben weiterhin Strom - für Kühlschrank, Klimaanlage, Beleuchtung und alle wichtigen Geräte.",
      faq3Q: "Wie hoch ist die tatsächliche Ersparnis?",
      faq3A: "Im Mittelmeerraum sparen unsere Kunden durchschnittlich 60-70% ihrer Energiekosten. Bei einer typischen Villa in Antalya bedeutet das ca. 800-1.200 EUR pro Jahr. Die genaue Ersparnis hängt von Ihrem Verbrauch ab - wir berechnen das individuell für Sie.",
      faq4Q: "Was kostet ein komplettes 4-in-1 System für meine Villa?",
      faq4A: "Für eine typische 200m² Villa beginnen unsere Systeme bei ca. 31.200 EUR (ohne Gewähr). Der genaue Preis hängt von Faktoren wie Dachfläche, gewünschter Leistung und Speichergröße ab. Wir erstellen Ihnen ein individuelles Angebot nach der kostenlosen Vor-Ort-Analyse.",
      faq5Q: "Warum deutsche Qualität? Was ist der Unterschied?",
      faq5A: "Deutsche Ingenieurskunst steht für Präzision, Langlebigkeit und Zuverlässigkeit. Wir verwenden nur Premium-Marken wie Vaillant und Samsung, arbeiten nach DIN-Standards und bieten 10 Jahre Garantie. Unsere Systeme halten 25+ Jahre - während billige Alternativen oft nach 5 Jahren Probleme machen.",
    },
    en: {
      badge: "089 Bayern 4-in-1 German System",
      title: "089 Bayern",
      titleHighlight: "4-in-1 German System",
      subtitle: "089 Bayern 4-in-1 German System: Solar panel, heat pump, smart climate and energy storage - four solutions in one investment. German quality in the Mediterranean.",
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
      
      nlpTitle: "What You Really Gain",
      nlpSubtitle: "More than just technology - real quality of life",
      nlp1Title: "Financial Freedom",
      nlp1Stat: "ca. 70%",
      nlp1StatLabel: "Savings",
      nlp1Text: "Imagine: The monthly electricity bill that burdened you every month shrinks to a fraction. After 5-7 years you have your investment back - after that it's pure profit. Every month more money for what really matters.",
      nlp2Title: "Complete Independence",
      nlp2Stat: "24/7",
      nlp2StatLabel: "Energy",
      nlp2Text: "Power outages? Don't affect you anymore. Price increases? Barely touch you now. You produce your own energy, store it and use it whenever you want. That's real freedom.",
      nlp3Title: "Value Increase",
      nlp3Stat: "+15%",
      nlp3StatLabel: "Property Value",
      nlp3Text: "Your home becomes more valuable. A villa with complete energy system is significantly more attractive on the real estate market. Your investment pays off double.",
      nlp4Title: "Worry-Free Future",
      nlp4Stat: "10 Years",
      nlp4StatLabel: "Warranty",
      nlp4Text: "We stand behind our word. 10 years comprehensive warranty means: You can sit back and enjoy your comfortable home. If there are problems, we're there immediately.",
      
      synergyTitle: "Why 4-in-1 is Better Than Individual Solutions",
      synergySubtitle: "The components work together like an orchestra",
      synergy1Title: "Perfect Synergy",
      synergy1Text: "Solar, heat pump, climate and storage are coordinated. They communicate with each other and automatically optimize energy flow. The result: maximum efficiency, minimum consumption.",
      synergy2Title: "One Contact Person",
      synergy2Text: "No back and forth between different companies. One phone number, one technician who knows everything. For questions or problems you know exactly who to call - and we respond quickly.",
      synergy3Title: "Optimized Costs",
      synergy3Text: "Buying separately costs more. We plan, deliver and install everything from one source - that saves time, nerves and up to 20% compared to individual purchases.",
      synergy4Title: "Future-Proof",
      synergy4Text: "The system grows with your needs. More storage? Larger solar system? Easily expandable. You invest once correctly - and are prepared for the future.",
      
      faqTitle: "Frequently Asked Questions About the 4-in-1 System",
      faq1Q: "How long does the complete 4-in-1 system installation take?",
      faq1A: "Installation typically takes 3-5 business days, depending on the size of your villa. We plan everything to minimize disruption. Upon completion, we walk you through the entire system and answer all questions.",
      faq2Q: "Does the system work during power outages?",
      faq2A: "Yes! That's exactly what the Samsung battery storage is for. During a power outage, the system automatically switches to island mode. You continue to have power - for refrigerator, air conditioning, lighting and all important devices.",
      faq3Q: "How high are the actual savings?",
      faq3A: "In the Mediterranean region, our customers save an average of 60-70% on their energy costs. For a typical villa in Antalya, that means about 800-1,200 EUR per year. The exact savings depend on your consumption - we calculate this individually for you.",
      faq4Q: "How much does a complete 4-in-1 system cost for my villa?",
      faq4A: "For a typical 200m² villa, our systems start at approximately 31,200 EUR (without guarantee). The exact price depends on factors like roof area, desired output and storage size. We prepare an individual offer for you after the free on-site analysis.",
      faq5Q: "Why German quality? What's the difference?",
      faq5A: "German engineering stands for precision, durability and reliability. We only use premium brands like Vaillant and Samsung, work according to DIN standards and offer 10 years warranty. Our systems last 25+ years - while cheap alternatives often have problems after 5 years.",
    },
    ru: {
      badge: "089 Bayern 4-in-1 German System",
      title: "089 Bayern",
      titleHighlight: "4-in-1 German System",
      subtitle: "089 Bayern 4-in-1 German System: Солнечная панель, тепловой насос, умный климат и накопитель энергии - четыре решения в одной инвестиции. Немецкое качество на Средиземноморье.",
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
      
      nlpTitle: "Что вы действительно получаете",
      nlpSubtitle: "Больше чем технология - настоящее качество жизни",
      nlp1Title: "Финансовая свобода",
      nlp1Stat: "ок. 70%",
      nlp1StatLabel: "Экономия",
      nlp1Text: "Представьте: Ежемесячный счёт за электричество, который давил на вас каждый месяц, уменьшается в разы. Через 5-7 лет вы вернёте свои инвестиции - после этого чистая прибыль. Каждый месяц больше денег на то, что действительно важно.",
      nlp2Title: "Полная независимость",
      nlp2Stat: "24/7",
      nlp2StatLabel: "Энергия",
      nlp2Text: "Отключения электричества? Больше не касаются вас. Повышение цен? Едва ли затрагивают. Вы производите свою энергию, храните её и используете когда хотите. Это настоящая свобода.",
      nlp3Title: "Рост стоимости",
      nlp3Stat: "+15%",
      nlp3StatLabel: "Стоимость недвижимости",
      nlp3Text: "Ваш дом становится дороже. Вилла с полной энергосистемой значительно привлекательнее на рынке недвижимости. Ваши инвестиции окупаются вдвойне.",
      nlp4Title: "Беззаботное будущее",
      nlp4Stat: "10 лет",
      nlp4StatLabel: "Гарантия",
      nlp4Text: "Мы стоим за свои слова. 10 лет комплексной гарантии означает: Вы можете расслабиться и наслаждаться комфортным домом. При проблемах мы сразу на месте.",
      
      synergyTitle: "Почему 4-в-1 лучше отдельных решений",
      synergySubtitle: "Компоненты работают вместе как оркестр",
      synergy1Title: "Идеальная синергия",
      synergy1Text: "Солнечные панели, тепловой насос, климат и накопитель согласованы. Они общаются друг с другом и автоматически оптимизируют поток энергии. Результат: максимальная эффективность, минимальное потребление.",
      synergy2Title: "Один контакт",
      synergy2Text: "Никаких переговоров между разными компаниями. Один номер телефона, один техник, который знает всё. При вопросах или проблемах вы точно знаете, кому звонить - и мы быстро реагируем.",
      synergy3Title: "Оптимизированные расходы",
      synergy3Text: "Покупать отдельно дороже. Мы планируем, доставляем и устанавливаем всё из одного источника - это экономит время, нервы и до 20% по сравнению с отдельными покупками.",
      synergy4Title: "Готовность к будущему",
      synergy4Text: "Система растёт вместе с вашими потребностями. Больше хранения? Большая солнечная система? Легко расширяется. Вы инвестируете один раз правильно - и готовы к будущему.",
      
      faqTitle: "Частые вопросы о системе 4-в-1",
      faq1Q: "Сколько длится установка полной системы 4-в-1?",
      faq1A: "Установка обычно занимает 3-5 рабочих дней в зависимости от размера вашей виллы. Мы планируем всё так, чтобы минимально беспокоить вас. По завершении мы проведём вас по всей системе и ответим на все вопросы.",
      faq2Q: "Работает ли система при отключении электричества?",
      faq2A: "Да! Именно для этого и нужен аккумулятор Samsung. При отключении система автоматически переключается в автономный режим. У вас по-прежнему есть электричество - для холодильника, кондиционера, освещения и всех важных приборов.",
      faq3Q: "Какова реальная экономия?",
      faq3A: "В Средиземноморье наши клиенты экономят в среднем 60-70% расходов на энергию. Для типичной виллы в Анталии это означает около 800-1200 EUR в год. Точная экономия зависит от вашего потребления - мы рассчитаем это индивидуально для вас.",
      faq4Q: "Сколько стоит полная система 4-в-1 для моей виллы?",
      faq4A: "Для типичной виллы 200м² наши системы начинаются примерно от 31200 EUR (без гарантии цены). Точная цена зависит от площади крыши, желаемой мощности и размера накопителя. Мы подготовим индивидуальное предложение после бесплатного анализа на месте.",
      faq5Q: "Почему немецкое качество? В чём разница?",
      faq5A: "Немецкая инженерия означает точность, долговечность и надёжность. Мы используем только премиальные бренды как Vaillant и Samsung, работаем по DIN-стандартам и предлагаем 10 лет гарантии. Наши системы служат 25+ лет - в то время как дешёвые альтернативы часто имеют проблемы через 5 лет.",
    },
    uk: {
      badge: "089 Bayern 4-in-1 German System",
      title: "089 Bayern",
      titleHighlight: "4-in-1 German System",
      subtitle: "089 Bayern 4-in-1 German System: Сонячна панель, тепловий насос, розумний клімат та накопичувач енергії - чотири рішення в одній інвестиції. Німецька якість на Середземномор'ї.",
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
      
      nlpTitle: "Що ви насправді отримуєте",
      nlpSubtitle: "Більше ніж технологія - справжня якість життя",
      nlp1Title: "Фінансова свобода",
      nlp1Stat: "бл. 70%",
      nlp1StatLabel: "Економія",
      nlp1Text: "Уявіть: Щомісячний рахунок за електрику, який тиснув на вас кожного місяця, зменшується в рази. Через 5-7 років ви повернете свої інвестиції - після цього чистий прибуток. Щомісяця більше грошей на те, що справді важливо.",
      nlp2Title: "Повна незалежність",
      nlp2Stat: "24/7",
      nlp2StatLabel: "Енергія",
      nlp2Text: "Відключення електрики? Більше не стосуються вас. Підвищення цін? Ледве торкаються. Ви виробляєте свою енергію, зберігаєте її та використовуєте коли хочете. Це справжня свобода.",
      nlp3Title: "Зростання вартості",
      nlp3Stat: "+15%",
      nlp3StatLabel: "Вартість нерухомості",
      nlp3Text: "Ваш дім стає дорожчим. Вілла з повною енергосистемою значно привабливіша на ринку нерухомості. Ваші інвестиції окупаються вдвічі.",
      nlp4Title: "Безтурботне майбутнє",
      nlp4Stat: "10 років",
      nlp4StatLabel: "Гарантія",
      nlp4Text: "Ми стоїмо за свої слова. 10 років комплексної гарантії означає: Ви можете розслабитися та насолоджуватися комфортним домом. При проблемах ми одразу на місці.",
      
      synergyTitle: "Чому 4-в-1 краще окремих рішень",
      synergySubtitle: "Компоненти працюють разом як оркестр",
      synergy1Title: "Ідеальна синергія",
      synergy1Text: "Сонячні панелі, тепловий насос, клімат та накопичувач узгоджені. Вони спілкуються один з одним та автоматично оптимізують потік енергії. Результат: максимальна ефективність, мінімальне споживання.",
      synergy2Title: "Один контакт",
      synergy2Text: "Ніяких переговорів між різними компаніями. Один номер телефону, один технік, який знає все. При питаннях або проблемах ви точно знаєте, кому дзвонити - і ми швидко реагуємо.",
      synergy3Title: "Оптимізовані витрати",
      synergy3Text: "Купувати окремо дорожче. Ми плануємо, доставляємо та встановлюємо все з одного джерела - це економить час, нерви та до 20% порівняно з окремими покупками.",
      synergy4Title: "Готовність до майбутнього",
      synergy4Text: "Система росте разом з вашими потребами. Більше сховища? Більша сонячна система? Легко розширюється. Ви інвестуєте один раз правильно - і готові до майбутнього.",
      
      faqTitle: "Часті питання про систему 4-в-1",
      faq1Q: "Скільки триває встановлення повної системи 4-в-1?",
      faq1A: "Встановлення зазвичай займає 3-5 робочих днів залежно від розміру вашої вілли. Ми плануємо все так, щоб мінімально турбувати вас. По завершенні ми проведемо вас по всій системі та відповімо на всі питання.",
      faq2Q: "Чи працює система при відключенні електрики?",
      faq2A: "Так! Саме для цього і потрібен акумулятор Samsung. При відключенні система автоматично переключається в автономний режим. У вас все ще є електрика - для холодильника, кондиціонера, освітлення та всіх важливих приладів.",
      faq3Q: "Яка реальна економія?",
      faq3A: "У Середземномор'ї наші клієнти економлять в середньому 60-70% витрат на енергію. Для типової вілли в Анталії це означає близько 800-1200 EUR на рік. Точна економія залежить від вашого споживання - ми розрахуємо це індивідуально для вас.",
      faq4Q: "Скільки коштує повна система 4-в-1 для моєї вілли?",
      faq4A: "Для типової вілли 200м² наші системи починаються приблизно від 31200 EUR (без гарантії ціни). Точна ціна залежить від площі даху, бажаної потужності та розміру накопичувача. Ми підготуємо індивідуальну пропозицію після безкоштовного аналізу на місці.",
      faq5Q: "Чому німецька якість? У чому різниця?",
      faq5A: "Німецька інженерія означає точність, довговічність та надійність. Ми використовуємо тільки преміальні бренди як Vaillant та Samsung, працюємо за DIN-стандартами та пропонуємо 10 років гарантії. Наші системи служать 25+ років - тоді як дешеві альтернативи часто мають проблеми через 5 років.",
    },
    ar: {
      badge: "089 Bayern 4-in-1 German System",
      title: "089 Bayern",
      titleHighlight: "4-in-1 German System",
      subtitle: "089 Bayern 4-in-1 German System: لوحة شمسية، مضخة حرارية، مناخ ذكي وتخزين طاقة - أربعة حلول في استثمار واحد. جودة ألمانية في البحر المتوسط.",
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
      
      nlpTitle: "ما تكسبه حقاً",
      nlpSubtitle: "أكثر من مجرد تقنية - جودة حياة حقيقية",
      nlp1Title: "الحرية المالية",
      nlp1Stat: "حوالي 70%",
      nlp1StatLabel: "توفير",
      nlp1Text: "تخيل: فاتورة الكهرباء الشهرية التي كانت تثقل كاهلك كل شهر تتقلص إلى جزء بسيط. بعد 5-7 سنوات تسترد استثمارك - بعد ذلك ربح صاف. كل شهر المزيد من المال لما يهم حقاً.",
      nlp2Title: "استقلال تام",
      nlp2Stat: "24/7",
      nlp2StatLabel: "طاقة",
      nlp2Text: "انقطاع الكهرباء؟ لم يعد يؤثر عليك. ارتفاع الأسعار؟ بالكاد يلمسك الآن. أنت تنتج طاقتك الخاصة، تخزنها وتستخدمها متى شئت. هذه هي الحرية الحقيقية.",
      nlp3Title: "زيادة القيمة",
      nlp3Stat: "+15%",
      nlp3StatLabel: "قيمة العقار",
      nlp3Text: "منزلك يصبح أكثر قيمة. فيلا مع نظام طاقة كامل أكثر جاذبية بشكل ملحوظ في سوق العقارات. استثمارك يؤتي ثماره مرتين.",
      nlp4Title: "مستقبل بلا قلق",
      nlp4Stat: "10 سنوات",
      nlp4StatLabel: "ضمان",
      nlp4Text: "نقف وراء كلمتنا. 10 سنوات ضمان شامل يعني: يمكنك الاسترخاء والاستمتاع بمنزلك المريح. عند وجود مشاكل نكون هناك فوراً.",
      
      synergyTitle: "لماذا 4-في-1 أفضل من الحلول المنفردة",
      synergySubtitle: "المكونات تعمل معاً كأوركسترا",
      synergy1Title: "تناغم مثالي",
      synergy1Text: "الطاقة الشمسية، المضخة الحرارية، المناخ والتخزين منسقة. تتواصل مع بعضها وتحسن تدفق الطاقة تلقائياً. النتيجة: أقصى كفاءة، أدنى استهلاك.",
      synergy2Title: "جهة اتصال واحدة",
      synergy2Text: "لا تنقل بين شركات مختلفة. رقم هاتف واحد، فني واحد يعرف كل شيء. عند الأسئلة أو المشاكل تعرف بالضبط من تتصل - ونستجيب بسرعة.",
      synergy3Title: "تكاليف محسنة",
      synergy3Text: "الشراء بشكل منفصل يكلف أكثر. نخطط ونوصل ونركب كل شيء من مصدر واحد - هذا يوفر الوقت والأعصاب وحتى 20% مقارنة بالمشتريات المنفردة.",
      synergy4Title: "جاهز للمستقبل",
      synergy4Text: "النظام ينمو مع احتياجاتك. المزيد من التخزين؟ نظام شمسي أكبر؟ قابل للتوسع بسهولة. تستثمر مرة واحدة بشكل صحيح - وتكون مستعداً للمستقبل.",
      
      faqTitle: "أسئلة متكررة حول نظام 4-في-1",
      faq1Q: "كم يستغرق تركيب نظام 4-في-1 الكامل؟",
      faq1A: "التركيب يستغرق عادة 3-5 أيام عمل حسب حجم فيلتك. نخطط كل شيء لتقليل الإزعاج. عند الانتهاء نرشدك عبر النظام بأكمله ونجيب على جميع الأسئلة.",
      faq2Q: "هل يعمل النظام أثناء انقطاع الكهرباء؟",
      faq2A: "نعم! هذا بالضبط ما تخزين البطارية Samsung مخصص له. أثناء انقطاع الكهرباء يتحول النظام تلقائياً إلى وضع الجزيرة. لا يزال لديك كهرباء - للثلاجة، التكييف، الإضاءة وجميع الأجهزة المهمة.",
      faq3Q: "ما هو التوفير الفعلي؟",
      faq3A: "في منطقة البحر المتوسط يوفر عملاؤنا في المتوسط 60-70% من تكاليف الطاقة. لفيلا نموذجية في أنطاليا هذا يعني حوالي 800-1200 يورو سنوياً. التوفير الدقيق يعتمد على استهلاكك - نحسب هذا بشكل فردي لك.",
      faq4Q: "كم يكلف نظام 4-في-1 الكامل لفيلتي؟",
      faq4A: "لفيلا نموذجية 200م² تبدأ أنظمتنا من حوالي 31,200 يورو (بدون ضمان السعر). السعر الدقيق يعتمد على عوامل مثل مساحة السطح والقدرة المطلوبة وحجم التخزين. نعد عرضاً فردياً لك بعد التحليل المجاني في الموقع.",
      faq5Q: "لماذا الجودة الألمانية؟ ما الفرق؟",
      faq5A: "الهندسة الألمانية تعني الدقة والمتانة والموثوقية. نستخدم فقط العلامات التجارية المتميزة مثل Vaillant وSamsung، نعمل وفق معايير DIN ونقدم 10 سنوات ضمان. أنظمتنا تدوم 25+ سنة - بينما البدائل الرخيصة غالباً ما تواجه مشاكل بعد 5 سنوات.",
    },
  };

  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

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
      image: climateInstallImage,
      imageAlt: "Samsung WindFree klima iç ve dış ünite profesyonel montajı Antalya villasında enerji verimli soğutma ısıtma sistemi kurulumu",
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
      image: heatpumpInstallImage,
      imageAlt: "Vaillant aroTHERM ısı pompası dış ünite kurulumu Akdeniz villasında profesyonel montaj kış ısıtma yaz soğutma sistemi",
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
      image: solarInstallImage,
      imageAlt: "Villa çatısına profesyonel güneş paneli montajı Antalya 6 kWp 10 kWp photovoltaik sistem kurulumu Akdeniz bölgesi",
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
      image: batteryInstallImage,
      imageAlt: "Lityum iyon batarya depolama sistemi kurulumu villa enerji depolama 10 kWh 15 kWh güneş enerjisi gece kullanımı",
    },
  ];

  const advantages = [
    { icon: Zap, title: c.advantage1, desc: c.advantage1Desc },
    { icon: ThumbsUp, title: c.advantage2, desc: c.advantage2Desc },
    { icon: Shield, title: c.advantage3, desc: c.advantage3Desc },
    { icon: Clock, title: c.advantage4, desc: c.advantage4Desc },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-systeme">
      <SEOHead page="systeme" />
      <Header onCtaClick={goToContact} />
      
      <section className="relative pt-16 sm:pt-20 pb-2 overflow-hidden" data-testid="section-systeme-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 sm:mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {c.badge}
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              {c.title}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                {c.titleHighlight}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8">
              {c.subtitle}
            </p>
            
            <div className="flex flex-col gap-3 items-center">
              <Button 
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg px-8"
                data-testid="button-systeme-cta"
              >
                {c.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
              <div className="flex flex-row gap-2 flex-wrap justify-center">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-red-400/50 text-white bg-red-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "tel:+905071832036"}
                  data-testid="button-systeme-phone-tr"
                >
                  <Phone className={`w-3 h-3 ${isRtl ? "ml-1" : "mr-1"}`} />
                  TR +90 507 183 2036
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-amber-400/50 text-white bg-black/30 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "tel:+491735994699"}
                  data-testid="button-systeme-phone-de"
                >
                  <Phone className={`w-3 h-3 ${isRtl ? "ml-1" : "mr-1"}`} />
                  DE +49 173 5994699
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-green-400/50 text-white bg-green-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.open("https://wa.me/491735994699", "_blank")}
                  data-testid="button-systeme-whatsapp"
                >
                  WhatsApp
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-blue-400/50 text-white bg-blue-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "mailto:info@089bayern.com"}
                  data-testid="button-systeme-email"
                >
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-background" data-testid="section-work-gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl mx-auto max-w-4xl w-full">
              <img 
                src={systemPresentationImage} 
                alt="089 Bayern 4'ü 1 arada enerji sistemi sunumu Antalya - Alman kalitesi güneş paneli Vaillant ısı pompası Samsung klima batarya depolama Türkiye" 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                data-testid="img-team-meeting"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-5 bg-muted/30" data-testid="section-why-integrated">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{c.whyTitle}</h2>
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

      <section className="py-4 md:py-5 bg-background" data-testid="section-features-detail">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              {t.features.badge}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
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
                className="overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/80"
                data-testid={`card-system-${index}`}
              >
                <div className="rounded-t-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.imageAlt}
                    className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    data-testid={`img-system-${index}`}
                  />
                </div>
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
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 border-0"
                data-testid="button-systeme-cta-bottom"
              >
                {c.ctaButton}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          <SectionCTA />
        </div>
      </section>

      {/* NLP Benefits Section */}
      <section className="py-16 md:py-20 bg-muted/30" data-testid="section-nlp-benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              {c.nlpTitle}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {c.nlpTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {c.nlpSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Wallet, title: c.nlp1Title, stat: c.nlp1Stat, statLabel: c.nlp1StatLabel, text: c.nlp1Text, gradient: "from-emerald-500 to-green-600" },
              { icon: Zap, title: c.nlp2Title, stat: c.nlp2Stat, statLabel: c.nlp2StatLabel, text: c.nlp2Text, gradient: "from-amber-500 to-orange-500" },
              { icon: Home, title: c.nlp3Title, stat: c.nlp3Stat, statLabel: c.nlp3StatLabel, text: c.nlp3Text, gradient: "from-blue-500 to-indigo-600" },
              { icon: Shield, title: c.nlp4Title, stat: c.nlp4Stat, statLabel: c.nlp4StatLabel, text: c.nlp4Text, gradient: "from-purple-500 to-violet-600" },
            ].map((item, index) => (
              <Card key={index} className="border-border/50" data-testid={`card-nlp-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <Badge variant="secondary" className={`bg-gradient-to-r ${item.gradient} text-white border-0`}>
                          {item.stat} {item.statLabel}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-16 md:py-20 bg-background" data-testid="section-synergy">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {c.synergyTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {c.synergySubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Settings, title: c.synergy1Title, text: c.synergy1Text },
              { icon: Users, title: c.synergy2Title, text: c.synergy2Text },
              { icon: Wallet, title: c.synergy3Title, text: c.synergy3Text },
              { icon: Zap, title: c.synergy4Title, text: c.synergy4Text },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4" data-testid={`synergy-item-${index}`}>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-muted/30" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {c.faqTitle}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: c.faq1Q, a: c.faq1A },
              { q: c.faq2Q, a: c.faq2A },
              { q: c.faq3Q, a: c.faq3A },
              { q: c.faq4Q, a: c.faq4A },
              { q: c.faq5Q, a: c.faq5A },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-lg border border-border/50 px-6" data-testid={`faq-item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              {language === "de" ? "Haben Sie weitere Fragen? Wir sind für Sie da." :
               language === "tr" ? "Başka sorularınız mı var? Sizin için buradayız." :
               language === "en" ? "Have more questions? We're here for you." :
               language === "ru" ? "Есть ещё вопросы? Мы здесь для вас." :
               language === "uk" ? "Є ще питання? Ми тут для вас." :
               "هل لديك المزيد من الأسئلة؟ نحن هنا من أجلك."}
            </p>
            <Button 
              onClick={goToContact}
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 border-0"
              data-testid="button-faq-cta"
            >
              {c.ctaButton}
              <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
          </div>
        </div>
      </section>

      <TrustCallToAction />
      <CrossLinks currentPage="systeme" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
