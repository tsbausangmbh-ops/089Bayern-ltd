import { useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface SEOHeadProps {
  page: "home" | "systeme" | "vorteile" | "rechner" | "faq" | "ueber-uns" | "team" | "legal";
  pageTitle?: string;
}

const seoData = {
  tr: {
    siteName: "089 Bayern Enerji Sistemleri",
    home: {
      title: "089 Bayern | Antalya Güneş Enerjisi & Isı Pompası | Alman 4'ü 1 Arada Sistem",
      description: "Antalya, Alanya, Kemer, Belek, Side, Manavgat'ta güneş paneli, ısı pompası, klima ve enerji depolama. Alman mühendisliği ile %70 enerji tasarrufu. Vaillant & Samsung yetkili bayii. Ücretsiz keşif: +90 507 183 2036",
      keywords: "güneş paneli antalya, ısı pompası alanya, solar panel kemer, güneş enerjisi belek, wärmepumpe side, photovoltaik manavgat, 089 bayern, alman enerji sistemi türkiye, villa güneş enerjisi akdeniz"
    },
    systeme: {
      title: "4'ü 1 Arada Alman Enerji Sistemi | Güneş + Isı Pompası + Klima + Batarya | 089 Bayern Antalya",
      description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepompa, Samsung klima ve lityum batarya tek sistemde. Antalya, Alanya, Kemer'de kurulum. 10 yıl garanti, Alman DIN standartları.",
      keywords: "4 in 1 enerji sistemi, güneş paneli ısı pompası entegre, hibrit enerji sistemi antalya, wärmepumpe türkei, photovoltaik akdeniz, villa enerji çözümü"
    },
    vorteile: {
      title: "10 Ay Ücretsiz Enerji Avantajları | Antalya Güneş Enerjisi Tasarrufu | 089 Bayern",
      description: "Akdeniz'in 300+ güneşli günü ile yılda 10 ay ücretsiz elektrik ve ısınma. Antalya, Alanya, Side'da %70 enerji tasarrufu. 4-6 yıl geri ödeme süresi. Ücretsiz hesaplama yapın.",
      keywords: "enerji tasarrufu antalya, güneş enerjisi avantajları, ücretsiz elektrik akdeniz, ısı pompası tasarruf, solar panel yatırım getirisi"
    },
    rechner: {
      title: "Enerji Tasarruf Hesaplayıcı | Antalya Güneş Paneli Fiyat Hesaplama | 089 Bayern",
      description: "Antalya, Alanya, Kemer, Side için kişiselleştirilmiş enerji tasarrufu hesabı. Villa m² ve konuma göre güneş paneli, ısı pompası maliyeti ve tasarruf hesaplama. Ücretsiz teklif alın.",
      keywords: "güneş paneli fiyat hesaplama, enerji tasarrufu hesaplayıcı, solar panel maliyet antalya, ısı pompası fiyat alanya"
    },
    faq: {
      title: "Sıkça Sorulan Sorular | Güneş Enerjisi & Isı Pompası | 089 Bayern Antalya",
      description: "Antalya'da güneş paneli kurulumu, ısı pompası bakımı, enerji depolama ve 089 Bayern 4-in-1 sistem hakkında en çok sorulan 20 soru ve uzman cevapları.",
      keywords: "güneş paneli soru cevap, ısı pompası nasıl çalışır, solar panel bakım, enerji depolama türkiye, 089 bayern destek"
    },
    "ueber-uns": {
      title: "Hakkımızda | München'den Antalya'ya Alman Enerji Uzmanları | 089 Bayern",
      description: "089 Bayern: 2018'den beri Almanya-Türkiye köprüsü. München'den Antalya, Alanya, Akdeniz bölgesine Alman kalitesi enerji sistemleri. 500+ mutlu aile, 10 yıl garanti.",
      keywords: "089 bayern hakkında, alman enerji şirketi türkiye, güneş enerjisi uzmanı antalya, münchen antalya enerji"
    },
    team: {
      title: "Ekibimiz | Alman-Türk Enerji Uzmanları | 089 Bayern Antalya",
      description: "089 Bayern ekibi: Dalibor Bakmaz ve Mustafa Sakar liderliğinde Alman mühendislik kalitesi. Antalya, Alanya, Muğla'da profesyonel enerji danışmanlığı.",
      keywords: "089 bayern ekip, enerji danışmanı antalya, güneş paneli uzmanı alanya"
    },
    legal: {
      title: "Yasal Bilgiler | 089 Bayern Enerji Sistemleri",
      description: "089 Bayern yasal politikalar: KVKK, gizlilik politikası, çerez politikası, kullanım şartları ve mesafeli satış sözleşmesi.",
      keywords: "089 bayern kvkk, gizlilik politikası, kullanım şartları"
    }
  },
  de: {
    siteName: "089 Bayern Energiesysteme",
    home: {
      title: "089 Bayern | Solaranlage & Wärmepumpe Antalya | Deutsches 4-in-1 System Türkei",
      description: "Solaranlage, Wärmepumpe, Klimaanlage und Stromspeicher in Antalya, Alanya, Kemer, Belek, Side, Manavgat. Deutsche Ingenieursqualität mit bis zu 70% Energieeinsparung. Kostenlose Beratung: +90 507 183 2036",
      keywords: "solaranlage antalya, wärmepumpe türkei, photovoltaik mittelmeer, solar panel alanya, deutsche energiesysteme türkei, villa solaranlage, 089 bayern"
    },
    systeme: {
      title: "4-in-1 Deutsches Energiesystem | Solar + Wärmepumpe + Klima + Batterie | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Photovoltaik, Wärmepumpe, Samsung Klimaanlage und Lithium-Batterie in einem System. Installation in Antalya, Alanya, Kemer. 10 Jahre Garantie nach DIN-Standards.",
      keywords: "4 in 1 energiesystem, solar wärmepumpe integration, hybrides energiesystem, deutsches energiesystem türkei"
    },
    vorteile: {
      title: "10 Monate Kostenlose Energie | Vorteile Solaranlage Antalya | 089 Bayern",
      description: "Mit 300+ Sonnentagen am Mittelmeer 10 Monate kostenloser Strom und Heizung. Bis zu 70% Energieeinsparung in Antalya, Alanya, Side. Amortisation in 4-6 Jahren.",
      keywords: "energieeinsparung antalya, solaranlage vorteile türkei, kostenloser strom mittelmeer, wärmepumpe ersparnis"
    },
    rechner: {
      title: "Einsparungsrechner | Solaranlage Kosten Antalya | 089 Bayern",
      description: "Personalisierte Energieeinsparungsberechnung für Antalya, Alanya, Kemer, Side. Solaranlage und Wärmepumpe Kosten nach Villa m² und Standort. Kostenloses Angebot.",
      keywords: "solaranlage kosten rechner, energieeinsparung berechnen, solar preis antalya, wärmepumpe kosten türkei"
    },
    faq: {
      title: "Häufige Fragen | Solaranlage & Wärmepumpe | 089 Bayern Antalya",
      description: "Die 20 häufigsten Fragen zu Solaranlagen, Wärmepumpen, Energiespeicher und dem 089 Bayern 4-in-1 System in Antalya beantwortet von unseren Experten.",
      keywords: "solaranlage fragen antworten, wärmepumpe faq, solar panel wartung, energiespeicher türkei"
    },
    "ueber-uns": {
      title: "Über Uns | Deutsche Energieexperten in Antalya | 089 Bayern",
      description: "089 Bayern: Seit 2018 die Brücke zwischen Deutschland und der Türkei. Deutsche Qualität für Antalya, Alanya und die Mittelmeerregion. 500+ zufriedene Familien, 10 Jahre Garantie.",
      keywords: "089 bayern über uns, deutsches unternehmen türkei, solarexperten antalya, münchen antalya energie"
    },
    team: {
      title: "Unser Team | Deutsch-Türkische Energieexperten | 089 Bayern",
      description: "Das 089 Bayern Team: Unter der Leitung von Dalibor Bakmaz und Mustafa Sakar. Deutsche Ingenieursqualität in Antalya, Alanya, Muğla.",
      keywords: "089 bayern team, energieberater antalya, solarexperten alanya"
    },
    legal: {
      title: "Rechtliche Informationen | 089 Bayern Energiesysteme",
      description: "089 Bayern rechtliche Richtlinien: Datenschutz, Cookie-Richtlinie, AGB und Fernabsatzvertrag.",
      keywords: "089 bayern datenschutz, agb, impressum"
    }
  },
  en: {
    siteName: "089 Bayern Energy Systems",
    home: {
      title: "089 Bayern | Solar Panels & Heat Pump Antalya Turkey | German 4-in-1 System",
      description: "Solar panels, heat pumps, air conditioning and battery storage in Antalya, Alanya, Kemer, Belek, Side, Manavgat Turkey. German engineering with up to 70% energy savings. Free consultation: +90 507 183 2036",
      keywords: "solar panels antalya, heat pump turkey, photovoltaic mediterranean, solar panel alanya, german energy systems turkey, villa solar power, 089 bayern"
    },
    systeme: {
      title: "4-in-1 German Energy System | Solar + Heat Pump + AC + Battery | 089 Bayern Turkey",
      description: "089 Bayern 4-in-1 German System: Photovoltaic, heat pump, Samsung AC and lithium battery in one system. Installation in Antalya, Alanya, Kemer. 10-year warranty, German DIN standards.",
      keywords: "4 in 1 energy system, solar heat pump integration, hybrid energy system, german energy system turkey"
    },
    vorteile: {
      title: "10 Months Free Energy Benefits | Solar Panel Savings Antalya | 089 Bayern",
      description: "With 300+ sunny days in the Mediterranean, enjoy 10 months of free electricity and heating. Up to 70% energy savings in Antalya, Alanya, Side. 4-6 year payback period.",
      keywords: "energy savings antalya, solar panel benefits turkey, free electricity mediterranean, heat pump savings"
    },
    rechner: {
      title: "Energy Savings Calculator | Solar Panel Cost Antalya | 089 Bayern",
      description: "Personalized energy savings calculation for Antalya, Alanya, Kemer, Side. Solar panel and heat pump costs based on villa size and location. Free quote.",
      keywords: "solar panel cost calculator, energy savings calculator, solar price antalya, heat pump cost turkey"
    },
    faq: {
      title: "Frequently Asked Questions | Solar & Heat Pump | 089 Bayern Antalya",
      description: "Top 20 questions about solar panels, heat pumps, energy storage and the 089 Bayern 4-in-1 system in Antalya answered by our experts.",
      keywords: "solar panel faq, heat pump questions, solar maintenance, energy storage turkey"
    },
    "ueber-uns": {
      title: "About Us | German Energy Experts in Antalya | 089 Bayern",
      description: "089 Bayern: Since 2018, the bridge between Germany and Turkey. German quality for Antalya, Alanya and the Mediterranean region. 500+ happy families, 10-year warranty.",
      keywords: "089 bayern about us, german company turkey, solar experts antalya, munich antalya energy"
    },
    team: {
      title: "Our Team | German-Turkish Energy Experts | 089 Bayern",
      description: "The 089 Bayern Team: Led by Dalibor Bakmaz and Mustafa Sakar. German engineering quality in Antalya, Alanya, Muğla.",
      keywords: "089 bayern team, energy consultant antalya, solar experts alanya"
    },
    legal: {
      title: "Legal Information | 089 Bayern Energy Systems",
      description: "089 Bayern legal policies: Privacy policy, cookie policy, terms of use and distance sales agreement.",
      keywords: "089 bayern privacy, terms, legal"
    }
  },
  ru: {
    siteName: "089 Bayern Энергосистемы",
    home: {
      title: "089 Bayern | Солнечные Панели и Тепловой Насос Анталия | Немецкая Система 4-в-1",
      description: "Солнечные панели, тепловые насосы, кондиционеры и накопители энергии в Анталии, Алании, Кемере, Белеке, Сиде, Манавгате. Немецкое качество с экономией до 70%. Бесплатная консультация: +90 507 183 2036",
      keywords: "солнечные панели анталия, тепловой насос турция, фотовольтаика средиземноморье, солнечная энергия алания, немецкие энергосистемы турция, 089 bayern"
    },
    systeme: {
      title: "Немецкая Система 4-в-1 | Солнечные + Тепловой Насос + Климат + Батарея | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Фотовольтаика, тепловой насос, кондиционер Samsung и литиевая батарея в одной системе. Монтаж в Анталии, Алании, Кемере. 10 лет гарантии.",
      keywords: "система 4 в 1, интеграция солнечная тепловой насос, гибридная энергосистема, немецкая система турция"
    },
    vorteile: {
      title: "10 Месяцев Бесплатной Энергии | Преимущества Солнечных Панелей Анталия | 089 Bayern",
      description: "С 300+ солнечными днями на Средиземноморье - 10 месяцев бесплатного электричества и отопления. До 70% экономии в Анталии, Алании, Сиде. Окупаемость 4-6 лет.",
      keywords: "экономия энергии анталия, преимущества солнечных панелей, бесплатное электричество средиземноморье"
    },
    rechner: {
      title: "Калькулятор Экономии | Стоимость Солнечных Панелей Анталия | 089 Bayern",
      description: "Персональный расчёт экономии для Анталии, Алании, Кемера, Сиде. Стоимость солнечных панелей и теплового насоса по размеру виллы. Бесплатное предложение.",
      keywords: "калькулятор стоимости солнечных панелей, расчёт экономии, цена солнечных панелей анталия"
    },
    faq: {
      title: "Частые Вопросы | Солнечные Панели и Тепловой Насос | 089 Bayern Анталия",
      description: "20 самых частых вопросов о солнечных панелях, тепловых насосах, накопителях энергии и системе 089 Bayern 4-in-1 в Анталии.",
      keywords: "вопросы о солнечных панелях, faq тепловой насос, обслуживание солнечных панелей"
    },
    "ueber-uns": {
      title: "О Нас | Немецкие Энергетические Эксперты в Анталии | 089 Bayern",
      description: "089 Bayern: С 2018 года мост между Германией и Турцией. Немецкое качество для Анталии, Алании и Средиземноморья. 500+ довольных семей, 10 лет гарантии.",
      keywords: "089 bayern о нас, немецкая компания турция, эксперты по солнечной энергии анталия"
    },
    team: {
      title: "Наша Команда | Немецко-Турецкие Энергетические Эксперты | 089 Bayern",
      description: "Команда 089 Bayern: Под руководством Далибора Бакмаза и Мустафы Сакара. Немецкое инженерное качество в Анталии, Алании, Мугле.",
      keywords: "команда 089 bayern, энергетический консультант анталия"
    },
    legal: {
      title: "Правовая Информация | 089 Bayern Энергосистемы",
      description: "Правовые политики 089 Bayern: Политика конфиденциальности, политика cookies, условия использования.",
      keywords: "089 bayern конфиденциальность, условия, правовая информация"
    }
  },
  uk: {
    siteName: "089 Bayern Енергосистеми",
    home: {
      title: "089 Bayern | Сонячні Панелі та Тепловий Насос Анталія | Німецька Система 4-в-1",
      description: "Сонячні панелі, теплові насоси, кондиціонери та накопичувачі енергії в Анталії, Аланії, Кемері, Белеку, Сіде, Манавгаті. Німецька якість з економією до 70%. Безкоштовна консультація: +90 507 183 2036",
      keywords: "сонячні панелі анталія, тепловий насос туреччина, фотовольтаїка середземномор'я, сонячна енергія аланія, німецькі енергосистеми туреччина, 089 bayern"
    },
    systeme: {
      title: "Німецька Система 4-в-1 | Сонячні + Тепловий Насос + Клімат + Батарея | 089 Bayern",
      description: "089 Bayern 4-in-1 German System: Фотовольтаїка, тепловий насос, кондиціонер Samsung та літієва батарея в одній системі. Монтаж в Анталії, Аланії, Кемері. 10 років гарантії.",
      keywords: "система 4 в 1, інтеграція сонячна тепловий насос, гібридна енергосистема, німецька система туреччина"
    },
    vorteile: {
      title: "10 Місяців Безкоштовної Енергії | Переваги Сонячних Панелей Анталія | 089 Bayern",
      description: "З 300+ сонячними днями на Середземномор'ї - 10 місяців безкоштовної електрики та опалення. До 70% економії в Анталії, Аланії, Сіде. Окупність 4-6 років.",
      keywords: "економія енергії анталія, переваги сонячних панелей, безкоштовна електрика середземномор'я"
    },
    rechner: {
      title: "Калькулятор Економії | Вартість Сонячних Панелей Анталія | 089 Bayern",
      description: "Персональний розрахунок економії для Анталії, Аланії, Кемера, Сіде. Вартість сонячних панелей та теплового насоса за розміром вілли. Безкоштовна пропозиція.",
      keywords: "калькулятор вартості сонячних панелей, розрахунок економії, ціна сонячних панелей анталія"
    },
    faq: {
      title: "Часті Питання | Сонячні Панелі та Тепловий Насос | 089 Bayern Анталія",
      description: "20 найчастіших питань про сонячні панелі, теплові насоси, накопичувачі енергії та систему 089 Bayern 4-in-1 в Анталії.",
      keywords: "питання про сонячні панелі, faq тепловий насос, обслуговування сонячних панелей"
    },
    "ueber-uns": {
      title: "Про Нас | Німецькі Енергетичні Експерти в Анталії | 089 Bayern",
      description: "089 Bayern: З 2018 року міст між Німеччиною та Туреччиною. Німецька якість для Анталії, Аланії та Середземномор'я. 500+ задоволених родин, 10 років гарантії.",
      keywords: "089 bayern про нас, німецька компанія туреччина, експерти з сонячної енергії анталія"
    },
    team: {
      title: "Наша Команда | Німецько-Турецькі Енергетичні Експерти | 089 Bayern",
      description: "Команда 089 Bayern: Під керівництвом Далібора Бакмаза та Мустафи Сакара. Німецька інженерна якість в Анталії, Аланії, Муглі.",
      keywords: "команда 089 bayern, енергетичний консультант анталія"
    },
    legal: {
      title: "Правова Інформація | 089 Bayern Енергосистеми",
      description: "Правові політики 089 Bayern: Політика конфіденційності, політика cookies, умови використання.",
      keywords: "089 bayern конфіденційність, умови, правова інформація"
    }
  },
  ar: {
    siteName: "089 Bayern أنظمة الطاقة",
    home: {
      title: "089 Bayern | الألواح الشمسية ومضخة الحرارة أنطاليا | نظام ألماني 4 في 1",
      description: "الألواح الشمسية، مضخات الحرارة، التكييف وتخزين الطاقة في أنطاليا، ألانيا، كيمير، بيليك، سيدا، مانافغات. جودة ألمانية مع توفير حتى 70%. استشارة مجانية: +90 507 183 2036",
      keywords: "الألواح الشمسية أنطاليا، مضخة حرارة تركيا، الطاقة الشمسية ألانيا، أنظمة الطاقة الألمانية تركيا، 089 bayern"
    },
    systeme: {
      title: "نظام ألماني 4 في 1 | شمسي + مضخة حرارة + تكييف + بطارية | 089 Bayern",
      description: "نظام 089 Bayern 4-in-1: الخلايا الكهروضوئية، مضخة الحرارة، تكييف Samsung وبطارية ليثيوم في نظام واحد. التركيب في أنطاليا، ألانيا، كيمير. ضمان 10 سنوات.",
      keywords: "نظام 4 في 1، تكامل الطاقة الشمسية مضخة الحرارة، نظام طاقة هجين، نظام ألماني تركيا"
    },
    vorteile: {
      title: "10 أشهر طاقة مجانية | فوائد الألواح الشمسية أنطاليا | 089 Bayern",
      description: "مع 300+ يوم مشمس في البحر المتوسط - 10 أشهر من الكهرباء والتدفئة المجانية. توفير حتى 70% في أنطاليا، ألانيا، سيدا. فترة استرداد 4-6 سنوات.",
      keywords: "توفير الطاقة أنطاليا، فوائد الألواح الشمسية، كهرباء مجانية البحر المتوسط"
    },
    rechner: {
      title: "حاسبة التوفير | تكلفة الألواح الشمسية أنطاليا | 089 Bayern",
      description: "حساب توفير الطاقة المخصص لأنطاليا، ألانيا، كيمير، سيدا. تكلفة الألواح الشمسية ومضخة الحرارة حسب حجم الفيلا. عرض مجاني.",
      keywords: "حاسبة تكلفة الألواح الشمسية، حساب التوفير، سعر الألواح الشمسية أنطاليا"
    },
    faq: {
      title: "الأسئلة الشائعة | الألواح الشمسية ومضخة الحرارة | 089 Bayern أنطاليا",
      description: "أكثر 20 سؤالاً شيوعاً حول الألواح الشمسية، مضخات الحرارة، تخزين الطاقة ونظام 089 Bayern 4-in-1 في أنطاليا.",
      keywords: "أسئلة الألواح الشمسية، أسئلة مضخة الحرارة، صيانة الألواح الشمسية"
    },
    "ueber-uns": {
      title: "عنا | خبراء الطاقة الألمان في أنطاليا | 089 Bayern",
      description: "089 Bayern: منذ 2018 الجسر بين ألمانيا وتركيا. جودة ألمانية لأنطاليا، ألانيا ومنطقة البحر المتوسط. 500+ عائلة سعيدة، ضمان 10 سنوات.",
      keywords: "089 bayern عنا، شركة ألمانية تركيا، خبراء الطاقة الشمسية أنطاليا"
    },
    team: {
      title: "فريقنا | خبراء الطاقة الألمان-الأتراك | 089 Bayern",
      description: "فريق 089 Bayern: بقيادة داليبور باكماز ومصطفى ساكار. جودة هندسية ألمانية في أنطاليا، ألانيا، موغلا.",
      keywords: "فريق 089 bayern، مستشار الطاقة أنطاليا"
    },
    legal: {
      title: "المعلومات القانونية | 089 Bayern أنظمة الطاقة",
      description: "السياسات القانونية لـ 089 Bayern: سياسة الخصوصية، سياسة ملفات تعريف الارتباط، شروط الاستخدام.",
      keywords: "089 bayern الخصوصية، الشروط، المعلومات القانونية"
    }
  }
};

export default function SEOHead({ page, pageTitle }: SEOHeadProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const data = seoData[language]?.[page] || seoData.tr[page];
    const siteName = seoData[language]?.siteName || seoData.tr.siteName;
    
    if (data) {
      document.title = pageTitle || data.title;
      
      const updateMetaTag = (name: string, content: string, property = false) => {
        const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        let meta = document.querySelector(selector) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          if (property) {
            meta.setAttribute('property', name);
          } else {
            meta.setAttribute('name', name);
          }
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      updateMetaTag('description', data.description);
      updateMetaTag('keywords', data.keywords);
      updateMetaTag('og:title', pageTitle || data.title, true);
      updateMetaTag('og:description', data.description, true);
      updateMetaTag('og:site_name', siteName, true);
      updateMetaTag('twitter:title', pageTitle || data.title);
      updateMetaTag('twitter:description', data.description);
    }
  }, [language, page, pageTitle]);

  return null;
}

