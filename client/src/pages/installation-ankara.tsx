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
    badge: "4-in-1 Installation Ankara",
    title: "Energiesystem-Installation",
    titleHighlight: "in Ankara",
    subtitle: "Deutsche Qualität in der türkischen Hauptstadt. Wir installieren Ihr komplettes 4-in-1 Energiesystem in Ankara und Umgebung - inklusive 30 km Umkreis.",
    ctaButton: "Kostenlose Beratung",
    callButton: "Jetzt anrufen",
    
    whyAnkaraTitle: "Warum Ankara ideal für Energiesysteme ist",
    whyAnkaraSubtitle: "Kontinentales Klima erfordert intelligente Lösungen für Sommer und Winter",
    sunDays: "260+",
    sunDaysLabel: "Sonnentage/Jahr",
    avgTemp: "30°C",
    avgTempLabel: "Sommer-Durchschnitt",
    savings: "60%",
    savingsLabel: "Ersparnis möglich",
    
    systemsTitle: "Unsere 4-in-1 Systeme",
    systemsSubtitle: "Alles aus einer Hand - von der Planung bis zur Installation",
    
    solarTitle: "Solaranlage",
    solarDesc: "Hochleistungs-Photovoltaik mit bis zu 22% Wirkungsgrad. Optimiert für das zentralanatolische Klima.",
    solarFeatures: ["Tier-1 Module", "25 Jahre Garantie", "Eigenproduktion"],
    
    heatPumpTitle: "Vaillant Wärmepumpe",
    heatPumpDesc: "Premium-Wärmepumpen von Vaillant für effizientes Heizen im kalten Ankara-Winter. Made in Germany.",
    heatPumpFeatures: ["COP bis 5.0", "Flüsterbetrieb", "Smart-Home ready"],
    
    climaTitle: "Samsung Klimaanlage",
    climaDesc: "Inverter-Technologie für maximale Effizienz. Kühlt im heißen Sommer, wärmt im kalten Winter.",
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
    
    areasTitle: "Unsere Einsatzgebiete in der Region Ankara",
    areasSubtitle: "Ankara Zentrum + 30 km Umkreis in alle Richtungen",
    areas: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Altındağ", "Pursaklar", "Gölbaşı", "Çubuk", "Akyurt", "Kahramankazan", "Beypazarı", "Polatlı", "Batıkent", "Eryaman", "İncek", "Oran", "Bahçelievler", "Kızılay"],
    
    testimonialsTitle: "Was unsere Kunden sagen",
    testimonial1: "Endlich unabhängig von den hohen Stromkosten in Ankara. Die Wärmepumpe spart uns jeden Winter enorm.",
    testimonial1Author: "Familie Yılmaz, Çankaya",
    testimonial2: "Deutsche Qualität, professioneller Service. Die Installation war in 2 Tagen fertig.",
    testimonial2Author: "Herr Özdemir, Keçiören",
    
    ctaTitle: "Bereit für Ihre Energieunabhängigkeit?",
    ctaSubtitle: "Kontaktieren Sie uns für eine kostenlose Vor-Ort-Beratung in Ankara",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Installationen",
    statsYears: "7+",
    statsYearsLabel: "Jahre Erfahrung",
    statsWarranty: "10",
    statsWarrantyLabel: "Jahre Garantie",
  },
  tr: {
    badge: "4'ü 1 Arada Kurulum Ankara",
    title: "Enerji Sistemi Kurulumu",
    titleHighlight: "Ankara'da",
    subtitle: "Türkiye'nin başkentinde Alman kalitesi. Ankara ve çevresinde komple 4'ü 1 arada enerji sisteminizi kuruyoruz - 30 km yarıçap dahil.",
    ctaButton: "Ücretsiz Danışmanlık",
    callButton: "Hemen Arayın",
    
    whyAnkaraTitle: "Ankara Neden Enerji Sistemleri İçin İdeal",
    whyAnkaraSubtitle: "Karasal iklim, yaz ve kış için akıllı çözümler gerektiriyor",
    sunDays: "260+",
    sunDaysLabel: "Güneşli Gün/Yıl",
    avgTemp: "30°C",
    avgTempLabel: "Yaz Ortalaması",
    savings: "%60",
    savingsLabel: "Tasarruf Mümkün",
    
    systemsTitle: "4'ü 1 Arada Sistemlerimiz",
    systemsSubtitle: "Planlamadan kuruluma kadar her şey tek elden",
    
    solarTitle: "Güneş Paneli",
    solarDesc: "%22'ye kadar verimlilik ile yüksek performanslı fotovoltaik. İç Anadolu iklimi için optimize edilmiş.",
    solarFeatures: ["Tier-1 Modüller", "25 Yıl Garanti", "Kendi Üretiminiz"],
    
    heatPumpTitle: "Vaillant Isı Pompası",
    heatPumpDesc: "Soğuk Ankara kışlarında verimli ısıtma için Vaillant premium ısı pompaları. Made in Germany.",
    heatPumpFeatures: ["COP 5.0'a kadar", "Sessiz Çalışma", "Akıllı Ev Uyumlu"],
    
    climaTitle: "Samsung Klima",
    climaDesc: "Maksimum verimlilik için inverter teknolojisi. Sıcak yazda soğutur, soğuk kışta ısıtır.",
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
    
    areasTitle: "Ankara Bölgesindeki Hizmet Alanlarımız",
    areasSubtitle: "Ankara Merkez + her yöne 30 km yarıçap",
    areas: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Altındağ", "Pursaklar", "Gölbaşı", "Çubuk", "Akyurt", "Kahramankazan", "Beypazarı", "Polatlı", "Batıkent", "Eryaman", "İncek", "Oran", "Bahçelievler", "Kızılay"],
    
    testimonialsTitle: "Müşterilerimiz Ne Diyor",
    testimonial1: "Sonunda Ankara'nın yüksek elektrik maliyetlerinden bağımsızız. Isı pompası her kış bize çok tasarruf ettiriyor.",
    testimonial1Author: "Yılmaz Ailesi, Çankaya",
    testimonial2: "Alman kalitesi, profesyonel hizmet. Kurulum 2 günde tamamlandı.",
    testimonial2Author: "Bay Özdemir, Keçiören",
    
    ctaTitle: "Enerji Bağımsızlığınıza Hazır mısınız?",
    ctaSubtitle: "Ankara'da ücretsiz yerinde danışmanlık için bize ulaşın",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Kurulum",
    statsYears: "7+",
    statsYearsLabel: "Yıl Deneyim",
    statsWarranty: "10",
    statsWarrantyLabel: "Yıl Garanti",
  },
  en: {
    badge: "4-in-1 Installation Ankara",
    title: "Energy System Installation",
    titleHighlight: "in Ankara",
    subtitle: "German quality in Turkey's capital. We install your complete 4-in-1 energy system in Ankara and surroundings - including a 30 km radius.",
    ctaButton: "Free Consultation",
    callButton: "Call Now",
    
    whyAnkaraTitle: "Why Ankara is Ideal for Energy Systems",
    whyAnkaraSubtitle: "Continental climate requires smart solutions for summer and winter",
    sunDays: "260+",
    sunDaysLabel: "Sunny Days/Year",
    avgTemp: "30°C",
    avgTempLabel: "Summer Average",
    savings: "60%",
    savingsLabel: "Savings Possible",
    
    systemsTitle: "Our 4-in-1 Systems",
    systemsSubtitle: "Everything from one source - from planning to installation",
    
    solarTitle: "Solar System",
    solarDesc: "High-performance photovoltaics with up to 22% efficiency. Optimized for Central Anatolian climate.",
    solarFeatures: ["Tier-1 Modules", "25 Year Warranty", "Self-Production"],
    
    heatPumpTitle: "Vaillant Heat Pump",
    heatPumpDesc: "Premium heat pumps from Vaillant for efficient heating in cold Ankara winters. Made in Germany.",
    heatPumpFeatures: ["COP up to 5.0", "Whisper Quiet", "Smart Home Ready"],
    
    climaTitle: "Samsung Air Conditioning",
    climaDesc: "Inverter technology for maximum efficiency. Cools in hot summers, heats in cold winters.",
    climaFeatures: ["A+++ Efficiency", "Wind-Free Technology", "WiFi Control"],
    
    batteryTitle: "Battery Storage",
    batteryDesc: "Store excess energy for night or power outages.",
    batteryFeatures: ["LiFePO4 Technology", "10+ Year Lifespan", "Backup Power"],
    
    processTitle: "Our Installation Process",
    processSubtitle: "From first consultation to finished system - we guide you",
    step1Title: "Free Consultation",
    step1Desc: "We analyze your needs and create a customized offer.",
    step2Title: "Planning & Design",
    step2Desc: "Our engineers plan your system according to German DIN standards.",
    step3Title: "Installation",
    step3Desc: "Professional installation by our trained team on-site.",
    step4Title: "Commissioning",
    step4Desc: "We commission the system and train you in its operation.",
    
    areasTitle: "Our Service Areas in the Ankara Region",
    areasSubtitle: "Ankara Center + 30 km radius in all directions",
    areas: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Altındağ", "Pursaklar", "Gölbaşı", "Çubuk", "Akyurt", "Kahramankazan", "Beypazarı", "Polatlı", "Batıkent", "Eryaman", "İncek", "Oran", "Bahçelievler", "Kızılay"],
    
    testimonialsTitle: "What Our Customers Say",
    testimonial1: "Finally independent from high electricity costs in Ankara. The heat pump saves us enormously every winter.",
    testimonial1Author: "Yılmaz Family, Çankaya",
    testimonial2: "German quality, professional service. Installation was complete in 2 days.",
    testimonial2Author: "Mr. Özdemir, Keçiören",
    
    ctaTitle: "Ready for Your Energy Independence?",
    ctaSubtitle: "Contact us for a free on-site consultation in Ankara",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Installations",
    statsYears: "7+",
    statsYearsLabel: "Years Experience",
    statsWarranty: "10",
    statsWarrantyLabel: "Years Warranty",
  },
  ru: {
    badge: "Установка 4-в-1 Анкара",
    title: "Установка энергосистемы",
    titleHighlight: "в Анкаре",
    subtitle: "Немецкое качество в столице Турции. Устанавливаем вашу полную энергосистему 4-в-1 в Анкаре и окрестностях - включая 30 км радиус.",
    ctaButton: "Бесплатная консультация",
    callButton: "Позвонить",
    
    whyAnkaraTitle: "Почему Анкара идеальна для энергосистем",
    whyAnkaraSubtitle: "Континентальный климат требует умных решений для лета и зимы",
    sunDays: "260+",
    sunDaysLabel: "Солнечных дней/год",
    avgTemp: "30°C",
    avgTempLabel: "Средняя летом",
    savings: "60%",
    savingsLabel: "Экономия возможна",
    
    systemsTitle: "Наши системы 4-в-1",
    systemsSubtitle: "Всё из одних рук - от планирования до установки",
    
    solarTitle: "Солнечная система",
    solarDesc: "Высокопроизводительная фотоэлектрика с КПД до 22%. Оптимизирована для климата Центральной Анатолии.",
    solarFeatures: ["Модули Tier-1", "Гарантия 25 лет", "Собственное производство"],
    
    heatPumpTitle: "Тепловой насос Vaillant",
    heatPumpDesc: "Премиум тепловые насосы от Vaillant для эффективного отопления в холодные анкарские зимы. Made in Germany.",
    heatPumpFeatures: ["COP до 5.0", "Тихая работа", "Smart Home ready"],
    
    climaTitle: "Кондиционер Samsung",
    climaDesc: "Инверторная технология для максимальной эффективности. Охлаждает жарким летом, греет холодной зимой.",
    climaFeatures: ["A+++ эффективность", "Wind-Free технология", "WiFi управление"],
    
    batteryTitle: "Аккумуляторное хранилище",
    batteryDesc: "Храните избыточную энергию на ночь или на случай отключения.",
    batteryFeatures: ["LiFePO4 технология", "Срок службы 10+ лет", "Резервное питание"],
    
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
    
    areasTitle: "Наши зоны обслуживания в регионе Анкара",
    areasSubtitle: "Центр Анкары + 30 км радиус во всех направлениях",
    areas: ["Чанкая", "Кечиорен", "Йенимахалле", "Мамак", "Этимесгут", "Синджан", "Алтындаг", "Пурсаклар", "Гёльбаши", "Чубук", "Акюрт", "Кахраманказан", "Бейпазары", "Полатлы", "Батыкент", "Эрьяман", "Инджек", "Оран", "Бахчелиевлер", "Кызылай"],
    
    testimonialsTitle: "Что говорят наши клиенты",
    testimonial1: "Наконец независимы от высоких цен на электричество в Анкаре. Тепловой насос экономит нам каждую зиму.",
    testimonial1Author: "Семья Йылмаз, Чанкая",
    testimonial2: "Немецкое качество, профессиональный сервис. Установка была завершена за 2 дня.",
    testimonial2Author: "Г-н Öздемир, Кечиорен",
    
    ctaTitle: "Готовы к энергетической независимости?",
    ctaSubtitle: "Свяжитесь с нами для бесплатной консультации на месте в Анкаре",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Установок",
    statsYears: "7+",
    statsYearsLabel: "Лет опыта",
    statsWarranty: "10",
    statsWarrantyLabel: "Лет гарантии",
  },
  uk: {
    badge: "Встановлення 4-в-1 Анкара",
    title: "Встановлення енергосистеми",
    titleHighlight: "в Анкарі",
    subtitle: "Німецька якість у столиці Туреччини. Встановлюємо вашу повну енергосистему 4-в-1 в Анкарі та околицях - включаючи 30 км радіус.",
    ctaButton: "Безкоштовна консультація",
    callButton: "Зателефонувати",
    
    whyAnkaraTitle: "Чому Анкара ідеальна для енергосистем",
    whyAnkaraSubtitle: "Континентальний клімат потребує розумних рішень для літа і зими",
    sunDays: "260+",
    sunDaysLabel: "Сонячних днів/рік",
    avgTemp: "30°C",
    avgTempLabel: "Середня влітку",
    savings: "60%",
    savingsLabel: "Економія можлива",
    
    systemsTitle: "Наші системи 4-в-1",
    systemsSubtitle: "Все з одних рук - від планування до встановлення",
    
    solarTitle: "Сонячна система",
    solarDesc: "Високопродуктивна фотоелектрика з ККД до 22%. Оптимізована для клімату Центральної Анатолії.",
    solarFeatures: ["Модулі Tier-1", "Гарантія 25 років", "Власне виробництво"],
    
    heatPumpTitle: "Тепловий насос Vaillant",
    heatPumpDesc: "Преміум теплові насоси від Vaillant для ефективного опалення в холодні анкарські зими. Made in Germany.",
    heatPumpFeatures: ["COP до 5.0", "Тиха робота", "Smart Home ready"],
    
    climaTitle: "Кондиціонер Samsung",
    climaDesc: "Інверторна технологія для максимальної ефективності. Охолоджує спекотним літом, гріє холодною зимою.",
    climaFeatures: ["A+++ ефективність", "Wind-Free технологія", "WiFi керування"],
    
    batteryTitle: "Акумуляторне сховище",
    batteryDesc: "Зберігайте надлишкову енергію на ніч або на випадок відключення.",
    batteryFeatures: ["LiFePO4 технологія", "Термін служби 10+ років", "Резервне живлення"],
    
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
    
    areasTitle: "Наші зони обслуговування в регіоні Анкара",
    areasSubtitle: "Центр Анкари + 30 км радіус у всіх напрямках",
    areas: ["Чанкая", "Кечіорен", "Єнімахалле", "Мамак", "Етімесгут", "Сінджан", "Алтиндаг", "Пурсаклар", "Гёльбаші", "Чубук", "Акюрт", "Кахраманказан", "Бейпазари", "Полатли", "Батикент", "Ер'яман", "Інджек", "Оран", "Бахчеліевлер", "Кизилай"],
    
    testimonialsTitle: "Що кажуть наші клієнти",
    testimonial1: "Нарешті незалежні від високих цін на електрику в Анкарі. Тепловий насос економить нам щозими.",
    testimonial1Author: "Сім'я Йилмаз, Чанкая",
    testimonial2: "Німецька якість, професійний сервіс. Встановлення було завершено за 2 дні.",
    testimonial2Author: "Пан Оздемір, Кечіорен",
    
    ctaTitle: "Готові до енергетичної незалежності?",
    ctaSubtitle: "Зв'яжіться з нами для безкоштовної консультації на місці в Анкарі",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Встановлень",
    statsYears: "7+",
    statsYearsLabel: "Років досвіду",
    statsWarranty: "10",
    statsWarrantyLabel: "Років гарантії",
  },
  ar: {
    badge: "تركيب 4 في 1 أنقرة",
    title: "تركيب نظام الطاقة",
    titleHighlight: "في أنقرة",
    subtitle: "الجودة الألمانية في العاصمة التركية. نقوم بتركيب نظام الطاقة الكامل 4 في 1 في أنقرة والمناطق المحيطة - بما في ذلك 30 كم نصف قطر.",
    ctaButton: "استشارة مجانية",
    callButton: "اتصل الآن",
    
    whyAnkaraTitle: "لماذا أنقرة مثالية لأنظمة الطاقة",
    whyAnkaraSubtitle: "المناخ القاري يتطلب حلولاً ذكية للصيف والشتاء",
    sunDays: "+260",
    sunDaysLabel: "يوم مشمس/سنة",
    avgTemp: "30°C",
    avgTempLabel: "متوسط الصيف",
    savings: "60%",
    savingsLabel: "التوفير ممكن",
    
    systemsTitle: "أنظمتنا 4 في 1",
    systemsSubtitle: "كل شيء من مصدر واحد - من التخطيط إلى التركيب",
    
    solarTitle: "النظام الشمسي",
    solarDesc: "الخلايا الكهروضوئية عالية الأداء بكفاءة تصل إلى 22%. محسّن لمناخ وسط الأناضول.",
    solarFeatures: ["وحدات Tier-1", "ضمان 25 سنة", "إنتاج ذاتي"],
    
    heatPumpTitle: "مضخة حرارية Vaillant",
    heatPumpDesc: "مضخات حرارية ممتازة من Vaillant للتدفئة الفعالة في شتاء أنقرة البارد. صنع في ألمانيا.",
    heatPumpFeatures: ["COP حتى 5.0", "تشغيل هادئ", "جاهز للمنزل الذكي"],
    
    climaTitle: "تكييف Samsung",
    climaDesc: "تقنية العاكس لأقصى كفاءة. يبرد في الصيف الحار، يسخن في الشتاء البارد.",
    climaFeatures: ["كفاءة A+++", "تقنية Wind-Free", "تحكم WiFi"],
    
    batteryTitle: "تخزين البطارية",
    batteryDesc: "خزّن الطاقة الزائدة لليل أو انقطاع الكهرباء.",
    batteryFeatures: ["تقنية LiFePO4", "عمر 10+ سنوات", "طاقة احتياطية"],
    
    processTitle: "عملية التركيب لدينا",
    processSubtitle: "من الاستشارة الأولى إلى النظام النهائي - نرشدك",
    step1Title: "استشارة مجانية",
    step1Desc: "نحلل احتياجاتك ونقدم عرضاً مخصصاً.",
    step2Title: "التخطيط والتصميم",
    step2Desc: "يخطط مهندسونا نظامك وفقاً لمعايير DIN الألمانية.",
    step3Title: "التركيب",
    step3Desc: "تركيب احترافي بواسطة فريقنا المدرب في الموقع.",
    step4Title: "التشغيل",
    step4Desc: "نشغّل النظام وندربك على استخدامه.",
    
    areasTitle: "مناطق خدماتنا في منطقة أنقرة",
    areasSubtitle: "وسط أنقرة + 30 كم نصف قطر في جميع الاتجاهات",
    areas: ["تشانكايا", "كيتشيورين", "ينيماهالله", "ماماك", "إتيمسغوت", "سينجان", "ألتينداغ", "بورصاكلار", "غولباشي", "تشوبوك", "أكيورت", "كهرمان كازان", "بيبازاري", "بولاتلي", "باتيكنت", "إريامان", "إنجك", "أوران", "باهتشلي إفلر", "كيزيلاي"],
    
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonial1: "أخيراً مستقلون عن تكاليف الكهرباء العالية في أنقرة. المضخة الحرارية توفر لنا كل شتاء.",
    testimonial1Author: "عائلة يلماز، تشانكايا",
    testimonial2: "جودة ألمانية، خدمة احترافية. اكتمل التركيب في يومين.",
    testimonial2Author: "السيد أوزدمير، كيتشيورين",
    
    ctaTitle: "مستعد لاستقلالك في الطاقة؟",
    ctaSubtitle: "اتصل بنا للحصول على استشارة مجانية في الموقع في أنقرة",
    
    statsInstallations: "+500",
    statsInstallationsLabel: "تركيب",
    statsYears: "+7",
    statsYearsLabel: "سنوات خبرة",
    statsWarranty: "10",
    statsWarrantyLabel: "سنوات ضمان",
  },
  hr: {
    badge: "4-u-1 Instalacija Ankara",
    title: "Instalacija Energetskog Sustava",
    titleHighlight: "u Ankari",
    subtitle: "Njemačka kvaliteta u turskoj prijestolnici. Instaliramo vaš kompletan 4-u-1 energetski sustav u Ankari i okolici - uključujući 30 km radius.",
    ctaButton: "Besplatna Konzultacija",
    callButton: "Nazovite Odmah",
    
    whyAnkaraTitle: "Zašto je Ankara Idealna za Energetske Sustave",
    whyAnkaraSubtitle: "Kontinentalna klima zahtijeva pametna rješenja za ljeto i zimu",
    sunDays: "260+",
    sunDaysLabel: "Sunčanih Dana/Godišnje",
    avgTemp: "30°C",
    avgTempLabel: "Ljetni Prosjek",
    savings: "60%",
    savingsLabel: "Ušteda Moguća",
    
    systemsTitle: "Naši 4-u-1 Sustavi",
    systemsSubtitle: "Sve iz jednog izvora - od planiranja do instalacije",
    
    solarTitle: "Solarni Sustav",
    solarDesc: "Visokoučinkovita fotonaponska tehnologija s do 22% efikasnosti. Optimizirano za klimu Središnje Anatolije.",
    solarFeatures: ["Tier-1 Moduli", "25 Godina Jamstva", "Vlastita Proizvodnja"],
    
    heatPumpTitle: "Vaillant Toplinska Pumpa",
    heatPumpDesc: "Premium toplinske pumpe od Vaillanta za učinkovito grijanje u hladnim zimama Ankare. Made in Germany.",
    heatPumpFeatures: ["COP do 5.0", "Tihi Rad", "Smart Home Spreman"],
    
    climaTitle: "Samsung Klimatizacija",
    climaDesc: "Inverter tehnologija za maksimalnu efikasnost. Hladi vrućih ljeta, grije hladnih zima.",
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
    
    areasTitle: "Naša Područja Usluga u Regiji Ankara",
    areasSubtitle: "Centar Ankare + 30 km radius u svim smjerovima",
    areas: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Altındağ", "Pursaklar", "Gölbaşı", "Çubuk", "Akyurt", "Kahramankazan", "Beypazarı", "Polatlı", "Batıkent", "Eryaman", "İncek", "Oran", "Bahçelievler", "Kızılay"],
    
    testimonialsTitle: "Što Kažu Naši Klijenti",
    testimonial1: "Konačno neovisni o visokim troškovima struje u Ankari. Toplinska pumpa štedi nam svaku zimu.",
    testimonial1Author: "Obitelj Yılmaz, Çankaya",
    testimonial2: "Njemačka kvaliteta, profesionalna usluga. Instalacija je završena za 2 dana.",
    testimonial2Author: "G. Özdemir, Keçiören",
    
    ctaTitle: "Spremni za Energetsku Neovisnost?",
    ctaSubtitle: "Kontaktirajte nas za besplatnu konzultaciju na lokaciji u Ankari",
    
    statsInstallations: "500+",
    statsInstallationsLabel: "Instalacija",
    statsYears: "7+",
    statsYearsLabel: "Godina Iskustva",
    statsWarranty: "10",
    statsWarrantyLabel: "Godina Jamstva",
  },
};

