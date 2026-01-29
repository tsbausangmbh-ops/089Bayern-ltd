import { Card, CardContent } from "@/components/ui/card";
import { Sun, Thermometer, Zap, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import teamSolarImage from "@assets/images/team-solar-no-helmet.png";
import teamHeatPumpImage from "@assets/images/team-heatpump-no-helmet.png";
import teamPvImage from "@assets/images/team-pv-no-helmet.png";

export default function TeamWorkSection() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const translations: Record<string, {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    solar: { title: string; desc: string };
    heatPump: { title: string; desc: string };
    pv: { title: string; desc: string };
  }> = {
    de: {
      badge: "Unser Team bei der Arbeit",
      title: "Professionelle Installation",
      titleHighlight: "durch Experten",
      subtitle: "Unsere erfahrenen Techniker installieren Ihre Energiesysteme mit deutscher Präzision und mediterraner Leidenschaft",
      solar: { title: "Solarpanel-Installation", desc: "Fachgerechte Montage auf Ihrem Villendach" },
      heatPump: { title: "Wärmepumpen-Installation", desc: "Vaillant Premium-Systeme vom Experten installiert" },
      pv: { title: "PV-System Verkabelung", desc: "Professionelle Elektroinstallation nach DIN-Standard" },
    },
    tr: {
      badge: "Ekibimiz İş Başında",
      title: "Profesyonel Kurulum",
      titleHighlight: "Uzmanlardan",
      subtitle: "Deneyimli teknisyenlerimiz enerji sistemlerinizi Alman hassasiyeti ve Akdeniz tutkusuyla kuruyor",
      solar: { title: "Güneş Paneli Kurulumu", desc: "Villa çatınıza profesyonel montaj" },
      heatPump: { title: "Isı Pompası Kurulumu", desc: "Uzman tarafından kurulan Vaillant premium sistemleri" },
      pv: { title: "PV Sistem Kablolama", desc: "DIN standardına göre profesyonel elektrik tesisatı" },
    },
    en: {
      badge: "Our Team at Work",
      title: "Professional Installation",
      titleHighlight: "by Experts",
      subtitle: "Our experienced technicians install your energy systems with German precision and Mediterranean passion",
      solar: { title: "Solar Panel Installation", desc: "Professional mounting on your villa roof" },
      heatPump: { title: "Heat Pump Installation", desc: "Vaillant premium systems installed by experts" },
      pv: { title: "PV System Wiring", desc: "Professional electrical installation to DIN standards" },
    },
    ru: {
      badge: "Наша команда за работой",
      title: "Профессиональный монтаж",
      titleHighlight: "от экспертов",
      subtitle: "Наши опытные техники устанавливают ваши энергосистемы с немецкой точностью и средиземноморской страстью",
      solar: { title: "Монтаж солнечных панелей", desc: "Профессиональная установка на крыше вашей виллы" },
      heatPump: { title: "Установка теплового насоса", desc: "Премиум-системы Vaillant от экспертов" },
      pv: { title: "Монтаж PV-системы", desc: "Профессиональная электропроводка по стандартам DIN" },
    },
    uk: {
      badge: "Наша команда за роботою",
      title: "Професійний монтаж",
      titleHighlight: "від експертів",
      subtitle: "Наші досвідчені техніки встановлюють ваші енергосистеми з німецькою точністю та середземноморською пристрастю",
      solar: { title: "Монтаж сонячних панелей", desc: "Професійне встановлення на даху вашої вілли" },
      heatPump: { title: "Встановлення теплового насоса", desc: "Преміум-системи Vaillant від експертів" },
      pv: { title: "Монтаж PV-системи", desc: "Професійна електропроводка за стандартами DIN" },
    },
    ar: {
      badge: "فريقنا في العمل",
      title: "التركيب الاحترافي",
      titleHighlight: "من الخبراء",
      subtitle: "يقوم الفنيون ذوو الخبرة لدينا بتركيب أنظمة الطاقة الخاصة بك بدقة ألمانية وشغف متوسطي",
      solar: { title: "تركيب الألواح الشمسية", desc: "تركيب احترافي على سطح الفيلا" },
      heatPump: { title: "تركيب المضخة الحرارية", desc: "أنظمة Vaillant الفاخرة من الخبراء" },
      pv: { title: "توصيل نظام PV", desc: "تركيب كهربائي احترافي وفق معايير DIN" },
    },
    hr: {
      badge: "Naš tim na djelu",
      title: "Profesionalna instalacija",
      titleHighlight: "od stručnjaka",
      subtitle: "Naši iskusni tehničari instaliraju vaše energetske sustave s njemačkom preciznošću i mediteranskom strašću",
      solar: { title: "Instalacija solarnih panela", desc: "Profesionalna montaža na krov vaše vile" },
      heatPump: { title: "Instalacija toplinske pumpe", desc: "Vaillant premium sustavi od stručnjaka" },
      pv: { title: "PV sustav ožičenje", desc: "Profesionalna električna instalacija prema DIN standardima" },
    },
  };

  const t = translations[language] || translations.en;

  const workImages = [
    {
      image: teamSolarImage,
      title: t.solar.title,
      description: t.solar.desc,
      icon: Sun,
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      image: teamHeatPumpImage,
      title: t.heatPump.title,
      description: t.heatPump.desc,
      icon: Thermometer,
      gradient: "from-orange-500 to-red-500",
    },
    {
      image: teamPvImage,
      title: t.pv.title,
      description: t.pv.desc,
      icon: Zap,
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30" dir={isRTL ? "rtl" : "ltr"} data-testid="section-team-work">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{t.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workImages.map((item, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-team-work-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
