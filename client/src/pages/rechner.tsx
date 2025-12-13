import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import System4in1Calculator from "@/components/System4in1Calculator";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Sun, Zap, TrendingUp, Shield, CheckCircle, Euro, Leaf, Home, Battery, ThermometerSun, Snowflake, ArrowRight, Clock, Award, Users, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

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

const content = {
  tr: {
    badge: "089 Bayern German System",
    badgeSub: "Enerji Tasarruf Hesaplayıcı",
    title: "Antalya Güneş Paneli ve Isı Pompası",
    titleHighlight: "Tasarruf Hesaplayıcı",
    subtitle: "Antalya, Alanya ve Akdeniz bölgesinde 089 Bayern 4-in-1 German System ile güneş paneli, ısı pompası ve enerji depolama sisteminizin ne kadar tasarruf sağlayacağını hesaplayın. Alman mühendisliği ile %70'e varan enerji tasarrufu.",
    
    statsInstallations: "089 Bayern German System",
    statsSavings: "Ortalama Tasarruf",
    statsYears: "Geri Ödeme Süresi",
    statsCustomers: "Memnuniyet Oranı",
    
    howItWorksTitle: "Antalya Güneş Enerjisi Tasarruf Hesaplayıcı Nasıl Çalışır?",
    howItWorksSubtitle: "Sadece 3 adımda Akdeniz bölgesine özel kişiselleştirilmiş güneş paneli ve ısı pompası tasarruf analizinizi alın",
    
    step1Title: "Evinizi Tanımlayın",
    step1Desc: "Antalya, Alanya veya Akdeniz'deki mülk tipinizi, büyüklüğünü ve çatı alanınızı girin. Hesaplayıcımız evinize en uygun güneş paneli ve ısı pompası sistem boyutunu belirler.",
    
    step2Title: "Mevcut Enerji Harcamalarınızı Girin",
    step2Desc: "Aylık elektrik, ısıtma, sıcak su ve soğutma harcamalarınızı belirtin. Türkiye enerji fiyatlarına göre gerçek verilerle doğru tasarruf hesabı yapılır.",
    
    step3Title: "Güneş Enerjisi Tasarruf Raporunuzu Alın",
    step3Desc: "Yıllık güneş paneli ve ısı pompası tasarruf miktarınızı, sistem maliyetini ve geri ödeme süresini anında görün. Antalya'da ücretsiz keşif randevusu alın.",
    
    whyCalculateTitle: "Antalya'da Neden Güneş Paneli Tasarruf Hesabı Yapmalısınız?",
    whyCalculateSubtitle: "Akdeniz ikliminde enerji bağımsızlığına giden yolda ilk adım: Gerçek rakamlarla güneş enerjisi planlaması",
    
    reason1Title: "Gerçekçi Güneş Enerjisi Bütçe Planlaması",
    reason1Desc: "Hayali vaatler yerine, Antalya veya Alanya'daki evinize özel hesaplanmış gerçek güneş paneli ve ısı pompası tasarruf rakamlarıyla yatırımınızı planlayın.",
    
    reason2Title: "Akdeniz Güneşiyle Hızlı Geri Ödeme",
    reason2Desc: "Antalya ve Akdeniz bölgesinin bol güneşiyle ortalama 4-6 yılda güneş paneli yatırımınızı geri kazanın. Sonrası tamamen kar.",
    
    reason3Title: "Türkiye Devlet Teşvikleri",
    reason3Desc: "Güneş enerjisi ve ısı pompası için mevcut Türkiye teşvik ve vergi avantajlarından yararlanarak maliyetlerinizi daha da düşürün.",
    
    reason4Title: "Çevre Dostu Enerji Yatırımı",
    reason4Desc: "Yılda ortalama 15-20 ton CO2 emisyonu azaltarak Akdeniz'in temiz geleceğine yatırım yapın.",
    
    systemsTitle: "089 Bayern 4-in-1 German System: Güneş Paneli, Isı Pompası, Enerji Depolama, Klima",
    systemsSubtitle: "Antalya ve Akdeniz için tek yatırımda dört farklı Alman enerji çözümü",
    
    system1Name: "Alman Güneş Panelleri",
    system1Desc: "Premium Alman güneş panelleri ile Antalya güneşinden elektriğinizi üretin",
    
    system2Name: "Vaillant Isı Pompası",
    system2Desc: "Alman Vaillant ısı pompaları ile Akdeniz iklimine uygun verimli ısıtma ve soğutma",
    
    system3Name: "BYD Enerji Depolama",
    system3Desc: "BYD bataryalarla Antalya güneş enerjisini gece kullanın",
    
    system4Name: "Samsung Akıllı Klima",
    system4Desc: "Samsung klimalar ile Akdeniz sıcağında konforlu yaşam alanları",
    
    guaranteeTitle: "089 Bayern Alman Kalite Garantisi - Antalya ve Akdeniz",
    guaranteeSubtitle: "089 Bayern olarak Antalya, Alanya ve tüm Akdeniz bölgesinde güneş paneli ve ısı pompası sistemlerimize kapsamlı Alman garanti sunuyoruz",
    
    guarantee1: "10+ Yıl Ürün Garantisi",
    guarantee2: "25 Yıl Performans Garantisi",
    guarantee3: "Ücretsiz Teknik Destek",
    guarantee4: "Profesyonel Kurulum",
    
    ctaTitle: "Antalya Güneş Paneli Tasarrufunuzu Hesaplayın",
    ctaSubtitle: "Aşağıdaki hesaplayıcıyı kullanarak Antalya, Alanya veya Akdeniz'deki evinize özel güneş enerjisi tasarruf analizinizi hemen alın",
    
    faqTitle: "Antalya Güneş Paneli ve Isı Pompası Sık Sorulan Sorular",
    faq1Q: "Antalya güneş paneli tasarruf hesaplaması ne kadar doğru?",
    faq1A: "Hesaplayıcımız Antalya ve Akdeniz iklimi ile Türkiye enerji fiyatlarına göre optimize edilmiştir. Gerçek güneş paneli ve ısı pompası tasarrufları yerinde keşif sonrası netleşir.",
    faq2Q: "Antalya'da güneş paneli ve ısı pompası kurulumu ne kadar sürer?",
    faq2A: "Standart bir 089 Bayern 4-in-1 German System kurulumu Antalya bölgesinde ortalama 3-5 gün sürer. Kompleks projeler daha uzun sürebilir.",
    faq3Q: "Güneş paneli ve ısı pompası için finansman seçenekleri var mı?",
    faq3A: "Evet, Antalya ve Akdeniz bölgesinde banka kredisi ve taksitli ödeme seçenekleri sunuyoruz. Detaylar için ücretsiz danışmanlık alın.",
  },
  de: {
    badge: "089 Bayern German System",
    badgeSub: "Solaranlage Einsparungsrechner",
    title: "Antalya Solaranlage & Wärmepumpe",
    titleHighlight: "Einsparungsrechner",
    subtitle: "Berechnen Sie, wie viel Sie mit dem 089 Bayern 4-in-1 German System in Antalya, Alanya und der Mittelmeerregion an Solaranlage, Wärmepumpe und Energiespeicher sparen können. Bis zu 70% Einsparung durch deutsche Ingenieurskunst.",
    
    statsInstallations: "089 Bayern German System",
    statsSavings: "Durchschn. Einsparung",
    statsYears: "Amortisationszeit",
    statsCustomers: "Zufriedenheitsrate",
    
    howItWorksTitle: "Antalya Solaranlage Einsparungsrechner: So funktioniert's",
    howItWorksSubtitle: "In nur 3 Schritten zu Ihrer personalisierten Solaranlage und Wärmepumpe Einsparungsanalyse für die Mittelmeerregion",
    
    step1Title: "Beschreiben Sie Ihre Immobilie in der Türkei",
    step1Desc: "Geben Sie Immobilientyp, Größe und Dachfläche Ihrer Immobilie in Antalya, Alanya oder der Mittelmeerregion ein. Unser Rechner ermittelt die optimale Solaranlage und Wärmepumpe Systemgröße.",
    
    step2Title: "Aktuelle Energiekosten eingeben",
    step2Desc: "Geben Sie Ihre monatlichen Kosten für Strom, Heizung, Warmwasser und Kühlung in der Türkei an. Mit türkischen Energiepreisen zur genauen Berechnung.",
    
    step3Title: "Solaranlage Einsparungsbericht erhalten",
    step3Desc: "Sehen Sie sofort Ihre jährliche Solaranlage und Wärmepumpe Ersparnis, Systemkosten und Amortisationszeit. Vereinbaren Sie eine kostenlose Beratung in Antalya.",
    
    whyCalculateTitle: "Warum Solaranlage Einsparung in Antalya berechnen?",
    whyCalculateSubtitle: "Der erste Schritt zur Energieunabhängigkeit im Mittelmeerklima: Planung mit echten Zahlen für Solaranlage und Wärmepumpe",
    
    reason1Title: "Realistische Solaranlage Budgetplanung",
    reason1Desc: "Planen Sie Ihre Solaranlage und Wärmepumpe Investition in Antalya oder Alanya mit echten, für Ihr Zuhause berechneten Einsparungszahlen.",
    
    reason2Title: "Schnelle Amortisation mit Mittelmeersonne",
    reason2Desc: "Mit der Antalya Mittelmeersonne durchschnittlich 4-6 Jahre bis zur Solaranlage Amortisation. Danach reiner Gewinn.",
    
    reason3Title: "Türkei Staatliche Förderungen",
    reason3Desc: "Nutzen Sie verfügbare Solaranlage und Wärmepumpe Förderprogramme und Steuervorteile in der Türkei, um Ihre Kosten weiter zu senken.",
    
    reason4Title: "Umweltfreundliche Energie Investition",
    reason4Desc: "Investieren Sie in die Zukunft des Mittelmeers mit durchschnittlich 15-20 Tonnen CO2-Einsparung pro Jahr durch Solarenergie.",
    
    systemsTitle: "089 Bayern 4-in-1 German System: Solaranlage, Wärmepumpe, Speicher, Klima",
    systemsSubtitle: "Vier verschiedene deutsche Energielösungen in einer Investition für Antalya und die Mittelmeerregion",
    
    system1Name: "Deutsche Solaranlage",
    system1Desc: "Premium deutsche Solarpanele für eigene Stromerzeugung in Antalya mit Mittelmeersonne",
    
    system2Name: "Vaillant Wärmepumpe",
    system2Desc: "Deutsche Vaillant Wärmepumpen für effizientes Heizen und Kühlen im Mittelmeerklima",
    
    system3Name: "BYD Energiespeicher",
    system3Desc: "BYD Batterien zur Nutzung von Antalya Solarstrom bei Nacht",
    
    system4Name: "Samsung Smart-Klima",
    system4Desc: "Samsung Klimaanlagen für komfortable Wohnräume in der türkischen Mittelmeerhitze",
    
    guaranteeTitle: "089 Bayern Deutsche Qualitätsgarantie - Antalya & Mittelmeer",
    guaranteeSubtitle: "Als 089 Bayern bieten wir umfassende deutsche Garantien für alle Solaranlage und Wärmepumpe Systeme in Antalya, Alanya und der Mittelmeerregion",
    
    guarantee1: "10+ Jahre Produktgarantie",
    guarantee2: "25 Jahre Leistungsgarantie",
    guarantee3: "Kostenloser Technik-Support",
    guarantee4: "Professionelle Installation",
    
    ctaTitle: "Antalya Solaranlage Einsparung berechnen",
    ctaSubtitle: "Nutzen Sie den Rechner unten für Ihre personalisierte Solaranlage und Wärmepumpe Einsparungsanalyse in der Türkei",
    
    faqTitle: "Antalya Solaranlage & Wärmepumpe: Häufig gestellte Fragen",
    faq1Q: "Wie genau ist die Antalya Solaranlage Berechnung?",
    faq1A: "Unser Solaranlage Rechner ist für das Antalya Mittelmeerklima und türkische Energiepreise optimiert. Genaue Einsparungen werden nach Vor-Ort-Besichtigung ermittelt.",
    faq2Q: "Wie lange dauert die Solaranlage und Wärmepumpe Installation in Antalya?",
    faq2A: "Eine Standard 089 Bayern 4-in-1 German System Installation dauert in Antalya durchschnittlich 3-5 Tage. Komplexe Projekte können länger dauern.",
    faq3Q: "Gibt es Solaranlage und Wärmepumpe Finanzierungsoptionen in der Türkei?",
    faq3A: "Ja, wir bieten Bankkredit und Ratenzahlung für Solaranlage und Wärmepumpe in Antalya und der Mittelmeerregion an. Für Details vereinbaren Sie eine kostenlose Beratung.",
  },
  en: {
    badge: "089 Bayern German System",
    badgeSub: "Savings Calculator",
    title: "Calculate Your",
    titleHighlight: "Energy Savings",
    subtitle: "Discover how much you can save on energy costs with the 089 Bayern 4-in-1 German System. Up to 70% savings through German engineering.",
    
    statsInstallations: "089 Bayern German System",
    statsSavings: "Average Savings",
    statsYears: "Payback Period",
    statsCustomers: "Satisfaction Rate",
    
    howItWorksTitle: "How Does the Savings Calculator Work?",
    howItWorksSubtitle: "Get your personalized savings analysis in just 3 steps",
    
    step1Title: "Describe Your Home",
    step1Desc: "Enter your property type, size, and roof area. Our calculator determines the optimal system size for your home.",
    
    step2Title: "Enter Current Expenses",
    step2Desc: "Specify your monthly electricity, heating, hot water, and cooling costs. Accurate calculation with real data.",
    
    step3Title: "Get Your Savings Report",
    step3Desc: "See your annual savings, system cost, and payback period instantly. Schedule a free consultation.",
    
    whyCalculateTitle: "Why Should You Calculate Your Savings?",
    whyCalculateSubtitle: "The first step to energy independence: Planning with real numbers",
    
    reason1Title: "Realistic Budget Planning",
    reason1Desc: "Plan your investment with real savings figures calculated specifically for your home, not empty promises.",
    
    reason2Title: "Fast Payback",
    reason2Desc: "With Mediterranean sun, average 4-6 years to payback. Pure profit afterwards.",
    
    reason3Title: "Government Incentives",
    reason3Desc: "Take advantage of available incentives and tax benefits to further reduce your costs.",
    
    reason4Title: "Eco-Friendly Investment",
    reason4Desc: "Invest in the future with an average of 15-20 tons of CO2 savings per year.",
    
    systemsTitle: "4-in-1 German System Components",
    systemsSubtitle: "Four different energy solutions in one investment",
    
    system1Name: "Solar Panels",
    system1Desc: "Premium German solar panels for your own electricity generation",
    
    system2Name: "Heat Pump",
    system2Desc: "Vaillant heat pumps for efficient heating and cooling",
    
    system3Name: "Energy Storage",
    system3Desc: "BYD batteries to use solar energy at night",
    
    system4Name: "Smart AC",
    system4Desc: "Samsung air conditioners for comfortable living spaces",
    
    guaranteeTitle: "German Quality Guarantee",
    guaranteeSubtitle: "As 089 Bayern, we offer comprehensive warranties for all our systems",
    
    guarantee1: "10+ Years Product Warranty",
    guarantee2: "25 Years Performance Warranty",
    guarantee3: "Free Technical Support",
    guarantee4: "Professional Installation",
    
    ctaTitle: "Start Calculating Your Savings",
    ctaSubtitle: "Use the calculator below for your personalized savings analysis",
    
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How accurate is the calculation?",
    faq1A: "Our calculator is optimized for Mediterranean climate and Turkish energy prices. Exact savings are determined after on-site inspection.",
    faq2Q: "How long does system installation take?",
    faq2A: "A standard 4-in-1 system installation takes an average of 3-5 days. Complex projects may take longer.",
    faq3Q: "Are there financing options?",
    faq3A: "Yes, we offer bank loans and installment payments. For details, schedule a free consultation.",
  },
  ru: {
    badge: "089 Bayern German System",
    badgeSub: "Калькулятор экономии",
    title: "Рассчитайте Вашу",
    titleHighlight: "Экономию энергии",
    subtitle: "Узнайте, сколько вы можете сэкономить на энергозатратах с системой 089 Bayern 4-in-1 German System. До 70% экономии благодаря немецкой инженерии.",
    
    statsInstallations: "089 Bayern German System",
    statsSavings: "Средняя экономия",
    statsYears: "Срок окупаемости",
    statsCustomers: "Уровень удовлетвор.",
    
    howItWorksTitle: "Как работает калькулятор экономии?",
    howItWorksSubtitle: "Получите персональный анализ экономии всего за 3 шага",
    
    step1Title: "Опишите ваш дом",
    step1Desc: "Введите тип недвижимости, размер и площадь крыши. Наш калькулятор определит оптимальный размер системы для вашего дома.",
    
    step2Title: "Введите текущие расходы",
    step2Desc: "Укажите ежемесячные расходы на электричество, отопление, горячую воду и охлаждение. Точный расчёт на основе реальных данных.",
    
    step3Title: "Получите отчёт об экономии",
    step3Desc: "Мгновенно увидьте годовую экономию, стоимость системы и срок окупаемости. Запишитесь на бесплатную консультацию.",
    
    whyCalculateTitle: "Почему стоит рассчитать экономию?",
    whyCalculateSubtitle: "Первый шаг к энергонезависимости: планирование с реальными цифрами",
    
    reason1Title: "Реалистичное планирование бюджета",
    reason1Desc: "Планируйте инвестиции с реальными цифрами экономии, рассчитанными специально для вашего дома, а не пустыми обещаниями.",
    
    reason2Title: "Быстрая окупаемость",
    reason2Desc: "При средиземноморском солнце в среднем 4-6 лет до окупаемости. После этого - чистая прибыль.",
    
    reason3Title: "Государственные субсидии",
    reason3Desc: "Воспользуйтесь доступными субсидиями и налоговыми льготами для дополнительного снижения расходов.",
    
    reason4Title: "Экологичные инвестиции",
    reason4Desc: "Инвестируйте в будущее со средней экономией 15-20 тонн CO2 в год.",
    
    systemsTitle: "Компоненты 4-in-1 German System",
    systemsSubtitle: "Четыре разных энергетических решения в одной инвестиции",
    
    system1Name: "Солнечные панели",
    system1Desc: "Премиум немецкие солнечные панели для собственного производства электричества",
    
    system2Name: "Тепловой насос",
    system2Desc: "Тепловые насосы Vaillant для эффективного отопления и охлаждения",
    
    system3Name: "Накопитель энергии",
    system3Desc: "Батареи BYD для использования солнечной энергии ночью",
    
    system4Name: "Умный кондиционер",
    system4Desc: "Кондиционеры Samsung для комфортного проживания",
    
    guaranteeTitle: "Немецкая гарантия качества",
    guaranteeSubtitle: "Как 089 Bayern, мы предлагаем комплексные гарантии на все наши системы",
    
    guarantee1: "10+ лет гарантии на продукцию",
    guarantee2: "25 лет гарантии производительности",
    guarantee3: "Бесплатная техническая поддержка",
    guarantee4: "Профессиональная установка",
    
    ctaTitle: "Начните расчёт вашей экономии",
    ctaSubtitle: "Используйте калькулятор ниже для персонального анализа экономии",
    
    faqTitle: "Часто задаваемые вопросы",
    faq1Q: "Насколько точен расчёт?",
    faq1A: "Наш калькулятор оптимизирован для средиземноморского климата и турецких цен на энергию. Точная экономия определяется после осмотра на месте.",
    faq2Q: "Сколько времени занимает установка системы?",
    faq2A: "Стандартная установка системы 4-in-1 занимает в среднем 3-5 дней. Сложные проекты могут занять больше времени.",
    faq3Q: "Есть ли варианты финансирования?",
    faq3A: "Да, мы предлагаем банковские кредиты и рассрочку. Для деталей запишитесь на бесплатную консультацию.",
  },
  uk: {
    badge: "089 Bayern German System",
    badgeSub: "Калькулятор економії",
    title: "Розрахуйте Вашу",
    titleHighlight: "Економію енергії",
    subtitle: "Дізнайтеся, скільки ви можете заощадити на енергозатратах із системою 089 Bayern 4-in-1 German System. До 70% економії завдяки німецькій інженерії.",
    
    statsInstallations: "089 Bayern German System",
    statsSavings: "Середня економія",
    statsYears: "Термін окупності",
    statsCustomers: "Рівень задоволен.",
    
    howItWorksTitle: "Як працює калькулятор економії?",
    howItWorksSubtitle: "Отримайте персональний аналіз економії лише за 3 кроки",
    
    step1Title: "Опишіть ваш дім",
    step1Desc: "Введіть тип нерухомості, розмір та площу даху. Наш калькулятор визначить оптимальний розмір системи для вашого дому.",
    
    step2Title: "Введіть поточні витрати",
    step2Desc: "Вкажіть щомісячні витрати на електрику, опалення, гарячу воду та охолодження. Точний розрахунок на основі реальних даних.",
    
    step3Title: "Отримайте звіт про економію",
    step3Desc: "Миттєво побачте річну економію, вартість системи та термін окупності. Запишіться на безкоштовну консультацію.",
    
    whyCalculateTitle: "Чому варто розрахувати економію?",
    whyCalculateSubtitle: "Перший крок до енергонезалежності: планування з реальними цифрами",
    
    reason1Title: "Реалістичне планування бюджету",
    reason1Desc: "Плануйте інвестиції з реальними цифрами економії, розрахованими спеціально для вашого дому, а не порожніми обіцянками.",
    
    reason2Title: "Швидка окупність",
    reason2Desc: "При середземноморському сонці в середньому 4-6 років до окупності. Після цього - чистий прибуток.",
    
    reason3Title: "Державні субсидії",
    reason3Desc: "Скористайтеся доступними субсидіями та податковими пільгами для додаткового зниження витрат.",
    
    reason4Title: "Екологічні інвестиції",
    reason4Desc: "Інвестуйте в майбутнє із середньою економією 15-20 тонн CO2 на рік.",
    
    systemsTitle: "Компоненти 4-in-1 German System",
    systemsSubtitle: "Чотири різні енергетичні рішення в одній інвестиції",
    
    system1Name: "Сонячні панелі",
    system1Desc: "Преміум німецькі сонячні панелі для власного виробництва електрики",
    
    system2Name: "Тепловий насос",
    system2Desc: "Теплові насоси Vaillant для ефективного опалення та охолодження",
    
    system3Name: "Накопичувач енергії",
    system3Desc: "Батареї BYD для використання сонячної енергії вночі",
    
    system4Name: "Розумний кондиціонер",
    system4Desc: "Кондиціонери Samsung для комфортного проживання",
    
    guaranteeTitle: "Німецька гарантія якості",
    guaranteeSubtitle: "Як 089 Bayern, ми пропонуємо комплексні гарантії на всі наші системи",
    
    guarantee1: "10+ років гарантії на продукцію",
    guarantee2: "25 років гарантії продуктивності",
    guarantee3: "Безкоштовна технічна підтримка",
    guarantee4: "Професійна установка",
    
    ctaTitle: "Почніть розрахунок вашої економії",
    ctaSubtitle: "Використовуйте калькулятор нижче для персонального аналізу економії",
    
    faqTitle: "Часті запитання",
    faq1Q: "Наскільки точний розрахунок?",
    faq1A: "Наш калькулятор оптимізований для середземноморського клімату та турецьких цін на енергію. Точна економія визначається після огляду на місці.",
    faq2Q: "Скільки часу займає встановлення системи?",
    faq2A: "Стандартна установка системи 4-in-1 займає в середньому 3-5 днів. Складні проекти можуть зайняти більше часу.",
    faq3Q: "Чи є варіанти фінансування?",
    faq3A: "Так, ми пропонуємо банківські кредити та розстрочку. Для деталей запишіться на безкоштовну консультацію.",
  },
  ar: {
    badge: "089 Bayern German System",
    badgeSub: "حاسبة التوفير",
    title: "احسب",
    titleHighlight: "توفير الطاقة الخاص بك",
    subtitle: "اكتشف كم يمكنك توفيره في تكاليف الطاقة مع نظام 089 Bayern 4-in-1 German System. توفير يصل إلى 70% بفضل الهندسة الألمانية.",
    
    statsInstallations: "089 Bayern German System",
    statsSavings: "متوسط التوفير",
    statsYears: "فترة الاسترداد",
    statsCustomers: "معدل الرضا",
    
    howItWorksTitle: "كيف تعمل حاسبة التوفير؟",
    howItWorksSubtitle: "احصل على تحليل التوفير الشخصي في 3 خطوات فقط",
    
    step1Title: "صِف منزلك",
    step1Desc: "أدخل نوع العقار والحجم ومساحة السقف. ستحدد حاسبتنا الحجم الأمثل للنظام لمنزلك.",
    
    step2Title: "أدخل النفقات الحالية",
    step2Desc: "حدد تكاليف الكهرباء والتدفئة والماء الساخن والتبريد الشهرية. حساب دقيق بالبيانات الحقيقية.",
    
    step3Title: "احصل على تقرير التوفير",
    step3Desc: "شاهد فوراً توفيرك السنوي وتكلفة النظام وفترة الاسترداد. حدد موعداً لاستشارة مجانية.",
    
    whyCalculateTitle: "لماذا يجب أن تحسب توفيرك؟",
    whyCalculateSubtitle: "الخطوة الأولى نحو استقلال الطاقة: التخطيط بأرقام حقيقية",
    
    reason1Title: "تخطيط ميزانية واقعي",
    reason1Desc: "خطط لاستثمارك بأرقام توفير حقيقية محسوبة خصيصاً لمنزلك، وليس وعوداً فارغة.",
    
    reason2Title: "استرداد سريع",
    reason2Desc: "مع شمس البحر المتوسط، 4-6 سنوات في المتوسط للاسترداد. ربح صافٍ بعد ذلك.",
    
    reason3Title: "حوافز حكومية",
    reason3Desc: "استفد من الحوافز المتاحة والمزايا الضريبية لتقليل تكاليفك بشكل أكبر.",
    
    reason4Title: "استثمار صديق للبيئة",
    reason4Desc: "استثمر في المستقبل بمتوسط توفير 15-20 طن من ثاني أكسيد الكربون سنوياً.",
    
    systemsTitle: "مكونات نظام 4-in-1 German System",
    systemsSubtitle: "أربعة حلول طاقة مختلفة في استثمار واحد",
    
    system1Name: "الألواح الشمسية",
    system1Desc: "ألواح شمسية ألمانية متميزة لإنتاج الكهرباء الخاصة بك",
    
    system2Name: "المضخة الحرارية",
    system2Desc: "مضخات Vaillant الحرارية للتدفئة والتبريد الفعال",
    
    system3Name: "تخزين الطاقة",
    system3Desc: "بطاريات BYD لاستخدام الطاقة الشمسية ليلاً",
    
    system4Name: "التكييف الذكي",
    system4Desc: "مكيفات Samsung لمساحات معيشة مريحة",
    
    guaranteeTitle: "ضمان الجودة الألمانية",
    guaranteeSubtitle: "كـ 089 Bayern، نقدم ضمانات شاملة لجميع أنظمتنا",
    
    guarantee1: "+10 سنوات ضمان المنتج",
    guarantee2: "25 سنة ضمان الأداء",
    guarantee3: "دعم فني مجاني",
    guarantee4: "تركيب احترافي",
    
    ctaTitle: "ابدأ حساب توفيرك",
    ctaSubtitle: "استخدم الحاسبة أدناه للحصول على تحليل التوفير الشخصي",
    
    faqTitle: "الأسئلة الشائعة",
    faq1Q: "ما مدى دقة الحساب؟",
    faq1A: "حاسبتنا محسّنة لمناخ البحر المتوسط وأسعار الطاقة التركية. يتم تحديد التوفير الدقيق بعد المعاينة الميدانية.",
    faq2Q: "كم تستغرق تركيب النظام؟",
    faq2A: "يستغرق تركيب نظام 4-in-1 القياسي 3-5 أيام في المتوسط. قد تستغرق المشاريع المعقدة وقتاً أطول.",
    faq3Q: "هل هناك خيارات تمويل؟",
    faq3A: "نعم، نقدم قروضاً بنكية وتقسيطاً. للتفاصيل، حدد موعداً لاستشارة مجانية.",
  },
};

