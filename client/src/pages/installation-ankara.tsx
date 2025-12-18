import { MapPin, Sun, Flame, Wind, Battery, CheckCircle, ArrowRight, Phone, Star, Shield, Award, Clock, Users, TrendingUp, Home, Zap, Percent, Rocket, Thermometer, Snowflake, HelpCircle, Building2 } from "lucide-react";
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
    badgeType: "Niederlassung",
    badge: "4-in-1 Installation Ankara",
    title: "Energiesystem-Installation",
    titleHighlight: "in Ankara",
    subtitle: "089 Bayern Niederlassung Ankara - Deutsche Qualität in der türkischen Hauptstadt. Mit der Stärke unserer Zentrale in Antalya installieren wir Ihr komplettes 4-in-1 Energiesystem in Ankara und Umgebung.",
    ctaButton: "Kostenlose Beratung",
    callButton: "Jetzt anrufen",
    
    officeTitle: "089 Bayern Niederlassung Ankara",
    officeSubtitle: "Ihr lokaler Partner für Zentralanatolien - mit der Stärke unserer Antalya Zentrale",
    officeDesc: "Als Niederlassung von 089 Bayern bieten wir Ihnen den kompletten Service vor Ort in Ankara. Von der Beratung bis zur Installation - alles aus einer Hand, unterstützt durch unser Expertenteam aus der Zentrale Antalya.",
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Warum sich ein 4-in-1 System für Sie lohnt",
    benefitsSubtitle: "Stellen Sie sich vor: Nie wieder hohe Stromrechnungen, nie wieder kalte Winter, nie wieder Abhängigkeit von steigenden Energiepreisen",
    
    benefit1Title: "Finanzielle Freiheit",
    benefit1Desc: "Während andere jedes Jahr mehr für Energie bezahlen, sinken Ihre Kosten auf nahezu Null. Das gesparte Geld bleibt in Ihrer Tasche - für das, was Ihnen wirklich wichtig ist.",
    benefit1Stat: "ca. 60%",
    benefit1StatLabel: "weniger Energiekosten",
    
    benefit2Title: "Absolute Unabhängigkeit",
    benefit2Desc: "Stellen Sie sich vor, wie es sich anfühlt, wenn Sie wissen: Egal was in der Welt passiert - Ihr Zuhause hat immer Strom, Wärme und Kühlung. Das ist echte Sicherheit.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "Energieversorgung",
    
    benefit3Title: "Wertsteigerung Ihrer Immobilie",
    benefit3Desc: "Jeder kluge Käufer weiß: Eine Immobilie mit eigenem Energiesystem ist mehr wert. Sie investieren nicht nur in Energie - Sie investieren in die Zukunft Ihres Hauses.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "Immobilienwert",
    
    benefit4Title: "Sorgenfreie Zukunft",
    benefit4Desc: "10 Jahre Garantie, deutsche Ingenieursqualität, lokaler Service. Während andere sich Sorgen machen, genießen Sie einfach Ihr Leben - mit der Gewissheit, dass alles funktioniert.",
    benefit4Stat: "10 Jahre",
    benefit4StatLabel: "Rundum-Garantie",
    
    // Why 4-in-1 Section
    why4in1Title: "Warum 4-in-1 statt Einzelkomponenten?",
    why4in1Subtitle: "Die intelligente Lösung für Ankaras extremes Klima",
    
    why4in1Point1Title: "Perfekte Synergie",
    why4in1Point1Desc: "Samsung und Vaillant - zwei Premium-Marken, ein perfektes System. Die Solaranlage produziert Strom, die Vaillant Wärmepumpe nutzt ihn effizient, die Samsung Klimaanlage sorgt für Komfort, und der Samsung Speicher sichert alles ab. Deutsche und koreanische Ingenieurskunst vereint.",
    
    why4in1Point2Title: "Ein Ansprechpartner",
    why4in1Point2Desc: "Keine Koordination zwischen verschiedenen Installateuren. Keine Schuldzuweisungen bei Problemen. Ein Team, eine Verantwortung, eine Lösung. So einfach sollte es sein.",
    
    why4in1Point3Title: "Optimierte Kosten",
    why4in1Point3Desc: "Einzeln kaufen bedeutet: 4x Anfahrt, 4x Installation, 4x Verwaltung. Bei uns: Alles aus einer Hand, optimal aufeinander abgestimmt, ein Preis - und Sie sparen bis zu 20% gegenüber Einzelkauf.",
    
    why4in1Point4Title: "Zukunftssicher",
    why4in1Point4Desc: "Unser System wächst mit Ihren Bedürfnissen. Heute eine Villa, morgen vielleicht ein Poolhaus dazu? Kein Problem. Die Infrastruktur ist bereit.",
    
    // Ankara Climate Section
    climateTitle: "Ankaras Klima - Ihre Chance",
    climateSubtitle: "Das kontinentale Klima Ankaras bietet einzigartige Möglichkeiten für Energieeffizienz",
    
    climatePoint1Title: "Heiße Sommer bis 40°C",
    climatePoint1Desc: "Während andere unter der Hitze leiden, produziert Ihre Solaranlage Rekordmengen an Strom. Die Samsung Wind-Free Klimaanlage kühlt dabei flüsterleise und energieeffizient.",
    
    climatePoint2Title: "Kalte Winter bis -15°C",
    climatePoint2Desc: "Wenn Ankara unter Schnee liegt, arbeitet Ihre Vaillant Wärmepumpe auf Hochtouren - und verbraucht dabei nur einen Bruchteil dessen, was eine herkömmliche Heizung kosten würde.",
    
    climatePoint3Title: "260+ Sonnentage",
    climatePoint3Desc: "Mehr Sonnentage als München, mehr Potenzial als die meisten deutschen Städte. Ihr 4-in-1 System nutzt jeden einzelnen davon.",
    
    // SEO FAQ Section
    faqTitle: "Häufige Fragen zur 4-in-1 Installation in Ankara",
    
    faq1Q: "Wie lange dauert die Installation eines 4-in-1 Systems in Ankara?",
    faq1A: "Die komplette Installation dauert typischerweise 3-5 Werktage, abhängig von der Größe Ihrer Immobilie. Bei einer Standard-Villa mit 200m² rechnen wir mit 3 Tagen.",
    
    faq2Q: "Funktioniert das System auch bei Stromausfall?",
    faq2A: "Ja! Der integrierte Batteriespeicher versorgt Ihr Haus bis zu 24 Stunden mit Strom. Bei Sonnenschein noch länger, da die Solaranlage weiter produziert.",
    
    faq3Q: "Wie verhält sich die Wärmepumpe bei extremer Kälte in Ankara?",
    faq3A: "Die Vaillant aroTHERM ist speziell für kalte Klimazonen entwickelt und arbeitet effizient bis -25°C. Bei Ankaras durchschnittlichen Wintertemperaturen von -5°C bis -10°C liefert sie volle Leistung.",
    
    faq4Q: "Was kostet ein 4-in-1 System für meine Villa in Ankara?",
    faq4A: "Die Kosten hängen von Ihrer Wohnfläche und Ihrem Energiebedarf ab. Für eine 200m² Villa rechnen Sie mit ca. 35.000-50.000 EUR. Die genauen Kosten ermitteln wir in einer kostenlosen Vor-Ort-Beratung.",
    
    faq5Q: "Gibt es Fördermöglichkeiten in der Türkei?",
    faq5A: "Ja, die türkische Regierung fördert erneuerbare Energien. Zusätzlich profitieren Sie von reduzierten Stromtarifen für Eigenproduktion. Wir beraten Sie gerne zu allen verfügbaren Fördermöglichkeiten.",
  },
  tr: {
    badgeType: "Şube",
    badge: "4'ü 1 Arada Kurulum Ankara",
    title: "Enerji Sistemi Kurulumu",
    titleHighlight: "Ankara'da",
    subtitle: "089 Bayern Ankara Şubesi - Türkiye'nin başkentinde Alman kalitesi. Antalya merkezimizin gücüyle Ankara ve çevresinde komple 4'ü 1 arada enerji sisteminizi kuruyoruz.",
    ctaButton: "Ücretsiz Danışmanlık",
    callButton: "Hemen Arayın",
    
    officeTitle: "089 Bayern Ankara Şubesi",
    officeSubtitle: "İç Anadolu için yerel ortağınız - Antalya merkezimizin gücüyle",
    officeDesc: "089 Bayern şubesi olarak Ankara'da tam hizmet sunuyoruz. Danışmanlıktan kuruluma kadar tek elden, Antalya merkez uzman ekibimizin desteğiyle.",
    
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
    
    // NLP Benefits Section
    benefitsTitle: "4'ü 1 Arada Sistem Neden Size Uygun",
    benefitsSubtitle: "Hayal edin: Artık yüksek elektrik faturaları yok, soğuk kışlar yok, artan enerji fiyatlarına bağımlılık yok",
    
    benefit1Title: "Finansal Özgürlük",
    benefit1Desc: "Başkaları her yıl enerji için daha fazla öderken, sizin maliyetleriniz neredeyse sıfıra düşüyor. Biriktirdiğiniz para cebinizde kalıyor - sizin için gerçekten önemli olan şeyler için.",
    benefit1Stat: "ca. %60",
    benefit1StatLabel: "daha az enerji maliyeti",
    
    benefit2Title: "Tam Bağımsızlık",
    benefit2Desc: "Dünyada ne olursa olsun evinizde her zaman elektrik, ısıtma ve soğutma olduğunu bilmenin nasıl bir his olduğunu hayal edin. İşte gerçek güvenlik budur.",
    benefit2Stat: "7/24",
    benefit2StatLabel: "enerji tedariki",
    
    benefit3Title: "Gayrimenkul Değer Artışı",
    benefit3Desc: "Her akıllı alıcı bilir: Kendi enerji sistemine sahip bir mülk daha değerlidir. Sadece enerjiye değil - evinizin geleceğine yatırım yapıyorsunuz.",
    benefit3Stat: "+%15",
    benefit3StatLabel: "mülk değeri",
    
    benefit4Title: "Kaygısız Gelecek",
    benefit4Desc: "10 yıl garanti, Alman mühendislik kalitesi, yerel servis. Başkaları endişelenirken, siz hayatın tadını çıkarın - her şeyin çalıştığından emin olarak.",
    benefit4Stat: "10 Yıl",
    benefit4StatLabel: "kapsamlı garanti",
    
    // Why 4-in-1 Section
    why4in1Title: "Neden Ayrı Bileşenler Yerine 4'ü 1 Arada?",
    why4in1Subtitle: "Ankara'nın ekstrem iklimi için akıllı çözüm",
    
    why4in1Point1Title: "Mükemmel Sinerji",
    why4in1Point1Desc: "Samsung ve Vaillant - iki premium marka, mükemmel bir sistem. Güneş paneli elektrik üretir, Vaillant ısı pompası verimli kullanır, Samsung klima konfor sağlar, Samsung depolama her şeyi güvence altına alır. Alman ve Kore mühendisliği bir arada.",
    
    why4in1Point2Title: "Tek Muhatap",
    why4in1Point2Desc: "Farklı kurucular arasında koordinasyon yok. Sorunlarda suç atma yok. Bir ekip, bir sorumluluk, bir çözüm. Bu kadar basit olmalı.",
    
    why4in1Point3Title: "Optimize Edilmiş Maliyetler",
    why4in1Point3Desc: "Ayrı almak demek: 4x ulaşım, 4x kurulum, 4x yönetim. Bizde: Her şey tek elden, optimal uyum, tek fiyat - ve tek tek almaya göre %20'ye kadar tasarruf.",
    
    why4in1Point4Title: "Geleceğe Hazır",
    why4in1Point4Desc: "Sistemimiz ihtiyaçlarınızla büyür. Bugün bir villa, yarın belki bir havuz evi eklenebilir? Sorun değil. Altyapı hazır.",
    
    // Ankara Climate Section
    climateTitle: "Ankara'nın İklimi - Sizin Fırsatınız",
    climateSubtitle: "Ankara'nın karasal iklimi enerji verimliliği için benzersiz fırsatlar sunuyor",
    
    climatePoint1Title: "40°C'ye Kadar Sıcak Yazlar",
    climatePoint1Desc: "Başkaları sıcaktan bunalırken, güneş paneliniz rekor miktarda elektrik üretiyor. Samsung Wind-Free klima fısıltı sessizliğinde ve enerji verimli soğutuyor.",
    
    climatePoint2Title: "-15°C'ye Kadar Soğuk Kışlar",
    climatePoint2Desc: "Ankara kar altındayken, Vaillant ısı pompanız tam güçle çalışıyor - ve geleneksel ısıtmanın maliyetinin sadece bir kısmını harcıyor.",
    
    climatePoint3Title: "260+ Güneşli Gün",
    climatePoint3Desc: "Münih'ten daha fazla güneşli gün, çoğu Alman şehrinden daha fazla potansiyel. 4'ü 1 arada sisteminiz her birini değerlendiriyor.",
    
    // SEO FAQ Section
    faqTitle: "Ankara'da 4'ü 1 Arada Kurulum Hakkında Sık Sorulan Sorular",
    
    faq1Q: "Ankara'da 4'ü 1 arada sistem kurulumu ne kadar sürer?",
    faq1A: "Komple kurulum genellikle 3-5 iş günü sürer, mülkünüzün boyutuna bağlı olarak. 200m²'lik standart bir villa için 3 gün öngörüyoruz.",
    
    faq2Q: "Elektrik kesintisinde sistem çalışır mı?",
    faq2A: "Evet! Entegre batarya depolama evinizi 24 saate kadar elektrikle besler. Güneş varken daha da uzun, çünkü güneş paneli üretmeye devam eder.",
    
    faq3Q: "Isı pompası Ankara'nın aşırı soğuğunda nasıl davranır?",
    faq3A: "Vaillant aroTHERM özellikle soğuk iklimler için geliştirilmiştir ve -25°C'ye kadar verimli çalışır. Ankara'nın ortalama kış sıcaklıkları -5°C ile -10°C arasında olduğunda tam performans verir.",
    
    faq4Q: "Ankara'daki villam için 4'ü 1 arada sistem ne kadar tutar?",
    faq4A: "Maliyetler yaşam alanınıza ve enerji ihtiyacınıza bağlıdır. 200m²'lik bir villa için ca. 35.000-50.000 EUR hesaplayın. Kesin maliyetleri ücretsiz yerinde danışmanlıkta belirliyoruz.",
    
    faq5Q: "Türkiye'de teşvik imkanları var mı?",
    faq5A: "Evet, Türk hükümeti yenilenebilir enerjiyi destekliyor. Ayrıca kendi üretiminiz için indirimli elektrik tarifelerinden yararlanırsınız. Tüm mevcut teşvik imkanları hakkında size danışmanlık yapmaktan memnuniyet duyarız.",
  },
  en: {
    badgeType: "Branch Office",
    badge: "4-in-1 Installation Ankara",
    title: "Energy System Installation",
    titleHighlight: "in Ankara",
    subtitle: "089 Bayern Ankara Branch - German quality in Turkey's capital. With the strength of our Antalya headquarters, we install your complete 4-in-1 energy system in Ankara and surroundings.",
    ctaButton: "Free Consultation",
    callButton: "Call Now",
    
    officeTitle: "089 Bayern Ankara Branch",
    officeSubtitle: "Your local partner for Central Anatolia - with the strength of our Antalya headquarters",
    officeDesc: "As a branch of 089 Bayern, we offer complete on-site service in Ankara. From consultation to installation - everything from one source, supported by our expert team from Antalya headquarters.",
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Why a 4-in-1 System is Right for You",
    benefitsSubtitle: "Imagine: No more high electricity bills, no more cold winters, no more dependence on rising energy prices",
    
    benefit1Title: "Financial Freedom",
    benefit1Desc: "While others pay more for energy every year, your costs drop to nearly zero. The money you save stays in your pocket - for what truly matters to you.",
    benefit1Stat: "approx. 60%",
    benefit1StatLabel: "less energy costs",
    
    benefit2Title: "Complete Independence",
    benefit2Desc: "Imagine knowing that no matter what happens in the world, your home always has power, heating, and cooling. That's real security.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "energy supply",
    
    benefit3Title: "Property Value Increase",
    benefit3Desc: "Every smart buyer knows: A property with its own energy system is worth more. You're not just investing in energy - you're investing in your home's future.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "property value",
    
    benefit4Title: "Worry-Free Future",
    benefit4Desc: "10-year warranty, German engineering quality, local service. While others worry, you simply enjoy life - with the certainty that everything works.",
    benefit4Stat: "10 Years",
    benefit4StatLabel: "comprehensive warranty",
    
    // Why 4-in-1 Section
    why4in1Title: "Why 4-in-1 Instead of Separate Components?",
    why4in1Subtitle: "The intelligent solution for Ankara's extreme climate",
    
    why4in1Point1Title: "Perfect Synergy",
    why4in1Point1Desc: "Samsung and Vaillant - two premium brands, one perfect system. The solar panels produce electricity, the Vaillant heat pump uses it efficiently, the Samsung AC provides comfort, and the Samsung storage secures everything. German and Korean engineering united.",
    
    why4in1Point2Title: "One Point of Contact",
    why4in1Point2Desc: "No coordination between different installers. No blame games when problems arise. One team, one responsibility, one solution. It should be that simple.",
    
    why4in1Point3Title: "Optimized Costs",
    why4in1Point3Desc: "Buying separately means: 4x travel, 4x installation, 4x management. With us: Everything from one source, optimally coordinated, one price - and you save up to 20% compared to individual purchases.",
    
    why4in1Point4Title: "Future-Proof",
    why4in1Point4Desc: "Our system grows with your needs. A villa today, maybe a pool house tomorrow? No problem. The infrastructure is ready.",
    
    // Ankara Climate Section
    climateTitle: "Ankara's Climate - Your Opportunity",
    climateSubtitle: "Ankara's continental climate offers unique opportunities for energy efficiency",
    
    climatePoint1Title: "Hot Summers up to 40°C",
    climatePoint1Desc: "While others suffer from the heat, your solar system produces record amounts of electricity. The Samsung Wind-Free AC cools whisper-quiet and energy-efficiently.",
    
    climatePoint2Title: "Cold Winters down to -15°C",
    climatePoint2Desc: "When Ankara is covered in snow, your Vaillant heat pump works at full power - consuming only a fraction of what conventional heating would cost.",
    
    climatePoint3Title: "260+ Sunny Days",
    climatePoint3Desc: "More sunny days than Munich, more potential than most German cities. Your 4-in-1 system utilizes every single one.",
    
    // SEO FAQ Section
    faqTitle: "Frequently Asked Questions About 4-in-1 Installation in Ankara",
    
    faq1Q: "How long does the installation of a 4-in-1 system in Ankara take?",
    faq1A: "The complete installation typically takes 3-5 business days, depending on your property size. For a standard 200m² villa, we estimate 3 days.",
    
    faq2Q: "Does the system work during power outages?",
    faq2A: "Yes! The integrated battery storage supplies your house with power for up to 24 hours. Even longer with sunshine, as the solar system continues to produce.",
    
    faq3Q: "How does the heat pump perform in Ankara's extreme cold?",
    faq3A: "The Vaillant aroTHERM is specifically developed for cold climates and works efficiently down to -25°C. At Ankara's average winter temperatures of -5°C to -10°C, it delivers full performance.",
    
    faq4Q: "What does a 4-in-1 system cost for my villa in Ankara?",
    faq4A: "Costs depend on your living area and energy needs. For a 200m² villa, expect approx. 35,000-50,000 EUR. We determine exact costs in a free on-site consultation.",
    
    faq5Q: "Are there subsidies available in Turkey?",
    faq5A: "Yes, the Turkish government supports renewable energy. Additionally, you benefit from reduced electricity tariffs for self-production. We're happy to advise you on all available funding opportunities.",
  },
  ru: {
    badgeType: "Филиал",
    badge: "Установка 4-в-1 Анкара",
    title: "Установка энергосистемы",
    titleHighlight: "в Анкаре",
    subtitle: "Филиал 089 Bayern Анкара - Немецкое качество в столице Турции. С поддержкой нашего главного офиса в Анталии устанавливаем вашу полную энергосистему 4-в-1 в Анкаре и окрестностях.",
    ctaButton: "Бесплатная консультация",
    callButton: "Позвонить",
    
    officeTitle: "Филиал 089 Bayern Анкара",
    officeSubtitle: "Ваш местный партнер для Центральной Анатолии - с силой нашего главного офиса в Анталии",
    officeDesc: "Как филиал 089 Bayern, мы предлагаем полный сервис на месте в Анкаре. От консультации до установки - всё из одних рук, при поддержке нашей экспертной команды из главного офиса в Анталии.",
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Почему система 4-в-1 подходит именно вам",
    benefitsSubtitle: "Представьте: Больше никаких высоких счетов за электричество, никаких холодных зим, никакой зависимости от растущих цен на энергию",
    
    benefit1Title: "Финансовая свобода",
    benefit1Desc: "Пока другие каждый год платят за энергию всё больше, ваши расходы падают почти до нуля. Сэкономленные деньги остаются в вашем кармане - для того, что действительно важно для вас.",
    benefit1Stat: "прим. 60%",
    benefit1StatLabel: "меньше расходов на энергию",
    
    benefit2Title: "Полная независимость",
    benefit2Desc: "Представьте, как это - знать, что бы ни случилось в мире, в вашем доме всегда есть электричество, тепло и охлаждение. Это настоящая безопасность.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "энергоснабжение",
    
    benefit3Title: "Рост стоимости недвижимости",
    benefit3Desc: "Каждый умный покупатель знает: недвижимость с собственной энергосистемой стоит дороже. Вы инвестируете не только в энергию - вы инвестируете в будущее вашего дома.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "стоимость недвижимости",
    
    benefit4Title: "Беззаботное будущее",
    benefit4Desc: "10 лет гарантии, немецкое инженерное качество, местный сервис. Пока другие беспокоятся, вы просто наслаждаетесь жизнью - с уверенностью, что всё работает.",
    benefit4Stat: "10 лет",
    benefit4StatLabel: "полная гарантия",
    
    // Why 4-in-1 Section
    why4in1Title: "Почему 4-в-1 вместо отдельных компонентов?",
    why4in1Subtitle: "Умное решение для экстремального климата Анкары",
    
    why4in1Point1Title: "Идеальная синергия",
    why4in1Point1Desc: "Samsung и Vaillant - два премиум-бренда, одна идеальная система. Солнечные панели производят электричество, тепловой насос Vaillant эффективно его использует, кондиционер Samsung обеспечивает комфорт, а накопитель Samsung всё страхует. Немецкая и корейская инженерия вместе.",
    
    why4in1Point2Title: "Один контакт",
    why4in1Point2Desc: "Никакой координации между разными установщиками. Никаких перекладываний вины при проблемах. Одна команда, одна ответственность, одно решение. Так и должно быть.",
    
    why4in1Point3Title: "Оптимизированные расходы",
    why4in1Point3Desc: "Покупать отдельно значит: 4x выезд, 4x установка, 4x управление. У нас: Всё из одних рук, оптимально согласовано, одна цена - и вы экономите до 20% по сравнению с покупкой по отдельности.",
    
    why4in1Point4Title: "Готовность к будущему",
    why4in1Point4Desc: "Наша система растёт вместе с вашими потребностями. Сегодня вилла, завтра может быть домик у бассейна? Без проблем. Инфраструктура готова.",
    
    // Ankara Climate Section
    climateTitle: "Климат Анкары - ваша возможность",
    climateSubtitle: "Континентальный климат Анкары предлагает уникальные возможности для энергоэффективности",
    
    climatePoint1Title: "Жаркое лето до 40°C",
    climatePoint1Desc: "Пока другие страдают от жары, ваша солнечная система производит рекордное количество электричества. Кондиционер Samsung Wind-Free охлаждает бесшумно и энергоэффективно.",
    
    climatePoint2Title: "Холодные зимы до -15°C",
    climatePoint2Desc: "Когда Анкара под снегом, ваш тепловой насос Vaillant работает на полную мощность - потребляя лишь малую часть того, что стоило бы обычное отопление.",
    
    climatePoint3Title: "260+ солнечных дней",
    climatePoint3Desc: "Больше солнечных дней, чем в Мюнхене, больше потенциала, чем в большинстве немецких городов. Ваша система 4-в-1 использует каждый из них.",
    
    // SEO FAQ Section
    faqTitle: "Часто задаваемые вопросы об установке 4-в-1 в Анкаре",
    
    faq1Q: "Сколько времени занимает установка системы 4-в-1 в Анкаре?",
    faq1A: "Полная установка обычно занимает 3-5 рабочих дней, в зависимости от размера вашей недвижимости. Для стандартной виллы 200м² мы рассчитываем на 3 дня.",
    
    faq2Q: "Работает ли система при отключении электричества?",
    faq2A: "Да! Встроенный аккумулятор обеспечивает ваш дом электричеством до 24 часов. При солнечной погоде ещё дольше, так как солнечная система продолжает производить.",
    
    faq3Q: "Как ведёт себя тепловой насос в сильные морозы Анкары?",
    faq3A: "Vaillant aroTHERM специально разработан для холодного климата и эффективно работает до -25°C. При средних зимних температурах Анкары от -5°C до -10°C он выдаёт полную мощность.",
    
    faq4Q: "Сколько стоит система 4-в-1 для моей виллы в Анкаре?",
    faq4A: "Стоимость зависит от вашей жилой площади и потребностей в энергии. Для виллы 200м² рассчитывайте на прим. 35.000-50.000 EUR. Точную стоимость определяем на бесплатной консультации на месте.",
    
    faq5Q: "Есть ли субсидии в Турции?",
    faq5A: "Да, турецкое правительство поддерживает возобновляемую энергию. Кроме того, вы получаете сниженные тарифы на электричество за собственное производство. Мы с радостью проконсультируем вас обо всех доступных возможностях финансирования.",
  },
  uk: {
    badgeType: "Філія",
    badge: "Встановлення 4-в-1 Анкара",
    title: "Встановлення енергосистеми",
    titleHighlight: "в Анкарі",
    subtitle: "Філія 089 Bayern Анкара - Німецька якість у столиці Туреччини. За підтримки нашого головного офісу в Анталії встановлюємо вашу повну енергосистему 4-в-1 в Анкарі та околицях.",
    ctaButton: "Безкоштовна консультація",
    callButton: "Зателефонувати",
    
    officeTitle: "Філія 089 Bayern Анкара",
    officeSubtitle: "Ваш місцевий партнер для Центральної Анатолії - з силою нашого головного офісу в Анталії",
    officeDesc: "Як філія 089 Bayern, ми пропонуємо повний сервіс на місці в Анкарі. Від консультації до встановлення - все з одних рук, за підтримки нашої експертної команди з головного офісу в Анталії.",
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Чому система 4-в-1 підходить саме вам",
    benefitsSubtitle: "Уявіть: Більше ніяких високих рахунків за електрику, ніяких холодних зим, ніякої залежності від зростаючих цін на енергію",
    
    benefit1Title: "Фінансова свобода",
    benefit1Desc: "Поки інші щороку платять за енергію все більше, ваші витрати падають майже до нуля. Зекономлені гроші залишаються у вашій кишені - для того, що справді важливо для вас.",
    benefit1Stat: "прибл. 60%",
    benefit1StatLabel: "менше витрат на енергію",
    
    benefit2Title: "Повна незалежність",
    benefit2Desc: "Уявіть, як це - знати, що б не сталося у світі, у вашому домі завжди є електрика, тепло і охолодження. Це справжня безпека.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "енергопостачання",
    
    benefit3Title: "Зростання вартості нерухомості",
    benefit3Desc: "Кожен розумний покупець знає: нерухомість з власною енергосистемою коштує дорожче. Ви інвестуєте не лише в енергію - ви інвестуєте в майбутнє вашого дому.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "вартість нерухомості",
    
    benefit4Title: "Безтурботне майбутнє",
    benefit4Desc: "10 років гарантії, німецька інженерна якість, місцевий сервіс. Поки інші турбуються, ви просто насолоджуєтесь життям - з впевненістю, що все працює.",
    benefit4Stat: "10 років",
    benefit4StatLabel: "повна гарантія",
    
    // Why 4-in-1 Section
    why4in1Title: "Чому 4-в-1 замість окремих компонентів?",
    why4in1Subtitle: "Розумне рішення для екстремального клімату Анкари",
    
    why4in1Point1Title: "Ідеальна синергія",
    why4in1Point1Desc: "Samsung та Vaillant - два преміум-бренди, одна ідеальна система. Сонячні панелі виробляють електрику, тепловий насос Vaillant ефективно її використовує, кондиціонер Samsung забезпечує комфорт, а накопичувач Samsung все страхує. Німецька та корейська інженерія разом.",
    
    why4in1Point2Title: "Один контакт",
    why4in1Point2Desc: "Ніякої координації між різними установниками. Ніяких перекладань провини при проблемах. Одна команда, одна відповідальність, одне рішення. Так і має бути.",
    
    why4in1Point3Title: "Оптимізовані витрати",
    why4in1Point3Desc: "Купувати окремо означає: 4x виїзд, 4x встановлення, 4x управління. У нас: Все з одних рук, оптимально узгоджено, одна ціна - і ви економите до 20% порівняно з покупкою окремо.",
    
    why4in1Point4Title: "Готовність до майбутнього",
    why4in1Point4Desc: "Наша система росте разом з вашими потребами. Сьогодні вілла, завтра можливо будиночок біля басейну? Без проблем. Інфраструктура готова.",
    
    // Ankara Climate Section
    climateTitle: "Клімат Анкари - ваша можливість",
    climateSubtitle: "Континентальний клімат Анкари пропонує унікальні можливості для енергоефективності",
    
    climatePoint1Title: "Спекотне літо до 40°C",
    climatePoint1Desc: "Поки інші страждають від спеки, ваша сонячна система виробляє рекордну кількість електрики. Кондиціонер Samsung Wind-Free охолоджує беззвучно та енергоефективно.",
    
    climatePoint2Title: "Холодні зими до -15°C",
    climatePoint2Desc: "Коли Анкара під снігом, ваш тепловий насос Vaillant працює на повну потужність - споживаючи лише малу частину того, що коштувало б звичайне опалення.",
    
    climatePoint3Title: "260+ сонячних днів",
    climatePoint3Desc: "Більше сонячних днів, ніж у Мюнхені, більше потенціалу, ніж у більшості німецьких міст. Ваша система 4-в-1 використовує кожен з них.",
    
    // SEO FAQ Section
    faqTitle: "Часті запитання про встановлення 4-в-1 в Анкарі",
    
    faq1Q: "Скільки часу займає встановлення системи 4-в-1 в Анкарі?",
    faq1A: "Повне встановлення зазвичай займає 3-5 робочих днів, залежно від розміру вашої нерухомості. Для стандартної вілли 200м² ми розраховуємо на 3 дні.",
    
    faq2Q: "Чи працює система при відключенні електрики?",
    faq2A: "Так! Вбудований акумулятор забезпечує ваш дім електрикою до 24 годин. При сонячній погоді ще довше, оскільки сонячна система продовжує виробляти.",
    
    faq3Q: "Як поводиться тепловий насос у сильні морози Анкари?",
    faq3A: "Vaillant aroTHERM спеціально розроблений для холодного клімату і ефективно працює до -25°C. При середніх зимових температурах Анкари від -5°C до -10°C він видає повну потужність.",
    
    faq4Q: "Скільки коштує система 4-в-1 для моєї вілли в Анкарі?",
    faq4A: "Вартість залежить від вашої житлової площі та потреб в енергії. Для вілли 200м² розраховуйте на прибл. 35.000-50.000 EUR. Точну вартість визначаємо на безкоштовній консультації на місці.",
    
    faq5Q: "Чи є субсидії в Туреччині?",
    faq5A: "Так, турецький уряд підтримує відновлювану енергію. Крім того, ви отримуєте знижені тарифи на електрику за власне виробництво. Ми з радістю проконсультуємо вас щодо всіх доступних можливостей фінансування.",
  },
  ar: {
    badgeType: "فرع",
    badge: "تركيب 4 في 1 أنقرة",
    title: "تركيب نظام الطاقة",
    titleHighlight: "في أنقرة",
    subtitle: "فرع 089 Bayern أنقرة - الجودة الألمانية في العاصمة التركية. بدعم من مقرنا الرئيسي في أنطاليا، نقوم بتركيب نظام الطاقة الكامل 4 في 1 في أنقرة والمناطق المحيطة.",
    ctaButton: "استشارة مجانية",
    callButton: "اتصل الآن",
    
    officeTitle: "فرع 089 Bayern أنقرة",
    officeSubtitle: "شريكك المحلي لوسط الأناضول - بقوة مقرنا الرئيسي في أنطاليا",
    officeDesc: "كفرع من 089 Bayern، نقدم خدمة كاملة في الموقع في أنقرة. من الاستشارة إلى التركيب - كل شيء من مصدر واحد، بدعم من فريق خبرائنا في المقر الرئيسي بأنطاليا.",
    
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
    
    // NLP Benefits Section
    benefitsTitle: "لماذا نظام 4 في 1 مناسب لك",
    benefitsSubtitle: "تخيل: لا مزيد من فواتير الكهرباء المرتفعة، لا مزيد من الشتاء البارد، لا مزيد من الاعتماد على أسعار الطاقة المتزايدة",
    
    benefit1Title: "الحرية المالية",
    benefit1Desc: "بينما يدفع الآخرون المزيد مقابل الطاقة كل عام، تنخفض تكاليفك إلى ما يقارب الصفر. الأموال التي توفرها تبقى في جيبك - لما يهمك حقاً.",
    benefit1Stat: "حوالي 60%",
    benefit1StatLabel: "تكاليف طاقة أقل",
    
    benefit2Title: "استقلالية كاملة",
    benefit2Desc: "تخيل أن تعرف أنه مهما حدث في العالم، منزلك دائماً لديه كهرباء وتدفئة وتبريد. هذا هو الأمان الحقيقي.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "إمداد الطاقة",
    
    benefit3Title: "زيادة قيمة العقار",
    benefit3Desc: "كل مشترٍ ذكي يعرف: العقار الذي يملك نظام طاقة خاص به يساوي أكثر. أنت لا تستثمر في الطاقة فقط - أنت تستثمر في مستقبل منزلك.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "قيمة العقار",
    
    benefit4Title: "مستقبل خالٍ من القلق",
    benefit4Desc: "ضمان 10 سنوات، جودة هندسية ألمانية، خدمة محلية. بينما يقلق الآخرون، أنت ببساطة تستمتع بالحياة - مع اليقين بأن كل شيء يعمل.",
    benefit4Stat: "10 سنوات",
    benefit4StatLabel: "ضمان شامل",
    
    // Why 4-in-1 Section
    why4in1Title: "لماذا 4 في 1 بدلاً من مكونات منفصلة؟",
    why4in1Subtitle: "الحل الذكي لمناخ أنقرة القاسي",
    
    why4in1Point1Title: "تآزر مثالي",
    why4in1Point1Desc: "Samsung و Vaillant - علامتان تجاريتان متميزتان، نظام واحد مثالي. الألواح الشمسية تنتج الكهرباء، مضخة Vaillant الحرارية تستخدمها بكفاءة، مكيف Samsung يوفر الراحة، وتخزين Samsung يؤمن كل شيء. الهندسة الألمانية والكورية معاً.",
    
    why4in1Point2Title: "نقطة اتصال واحدة",
    why4in1Point2Desc: "لا تنسيق بين مركبين مختلفين. لا إلقاء اللوم عند المشاكل. فريق واحد، مسؤولية واحدة، حل واحد. هكذا يجب أن يكون الأمر.",
    
    why4in1Point3Title: "تكاليف محسنة",
    why4in1Point3Desc: "الشراء المنفصل يعني: 4x تنقل، 4x تركيب، 4x إدارة. معنا: كل شيء من مصدر واحد، منسق بشكل مثالي، سعر واحد - وتوفر حتى 20% مقارنة بالشراء الفردي.",
    
    why4in1Point4Title: "جاهز للمستقبل",
    why4in1Point4Desc: "نظامنا ينمو مع احتياجاتك. فيلا اليوم، ربما منزل مسبح غداً؟ لا مشكلة. البنية التحتية جاهزة.",
    
    // Ankara Climate Section
    climateTitle: "مناخ أنقرة - فرصتك",
    climateSubtitle: "المناخ القاري لأنقرة يوفر فرصاً فريدة لكفاءة الطاقة",
    
    climatePoint1Title: "صيف حار حتى 40°C",
    climatePoint1Desc: "بينما يعاني الآخرون من الحرارة، نظامك الشمسي ينتج كميات قياسية من الكهرباء. مكيف Samsung Wind-Free يبرد بهدوء وكفاءة في استهلاك الطاقة.",
    
    climatePoint2Title: "شتاء بارد حتى -15°C",
    climatePoint2Desc: "عندما تكون أنقرة مغطاة بالثلج، مضختك الحرارية Vaillant تعمل بكامل طاقتها - مستهلكة جزءاً صغيراً فقط مما يكلفه التدفئة التقليدية.",
    
    climatePoint3Title: "+260 يوم مشمس",
    climatePoint3Desc: "أيام مشمسة أكثر من ميونيخ، إمكانات أكثر من معظم المدن الألمانية. نظامك 4 في 1 يستفيد من كل واحد منها.",
    
    // SEO FAQ Section
    faqTitle: "أسئلة شائعة حول تركيب 4 في 1 في أنقرة",
    
    faq1Q: "كم يستغرق تركيب نظام 4 في 1 في أنقرة؟",
    faq1A: "التركيب الكامل عادة يستغرق 3-5 أيام عمل، حسب حجم عقارك. لفيلا قياسية 200م² نقدر 3 أيام.",
    
    faq2Q: "هل يعمل النظام أثناء انقطاع الكهرباء؟",
    faq2A: "نعم! تخزين البطارية المدمج يزود منزلك بالكهرباء لمدة تصل إلى 24 ساعة. أطول مع أشعة الشمس، حيث يستمر النظام الشمسي في الإنتاج.",
    
    faq3Q: "كيف تتصرف المضخة الحرارية في البرد القارس لأنقرة؟",
    faq3A: "Vaillant aroTHERM مطورة خصيصاً للمناخات الباردة وتعمل بكفاءة حتى -25°C. في درجات حرارة الشتاء المتوسطة لأنقرة من -5°C إلى -10°C، تقدم أداءً كاملاً.",
    
    faq4Q: "كم يكلف نظام 4 في 1 لفيلتي في أنقرة؟",
    faq4A: "التكاليف تعتمد على مساحة معيشتك واحتياجاتك من الطاقة. لفيلا 200م² توقع حوالي 35,000-50,000 يورو. نحدد التكاليف الدقيقة في استشارة مجانية في الموقع.",
    
    faq5Q: "هل هناك إعانات متاحة في تركيا؟",
    faq5A: "نعم، الحكومة التركية تدعم الطاقة المتجددة. بالإضافة إلى ذلك، تستفيد من تعريفات كهرباء مخفضة للإنتاج الذاتي. يسعدنا تقديم المشورة لك حول جميع فرص التمويل المتاحة.",
  },
  hr: {
    badgeType: "Podružnica",
    badge: "4-u-1 Instalacija Ankara",
    title: "Instalacija Energetskog Sustava",
    titleHighlight: "u Ankari",
    subtitle: "Podružnica 089 Bayern Ankara - Njemačka kvaliteta u turskoj prijestolnici. Uz snagu našeg sjedišta u Antalyi, instaliramo vaš kompletan 4-u-1 energetski sustav u Ankari i okolici.",
    ctaButton: "Besplatna Konzultacija",
    callButton: "Nazovite Odmah",
    
    officeTitle: "Podružnica 089 Bayern Ankara",
    officeSubtitle: "Vaš lokalni partner za Središnju Anatoliju - uz snagu našeg sjedišta u Antalyi",
    officeDesc: "Kao podružnica 089 Bayern, nudimo kompletnu uslugu na licu mjesta u Ankari. Od konzultacije do instalacije - sve iz jednog izvora, uz podršku našeg stručnog tima iz sjedišta u Antalyi.",
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Zašto je sustav 4-u-1 pravi za vas",
    benefitsSubtitle: "Zamislite: Nema više visokih računa za struju, hladnih zima, ovisnosti o rastućim cijenama energije",
    
    benefit1Title: "Financijska sloboda",
    benefit1Desc: "Dok drugi svake godine plaćaju više za energiju, vaši troškovi padaju gotovo na nulu. Ušteđeni novac ostaje u vašem džepu - za ono što vam je stvarno važno.",
    benefit1Stat: "cca. 60%",
    benefit1StatLabel: "manje troškova energije",
    
    benefit2Title: "Potpuna neovisnost",
    benefit2Desc: "Zamislite kako je znati da bez obzira što se događa u svijetu, vaš dom uvijek ima struju, grijanje i hlađenje. To je prava sigurnost.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "opskrba energijom",
    
    benefit3Title: "Povećanje vrijednosti nekretnine",
    benefit3Desc: "Svaki pametan kupac zna: nekretnina s vlastitim energetskim sustavom vrijedi više. Ne ulažete samo u energiju - ulažete u budućnost svog doma.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "vrijednost nekretnine",
    
    benefit4Title: "Bezbrižna budućnost",
    benefit4Desc: "10 godina jamstva, njemačka inženjerska kvaliteta, lokalna usluga. Dok se drugi brinu, vi jednostavno uživate u životu - sa sigurnošću da sve funkcionira.",
    benefit4Stat: "10 godina",
    benefit4StatLabel: "sveobuhvatno jamstvo",
    
    // Why 4-in-1 Section
    why4in1Title: "Zašto 4-u-1 umjesto zasebnih komponenti?",
    why4in1Subtitle: "Inteligentno rješenje za ekstremnu klimu Ankare",
    
    why4in1Point1Title: "Savršena sinergija",
    why4in1Point1Desc: "Samsung i Vaillant - dva premium brenda, jedan savršen sustav. Solarni paneli proizvode struju, Vaillant toplinska pumpa je učinkovito koristi, Samsung klima pruža udobnost, a Samsung pohrana sve osigurava. Njemačko i korejsko inženjerstvo zajedno.",
    
    why4in1Point2Title: "Jedna kontakt osoba",
    why4in1Point2Desc: "Nema koordinacije između različitih instalatera. Nema prebacivanja krivnje kod problema. Jedan tim, jedna odgovornost, jedno rješenje. Tako jednostavno bi trebalo biti.",
    
    why4in1Point3Title: "Optimizirani troškovi",
    why4in1Point3Desc: "Kupovina zasebno znači: 4x putovanje, 4x instalacija, 4x upravljanje. Kod nas: Sve iz jednog izvora, optimalno usklađeno, jedna cijena - i štedite do 20% u odnosu na pojedinačnu kupnju.",
    
    why4in1Point4Title: "Spremnost za budućnost",
    why4in1Point4Desc: "Naš sustav raste s vašim potrebama. Vila danas, možda kuća za bazen sutra? Nema problema. Infrastruktura je spremna.",
    
    // Ankara Climate Section
    climateTitle: "Klima Ankare - vaša prilika",
    climateSubtitle: "Kontinentalna klima Ankare nudi jedinstvene mogućnosti za energetsku učinkovitost",
    
    climatePoint1Title: "Vruća ljeta do 40°C",
    climatePoint1Desc: "Dok drugi pate od vrućine, vaš solarni sustav proizvodi rekordne količine struje. Samsung Wind-Free klima hladi tiho kao šapat i energetski učinkovito.",
    
    climatePoint2Title: "Hladne zime do -15°C",
    climatePoint2Desc: "Kada je Ankara pod snijegom, vaša Vaillant toplinska pumpa radi punom snagom - trošeći samo djelić onoga što bi koštalo konvencionalno grijanje.",
    
    climatePoint3Title: "260+ sunčanih dana",
    climatePoint3Desc: "Više sunčanih dana nego München, više potencijala nego većina njemačkih gradova. Vaš sustav 4-u-1 koristi svaki pojedini.",
    
    // SEO FAQ Section
    faqTitle: "Često postavljana pitanja o instalaciji 4-u-1 u Ankari",
    
    faq1Q: "Koliko traje instalacija sustava 4-u-1 u Ankari?",
    faq1A: "Kompletna instalacija obično traje 3-5 radnih dana, ovisno o veličini vaše nekretnine. Za standardnu vilu od 200m² računamo na 3 dana.",
    
    faq2Q: "Radi li sustav tijekom nestanka struje?",
    faq2A: "Da! Integrirana pohrana baterije opskrbljuje vašu kuću strujom do 24 sata. Još dulje uz sunčevo svjetlo, jer solarni sustav nastavlja proizvoditi.",
    
    faq3Q: "Kako se toplinska pumpa ponaša u ekstremnoj hladnoći Ankare?",
    faq3A: "Vaillant aroTHERM posebno je razvijen za hladne klime i učinkovito radi do -25°C. Pri prosječnim zimskim temperaturama Ankare od -5°C do -10°C, daje punu snagu.",
    
    faq4Q: "Koliko košta sustav 4-u-1 za moju vilu u Ankari?",
    faq4A: "Troškovi ovise o vašoj stambenoj površini i potrebama za energijom. Za vilu od 200m² očekujte cca. 35.000-50.000 EUR. Točne troškove određujemo na besplatnoj konzultaciji na lokaciji.",
    
    faq5Q: "Postoje li subvencije u Turskoj?",
    faq5A: "Da, turska vlada podržava obnovljivu energiju. Dodatno, koristite snižene tarife za struju za vlastitu proizvodnju. Rado ćemo vas savjetovati o svim dostupnim mogućnostima financiranja.",
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
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30">
              <Building2 className="w-3 h-3 mr-1" />
              {c.badgeType}
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              <MapPin className="w-3 h-3 mr-1" />
              {c.badge}
            </Badge>
          </div>
          
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

      {/* Office Info Section */}
      <section className="py-16" data-testid="section-office-info">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              {c.badgeType}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.officeTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{c.officeSubtitle}</p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-lg leading-relaxed">{c.officeDesc}</p>
            </CardContent>
          </Card>
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

      {/* NLP Benefits Section */}
      <section className="py-20 bg-muted/30" data-testid="section-benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{c.benefitsTitle}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {c.benefitsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: c.benefit1Title, desc: c.benefit1Desc, stat: c.benefit1Stat, label: c.benefit1StatLabel, icon: TrendingUp },
              { title: c.benefit2Title, desc: c.benefit2Desc, stat: c.benefit2Stat, label: c.benefit2StatLabel, icon: Shield },
              { title: c.benefit3Title, desc: c.benefit3Desc, stat: c.benefit3Stat, label: c.benefit3StatLabel, icon: Home },
              { title: c.benefit4Title, desc: c.benefit4Desc, stat: c.benefit4Stat, label: c.benefit4StatLabel, icon: Award },
            ].map((benefit, index) => (
              <Card key={index} className="overflow-visible">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{benefit.desc}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">{benefit.stat}</span>
                        <span className="text-sm text-muted-foreground">{benefit.label}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why 4-in-1 Section */}
      <section className="py-20" data-testid="section-why-4in1">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.why4in1Title}</h2>
            <p className="text-lg text-muted-foreground">{c.why4in1Subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: c.why4in1Point1Title, desc: c.why4in1Point1Desc, icon: Zap },
              { title: c.why4in1Point2Title, desc: c.why4in1Point2Desc, icon: Users },
              { title: c.why4in1Point3Title, desc: c.why4in1Point3Desc, icon: Percent },
              { title: c.why4in1Point4Title, desc: c.why4in1Point4Desc, icon: Rocket },
            ].map((point, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-20 bg-muted/30" data-testid="section-climate">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.climateTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.climateSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: c.climatePoint1Title, desc: c.climatePoint1Desc, icon: Thermometer },
              { title: c.climatePoint2Title, desc: c.climatePoint2Desc, icon: Snowflake },
              { title: c.climatePoint3Title, desc: c.climatePoint3Desc, icon: Sun },
            ].map((point, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.faqTitle}</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: c.faq1Q, a: c.faq1A },
              { q: c.faq2Q, a: c.faq2A },
              { q: c.faq3Q, a: c.faq3A },
              { q: c.faq4Q, a: c.faq4A },
              { q: c.faq5Q, a: c.faq5A },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-8">{faq.a}</p>
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