export default function InstallationAnkara() {
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
    { num: "1", title: c.step1Title, desc: c.step1Desc, icon: Users },
    { num: "2", title: c.step2Title, desc: c.step2Desc, icon: Shield },
    { num: "3", title: c.step3Title, desc: c.step3Desc, icon: Award },
    { num: "4", title: c.step4Title, desc: c.step4Desc, icon: CheckCircle },
  ];

  return (
    <div className={`min-h-screen ${isRtl ? "rtl" : "ltr"}`} dir={isRtl ? "rtl" : "ltr"}>
      <SEOHead page="installation-ankara" />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center" data-testid="section-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
            <MapPin className="w-3 h-3 mr-1" />
            {c.badge}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {c.title}{" "}
            <span className="text-primary">{c.titleHighlight}</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            {c.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToCalculator} data-testid="button-hero-cta">
              {c.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white" asChild data-testid="button-hero-call">
              <a href="tel:+905330476670">
                <Phone className="mr-2 w-5 h-5" />
                {c.callButton}
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{c.statsInstallations}</div>
              <div className="text-sm text-gray-300">{c.statsInstallationsLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{c.statsYears}</div>
              <div className="text-sm text-gray-300">{c.statsYearsLabel}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{c.statsWarranty}</div>
              <div className="text-sm text-gray-300">{c.statsWarrantyLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ankara Section */}
      <section className="py-16 bg-muted/30" data-testid="section-why-ankara">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.whyAnkaraTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.whyAnkaraSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Sun className="w-12 h-12 mx-auto mb-4 text-amber-500" />
                <div className="text-4xl font-bold mb-2">{c.sunDays}</div>
                <div className="text-muted-foreground">{c.sunDaysLabel}</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Flame className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <div className="text-4xl font-bold mb-2">{c.avgTemp}</div>
                <div className="text-muted-foreground">{c.avgTempLabel}</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Battery className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
                <div className="text-4xl font-bold mb-2">{c.savings}</div>
                <div className="text-muted-foreground">{c.savingsLabel}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-16" data-testid="section-systems">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.systemsTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.systemsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((system, index) => (
              <Card key={index} className="overflow-visible hover-elevate">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${system.color} flex items-center justify-center mb-4`}>
                    <system.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{system.title}</h3>
                  <p className="text-muted-foreground mb-4">{system.desc}</p>
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
      <section className="py-16 bg-muted/30" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.processTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.processSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.num}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16" data-testid="section-areas">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.areasTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.areasSubtitle}</p>
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
      <section className="py-16 bg-muted/30" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{c.testimonialsTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{c.testimonial1}"</p>
                <p className="font-semibold">{c.testimonial1Author}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{c.testimonial2}"</p>
                <p className="font-semibold">{c.testimonial2Author}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-xl opacity-90 mb-8">{c.ctaSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" onClick={scrollToCalculator} data-testid="button-cta-calculator">
              {c.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10" asChild data-testid="button-cta-call">
              <a href="tel:+905330476670">
                <Phone className="mr-2 w-5 h-5" />
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
