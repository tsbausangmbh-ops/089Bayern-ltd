import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  TrendingUp, 
  Zap, 
  ThermometerSun, 
  ArrowRight, 
  Check, 
  X,
  Flame,
  Snowflake,
  Receipt,
  Clock,
  ShieldAlert,
  Wrench,
  Ban,
  CircleDollarSign,
  Lightbulb,
  Sun
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import businessHandshakeImage from "@assets/images/optimized/business-handshake-office.jpg";

export default function ProblemSolverSection() {
  const { language } = useLanguage();

  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/#calculator';
    }
  };

  const content = {
    tr: {
      badge: "Problemlerinizi Çözüyoruz",
      title: "Akdeniz'de Enerji Sorunu mu Yaşıyorsunuz?",
      subtitle: "Her yıl binlerce villa sahibi aynı sorunlarla karşılaşıyor. 089 Bayern 4-in-1 German System bu sorunların tamamına kalıcı çözüm sunuyor.",
      problems: [
        {
          icon: Receipt,
          problem: "Yüksek Elektrik Faturaları",
          description: "Ayda ₺3.000-5.000 elektrik faturası mı ödüyorsunuz? Klima, ısıtma ve ev aletleri faturanızı patlatıyor.",
          solution: "10 Ay Sıfır Fatura",
          solutionDesc: "Güneş panelleri ile kendi elektriğinizi üretin. Fazla enerjiyi bataryada depolayın veya şebekeye satın.",
          stats: "₺36.000+/yıl tasarruf"
        },
        {
          icon: Flame,
          problem: "Pahalı Kış Isınması",
          description: "Doğalgaz veya elektrikli ısıtıcılarla kış aylarında ₺2.000-4.000/ay mı harcıyorsunuz?",
          solution: "Ücretsiz Isınma",
          solutionDesc: "Wärmepompa ile 1 kW elektrik = 4-5 kW ısı. Güneş enerjisiyle çalışan sistem kış masraflarını sıfıra indirir.",
          stats: "COP 4-5 verimlilik"
        },
        {
          icon: Snowflake,
          problem: "Yaz Aylarında Klima Maliyeti",
          description: "Akdeniz sıcağında her odada klima çalıştırmak faturanızı ikiye mi katlıyor?",
          solution: "Sıfır Maliyetli Serinlik",
          solutionDesc: "Aynı wärmepompa yaz aylarında soğutma yapar. Güneş panelleri en sıcak günlerde en çok enerji üretir.",
          stats: "Sınırsız klima kullanımı"
        },
        {
          icon: ShieldAlert,
          problem: "Elektrik Kesintileri",
          description: "Yaz aylarında sık yaşanan kesintilerde klima ve buzdolabı çalışmıyor mu?",
          solution: "Kesintisiz Güç",
          solutionDesc: "10-15 kWh batarya kapasitesi ile 4-8 saat kesintisiz enerji. Kritik cihazlarınız hiç durmaz.",
          stats: "4-8 saat yedek güç"
        },
        {
          icon: Wrench,
          problem: "Farklı Sistemler, Farklı Bakımlar",
          description: "Klima, kombi, şofben... Her biri için ayrı servis, ayrı bakım, ayrı masraf mı?",
          solution: "Tek Sistem, Tek Servis",
          solutionDesc: "4'ü 1 arada Alman sistemi tek servisle bakılır. 10 yıl garanti ile bakım maliyetleri minimumda.",
          stats: "10 yıl tam garanti"
        },
        {
          icon: TrendingUp,
          problem: "Sürekli Artan Enerji Fiyatları",
          description: "Her yıl %30-50 artan elektrik ve doğalgaz fiyatları bütçenizi mi zorluyor?",
          solution: "Fiyat Artışlarından Bağımsızlık",
          solutionDesc: "Kendi enerjinizi ürettiğinizde fiyat artışları sizi etkilemez. 25 yıl boyunca sabit enerji maliyeti.",
          stats: "25 yıl fiyat garantisi"
        }
      ],
      ctaTitle: "Sorunlarınıza Kalıcı Çözüm",
      ctaSubtitle: "Ücretsiz keşif ve tasarruf hesabı için hemen randevu alın",
      ctaButton: "Ücretsiz Hesaplama Yap",
      beforeAfter: {
        title: "Önce ve Sonra: Gerçek Tasarruf",
        before: "089 Bayern Öncesi",
        after: "089 Bayern Sonrası",
        electricBill: "Aylık Elektrik",
        heatingBill: "Aylık Isınma",
        coolingBill: "Aylık Klima",
        waterBill: "Sıcak Su",
        total: "Toplam Aylık Maliyet",
        savings: "Yıllık Tasarruf"
      }
    },
    de: {
      badge: "Wir lösen Ihre Probleme",
      title: "Haben Sie Energieprobleme im Mittelmeerraum?",
      subtitle: "Jedes Jahr stehen tausende Villenbesitzer vor denselben Problemen. Das 089 Bayern 4-in-1 German System bietet dauerhafte Lösungen für all diese Probleme.",
      problems: [
        {
          icon: Receipt,
          problem: "Hohe Stromrechnungen",
          description: "Zahlen Sie monatlich 300-500€ Stromrechnung? Klimaanlage, Heizung und Haushaltsgeräte treiben Ihre Rechnung in die Höhe.",
          solution: "10 Monate Null Rechnung",
          solutionDesc: "Erzeugen Sie Ihren eigenen Strom mit Solarpanels. Speichern Sie überschüssige Energie in Batterien oder verkaufen Sie sie ins Netz.",
          stats: "3.600€+/Jahr Ersparnis"
        },
        {
          icon: Flame,
          problem: "Teure Winterheizung",
          description: "Geben Sie im Winter 200-400€/Monat für Gas oder Elektroheizung aus?",
          solution: "Kostenlose Heizung",
          solutionDesc: "Mit der Wärmepumpe: 1 kW Strom = 4-5 kW Wärme. Das sonnenbetriebene System senkt Winterkosten auf null.",
          stats: "COP 4-5 Effizienz"
        },
        {
          icon: Snowflake,
          problem: "Sommerliche Klimakosten",
          description: "Verdoppelt der Betrieb von Klimaanlagen in jedem Raum bei Mittelmeerhitze Ihre Rechnung?",
          solution: "Kühlung zum Nulltarif",
          solutionDesc: "Dieselbe Wärmepumpe kühlt im Sommer. Solarpanels erzeugen an heißesten Tagen die meiste Energie.",
          stats: "Unbegrenzte Klimanutzung"
        },
        {
          icon: ShieldAlert,
          problem: "Stromausfälle",
          description: "Funktionieren bei häufigen Sommerausfällen Klimaanlage und Kühlschrank nicht?",
          solution: "Unterbrechungsfreie Stromversorgung",
          solutionDesc: "10-15 kWh Batteriekapazität für 4-8 Stunden unterbrechungsfreie Energie. Ihre kritischen Geräte laufen weiter.",
          stats: "4-8 Stunden Notstrom"
        },
        {
          icon: Wrench,
          problem: "Verschiedene Systeme, verschiedene Wartungen",
          description: "Klimaanlage, Heizkessel, Warmwasserbereiter... Separater Service, separate Wartung, separate Kosten?",
          solution: "Ein System, ein Service",
          solutionDesc: "Das 4-in-1 deutsche System wird von einem Service gewartet. 10 Jahre Garantie minimiert Wartungskosten.",
          stats: "10 Jahre Vollgarantie"
        },
        {
          icon: TrendingUp,
          problem: "Ständig steigende Energiepreise",
          description: "Belasten jährlich 30-50% steigende Strom- und Gaspreise Ihr Budget?",
          solution: "Unabhängigkeit von Preiserhöhungen",
          solutionDesc: "Wenn Sie Ihre eigene Energie erzeugen, betreffen Sie Preiserhöhungen nicht. 25 Jahre feste Energiekosten.",
          stats: "25 Jahre Preisgarantie"
        }
      ],
      ctaTitle: "Dauerhafte Lösung für Ihre Probleme",
      ctaSubtitle: "Vereinbaren Sie jetzt einen Termin für kostenlose Inspektion und Einsparungsberechnung",
      ctaButton: "Kostenlose Berechnung",
      beforeAfter: {
        title: "Vorher und Nachher: Echte Einsparungen",
        before: "Vor 089 Bayern",
        after: "Nach 089 Bayern",
        electricBill: "Monatlicher Strom",
        heatingBill: "Monatliche Heizung",
        coolingBill: "Monatliche Kühlung",
        waterBill: "Warmwasser",
        total: "Monatliche Gesamtkosten",
        savings: "Jährliche Ersparnis"
      }
    },
    en: {
      badge: "We Solve Your Problems",
      title: "Experiencing Energy Problems in the Mediterranean?",
      subtitle: "Every year thousands of villa owners face the same problems. The 089 Bayern 4-in-1 German System offers permanent solutions to all these issues.",
      problems: [
        {
          icon: Receipt,
          problem: "High Electricity Bills",
          description: "Paying $300-500 monthly electricity bills? Air conditioning, heating and appliances are driving your bills sky high.",
          solution: "10 Months Zero Bills",
          solutionDesc: "Generate your own electricity with solar panels. Store excess energy in batteries or sell to the grid.",
          stats: "$3,600+/year savings"
        },
        {
          icon: Flame,
          problem: "Expensive Winter Heating",
          description: "Spending $200-400/month on gas or electric heating during winter months?",
          solution: "Free Heating",
          solutionDesc: "With heat pump: 1 kW electricity = 4-5 kW heat. Solar-powered system reduces winter costs to zero.",
          stats: "COP 4-5 efficiency"
        },
        {
          icon: Snowflake,
          problem: "Summer Air Conditioning Costs",
          description: "Is running AC in every room during Mediterranean heat doubling your bills?",
          solution: "Zero-Cost Cooling",
          solutionDesc: "The same heat pump cools in summer. Solar panels produce most energy on the hottest days.",
          stats: "Unlimited AC usage"
        },
        {
          icon: ShieldAlert,
          problem: "Power Outages",
          description: "During frequent summer outages, are your AC and refrigerator not working?",
          solution: "Uninterrupted Power",
          solutionDesc: "10-15 kWh battery capacity provides 4-8 hours of uninterrupted energy. Your critical devices never stop.",
          stats: "4-8 hours backup power"
        },
        {
          icon: Wrench,
          problem: "Different Systems, Different Maintenance",
          description: "AC, boiler, water heater... Separate service, separate maintenance, separate costs for each?",
          solution: "One System, One Service",
          solutionDesc: "The 4-in-1 German system is maintained by a single service. 10-year warranty minimizes maintenance costs.",
          stats: "10-year full warranty"
        },
        {
          icon: TrendingUp,
          problem: "Constantly Rising Energy Prices",
          description: "Are annually rising electricity and gas prices (30-50%) straining your budget?",
          solution: "Independence from Price Increases",
          solutionDesc: "When you generate your own energy, price increases don't affect you. 25 years of fixed energy costs.",
          stats: "25-year price guarantee"
        }
      ],
      ctaTitle: "Permanent Solution for Your Problems",
      ctaSubtitle: "Schedule a free inspection and savings calculation now",
      ctaButton: "Free Calculation",
      beforeAfter: {
        title: "Before and After: Real Savings",
        before: "Before 089 Bayern",
        after: "After 089 Bayern",
        electricBill: "Monthly Electricity",
        heatingBill: "Monthly Heating",
        coolingBill: "Monthly Cooling",
        waterBill: "Hot Water",
        total: "Total Monthly Cost",
        savings: "Annual Savings"
      }
    },
    ru: {
      badge: "Мы Решаем Ваши Проблемы",
      title: "Проблемы с энергией в Средиземноморье?",
      subtitle: "Каждый год тысячи владельцев вилл сталкиваются с одними и теми же проблемами. 089 Bayern 4-in-1 German System предлагает постоянные решения для всех этих проблем.",
      problems: [
        {
          icon: Receipt,
          problem: "Высокие Счета за Электричество",
          description: "Платите $300-500 в месяц за электричество? Кондиционер, отопление и бытовая техника взвинчивают ваши счета.",
          solution: "10 Месяцев Нулевые Счета",
          solutionDesc: "Производите собственное электричество с солнечными панелями. Храните излишки в батареях или продавайте в сеть.",
          stats: "$3,600+/год экономия"
        },
        {
          icon: Flame,
          problem: "Дорогое Зимнее Отопление",
          description: "Тратите $200-400/месяц на газ или электрическое отопление зимой?",
          solution: "Бесплатное Отопление",
          solutionDesc: "С тепловым насосом: 1 кВт электричества = 4-5 кВт тепла. Солнечная система снижает зимние расходы до нуля.",
          stats: "КПД 4-5"
        },
        {
          icon: Snowflake,
          problem: "Летние Расходы на Кондиционер",
          description: "Работа кондиционера в каждой комнате в средиземноморскую жару удваивает ваши счета?",
          solution: "Охлаждение Бесплатно",
          solutionDesc: "Тот же тепловой насос охлаждает летом. Солнечные панели производят больше всего энергии в самые жаркие дни.",
          stats: "Неограниченное использование кондиционера"
        },
        {
          icon: ShieldAlert,
          problem: "Отключения Электричества",
          description: "При частых летних отключениях кондиционер и холодильник не работают?",
          solution: "Бесперебойное Питание",
          solutionDesc: "Батарея 10-15 кВтч обеспечивает 4-8 часов бесперебойной энергии. Ваши критические устройства не останавливаются.",
          stats: "4-8 часов резервного питания"
        },
        {
          icon: Wrench,
          problem: "Разные Системы, Разное Обслуживание",
          description: "Кондиционер, котёл, бойлер... Отдельный сервис, обслуживание и расходы для каждого?",
          solution: "Одна Система, Один Сервис",
          solutionDesc: "Немецкая система 4-в-1 обслуживается одним сервисом. 10-летняя гарантия минимизирует расходы на обслуживание.",
          stats: "10 лет полная гарантия"
        },
        {
          icon: TrendingUp,
          problem: "Постоянно Растущие Цены на Энергию",
          description: "Ежегодный рост цен на электричество и газ (30-50%) напрягает ваш бюджет?",
          solution: "Независимость от Роста Цен",
          solutionDesc: "Когда вы производите собственную энергию, повышение цен вас не касается. 25 лет фиксированных затрат на энергию.",
          stats: "25 лет ценовая гарантия"
        }
      ],
      ctaTitle: "Постоянное Решение Ваших Проблем",
      ctaSubtitle: "Запишитесь на бесплатную проверку и расчёт экономии прямо сейчас",
      ctaButton: "Бесплатный Расчёт",
      beforeAfter: {
        title: "До и После: Реальная Экономия",
        before: "До 089 Bayern",
        after: "После 089 Bayern",
        electricBill: "Ежемесячное электричество",
        heatingBill: "Ежемесячное отопление",
        coolingBill: "Ежемесячное охлаждение",
        waterBill: "Горячая вода",
        total: "Общие месячные затраты",
        savings: "Годовая экономия"
      }
    },
    uk: {
      badge: "Ми Вирішуємо Ваші Проблеми",
      title: "Проблеми з енергією в Середземномор'ї?",
      subtitle: "Щороку тисячі власників вілл стикаються з однаковими проблемами. 089 Bayern 4-in-1 German System пропонує постійні рішення для всіх цих проблем.",
      problems: [
        {
          icon: Receipt,
          problem: "Високі Рахунки за Електрику",
          description: "Платите $300-500 на місяць за електрику? Кондиціонер, опалення та побутова техніка підвищують ваші рахунки.",
          solution: "10 Місяців Нульові Рахунки",
          solutionDesc: "Виробляйте власну електрику з сонячними панелями. Зберігайте надлишки в батареях або продавайте в мережу.",
          stats: "$3,600+/рік економія"
        },
        {
          icon: Flame,
          problem: "Дороге Зимове Опалення",
          description: "Витрачаєте $200-400/місяць на газ або електричне опалення взимку?",
          solution: "Безкоштовне Опалення",
          solutionDesc: "З тепловим насосом: 1 кВт електрики = 4-5 кВт тепла. Сонячна система знижує зимові витрати до нуля.",
          stats: "ККД 4-5"
        },
        {
          icon: Snowflake,
          problem: "Літні Витрати на Кондиціонер",
          description: "Робота кондиціонера в кожній кімнаті в середземноморську спеку подвоює ваші рахунки?",
          solution: "Охолодження Безкоштовно",
          solutionDesc: "Той самий тепловий насос охолоджує влітку. Сонячні панелі виробляють найбільше енергії в найспекотніші дні.",
          stats: "Необмежене використання кондиціонера"
        },
        {
          icon: ShieldAlert,
          problem: "Відключення Електрики",
          description: "При частих літніх відключеннях кондиціонер і холодильник не працюють?",
          solution: "Безперебійне Живлення",
          solutionDesc: "Батарея 10-15 кВтг забезпечує 4-8 годин безперебійної енергії. Ваші критичні пристрої не зупиняються.",
          stats: "4-8 годин резервного живлення"
        },
        {
          icon: Wrench,
          problem: "Різні Системи, Різне Обслуговування",
          description: "Кондиціонер, котел, бойлер... Окремий сервіс, обслуговування та витрати для кожного?",
          solution: "Одна Система, Один Сервіс",
          solutionDesc: "Німецька система 4-в-1 обслуговується одним сервісом. 10-річна гарантія мінімізує витрати на обслуговування.",
          stats: "10 років повна гарантія"
        },
        {
          icon: TrendingUp,
          problem: "Постійно Зростаючі Ціни на Енергію",
          description: "Щорічне зростання цін на електрику та газ (30-50%) напружує ваш бюджет?",
          solution: "Незалежність від Зростання Цін",
          solutionDesc: "Коли ви виробляєте власну енергію, підвищення цін вас не стосується. 25 років фіксованих витрат на енергію.",
          stats: "25 років цінова гарантія"
        }
      ],
      ctaTitle: "Постійне Рішення Ваших Проблем",
      ctaSubtitle: "Запишіться на безкоштовну перевірку та розрахунок економії прямо зараз",
      ctaButton: "Безкоштовний Розрахунок",
      beforeAfter: {
        title: "До і Після: Реальна Економія",
        before: "До 089 Bayern",
        after: "Після 089 Bayern",
        electricBill: "Щомісячна електрика",
        heatingBill: "Щомісячне опалення",
        coolingBill: "Щомісячне охолодження",
        waterBill: "Гаряча вода",
        total: "Загальні місячні витрати",
        savings: "Річна економія"
      }
    },
    hr: {
      badge: "Rješavamo Vaše Probleme",
      title: "Imate li energetske probleme na Mediteranu?",
      subtitle: "Svake godine tisuće vlasnika vila suočavaju se s istim problemima. 089 Bayern 4-in-1 German System nudi trajna rješenja za sve te probleme.",
      problems: [
        {
          icon: Receipt,
          problem: "Visoki Računi za Struju",
          description: "Plaćate li 300-500€ mjesečno za struju? Klima, grijanje i kućanski aparati dižu vaše račune.",
          solution: "10 Mjeseci Nula Računa",
          solutionDesc: "Proizvodite vlastitu struju sa solarnim panelima. Spremite višak u baterije ili prodajte u mrežu.",
          stats: "3.600€+/god uštede"
        },
        {
          icon: Flame,
          problem: "Skupo Zimsko Grijanje",
          description: "Trošite li 200-400€/mjesečno na plin ili električno grijanje zimi?",
          solution: "Besplatno Grijanje",
          solutionDesc: "S toplinskom pumpom: 1 kW struje = 4-5 kW topline. Solarni sustav smanjuje zimske troškove na nulu.",
          stats: "COP 4-5 učinkovitost"
        },
        {
          icon: Snowflake,
          problem: "Ljetni Troškovi Klime",
          description: "Udvostručuje li rad klime u svakoj sobi tijekom mediteranske vrućine vaše račune?",
          solution: "Hlađenje bez Troškova",
          solutionDesc: "Ista toplinska pumpa hladi ljeti. Solarni paneli proizvode najviše energije u najtoplijim danima.",
          stats: "Neograničeno korištenje klime"
        },
        {
          icon: ShieldAlert,
          problem: "Nestanci Struje",
          description: "Tijekom čestih ljetnih nestanaka klima i hladnjak ne rade?",
          solution: "Neprekidno Napajanje",
          solutionDesc: "10-15 kWh kapacitet baterije osigurava 4-8 sati neprekidne energije. Vaši kritični uređaji nikad ne staju.",
          stats: "4-8 sati rezervnog napajanja"
        },
        {
          icon: Wrench,
          problem: "Različiti Sustavi, Različito Održavanje",
          description: "Klima, bojler, grijač vode... Zasebni servis, održavanje i troškovi za svaki?",
          solution: "Jedan Sustav, Jedan Servis",
          solutionDesc: "Njemački sustav 4-u-1 održava jedan servis. 10-godišnje jamstvo minimizira troškove održavanja.",
          stats: "10 godina puno jamstvo"
        },
        {
          icon: TrendingUp,
          problem: "Stalno Rastuće Cijene Energije",
          description: "Godišnji rast cijena struje i plina (30-50%) opterećuje vaš budžet?",
          solution: "Neovisnost o Rastu Cijena",
          solutionDesc: "Kad proizvodite vlastitu energiju, povećanja cijena vas ne pogađaju. 25 godina fiksnih troškova energije.",
          stats: "25 godina cjenovna garancija"
        }
      ],
      ctaTitle: "Trajno Rješenje Vaših Problema",
      ctaSubtitle: "Zakažite besplatnu provjeru i izračun ušteda odmah",
      ctaButton: "Besplatan Izračun",
      beforeAfter: {
        title: "Prije i Poslije: Stvarne Uštede",
        before: "Prije 089 Bayern",
        after: "Poslije 089 Bayern",
        electricBill: "Mjesečna struja",
        heatingBill: "Mjesečno grijanje",
        coolingBill: "Mjesečno hlađenje",
        waterBill: "Topla voda",
        total: "Ukupni mjesečni trošak",
        savings: "Godišnja ušteda"
      }
    },
    ar: {
      badge: "نحل مشاكلكم",
      title: "هل تواجه مشاكل طاقة في البحر المتوسط؟",
      subtitle: "كل عام يواجه آلاف أصحاب الفلل نفس المشاكل. نظام 089 Bayern 4-in-1 الألماني يقدم حلولاً دائمة لجميع هذه المشاكل.",
      problems: [
        {
          icon: Receipt,
          problem: "فواتير كهرباء عالية",
          description: "تدفع 300-500$ شهرياً للكهرباء؟ التكييف والتدفئة والأجهزة ترفع فواتيرك.",
          solution: "10 أشهر فواتير صفرية",
          solutionDesc: "أنتج كهرباءك الخاصة بالألواح الشمسية. خزن الفائض في البطاريات أو بعه للشبكة.",
          stats: "$3,600+/سنة توفير"
        },
        {
          icon: Flame,
          problem: "تدفئة شتوية باهظة",
          description: "تنفق 200-400$/شهر على الغاز أو التدفئة الكهربائية في الشتاء؟",
          solution: "تدفئة مجانية",
          solutionDesc: "مع مضخة الحرارة: 1 كيلوواط كهرباء = 4-5 كيلوواط حرارة. النظام الشمسي يخفض تكاليف الشتاء للصفر.",
          stats: "كفاءة COP 4-5"
        },
        {
          icon: Snowflake,
          problem: "تكاليف تكييف صيفية",
          description: "هل تشغيل التكييف في كل غرفة في حر المتوسط يضاعف فواتيرك؟",
          solution: "تبريد بلا تكلفة",
          solutionDesc: "نفس مضخة الحرارة تبرد في الصيف. الألواح الشمسية تنتج أكثر طاقة في أشد الأيام حرارة.",
          stats: "استخدام غير محدود للتكييف"
        },
        {
          icon: ShieldAlert,
          problem: "انقطاع الكهرباء",
          description: "أثناء الانقطاعات الصيفية المتكررة، التكييف والثلاجة لا يعملان؟",
          solution: "طاقة متواصلة",
          solutionDesc: "سعة بطارية 10-15 كيلوواط ساعة توفر 4-8 ساعات طاقة متواصلة. أجهزتك الحرجة لا تتوقف أبداً.",
          stats: "4-8 ساعات طاقة احتياطية"
        },
        {
          icon: Wrench,
          problem: "أنظمة مختلفة، صيانة مختلفة",
          description: "تكييف، سخان، غلاية... خدمة منفصلة وصيانة وتكاليف لكل منها؟",
          solution: "نظام واحد، خدمة واحدة",
          solutionDesc: "النظام الألماني 4 في 1 تصانه خدمة واحدة. ضمان 10 سنوات يقلل تكاليف الصيانة.",
          stats: "10 سنوات ضمان كامل"
        },
        {
          icon: TrendingUp,
          problem: "أسعار طاقة مرتفعة باستمرار",
          description: "ارتفاع أسعار الكهرباء والغاز السنوي (30-50%) يضغط على ميزانيتك؟",
          solution: "استقلال عن ارتفاع الأسعار",
          solutionDesc: "عندما تنتج طاقتك الخاصة، ارتفاع الأسعار لا يؤثر عليك. 25 سنة تكاليف طاقة ثابتة.",
          stats: "25 سنة ضمان سعر"
        }
      ],
      ctaTitle: "حل دائم لمشاكلك",
      ctaSubtitle: "حدد موعداً للفحص المجاني وحساب التوفير الآن",
      ctaButton: "حساب مجاني",
      beforeAfter: {
        title: "قبل وبعد: توفير حقيقي",
        before: "قبل 089 Bayern",
        after: "بعد 089 Bayern",
        electricBill: "كهرباء شهرية",
        heatingBill: "تدفئة شهرية",
        coolingBill: "تبريد شهري",
        waterBill: "ماء ساخن",
        total: "إجمالي التكلفة الشهرية",
        savings: "توفير سنوي"
      }
    }
  };

  const t = content[language as keyof typeof content] || content.tr;
  const isRTL = language === "ar";

  return (
    <section className="py-6 md:py-8 bg-gradient-to-b from-background to-muted/30" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4" data-testid="badge-problemsolver">
            <AlertTriangle className="w-4 h-4 mr-2" />
            {t.badge}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3" data-testid="text-problemsolver-title">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problems.map((item, index) => (
            <Card key={index} className="overflow-visible hover-elevate h-full" data-testid={`card-problem-${index}`}>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-destructive" />
                    </div>
                    {item.problem}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[60px]">
                    {item.description}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-bold text-base mb-2 flex items-center gap-2 text-primary">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    {item.solution}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 min-h-[48px]">
                    {item.solutionDesc}
                  </p>
                  <Badge variant="outline" className="text-sm font-medium">
                    {item.stats}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={businessHandshakeImage} 
                  alt="089 Bayern Mustafa Sakar profesyonel enerji danışmanlığı Antalya - villa sahipleri için güneş paneli ısı pompası klima batarya sistemi sözleşmesi Türkiye" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 md:bg-gradient-to-t md:from-transparent md:to-transparent" />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <Lightbulb className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3" data-testid="text-problemsolver-cta-title">
                  {t.ctaTitle}
                </h3>
                <p className="text-muted-foreground mb-5 text-lg">
                  {t.ctaSubtitle}
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToCalculator}
                  className="text-lg px-8 w-fit"
                  data-testid="button-problemsolver-cta"
                >
                  {t.ctaButton}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
