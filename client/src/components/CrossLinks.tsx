import { ArrowRight, Sun, Thermometer, Wind, Battery, MapPin, Calculator, HelpCircle, Award, Home } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { getLocalizedUrl, getOfficeBadge } from "@/lib/urlTranslations";

type PageType = "home" | "systeme" | "vorteile" | "rechner" | "faq" | "ueber-uns" | "gunes-paneli" | "isi-pompasi" | "klima" | "enerji-depolama" | "installation-antalya" | "installation-alanya" | "installation-ankara";

interface CrossLinksProps {
  currentPage: PageType;
  variant?: "full" | "compact";
}

export default function CrossLinks({ currentPage, variant = "full" }: CrossLinksProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const translations: Record<string, {
    title: string;
    subtitle: string;
    solutionsTitle: string;
    installationsTitle: string;
    pagesTitle: string;
  }> = {
    de: {
      title: "Weitere Seiten entdecken",
      subtitle: "Erfahren Sie mehr über unsere Lösungen und Dienstleistungen",
      solutionsTitle: "Unsere Lösungen",
      installationsTitle: "Standorte",
      pagesTitle: "Informationen",
    },
    tr: {
      title: "Daha Fazlasını Keşfedin",
      subtitle: "Çözümlerimiz ve hizmetlerimiz hakkında daha fazla bilgi edinin",
      solutionsTitle: "Çözümlerimiz",
      installationsTitle: "Kurulum Bölgeleri",
      pagesTitle: "Bilgi",
    },
    en: {
      title: "Discover More",
      subtitle: "Learn more about our solutions and services",
      solutionsTitle: "Our Solutions",
      installationsTitle: "Locations",
      pagesTitle: "Information",
    },
    ru: {
      title: "Узнайте больше",
      subtitle: "Узнайте больше о наших решениях и услугах",
      solutionsTitle: "Наши решения",
      installationsTitle: "Локации",
      pagesTitle: "Информация",
    },
    uk: {
      title: "Дізнайтеся більше",
      subtitle: "Дізнайтеся більше про наші рішення та послуги",
      solutionsTitle: "Наші рішення",
      installationsTitle: "Локації",
      pagesTitle: "Інформація",
    },
    ar: {
      title: "اكتشف المزيد",
      subtitle: "تعرف على المزيد حول حلولنا وخدماتنا",
      solutionsTitle: "حلولنا",
      installationsTitle: "المواقع",
      pagesTitle: "معلومات",
    },
    hr: {
      title: "Otkrijte više",
      subtitle: "Saznajte više o našim rješenjima i uslugama",
      solutionsTitle: "Naša rješenja",
      installationsTitle: "Lokacije",
      pagesTitle: "Informacije",
    },
  };

  const t = translations[language] || translations.en;

  // Hilfsfunktion für dynamische URLs basierend auf der ID
  const getHref = (id: string): string => {
    const urlMap: Record<string, keyof import("@/lib/urlTranslations").UrlPaths> = {
      "gunes-paneli": "solarPanel",
      "isi-pompasi": "heatPump",
      "klima": "airConditioning",
      "enerji-depolama": "batteryStorage",
      "installation-antalya": "installationAntalya",
      "installation-alanya": "installationAlanya",
      "installation-ankara": "installationAnkara",
      "systeme": "system",
      "vorteile": "benefits",
      "rechner": "calculator",
      "faq": "faq",
    };
    const key = urlMap[id];
    if (key) {
      return getLocalizedUrl(key, language);
    }
    return id === "home" ? "/" : `/${id}`;
  };

  // SEO-optimierte Keywords für bessere Auffindbarkeit
  const allLinks = {
    solutions: [
      { 
        id: "gunes-paneli", 
        href: getHref("gunes-paneli"), 
        icon: Sun,
        label: { 
          de: "Solaranlage kaufen Türkei", 
          tr: "Güneş Paneli Antalya Kurulum", 
          en: "Buy Solar Panels Turkey", 
          ru: "Купить солнечные панели Турция", 
          uk: "Купити сонячні панелі Туреччина", 
          ar: "شراء الألواح الشمسية تركيا", 
          hr: "Kupnja solarnih panela Turska" 
        },
        desc: { 
          de: "Photovoltaik Villa Antalya - bis 70% Stromkosten sparen", 
          tr: "Villa için güneş enerjisi - %70'e kadar tasarruf", 
          en: "Villa photovoltaics Antalya - save up to 70%", 
          ru: "Фотоэлектрика для виллы Анталья - экономия до 70%", 
          uk: "Фотоелектрика для вілли Анталія - економія до 70%", 
          ar: "الكهروضوئية للفيلا أنطاليا - وفر حتى 70%", 
          hr: "Fotonapon za vilu Antalya - ušteda do 70%" 
        }
      },
      { 
        id: "isi-pompasi", 
        href: getHref("isi-pompasi"), 
        icon: Thermometer,
        label: { 
          de: "Vaillant Wärmepumpe Türkei", 
          tr: "Vaillant Isı Pompası Kurulum", 
          en: "Vaillant Heat Pump Turkey", 
          ru: "Тепловой насос Vaillant Турция", 
          uk: "Тепловий насос Vaillant Туреччина", 
          ar: "مضخة حرارة Vaillant تركيا", 
          hr: "Vaillant toplinska pumpa Turska" 
        },
        desc: { 
          de: "Deutsche Qualität - effizientes Heizen & Kühlen", 
          tr: "Alman kalitesi - verimli ısıtma ve soğutma", 
          en: "German quality - efficient heating & cooling", 
          ru: "Немецкое качество - эффективное отопление и охлаждение", 
          uk: "Німецька якість - ефективне опалення та охолодження", 
          ar: "جودة ألمانية - تدفئة وتبريد فعالين", 
          hr: "Njemačka kvaliteta - učinkovito grijanje i hlađenje" 
        }
      },
      { 
        id: "klima", 
        href: getHref("klima"), 
        icon: Wind,
        label: { 
          de: "Samsung Klimaanlage Villa", 
          tr: "Samsung Klima Villa Kurulum", 
          en: "Samsung AC Villa Installation", 
          ru: "Кондиционер Samsung для виллы", 
          uk: "Кондиціонер Samsung для вілли", 
          ar: "تكييف Samsung للفيلا", 
          hr: "Samsung klima za vilu" 
        },
        desc: { 
          de: "WindFree Technologie - Premium Klimatisierung Mittelmeer", 
          tr: "WindFree teknoloji - Premium klima Akdeniz", 
          en: "WindFree technology - Premium AC Mediterranean", 
          ru: "Технология WindFree - Премиум кондиционирование Средиземноморье", 
          uk: "Технологія WindFree - Преміум кондиціонування Середземномор'я", 
          ar: "تقنية WindFree - تكييف فاخر المتوسط", 
          hr: "WindFree tehnologija - Premium klimatizacija Mediteran" 
        }
      },
      { 
        id: "enerji-depolama", 
        href: getHref("enerji-depolama"), 
        icon: Battery,
        label: { 
          de: "Samsung Batteriespeicher kaufen", 
          tr: "Samsung Enerji Depolama Sistemi", 
          en: "Samsung Battery Storage System", 
          ru: "Аккумулятор Samsung для дома", 
          uk: "Акумулятор Samsung для дому", 
          ar: "نظام تخزين Samsung للمنزل", 
          hr: "Samsung sustav pohrane energije" 
        },
        desc: { 
          de: "Stromspeicher für Unabhängigkeit - 24/7 Eigenversorgung", 
          tr: "Bağımsızlık için enerji depolama - 7/24 kendi enerjiniz", 
          en: "Energy storage for independence - 24/7 self-supply", 
          ru: "Накопитель для независимости - круглосуточное самообеспечение", 
          uk: "Накопичувач для незалежності - цілодобове самозабезпечення", 
          ar: "تخزين للاستقلالية - إمداد ذاتي على مدار الساعة", 
          hr: "Pohrana za neovisnost - 24/7 samoopskrba" 
        }
      },
    ],
    installations: [
      { 
        id: "installation-antalya", 
        href: getHref("installation-antalya"), 
        icon: MapPin,
        label: { 
          de: "Solaranlage Installation Antalya", 
          tr: "Antalya Güneş Paneli Kurulum", 
          en: "Solar Installation Antalya", 
          ru: "Установка солнечных панелей Анталья", 
          uk: "Встановлення сонячних панелей Анталія", 
          ar: "تركيب الألواح الشمسية أنطاليا", 
          hr: "Instalacija solarnih panela Antalya" 
        },
        desc: { 
          de: "089 Bayern Zentrale - 300+ Sonnentage, 70% Ersparnis", 
          tr: "089 Bayern Merkez - 300+ güneşli gün, %70 tasarruf", 
          en: "089 Bayern HQ - 300+ sunny days, 70% savings", 
          ru: "Центр 089 Bayern - 300+ солнечных дней, экономия 70%", 
          uk: "Центр 089 Bayern - 300+ сонячних днів, економія 70%", 
          ar: "مقر 089 Bayern - 300+ يوم مشمس، توفير 70%", 
          hr: "Sjedište 089 Bayern - 300+ sunčanih dana, ušteda 70%" 
        }
      },
      { 
        id: "installation-alanya", 
        href: getHref("installation-alanya"), 
        icon: MapPin,
        label: { 
          de: "Photovoltaik Installation Alanya", 
          tr: "Alanya Güneş Enerjisi Kurulum", 
          en: "Photovoltaic Installation Alanya", 
          ru: "Установка фотоэлектрики Аланья", 
          uk: "Встановлення фотоелектрики Аланія", 
          ar: "تركيب الطاقة الشمسية ألانيا", 
          hr: "Instalacija fotonapona Alanya" 
        },
        desc: { 
          de: "Niederlassung Alanya - Küstenregion mit 290+ Sonnentagen", 
          tr: "Alanya Şube - 290+ güneşli gün ile kıyı bölgesi", 
          en: "Alanya Branch - Coastal region with 290+ sunny days", 
          ru: "Филиал Аланья - Побережье с 290+ солнечными днями", 
          uk: "Філіал Аланія - Узбережжя з 290+ сонячними днями", 
          ar: "فرع ألانيا - منطقة ساحلية مع 290+ يوم مشمس", 
          hr: "Podružnica Alanya - Obalna regija s 290+ sunčanih dana" 
        }
      },
      { 
        id: "installation-ankara", 
        href: getHref("installation-ankara"), 
        icon: MapPin,
        label: { 
          de: "Wärmepumpe Installation Ankara", 
          tr: "Ankara Isı Pompası Kurulum", 
          en: "Heat Pump Installation Ankara", 
          ru: "Установка теплового насоса Анкара", 
          uk: "Встановлення теплового насоса Анкара", 
          ar: "تركيب مضخة الحرارة أنقرة", 
          hr: "Instalacija toplinske pumpe Ankara" 
        },
        desc: { 
          de: "Niederlassung Ankara - Optimal für kalte Winter", 
          tr: "Ankara Şube - Soğuk kışlar için optimal", 
          en: "Ankara Branch - Optimal for cold winters", 
          ru: "Филиал Анкара - Оптимально для холодных зим", 
          uk: "Філіал Анкара - Оптимально для холодних зим", 
          ar: "فرع أنقرة - مثالي للشتاء البارد", 
          hr: "Podružnica Ankara - Optimalno za hladne zime" 
        }
      },
    ],
    pages: [
      { 
        id: "home", 
        href: "/", 
        icon: Home,
        label: { 
          de: "089 Bayern Energiesysteme", 
          tr: "089 Bayern Enerji Sistemleri", 
          en: "089 Bayern Energy Systems", 
          ru: "089 Bayern Энергосистемы", 
          uk: "089 Bayern Енергосистеми", 
          ar: "089 Bayern أنظمة الطاقة", 
          hr: "089 Bayern Energetski sustavi" 
        },
        desc: { 
          de: "Deutsche Qualität für Ihre Villa in der Türkei", 
          tr: "Türkiye'deki villanız için Alman kalitesi", 
          en: "German quality for your villa in Turkey", 
          ru: "Немецкое качество для вашей виллы в Турции", 
          uk: "Німецька якість для вашої вілли в Туреччині", 
          ar: "جودة ألمانية لفيلتك في تركيا", 
          hr: "Njemačka kvaliteta za vašu vilu u Turskoj" 
        }
      },
      { 
        id: "systeme", 
        href: getHref("systeme"), 
        icon: Award,
        label: { 
          de: "4-in-1 Energiesystem komplett", 
          tr: "4-in-1 Komple Enerji Sistemi", 
          en: "Complete 4-in-1 Energy System", 
          ru: "Комплексная система 4-в-1", 
          uk: "Комплексна система 4-в-1", 
          ar: "نظام طاقة كامل 4 في 1", 
          hr: "Kompletan 4-u-1 sustav" 
        },
        desc: { 
          de: "Solar + Wärmepumpe + Klima + Speicher aus einer Hand", 
          tr: "Güneş + Isı pompası + Klima + Depolama tek elden", 
          en: "Solar + heat pump + AC + storage from one source", 
          ru: "Солнце + тепловой насос + кондиционер + накопитель из одних рук", 
          uk: "Сонце + тепловий насос + кондиціонер + накопичувач з одних рук", 
          ar: "شمسي + مضخة حرارة + تكييف + تخزين من مصدر واحد", 
          hr: "Solarno + toplinska pumpa + klima + pohrana iz jednog izvora" 
        }
      },
      { 
        id: "vorteile", 
        href: getHref("vorteile"), 
        icon: Award,
        label: { 
          de: "Stromkosten sparen Türkei", 
          tr: "Elektrik Faturasından Tasarruf", 
          en: "Save Electricity Costs Turkey", 
          ru: "Экономия на электричестве Турция", 
          uk: "Економія на електриці Туреччина", 
          ar: "توفير تكاليف الكهرباء تركيا", 
          hr: "Ušteda troškova struje Turska" 
        },
        desc: { 
          de: "Bis 10 Monate kostenlose Energie pro Jahr", 
          tr: "Yılda 10 aya kadar ücretsiz enerji", 
          en: "Up to 10 months free energy per year", 
          ru: "До 10 месяцев бесплатной энергии в год", 
          uk: "До 10 місяців безкоштовної енергії на рік", 
          ar: "حتى 10 أشهر طاقة مجانية سنوياً", 
          hr: "Do 10 mjeseci besplatne energije godišnje" 
        }
      },
      { 
        id: "rechner", 
        href: getHref("rechner"), 
        icon: Calculator,
        label: { 
          de: "Solar Ersparnis Rechner", 
          tr: "Güneş Enerjisi Tasarruf Hesaplayıcı", 
          en: "Solar Savings Calculator", 
          ru: "Калькулятор экономии солнечной энергии", 
          uk: "Калькулятор економії сонячної енергії", 
          ar: "حاسبة توفير الطاقة الشمسية", 
          hr: "Kalkulator solarne uštede" 
        },
        desc: { 
          de: "Jetzt individuelle Ersparnis berechnen - kostenlos", 
          tr: "Şimdi kişisel tasarrufunuzu hesaplayın - ücretsiz", 
          en: "Calculate your individual savings now - free", 
          ru: "Рассчитайте свою экономию сейчас - бесплатно", 
          uk: "Розрахуйте свою економію зараз - безкоштовно", 
          ar: "احسب توفيرك الآن - مجاناً", 
          hr: "Izračunajte svoju uštedu sada - besplatno" 
        }
      },
      { 
        id: "faq", 
        href: getHref("faq"), 
        icon: HelpCircle,
        label: { 
          de: "Solaranlage Türkei FAQ", 
          tr: "Güneş Paneli Türkiye SSS", 
          en: "Solar Panel Turkey FAQ", 
          ru: "Солнечные панели Турция FAQ", 
          uk: "Сонячні панелі Туреччина FAQ", 
          ar: "الأسئلة الشائعة الطاقة الشمسية تركيا", 
          hr: "Solarni paneli Turska FAQ" 
        },
        desc: { 
          de: "Antworten auf häufige Fragen zu Kosten, Installation, Garantie", 
          tr: "Maliyet, kurulum, garanti hakkında sık sorulan sorular", 
          en: "Answers about costs, installation, warranty", 
          ru: "Ответы о стоимости, установке, гарантии", 
          uk: "Відповіді про вартість, встановлення, гарантію", 
          ar: "إجابات حول التكاليف والتركيب والضمان", 
          hr: "Odgovori o troškovima, instalaciji, jamstvu" 
        }
      },
      { 
        id: "ueber-uns", 
        href: "/hakkimizda", 
        icon: Award,
        label: { 
          de: "089 Bayern Team & Geschichte", 
          tr: "089 Bayern Ekibi & Hikayesi", 
          en: "089 Bayern Team & Story", 
          ru: "Команда и история 089 Bayern", 
          uk: "Команда та історія 089 Bayern", 
          ar: "فريق وقصة 089 Bayern", 
          hr: "089 Bayern tim i priča" 
        },
        desc: { 
          de: "Deutsche Firma mit türkischen Wurzeln - 15 Jahre Erfahrung", 
          tr: "Türk kökenli Alman firması - 15 yıl deneyim", 
          en: "German company with Turkish roots - 15 years experience", 
          ru: "Немецкая компания с турецкими корнями - 15 лет опыта", 
          uk: "Німецька компанія з турецьким корінням - 15 років досвіду", 
          ar: "شركة ألمانية بجذور تركية - 15 عاماً من الخبرة", 
          hr: "Njemačka tvrtka s turskim korijenima - 15 godina iskustva" 
        }
      },
    ],
  };

  const filterLinks = (links: typeof allLinks.solutions, currentId: string) => {
    return links.filter(link => link.id !== currentId);
  };

  const filteredSolutions = filterLinks(allLinks.solutions, currentPage);
  const filteredInstallations = filterLinks(allLinks.installations, currentPage);
  const filteredPages = filterLinks(allLinks.pages, currentPage);

  if (variant === "compact") {
    return (
      <section className="py-8 bg-muted/30" dir={isRTL ? "rtl" : "ltr"} data-testid="section-crosslinks-compact">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[...filteredSolutions, ...filteredInstallations.slice(0, 1), ...filteredPages.slice(0, 3)].map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background border rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:border-primary/50 transition-colors"
                  data-testid={`link-crosslink-${link.id}`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label[language as keyof typeof link.label] || link.label.en}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-muted/30" dir={isRTL ? "rtl" : "ltr"} data-testid="section-crosslinks">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredSolutions.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-primary" />
                {t.solutionsTitle}
              </h3>
              <ul className="space-y-3">
                {filteredSolutions.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-background transition-colors"
                        data-testid={`link-crosslink-${link.id}`}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                        <div className="flex-1">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                            {link.label[language as keyof typeof link.label] || link.label.en}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {link.desc[language as keyof typeof link.desc] || link.desc.en}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {filteredInstallations.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {t.installationsTitle}
              </h3>
              <ul className="space-y-3">
                {filteredInstallations.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-background transition-colors"
                        data-testid={`link-crosslink-${link.id}`}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                        <div className="flex-1">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                            {link.label[language as keyof typeof link.label] || link.label.en}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {link.desc[language as keyof typeof link.desc] || link.desc.en}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {filteredPages.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                {t.pagesTitle}
              </h3>
              <ul className="space-y-3">
                {filteredPages.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-background transition-colors"
                        data-testid={`link-crosslink-${link.id}`}
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                        <div className="flex-1">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                            {link.label[language as keyof typeof link.label] || link.label.en}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {link.desc[language as keyof typeof link.desc] || link.desc.en}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
