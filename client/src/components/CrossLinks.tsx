import { ArrowRight, Sun, Thermometer, Wind, Battery, MapPin, Calculator, HelpCircle, Award, Home } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

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

  const allLinks = {
    solutions: [
      { 
        id: "gunes-paneli", 
        href: "/gunes-paneli", 
        icon: Sun,
        label: { de: "Solaranlage", tr: "Güneş Paneli", en: "Solar Panel", ru: "Солнечные панели", uk: "Сонячні панелі", ar: "الألواح الشمسية", hr: "Solarni paneli" },
        desc: { de: "Photovoltaik für Ihr Zuhause", tr: "Eviniz için güneş enerjisi", en: "Photovoltaics for your home", ru: "Фотоэлектрика для вашего дома", uk: "Фотоелектрика для вашого дому", ar: "الكهروضوئية لمنزلك", hr: "Fotonapon za vaš dom" }
      },
      { 
        id: "isi-pompasi", 
        href: "/isi-pompasi", 
        icon: Thermometer,
        label: { de: "Wärmepumpe", tr: "Isı Pompası", en: "Heat Pump", ru: "Тепловой насос", uk: "Тепловий насос", ar: "مضخة الحرارة", hr: "Toplinska pumpa" },
        desc: { de: "Vaillant Wärmepumpen", tr: "Vaillant ısı pompaları", en: "Vaillant heat pumps", ru: "Тепловые насосы Vaillant", uk: "Теплові насоси Vaillant", ar: "مضخات الحرارة Vaillant", hr: "Vaillant toplinske pumpe" }
      },
      { 
        id: "klima", 
        href: "/klima", 
        icon: Wind,
        label: { de: "Klimaanlage", tr: "Klima", en: "Air Conditioning", ru: "Кондиционер", uk: "Кондиціонер", ar: "تكييف الهواء", hr: "Klima uređaj" },
        desc: { de: "Samsung Klimasysteme", tr: "Samsung klima sistemleri", en: "Samsung climate systems", ru: "Климатические системы Samsung", uk: "Кліматичні системи Samsung", ar: "أنظمة تكييف Samsung", hr: "Samsung klima sustavi" }
      },
      { 
        id: "enerji-depolama", 
        href: "/enerji-depolama", 
        icon: Battery,
        label: { de: "Batteriespeicher", tr: "Enerji Depolama", en: "Battery Storage", ru: "Накопитель энергии", uk: "Накопичувач енергії", ar: "تخزين البطارية", hr: "Pohrana baterije" },
        desc: { de: "Energiespeicherlösungen", tr: "Enerji depolama çözümleri", en: "Energy storage solutions", ru: "Решения для хранения энергии", uk: "Рішення для зберігання енергії", ar: "حلول تخزين الطاقة", hr: "Rješenja za pohranu energije" }
      },
    ],
    installations: [
      { 
        id: "installation-antalya", 
        href: "/installation-antalya", 
        icon: MapPin,
        label: { de: "Antalya (Zentrale)", tr: "Antalya (Merkez)", en: "Antalya (HQ)", ru: "Анталья (Центр)", uk: "Анталія (Центр)", ar: "أنطاليا (المقر)", hr: "Antalya (Sjedište)" },
        desc: { de: "Hauptquartier Mittelmeer", tr: "Akdeniz bölgesi merkezi", en: "Mediterranean headquarters", ru: "Штаб-квартира Средиземноморья", uk: "Штаб-квартира Середземномор'я", ar: "مقر البحر المتوسط", hr: "Sredozemno sjedište" }
      },
      { 
        id: "installation-alanya", 
        href: "/installation-alanya", 
        icon: MapPin,
        label: { de: "Alanya", tr: "Alanya", en: "Alanya", ru: "Аланья", uk: "Аланія", ar: "ألانيا", hr: "Alanya" },
        desc: { de: "Küstenregion Alanya", tr: "Alanya kıyı bölgesi", en: "Alanya coastal region", ru: "Прибрежный регион Аланьи", uk: "Прибережний регіон Аланії", ar: "منطقة ساحل ألانيا", hr: "Obalna regija Alanya" }
      },
      { 
        id: "installation-ankara", 
        href: "/installation-ankara", 
        icon: MapPin,
        label: { de: "Ankara", tr: "Ankara", en: "Ankara", ru: "Анкара", uk: "Анкара", ar: "أنقرة", hr: "Ankara" },
        desc: { de: "Zentralanatolien", tr: "İç Anadolu bölgesi", en: "Central Anatolia", ru: "Центральная Анатолия", uk: "Центральна Анатолія", ar: "وسط الأناضول", hr: "Središnja Anatolija" }
      },
    ],
    pages: [
      { 
        id: "home", 
        href: "/", 
        icon: Home,
        label: { de: "Startseite", tr: "Ana Sayfa", en: "Home", ru: "Главная", uk: "Головна", ar: "الرئيسية", hr: "Početna" },
        desc: { de: "Zurück zur Startseite", tr: "Ana sayfaya dön", en: "Back to home", ru: "На главную", uk: "На головну", ar: "العودة للرئيسية", hr: "Povratak na početnu" }
      },
      { 
        id: "systeme", 
        href: "/systeme", 
        icon: Award,
        label: { de: "4-in-1 System", tr: "4-in-1 Sistem", en: "4-in-1 System", ru: "Система 4-в-1", uk: "Система 4-в-1", ar: "نظام 4 في 1", hr: "4-u-1 Sustav" },
        desc: { de: "Unser Komplettsystem", tr: "Komple sistemimiz", en: "Our complete system", ru: "Наша полная система", uk: "Наша повна система", ar: "نظامنا الكامل", hr: "Naš kompletan sustav" }
      },
      { 
        id: "vorteile", 
        href: "/vorteile", 
        icon: Award,
        label: { de: "Vorteile", tr: "Avantajlar", en: "Benefits", ru: "Преимущества", uk: "Переваги", ar: "المزايا", hr: "Prednosti" },
        desc: { de: "10 Monate kostenlose Energie", tr: "10 ay ücretsiz enerji", en: "10 months free energy", ru: "10 месяцев бесплатной энергии", uk: "10 місяців безкоштовної енергії", ar: "10 أشهر طاقة مجانية", hr: "10 mjeseci besplatne energije" }
      },
      { 
        id: "rechner", 
        href: "/rechner", 
        icon: Calculator,
        label: { de: "Rechner", tr: "Hesaplayıcı", en: "Calculator", ru: "Калькулятор", uk: "Калькулятор", ar: "الحاسبة", hr: "Kalkulator" },
        desc: { de: "Ersparnis berechnen", tr: "Tasarruf hesapla", en: "Calculate savings", ru: "Рассчитать экономию", uk: "Розрахувати економію", ar: "احسب التوفير", hr: "Izračunaj uštedu" }
      },
      { 
        id: "faq", 
        href: "/faq", 
        icon: HelpCircle,
        label: { de: "FAQ", tr: "SSS", en: "FAQ", ru: "ЧЗВ", uk: "ЧЗП", ar: "الأسئلة الشائعة", hr: "Česta pitanja" },
        desc: { de: "Häufige Fragen", tr: "Sık sorulan sorular", en: "Frequently asked questions", ru: "Часто задаваемые вопросы", uk: "Часті запитання", ar: "الأسئلة المتكررة", hr: "Često postavljana pitanja" }
      },
      { 
        id: "ueber-uns", 
        href: "/ueber-uns", 
        icon: Award,
        label: { de: "Über uns", tr: "Hakkımızda", en: "About Us", ru: "О нас", uk: "Про нас", ar: "من نحن", hr: "O nama" },
        desc: { de: "Unser Team kennenlernen", tr: "Ekibimizi tanıyın", en: "Meet our team", ru: "Познакомьтесь с нашей командой", uk: "Познайомтеся з нашою командою", ar: "تعرف على فريقنا", hr: "Upoznajte naš tim" }
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t.title}</h2>
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