export default function Rechner() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData | undefined>();

  const t = content[language as keyof typeof content] || content.tr;
  const isRtl = language === "ar";

  const handleCtaClick = () => {
    setIsLeadFormOpen(true);
  };

  const handleCalculatorComplete = (data: CalculatorData) => {
    setCalculatorData(data);
    setIsLeadFormOpen(true);
  };

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator-section");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    { icon: Home, title: t.step1Title, desc: t.step1Desc },
    { icon: Euro, title: t.step2Title, desc: t.step2Desc },
    { icon: TrendingUp, title: t.step3Title, desc: t.step3Desc },
  ];

  const reasons = [
    { icon: Calculator, title: t.reason1Title, desc: t.reason1Desc },
    { icon: Clock, title: t.reason2Title, desc: t.reason2Desc },
    { icon: Award, title: t.reason3Title, desc: t.reason3Desc },
    { icon: Leaf, title: t.reason4Title, desc: t.reason4Desc },
  ];

  const systems = [
    { icon: Sun, name: t.system1Name, desc: t.system1Desc, gradient: "from-amber-500 to-yellow-500" },
    { icon: ThermometerSun, name: t.system2Name, desc: t.system2Desc, gradient: "from-orange-500 to-red-500" },
    { icon: Battery, name: t.system3Name, desc: t.system3Desc, gradient: "from-emerald-500 to-green-600" },
    { icon: Snowflake, name: t.system4Name, desc: t.system4Desc, gradient: "from-cyan-500 to-blue-600" },
  ];

  const guarantees = [
    { icon: Shield, text: t.guarantee1 },
    { icon: Award, text: t.guarantee2 },
    { icon: Users, text: t.guarantee3 },
    { icon: CheckCircle, text: t.guarantee4 },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-rechner">
      <SEOHead page="rechner" />
      <Header onCtaClick={handleCtaClick} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 overflow-hidden" data-testid="section-rechner-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-accent/80 to-orange-600/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 shadow-lg">
                <div className="w-7 h-7 bg-white/20 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">089</span>
                </div>
                <span className="text-white text-sm font-bold">Bayern 4-in-1</span>
              </div>
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <Calculator className={`w-4 h-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                {t.badgeSub}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="heading-title">
              {t.title}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8" data-testid="text-subtitle">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToCalculator}
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg px-8"
                data-testid="button-rechner-cta"
              >
                {t.ctaTitle}
                <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8" 
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-rechner-phone"
              >
                <Phone className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
                +90 507 183 2036
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-4 md:py-5 px-6 bg-muted/30" data-testid="section-how-it-works">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-how-it-works">
              {t.howItWorksTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.howItWorksSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-visible" data-testid={`card-step-${index + 1}`}>
                <div className="absolute -top-4 left-6 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Calculate Section */}
      <section className="py-4 md:py-5 px-6" data-testid="section-why-calculate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-why-calculate">
              {t.whyCalculateTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.whyCalculateSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-reason-${index + 1}`}>
                <CardContent className="pt-6 pb-6 px-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Overview */}
      <section className="py-4 md:py-5 px-6 bg-muted/30" data-testid="section-systems">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Zap className="w-4 h-4 mr-2" />
              {t.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-systems">
              {t.systemsTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.systemsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((system, index) => (
              <Card key={index} className="overflow-hidden" data-testid={`card-system-${index + 1}`}>
                <div className={`h-2 bg-gradient-to-r ${system.gradient}`} />
                <CardContent className="pt-6 pb-6 px-4 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${system.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <system.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{system.name}</h3>
                  <p className="text-sm text-muted-foreground">{system.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Calculator */}
      <section className="py-4 md:py-5 px-6 bg-gradient-to-r from-accent to-orange-500" data-testid="section-cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" data-testid="heading-cta">
            {t.ctaTitle}
          </h2>
          <p className="text-lg text-white/80 mb-6">
            {t.ctaSubtitle}
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToCalculator}
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
            data-testid="button-cta-calculator"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            {t.ctaTitle}
          </Button>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator-section" className="py-8" data-testid="section-calculator">
        <System4in1Calculator onComplete={handleCalculatorComplete} />
      </section>

      {/* Guarantee Section */}
      <section className="py-4 md:py-5 px-6 bg-muted/30" data-testid="section-guarantee">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-guarantee">
              {t.guaranteeTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.guaranteeSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-xl border" data-testid={`guarantee-item-${index + 1}`}>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 md:py-5 px-6" data-testid="section-faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-faq">
              {t.faqTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} data-testid={`faq-item-${index + 1}`}>
                <CardContent className="py-5 px-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        calculatorData={calculatorData}
      />
    </div>
  );
}
