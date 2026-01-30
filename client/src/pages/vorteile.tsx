import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, TrendingUp, Zap, ThermometerSun, Sparkles, ArrowRight, Check, Battery, Coins, Leaf, Award, Snowflake, Flame, Plug, Home, Droplets, WifiIcon, Car, ChevronRight, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CrossLinks from "@/components/CrossLinks";
import TrustCallToAction from "@/components/TrustCallToAction";
import SectionCTA from "@/components/SectionCTA";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@assets/images/optimized/hero-benefits.jpg";
import consultationActionImage from "@assets/images/optimized/benefits-consultation-action.jpg";
import freeElectricityImage from "@assets/images/optimized/benefit-free-electricity.jpg";
import freeHeatingImage from "@assets/images/optimized/benefit-free-heating.jpg";
import freeCoolingImage from "@assets/images/optimized/benefit-free-cooling.jpg";
import freeHotWaterImage from "@assets/images/optimized/benefit-free-hotwater.jpg";
import systemSolarImage from "@assets/images/optimized/system-solar-panels.jpg";
import systemHeatPumpImage from "@assets/images/optimized/system-heat-pump.jpg";
import systemBatteryImage from "@assets/images/optimized/system-battery-storage.jpg";
import systemHotWaterImage from "@assets/images/optimized/system-hot-water-tank.jpg";

