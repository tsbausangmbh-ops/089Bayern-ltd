import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  Home, Building2, Store, ArrowRight, ArrowLeft, Check, Calculator, 
  TrendingUp, Leaf, Banknote, Sun, Thermometer, Droplets, Battery,
  Zap, Snowflake, Euro, PiggyBank
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface System4in1CalculatorProps {
  onComplete?: (data: CalculatorData) => void;
}

interface CalculatorData {
  propertyType: string;
  propertySize: number;
  monthlyElectricity: number;
  monthlyHeating: number;
  monthlyHotWater: number;
  monthlyCooling: number;
  roofArea: number;
  batterySize: number;
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
  heatingLabel: string;
  hotWaterLabel: string;
  coolingLabel: string;
  monthlyTL: string;
  step4Title: string;
  step4Subtitle: string;
  roofAreaLabel: string;
  roofAreaHint: string;
  batteryLabel: string;
  batteryHint: string;
  resultsTitle: string;
  resultsSubtitle: string;
  system4in1: string;
  systemComponents: string;
  solarPanels: string;
  heatPump: string;
  hotWaterSystem: string;
  batteryStorage: string;
  costBreakdown: string;
  pvCost: string;
  heatPumpCost: string;
  hotWaterCost: string;
  batteryCost: string;
  installationCost: string;
  totalInvestment: string;
  savingsBreakdown: string;
  electricitySavings: string;
  heatingSavings: string;
  hotWaterSavings: string;
  coolingSavings: string;
  totalMonthlySavings: string;
  totalYearlySavings: string;
  paybackPeriod: string;
  years: string;
  tenYearSavings: string;
  twentyFiveYearSavings: string;
  co2Saved: string;
  tonsPerYear: string;
  disclaimer: string;
  ctaButton: string;
  systemSpecs: string;
  pvCapacity: string;
  kWp: string;
  heatPumpCapacity: string;
  kW: string;
  batteryCapacity: string;
  kWh: string;
  freeMonths: string;
  freeMonthsDesc: string;
}> = {
  de: {
    badge: "4-in-1 System Rechner",
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
    step1Subtitle: "Wählen Sie Ihren Immobilientyp für eine genaue Berechnung",
    propertyVilla: "Villa / Haus",
    propertyApartment: "Wohnung",
    propertyCommercial: "Gewerbe",
    step2Title: "Größe Ihrer Immobilie",
    step2Subtitle: "Geben Sie die Wohnfläche an",
    propertySizeLabel: "Wohnfläche (m²)",
    propertySizeHint: "Gesamte beheizte Wohnfläche",
    step3Title: "Ihre monatlichen Energiekosten",
    step3Subtitle: "Geben Sie Ihre aktuellen Kosten an",
    electricityLabel: "Stromkosten",
    heatingLabel: "Heizkosten",
    hotWaterLabel: "Warmwasserkosten",
    coolingLabel: "Klimaanlage/Kühlung",
    monthlyTL: "₺/Monat",
    step4Title: "System-Konfiguration",
    step4Subtitle: "Passen Sie Ihr 4-in-1 System an",
    roofAreaLabel: "Verfügbare Dachfläche (m²)",
    roofAreaHint: "Für Solarmodule nutzbare Fläche",
    batteryLabel: "Batteriespeicher Größe",
    batteryHint: "Empfohlen: 10-15 kWh für Einfamilienhaus",
    resultsTitle: "Ihre 4-in-1 System Analyse",
    resultsSubtitle: "Detaillierte Kosten- und Ersparnisberechnung",
    system4in1: "4-in-1 Premium System",
    systemComponents: "System-Komponenten",
    solarPanels: "Photovoltaik-Anlage",
    heatPump: "Wärmepumpe",
    hotWaterSystem: "Warmwasser-System",
    batteryStorage: "Batteriespeicher",
    costBreakdown: "Kostenaufstellung",
    pvCost: "Photovoltaik-Anlage",
    heatPumpCost: "Wärmepumpe inkl. Installation",
    hotWaterCost: "Warmwasser-System",
    batteryCost: "Batteriespeicher",
    installationCost: "Installation & Montage",
    totalInvestment: "Gesamtinvestition",
    savingsBreakdown: "Monatliche Ersparnisse",
    electricitySavings: "Strom-Ersparnis",
    heatingSavings: "Heizkosten-Ersparnis",
    hotWaterSavings: "Warmwasser-Ersparnis",
    coolingSavings: "Klimakosten-Ersparnis",
    totalMonthlySavings: "Monatliche Ersparnis",
    totalYearlySavings: "Jährliche Ersparnis",
    paybackPeriod: "Amortisationszeit",
    years: "Jahre",
    tenYearSavings: "Ersparnis in 10 Jahren",
    twentyFiveYearSavings: "Ersparnis in 25 Jahren",
    co2Saved: "CO₂-Einsparung",
    tonsPerYear: "Tonnen/Jahr",
    disclaimer: "* Alle Werte sind Schätzungen basierend auf durchschnittlichen Marktpreisen und können je nach Standort und Anbieter variieren.",
    ctaButton: "Kostenloses Angebot anfordern",
    systemSpecs: "System-Spezifikationen",
    pvCapacity: "PV-Leistung",
    kWp: "kWp",
    heatPumpCapacity: "Wärmepumpe",
    kW: "kW",
    batteryCapacity: "Speicherkapazität",
    kWh: "kWh",
    freeMonths: "10 Monate kostenlose Energie",
    freeMonthsDesc: "Basierend auf Ihrer Amortisationszeit und 25 Jahren Systemlebensdauer",
  },
  tr: {
    badge: "4'ü 1 Arada Sistem Hesaplayıcı",
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
    step1Subtitle: "Doğru hesaplama için mülk türünüzü seçin",
    propertyVilla: "Villa / Ev",
    propertyApartment: "Daire",
    propertyCommercial: "Ticari",
    step2Title: "Mülkünüzün büyüklüğü",
    step2Subtitle: "Yaşam alanınızı belirtin",
    propertySizeLabel: "Yaşam alanı (m²)",
    propertySizeHint: "Toplam ısıtılan yaşam alanı",
    step3Title: "Aylık enerji maliyetleriniz",
    step3Subtitle: "Mevcut maliyetlerinizi girin",
    electricityLabel: "Elektrik maliyeti",
    heatingLabel: "Isıtma maliyeti",
    hotWaterLabel: "Sıcak su maliyeti",
    coolingLabel: "Klima/Soğutma",
    monthlyTL: "₺/Ay",
    step4Title: "Sistem yapılandırması",
    step4Subtitle: "4'ü 1 arada sisteminizi özelleştirin",
    roofAreaLabel: "Kullanılabilir çatı alanı (m²)",
    roofAreaHint: "Güneş panelleri için kullanılabilir alan",
    batteryLabel: "Batarya depolama boyutu",
    batteryHint: "Önerilen: Tek aile evi için 10-15 kWh",
    resultsTitle: "4'ü 1 Arada Sistem Analiziniz",
    resultsSubtitle: "Detaylı maliyet ve tasarruf hesaplaması",
    system4in1: "4'ü 1 Arada Premium Sistem",
    systemComponents: "Sistem bileşenleri",
    solarPanels: "Fotovoltaik sistem",
    heatPump: "Isı pompası",
    hotWaterSystem: "Sıcak su sistemi",
    batteryStorage: "Batarya depolama",
    costBreakdown: "Maliyet dökümü",
    pvCost: "Fotovoltaik sistem",
    heatPumpCost: "Isı pompası (kurulum dahil)",
    hotWaterCost: "Sıcak su sistemi",
    batteryCost: "Batarya depolama",
    installationCost: "Kurulum ve montaj",
    totalInvestment: "Toplam yatırım",
    savingsBreakdown: "Aylık tasarruflar",
    electricitySavings: "Elektrik tasarrufu",
    heatingSavings: "Isıtma tasarrufu",
    hotWaterSavings: "Sıcak su tasarrufu",
    coolingSavings: "Klima tasarrufu",
    totalMonthlySavings: "Aylık tasarruf",
    totalYearlySavings: "Yıllık tasarruf",
    paybackPeriod: "Amortisman süresi",
    years: "Yıl",
    tenYearSavings: "10 yılda tasarruf",
    twentyFiveYearSavings: "25 yılda tasarruf",
    co2Saved: "CO₂ tasarrufu",
    tonsPerYear: "Ton/Yıl",
    disclaimer: "* Tüm değerler ortalama piyasa fiyatlarına dayanan tahminlerdir ve konuma ve sağlayıcıya göre değişebilir.",
    ctaButton: "Ücretsiz teklif isteyin",
    systemSpecs: "Sistem özellikleri",
    pvCapacity: "PV kapasitesi",
    kWp: "kWp",
    heatPumpCapacity: "Isı pompası",
    kW: "kW",
    batteryCapacity: "Depolama kapasitesi",
    kWh: "kWh",
    freeMonths: "10 ay ücretsiz enerji",
    freeMonthsDesc: "Amortisman sürenize ve 25 yıllık sistem ömrüne göre",
  },
  en: {
    badge: "4-in-1 System Calculator",
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
    step1Subtitle: "Select your property type for accurate calculation",
    propertyVilla: "Villa / House",
    propertyApartment: "Apartment",
    propertyCommercial: "Commercial",
    step2Title: "Size of your property",
    step2Subtitle: "Enter your living area",
    propertySizeLabel: "Living area (m²)",
    propertySizeHint: "Total heated living space",
    step3Title: "Your monthly energy costs",
    step3Subtitle: "Enter your current costs",
    electricityLabel: "Electricity cost",
    heatingLabel: "Heating cost",
    hotWaterLabel: "Hot water cost",
    coolingLabel: "Air conditioning/Cooling",
    monthlyTL: "₺/month",
    step4Title: "System configuration",
    step4Subtitle: "Customize your 4-in-1 system",
    roofAreaLabel: "Available roof area (m²)",
    roofAreaHint: "Area usable for solar panels",
    batteryLabel: "Battery storage size",
    batteryHint: "Recommended: 10-15 kWh for single-family home",
    resultsTitle: "Your 4-in-1 System Analysis",
    resultsSubtitle: "Detailed cost and savings calculation",
    system4in1: "4-in-1 Premium System",
    systemComponents: "System components",
    solarPanels: "Photovoltaic system",
    heatPump: "Heat pump",
    hotWaterSystem: "Hot water system",
    batteryStorage: "Battery storage",
    costBreakdown: "Cost breakdown",
    pvCost: "Photovoltaic system",
    heatPumpCost: "Heat pump incl. installation",
    hotWaterCost: "Hot water system",
    batteryCost: "Battery storage",
    installationCost: "Installation & mounting",
    totalInvestment: "Total investment",
    savingsBreakdown: "Monthly savings",
    electricitySavings: "Electricity savings",
    heatingSavings: "Heating savings",
    hotWaterSavings: "Hot water savings",
    coolingSavings: "Cooling savings",
    totalMonthlySavings: "Monthly savings",
    totalYearlySavings: "Yearly savings",
    paybackPeriod: "Payback period",
    years: "years",
    tenYearSavings: "Savings in 10 years",
    twentyFiveYearSavings: "Savings in 25 years",
    co2Saved: "CO₂ savings",
    tonsPerYear: "tons/year",
    disclaimer: "* All values are estimates based on average market prices and may vary by location and provider.",
    ctaButton: "Request free quote",
    systemSpecs: "System specifications",
    pvCapacity: "PV capacity",
    kWp: "kWp",
    heatPumpCapacity: "Heat pump",
    kW: "kW",
    batteryCapacity: "Storage capacity",
    kWh: "kWh",
    freeMonths: "10 months of free energy",
    freeMonthsDesc: "Based on your payback period and 25-year system lifespan",
  },
  ru: {
    badge: "Калькулятор системы 4-в-1",
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
    step1Subtitle: "Выберите тип недвижимости для точного расчета",
    propertyVilla: "Вилла / Дом",
    propertyApartment: "Квартира",
    propertyCommercial: "Коммерческая",
    step2Title: "Размер вашей недвижимости",
    step2Subtitle: "Укажите жилую площадь",
    propertySizeLabel: "Жилая площадь (м²)",
    propertySizeHint: "Общая отапливаемая площадь",
    step3Title: "Ваши ежемесячные расходы на энергию",
    step3Subtitle: "Введите ваши текущие расходы",
    electricityLabel: "Расходы на электричество",
    heatingLabel: "Расходы на отопление",
    hotWaterLabel: "Расходы на горячую воду",
    coolingLabel: "Кондиционер/Охлаждение",
    monthlyTL: "₺/месяц",
    step4Title: "Конфигурация системы",
    step4Subtitle: "Настройте вашу систему 4-в-1",
    roofAreaLabel: "Доступная площадь крыши (м²)",
    roofAreaHint: "Площадь для солнечных панелей",
    batteryLabel: "Размер аккумулятора",
    batteryHint: "Рекомендуется: 10-15 кВтч для частного дома",
    resultsTitle: "Анализ вашей системы 4-в-1",
    resultsSubtitle: "Детальный расчет затрат и экономии",
    system4in1: "Премиум-система 4-в-1",
    systemComponents: "Компоненты системы",
    solarPanels: "Фотоэлектрическая система",
    heatPump: "Тепловой насос",
    hotWaterSystem: "Система горячего водоснабжения",
    batteryStorage: "Аккумулятор",
    costBreakdown: "Разбивка стоимости",
    pvCost: "Фотоэлектрическая система",
    heatPumpCost: "Тепловой насос с установкой",
    hotWaterCost: "Система горячего водоснабжения",
    batteryCost: "Аккумулятор",
    installationCost: "Установка и монтаж",
    totalInvestment: "Общие инвестиции",
    savingsBreakdown: "Ежемесячная экономия",
    electricitySavings: "Экономия электричества",
    heatingSavings: "Экономия на отоплении",
    hotWaterSavings: "Экономия на горячей воде",
    coolingSavings: "Экономия на охлаждении",
    totalMonthlySavings: "Ежемесячная экономия",
    totalYearlySavings: "Годовая экономия",
    paybackPeriod: "Срок окупаемости",
    years: "лет",
    tenYearSavings: "Экономия за 10 лет",
    twentyFiveYearSavings: "Экономия за 25 лет",
    co2Saved: "Экономия CO₂",
    tonsPerYear: "тонн/год",
    disclaimer: "* Все значения являются оценками на основе средних рыночных цен и могут варьироваться в зависимости от местоположения.",
    ctaButton: "Запросить бесплатное предложение",
    systemSpecs: "Характеристики системы",
    pvCapacity: "Мощность PV",
    kWp: "кВтп",
    heatPumpCapacity: "Тепловой насос",
    kW: "кВт",
    batteryCapacity: "Емкость хранения",
    kWh: "кВтч",
    freeMonths: "10 месяцев бесплатной энергии",
    freeMonthsDesc: "На основе срока окупаемости и 25-летнего срока службы",
  },
  uk: {
    badge: "Калькулятор системи 4-в-1",
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
    step1Subtitle: "Виберіть тип нерухомості для точного розрахунку",
    propertyVilla: "Вілла / Будинок",
    propertyApartment: "Квартира",
    propertyCommercial: "Комерційна",
    step2Title: "Розмір вашої нерухомості",
    step2Subtitle: "Вкажіть житлову площу",
    propertySizeLabel: "Житлова площа (м²)",
    propertySizeHint: "Загальна опалювана площа",
    step3Title: "Ваші щомісячні витрати на енергію",
    step3Subtitle: "Введіть ваші поточні витрати",
    electricityLabel: "Витрати на електрику",
    heatingLabel: "Витрати на опалення",
    hotWaterLabel: "Витрати на гарячу воду",
    coolingLabel: "Кондиціонер/Охолодження",
    monthlyTL: "₺/місяць",
    step4Title: "Конфігурація системи",
    step4Subtitle: "Налаштуйте вашу систему 4-в-1",
    roofAreaLabel: "Доступна площа даху (м²)",
    roofAreaHint: "Площа для сонячних панелей",
    batteryLabel: "Розмір акумулятора",
    batteryHint: "Рекомендується: 10-15 кВтг для приватного будинку",
    resultsTitle: "Аналіз вашої системи 4-в-1",
    resultsSubtitle: "Детальний розрахунок витрат і заощаджень",
    system4in1: "Преміум-система 4-в-1",
    systemComponents: "Компоненти системи",
    solarPanels: "Фотоелектрична система",
    heatPump: "Тепловий насос",
    hotWaterSystem: "Система гарячого водопостачання",
    batteryStorage: "Акумулятор",
    costBreakdown: "Розбивка вартості",
    pvCost: "Фотоелектрична система",
    heatPumpCost: "Тепловий насос з установкою",
    hotWaterCost: "Система гарячого водопостачання",
    batteryCost: "Акумулятор",
    installationCost: "Установка та монтаж",
    totalInvestment: "Загальні інвестиції",
    savingsBreakdown: "Щомісячні заощадження",
    electricitySavings: "Заощадження електрики",
    heatingSavings: "Заощадження на опаленні",
    hotWaterSavings: "Заощадження на гарячій воді",
    coolingSavings: "Заощадження на охолодженні",
    totalMonthlySavings: "Щомісячні заощадження",
    totalYearlySavings: "Річні заощадження",
    paybackPeriod: "Термін окупності",
    years: "років",
    tenYearSavings: "Заощадження за 10 років",
    twentyFiveYearSavings: "Заощадження за 25 років",
    co2Saved: "Заощадження CO₂",
    tonsPerYear: "тонн/рік",
    disclaimer: "* Усі значення є оцінками на основі середніх ринкових цін і можуть змінюватися залежно від місця.",
    ctaButton: "Запитати безкоштовну пропозицію",
    systemSpecs: "Характеристики системи",
    pvCapacity: "Потужність PV",
    kWp: "кВтп",
    heatPumpCapacity: "Тепловий насос",
    kW: "кВт",
    batteryCapacity: "Ємність зберігання",
    kWh: "кВтг",
    freeMonths: "10 місяців безкоштовної енергії",
    freeMonthsDesc: "На основі терміну окупності та 25-річного терміну служби",
  },
  ar: {
    badge: "حاسبة نظام 4 في 1",
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
    step1Subtitle: "اختر نوع عقارك للحصول على حساب دقيق",
    propertyVilla: "فيلا / منزل",
    propertyApartment: "شقة",
    propertyCommercial: "تجاري",
    step2Title: "حجم عقارك",
    step2Subtitle: "أدخل مساحة المعيشة",
    propertySizeLabel: "مساحة المعيشة (م²)",
    propertySizeHint: "إجمالي المساحة المُدفأة",
    step3Title: "تكاليف الطاقة الشهرية",
    step3Subtitle: "أدخل تكاليفك الحالية",
    electricityLabel: "تكلفة الكهرباء",
    heatingLabel: "تكلفة التدفئة",
    hotWaterLabel: "تكلفة الماء الساخن",
    coolingLabel: "تكييف/تبريد",
    monthlyTL: "₺/شهر",
    step4Title: "تكوين النظام",
    step4Subtitle: "خصص نظام 4 في 1 الخاص بك",
    roofAreaLabel: "مساحة السطح المتاحة (م²)",
    roofAreaHint: "المساحة القابلة للاستخدام للألواح الشمسية",
    batteryLabel: "حجم تخزين البطارية",
    batteryHint: "موصى به: 10-15 كيلوواط ساعة للمنزل",
    resultsTitle: "تحليل نظام 4 في 1 الخاص بك",
    resultsSubtitle: "حساب تفصيلي للتكاليف والتوفير",
    system4in1: "نظام بريميوم 4 في 1",
    systemComponents: "مكونات النظام",
    solarPanels: "نظام الطاقة الشمسية",
    heatPump: "مضخة حرارية",
    hotWaterSystem: "نظام الماء الساخن",
    batteryStorage: "تخزين البطارية",
    costBreakdown: "تفصيل التكاليف",
    pvCost: "نظام الطاقة الشمسية",
    heatPumpCost: "مضخة حرارية مع التركيب",
    hotWaterCost: "نظام الماء الساخن",
    batteryCost: "تخزين البطارية",
    installationCost: "التركيب والتثبيت",
    totalInvestment: "إجمالي الاستثمار",
    savingsBreakdown: "التوفير الشهري",
    electricitySavings: "توفير الكهرباء",
    heatingSavings: "توفير التدفئة",
    hotWaterSavings: "توفير الماء الساخن",
    coolingSavings: "توفير التبريد",
    totalMonthlySavings: "التوفير الشهري",
    totalYearlySavings: "التوفير السنوي",
    paybackPeriod: "فترة الاسترداد",
    years: "سنوات",
    tenYearSavings: "التوفير في 10 سنوات",
    twentyFiveYearSavings: "التوفير في 25 سنة",
    co2Saved: "توفير CO₂",
    tonsPerYear: "طن/سنة",
    disclaimer: "* جميع القيم تقديرية بناءً على متوسط أسعار السوق وقد تختلف حسب الموقع.",
    ctaButton: "اطلب عرض أسعار مجاني",
    systemSpecs: "مواصفات النظام",
    pvCapacity: "سعة PV",
    kWp: "كيلوواط ذروة",
    heatPumpCapacity: "مضخة حرارية",
    kW: "كيلوواط",
    batteryCapacity: "سعة التخزين",
    kWh: "كيلوواط ساعة",
    freeMonths: "10 أشهر طاقة مجانية",
    freeMonthsDesc: "بناءً على فترة الاسترداد وعمر النظام 25 سنة",
  },
  hr: {
    badge: "4-u-1 kalkulator sustava",
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
    step1Subtitle: "Odaberite vrstu nekretnine za točan izračun",
    propertyVilla: "Vila / Kuća",
    propertyApartment: "Stan",
    propertyCommercial: "Poslovni",
    step2Title: "Veličina vaše nekretnine",
    step2Subtitle: "Unesite stambenu površinu",
    propertySizeLabel: "Stambena površina (m²)",
    propertySizeHint: "Ukupna grijana površina",
    step3Title: "Vaši mjesečni troškovi energije",
    step3Subtitle: "Unesite svoje trenutne troškove",
    electricityLabel: "Trošak struje",
    heatingLabel: "Trošak grijanja",
    hotWaterLabel: "Trošak tople vode",
    coolingLabel: "Klimatizacija/Hlađenje",
    monthlyTL: "₺/mjesec",
    step4Title: "Konfiguracija sustava",
    step4Subtitle: "Prilagodite svoj 4-u-1 sustav",
    roofAreaLabel: "Dostupna površina krova (m²)",
    roofAreaHint: "Površina za solarne panele",
    batteryLabel: "Veličina baterije",
    batteryHint: "Preporučeno: 10-15 kWh za obiteljsku kuću",
    resultsTitle: "Vaša 4-u-1 analiza sustava",
    resultsSubtitle: "Detaljan izračun troškova i ušteda",
    system4in1: "4-u-1 Premium sustav",
    systemComponents: "Komponente sustava",
    solarPanels: "Fotonaponski sustav",
    heatPump: "Dizalica topline",
    hotWaterSystem: "Sustav tople vode",
    batteryStorage: "Baterijska pohrana",
    costBreakdown: "Raspored troškova",
    pvCost: "Fotonaponski sustav",
    heatPumpCost: "Dizalica topline s ugradnjom",
    hotWaterCost: "Sustav tople vode",
    batteryCost: "Baterijska pohrana",
    installationCost: "Ugradnja i montaža",
    totalInvestment: "Ukupna investicija",
    savingsBreakdown: "Mjesečne uštede",
    electricitySavings: "Ušteda struje",
    heatingSavings: "Ušteda grijanja",
    hotWaterSavings: "Ušteda tople vode",
    coolingSavings: "Ušteda hlađenja",
    totalMonthlySavings: "Mjesečna ušteda",
    totalYearlySavings: "Godišnja ušteda",
    paybackPeriod: "Period povrata",
    years: "godina",
    tenYearSavings: "Ušteda u 10 godina",
    twentyFiveYearSavings: "Ušteda u 25 godina",
    co2Saved: "Ušteda CO₂",
    tonsPerYear: "tona/godina",
    disclaimer: "* Sve vrijednosti su procjene temeljene na prosječnim tržišnim cijenama i mogu varirati.",
    ctaButton: "Zatražite besplatnu ponudu",
    systemSpecs: "Specifikacije sustava",
    pvCapacity: "PV kapacitet",
    kWp: "kWp",
    heatPumpCapacity: "Dizalica topline",
    kW: "kW",
    batteryCapacity: "Kapacitet pohrane",
    kWh: "kWh",
    freeMonths: "10 mjeseci besplatne energije",
    freeMonthsDesc: "Na temelju perioda povrata i 25 godina trajanja sustava",
  },
};