export const geoLocations = {
  antalya: { name: "Antalya", lat: 36.8969, lng: 30.7133, sun: "2900+" },
  alanya: { name: "Alanya", lat: 36.5437, lng: 31.9994, sun: "2950+" },
  kemer: { name: "Kemer", lat: 36.5985, lng: 30.5592, sun: "2900+" },
  belek: { name: "Belek", lat: 36.8525, lng: 31.0559, sun: "2920+" },
  side: { name: "Side", lat: 36.7700, lng: 31.3875, sun: "2950+" },
  manavgat: { name: "Manavgat", lat: 36.7872, lng: 31.4435, sun: "2940+" },
  mahmutlar: { name: "Mahmutlar", lat: 36.4739, lng: 32.0847, sun: "2950+" },
  konakli: { name: "Konaklı", lat: 36.5200, lng: 31.9200, sun: "2950+" },
  gazipasa: { name: "Gazipaşa", lat: 36.2679, lng: 32.3097, sun: "2940+" },
  mugla: { name: "Muğla", lat: 37.2153, lng: 28.3636, sun: "2850+" },
  fethiye: { name: "Fethiye", lat: 36.6221, lng: 29.1164, sun: "2880+" },
  bodrum: { name: "Bodrum", lat: 37.0344, lng: 27.4305, sun: "2820+" },
  marmaris: { name: "Marmaris", lat: 36.8510, lng: 28.2742, sun: "2860+" },
  izmir: { name: "İzmir", lat: 38.4237, lng: 27.1428, sun: "2750+" },
  kusadasi: { name: "Kuşadası", lat: 37.8579, lng: 27.2610, sun: "2780+" },
  didim: { name: "Didim", lat: 37.3833, lng: 27.2667, sun: "2800+" },
  aydin: { name: "Aydın", lat: 37.8560, lng: 27.8416, sun: "2760+" },
  mersin: { name: "Mersin", lat: 36.8121, lng: 34.6415, sun: "2900+" }
};

export const serviceAreas = {
  tr: "Antalya, Alanya, Kemer, Belek, Side, Manavgat, Mahmutlar, Konaklı, Gazipaşa, Muğla, Fethiye, Bodrum, Marmaris, İzmir, Kuşadası, Didim, Aydın, Mersin",
  de: "Antalya, Alanya, Kemer, Belek, Side, Manavgat, Mahmutlar, Konaklı, Gazipaşa, Muğla, Fethiye, Bodrum, Marmaris, İzmir, Kuşadası, Didim, Aydın, Mersin",
  en: "Antalya, Alanya, Kemer, Belek, Side, Manavgat, Mahmutlar, Konaklı, Gazipaşa, Muğla, Fethiye, Bodrum, Marmaris, Izmir, Kusadasi, Didim, Aydin, Mersin"
};
