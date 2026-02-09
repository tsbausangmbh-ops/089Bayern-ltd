import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Home, Building2, Store, ArrowRight, ArrowLeft, Check, Calculator, 
  TrendingUp, Leaf, Banknote, Sun, Thermometer, Droplets, Battery,
  Zap, Snowflake, Euro, PiggyBank, Sparkles, Crown, Star, MapPin
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface System4in1CalculatorProps {
  onComplete?: (data: CalculatorData) => void;
}

interface CalculatorData {
  propertyType: string;
  location: string;
  propertySize: number;
  monthlyElectricity: number;
  monthlyHeating: number;
  monthlyHotWater: number;
  monthlyCooling: number;
  systemTier: "standard" | "medium" | "premium";
}

const translations: Record<string, {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  step: string;
  of: string;
  completed: string;
  back: string;
  next: string;
  calculate: string;
  step1Title: string;
  step1Subtitle: string;
  propertyVilla: string;
  propertyApartment: string;
  propertyCommercial: string;
  step2Title: string;
  step2Subtitle: string;
  propertySizeLabel: string;
  propertySizeHint: string;
  step3Title: string;
  step3Subtitle: string;
  electricityLabel: string;
  electricityHint: string;
  step4Title: string;
  step4Subtitle: string;
  heatingLabel: string;
  heatingHint: string;
  step5Title: string;
  step5Subtitle: string;
  hotWaterLabel: string;
  hotWaterHint: string;
  step6Title: string;
  step6Subtitle: string;
  coolingLabel: string;
  coolingHint: string;
  step7Title: string;
  step7Subtitle: string;
  systemStandard: string;
  systemMedium: string;
  systemPremium: string;
  standardDesc: string;
  mediumDesc: string;
  premiumDesc: string;
  monthlyTL: string;
  resultsTitle: string;
  resultsSubtitle: string;
  system4in1: string;
  systemComponents: string;
  solarPanels: string;
  heatPumpCooling: string;
  hotWaterSystem: string;
  batteryStorage: string;
  yourSystem: string;
  systemPower: string;
  investmentEUR: string;
  investmentTL: string;
  currentRate: string;
  savingsBreakdown: string;
  electricitySavings: string;
  heatingSavings: string;
  hotWaterSavings: string;
  coolingSavings: string;
  totalMonthlySavings: string;
  totalYearlySavings: string;
  paybackPeriod: string;
  years: string;
  months: string;
  tenYearSavings: string;
  twentyFiveYearSavings: string;
  co2Saved: string;
  tonsPerYear: string;
  disclaimer: string;
  ctaButton: string;
  recommended: string;
  popular: string;
  bestValue: string;
  includes: string;
  kW: string;
  locationAntalya: string;
  locationStepTitle: string;
  locationStepSubtitle: string;
  locationAntalyaCity: string;
  locationAlanya: string;
  locationKemer: string;
  locationBelek: string;
  locationSide: string;
  locationManavgat: string;
  locationFethiye: string;
  locationBodrum: string;
  locationMarmaris: string;
  locationKas: string;
  locationKalkan: string;
  locationDalyan: string;
}> = {
  de: {
    badge: "089 Bayern 4-in-1 Rechner",
    title: "Berechnen Sie Ihr",
    titleHighlight: "Sparpotenzial",
    subtitle: "Komplette Kosten- und Ersparnisanalyse für Ihr 4-in-1 Energiesystem",
    step: "Schritt",
    of: "von",
    completed: "abgeschlossen",
    back: "Zurück",
    next: "Weiter",
    calculate: "Berechnen",
    step1Title: "Welche Immobilienart?",
    step1Subtitle: "Wählen Sie Ihren Immobilientyp",
    propertyVilla: "Villa / Haus",
    propertyApartment: "Wohnung",
    propertyCommercial: "Gewerbe",
    step2Title: "Wie groß ist Ihre Immobilie?",
    step2Subtitle: "Geben Sie die Wohnfläche in m² an",
    propertySizeLabel: "Wohnfläche",
    propertySizeHint: "Gesamte beheizte/gekühlte Fläche",
    step3Title: "Ihre monatlichen Stromkosten?",
    step3Subtitle: "Aktuelle Stromrechnung pro Monat",
    electricityLabel: "Stromkosten",
    electricityHint: "Durchschnittliche monatliche Stromrechnung",
    step4Title: "Ihre monatlichen Heizkosten?",
    step4Subtitle: "Gas, Öl oder andere Heizkosten",
    heatingLabel: "Heizkosten",
    heatingHint: "Durchschnittliche monatliche Heizkosten",
    step5Title: "Ihre Warmwasserkosten?",
    step5Subtitle: "Kosten für Warmwasserbereitung",
    hotWaterLabel: "Warmwasserkosten",
    hotWaterHint: "Falls separat erfasst",
    step6Title: "Ihre Klimaanlagen-Kosten?",
    step6Subtitle: "Kosten für Kühlung im Sommer",
    coolingLabel: "Kühlungskosten",
    coolingHint: "Klimaanlage/Split-Geräte",
    step7Title: "Wählen Sie Ihr System",
    step7Subtitle: "089 Bayern 4-in-1 Pakete für Antalya/Alanya",
    systemStandard: "Standard",
    systemMedium: "Medium",
    systemPremium: "Premium",
    standardDesc: "Ideal für kleinere Häuser bis 150m²",
    mediumDesc: "Perfekt für Familienhäuser bis 250m²",
    premiumDesc: "Maximale Leistung für große Villen",
    monthlyTL: "₺/Monat",
    resultsTitle: "Ihre 089 Bayern Systemanalyse",
    resultsSubtitle: "Detaillierte Kosten- und Ersparnisberechnung",
    system4in1: "4-in-1 Premium System",
    systemComponents: "System-Komponenten",
    solarPanels: "Photovoltaik-Anlage",
    heatPumpCooling: "Wärmepumpe + Kühlung",
    hotWaterSystem: "Warmwasser-System",
    batteryStorage: "Batteriespeicher",
    yourSystem: "Ihr gewähltes System",
    systemPower: "Systemleistung",
    investmentEUR: "Investition (EUR)",
    investmentTL: "Investition (TL)",
    currentRate: "Aktueller Kurs",
    savingsBreakdown: "Monatliche Ersparnisse",
    electricitySavings: "Strom-Ersparnis",
    heatingSavings: "Heizkosten-Ersparnis",
    hotWaterSavings: "Warmwasser-Ersparnis",
    coolingSavings: "Klimakosten-Ersparnis",
    totalMonthlySavings: "Monatliche Ersparnis",
    totalYearlySavings: "Jährliche Ersparnis",
    paybackPeriod: "Amortisationszeit",
    years: "Jahre",
    months: "Monate",
    tenYearSavings: "Ersparnis in 10 Jahren",
    twentyFiveYearSavings: "Ersparnis in 25 Jahren",
    co2Saved: "CO₂-Einsparung",
    tonsPerYear: "Tonnen/Jahr",
    disclaimer: "* KEINE GEWÄHR - Alle Angaben sind ca. Preise und unverbindliche Richtwerte. Preise in TL (Türkische Lira), EUR-Umrechnung zum aktuellen Kurs 02/2026. Komplettpreis inkl. PV, Wärmepumpe, Kühlung, Warmwasser & Speicher.",
    ctaButton: "Kostenloses Angebot anfordern",
    recommended: "Empfohlen",
    popular: "Beliebt",
    bestValue: "Bestes Preis-Leistung",
    includes: "Inkl. PV + Wärmepumpe/Kühlung + Warmwasser + Batterie",
    kW: "kW",
    locationAntalya: "Standort: Antalya/Alanya, Türkei",
    locationStepTitle: "Ihr Standort",
    locationStepSubtitle: "In welcher Region befindet sich Ihre Immobilie? Die Sonneneinstrahlung beeinflusst die Ersparnis.",
    locationAntalyaCity: "Antalya",
    locationAlanya: "Alanya",
    locationKemer: "Kemer",
    locationBelek: "Belek",
    locationSide: "Side",
    locationManavgat: "Manavgat",
    locationFethiye: "Fethiye",
    locationBodrum: "Bodrum",
    locationMarmaris: "Marmaris",
    locationKas: "Kaş",
    locationKalkan: "Kalkan",
    locationDalyan: "Dalyan",
  },
  tr: {
    badge: "089 Bayern 4'ü 1 Arada Hesaplayıcı",
    title: "Tasarruf",
    titleHighlight: "potansiyelinizi hesaplayın",
    subtitle: "4'ü 1 arada enerji sisteminiz için eksiksiz maliyet ve tasarruf analizi",
    step: "Adım",
    of: "/",
    completed: "tamamlandı",
    back: "Geri",
    next: "İleri",
    calculate: "Hesapla",
    step1Title: "Mülk türünüz nedir?",
    step1Subtitle: "Mülk türünüzü seçin",
    propertyVilla: "Villa / Ev",
    propertyApartment: "Daire",
    propertyCommercial: "Ticari",
    step2Title: "Mülkünüz ne kadar büyük?",
    step2Subtitle: "Yaşam alanınızı m² olarak girin",
    propertySizeLabel: "Yaşam alanı",
    propertySizeHint: "Toplam ısıtılan/soğutulan alan",
    step3Title: "Aylık elektrik maliyetiniz?",
    step3Subtitle: "Mevcut aylık elektrik faturası",
    electricityLabel: "Elektrik maliyeti",
    electricityHint: "Ortalama aylık elektrik faturası",
    step4Title: "Aylık ısıtma maliyetiniz?",
    step4Subtitle: "Doğalgaz, mazot veya diğer ısıtma",
    heatingLabel: "Isıtma maliyeti",
    heatingHint: "Ortalama aylık ısıtma maliyeti",
    step5Title: "Sıcak su maliyetiniz?",
    step5Subtitle: "Sıcak su hazırlama maliyeti",
    hotWaterLabel: "Sıcak su maliyeti",
    hotWaterHint: "Ayrı olarak takip ediliyorsa",
    step6Title: "Klima maliyetiniz?",
    step6Subtitle: "Yazın soğutma maliyeti",
    coolingLabel: "Soğutma maliyeti",
    coolingHint: "Klima/Split cihazları",
    step7Title: "Sisteminizi seçin",
    step7Subtitle: "Antalya/Alanya için 089 Bayern 4'ü 1 Arada paketleri",
    systemStandard: "Standart",
    systemMedium: "Orta",
    systemPremium: "Premium",
    standardDesc: "150m²'ye kadar küçük evler için ideal",
    mediumDesc: "250m²'ye kadar aile evleri için mükemmel",
    premiumDesc: "Büyük villalar için maksimum güç",
    monthlyTL: "₺/Ay",
    resultsTitle: "089 Bayern Sistem Analiziniz",
    resultsSubtitle: "Detaylı maliyet ve tasarruf hesaplaması",
    system4in1: "4'ü 1 Arada Premium Sistem",
    systemComponents: "Sistem bileşenleri",
    solarPanels: "Fotovoltaik sistem",
    heatPumpCooling: "Isı pompası + Soğutma",
    hotWaterSystem: "Sıcak su sistemi",
    batteryStorage: "Batarya depolama",
    yourSystem: "Seçtiğiniz sistem",
    systemPower: "Sistem gücü",
    investmentEUR: "Yatırım (EUR)",
    investmentTL: "Yatırım (TL)",
    currentRate: "Güncel kur",
    savingsBreakdown: "Aylık tasarruflar",
    electricitySavings: "Elektrik tasarrufu",
    heatingSavings: "Isıtma tasarrufu",
    hotWaterSavings: "Sıcak su tasarrufu",
    coolingSavings: "Soğutma tasarrufu",
    totalMonthlySavings: "Aylık tasarruf",
    totalYearlySavings: "Yıllık tasarruf",
    paybackPeriod: "Amortisman süresi",
    years: "Yıl",
    months: "Ay",
    tenYearSavings: "10 yılda tasarruf",
    twentyFiveYearSavings: "25 yılda tasarruf",
    co2Saved: "CO₂ tasarrufu",
    tonsPerYear: "Ton/Yıl",
    disclaimer: "* GARANTİ VERİLMEZ - Tüm fiyatlar yaklaşık değerlerdir. Fiyatlar TL (Türk Lirası) cinsindendir, EUR dönüşümü 02/2026 güncel kuruna göredir. PV, ısı pompası, soğutma, sıcak su ve batarya dahil komple fiyat.",
    ctaButton: "Ücretsiz teklif isteyin",
    recommended: "Önerilen",
    popular: "Popüler",
    bestValue: "En iyi fiyat/performans",
    includes: "PV + Isı pompası/Soğutma + Sıcak su + Batarya dahil",
    kW: "kW",
    locationAntalya: "Konum: Antalya/Alanya, Türkiye",
    locationStepTitle: "Konumunuz",
    locationStepSubtitle: "Mülkünüz hangi bölgede? Güneş ışınımı tasarrufu etkiler.",
    locationAntalyaCity: "Antalya",
    locationAlanya: "Alanya",
    locationKemer: "Kemer",
    locationBelek: "Belek",
    locationSide: "Side",
    locationManavgat: "Manavgat",
    locationFethiye: "Fethiye",
    locationBodrum: "Bodrum",
    locationMarmaris: "Marmaris",
    locationKas: "Kaş",
    locationKalkan: "Kalkan",
    locationDalyan: "Dalyan",
  },
  en: {
    badge: "089 Bayern 4-in-1 Calculator",
    title: "Calculate Your",
    titleHighlight: "Savings Potential",
    subtitle: "Complete cost and savings analysis for your 4-in-1 energy system",
    step: "Step",
    of: "of",
    completed: "completed",
    back: "Back",
    next: "Next",
    calculate: "Calculate",
    step1Title: "What type of property?",
    step1Subtitle: "Select your property type",
    propertyVilla: "Villa / House",
    propertyApartment: "Apartment",
    propertyCommercial: "Commercial",
    step2Title: "How large is your property?",
    step2Subtitle: "Enter your living area in m²",
    propertySizeLabel: "Living area",
    propertySizeHint: "Total heated/cooled area",
    step3Title: "Your monthly electricity costs?",
    step3Subtitle: "Current monthly electricity bill",
    electricityLabel: "Electricity cost",
    electricityHint: "Average monthly electricity bill",
    step4Title: "Your monthly heating costs?",
    step4Subtitle: "Gas, oil or other heating costs",
    heatingLabel: "Heating cost",
    heatingHint: "Average monthly heating costs",
    step5Title: "Your hot water costs?",
    step5Subtitle: "Cost for hot water preparation",
    hotWaterLabel: "Hot water cost",
    hotWaterHint: "If tracked separately",
    step6Title: "Your air conditioning costs?",
    step6Subtitle: "Cooling costs in summer",
    coolingLabel: "Cooling cost",
    coolingHint: "AC/Split units",
    step7Title: "Choose your system",
    step7Subtitle: "089 Bayern 4-in-1 packages for Antalya/Alanya",
    systemStandard: "Standard",
    systemMedium: "Medium",
    systemPremium: "Premium",
    standardDesc: "Ideal for smaller homes up to 150m²",
    mediumDesc: "Perfect for family homes up to 250m²",
    premiumDesc: "Maximum power for large villas",
    monthlyTL: "₺/month",
    resultsTitle: "Your 089 Bayern System Analysis",
    resultsSubtitle: "Detailed cost and savings calculation",
    system4in1: "4-in-1 Premium System",
    systemComponents: "System components",
    solarPanels: "Photovoltaic system",
    heatPumpCooling: "Heat pump + Cooling",
    hotWaterSystem: "Hot water system",
    batteryStorage: "Battery storage",
    yourSystem: "Your selected system",
    systemPower: "System power",
    investmentEUR: "Investment (EUR)",
    investmentTL: "Investment (TL)",
    currentRate: "Current rate",
    savingsBreakdown: "Monthly savings",
    electricitySavings: "Electricity savings",
    heatingSavings: "Heating savings",
    hotWaterSavings: "Hot water savings",
    coolingSavings: "Cooling savings",
    totalMonthlySavings: "Monthly savings",
    totalYearlySavings: "Yearly savings",
    paybackPeriod: "Payback period",
    years: "years",
    months: "months",
    tenYearSavings: "Savings in 10 years",
    twentyFiveYearSavings: "Savings in 25 years",
    co2Saved: "CO₂ savings",
    tonsPerYear: "tons/year",
    disclaimer: "* NO WARRANTY - All prices are approximate values. Prices in TL (Turkish Lira), EUR conversion at current rate 02/2026. Complete price incl. PV, heat pump, cooling, hot water & battery.",
    ctaButton: "Request free quote",
    recommended: "Recommended",
    popular: "Popular",
    bestValue: "Best value",
    includes: "Incl. PV + Heat pump/Cooling + Hot water + Battery",
    kW: "kW",
    locationAntalya: "Location: Antalya/Alanya, Turkey",
    locationStepTitle: "Your Location",
    locationStepSubtitle: "In which region is your property? Sun exposure affects savings.",
    locationAntalyaCity: "Antalya",
    locationAlanya: "Alanya",
    locationKemer: "Kemer",
    locationBelek: "Belek",
    locationSide: "Side",
    locationManavgat: "Manavgat",
    locationFethiye: "Fethiye",
    locationBodrum: "Bodrum",
    locationMarmaris: "Marmaris",
    locationKas: "Kas",
    locationKalkan: "Kalkan",
    locationDalyan: "Dalyan",
  },
  ru: {
    badge: "Калькулятор 089 Bayern 4-в-1",
    title: "Рассчитайте свой",
    titleHighlight: "потенциал экономии",
    subtitle: "Полный анализ затрат и экономии для вашей энергосистемы 4-в-1",
    step: "Шаг",
    of: "из",
    completed: "завершено",
    back: "Назад",
    next: "Далее",
    calculate: "Рассчитать",
    step1Title: "Какой тип недвижимости?",
    step1Subtitle: "Выберите тип недвижимости",
    propertyVilla: "Вилла / Дом",
    propertyApartment: "Квартира",
    propertyCommercial: "Коммерческая",
    step2Title: "Какой размер вашей недвижимости?",
    step2Subtitle: "Введите жилую площадь в м²",
    propertySizeLabel: "Жилая площадь",
    propertySizeHint: "Общая отапливаемая/охлаждаемая площадь",
    step3Title: "Ваши ежемесячные расходы на электричество?",
    step3Subtitle: "Текущий ежемесячный счет за электричество",
    electricityLabel: "Расходы на электричество",
    electricityHint: "Средний ежемесячный счет",
    step4Title: "Ваши ежемесячные расходы на отопление?",
    step4Subtitle: "Газ, мазут или другое отопление",
    heatingLabel: "Расходы на отопление",
    heatingHint: "Средние ежемесячные расходы",
    step5Title: "Ваши расходы на горячую воду?",
    step5Subtitle: "Стоимость подготовки горячей воды",
    hotWaterLabel: "Расходы на горячую воду",
    hotWaterHint: "Если учитывается отдельно",
    step6Title: "Ваши расходы на кондиционер?",
    step6Subtitle: "Расходы на охлаждение летом",
    coolingLabel: "Расходы на охлаждение",
    coolingHint: "Кондиционер/Сплит-системы",
    step7Title: "Выберите вашу систему",
    step7Subtitle: "Пакеты 089 Bayern 4-в-1 для Анталии/Аланьи",
    systemStandard: "Стандарт",
    systemMedium: "Средний",
    systemPremium: "Премиум",
    standardDesc: "Идеально для домов до 150м²",
    mediumDesc: "Идеально для семейных домов до 250м²",
    premiumDesc: "Максимальная мощность для больших вилл",
    monthlyTL: "₺/месяц",
    resultsTitle: "Анализ системы 089 Bayern",
    resultsSubtitle: "Детальный расчет затрат и экономии",
    system4in1: "Премиум-система 4-в-1",
    systemComponents: "Компоненты системы",
    solarPanels: "Фотоэлектрическая система",
    heatPumpCooling: "Тепловой насос + Охлаждение",
    hotWaterSystem: "Система горячего водоснабжения",
    batteryStorage: "Аккумулятор",
    yourSystem: "Выбранная система",
    systemPower: "Мощность системы",
    investmentEUR: "Инвестиция (EUR)",
    investmentTL: "Инвестиция (TL)",
    currentRate: "Текущий курс",
    savingsBreakdown: "Ежемесячная экономия",
    electricitySavings: "Экономия электричества",
    heatingSavings: "Экономия на отоплении",
    hotWaterSavings: "Экономия на горячей воде",
    coolingSavings: "Экономия на охлаждении",
    totalMonthlySavings: "Ежемесячная экономия",
    totalYearlySavings: "Годовая экономия",
    paybackPeriod: "Срок окупаемости",
    years: "лет",
    months: "месяцев",
    tenYearSavings: "Экономия за 10 лет",
    twentyFiveYearSavings: "Экономия за 25 лет",
    co2Saved: "Экономия CO₂",
    tonsPerYear: "тонн/год",
    disclaimer: "* БЕЗ ГАРАНТИИ - Все цены являются приблизительными. Цены в TL (турецкая лира), конвертация EUR по курсу 02/2026. Полная цена вкл. PV, тепловой насос, охлаждение, горячую воду и аккумулятор.",
    ctaButton: "Запросить бесплатное предложение",
    recommended: "Рекомендуется",
    popular: "Популярный",
    bestValue: "Лучшее соотношение",
    includes: "Вкл. PV + Тепловой насос/Охлаждение + Горячая вода + Батарея",
    kW: "кВт",
    locationAntalya: "Расположение: Анталия/Аланья, Турция",
    locationStepTitle: "Ваше местоположение",
    locationStepSubtitle: "В каком регионе находится ваша недвижимость? Солнечная радиация влияет на экономию.",
    locationAntalyaCity: "Анталия",
    locationAlanya: "Аланья",
    locationKemer: "Кемер",
    locationBelek: "Белек",
    locationSide: "Сиде",
    locationManavgat: "Манавгат",
    locationFethiye: "Фетхие",
    locationBodrum: "Бодрум",
    locationMarmaris: "Мармарис",
    locationKas: "Каш",
    locationKalkan: "Калкан",
    locationDalyan: "Дальян",
  },
  uk: {
    badge: "Калькулятор 089 Bayern 4-в-1",
    title: "Розрахуйте свій",
    titleHighlight: "потенціал заощаджень",
    subtitle: "Повний аналіз витрат і заощаджень для вашої енергосистеми 4-в-1",
    step: "Крок",
    of: "з",
    completed: "завершено",
    back: "Назад",
    next: "Далі",
    calculate: "Розрахувати",
    step1Title: "Який тип нерухомості?",
    step1Subtitle: "Виберіть тип нерухомості",
    propertyVilla: "Вілла / Будинок",
    propertyApartment: "Квартира",
    propertyCommercial: "Комерційна",
    step2Title: "Який розмір вашої нерухомості?",
    step2Subtitle: "Введіть житлову площу в м²",
    propertySizeLabel: "Житлова площа",
    propertySizeHint: "Загальна опалювана/охолоджувана площа",
    step3Title: "Ваші щомісячні витрати на електрику?",
    step3Subtitle: "Поточний щомісячний рахунок за електрику",
    electricityLabel: "Витрати на електрику",
    electricityHint: "Середній щомісячний рахунок",
    step4Title: "Ваші щомісячні витрати на опалення?",
    step4Subtitle: "Газ, мазут або інше опалення",
    heatingLabel: "Витрати на опалення",
    heatingHint: "Середні щомісячні витрати",
    step5Title: "Ваші витрати на гарячу воду?",
    step5Subtitle: "Вартість підготовки гарячої води",
    hotWaterLabel: "Витрати на гарячу воду",
    hotWaterHint: "Якщо враховується окремо",
    step6Title: "Ваші витрати на кондиціонер?",
    step6Subtitle: "Витрати на охолодження влітку",
    coolingLabel: "Витрати на охолодження",
    coolingHint: "Кондиціонер/Спліт-системи",
    step7Title: "Виберіть вашу систему",
    step7Subtitle: "Пакети 089 Bayern 4-в-1 для Анталії/Аланії",
    systemStandard: "Стандарт",
    systemMedium: "Середній",
    systemPremium: "Преміум",
    standardDesc: "Ідеально для будинків до 150м²",
    mediumDesc: "Ідеально для сімейних будинків до 250м²",
    premiumDesc: "Максимальна потужність для великих вілл",
    monthlyTL: "₺/місяць",
    resultsTitle: "Аналіз системи 089 Bayern",
    resultsSubtitle: "Детальний розрахунок витрат і заощаджень",
    system4in1: "Преміум-система 4-в-1",
    systemComponents: "Компоненти системи",
    solarPanels: "Фотоелектрична система",
    heatPumpCooling: "Тепловий насос + Охолодження",
    hotWaterSystem: "Система гарячого водопостачання",
    batteryStorage: "Акумулятор",
    yourSystem: "Обрана система",
    systemPower: "Потужність системи",
    investmentEUR: "Інвестиція (EUR)",
    investmentTL: "Інвестиція (TL)",
    currentRate: "Поточний курс",
    savingsBreakdown: "Щомісячні заощадження",
    electricitySavings: "Заощадження електрики",
    heatingSavings: "Заощадження на опаленні",
    hotWaterSavings: "Заощадження на гарячій воді",
    coolingSavings: "Заощадження на охолодженні",
    totalMonthlySavings: "Щомісячні заощадження",
    totalYearlySavings: "Річні заощадження",
    paybackPeriod: "Термін окупності",
    years: "років",
    months: "місяців",
    tenYearSavings: "Заощадження за 10 років",
    twentyFiveYearSavings: "Заощадження за 25 років",
    co2Saved: "Заощадження CO₂",
    tonsPerYear: "тонн/рік",
    disclaimer: "* БЕЗ ГАРАНТІЇ - Усі ціни є приблизними. Ціни в TL (турецька ліра), конвертація EUR за курсом 02/2026. Повна ціна вкл. PV, тепловий насос, охолодження, гарячу воду та акумулятор.",
    ctaButton: "Запитати безкоштовну пропозицію",
    recommended: "Рекомендується",
    popular: "Популярний",
    bestValue: "Найкраще співвідношення",
    includes: "Вкл. PV + Тепловий насос/Охолодження + Гаряча вода + Батарея",
    kW: "кВт",
    locationAntalya: "Розташування: Анталія/Аланія, Туреччина",
    locationStepTitle: "Ваше місцезнаходження",
    locationStepSubtitle: "В якому регіоні знаходиться ваша нерухомість? Сонячне випромінювання впливає на заощадження.",
    locationAntalyaCity: "Анталія",
    locationAlanya: "Аланія",
    locationKemer: "Кемер",
    locationBelek: "Белек",
    locationSide: "Сіде",
    locationManavgat: "Манавгат",
    locationFethiye: "Фетхіє",
    locationBodrum: "Бодрум",
    locationMarmaris: "Мармаріс",
    locationKas: "Каш",
    locationKalkan: "Калкан",
    locationDalyan: "Дальян",
  },
  ar: {
    badge: "حاسبة 089 Bayern 4 في 1",
    title: "احسب",
    titleHighlight: "إمكانات التوفير",
    subtitle: "تحليل كامل للتكاليف والتوفير لنظام الطاقة 4 في 1 الخاص بك",
    step: "الخطوة",
    of: "من",
    completed: "مكتمل",
    back: "رجوع",
    next: "التالي",
    calculate: "حساب",
    step1Title: "ما نوع العقار؟",
    step1Subtitle: "اختر نوع عقارك",
    propertyVilla: "فيلا / منزل",
    propertyApartment: "شقة",
    propertyCommercial: "تجاري",
    step2Title: "ما حجم عقارك؟",
    step2Subtitle: "أدخل مساحة المعيشة بالمتر المربع",
    propertySizeLabel: "مساحة المعيشة",
    propertySizeHint: "إجمالي المساحة المُدفأة/المُبردة",
    step3Title: "تكاليف الكهرباء الشهرية؟",
    step3Subtitle: "فاتورة الكهرباء الشهرية الحالية",
    electricityLabel: "تكلفة الكهرباء",
    electricityHint: "متوسط الفاتورة الشهرية",
    step4Title: "تكاليف التدفئة الشهرية؟",
    step4Subtitle: "الغاز أو المازوت أو تدفئة أخرى",
    heatingLabel: "تكلفة التدفئة",
    heatingHint: "متوسط التكاليف الشهرية",
    step5Title: "تكاليف الماء الساخن؟",
    step5Subtitle: "تكلفة تحضير الماء الساخن",
    hotWaterLabel: "تكلفة الماء الساخن",
    hotWaterHint: "إذا تم تتبعها بشكل منفصل",
    step6Title: "تكاليف التكييف؟",
    step6Subtitle: "تكاليف التبريد في الصيف",
    coolingLabel: "تكلفة التبريد",
    coolingHint: "تكييف/وحدات سبليت",
    step7Title: "اختر نظامك",
    step7Subtitle: "باقات 089 Bayern 4 في 1 لأنطاليا/ألانيا",
    systemStandard: "قياسي",
    systemMedium: "متوسط",
    systemPremium: "بريميوم",
    standardDesc: "مثالي للمنازل الصغيرة حتى 150م²",
    mediumDesc: "مثالي للمنازل العائلية حتى 250م²",
    premiumDesc: "أقصى قوة للفيلات الكبيرة",
    monthlyTL: "₺/شهر",
    resultsTitle: "تحليل نظام 089 Bayern",
    resultsSubtitle: "حساب تفصيلي للتكاليف والتوفير",
    system4in1: "نظام بريميوم 4 في 1",
    systemComponents: "مكونات النظام",
    solarPanels: "نظام الطاقة الشمسية",
    heatPumpCooling: "مضخة حرارية + تبريد",
    hotWaterSystem: "نظام الماء الساخن",
    batteryStorage: "تخزين البطارية",
    yourSystem: "النظام المختار",
    systemPower: "قوة النظام",
    investmentEUR: "الاستثمار (EUR)",
    investmentTL: "الاستثمار (TL)",
    currentRate: "السعر الحالي",
    savingsBreakdown: "التوفير الشهري",
    electricitySavings: "توفير الكهرباء",
    heatingSavings: "توفير التدفئة",
    hotWaterSavings: "توفير الماء الساخن",
    coolingSavings: "توفير التبريد",
    totalMonthlySavings: "التوفير الشهري",
    totalYearlySavings: "التوفير السنوي",
    paybackPeriod: "فترة الاسترداد",
    years: "سنوات",
    months: "أشهر",
    tenYearSavings: "التوفير في 10 سنوات",
    twentyFiveYearSavings: "التوفير في 25 سنة",
    co2Saved: "توفير CO₂",
    tonsPerYear: "طن/سنة",
    disclaimer: "* لا ضمان - جميع الأسعار تقريبية. الأسعار بالليرة التركية (TL)، تحويل اليورو بسعر 02/2026. السعر الكامل يشمل PV ومضخة حرارية وتبريد وماء ساخن وبطارية.",
    ctaButton: "اطلب عرض أسعار مجاني",
    recommended: "موصى به",
    popular: "شائع",
    bestValue: "أفضل قيمة",
    includes: "يشمل PV + مضخة حرارية/تبريد + ماء ساخن + بطارية",
    kW: "كيلوواط",
    locationAntalya: "الموقع: أنطاليا/ألانيا، تركيا",
    locationStepTitle: "موقعك",
    locationStepSubtitle: "في أي منطقة تقع عقارك؟ يؤثر التعرض للشمس على التوفير.",
    locationAntalyaCity: "أنطاليا",
    locationAlanya: "ألانيا",
    locationKemer: "كيمير",
    locationBelek: "بيليك",
    locationSide: "سيدي",
    locationManavgat: "مانافغات",
    locationFethiye: "فتحية",
    locationBodrum: "بودروم",
    locationMarmaris: "مرمريس",
    locationKas: "كاش",
    locationKalkan: "كالكان",
    locationDalyan: "داليان",
  },
  hr: {
    badge: "089 Bayern 4-u-1 kalkulator",
    title: "Izračunajte svoju",
    titleHighlight: "uštedu",
    subtitle: "Kompletna analiza troškova i ušteda za vaš 4-u-1 energetski sustav",
    step: "Korak",
    of: "od",
    completed: "završeno",
    back: "Natrag",
    next: "Dalje",
    calculate: "Izračunaj",
    step1Title: "Koja vrsta nekretnine?",
    step1Subtitle: "Odaberite vrstu nekretnine",
    propertyVilla: "Vila / Kuća",
    propertyApartment: "Stan",
    propertyCommercial: "Poslovni",
    step2Title: "Kolika je vaša nekretnina?",
    step2Subtitle: "Unesite stambenu površinu u m²",
    propertySizeLabel: "Stambena površina",
    propertySizeHint: "Ukupna grijana/hlađena površina",
    step3Title: "Vaši mjesečni troškovi struje?",
    step3Subtitle: "Trenutni mjesečni račun za struju",
    electricityLabel: "Trošak struje",
    electricityHint: "Prosječni mjesečni račun",
    step4Title: "Vaši mjesečni troškovi grijanja?",
    step4Subtitle: "Plin, lož ulje ili drugo grijanje",
    heatingLabel: "Trošak grijanja",
    heatingHint: "Prosječni mjesečni troškovi",
    step5Title: "Vaši troškovi tople vode?",
    step5Subtitle: "Trošak pripreme tople vode",
    hotWaterLabel: "Trošak tople vode",
    hotWaterHint: "Ako se prati odvojeno",
    step6Title: "Vaši troškovi klime?",
    step6Subtitle: "Troškovi hlađenja ljeti",
    coolingLabel: "Trošak hlađenja",
    coolingHint: "Klima/Split uređaji",
    step7Title: "Odaberite svoj sustav",
    step7Subtitle: "089 Bayern 4-u-1 paketi za Antaliju/Alanju",
    systemStandard: "Standard",
    systemMedium: "Srednji",
    systemPremium: "Premium",
    standardDesc: "Idealno za manje kuće do 150m²",
    mediumDesc: "Savršeno za obiteljske kuće do 250m²",
    premiumDesc: "Maksimalna snaga za velike vile",
    monthlyTL: "₺/mjesec",
    resultsTitle: "Vaša 089 Bayern analiza sustava",
    resultsSubtitle: "Detaljan izračun troškova i ušteda",
    system4in1: "4-u-1 Premium sustav",
    systemComponents: "Komponente sustava",
    solarPanels: "Fotonaponski sustav",
    heatPumpCooling: "Dizalica topline + Hlađenje",
    hotWaterSystem: "Sustav tople vode",
    batteryStorage: "Baterijska pohrana",
    yourSystem: "Odabrani sustav",
    systemPower: "Snaga sustava",
    investmentEUR: "Ulaganje (EUR)",
    investmentTL: "Ulaganje (TL)",
    currentRate: "Trenutni tečaj",
    savingsBreakdown: "Mjesečne uštede",
    electricitySavings: "Ušteda struje",
    heatingSavings: "Ušteda grijanja",
    hotWaterSavings: "Ušteda tople vode",
    coolingSavings: "Ušteda hlađenja",
    totalMonthlySavings: "Mjesečna ušteda",
    totalYearlySavings: "Godišnja ušteda",
    paybackPeriod: "Period povrata",
    years: "godina",
    months: "mjeseci",
    tenYearSavings: "Ušteda u 10 godina",
    twentyFiveYearSavings: "Ušteda u 25 godina",
    co2Saved: "Ušteda CO₂",
    tonsPerYear: "tona/godina",
    disclaimer: "* BEZ JAMSTVA - Sve cijene su okvirne. Cijene u TL (turska lira), EUR konverzija po tečaju 02/2026. Kompletna cijena uklj. PV, dizalicu topline, hlađenje, toplu vodu i bateriju.",
    ctaButton: "Zatražite besplatnu ponudu",
    recommended: "Preporučeno",
    popular: "Popularno",
    bestValue: "Najbolji omjer",
    includes: "Uklj. PV + Dizalica topline/Hlađenje + Topla voda + Baterija",
    kW: "kW",
    locationAntalya: "Lokacija: Antalija/Alanja, Turska",
    locationStepTitle: "Vaša lokacija",
    locationStepSubtitle: "U kojoj regiji se nalazi vaša nekretnina? Sunčevo zračenje utječe na uštedu.",
    locationAntalyaCity: "Antalija",
    locationAlanya: "Alanja",
    locationKemer: "Kemer",
    locationBelek: "Belek",
    locationSide: "Side",
    locationManavgat: "Manavgat",
    locationFethiye: "Fethiye",
    locationBodrum: "Bodrum",
    locationMarmaris: "Marmaris",
    locationKas: "Kaš",
    locationKalkan: "Kalkan",
    locationDalyan: "Dalyan",
  },
};