export default function System4in1Calculator({ onComplete }: System4in1CalculatorProps) {
  const [step, setStep] = useState(1);
  const { language } = useLanguage();
  
  const [data, setData] = useState<CalculatorData>({
    propertyType: "",
    propertySize: 200,
    monthlyElectricity: 2000,
    monthlyHeating: 1500,
    monthlyHotWater: 500,
    monthlyCooling: 800,
    roofArea: 50,
    batterySize: 10,
  });
  const [showResults, setShowResults] = useState(false);

  const t = translations[language] || translations.de;
  const isRTL = language === "ar";

  const totalSteps = 4;
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
      case 2: return data.propertySize > 0;
      case 3: return data.monthlyElectricity >= 0;
      case 4: return data.roofArea > 0;
      default: return false;
    }
  };

  // Calculate system specifications based on inputs
  const pvCapacity = Math.round(data.roofArea / 6 * 10) / 10; // ~6m² per kWp
  const heatPumpCapacity = Math.round(data.propertySize / 25 * 10) / 10; // ~25m² per kW
  const batteryCapacity = data.batterySize;

  // Cost calculations (in TL)
  const pvCostPerKwp = 35000; // ₺35,000 per kWp
  const heatPumpCostPerKw = 25000; // ₺25,000 per kW
  const hotWaterSystemCost = 45000; // Fixed cost for hot water integration
  const batteryCostPerKwh = 15000; // ₺15,000 per kWh
  const installationPercentage = 0.15; // 15% installation cost

  const pvTotalCost = Math.round(pvCapacity * pvCostPerKwp);
  const heatPumpTotalCost = Math.round(heatPumpCapacity * heatPumpCostPerKw);
  const batteryTotalCost = Math.round(batteryCapacity * batteryCostPerKwh);
  const equipmentCost = pvTotalCost + heatPumpTotalCost + hotWaterSystemCost + batteryTotalCost;
  const installationCost = Math.round(equipmentCost * installationPercentage);
  const totalInvestment = equipmentCost + installationCost;

  // Savings calculations
  const electricitySavingsRate = 0.85; // 85% electricity savings with PV + battery
  const heatingSavingsRate = 0.75; // 75% heating savings with heat pump
  const hotWaterSavingsRate = 0.90; // 90% hot water savings
  const coolingSavingsRate = 0.70; // 70% cooling savings with heat pump

  const electricitySavings = Math.round(data.monthlyElectricity * electricitySavingsRate);
  const heatingSavings = Math.round(data.monthlyHeating * heatingSavingsRate);
  const hotWaterSavings = Math.round(data.monthlyHotWater * hotWaterSavingsRate);
  const coolingSavings = Math.round(data.monthlyCooling * coolingSavingsRate);
  const totalMonthlySavings = electricitySavings + heatingSavings + hotWaterSavings + coolingSavings;
  const totalYearlySavings = totalMonthlySavings * 12;

  // ROI and long-term calculations
  const paybackYears = totalYearlySavings > 0 ? Math.round(totalInvestment / totalYearlySavings * 10) / 10 : 0;
  const tenYearSavings = totalYearlySavings * 10 - totalInvestment;
  const twentyFiveYearSavings = totalYearlySavings * 25 - totalInvestment;

  // CO2 savings (approximate)
  const co2Saved = Math.round((pvCapacity * 1.2 + heatPumpCapacity * 0.8) * 10) / 10;

  const propertyTypes = [
    { id: "villa", label: t.propertyVilla, icon: Home, gradient: "from-amber-500 to-orange-600" },
    { id: "apartment", label: t.propertyApartment, icon: Building2, gradient: "from-sky-500 to-blue-600" },
    { id: "commercial", label: t.propertyCommercial, icon: Store, gradient: "from-emerald-500 to-green-600" },
  ];

  if (showResults) {
    return (
      <section className="py-8 bg-background relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"} data-testid="section-calculator-results">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-6 md:px-8 relative">
          <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 shadow-2xl">
            <CardContent className="p-6 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t.resultsTitle}</h3>
                <p className="text-muted-foreground">{t.resultsSubtitle}</p>
              </div>

              {/* System Components */}
              <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  {t.system4in1}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <Sun className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-sm font-medium">{t.solarPanels}</div>
                      <div className="text-xs text-muted-foreground">{pvCapacity} {t.kWp}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <Thermometer className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="text-sm font-medium">{t.heatPump}</div>
                      <div className="text-xs text-muted-foreground">{heatPumpCapacity} {t.kW}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <Droplets className="w-5 h-5 text-sky-500" />
                    <div>
                      <div className="text-sm font-medium">{t.hotWaterSystem}</div>
                      <div className="text-xs text-muted-foreground">Integriert</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <Battery className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="text-sm font-medium">{t.batteryStorage}</div>
                      <div className="text-xs text-muted-foreground">{batteryCapacity} {t.kWh}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Cost Breakdown */}
                <div className="bg-background/50 rounded-xl p-5 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Euro className="w-5 h-5 text-primary" />
                    {t.costBreakdown}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.pvCost} ({pvCapacity} kWp)</span>
                      <span className="font-medium">₺{pvTotalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.heatPumpCost} ({heatPumpCapacity} kW)</span>
                      <span className="font-medium">₺{heatPumpTotalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.hotWaterCost}</span>
                      <span className="font-medium">₺{hotWaterSystemCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.batteryCost} ({batteryCapacity} kWh)</span>
                      <span className="font-medium">₺{batteryTotalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.installationCost}</span>
                      <span className="font-medium">₺{installationCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-border">
                      <span className="font-semibold text-foreground">{t.totalInvestment}</span>
                      <span className="font-bold text-lg text-primary">₺{totalInvestment.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Savings Breakdown */}
                <div className="bg-emerald-500/5 rounded-xl p-5 border border-emerald-500/20">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <PiggyBank className="w-5 h-5 text-emerald-500" />
                    {t.savingsBreakdown}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.electricitySavings} (85%)</span>
                      <span className="font-medium text-emerald-600">₺{electricitySavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.heatingSavings} (75%)</span>
                      <span className="font-medium text-emerald-600">₺{heatingSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.hotWaterSavings} (90%)</span>
                      <span className="font-medium text-emerald-600">₺{hotWaterSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t.coolingSavings} (70%)</span>
                      <span className="font-medium text-emerald-600">₺{coolingSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-emerald-500/20">
                      <span className="font-semibold text-foreground">{t.totalMonthlySavings}</span>
                      <span className="font-bold text-lg text-emerald-500">₺{totalMonthlySavings.toLocaleString()}/ay</span>
                    </div>
                  </div>
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
                  <div className="text-2xl font-bold text-primary">~{paybackYears}</div>
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

              {/* 10 Months Free Energy Highlight */}
              <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-accent/20 rounded-xl p-5 mb-6 border border-amber-500/30 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-accent bg-clip-text text-transparent mb-1">
                  {t.freeMonths}
                </div>
                <p className="text-sm text-muted-foreground">{t.freeMonthsDesc}</p>
              </div>

              <p className="text-center text-muted-foreground text-xs mb-6">{t.disclaimer}</p>

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
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-4">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
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

            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-foreground">{t.step1Title}</h3>
                <p className="text-muted-foreground">{t.step1Subtitle}</p>
                <div className="grid grid-cols-1 gap-3">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setData({ ...data, propertyType: type.id })}
                      className={`p-5 rounded-xl border-2 transition-all hover-elevate active-elevate-2 text-left flex items-center gap-4 ${
                        data.propertyType === type.id ? "border-primary bg-primary/10" : "border-border/50 bg-background/50"
                      }`}
                      data-testid={`button-property-${type.id}`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                        data.propertyType === type.id ? `bg-gradient-to-br ${type.gradient}` : "bg-muted"
                      }`}>
                        <type.icon className={`w-6 h-6 ${data.propertyType === type.id ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <span className={`font-semibold text-lg ${data.propertyType === type.id ? "text-primary" : "text-foreground"}`}>
                        {type.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">{t.step2Title}</h3>
                <p className="text-muted-foreground">{t.step2Subtitle}</p>
                <div>
                  <Label htmlFor="propertySize" className="text-base font-medium">{t.propertySizeLabel}</Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.propertySizeHint}</p>
                  <Input
                    id="propertySize"
                    type="number"
                    value={data.propertySize}
                    onChange={(e) => setData({ ...data, propertySize: Number(e.target.value) })}
                    className="h-12 text-lg bg-background/50"
                    placeholder="200"
                    data-testid="input-property-size"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-foreground">{t.step3Title}</h3>
                <p className="text-muted-foreground">{t.step3Subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      {t.electricityLabel}
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        type="number"
                        value={data.monthlyElectricity}
                        onChange={(e) => setData({ ...data, monthlyElectricity: Number(e.target.value) })}
                        className="h-11 bg-background/50 pr-16"
                        data-testid="input-electricity"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{t.monthlyTL}</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-red-500" />
                      {t.heatingLabel}
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        type="number"
                        value={data.monthlyHeating}
                        onChange={(e) => setData({ ...data, monthlyHeating: Number(e.target.value) })}
                        className="h-11 bg-background/50 pr-16"
                        data-testid="input-heating"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{t.monthlyTL}</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-sky-500" />
                      {t.hotWaterLabel}
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        type="number"
                        value={data.monthlyHotWater}
                        onChange={(e) => setData({ ...data, monthlyHotWater: Number(e.target.value) })}
                        className="h-11 bg-background/50 pr-16"
                        data-testid="input-hotwater"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{t.monthlyTL}</span>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Snowflake className="w-4 h-4 text-blue-500" />
                      {t.coolingLabel}
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        type="number"
                        value={data.monthlyCooling}
                        onChange={(e) => setData({ ...data, monthlyCooling: Number(e.target.value) })}
                        className="h-11 bg-background/50 pr-16"
                        data-testid="input-cooling"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{t.monthlyTL}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">{t.step4Title}</h3>
                <p className="text-muted-foreground">{t.step4Subtitle}</p>
                <div>
                  <Label htmlFor="roofArea" className="text-base font-medium">{t.roofAreaLabel}</Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.roofAreaHint}</p>
                  <Input
                    id="roofArea"
                    type="number"
                    value={data.roofArea}
                    onChange={(e) => setData({ ...data, roofArea: Number(e.target.value) })}
                    className="h-12 text-lg bg-background/50"
                    placeholder="50"
                    data-testid="input-roof-area"
                  />
                </div>
                <div>
                  <Label className="text-base font-medium">{t.batteryLabel}: {data.batterySize} kWh</Label>
                  <p className="text-sm text-muted-foreground mb-3">{t.batteryHint}</p>
                  <Slider
                    value={[data.batterySize]}
                    onValueChange={(value) => setData({ ...data, batterySize: value[0] })}
                    min={5}
                    max={30}
                    step={1}
                    className="mt-2"
                    data-testid="slider-battery"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5 kWh</span>
                    <span>30 kWh</span>
                  </div>
                </div>
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
