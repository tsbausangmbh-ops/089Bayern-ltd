import { MapPin, Sun, Flame, Wind, Battery, CheckCircle, ArrowRight, Phone, Star, Shield, Award, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

const content = {
  de: {
    badge: "4-in-1 Installation Antalya",
    title: "Energiesystem-Installation",
    titleHighlight: "in Antalya",
    subtitle: "Deutsche Qualität trifft mediterranes Klima. Wir installieren Ihr komplettes 4-in-1 Energiesystem in Antalya, Kemer, Belek, Side und der gesamten Mittelmeerküste.",
    ctaButton: "Kostenlose Beratung",
    callButton: "Jetzt anrufen",
    
    whyAntalyaTitle: "Warum Antalya perfekt für Solarenergie ist",
    whyAntalyaSubtitle: "300+ Sonnentage im Jahr machen Antalya zum idealen Standort",
    sunDays: "300+",
    sunDaysLabel: "Sonnentage/Jahr",
    avgTemp: "35°C",
    avgTempLabel: "Sommer-Durchschnitt",
    savings: "70%",
    savingsLabel: "Ersparnis möglich",
    
    systemsTitle: "Unsere 4-in-1 Systeme",
    systemsSubtitle: "Alles aus einer Hand - von der Planung bis zur Installation",
    
    solarTitle: "Solaranlage",
    solarDesc: "Hochleistungs-Photovoltaik mit bis zu 22% Wirkungsgrad. Perfekt für das sonnige Mittelmeerklima.",
    solarFeatures: ["Tier-1 Module", "25 Jahre Garantie", "Eigenproduktion"],
    
    heatPumpTitle: "Vaillant Wärmepumpe",
    heatPumpDesc: "Premium-Wärmepumpen von Vaillant für effizientes Heizen und Kühlen. Made in Germany.",
    heatPumpFeatures: ["COP bis 5.0", "Flüsterbetrieb", "Smart-Home ready"],
    
    climaTitle: "Samsung Klimaanlage",
    climaDesc: "Inverter-Technologie für maximale Effizienz. Kühlt im Sommer, wärmt im Winter.",
    climaFeatures: ["A+++ Effizienz", "Wind-Free Technologie", "WLAN-Steuerung"],
    
    batteryTitle: "Batteriespeicher",
    batteryDesc: "Speichern Sie überschüssige Energie für die Nacht oder Stromausfälle.",
    batteryFeatures: ["LiFePO4 Technologie", "10+ Jahre Lebensdauer", "Notstromfähig"],
    
    processTitle: "Unser Installations-Prozess",
    processSubtitle: "Von der ersten Beratung bis zur fertigen Anlage - wir begleiten Sie",
    step1Title: "Kostenlose Beratung",
    step1Desc: "Wir analysieren Ihren Bedarf und erstellen ein maßgeschneidertes Angebot.",
    step2Title: "Planung & Design",
    step2Desc: "Unsere Ingenieure planen Ihre Anlage nach deutschen DIN-Standards.",
    step3Title: "Installation",
    step3Desc: "Professionelle Montage durch unser geschultes Team vor Ort.",
    step4Title: "Inbetriebnahme",
    step4Desc: "Wir nehmen die Anlage in Betrieb und schulen Sie in der Bedienung.",
    
    areasTitle: "Unsere Einsatzgebiete in der Region Antalya",
    areas: ["Antalya Zentrum", "Kemer", "Belek", "Side", "Manavgat", "Alanya", "Gazipaşa", "Konyaaltı", "Lara", "Kundu"],
    
    testimonialsTitle: "Was unsere Kunden sagen",
    testimonial1: "Die beste Entscheidung, die wir für unser Ferienhaus getroffen haben. Keine Stromrechnung mehr!",
    testimonial1Author: "Familie Müller, Kemer",
    testimonial2: "Deutsche Qualität, türkischer Service. Absolute Empfehlung für alle Deutschen in Antalya.",
    testimonial2Author: "Herr Schmidt, Alanya",
    
    ctaTitle: "Bereit für Ihre Energieunabhängigkeit?",
    ctaSubtitle: "Kontaktieren Sie uns für eine kostenlose Vor-Ort-Beratung in Antalya",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Installationen",
    statsYears: "7+",
    statsYearsLabel: "Jahre Erfahrung",
    statsWarranty: "10",
    statsWarrantyLabel: "Jahre Garantie",
  },
  tr: {
    badge: "4'ü 1 Arada Kurulum Antalya",
    title: "Enerji Sistemi Kurulumu",
    titleHighlight: "Antalya'da",
    subtitle: "Alman kalitesi Akdeniz ikliminde. Antalya, Kemer, Belek, Side ve tüm Akdeniz kıyısında komple 4'ü 1 arada enerji sisteminizi kuruyoruz.",
    ctaButton: "Ücretsiz Danışmanlık",
    callButton: "Hemen Arayın",
    
    whyAntalyaTitle: "Antalya Neden Güneş Enerjisi İçin Mükemmel",
    whyAntalyaSubtitle: "Yılda 300+ güneşli gün Antalya'yı ideal lokasyon yapıyor",
    sunDays: "300+",
    sunDaysLabel: "Güneşli Gün/Yıl",
    avgTemp: "35°C",
    avgTempLabel: "Yaz Ortalaması",
    savings: "%70",
    savingsLabel: "Tasarruf Mümkün",
    
    systemsTitle: "4'ü 1 Arada Sistemlerimiz",
    systemsSubtitle: "Planlamadan kuruluma kadar her şey tek elden",
    
    solarTitle: "Güneş Paneli",
    solarDesc: "%22'ye kadar verimlilik ile yüksek performanslı fotovoltaik. Güneşli Akdeniz iklimi için mükemmel.",
    solarFeatures: ["Tier-1 Modüller", "25 Yıl Garanti", "Kendi Üretiminiz"],
    
    heatPumpTitle: "Vaillant Isı Pompası",
    heatPumpDesc: "Verimli ısıtma ve soğutma için Vaillant premium ısı pompaları. Made in Germany.",
    heatPumpFeatures: ["COP 5.0'a kadar", "Sessiz Çalışma", "Akıllı Ev Uyumlu"],
    
    climaTitle: "Samsung Klima",
    climaDesc: "Maksimum verimlilik için inverter teknolojisi. Yazın soğutur, kışın ısıtır.",
    climaFeatures: ["A+++ Verimlilik", "Wind-Free Teknoloji", "WiFi Kontrol"],
    
    batteryTitle: "Batarya Depolama",
    batteryDesc: "Fazla enerjiyi gece veya elektrik kesintileri için depolayın.",
    batteryFeatures: ["LiFePO4 Teknoloji", "10+ Yıl Ömür", "Kesintisiz Güç"],
    
    processTitle: "Kurulum Sürecimiz",
    processSubtitle: "İlk danışmanlıktan bitmiş sisteme kadar - yanınızdayız",
    step1Title: "Ücretsiz Danışmanlık",
    step1Desc: "İhtiyacınızı analiz eder ve size özel teklif hazırlarız.",
    step2Title: "Planlama & Tasarım",
    step2Desc: "Mühendislerimiz sisteminizi Alman DIN standartlarına göre planlar.",
    step3Title: "Kurulum",
    step3Desc: "Eğitimli ekibimiz tarafından profesyonel montaj.",
    step4Title: "Devreye Alma",
    step4Desc: "Sistemi devreye alır ve kullanımı size öğretiriz.",
    
    areasTitle: "Antalya Bölgesinde Hizmet Alanlarımız",
    areas: ["Antalya Merkez", "Kemer", "Belek", "Side", "Manavgat", "Alanya", "Gazipaşa", "Konyaaltı", "Lara", "Kundu"],
    
    testimonialsTitle: "Müşterilerimiz Ne Diyor",
    testimonial1: "Yazlık evimiz için aldığımız en iyi karar. Artık elektrik faturası yok!",
    testimonial1Author: "Müller Ailesi, Kemer",
    testimonial2: "Alman kalitesi, Türk servisi. Antalya'daki tüm Almanlara kesinlikle tavsiye ederim.",
    testimonial2Author: "Bay Schmidt, Alanya",
    
    ctaTitle: "Enerji Bağımsızlığınız İçin Hazır mısınız?",
    ctaSubtitle: "Antalya'da ücretsiz yerinde danışmanlık için bize ulaşın",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Kurulum",
    statsYears: "7+",
    statsYearsLabel: "Yıl Deneyim",
    statsWarranty: "10",
    statsWarrantyLabel: "Yıl Garanti",
  },
  en: {
    badge: "4-in-1 Installation Antalya",
    title: "Energy System Installation",
    titleHighlight: "in Antalya",
    subtitle: "German quality meets Mediterranean climate. We install your complete 4-in-1 energy system in Antalya, Kemer, Belek, Side and the entire Mediterranean coast.",
    ctaButton: "Free Consultation",
    callButton: "Call Now",
    
    whyAntalyaTitle: "Why Antalya is Perfect for Solar Energy",
    whyAntalyaSubtitle: "300+ sunny days per year make Antalya the ideal location",
    sunDays: "300+",
    sunDaysLabel: "Sunny Days/Year",
    avgTemp: "35°C",
    avgTempLabel: "Summer Average",
    savings: "70%",
    savingsLabel: "Savings Possible",
    
    systemsTitle: "Our 4-in-1 Systems",
    systemsSubtitle: "Everything from one source - from planning to installation",
    
    solarTitle: "Solar System",
    solarDesc: "High-performance photovoltaics with up to 22% efficiency. Perfect for the sunny Mediterranean climate.",
    solarFeatures: ["Tier-1 Modules", "25 Year Warranty", "Own Production"],
    
    heatPumpTitle: "Vaillant Heat Pump",
    heatPumpDesc: "Premium heat pumps from Vaillant for efficient heating and cooling. Made in Germany.",
    heatPumpFeatures: ["COP up to 5.0", "Whisper Quiet", "Smart Home Ready"],
    
    climaTitle: "Samsung Air Conditioning",
    climaDesc: "Inverter technology for maximum efficiency. Cools in summer, heats in winter.",
    climaFeatures: ["A+++ Efficiency", "Wind-Free Technology", "WiFi Control"],
    
    batteryTitle: "Battery Storage",
    batteryDesc: "Store excess energy for night time or power outages.",
    batteryFeatures: ["LiFePO4 Technology", "10+ Year Lifespan", "Backup Power"],
    
    processTitle: "Our Installation Process",
    processSubtitle: "From first consultation to finished system - we guide you",
    step1Title: "Free Consultation",
    step1Desc: "We analyze your needs and create a customized offer.",
    step2Title: "Planning & Design",
    step2Desc: "Our engineers plan your system according to German DIN standards.",
    step3Title: "Installation",
    step3Desc: "Professional installation by our trained team on site.",
    step4Title: "Commissioning",
    step4Desc: "We commission the system and train you in its operation.",
    
    areasTitle: "Our Service Areas in the Antalya Region",
    areas: ["Antalya Center", "Kemer", "Belek", "Side", "Manavgat", "Alanya", "Gazipaşa", "Konyaaltı", "Lara", "Kundu"],
    
    testimonialsTitle: "What Our Customers Say",
    testimonial1: "The best decision we made for our holiday home. No more electricity bills!",
    testimonial1Author: "Müller Family, Kemer",
    testimonial2: "German quality, Turkish service. Absolute recommendation for all Germans in Antalya.",
    testimonial2Author: "Mr. Schmidt, Alanya",
    
    ctaTitle: "Ready for Your Energy Independence?",
    ctaSubtitle: "Contact us for a free on-site consultation in Antalya",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Installations",
    statsYears: "7+",
    statsYearsLabel: "Years Experience",
    statsWarranty: "10",
    statsWarrantyLabel: "Year Warranty",
  },
  ru: {
    badge: "Установка 4-в-1 Анталия",
    title: "Установка энергосистемы",
    titleHighlight: "в Анталии",
    subtitle: "Немецкое качество встречает средиземноморский климат. Устанавливаем вашу полную энергосистему 4-в-1 в Анталии, Кемере, Белеке, Сиде и на всем средиземноморском побережье.",
    ctaButton: "Бесплатная консультация",
    callButton: "Позвонить",
    
    whyAntalyaTitle: "Почему Анталия идеальна для солнечной энергии",
    whyAntalyaSubtitle: "300+ солнечных дней в году делают Анталию идеальным местом",
    sunDays: "300+",
    sunDaysLabel: "Солнечных дней/год",
    avgTemp: "35°C",
    avgTempLabel: "Летняя средняя",
    savings: "70%",
    savingsLabel: "Возможная экономия",
    
    systemsTitle: "Наши системы 4-в-1",
    systemsSubtitle: "Всё из одних рук - от планирования до установки",
    
    solarTitle: "Солнечная система",
    solarDesc: "Высокопроизводительные фотоэлектрические системы с КПД до 22%. Идеально для солнечного средиземноморского климата.",
    solarFeatures: ["Модули Tier-1", "25 лет гарантии", "Собственное производство"],
    
    heatPumpTitle: "Тепловой насос Vaillant",
    heatPumpDesc: "Премиальные тепловые насосы Vaillant для эффективного отопления и охлаждения. Made in Germany.",
    heatPumpFeatures: ["COP до 5.0", "Бесшумная работа", "Готов к умному дому"],
    
    climaTitle: "Кондиционер Samsung",
    climaDesc: "Инверторная технология для максимальной эффективности. Охлаждает летом, греет зимой.",
    climaFeatures: ["Эффективность A+++", "Технология Wind-Free", "WiFi управление"],
    
    batteryTitle: "Аккумуляторное хранение",
    batteryDesc: "Храните избыточную энергию для ночи или отключений электричества.",
    batteryFeatures: ["Технология LiFePO4", "Срок службы 10+ лет", "Резервное питание"],
    
    processTitle: "Наш процесс установки",
    processSubtitle: "От первой консультации до готовой системы - мы сопровождаем вас",
    step1Title: "Бесплатная консультация",
    step1Desc: "Мы анализируем ваши потребности и создаём индивидуальное предложение.",
    step2Title: "Планирование и дизайн",
    step2Desc: "Наши инженеры планируют вашу систему по немецким стандартам DIN.",
    step3Title: "Установка",
    step3Desc: "Профессиональный монтаж нашей обученной командой на месте.",
    step4Title: "Ввод в эксплуатацию",
    step4Desc: "Мы вводим систему в эксплуатацию и обучаем вас её использованию.",
    
    areasTitle: "Наши зоны обслуживания в регионе Анталия",
    areas: ["Центр Анталии", "Кемер", "Белек", "Сиде", "Манавгат", "Алания", "Газипаша", "Коньяалты", "Лара", "Кунду"],
    
    testimonialsTitle: "Что говорят наши клиенты",
    testimonial1: "Лучшее решение для нашего загородного дома. Больше никаких счетов за электричество!",
    testimonial1Author: "Семья Мюллер, Кемер",
    testimonial2: "Немецкое качество, турецкий сервис. Абсолютная рекомендация для всех немцев в Анталии.",
    testimonial2Author: "Господин Шмидт, Алания",
    
    ctaTitle: "Готовы к энергетической независимости?",
    ctaSubtitle: "Свяжитесь с нами для бесплатной консультации на месте в Анталии",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Установок",
    statsYears: "7+",
    statsYearsLabel: "Лет опыта",
    statsWarranty: "10",
    statsWarrantyLabel: "Лет гарантии",
  },
  uk: {
    badge: "Встановлення 4-в-1 Анталія",
    title: "Встановлення енергосистеми",
    titleHighlight: "в Анталії",
    subtitle: "Німецька якість зустрічає середземноморський клімат. Встановлюємо вашу повну енергосистему 4-в-1 в Анталії, Кемері, Белеку, Сіде та на всьому середземноморському узбережжі.",
    ctaButton: "Безкоштовна консультація",
    callButton: "Зателефонувати",
    
    whyAntalyaTitle: "Чому Анталія ідеальна для сонячної енергії",
    whyAntalyaSubtitle: "300+ сонячних днів на рік роблять Анталію ідеальним місцем",
    sunDays: "300+",
    sunDaysLabel: "Сонячних днів/рік",
    avgTemp: "35°C",
    avgTempLabel: "Літня середня",
    savings: "70%",
    savingsLabel: "Можлива економія",
    
    systemsTitle: "Наші системи 4-в-1",
    systemsSubtitle: "Все з одних рук - від планування до встановлення",
    
    solarTitle: "Сонячна система",
    solarDesc: "Високопродуктивні фотоелектричні системи з ККД до 22%. Ідеально для сонячного середземноморського клімату.",
    solarFeatures: ["Модулі Tier-1", "25 років гарантії", "Власне виробництво"],
    
    heatPumpTitle: "Тепловий насос Vaillant",
    heatPumpDesc: "Преміальні теплові насоси Vaillant для ефективного опалення та охолодження. Made in Germany.",
    heatPumpFeatures: ["COP до 5.0", "Безшумна робота", "Готовий до розумного дому"],
    
    climaTitle: "Кондиціонер Samsung",
    climaDesc: "Інверторна технологія для максимальної ефективності. Охолоджує влітку, гріє взимку.",
    climaFeatures: ["Ефективність A+++", "Технологія Wind-Free", "WiFi керування"],
    
    batteryTitle: "Акумуляторне зберігання",
    batteryDesc: "Зберігайте надлишкову енергію на ніч або відключення електрики.",
    batteryFeatures: ["Технологія LiFePO4", "Термін служби 10+ років", "Резервне живлення"],
    
    processTitle: "Наш процес встановлення",
    processSubtitle: "Від першої консультації до готової системи - ми супроводжуємо вас",
    step1Title: "Безкоштовна консультація",
    step1Desc: "Ми аналізуємо ваші потреби та створюємо індивідуальну пропозицію.",
    step2Title: "Планування та дизайн",
    step2Desc: "Наші інженери планують вашу систему за німецькими стандартами DIN.",
    step3Title: "Встановлення",
    step3Desc: "Професійний монтаж нашою навченою командою на місці.",
    step4Title: "Введення в експлуатацію",
    step4Desc: "Ми вводимо систему в експлуатацію та навчаємо вас її використанню.",
    
    areasTitle: "Наші зони обслуговування в регіоні Анталія",
    areas: ["Центр Анталії", "Кемер", "Белек", "Сіде", "Манавгат", "Аланія", "Газіпаша", "Коньяалти", "Лара", "Кунду"],
    
    testimonialsTitle: "Що кажуть наші клієнти",
    testimonial1: "Найкраще рішення для нашого заміського будинку. Більше ніяких рахунків за електрику!",
    testimonial1Author: "Сім'я Мюллер, Кемер",
    testimonial2: "Німецька якість, турецький сервіс. Абсолютна рекомендація для всіх німців в Анталії.",
    testimonial2Author: "Пан Шмідт, Аланія",
    
    ctaTitle: "Готові до енергетичної незалежності?",
    ctaSubtitle: "Зв'яжіться з нами для безкоштовної консультації на місці в Анталії",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Встановлень",
    statsYears: "7+",
    statsYearsLabel: "Років досвіду",
    statsWarranty: "10",
    statsWarrantyLabel: "Років гарантії",
  },
  ar: {
    badge: "تركيب 4 في 1 أنطاليا",
    title: "تركيب نظام الطاقة",
    titleHighlight: "في أنطاليا",
    subtitle: "الجودة الألمانية تلتقي بمناخ البحر المتوسط. نقوم بتركيب نظام الطاقة الكامل 4 في 1 في أنطاليا وكيمر وبيليك وسيدي وعلى طول ساحل البحر المتوسط.",
    ctaButton: "استشارة مجانية",
    callButton: "اتصل الآن",
    
    whyAntalyaTitle: "لماذا أنطاليا مثالية للطاقة الشمسية",
    whyAntalyaSubtitle: "300+ يوم مشمس في السنة تجعل أنطاليا الموقع المثالي",
    sunDays: "+300",
    sunDaysLabel: "يوم مشمس/سنة",
    avgTemp: "35°C",
    avgTempLabel: "متوسط الصيف",
    savings: "70%",
    savingsLabel: "توفير ممكن",
    
    systemsTitle: "أنظمتنا 4 في 1",
    systemsSubtitle: "كل شيء من مصدر واحد - من التخطيط إلى التركيب",
    
    solarTitle: "النظام الشمسي",
    solarDesc: "أنظمة كهروضوئية عالية الأداء بكفاءة تصل إلى 22%. مثالية لمناخ البحر المتوسط المشمس.",
    solarFeatures: ["وحدات Tier-1", "ضمان 25 سنة", "إنتاج خاص"],
    
    heatPumpTitle: "مضخة حرارية Vaillant",
    heatPumpDesc: "مضخات حرارية متميزة من Vaillant للتدفئة والتبريد الفعال. صنع في ألمانيا.",
    heatPumpFeatures: ["COP حتى 5.0", "تشغيل هادئ", "جاهز للمنزل الذكي"],
    
    climaTitle: "تكييف Samsung",
    climaDesc: "تقنية الانفرتر لأقصى كفاءة. يبرد في الصيف، يسخن في الشتاء.",
    climaFeatures: ["كفاءة A+++", "تقنية Wind-Free", "تحكم WiFi"],
    
    batteryTitle: "تخزين البطارية",
    batteryDesc: "خزن الطاقة الزائدة لليل أو انقطاع التيار الكهربائي.",
    batteryFeatures: ["تقنية LiFePO4", "عمر 10+ سنوات", "طاقة احتياطية"],
    
    processTitle: "عملية التركيب لدينا",
    processSubtitle: "من الاستشارة الأولى إلى النظام النهائي - نرافقك",
    step1Title: "استشارة مجانية",
    step1Desc: "نحلل احتياجاتك وننشئ عرضاً مخصصاً.",
    step2Title: "التخطيط والتصميم",
    step2Desc: "يخطط مهندسونا نظامك وفقاً للمعايير الألمانية DIN.",
    step3Title: "التركيب",
    step3Desc: "تركيب احترافي من قبل فريقنا المدرب في الموقع.",
    step4Title: "التشغيل",
    step4Desc: "نقوم بتشغيل النظام وندربك على استخدامه.",
    
    areasTitle: "مناطق خدمتنا في منطقة أنطاليا",
    areas: ["مركز أنطاليا", "كيمر", "بيليك", "سيدي", "مانافغات", "ألانيا", "غازي باشا", "كونيالتي", "لارا", "كوندو"],
    
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonial1: "أفضل قرار اتخذناه لمنزل العطلات. لا مزيد من فواتير الكهرباء!",
    testimonial1Author: "عائلة مولر، كيمر",
    testimonial2: "جودة ألمانية، خدمة تركية. توصية مطلقة لجميع الألمان في أنطاليا.",
    testimonial2Author: "السيد شميدت، ألانيا",
    
    ctaTitle: "هل أنت مستعد لاستقلالية الطاقة؟",
    ctaSubtitle: "تواصل معنا للحصول على استشارة مجانية في الموقع في أنطاليا",
    
    statsInstallations: "+500",
    statsInstallationsLabel: "تركيب",
    statsYears: "+7",
    statsYearsLabel: "سنوات خبرة",
    statsWarranty: "10",
    statsWarrantyLabel: "سنوات ضمان",
  },
  hr: {
    badge: "4-u-1 Instalacija Antalya",
    title: "Instalacija Energetskog Sustava",
    titleHighlight: "u Antalyi",
    subtitle: "Njemačka kvaliteta susreće mediteransku klimu. Instaliramo vaš kompletan 4-u-1 energetski sustav u Antalyi, Kemeru, Beleku, Sideu i cijeloj mediteranskoj obali.",
    ctaButton: "Besplatna Konzultacija",
    callButton: "Nazovite Odmah",
    
    whyAntalyaTitle: "Zašto je Antalya Savršena za Solarnu Energiju",
    whyAntalyaSubtitle: "300+ sunčanih dana godišnje čini Antalyu idealnom lokacijom",
    sunDays: "300+",
    sunDaysLabel: "Sunčanih Dana/God",
    avgTemp: "35°C",
    avgTempLabel: "Ljetni Prosjek",
    savings: "70%",
    savingsLabel: "Moguća Ušteda",
    
    systemsTitle: "Naši 4-u-1 Sustavi",
    systemsSubtitle: "Sve iz jednog izvora - od planiranja do instalacije",
    
    solarTitle: "Solarni Sustav",
    solarDesc: "Visokoučinkovita fotonaponska tehnologija s do 22% efikasnosti. Savršeno za sunčanu mediteransku klimu.",
    solarFeatures: ["Tier-1 Moduli", "25 Godina Jamstva", "Vlastita Proizvodnja"],
    
    heatPumpTitle: "Vaillant Toplinska Pumpa",
    heatPumpDesc: "Premium toplinske pumpe od Vaillanta za učinkovito grijanje i hlađenje. Made in Germany.",
    heatPumpFeatures: ["COP do 5.0", "Tihi Rad", "Smart Home Spreman"],
    
    climaTitle: "Samsung Klimatizacija",
    climaDesc: "Inverter tehnologija za maksimalnu efikasnost. Hladi ljeti, grije zimi.",
    climaFeatures: ["A+++ Efikasnost", "Wind-Free Tehnologija", "WiFi Kontrola"],
    
    batteryTitle: "Pohrana Baterije",
    batteryDesc: "Pohranite višak energije za noć ili nestanak struje.",
    batteryFeatures: ["LiFePO4 Tehnologija", "10+ Godina Životnog Vijeka", "Rezervno Napajanje"],
    
    processTitle: "Naš Proces Instalacije",
    processSubtitle: "Od prve konzultacije do gotovog sustava - vodimo vas",
    step1Title: "Besplatna Konzultacija",
    step1Desc: "Analiziramo vaše potrebe i kreiramo prilagođenu ponudu.",
    step2Title: "Planiranje i Dizajn",
    step2Desc: "Naši inženjeri planiraju vaš sustav prema njemačkim DIN standardima.",
    step3Title: "Instalacija",
    step3Desc: "Profesionalna instalacija od strane našeg obučenog tima na lokaciji.",
    step4Title: "Puštanje u Rad",
    step4Desc: "Puštamo sustav u rad i obučavamo vas za korištenje.",
    
    areasTitle: "Naša Područja Usluga u Regiji Antalya",
    areas: ["Centar Antalye", "Kemer", "Belek", "Side", "Manavgat", "Alanya", "Gazipaşa", "Konyaaltı", "Lara", "Kundu"],
    
    testimonialsTitle: "Što Kažu Naši Klijenti",
    testimonial1: "Najbolja odluka koju smo donijeli za našu kuću za odmor. Više nema računa za struju!",
    testimonial1Author: "Obitelj Müller, Kemer",
    testimonial2: "Njemačka kvaliteta, turska usluga. Apsolutna preporuka za sve Nijemce u Antalyi.",
    testimonial2Author: "G. Schmidt, Alanya",
    
    ctaTitle: "Spremni za Energetsku Neovisnost?",
    ctaSubtitle: "Kontaktirajte nas za besplatnu konzultaciju na lokaciji u Antalyi",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Instalacija",
    statsYears: "7+",
    statsYearsLabel: "Godina Iskustva",
    statsWarranty: "10",
    statsWarrantyLabel: "Godina Jamstva",
  },
};

export default function InstallationAntalya() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  const scrollToCalculator = () => {
    setLocation("/rechner");
  };

  const systems = [
    { icon: Sun, title: c.solarTitle, desc: c.solarDesc, features: c.solarFeatures, color: "from-amber-500 to-orange-600" },
    { icon: Flame, title: c.heatPumpTitle, desc: c.heatPumpDesc, features: c.heatPumpFeatures, color: "from-red-500 to-rose-600" },
    { icon: Wind, title: c.climaTitle, desc: c.climaDesc, features: c.climaFeatures, color: "from-sky-500 to-blue-600" },
    { icon: Battery, title: c.batteryTitle, desc: c.batteryDesc, features: c.batteryFeatures, color: "from-emerald-500 to-green-600" },
  ];

  const steps = [
    { num: "1", title: c.step1Title, desc: c.step1Desc, icon: Phone },
    { num: "2", title: c.step2Title, desc: c.step2Desc, icon: Shield },
    { num: "3", title: c.step3Title, desc: c.step3Desc, icon: Award },
    { num: "4", title: c.step4Title, desc: c.step4Desc, icon: CheckCircle },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-installation-antalya">
      <SEOHead page="installation-antalya" />
      <Header onCtaClick={scrollToCalculator} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden" data-testid="section-antalya-hero">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary border-primary/30">
              <MapPin className="w-3 h-3 mr-1" />
              {c.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {c.title} <span className="text-primary">{c.titleHighlight}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {c.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToCalculator} className="bg-gradient-to-r from-primary to-orange-600" data-testid="button-antalya-cta">
                {c.ctaButton}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm" asChild data-testid="button-antalya-call">
                <a href="tel:+905071832036">
                  <Phone className="w-4 h-4 mr-2" />
                  {c.callButton}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{c.sunDays}</div>
              <div className="text-sm text-muted-foreground">{c.sunDaysLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{c.avgTemp}</div>
              <div className="text-sm text-muted-foreground">{c.avgTempLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{c.savings}</div>
              <div className="text-sm text-muted-foreground">{c.savingsLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Antalya Section */}
      <section className="py-16" data-testid="section-why-antalya">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.whyAntalyaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">{c.whyAntalyaSubtitle}</p>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-16 bg-muted/30" data-testid="section-systems">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.systemsTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.systemsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((system, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${system.color}`} />
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${system.color} flex items-center justify-center mb-4`}>
                    <system.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{system.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{system.desc}</p>
                  <ul className="space-y-2">
                    {system.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.processTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.processSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 bg-muted/30" data-testid="section-areas">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.areasTitle}</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {c.areas.map((area, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                <MapPin className="w-3 h-3 mr-1" />
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.testimonialsTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{c.testimonial1}"</p>
              <p className="text-sm text-muted-foreground">{c.testimonial1Author}</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{c.testimonial2}"</p>
              <p className="text-sm text-muted-foreground">{c.testimonial2Author}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold">{c.statsInstallations}</div>
              <div className="text-sm opacity-80">{c.statsInstallationsLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">{c.statsYears}</div>
              <div className="text-sm opacity-80">{c.statsYearsLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">{c.statsWarranty}</div>
              <div className="text-sm opacity-80">{c.statsWarrantyLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8">{c.ctaSubtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={scrollToCalculator} className="bg-gradient-to-r from-primary to-orange-600" data-testid="button-cta-consultation">
              {c.ctaButton}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-cta-call">
              <a href="tel:+905071832036">
                <Phone className="w-4 h-4 mr-2" />
                {c.callButton}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