export default function Vorteile() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const goToContact = () => {
    setIsLeadFormOpen(true);
  };

  const content = {
    tr: {
      badge: "089 Bayern 4-in-1 German System",
      title: "089 Bayern ile",
      titleHighlight: "10 Ay Ücretsiz Enerji",
      subtitle: "089 Bayern 4-in-1 German System: Wärmepompa, güneş paneli, enerji depolama ve sıcak su deposu - hepsi tek bir sistemde. Antalya'nın 300+ güneşli günü sayesinde yılın 10 ayı boyunca elektrik ve ısınma masraflarınız neredeyse sıfır.",
      ctaButton: "Tasarruf Hesapla",
      freeEnergyTitle: "10 Ay Ücretsiz Enerji",
      freeEnergySubtitle: "Akdeniz güneşi ile enerji maliyetlerinizi minimuma indirin",
      freeElectricity: "Ücretsiz Elektrik",
      freeElectricityDesc: "PV paneller ile kendi elektriğinizi üretin. Fazla enerjiyi depolayın veya şebekeye satın.",
      freeHeating: "Ücretsiz Isınma",
      freeHeatingDesc: "Wärmepompa ile güneş enerjisiyle ısının. COP 4-5 verimlilik ile 1 kW elektrik = 4-5 kW ısı.",
      freeCooling: "Ücretsiz Soğutma",
      freeCoolingDesc: "Aynı wärmepompa yaz aylarında klima olarak çalışır. Sıfır maliyetli serinlik.",
      freeHotWater: "Ücretsiz Sıcak Su",
      freeHotWaterDesc: "Güneş enerjisi ile ısıtılan su deposu. 300L kapasite ile 4 kişilik aile için yeterli.",
      systemTitle: "089 Bayern 4-in-1 German System",
      systemSubtitle: "Dört farklı teknoloji, tek akıllı Alman sistemi",
      system1Title: "Photovoltaik (PV) Paneller",
      system1Subtitle: "Güneşten elektrik üretimi",
      system1Desc: "Yüksek verimli monokristal paneller ile Akdeniz güneşinden maksimum enerji. 25 yıl performans garantisi.",
      system1Benefits: ["10-12 kWp tipik villa kurulumu", "Yılda 16.000-19.000 kWh üretim", "25 yıl performans garantisi", "%40 daha fazla üretim (Almanya'ya göre)"],
      system2Title: "Wärmepompa (Isı Pompası)",
      system2Subtitle: "Isıtma ve soğutma tek cihazda",
      system2Desc: "Ilıman Akdeniz ikliminde wärmepompa %300-400 verimle çalışır. Hem kış ısınması hem yaz serinliği.",
      system2Benefits: ["COP 4-5 verimlilik (1kW = 4-5kW ısı)", "Isıtma ve soğutma tek cihaz", "Sessiz çalışma teknolojisi", "Akıllı termostat kontrolü"],
      system3Title: "Enerji Depolama (Batarya)",
      system3Subtitle: "Gece de güneş enerjisi kullanın",
      system3Desc: "Lityum demir fosfat bataryalar ile gündüz üretilen enerjiyi gece kullanın. Şebeke kesintilerinde kesintisiz güç.",
      system3Benefits: ["10-15 kWh tipik kapasite", "4-8 saat kesintisiz güç", "15-20 yıl batarya ömrü", "Akıllı enerji yönetimi"],
      system4Title: "Sıcak Su Deposu",
      system4Subtitle: "Termal enerji depolama",
      system4Desc: "Gündüz güneş enerjisi ile ısıtılan su, gece duş ve mutfak kullanımı için hazır. Enerji tasarrufu artık maksimum.",
      system4Benefits: ["300L 4 kişilik aile için", "55-65°C su sıcaklığı", "Yüksek izolasyon kalitesi", "Lejyonella koruması"],
      expandTitle: "Modüler Genişleme",
      expandSubtitle: "Sisteminizi ihtiyacınıza göre genişletin",
      expand1Title: "Akıllı Klima",
      expand1Desc: "Ek split klimalar ile tüm odaları bağımsız kontrol edin",
      expand2Title: "Elektrikli Araç Şarjı",
      expand2Desc: "Wallbox ile elektrikli aracınızı güneş enerjisiyle şarj edin",
      expand3Title: "Akıllı Ev Sistemi",
      expand3Desc: "Tüm sistemi telefon uygulaması ile kontrol edin",
      expand4Title: "Ek Batarya",
      expand4Desc: "Daha fazla depolama kapasitesi için batarya modülleri ekleyin",
      statsTitle: "Rakamlarla 10 Ay Ücretsiz Enerji",
      stat1Value: "300+",
      stat1Label: "Güneşli Gün/Yıl",
      stat2Value: "%90",
      stat2Label: "Enerji Bağımsızlığı",
      stat3Value: "4-6",
      stat3Label: "Yıl Geri Ödeme",
      stat4Value: "10",
      stat4Label: "Ay Ücretsiz Enerji",
      comparisonTitle: "Geleneksel vs. 089 Bayern German System",
      traditional: "Geleneksel Sistem",
      integrated: "089 Bayern German System",
      electricBill: "Elektrik Faturası",
      gasBill: "Doğalgaz/Yakıt",
      coolingBill: "Klima Maliyeti",
      waterBill: "Sıcak Su",
      traditionalValues: { electric: "₺3.000+/ay", gas: "₺2.000+/ay", cooling: "₺1.500+/ay", water: "₺500+/ay" },
      integratedValues: { electric: "Neredeyse ₺0", gas: "₺0", cooling: "₺0", water: "₺0" },
      ctaTitle: "Ücretsiz Enerji ile Tanışın",
      ctaSubtitle: "10 ay boyunca elektrik ve ısınma masrafı ödemeden yaşayın",
    },
    de: {
      badge: "089 Bayern 4-in-1 German System",
      title: "Mit 089 Bayern",
      titleHighlight: "10 Monate Kostenlose Energie",
      subtitle: "089 Bayern 4-in-1 German System: Wärmepumpe, Solarpanels, Energiespeicher und Warmwasserspeicher - alles in einem System. Dank der 300+ Sonnentage in Antalya sind Ihre Strom- und Heizkosten 10 Monate im Jahr praktisch null.",
      ctaButton: "Ersparnis berechnen",
      freeEnergyTitle: "10 Monate Kostenlose Energie",
      freeEnergySubtitle: "Minimieren Sie Ihre Energiekosten mit der Mittelmeersonne",
      freeElectricity: "Kostenloser Strom",
      freeElectricityDesc: "Erzeugen Sie Ihren eigenen Strom mit PV-Panels. Speichern Sie überschüssige Energie oder verkaufen Sie sie ins Netz.",
      freeHeating: "Kostenlose Heizung",
      freeHeatingDesc: "Heizen Sie mit Sonnenenergie durch die Wärmepumpe. Mit COP 4-5 Effizienz: 1 kW Strom = 4-5 kW Wärme.",
      freeCooling: "Kostenlose Kühlung",
      freeCoolingDesc: "Dieselbe Wärmepumpe arbeitet im Sommer als Klimaanlage. Kühlung ohne Kosten.",
      freeHotWater: "Kostenloses Warmwasser",
      freeHotWaterDesc: "Durch Sonnenenergie erwärmter Wasserspeicher. 300L Kapazität reicht für eine 4-köpfige Familie.",
      systemTitle: "089 Bayern 4-in-1 German System",
      systemSubtitle: "Vier verschiedene Technologien, ein intelligentes deutsches System",
      system1Title: "Photovoltaik (PV) Panels",
      system1Subtitle: "Stromerzeugung aus Sonnenlicht",
      system1Desc: "Hocheffiziente monokristalline Panels für maximale Energie aus der Mittelmeersonne. 25 Jahre Leistungsgarantie.",
      system1Benefits: ["10-12 kWp typische Villa-Installation", "16.000-19.000 kWh/Jahr Produktion", "25 Jahre Leistungsgarantie", "40% mehr Produktion als in Deutschland"],
      system2Title: "Wärmepumpe",
      system2Subtitle: "Heizung und Kühlung in einem Gerät",
      system2Desc: "Im milden Mittelmeerklima arbeitet die Wärmepumpe mit 300-400% Effizienz. Winterheizung und Sommerkühlung.",
      system2Benefits: ["COP 4-5 Effizienz (1kW = 4-5kW Wärme)", "Heizung und Kühlung in einem", "Leise Betriebstechnologie", "Intelligente Thermostatsteuerung"],
      system3Title: "Energiespeicher (Batterie)",
      system3Subtitle: "Sonnenenergie auch nachts nutzen",
      system3Desc: "Mit Lithium-Eisenphosphat-Batterien nutzen Sie tagsüber erzeugte Energie nachts. Unterbrechungsfreie Stromversorgung bei Netzausfällen.",
      system3Benefits: ["10-15 kWh typische Kapazität", "4-8 Stunden Notstrom", "15-20 Jahre Batterielebensdauer", "Intelligentes Energiemanagement"],
      system4Title: "Warmwasserspeicher",
      system4Subtitle: "Thermische Energiespeicherung",
      system4Desc: "Tagsüber mit Sonnenenergie erwärmtes Wasser ist nachts für Dusche und Küche bereit. Maximale Energieeinsparung.",
      system4Benefits: ["300L für 4-köpfige Familie", "55-65°C Wassertemperatur", "Hochwertige Isolierung", "Legionellenschutz"],
      expandTitle: "Modulare Erweiterung",
      expandSubtitle: "Erweitern Sie Ihr System nach Ihren Bedürfnissen",
      expand1Title: "Smart-Klimaanlage",
      expand1Desc: "Zusätzliche Split-Klimaanlagen für unabhängige Raumkontrolle",
      expand2Title: "E-Auto-Ladung",
      expand2Desc: "Laden Sie Ihr Elektroauto mit Sonnenenergie über Wallbox",
      expand3Title: "Smart-Home-System",
      expand3Desc: "Steuern Sie das gesamte System per Smartphone-App",
      expand4Title: "Zusätzliche Batterie",
      expand4Desc: "Batterie-Module für mehr Speicherkapazität hinzufügen",
      statsTitle: "10 Monate Kostenlose Energie in Zahlen",
      stat1Value: "300+",
      stat1Label: "Sonnentage/Jahr",
      stat2Value: "90%",
      stat2Label: "Energieunabhängigkeit",
      stat3Value: "4-6",
      stat3Label: "Jahre Amortisation",
      stat4Value: "10",
      stat4Label: "Monate kostenlose Energie",
      comparisonTitle: "Traditionell vs. 089 Bayern German System",
      traditional: "Traditionelles System",
      integrated: "089 Bayern German System",
      electricBill: "Stromrechnung",
      gasBill: "Gas/Heizöl",
      coolingBill: "Klimakosten",
      waterBill: "Warmwasser",
      traditionalValues: { electric: "300+€/Monat", gas: "200+€/Monat", cooling: "150+€/Monat", water: "50+€/Monat" },
      integratedValues: { electric: "Praktisch 0€", gas: "0€", cooling: "0€", water: "0€" },
      ctaTitle: "Entdecken Sie Kostenlose Energie",
      ctaSubtitle: "Leben Sie 10 Monate ohne Strom- und Heizkosten",
    },
    en: {
      badge: "089 Bayern 4-in-1 German System",
      title: "With 089 Bayern",
      titleHighlight: "10 Months Free Energy",
      subtitle: "089 Bayern 4-in-1 German System: Heat pump, solar panels, energy storage and hot water tank - all in one system. Thanks to 300+ sunny days in Antalya, your electricity and heating costs are virtually zero for 10 months a year.",
      ctaButton: "Calculate Savings",
      freeEnergyTitle: "10 Months Free Energy",
      freeEnergySubtitle: "Minimize your energy costs with Mediterranean sunshine",
      freeElectricity: "Free Electricity",
      freeElectricityDesc: "Generate your own electricity with PV panels. Store excess energy or sell it to the grid.",
      freeHeating: "Free Heating",
      freeHeatingDesc: "Heat with solar energy through the heat pump. With COP 4-5 efficiency: 1 kW electricity = 4-5 kW heat.",
      freeCooling: "Free Cooling",
      freeCoolingDesc: "The same heat pump works as an air conditioner in summer. Cooling at zero cost.",
      freeHotWater: "Free Hot Water",
      freeHotWaterDesc: "Water tank heated by solar energy. 300L capacity sufficient for a family of 4.",
      systemTitle: "089 Bayern 4-in-1 German System",
      systemSubtitle: "Four different technologies, one intelligent German system",
      system1Title: "Photovoltaic (PV) Panels",
      system1Subtitle: "Electricity generation from sunlight",
      system1Desc: "High-efficiency monocrystalline panels for maximum energy from the Mediterranean sun. 25-year performance warranty.",
      system1Benefits: ["10-12 kWp typical villa installation", "16,000-19,000 kWh/year production", "25-year performance warranty", "40% more production than Germany"],
      system2Title: "Heat Pump",
      system2Subtitle: "Heating and cooling in one device",
      system2Desc: "In the mild Mediterranean climate, the heat pump operates at 300-400% efficiency. Winter heating and summer cooling.",
      system2Benefits: ["COP 4-5 efficiency (1kW = 4-5kW heat)", "Heating and cooling in one", "Quiet operation technology", "Smart thermostat control"],
      system3Title: "Energy Storage (Battery)",
      system3Subtitle: "Use solar energy at night too",
      system3Desc: "With lithium iron phosphate batteries, use energy generated during the day at night. Uninterrupted power during grid outages.",
      system3Benefits: ["10-15 kWh typical capacity", "4-8 hours backup power", "15-20 year battery life", "Intelligent energy management"],
      system4Title: "Hot Water Tank",
      system4Subtitle: "Thermal energy storage",
      system4Desc: "Water heated by solar energy during the day is ready for showers and kitchen at night. Maximum energy savings.",
      system4Benefits: ["300L for family of 4", "55-65°C water temperature", "High-quality insulation", "Legionella protection"],
      expandTitle: "Modular Expansion",
      expandSubtitle: "Expand your system according to your needs",
      expand1Title: "Smart Air Conditioning",
      expand1Desc: "Additional split AC units for independent room control",
      expand2Title: "EV Charging",
      expand2Desc: "Charge your electric car with solar energy via wallbox",
      expand3Title: "Smart Home System",
      expand3Desc: "Control the entire system via smartphone app",
      expand4Title: "Additional Battery",
      expand4Desc: "Add battery modules for more storage capacity",
      statsTitle: "10 Months Free Energy in Numbers",
      stat1Value: "300+",
      stat1Label: "Sunny Days/Year",
      stat2Value: "90%",
      stat2Label: "Energy Independence",
      stat3Value: "4-6",
      stat3Label: "Years Payback",
      stat4Value: "10",
      stat4Label: "Months Free Energy",
      comparisonTitle: "Traditional vs. 089 Bayern German System",
      traditional: "Traditional System",
      integrated: "089 Bayern German System",
      electricBill: "Electricity Bill",
      gasBill: "Gas/Oil",
      coolingBill: "Cooling Cost",
      waterBill: "Hot Water",
      traditionalValues: { electric: "$300+/month", gas: "$200+/month", cooling: "$150+/month", water: "$50+/month" },
      integratedValues: { electric: "Virtually $0", gas: "$0", cooling: "$0", water: "$0" },
      ctaTitle: "Discover Free Energy",
      ctaSubtitle: "Live 10 months without electricity and heating costs",
    },
    ru: {
      badge: "089 Bayern 4-in-1 German System",
      title: "С 089 Bayern",
      titleHighlight: "10 Месяцев Бесплатной Энергии",
      subtitle: "089 Bayern 4-in-1 German System: Тепловой насос, солнечные панели, накопитель энергии и бойлер - всё в одной системе. Благодаря 300+ солнечным дням в Анталии ваши расходы на электричество и отопление практически нулевые 10 месяцев в году.",
      ctaButton: "Рассчитать экономию",
      freeEnergyTitle: "10 Месяцев Бесплатной Энергии",
      freeEnergySubtitle: "Минимизируйте затраты на энергию со средиземноморским солнцем",
      freeElectricity: "Бесплатное электричество",
      freeElectricityDesc: "Производите собственное электричество с PV-панелями. Храните излишки или продавайте в сеть.",
      freeHeating: "Бесплатное отопление",
      freeHeatingDesc: "Отапливайтесь солнечной энергией через тепловой насос. При КПД 4-5: 1 кВт электричества = 4-5 кВт тепла.",
      freeCooling: "Бесплатное охлаждение",
      freeCoolingDesc: "Тот же тепловой насос работает как кондиционер летом. Охлаждение без затрат.",
      freeHotWater: "Бесплатная горячая вода",
      freeHotWaterDesc: "Бойлер, нагретый солнечной энергией. 300л достаточно для семьи из 4 человек.",
      systemTitle: "089 Bayern 4-in-1 German System",
      systemSubtitle: "Четыре разные технологии, одна умная немецкая система",
      system1Title: "Фотоэлектрические (PV) Панели",
      system1Subtitle: "Производство электричества из солнечного света",
      system1Desc: "Высокоэффективные монокристаллические панели для максимальной энергии от средиземноморского солнца. 25 лет гарантии.",
      system1Benefits: ["10-12 кВтп типичная установка для виллы", "16.000-19.000 кВтч/год производство", "25 лет гарантии", "На 40% больше производства чем в Германии"],
      system2Title: "Тепловой Насос",
      system2Subtitle: "Отопление и охлаждение в одном устройстве",
      system2Desc: "В мягком средиземноморском климате тепловой насос работает с КПД 300-400%. Зимнее отопление и летнее охлаждение.",
      system2Benefits: ["КПД 4-5 (1кВт = 4-5кВт тепла)", "Отопление и охлаждение в одном", "Тихая работа", "Умное управление термостатом"],
      system3Title: "Накопитель Энергии (Батарея)",
      system3Subtitle: "Используйте солнечную энергию ночью",
      system3Desc: "С литий-железо-фосфатными батареями используйте энергию, произведённую днём, ночью. Бесперебойное питание при отключении сети.",
      system3Benefits: ["10-15 кВтч типичная ёмкость", "4-8 часов резервного питания", "15-20 лет срок службы батареи", "Умное управление энергией"],
      system4Title: "Бойлер для Горячей Воды",
      system4Subtitle: "Термическое хранение энергии",
      system4Desc: "Вода, нагретая солнечной энергией днём, готова для душа и кухни ночью. Максимальная экономия энергии.",
      system4Benefits: ["300л для семьи из 4 человек", "55-65°C температура воды", "Качественная изоляция", "Защита от легионеллы"],
      expandTitle: "Модульное Расширение",
      expandSubtitle: "Расширяйте систему по вашим потребностям",
      expand1Title: "Умный Кондиционер",
      expand1Desc: "Дополнительные сплит-системы для независимого контроля комнат",
      expand2Title: "Зарядка Электромобиля",
      expand2Desc: "Заряжайте электромобиль солнечной энергией через wallbox",
      expand3Title: "Умный Дом",
      expand3Desc: "Управляйте всей системой через приложение",
      expand4Title: "Дополнительная Батарея",
      expand4Desc: "Добавьте модули батарей для большей ёмкости",
      statsTitle: "10 Месяцев Бесплатной Энергии в Цифрах",
      stat1Value: "300+",
      stat1Label: "Солнечных дней/год",
      stat2Value: "90%",
      stat2Label: "Энергонезависимость",
      stat3Value: "4-6",
      stat3Label: "Лет окупаемость",
      stat4Value: "10",
      stat4Label: "Месяцев бесплатной энергии",
      comparisonTitle: "Традиционная vs. 089 Bayern German System",
      traditional: "Традиционная Система",
      integrated: "089 Bayern German System",
      electricBill: "Счёт за электричество",
      gasBill: "Газ/Мазут",
      coolingBill: "Охлаждение",
      waterBill: "Горячая вода",
      traditionalValues: { electric: "300+$/месяц", gas: "200+$/месяц", cooling: "150+$/месяц", water: "50+$/месяц" },
      integratedValues: { electric: "Практически $0", gas: "$0", cooling: "$0", water: "$0" },
      ctaTitle: "Откройте Бесплатную Энергию",
      ctaSubtitle: "Живите 10 месяцев без счетов за электричество и отопление",
    },
    uk: {
      badge: "089 Bayern 4-in-1 German System",
      title: "З 089 Bayern",
      titleHighlight: "10 Місяців Безкоштовної Енергії",
      subtitle: "089 Bayern 4-in-1 German System: Тепловий насос, сонячні панелі, накопичувач енергії та бойлер - все в одній системі. Завдяки 300+ сонячним дням в Анталії ваші витрати на електрику та опалення практично нульові 10 місяців на рік.",
      ctaButton: "Розрахувати економію",
      freeEnergyTitle: "10 Місяців Безкоштовної Енергії",
      freeEnergySubtitle: "Мінімізуйте витрати на енергію з середземноморським сонцем",
      freeElectricity: "Безкоштовна електрика",
      freeElectricityDesc: "Виробляйте власну електрику з PV-панелями. Зберігайте надлишки або продавайте в мережу.",
      freeHeating: "Безкоштовне опалення",
      freeHeatingDesc: "Опалюйтеся сонячною енергією через тепловий насос. При ККД 4-5: 1 кВт електрики = 4-5 кВт тепла.",
      freeCooling: "Безкоштовне охолодження",
      freeCoolingDesc: "Той самий тепловий насос працює як кондиціонер влітку. Охолодження без витрат.",
      freeHotWater: "Безкоштовна гаряча вода",
      freeHotWaterDesc: "Бойлер, нагрітий сонячною енергією. 300л достатньо для сім'ї з 4 осіб.",
      systemTitle: "089 Bayern 4-in-1 German System",
      systemSubtitle: "Чотири різні технології, одна розумна німецька система",
      system1Title: "Фотоелектричні (PV) Панелі",
      system1Subtitle: "Виробництво електрики з сонячного світла",
      system1Desc: "Високоефективні монокристалічні панелі для максимальної енергії від середземноморського сонця. 25 років гарантії.",
      system1Benefits: ["10-12 кВтп типова установка для вілли", "16.000-19.000 кВтг/рік виробництво", "25 років гарантії", "На 40% більше виробництва ніж у Німеччині"],
      system2Title: "Тепловий Насос",
      system2Subtitle: "Опалення та охолодження в одному пристрої",
      system2Desc: "У м'якому середземноморському кліматі тепловий насос працює з ККД 300-400%. Зимове опалення та літнє охолодження.",
      system2Benefits: ["ККД 4-5 (1кВт = 4-5кВт тепла)", "Опалення та охолодження в одному", "Тиха робота", "Розумне керування термостатом"],
      system3Title: "Накопичувач Енергії (Батарея)",
      system3Subtitle: "Використовуйте сонячну енергію вночі",
      system3Desc: "З літій-залізо-фосфатними батареями використовуйте енергію, вироблену вдень, вночі. Безперебійне живлення при відключенні мережі.",
      system3Benefits: ["10-15 кВтг типова ємність", "4-8 годин резервного живлення", "15-20 років термін служби батареї", "Розумне керування енергією"],
      system4Title: "Бойлер для Гарячої Води",
      system4Subtitle: "Термічне зберігання енергії",
      system4Desc: "Вода, нагріта сонячною енергією вдень, готова для душу та кухні вночі. Максимальна економія енергії.",
      system4Benefits: ["300л для сім'ї з 4 осіб", "55-65°C температура води", "Якісна ізоляція", "Захист від легіонели"],
      expandTitle: "Модульне Розширення",
      expandSubtitle: "Розширюйте систему за вашими потребами",
      expand1Title: "Розумний Кондиціонер",
      expand1Desc: "Додаткові спліт-системи для незалежного контролю кімнат",
      expand2Title: "Зарядка Електромобіля",
      expand2Desc: "Заряджайте електромобіль сонячною енергією через wallbox",
      expand3Title: "Розумний Дім",
      expand3Desc: "Керуйте всією системою через додаток",
      expand4Title: "Додаткова Батарея",
      expand4Desc: "Додайте модулі батарей для більшої ємності",
      statsTitle: "10 Місяців Безкоштовної Енергії в Цифрах",
      stat1Value: "300+",
      stat1Label: "Сонячних днів/рік",
      stat2Value: "90%",
      stat2Label: "Енергонезалежність",
      stat3Value: "4-6",
      stat3Label: "Років окупність",
      stat4Value: "10",
      stat4Label: "Місяців безкоштовної енергії",
      comparisonTitle: "Традиційна vs. 089 Bayern German System",
      traditional: "Традиційна Система",
      integrated: "089 Bayern German System",
      electricBill: "Рахунок за електрику",
      gasBill: "Газ/Мазут",
      coolingBill: "Охолодження",
      waterBill: "Гаряча вода",
      traditionalValues: { electric: "300+$/місяць", gas: "200+$/місяць", cooling: "150+$/місяць", water: "50+$/місяць" },
      integratedValues: { electric: "Практично $0", gas: "$0", cooling: "$0", water: "$0" },
      ctaTitle: "Відкрийте Безкоштовну Енергію",
      ctaSubtitle: "Живіть 10 місяців без рахунків за електрику та опалення",
    },
    ar: {
      badge: "4 في 1 نظام طاقة",
      title: "10 أشهر من",
      titleHighlight: "الطاقة المجانية",
      subtitle: "مضخة حرارية، ألواح شمسية، تخزين طاقة وخزان مياه ساخنة - كل شيء في نظام واحد. بفضل 300+ يوم مشمس في أنطاليا، تكون تكاليف الكهرباء والتدفئة صفراً تقريباً لمدة 10 أشهر في السنة.",
      ctaButton: "احسب التوفير",
      freeEnergyTitle: "10 أشهر طاقة مجانية",
      freeEnergySubtitle: "قلل تكاليف الطاقة مع شمس البحر المتوسط",
      freeElectricity: "كهرباء مجانية",
      freeElectricityDesc: "أنتج كهرباءك الخاصة مع ألواح PV. خزّن الفائض أو بعه للشبكة.",
      freeHeating: "تدفئة مجانية",
      freeHeatingDesc: "سخّن بالطاقة الشمسية عبر المضخة الحرارية. بكفاءة 4-5: 1 كيلوواط كهرباء = 4-5 كيلوواط حرارة.",
      freeCooling: "تبريد مجاني",
      freeCoolingDesc: "نفس المضخة الحرارية تعمل كمكيف في الصيف. تبريد بدون تكلفة.",
      freeHotWater: "مياه ساخنة مجانية",
      freeHotWaterDesc: "خزان مياه مُسخّن بالطاقة الشمسية. سعة 300 لتر تكفي لعائلة من 4 أفراد.",
      systemTitle: "4 في 1 نظام متكامل",
      systemSubtitle: "أربع تقنيات مختلفة، نظام ذكي واحد",
      system1Title: "ألواح الطاقة الشمسية (PV)",
      system1Subtitle: "توليد الكهرباء من ضوء الشمس",
      system1Desc: "ألواح أحادية البلورة عالية الكفاءة لأقصى طاقة من شمس البحر المتوسط. ضمان 25 عاماً.",
      system1Benefits: ["10-12 كيلوواط ذروة تركيب فيلا نموذجي", "16,000-19,000 كيلوواط ساعة/سنة إنتاج", "25 سنة ضمان", "إنتاج أكثر بنسبة 40% من ألمانيا"],
      system2Title: "المضخة الحرارية",
      system2Subtitle: "تدفئة وتبريد في جهاز واحد",
      system2Desc: "في مناخ البحر المتوسط المعتدل، تعمل المضخة الحرارية بكفاءة 300-400%. تدفئة شتوية وتبريد صيفي.",
      system2Benefits: ["كفاءة 4-5 (1كيلوواط = 4-5 كيلوواط حرارة)", "تدفئة وتبريد في جهاز واحد", "تقنية تشغيل هادئة", "تحكم ذكي بالترموستات"],
      system3Title: "تخزين الطاقة (بطارية)",
      system3Subtitle: "استخدم الطاقة الشمسية ليلاً أيضاً",
      system3Desc: "مع بطاريات ليثيوم فوسفات الحديد، استخدم الطاقة المولدة نهاراً في الليل. طاقة غير منقطعة أثناء انقطاع الشبكة.",
      system3Benefits: ["10-15 كيلوواط ساعة سعة نموذجية", "4-8 ساعات طاقة احتياطية", "15-20 سنة عمر البطارية", "إدارة طاقة ذكية"],
      system4Title: "خزان المياه الساخنة",
      system4Subtitle: "تخزين الطاقة الحرارية",
      system4Desc: "المياه المُسخّنة بالطاقة الشمسية نهاراً جاهزة للاستحمام والمطبخ ليلاً. أقصى توفير للطاقة.",
      system4Benefits: ["300 لتر لعائلة من 4 أفراد", "55-65 درجة مئوية حرارة المياه", "عزل عالي الجودة", "حماية من الليجيونيلا"],
      expandTitle: "توسيع معياري",
      expandSubtitle: "وسّع نظامك حسب احتياجاتك",
      expand1Title: "تكييف ذكي",
      expand1Desc: "وحدات سبليت إضافية للتحكم المستقل بالغرف",
      expand2Title: "شحن السيارة الكهربائية",
      expand2Desc: "اشحن سيارتك الكهربائية بالطاقة الشمسية عبر wallbox",
      expand3Title: "نظام المنزل الذكي",
      expand3Desc: "تحكم بالنظام بأكمله عبر تطبيق الهاتف",
      expand4Title: "بطارية إضافية",
      expand4Desc: "أضف وحدات بطارية لمزيد من السعة التخزينية",
      statsTitle: "10 أشهر طاقة مجانية بالأرقام",
      stat1Value: "+300",
      stat1Label: "يوم مشمس/سنة",
      stat2Value: "90%",
      stat2Label: "استقلالية الطاقة",
      stat3Value: "4-6",
      stat3Label: "سنوات استرداد",
      stat4Value: "10",
      stat4Label: "أشهر طاقة مجانية",
      comparisonTitle: "التقليدي مقابل 089 Bayern German System",
      traditional: "النظام التقليدي",
      integrated: "089 Bayern German System",
      electricBill: "فاتورة الكهرباء",
      gasBill: "الغاز/الوقود",
      coolingBill: "تكلفة التبريد",
      waterBill: "المياه الساخنة",
      traditionalValues: { electric: "+300$/شهر", gas: "+200$/شهر", cooling: "+150$/شهر", water: "+50$/شهر" },
      integratedValues: { electric: "تقريباً $0", gas: "$0", cooling: "$0", water: "$0" },
      ctaTitle: "اكتشف الطاقة المجانية",
      ctaSubtitle: "عش 10 أشهر بدون فواتير كهرباء وتدفئة",
    },
  };

  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  const stats = [
    { value: c.stat1Value, label: c.stat1Label, icon: Sun },
    { value: c.stat2Value, label: c.stat2Label, icon: Zap },
    { value: c.stat3Value, label: c.stat3Label, icon: TrendingUp },
    { value: c.stat4Value, label: c.stat4Label, icon: Award },
  ];

  const freeEnergy = [
    { icon: Zap, title: c.freeElectricity, desc: c.freeElectricityDesc, gradient: "from-amber-500 to-yellow-500", image: freeElectricityImage, imageAlt: "Kostenloser Strom durch Solarenergie" },
    { icon: Flame, title: c.freeHeating, desc: c.freeHeatingDesc, gradient: "from-orange-500 to-red-500", image: freeHeatingImage, imageAlt: "Kostenlose Heizung mit Wärmepumpe" },
    { icon: Snowflake, title: c.freeCooling, desc: c.freeCoolingDesc, gradient: "from-sky-400 to-blue-500", image: freeCoolingImage, imageAlt: "Kostenlose Kühlung mit Samsung Klima" },
    { icon: Droplets, title: c.freeHotWater, desc: c.freeHotWaterDesc, gradient: "from-cyan-500 to-teal-500", image: freeHotWaterImage, imageAlt: "Kostenloses Warmwasser" },
  ];

  const systems = [
    { icon: Sun, title: c.system1Title, subtitle: c.system1Subtitle, desc: c.system1Desc, benefits: c.system1Benefits, gradient: "from-amber-500 to-yellow-500", iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500", image: systemSolarImage, imageAlt: "Photovoltaik Solaranlage Installation" },
    { icon: ThermometerSun, title: c.system2Title, subtitle: c.system2Subtitle, desc: c.system2Desc, benefits: c.system2Benefits, gradient: "from-orange-500 to-red-500", iconBg: "bg-gradient-to-br from-orange-500 to-red-500", image: systemHeatPumpImage, imageAlt: "Vaillant Wärmepumpe Installation" },
    { icon: Battery, title: c.system3Title, subtitle: c.system3Subtitle, desc: c.system3Desc, benefits: c.system3Benefits, gradient: "from-emerald-500 to-green-600", iconBg: "bg-gradient-to-br from-emerald-500 to-green-600", image: systemBatteryImage, imageAlt: "Samsung Batteriespeicher System" },
    { icon: Droplets, title: c.system4Title, subtitle: c.system4Subtitle, desc: c.system4Desc, benefits: c.system4Benefits, gradient: "from-cyan-500 to-blue-600", iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600", image: systemHotWaterImage, imageAlt: "Warmwasserspeicher Installation" },
  ];

  const expansions = [
    { icon: Snowflake, title: c.expand1Title, desc: c.expand1Desc },
    { icon: Car, title: c.expand2Title, desc: c.expand2Desc },
    { icon: WifiIcon, title: c.expand3Title, desc: c.expand3Desc },
    { icon: Battery, title: c.expand4Title, desc: c.expand4Desc },
  ];

  const comparisonItems = [
    { label: c.electricBill, traditional: c.traditionalValues.electric, integrated: c.integratedValues.electric },
    { label: c.gasBill, traditional: c.traditionalValues.gas, integrated: c.integratedValues.gas },
    { label: c.coolingBill, traditional: c.traditionalValues.cooling, integrated: c.integratedValues.cooling },
    { label: c.waterBill, traditional: c.traditionalValues.water, integrated: c.integratedValues.water },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-vorteile">
      <SEOHead page="vorteile" />
      <Header onCtaClick={goToContact} />
      
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center pt-16 sm:pt-20" data-testid="section-vorteile-hero">
        <div className="absolute inset-0">
          <img src={heroImage} alt="089 Bayern 4-in-1 German System Vorteile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 sm:mb-6 bg-amber-500/20 backdrop-blur-md border-amber-400/30 text-white text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              {c.badge}
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              {c.title}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                {c.titleHighlight}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
              {c.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <Button 
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 border-0 shadow-lg"
                data-testid="button-vorteile-cta"
              >
                {c.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-red-400/50 text-white bg-red-500/20 backdrop-blur-sm" 
                asChild
                data-testid="button-vorteile-phone-tr"
              >
                <a href="tel:+905071832036">
                  <Phone className="w-4 h-4 mr-2" />
                  TR +90 507 183 2036
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-amber-400/50 text-white bg-black/30 backdrop-blur-sm" 
                asChild
                data-testid="button-vorteile-phone-de"
              >
                <a href="tel:+491735994699">
                  <Phone className="w-4 h-4 mr-2" />
                  DE +49 173 5994699
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-400/50 text-white bg-green-500/20 backdrop-blur-sm" 
                onClick={() => window.open("https://wa.me/491735994699", "_blank")}
                data-testid="button-vorteile-whatsapp"
              >
                WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-400/50 text-white bg-blue-500/20 backdrop-blur-sm" 
                asChild
                data-testid="button-vorteile-email"
              >
                <a href="mailto:info@089bayern.com">Email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-5 bg-muted/30" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
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

      <section className="py-4 md:py-5 bg-background" data-testid="section-free-energy">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Sun className="w-4 h-4 mr-2" />
              {c.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {c.freeEnergyTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {c.freeEnergySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {freeEnergy.map((item, index) => (
              <Card
                key={index}
                className="border-border/50 bg-gradient-to-br from-card to-card/80 overflow-hidden"
                data-testid={`card-free-energy-${index}`}
              >
                <div className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.imageAlt}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    data-testid={`img-free-energy-${index}`}
                  />
                </div>
                <CardContent className="p-6">
                  <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="py-8 md:py-10 bg-background" data-testid="section-work-gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl mx-auto max-w-4xl w-full">
              <img 
                src={consultationActionImage} 
                alt="089 Bayern enerji danışmanı villa sahibine %70 elektrik tasarrufu gösteriyor - güneş paneli ısı pompası klima batarya sistemi fiyat hesaplama Antalya Alanya Türkiye" 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                data-testid="img-consultation-action"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-5 bg-muted/30" data-testid="section-4in1-system">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Plug className="w-4 h-4 mr-2" />
              4 in 1 System
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {c.systemTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {c.systemSubtitle}
            </p>
          </div>

          <div className="space-y-10">
            {systems.map((system, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/80"
                data-testid={`card-system-${index}`}
              >
                <div className="overflow-hidden">
                  <img 
                    src={system.image} 
                    alt={system.imageAlt}
                    className="w-full h-56 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    data-testid={`img-system-${index}`}
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl ${system.iconBg} flex items-center justify-center shadow-lg`}>
                      <system.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{system.title}</h3>
                      <p className={`text-base font-semibold bg-gradient-to-r ${system.gradient} bg-clip-text text-transparent mb-4`}>
                        {system.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{system.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {system.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
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
          <SectionCTA />
        </div>
      </section>

      <section className="py-4 md:py-5 bg-background" data-testid="section-expansions">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              <Home className="w-4 h-4 mr-2" />
              Modular
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {c.expandTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {c.expandSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expansions.map((expansion, index) => (
              <Card
                key={index}
                className="border-border/50 hover-elevate"
                data-testid={`card-expansion-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                    <expansion.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{expansion.title}</h3>
                  <p className="text-muted-foreground text-sm">{expansion.desc}</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 md:py-5 bg-muted/30" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.comparisonTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="border-border/50 bg-card/50" data-testid="card-comparison-traditional">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Coins className="w-6 h-6 text-muted-foreground" />
                  <h3 className="text-xl font-bold text-foreground">{c.traditional}</h3>
                </div>
                <div className="space-y-4">
                  {comparisonItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-bold text-destructive">{item.traditional}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-green-500/10" data-testid="card-comparison-integrated">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-emerald-500" />
                  <h3 className="text-xl font-bold text-foreground">{c.integrated}</h3>
                </div>
                <div className="space-y-4">
                  {comparisonItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-emerald-500/20 last:border-b-0">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-bold text-emerald-600">{item.integrated}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-5 bg-background" data-testid="section-cta-bottom">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-yellow-500/20 backdrop-blur-lg rounded-2xl p-10 md:p-14 border border-amber-500/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {c.ctaTitle}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {c.ctaSubtitle}
            </p>
            <Button 
              onClick={goToContact}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-600 border-0 shadow-lg"
              data-testid="button-vorteile-cta-bottom"
            >
              {c.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <TrustCallToAction />
      <CrossLinks currentPage="vorteile" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