// Zentrale Preise importieren
import { SYSTEM_PRICES, EXCHANGE_RATE, formatTL, formatEUR } from "@/lib/pricing";

// EUR to TL exchange rate (Februar 2026 - aktueller Kurs)
const EUR_TO_TL_RATE = EXCHANGE_RATE;

// 089 Bayern System Pricing (EUR) - Komplettpreise mit 30% Aufschlag
const SYSTEM_PRICING = {
  standard: {
    baseEUR: SYSTEM_PRICES.standard.eurNet,
    turkeyEUR: SYSTEM_PRICES.standard.eurNet,
    powerKW: SYSTEM_PRICES.standard.kWp,
  },
  medium: {
    baseEUR: SYSTEM_PRICES.medium.eurNet,
    turkeyEUR: SYSTEM_PRICES.medium.eurNet,
    powerKW: SYSTEM_PRICES.medium.kWp,
  },
  premium: {
    baseEUR: SYSTEM_PRICES.premium.eurNet,
    turkeyEUR: SYSTEM_PRICES.premium.eurNet,
    powerKW: SYSTEM_PRICES.premium.kWp,
  },
};

export default function System4in1Calculator({ onComplete }: System4in1CalculatorProps) {
  const [step, setStep] = useState(1);
  const { language } = useLanguage();
  
  const [data, setData] = useState<CalculatorData>({
    propertyType: "",
    location: "antalya",
    propertySize: 200,
    monthlyElectricity: 5000,
    monthlyHeating: 3500,
    monthlyHotWater: 1500,
    monthlyCooling: 2000,
    systemTier: "medium",
  });
  const [showResults, setShowResults] = useState(false);

  const t = translations[language] || translations.de;
  const isRTL = language === "ar";

  const totalSteps = 8;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return data.propertyType !== "";
      case 2: return data.location !== "";
      case 3: return data.propertySize > 0;
      case 4: return data.monthlyElectricity >= 0;
      case 5: return data.monthlyHeating >= 0;
      case 6: return data.monthlyHotWater >= 0;
      case 7: return data.monthlyCooling >= 0;
      case 8: return true; // systemTier always has a default value
      default: return false;
    }
  };

  // Get selected system pricing
  const selectedSystem = SYSTEM_PRICING[data.systemTier];
  const investmentEUR = selectedSystem.turkeyEUR;
  const investmentTL = Math.round(investmentEUR * EUR_TO_TL_RATE);
  const systemPowerKW = selectedSystem.powerKW;

  // ============================================================
  // ERSPARNIS-BERECHNUNG - Antalya: 10 Monate Sonneneinstrahlung
  // ============================================================
  
  // Monatliche Gesamtkosten des Kunden (vor Installation)
  const totalMonthlyEnergyCosts = data.monthlyElectricity + data.monthlyHeating + data.monthlyHotWater + data.monthlyCooling;
  const totalYearlyEnergyCosts = totalMonthlyEnergyCosts * 12;
  
  // ============================================================
  // AMORTISATION - Immer zwischen 9-12 Jahren
  // ============================================================
  // Berechnung: Amortisation basiert auf Systemgröße und Energiekosten
  // Größeres System = mehr Ersparnis = schnellere Amortisation
  
  // Basis-Amortisation nach Systemgröße (in Jahren)
  const basePaybackBySystem = {
    standard: 13,    // 6 kW - Amortisation 12-14 Jahre
    medium: 10,      // 12 kW - Amortisation 9-11 Jahre  
    premium: 8,      // 16 kW - Amortisation 7-9 Jahre
  };
  
  // Anpassung basierend auf Energiekosten (höhere Kosten = schnellere Amortisation)
  const energyCostFactor = totalMonthlyEnergyCosts / 12000; // 12.000 TL = Referenzwert
  const adjustedFactor = Math.max(0.8, Math.min(1.1, 1 / energyCostFactor)); // Begrenzt auf 0.8-1.1
  
  const paybackYearsExact = basePaybackBySystem[data.systemTier] * adjustedFactor;
  const paybackYears = Math.floor(paybackYearsExact);
  const paybackRemainingMonths = Math.round((paybackYearsExact - paybackYears) * 12);
  
  // Jährliche Ersparnis rückwärts berechnet aus Amortisation
  const totalYearlySavings = Math.round(investmentTL / paybackYearsExact);
  
  // Einzelne Ersparnisse proportional aufteilen (für Anzeige)
  const totalInputCosts = data.monthlyElectricity + data.monthlyHeating + data.monthlyHotWater + data.monthlyCooling;
  const electricitySavings = totalInputCosts > 0 ? Math.round((data.monthlyElectricity / totalInputCosts) * (totalYearlySavings / 12)) : 0;
  const heatingSavings = totalInputCosts > 0 ? Math.round((data.monthlyHeating / totalInputCosts) * (totalYearlySavings / 12)) : 0;
  const hotWaterSavings = totalInputCosts > 0 ? Math.round((data.monthlyHotWater / totalInputCosts) * (totalYearlySavings / 12)) : 0;
  const coolingSavings = totalInputCosts > 0 ? Math.round((data.monthlyCooling / totalInputCosts) * (totalYearlySavings / 12)) : 0;
  
  const totalMonthlySavings = electricitySavings + heatingSavings + hotWaterSavings + coolingSavings;
  
  // Langzeit-Ersparnisse (nach Abzug der Investition)
  const tenYearSavings = totalYearlySavings * 10 - investmentTL;
  const twentyFiveYearSavings = totalYearlySavings * 25 - investmentTL;

  // CO2 savings
  const co2Saved = Math.round(systemPowerKW * 1.5 * 10) / 10;

  const propertyTypes = [
    { id: "villa", label: t.propertyVilla, icon: Home, gradient: "from-amber-500 to-orange-600" },
    { id: "apartment", label: t.propertyApartment, icon: Building2, gradient: "from-sky-500 to-blue-600" },
    { id: "commercial", label: t.propertyCommercial, icon: Store, gradient: "from-emerald-500 to-green-600" },
  ];

  const systemTiers = [
    { 
      id: "standard" as const, 
      label: t.systemStandard, 
      desc: t.standardDesc,
      power: `${SYSTEM_PRICES.standard.kWp} kW`,
      priceEUR: `ca. €${SYSTEM_PRICES.standard.eurNet.toLocaleString("de-DE")}`,
      priceTL: `ca. ₺${SYSTEM_PRICES.standard.tlNet.toLocaleString("tr-TR")}`,
      icon: Star,
      gradient: "from-slate-500 to-slate-600",
      badge: null,
    },
    { 
      id: "medium" as const, 
      label: t.systemMedium, 
      desc: t.mediumDesc,
      power: `${SYSTEM_PRICES.medium.kWp} kW`,
      priceEUR: `ca. €${SYSTEM_PRICES.medium.eurNet.toLocaleString("de-DE")}`,
      priceTL: `ca. ₺${SYSTEM_PRICES.medium.tlNet.toLocaleString("tr-TR")}`,
      icon: Sparkles,
      gradient: "from-blue-500 to-blue-600",
      badge: t.popular,
    },
    { 
      id: "premium" as const, 
      label: t.systemPremium, 
      desc: t.premiumDesc,
      power: `${SYSTEM_PRICES.premium.kWp} kW`,
      priceEUR: `ca. €${SYSTEM_PRICES.premium.eurNet.toLocaleString("de-DE")}`,
      priceTL: `ca. ₺${SYSTEM_PRICES.premium.tlNet.toLocaleString("tr-TR")}`,
      icon: Crown,
      gradient: "from-amber-500 to-orange-600",
      badge: t.bestValue,
    },
  ];

  if (showResults) {
    return (
      <section className="py-8 bg-background relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"} data-testid="section-calculator-results">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl">
            <CardContent className="p-6 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">{t.resultsTitle}</h3>
                <p className="text-muted-foreground">{t.resultsSubtitle}</p>
                <p className="text-sm text-primary mt-2">{t.locationAntalya}</p>
              </div>

              {/* Selected System */}
              <div className="bg-primary/10 rounded-xl p-5 mb-6 border border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{t.yourSystem}: {systemTiers.find(s => s.id === data.systemTier)?.label}</h4>
                    <p className="text-sm text-muted-foreground">{t.systemPower}: {systemPowerKW} {t.kW}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t.includes}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">ca. ₺{investmentTL.toLocaleString()}</div>
                    <div className="text-lg text-foreground">ca. €{investmentEUR.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{t.currentRate}: 1€ = ₺{EUR_TO_TL_RATE} (02/2026)</div>
                  </div>
                </div>
              </div>

              {/* 4-in-1 System Components */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 mb-6 border border-accent/20">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  {t.system4in1}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <Sun className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-sm font-medium">{t.solarPanels}</div>
                      <div className="text-xs text-muted-foreground">{systemPowerKW} kWp</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <div className="flex">
                      <Thermometer className="w-4 h-4 text-red-500" />
                      <Snowflake className="w-4 h-4 text-blue-500 -ml-1" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.heatPumpCooling}</div>
                      <div className="text-xs text-muted-foreground">{Math.round(systemPowerKW * 0.8)} kW</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <Droplets className="w-5 h-5 text-sky-500" />
                    <div>
                      <div className="text-sm font-medium">{t.hotWaterSystem}</div>
                      <div className="text-xs text-muted-foreground">300L</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <Battery className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="text-sm font-medium">{t.batteryStorage}</div>
                      <div className="text-xs text-muted-foreground">{systemPowerKW} kWh</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="bg-emerald-500/5 rounded-xl p-5 mb-6 border border-emerald-500/20">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-emerald-500" />
                  {t.savingsBreakdown}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span className="text-muted-foreground">{t.electricitySavings}</span>
                    </div>
                    <span className="font-bold text-emerald-600">₺{electricitySavings.toLocaleString()}</span>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Thermometer className="w-4 h-4 text-red-500" />
                      <span className="text-muted-foreground">{t.heatingSavings}</span>
                    </div>
                    <span className="font-bold text-emerald-600">₺{heatingSavings.toLocaleString()}</span>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Droplets className="w-4 h-4 text-sky-500" />
                      <span className="text-muted-foreground">{t.hotWaterSavings}</span>
                    </div>
                    <span className="font-bold text-emerald-600">₺{hotWaterSavings.toLocaleString()}</span>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Snowflake className="w-4 h-4 text-blue-500" />
                      <span className="text-muted-foreground">{t.coolingSavings}</span>
                    </div>
                    <span className="font-bold text-emerald-600">₺{coolingSavings.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-emerald-500/20">
                  <span className="font-semibold text-foreground">{t.totalMonthlySavings}</span>
                  <span className="font-bold text-2xl text-emerald-500">₺{totalMonthlySavings.toLocaleString()}/ay</span>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl border border-accent/20">
                  <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent">₺{totalYearlySavings.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">{t.totalYearlySavings}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20">
                  <Banknote className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{paybackYears}.{paybackRemainingMonths}</div>
                  <p className="text-xs text-muted-foreground">{t.paybackPeriod} ({t.years})</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl border border-emerald-500/20">
                  <PiggyBank className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-500">₺{(twentyFiveYearSavings / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-muted-foreground">{t.twentyFiveYearSavings}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-sky-500/20 to-sky-500/5 rounded-xl border border-sky-500/20">
                  <Leaf className="w-6 h-6 text-sky-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-sky-500">{co2Saved}</div>
                  <p className="text-xs text-muted-foreground">{t.co2Saved} ({t.tonsPerYear})</p>
                </div>
              </div>

              <p className="text-center text-muted-foreground text-sm font-bold mb-6">{t.disclaimer}</p>

              <Button
                className="w-full py-6 text-lg bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg shadow-accent/30"
                size="lg"
                onClick={() => onComplete?.(data)}
                data-testid="button-get-quote"
              >
                {t.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-b from-card/30 to-background relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"} data-testid="section-calculator">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-4">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        <Card className="overflow-hidden border-border/50 bg-card/90 backdrop-blur-sm shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span className="font-medium">{t.step} {step} {t.of} {totalSteps}</span>
                <span>{Math.round(progress)}% {t.completed}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Step 1: Property Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{t.step1Title}</h3>
                  <p className="text-muted-foreground">{t.step1Subtitle}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setData({ ...data, propertyType: type.id })}
                      className={`p-4 rounded-xl border-2 transition-all hover-elevate active-elevate-2 flex flex-col items-center gap-3 ${
                        data.propertyType === type.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-property-${type.id}`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${
                        data.propertyType === type.id ? `bg-gradient-to-br ${type.gradient}` : "bg-muted"
                      }`}>
                        <type.icon className={`w-7 h-7 ${data.propertyType === type.id ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <span className={`font-semibold text-sm text-center ${data.propertyType === type.id ? "text-primary" : "text-foreground"}`}>
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{t.locationStepTitle}</h3>
                  <p className="text-muted-foreground">{t.locationStepSubtitle}</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    { id: "antalya", label: t.locationAntalyaCity },
                    { id: "alanya", label: t.locationAlanya },
                    { id: "kemer", label: t.locationKemer },
                    { id: "belek", label: t.locationBelek },
                    { id: "side", label: t.locationSide },
                    { id: "manavgat", label: t.locationManavgat },
                    { id: "fethiye", label: t.locationFethiye },
                    { id: "bodrum", label: t.locationBodrum },
                    { id: "marmaris", label: t.locationMarmaris },
                    { id: "kas", label: t.locationKas },
                    { id: "kalkan", label: t.locationKalkan },
                    { id: "dalyan", label: t.locationDalyan },
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setData({ ...data, location: loc.id })}
                      className={`p-3 rounded-xl border-2 transition-all hover-elevate active-elevate-2 flex items-center justify-center gap-2 ${
                        data.location === loc.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-location-${loc.id}`}
                    >
                      <MapPin className={`w-4 h-4 ${data.location === loc.id ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`font-medium text-sm ${data.location === loc.id ? "text-primary" : "text-foreground"}`}>
                        {loc.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Property Size */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{t.step2Title}</h3>
                  <p className="text-muted-foreground">{t.step2Subtitle}</p>
                </div>
                <div>
                  <Label htmlFor="propertySize" className="text-base font-medium">{t.propertySizeLabel} (m²)</Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.propertySizeHint}</p>
                  <Input
                    id="propertySize"
                    type="number"
                    value={data.propertySize || ""}
                    onChange={(e) => setData({ ...data, propertySize: Number(e.target.value) })}
                    className="h-14 text-2xl bg-background/50 text-center font-bold"
                    placeholder="200"
                    data-testid="input-property-size"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Electricity Costs */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{t.step3Title}</h3>
                  <p className="text-muted-foreground">{t.step3Subtitle}</p>
                </div>
                <div>
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    {t.electricityLabel}
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.electricityHint}</p>
                  <div className="relative">
                    <Input
                      type="number"
                      value={data.monthlyElectricity || ""}
                      onChange={(e) => setData({ ...data, monthlyElectricity: Number(e.target.value) })}
                      className="h-14 text-2xl bg-background/50 text-center font-bold pr-20"
                      placeholder="2000"
                      data-testid="input-electricity"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">{t.monthlyTL}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Heating Costs */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{t.step4Title}</h3>
                  <p className="text-muted-foreground">{t.step4Subtitle}</p>
                </div>
                <div>
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-red-500" />
                    {t.heatingLabel}
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.heatingHint}</p>
                  <div className="relative">
                    <Input
                      type="number"
                      value={data.monthlyHeating || ""}
                      onChange={(e) => setData({ ...data, monthlyHeating: Number(e.target.value) })}
                      className="h-14 text-2xl bg-background/50 text-center font-bold pr-20"
                      placeholder="1500"
                      data-testid="input-heating"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">{t.monthlyTL}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Hot Water Costs */}
            {step === 6 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{t.step5Title}</h3>
                  <p className="text-muted-foreground">{t.step5Subtitle}</p>
                </div>
                <div>
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-sky-500" />
                    {t.hotWaterLabel}
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.hotWaterHint}</p>
                  <div className="relative">
                    <Input
                      type="number"
                      value={data.monthlyHotWater || ""}
                      onChange={(e) => setData({ ...data, monthlyHotWater: Number(e.target.value) })}
                      className="h-14 text-2xl bg-background/50 text-center font-bold pr-20"
                      placeholder="500"
                      data-testid="input-hotwater"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">{t.monthlyTL}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Cooling Costs */}
            {step === 7 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{t.step6Title}</h3>
                  <p className="text-muted-foreground">{t.step6Subtitle}</p>
                </div>
                <div>
                  <Label className="text-base font-medium flex items-center gap-2">
                    <Snowflake className="w-5 h-5 text-blue-500" />
                    {t.coolingLabel}
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.coolingHint}</p>
                  <div className="relative">
                    <Input
                      type="number"
                      value={data.monthlyCooling || ""}
                      onChange={(e) => setData({ ...data, monthlyCooling: Number(e.target.value) })}
                      className="h-14 text-2xl bg-background/50 text-center font-bold pr-20"
                      placeholder="800"
                      data-testid="input-cooling"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">{t.monthlyTL}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: System Selection */}
            {step === 8 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{t.step7Title}</h3>
                  <p className="text-muted-foreground">{t.step7Subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {systemTiers.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setData({ ...data, systemTier: tier.id })}
                      className={`p-5 rounded-xl border-2 transition-all hover-elevate active-elevate-2 text-left relative ${
                        data.systemTier === tier.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-system-${tier.id}`}
                    >
                      {tier.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-gradient-to-r from-accent to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                            {tier.badge}
                          </span>
                        </div>
                      )}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                        data.systemTier === tier.id ? `bg-gradient-to-br ${tier.gradient}` : "bg-muted"
                      }`}>
                        <tier.icon className={`w-6 h-6 ${data.systemTier === tier.id ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div className="font-bold text-lg text-foreground">{tier.label}</div>
                      <div className="text-2xl font-bold text-primary mt-1">{tier.power}</div>
                      <p className="text-xs text-muted-foreground mt-2">{tier.desc}</p>
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <div className="text-lg font-bold text-foreground">{tier.priceEUR}</div>
                        <div className="text-sm text-muted-foreground">{tier.priceTL}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-center text-xs text-muted-foreground">{t.includes}</p>
              </div>
            )}

            <div className={`flex items-center justify-between gap-4 mt-8 pt-5 border-t border-border/50 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="h-11"
                data-testid="button-calc-back"
              >
                <ArrowLeft className={`w-4 h-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
                {t.back}
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="h-11 bg-gradient-to-r from-primary to-blue-600 border-0"
                data-testid="button-calc-next"
              >
                {step === totalSteps ? t.calculate : t.next}
                <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
