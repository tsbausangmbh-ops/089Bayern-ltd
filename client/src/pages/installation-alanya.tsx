import { useState } from "react";
import { MapPin, Sun, Flame, Wind, Battery, CheckCircle, ArrowRight, Phone, Star, Shield, Award, Clock, Users, Building2, TrendingUp, Home, Zap, Percent, Rocket, Thermometer, Snowflake, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CrossLinks from "@/components/CrossLinks";
import TrustCallToAction from "@/components/TrustCallToAction";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { LinkedText } from "@/components/LinkedText";
import heroImage from "@assets/images/webp/hero-alanya.webp";
import teamWorkImage from "@assets/images/webp/installation-team-work.webp";
import deliveryImage from "@assets/images/webp/alanya-delivery.webp";

const content = {
  de: {
    badgeType: "Niederlassung",
    badge: "4-in-1 Installation Alanya",
    title: "Energiesystem-Installation",
    titleHighlight: "in Alanya",
    subtitle: "089 Bayern Niederlassung Alanya - Deutsche Qualität direkt vor Ort. Wir installieren Ihr komplettes 4-in-1 Energiesystem in Alanya und Umgebung mit Service aus unserer Zentrale in Antalya.",
    ctaButton: "Kostenlose Beratung",
    callButton: "Jetzt anrufen",
    
    officeTitle: "089 Bayern Niederlassung Alanya",
    officeSubtitle: "Ihr lokaler Partner für Energiesysteme - mit der Stärke unserer Antalya Zentrale",
    officeDesc: "Als Niederlassung von 089 Bayern bieten wir Ihnen den kompletten Service vor Ort in Alanya. Von der Beratung bis zur Installation - alles aus einer Hand, unterstützt durch unser Expertenteam aus der Zentrale Antalya.",
    
    whyAlanyaTitle: "Warum Alanya perfekt für Solarenergie ist",
    whyAlanyaSubtitle: "290+ Sonnentage und mediterranes Klima machen Alanya ideal",
    sunDays: "290+",
    sunDaysLabel: "Sonnentage/Jahr",
    avgTemp: "34°C",
    avgTempLabel: "Sommer-Durchschnitt",
    savings: "65%",
    savingsLabel: "Ersparnis möglich",
    
    systemsTitle: "Unsere 4-in-1 Systeme",
    systemsSubtitle: "Samsung und Vaillant - Premium-Marken für Ihr Zuhause",
    
    solarTitle: "Solaranlage",
    solarDesc: "Hochleistungs-Photovoltaik mit bis zu 22% Wirkungsgrad. Perfekt für das sonnige Mittelmeerklima.",
    solarFeatures: ["Tier-1 Module", "25 Jahre Garantie", "Eigenproduktion"],
    
    heatPumpTitle: "Vaillant Wärmepumpe",
    heatPumpDesc: "Premium-Wärmepumpen von Vaillant für effizientes Heizen und Kühlen. Made in Germany.",
    heatPumpFeatures: ["COP bis 5.0", "Flüsterbetrieb", "Smart-Home ready"],
    
    climaTitle: "Samsung Klimaanlage",
    climaDesc: "Inverter-Technologie für maximale Effizienz. Kühlt im Sommer, wärmt im Winter.",
    climaFeatures: ["A+++ Effizienz", "Wind-Free Technologie", "WLAN-Steuerung"],
    
    batteryTitle: "Samsung Batteriespeicher",
    batteryDesc: "Speichern Sie überschüssige Energie für die Nacht oder Stromausfälle.",
    batteryFeatures: ["LiFePO4 Technologie", "10+ Jahre Lebensdauer", "Notstromfähig"],

    benefitsTitle: "Ihre Vorteile mit 089 Bayern Alanya",
    benefitsSubtitle: "Deutsche Ingenieurskunst kombiniert mit lokalem Service - direkt vor Ihrer Haustür",
    benefit1Title: "Lokale Präsenz",
    benefit1Desc: "Unser Team in Alanya ist schnell bei Ihnen. Kurze Wege, schneller Service, persönliche Betreuung.",
    benefit1Stat: "< 30 Min",
    benefit1StatLabel: "Anfahrtszeit",
    benefit2Title: "Zentrale Stärke",
    benefit2Desc: "Unterstützt durch unsere Zentrale in Antalya mit allen Ressourcen und Expertise für komplexe Projekte.",
    benefit2Stat: "500+",
    benefit2StatLabel: "Installationen",
    benefit3Title: "Premium-Komponenten",
    benefit3Desc: "Samsung und Vaillant - deutsche und koreanische Ingenieurskunst vereint in Ihrem Energiesystem.",
    benefit3Stat: "10 Jahre",
    benefit3StatLabel: "Garantie",
    benefit4Title: "Rundum-Service",
    benefit4Desc: "Von der Beratung über Installation bis zur Wartung - alles aus einer Hand.",
    benefit4Stat: "24/7",
    benefit4StatLabel: "Support",

    why4in1Title: "Warum 4-in-1 statt Einzelkomponenten?",
    why4in1Subtitle: "Die intelligente Lösung für Alanyas mediterranes Klima",
    why4in1Point1Title: "Perfekte Synergie",
    why4in1Point1Desc: "Samsung und Vaillant - zwei Premium-Marken, ein perfektes System. Die Solaranlage produziert Strom, die Vaillant Wärmepumpe nutzt ihn effizient, die Samsung Klimaanlage sorgt für Komfort, und der Samsung Speicher sichert alles ab. Deutsche und koreanische Ingenieurskunst vereint.",
    why4in1Point2Title: "Ein Ansprechpartner",
    why4in1Point2Desc: "Keine Koordination zwischen verschiedenen Installateuren. Keine Schuldzuweisungen bei Problemen. Ein Team, eine Verantwortung, eine Lösung.",
    why4in1Point3Title: "Optimierte Kosten",
    why4in1Point3Desc: "Bis zu 20% günstiger als Einzelkauf. Gebündelte Installation spart Zeit und Geld.",
    why4in1Point4Title: "Zukunftssicher",
    why4in1Point4Desc: "Ihr System wächst mit Ihren Bedürfnissen. Erweiterbar und updatefähig.",

    climateTitle: "Alanyas Klima - Ihr Vorteil",
    climateSubtitle: "Das mediterrane Klima macht Alanya zum perfekten Standort für Ihr Energiesystem",
    climatePoint1Title: "Mediterranes Paradies",
    climatePoint1Desc: "Milde Winter und heiße Sommer. Die Wärmepumpe arbeitet ganzjährig effizient, die Klimaanlage sorgt für angenehme Temperaturen.",
    climatePoint2Title: "Minimaler Heizbedarf",
    climatePoint2Desc: "Selten unter 10°C im Winter. Ihre Wärmepumpe arbeitet im optimalen Bereich mit maximalem COP.",
    climatePoint3Title: "Maximale Sonnenernte",
    climatePoint3Desc: "290+ Sonnentage bedeuten ca. 65% Ihrer Energie kommt kostenlos von der Sonne.",

    faqTitle: "Häufige Fragen zur Installation in Alanya",
    faq1Q: "Wie lange dauert die Installation eines 4-in-1 Systems?",
    faq1A: "Eine typische Installation dauert 2-4 Tage, abhängig von der Systemgröße und den örtlichen Gegebenheiten.",
    faq2Q: "Funktioniert das System auch bei Stromausfall?",
    faq2A: "Ja! Mit unserem Batteriespeicher haben Sie Notstromversorgung für die wichtigsten Geräte.",
    faq3Q: "Wie ist der Service organisiert?",
    faq3A: "Unser lokales Team in Alanya ist für Sie da. Bei komplexen Fragen unterstützt unsere Zentrale in Antalya.",
    faq4Q: "Was kostet ein 4-in-1 System für eine Villa?",
    faq4A: "Für eine 200m² Villa rechnen Sie mit ca. 35.000-50.000 EUR (alle Preise ca., ohne Gewähr).",
    faq5Q: "Gibt es Fördermöglichkeiten in der Türkei?",
    faq5A: "Ja, es gibt verschiedene Förderprogramme. Wir beraten Sie gerne zu aktuellen Möglichkeiten.",
    
    processTitle: "Unser Installations-Prozess",
    processSubtitle: "Von der ersten Beratung bis zur fertigen Anlage - wir begleiten Sie",
    step1Title: "Kostenlose Beratung",
    step1Desc: "Unser Alanya-Team analysiert Ihren Bedarf vor Ort.",
    step2Title: "Planung & Design",
    step2Desc: "Unsere Ingenieure planen nach deutschen DIN-Standards.",
    step3Title: "Installation",
    step3Desc: "Professionelle Montage durch unser geschultes Team.",
    step4Title: "Inbetriebnahme",
    step4Desc: "Wir nehmen die Anlage in Betrieb und schulen Sie.",
    
    areasTitle: "Unsere Einsatzgebiete von Alanya aus",
    areasSubtitle: "Alanya und Umgebung - ca. 30 km Radius",
    areas: ["Alanya Zentrum", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Kargıcak", "Cikcilli", "Bektas", "Demirtas", "Payallar", "Türkler", "Avsallar", "Okurcalar", "Konaklı", "Incekum", "Kızılot"],
    
    testimonialsTitle: "Was unsere Kunden in Alanya sagen",
    testimonial1: "Schneller Service, kompetente Beratung. Die Niederlassung in Alanya macht den Unterschied!",
    testimonial1Author: "Familie Weber, Mahmutlar",
    testimonial2: "Deutsche Qualität mit türkischer Gastfreundschaft. Absolute Empfehlung!",
    testimonial2Author: "Herr Bauer, Alanya",
    
    ctaTitle: "Bereit für Ihre Energieunabhängigkeit?",
    ctaSubtitle: "Kontaktieren Sie unsere Niederlassung Alanya für eine kostenlose Beratung",
    
    statsInstallations: "150+",
    statsInstallationsLabel: "Installationen Alanya",
    statsYears: "5+",
    statsYearsLabel: "Jahre vor Ort",
    statsWarranty: "10",
    statsWarrantyLabel: "Jahre Garantie",
  },
  tr: {
    badgeType: "Şube",
    badge: "4'ü 1 Arada Kurulum Alanya",
    title: "Enerji Sistemi Kurulumu",
    titleHighlight: "Alanya'da",
    subtitle: "089 Bayern Alanya Şubesi - Alman kalitesi yerinde. Antalya merkezimizin desteğiyle Alanya ve çevresinde komple 4'ü 1 arada enerji sisteminizi kuruyoruz.",
    ctaButton: "Ücretsiz Danışmanlık",
    callButton: "Hemen Arayın",
    
    officeTitle: "089 Bayern Alanya Şubesi",
    officeSubtitle: "Enerji sistemleri için yerel ortağınız - Antalya merkezimizin gücüyle",
    officeDesc: "089 Bayern şubesi olarak Alanya'da tam hizmet sunuyoruz. Danışmanlıktan kuruluma kadar tek elden, Antalya merkez uzman ekibimizin desteğiyle.",
    
    whyAlanyaTitle: "Alanya Neden Güneş Enerjisi İçin Mükemmel",
    whyAlanyaSubtitle: "290+ güneşli gün ve Akdeniz iklimi Alanya'yı ideal yapıyor",
    sunDays: "290+",
    sunDaysLabel: "Güneşli Gün/Yıl",
    avgTemp: "34°C",
    avgTempLabel: "Yaz Ortalaması",
    savings: "%65",
    savingsLabel: "Tasarruf Mümkün",
    
    systemsTitle: "4'ü 1 Arada Sistemlerimiz",
    systemsSubtitle: "Samsung ve Vaillant - Eviniz için premium markalar",
    
    solarTitle: "Güneş Paneli",
    solarDesc: "%22'ye kadar verimlilik ile yüksek performanslı fotovoltaik.",
    solarFeatures: ["Tier-1 Modüller", "25 Yıl Garanti", "Kendi Üretiminiz"],
    
    heatPumpTitle: "Vaillant Isı Pompası",
    heatPumpDesc: "Verimli ısıtma ve soğutma için Vaillant premium ısı pompaları. Made in Germany.",
    heatPumpFeatures: ["COP 5.0'a kadar", "Sessiz Çalışma", "Akıllı Ev Uyumlu"],
    
    climaTitle: "Samsung Klima",
    climaDesc: "Maksimum verimlilik için inverter teknolojisi.",
    climaFeatures: ["A+++ Verimlilik", "Wind-Free Teknoloji", "WiFi Kontrol"],
    
    batteryTitle: "Samsung Batarya Depolama",
    batteryDesc: "Fazla enerjiyi gece veya elektrik kesintileri için depolayın.",
    batteryFeatures: ["LiFePO4 Teknoloji", "10+ Yıl Ömür", "Kesintisiz Güç"],

    benefitsTitle: "089 Bayern Alanya'nın Avantajları",
    benefitsSubtitle: "Alman mühendisliği yerel hizmetle buluşuyor - kapınızın önünde",
    benefit1Title: "Yerel Varlık",
    benefit1Desc: "Alanya ekibimiz hızla yanınızda. Kısa mesafe, hızlı servis, kişisel ilgi.",
    benefit1Stat: "< 30 Dk",
    benefit1StatLabel: "Varış Süresi",
    benefit2Title: "Merkez Gücü",
    benefit2Desc: "Antalya merkezimizin tüm kaynak ve uzmanlığıyla destekleniyor.",
    benefit2Stat: "500+",
    benefit2StatLabel: "Kurulum",
    benefit3Title: "Premium Bileşenler",
    benefit3Desc: "Samsung ve Vaillant - Alman ve Kore mühendisliği enerji sisteminizde birleşiyor.",
    benefit3Stat: "10 Yıl",
    benefit3StatLabel: "Garanti",
    benefit4Title: "Tam Hizmet",
    benefit4Desc: "Danışmanlıktan kuruluma, bakıma kadar tek elden her şey.",
    benefit4Stat: "7/24",
    benefit4StatLabel: "Destek",

    why4in1Title: "Neden Ayrı Bileşenler Yerine 4'ü 1 Arada?",
    why4in1Subtitle: "Alanya'nın Akdeniz iklimi için akıllı çözüm",
    why4in1Point1Title: "Mükemmel Sinerji",
    why4in1Point1Desc: "Samsung ve Vaillant - iki premium marka, mükemmel bir sistem. Alman ve Kore mühendisliği bir arada.",
    why4in1Point2Title: "Tek Muhatap",
    why4in1Point2Desc: "Farklı kurucular arasında koordinasyon yok. Bir ekip, bir sorumluluk, bir çözüm.",
    why4in1Point3Title: "Optimize Edilmiş Maliyetler",
    why4in1Point3Desc: "Tek tek satın almaya göre %20'ye kadar daha uygun. Toplu kurulum zaman ve para tasarrufu sağlar.",
    why4in1Point4Title: "Geleceğe Hazır",
    why4in1Point4Desc: "Sisteminiz ihtiyaçlarınızla büyür. Genişletilebilir ve güncellenebilir.",

    climateTitle: "Alanya'nın İklimi - Avantajınız",
    climateSubtitle: "Akdeniz iklimi Alanya'yı enerji sisteminiz için mükemmel yapıyor",
    climatePoint1Title: "Akdeniz Cenneti",
    climatePoint1Desc: "Ilıman kışlar ve sıcak yazlar. Isı pompası yıl boyu verimli çalışır.",
    climatePoint2Title: "Minimum Isıtma İhtiyacı",
    climatePoint2Desc: "Kışın nadiren 10°C'nin altına düşer. Isı pompanız maksimum COP ile çalışır.",
    climatePoint3Title: "Maksimum Güneş Hasadı",
    climatePoint3Desc: "290+ güneşli gün, enerjinizin yaklaşık %65'i güneşten ücretsiz gelir.",

    faqTitle: "Alanya'da Kurulum Hakkında Sık Sorulan Sorular",
    faq1Q: "4'ü 1 arada sistem kurulumu ne kadar sürer?",
    faq1A: "Tipik kurulum, sistem boyutuna göre 2-4 gün sürer.",
    faq2Q: "Elektrik kesintisinde sistem çalışır mı?",
    faq2A: "Evet! Batarya depolamamızla önemli cihazlarınız için kesintisiz güç.",
    faq3Q: "Servis nasıl organize ediliyor?",
    faq3A: "Alanya'daki yerel ekibimiz sizin için burada. Karmaşık sorularda Antalya merkezimiz destekliyor.",
    faq4Q: "Villa için 4'ü 1 arada sistem ne kadar?",
    faq4A: "200m² villa için yaklaşık 35.000-50.000 EUR (tüm fiyatlar yaklaşık, taahhütsüz).",
    faq5Q: "Türkiye'de teşvik imkanları var mı?",
    faq5A: "Evet, çeşitli teşvik programları var. Güncel imkanlar hakkında danışmanlık veriyoruz.",
    
    processTitle: "Kurulum Sürecimiz",
    processSubtitle: "İlk danışmanlıktan bitmiş sisteme kadar yanınızdayız",
    step1Title: "Ücretsiz Danışmanlık",
    step1Desc: "Alanya ekibimiz ihtiyacınızı yerinde analiz eder.",
    step2Title: "Planlama & Tasarım",
    step2Desc: "Mühendislerimiz Alman DIN standartlarına göre planlar.",
    step3Title: "Kurulum",
    step3Desc: "Eğitimli ekibimiz tarafından profesyonel montaj.",
    step4Title: "Devreye Alma",
    step4Desc: "Sistemi devreye alır ve kullanımı öğretiriz.",
    
    areasTitle: "Alanya'dan Hizmet Alanlarımız",
    areasSubtitle: "Alanya ve çevresi - yaklaşık 30 km yarıçap",
    areas: ["Alanya Merkez", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Kargıcak", "Cikcilli", "Bektas", "Demirtas", "Payallar", "Türkler", "Avsallar", "Okurcalar", "Konaklı", "Incekum", "Kızılot"],
    
    testimonialsTitle: "Alanya Müşterilerimiz Ne Diyor",
    testimonial1: "Hızlı servis, yetkin danışmanlık. Alanya şubesi fark yaratıyor!",
    testimonial1Author: "Weber Ailesi, Mahmutlar",
    testimonial2: "Alman kalitesi Türk misafirperverliğiyle. Kesinlikle tavsiye ederim!",
    testimonial2Author: "Bay Bauer, Alanya",
    
    ctaTitle: "Enerji Bağımsızlığınız İçin Hazır mısınız?",
    ctaSubtitle: "Ücretsiz danışmanlık için Alanya şubemize ulaşın",
    
    statsInstallations: "150+",
    statsInstallationsLabel: "Alanya Kurulumu",
    statsYears: "5+",
    statsYearsLabel: "Yıl Yerelde",
    statsWarranty: "10",
    statsWarrantyLabel: "Yıl Garanti",
  },
  en: {
    badgeType: "Branch Office",
    badge: "4-in-1 Installation Alanya",
    title: "Energy System Installation",
    titleHighlight: "in Alanya",
    subtitle: "089 Bayern Alanya Branch - German quality on site. We install your complete 4-in-1 energy system in Alanya and surroundings with support from our Antalya headquarters.",
    ctaButton: "Free Consultation",
    callButton: "Call Now",
    
    officeTitle: "089 Bayern Alanya Branch",
    officeSubtitle: "Your local partner for energy systems - with the strength of our Antalya headquarters",
    officeDesc: "As a branch of 089 Bayern, we offer complete on-site service in Alanya. From consultation to installation - everything from one source, supported by our expert team from Antalya headquarters.",
    
    whyAlanyaTitle: "Why Alanya is Perfect for Solar Energy",
    whyAlanyaSubtitle: "290+ sunny days and Mediterranean climate make Alanya ideal",
    sunDays: "290+",
    sunDaysLabel: "Sunny Days/Year",
    avgTemp: "34°C",
    avgTempLabel: "Summer Average",
    savings: "65%",
    savingsLabel: "Savings Possible",
    
    systemsTitle: "Our 4-in-1 Systems",
    systemsSubtitle: "Samsung and Vaillant - Premium brands for your home",
    
    solarTitle: "Solar System",
    solarDesc: "High-performance photovoltaics with up to 22% efficiency.",
    solarFeatures: ["Tier-1 Modules", "25 Year Warranty", "Own Production"],
    
    heatPumpTitle: "Vaillant Heat Pump",
    heatPumpDesc: "Premium heat pumps from Vaillant for efficient heating and cooling. Made in Germany.",
    heatPumpFeatures: ["COP up to 5.0", "Whisper Quiet", "Smart Home Ready"],
    
    climaTitle: "Samsung Air Conditioning",
    climaDesc: "Inverter technology for maximum efficiency.",
    climaFeatures: ["A+++ Efficiency", "Wind-Free Technology", "WiFi Control"],
    
    batteryTitle: "Samsung Battery Storage",
    batteryDesc: "Store excess energy for night time or power outages.",
    batteryFeatures: ["LiFePO4 Technology", "10+ Year Lifespan", "Backup Power"],

    benefitsTitle: "Your Advantages with 089 Bayern Alanya",
    benefitsSubtitle: "German engineering combined with local service - right at your doorstep",
    benefit1Title: "Local Presence",
    benefit1Desc: "Our Alanya team is quickly with you. Short distances, fast service, personal care.",
    benefit1Stat: "< 30 Min",
    benefit1StatLabel: "Response Time",
    benefit2Title: "Headquarters Strength",
    benefit2Desc: "Supported by our Antalya headquarters with all resources and expertise.",
    benefit2Stat: "500+",
    benefit2StatLabel: "Installations",
    benefit3Title: "Premium Components",
    benefit3Desc: "Samsung and Vaillant - German and Korean engineering united.",
    benefit3Stat: "10 Years",
    benefit3StatLabel: "Warranty",
    benefit4Title: "Full Service",
    benefit4Desc: "From consultation to installation to maintenance - all from one source.",
    benefit4Stat: "24/7",
    benefit4StatLabel: "Support",

    why4in1Title: "Why 4-in-1 Instead of Separate Components?",
    why4in1Subtitle: "The intelligent solution for Alanya's Mediterranean climate",
    why4in1Point1Title: "Perfect Synergy",
    why4in1Point1Desc: "Samsung and Vaillant - two premium brands, one perfect system. German and Korean engineering united.",
    why4in1Point2Title: "One Point of Contact",
    why4in1Point2Desc: "No coordination between different installers. One team, one responsibility, one solution.",
    why4in1Point3Title: "Optimized Costs",
    why4in1Point3Desc: "Up to 20% cheaper than individual purchase. Bundled installation saves time and money.",
    why4in1Point4Title: "Future-Proof",
    why4in1Point4Desc: "Your system grows with your needs. Expandable and upgradeable.",

    climateTitle: "Alanya's Climate - Your Advantage",
    climateSubtitle: "The Mediterranean climate makes Alanya perfect for your energy system",
    climatePoint1Title: "Mediterranean Paradise",
    climatePoint1Desc: "Mild winters and hot summers. The heat pump works efficiently year-round.",
    climatePoint2Title: "Minimal Heating Need",
    climatePoint2Desc: "Rarely below 10°C in winter. Your heat pump operates at maximum COP.",
    climatePoint3Title: "Maximum Solar Harvest",
    climatePoint3Desc: "290+ sunny days means about 65% of your energy comes free from the sun.",

    faqTitle: "Frequently Asked Questions About Installation in Alanya",
    faq1Q: "How long does a 4-in-1 system installation take?",
    faq1A: "A typical installation takes 2-4 days, depending on system size.",
    faq2Q: "Does the system work during power outages?",
    faq2A: "Yes! With our battery storage, you have backup power for essential devices.",
    faq3Q: "How is service organized?",
    faq3A: "Our local team in Alanya is here for you. For complex questions, our Antalya headquarters supports.",
    faq4Q: "What does a 4-in-1 system cost for a villa?",
    faq4A: "For a 200m² villa, expect approximately 35,000-50,000 EUR (all prices approx., without guarantee).",
    faq5Q: "Are there subsidies available in Turkey?",
    faq5A: "Yes, there are various subsidy programs. We're happy to advise on current options.",
    
    processTitle: "Our Installation Process",
    processSubtitle: "From first consultation to finished system - we guide you",
    step1Title: "Free Consultation",
    step1Desc: "Our Alanya team analyzes your needs on site.",
    step2Title: "Planning & Design",
    step2Desc: "Our engineers plan according to German DIN standards.",
    step3Title: "Installation",
    step3Desc: "Professional installation by our trained team.",
    step4Title: "Commissioning",
    step4Desc: "We commission the system and train you.",
    
    areasTitle: "Our Service Areas from Alanya",
    areasSubtitle: "Alanya and surroundings - approx. 30 km radius",
    areas: ["Alanya Center", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Kargıcak", "Cikcilli", "Bektas", "Demirtas", "Payallar", "Türkler", "Avsallar", "Okurcalar", "Konaklı", "Incekum", "Kızılot"],
    
    testimonialsTitle: "What Our Alanya Customers Say",
    testimonial1: "Fast service, competent advice. The Alanya branch makes the difference!",
    testimonial1Author: "Weber Family, Mahmutlar",
    testimonial2: "German quality with Turkish hospitality. Absolute recommendation!",
    testimonial2Author: "Mr. Bauer, Alanya",
    
    ctaTitle: "Ready for Your Energy Independence?",
    ctaSubtitle: "Contact our Alanya branch for a free consultation",
    
    statsInstallations: "150+",
    statsInstallationsLabel: "Alanya Installations",
    statsYears: "5+",
    statsYearsLabel: "Years Local",
    statsWarranty: "10",
    statsWarrantyLabel: "Year Warranty",
  },
  ru: {
    badgeType: "Филиал",
    badge: "Установка 4-в-1 Аланья",
    title: "Установка энергосистемы",
    titleHighlight: "в Аланье",
    subtitle: "Филиал 089 Bayern в Аланье - Немецкое качество на месте. Устанавливаем полную энергосистему 4-в-1 в Аланье при поддержке нашей штаб-квартиры в Анталии.",
    ctaButton: "Бесплатная консультация",
    callButton: "Позвонить",
    
    officeTitle: "Филиал 089 Bayern Аланья",
    officeSubtitle: "Ваш местный партнер - с силой нашей штаб-квартиры в Анталии",
    officeDesc: "Как филиал 089 Bayern, мы предлагаем полный сервис на месте в Аланье.",
    
    whyAlanyaTitle: "Почему Аланья идеальна для солнечной энергии",
    whyAlanyaSubtitle: "290+ солнечных дней делают Аланью идеальным местом",
    sunDays: "290+",
    sunDaysLabel: "Солнечных дней/год",
    avgTemp: "34°C",
    avgTempLabel: "Летняя средняя",
    savings: "65%",
    savingsLabel: "Экономия возможна",
    
    systemsTitle: "Наши системы 4-в-1",
    systemsSubtitle: "Samsung и Vaillant - Премиум-бренды для вашего дома",
    
    solarTitle: "Солнечная система",
    solarDesc: "Высокопроизводительные фотоэлектрические панели с КПД до 22%.",
    solarFeatures: ["Модули Tier-1", "25 лет гарантии", "Собственное производство"],
    
    heatPumpTitle: "Тепловой насос Vaillant",
    heatPumpDesc: "Премиум тепловые насосы Vaillant. Made in Germany.",
    heatPumpFeatures: ["COP до 5.0", "Бесшумная работа", "Smart Home"],
    
    climaTitle: "Кондиционер Samsung",
    climaDesc: "Инверторная технология для максимальной эффективности.",
    climaFeatures: ["Эффективность A+++", "Технология Wind-Free", "WiFi управление"],
    
    batteryTitle: "Накопитель Samsung",
    batteryDesc: "Сохраняйте избыточную энергию на ночь или при отключении.",
    batteryFeatures: ["Технология LiFePO4", "Срок службы 10+ лет", "Резервное питание"],

    benefitsTitle: "Ваши преимущества с 089 Bayern Аланья",
    benefitsSubtitle: "Немецкая инженерия с местным сервисом",
    benefit1Title: "Местное присутствие",
    benefit1Desc: "Наша команда в Аланье быстро у вас.",
    benefit1Stat: "< 30 Мин",
    benefit1StatLabel: "Время отклика",
    benefit2Title: "Сила штаб-квартиры",
    benefit2Desc: "Поддержка нашей штаб-квартиры в Анталии.",
    benefit2Stat: "500+",
    benefit2StatLabel: "Установок",
    benefit3Title: "Премиум компоненты",
    benefit3Desc: "Samsung и Vaillant - немецкая и корейская инженерия.",
    benefit3Stat: "10 лет",
    benefit3StatLabel: "Гарантия",
    benefit4Title: "Полный сервис",
    benefit4Desc: "От консультации до монтажа и обслуживания.",
    benefit4Stat: "24/7",
    benefit4StatLabel: "Поддержка",

    why4in1Title: "Почему 4-в-1 вместо отдельных компонентов?",
    why4in1Subtitle: "Умное решение для средиземноморского климата Аланьи",
    why4in1Point1Title: "Идеальная синергия",
    why4in1Point1Desc: "Samsung и Vaillant - два премиум-бренда, одна идеальная система.",
    why4in1Point2Title: "Один контакт",
    why4in1Point2Desc: "Никакой координации между разными установщиками.",
    why4in1Point3Title: "Оптимизированные затраты",
    why4in1Point3Desc: "До 20% дешевле, чем покупка по отдельности.",
    why4in1Point4Title: "Готовность к будущему",
    why4in1Point4Desc: "Ваша система растёт с вашими потребностями.",

    climateTitle: "Климат Аланьи - Ваше преимущество",
    climateSubtitle: "Средиземноморский климат делает Аланью идеальной",
    climatePoint1Title: "Средиземноморский рай",
    climatePoint1Desc: "Мягкие зимы и жаркое лето.",
    climatePoint2Title: "Минимальная потребность в отоплении",
    climatePoint2Desc: "Редко ниже 10°C зимой.",
    climatePoint3Title: "Максимальный урожай солнца",
    climatePoint3Desc: "290+ солнечных дней - около 65% энергии бесплатно от солнца.",

    faqTitle: "Часто задаваемые вопросы об установке в Аланье",
    faq1Q: "Сколько времени занимает установка системы 4-в-1?",
    faq1A: "Типичная установка занимает 2-4 дня.",
    faq2Q: "Работает ли система при отключении электричества?",
    faq2A: "Да! С нашим накопителем у вас есть резервное питание.",
    faq3Q: "Как организован сервис?",
    faq3A: "Наша местная команда в Аланье для вас.",
    faq4Q: "Сколько стоит система 4-в-1 для виллы?",
    faq4A: "Для виллы 200м² примерно 35 000-50 000 EUR (все цены приблизительные).",
    faq5Q: "Есть ли субсидии в Турции?",
    faq5A: "Да, есть различные программы субсидирования.",
    
    processTitle: "Наш процесс установки",
    processSubtitle: "От первой консультации до готовой системы",
    step1Title: "Бесплатная консультация",
    step1Desc: "Наша команда Аланьи анализирует ваши потребности.",
    step2Title: "Планирование",
    step2Desc: "Наши инженеры планируют по немецким стандартам DIN.",
    step3Title: "Установка",
    step3Desc: "Профессиональный монтаж нашей командой.",
    step4Title: "Ввод в эксплуатацию",
    step4Desc: "Запускаем систему и обучаем вас.",
    
    areasTitle: "Наши зоны обслуживания из Аланьи",
    areasSubtitle: "Аланья и окрестности - радиус около 30 км",
    areas: ["Центр Аланьи", "Махмутлар", "Кестель", "Оба", "Тосмур", "Каргыджак", "Чикджилли", "Бекташ", "Демирташ", "Паяллар", "Тюрклер", "Авсаллар", "Окурджалар", "Конаклы", "Инджекум", "Кызылот"],
    
    testimonialsTitle: "Что говорят наши клиенты в Аланье",
    testimonial1: "Быстрый сервис, компетентная консультация!",
    testimonial1Author: "Семья Вебер, Махмутлар",
    testimonial2: "Немецкое качество с турецким гостеприимством!",
    testimonial2Author: "Г-н Бауэр, Аланья",
    
    ctaTitle: "Готовы к энергонезависимости?",
    ctaSubtitle: "Свяжитесь с нашим филиалом в Аланье",
    
    statsInstallations: "150+",
    statsInstallationsLabel: "Установок Аланья",
    statsYears: "5+",
    statsYearsLabel: "Лет на месте",
    statsWarranty: "10",
    statsWarrantyLabel: "Лет гарантия",
  },
  uk: {
    badgeType: "Філія",
    badge: "Встановлення 4-в-1 Аланья",
    title: "Встановлення енергосистеми",
    titleHighlight: "в Аланії",
    subtitle: "Філія 089 Bayern в Аланії - Німецька якість на місці. Встановлюємо повну енергосистему 4-в-1 в Аланії за підтримки нашого головного офісу в Анталії.",
    ctaButton: "Безкоштовна консультація",
    callButton: "Зателефонувати",
    
    officeTitle: "Філія 089 Bayern Аланья",
    officeSubtitle: "Ваш місцевий партнер - з силою нашого головного офісу в Анталії",
    officeDesc: "Як філія 089 Bayern, ми пропонуємо повний сервіс на місці в Аланії.",
    
    whyAlanyaTitle: "Чому Аланья ідеальна для сонячної енергії",
    whyAlanyaSubtitle: "290+ сонячних днів роблять Аланью ідеальним місцем",
    sunDays: "290+",
    sunDaysLabel: "Сонячних днів/рік",
    avgTemp: "34°C",
    avgTempLabel: "Літня середня",
    savings: "65%",
    savingsLabel: "Економія можлива",
    
    systemsTitle: "Наші системи 4-в-1",
    systemsSubtitle: "Samsung та Vaillant - Преміум-бренди для вашого дому",
    
    solarTitle: "Сонячна система",
    solarDesc: "Високопродуктивні фотоелектричні панелі з ККД до 22%.",
    solarFeatures: ["Модулі Tier-1", "25 років гарантії", "Власне виробництво"],
    
    heatPumpTitle: "Тепловий насос Vaillant",
    heatPumpDesc: "Преміум теплові насоси Vaillant. Made in Germany.",
    heatPumpFeatures: ["COP до 5.0", "Безшумна робота", "Smart Home"],
    
    climaTitle: "Кондиціонер Samsung",
    climaDesc: "Інверторна технологія для максимальної ефективності.",
    climaFeatures: ["Ефективність A+++", "Технологія Wind-Free", "WiFi керування"],
    
    batteryTitle: "Накопичувач Samsung",
    batteryDesc: "Зберігайте надлишкову енергію на ніч або при відключенні.",
    batteryFeatures: ["Технологія LiFePO4", "Термін служби 10+ років", "Резервне живлення"],

    benefitsTitle: "Ваші переваги з 089 Bayern Аланья",
    benefitsSubtitle: "Німецька інженерія з місцевим сервісом",
    benefit1Title: "Місцева присутність",
    benefit1Desc: "Наша команда в Аланії швидко у вас.",
    benefit1Stat: "< 30 Хв",
    benefit1StatLabel: "Час відгуку",
    benefit2Title: "Сила головного офісу",
    benefit2Desc: "Підтримка нашого головного офісу в Анталії.",
    benefit2Stat: "500+",
    benefit2StatLabel: "Встановлень",
    benefit3Title: "Преміум компоненти",
    benefit3Desc: "Samsung та Vaillant - німецька та корейська інженерія.",
    benefit3Stat: "10 років",
    benefit3StatLabel: "Гарантія",
    benefit4Title: "Повний сервіс",
    benefit4Desc: "Від консультації до монтажу та обслуговування.",
    benefit4Stat: "24/7",
    benefit4StatLabel: "Підтримка",

    why4in1Title: "Чому 4-в-1 замість окремих компонентів?",
    why4in1Subtitle: "Розумне рішення для середземноморського клімату Аланії",
    why4in1Point1Title: "Ідеальна синергія",
    why4in1Point1Desc: "Samsung та Vaillant - два преміум-бренди, одна ідеальна система.",
    why4in1Point2Title: "Один контакт",
    why4in1Point2Desc: "Ніякої координації між різними установниками.",
    why4in1Point3Title: "Оптимізовані витрати",
    why4in1Point3Desc: "До 20% дешевше, ніж купівля окремо.",
    why4in1Point4Title: "Готовність до майбутнього",
    why4in1Point4Desc: "Ваша система зростає з вашими потребами.",

    climateTitle: "Клімат Аланії - Ваша перевага",
    climateSubtitle: "Середземноморський клімат робить Аланью ідеальною",
    climatePoint1Title: "Середземноморський рай",
    climatePoint1Desc: "М'які зими та спекотне літо.",
    climatePoint2Title: "Мінімальна потреба в опаленні",
    climatePoint2Desc: "Рідко нижче 10°C взимку.",
    climatePoint3Title: "Максимальний урожай сонця",
    climatePoint3Desc: "290+ сонячних днів - близько 65% енергії безкоштовно від сонця.",

    faqTitle: "Часті питання про встановлення в Аланії",
    faq1Q: "Скільки часу займає встановлення системи 4-в-1?",
    faq1A: "Типове встановлення займає 2-4 дні.",
    faq2Q: "Чи працює система при відключенні електрики?",
    faq2A: "Так! З нашим накопичувачем у вас є резервне живлення.",
    faq3Q: "Як організований сервіс?",
    faq3A: "Наша місцева команда в Аланії для вас.",
    faq4Q: "Скільки коштує система 4-в-1 для вілли?",
    faq4A: "Для вілли 200м² приблизно 35 000-50 000 EUR (всі ціни приблизні).",
    faq5Q: "Чи є субсидії в Туреччині?",
    faq5A: "Так, є різні програми субсидування.",
    
    processTitle: "Наш процес встановлення",
    processSubtitle: "Від першої консультації до готової системи",
    step1Title: "Безкоштовна консультація",
    step1Desc: "Наша команда Аланії аналізує ваші потреби.",
    step2Title: "Планування",
    step2Desc: "Наші інженери планують за німецькими стандартами DIN.",
    step3Title: "Встановлення",
    step3Desc: "Професійний монтаж нашою командою.",
    step4Title: "Введення в експлуатацію",
    step4Desc: "Запускаємо систему і навчаємо вас.",
    
    areasTitle: "Наші зони обслуговування з Аланії",
    areasSubtitle: "Аланья та околиці - радіус близько 30 км",
    areas: ["Центр Аланії", "Махмутлар", "Кестель", "Оба", "Тосмур", "Каргиджак", "Чікджіллі", "Бекташ", "Деміртаж", "Паяллар", "Тюрклер", "Авсаллар", "Окурджалар", "Конакли", "Інджекум", "Кизилот"],
    
    testimonialsTitle: "Що кажуть наші клієнти в Аланії",
    testimonial1: "Швидкий сервіс, компетентна консультація!",
    testimonial1Author: "Сім'я Вебер, Махмутлар",
    testimonial2: "Німецька якість з турецькою гостинністю!",
    testimonial2Author: "Пан Бауер, Аланья",
    
    ctaTitle: "Готові до енергонезалежності?",
    ctaSubtitle: "Зв'яжіться з нашою філією в Аланії",
    
    statsInstallations: "150+",
    statsInstallationsLabel: "Встановлень Аланья",
    statsYears: "5+",
    statsYearsLabel: "Років на місці",
    statsWarranty: "10",
    statsWarrantyLabel: "Років гарантія",
  },
  ar: {
    badgeType: "فرع",
    badge: "تركيب 4 في 1 ألانيا",
    title: "تركيب نظام الطاقة",
    titleHighlight: "في ألانيا",
    subtitle: "فرع 089 Bayern ألانيا - الجودة الألمانية في الموقع. نقوم بتركيب نظام الطاقة 4 في 1 الكامل في ألانيا بدعم من مقرنا الرئيسي في أنطاليا.",
    ctaButton: "استشارة مجانية",
    callButton: "اتصل الآن",
    
    officeTitle: "فرع 089 Bayern ألانيا",
    officeSubtitle: "شريكك المحلي - بقوة مقرنا الرئيسي في أنطاليا",
    officeDesc: "كفرع لـ 089 Bayern، نقدم خدمة كاملة في الموقع في ألانيا.",
    
    whyAlanyaTitle: "لماذا ألانيا مثالية للطاقة الشمسية",
    whyAlanyaSubtitle: "290+ يوم مشمس يجعل ألانيا موقعاً مثالياً",
    sunDays: "+290",
    sunDaysLabel: "يوم مشمس/سنة",
    avgTemp: "34°م",
    avgTempLabel: "متوسط الصيف",
    savings: "%65",
    savingsLabel: "توفير ممكن",
    
    systemsTitle: "أنظمتنا 4 في 1",
    systemsSubtitle: "Samsung و Vaillant - علامات تجارية متميزة لمنزلك",
    
    solarTitle: "النظام الشمسي",
    solarDesc: "خلايا كهروضوئية عالية الأداء بكفاءة تصل إلى 22%.",
    solarFeatures: ["وحدات Tier-1", "ضمان 25 سنة", "إنتاجك الخاص"],
    
    heatPumpTitle: "مضخة حرارية Vaillant",
    heatPumpDesc: "مضخات حرارية متميزة من Vaillant. صنع في ألمانيا.",
    heatPumpFeatures: ["COP حتى 5.0", "تشغيل هادئ", "جاهز للمنزل الذكي"],
    
    climaTitle: "مكيف Samsung",
    climaDesc: "تقنية الإنفرتر لأقصى كفاءة.",
    climaFeatures: ["كفاءة A+++", "تقنية Wind-Free", "تحكم WiFi"],
    
    batteryTitle: "تخزين Samsung",
    batteryDesc: "خزن الطاقة الزائدة لليل أو انقطاع الكهرباء.",
    batteryFeatures: ["تقنية LiFePO4", "عمر 10+ سنوات", "طاقة احتياطية"],

    benefitsTitle: "مزاياك مع 089 Bayern ألانيا",
    benefitsSubtitle: "الهندسة الألمانية مع الخدمة المحلية",
    benefit1Title: "تواجد محلي",
    benefit1Desc: "فريقنا في ألانيا سريع الوصول إليك.",
    benefit1Stat: "< 30 دقيقة",
    benefit1StatLabel: "وقت الاستجابة",
    benefit2Title: "قوة المقر الرئيسي",
    benefit2Desc: "مدعوم من مقرنا الرئيسي في أنطاليا.",
    benefit2Stat: "+500",
    benefit2StatLabel: "تركيب",
    benefit3Title: "مكونات متميزة",
    benefit3Desc: "Samsung و Vaillant - الهندسة الألمانية والكورية.",
    benefit3Stat: "10 سنوات",
    benefit3StatLabel: "ضمان",
    benefit4Title: "خدمة كاملة",
    benefit4Desc: "من الاستشارة إلى التركيب والصيانة.",
    benefit4Stat: "24/7",
    benefit4StatLabel: "دعم",

    why4in1Title: "لماذا 4 في 1 بدلاً من مكونات منفصلة؟",
    why4in1Subtitle: "الحل الذكي لمناخ ألانيا المتوسطي",
    why4in1Point1Title: "تآزر مثالي",
    why4in1Point1Desc: "Samsung و Vaillant - علامتان تجاريتان متميزتان، نظام واحد مثالي.",
    why4in1Point2Title: "نقطة اتصال واحدة",
    why4in1Point2Desc: "لا تنسيق بين مركبين مختلفين.",
    why4in1Point3Title: "تكاليف محسنة",
    why4in1Point3Desc: "أرخص بنسبة تصل إلى 20% من الشراء الفردي.",
    why4in1Point4Title: "جاهز للمستقبل",
    why4in1Point4Desc: "نظامك ينمو مع احتياجاتك.",

    climateTitle: "مناخ ألانيا - ميزتك",
    climateSubtitle: "المناخ المتوسطي يجعل ألانيا مثالية",
    climatePoint1Title: "جنة متوسطية",
    climatePoint1Desc: "شتاء معتدل وصيف حار.",
    climatePoint2Title: "حاجة تدفئة قليلة",
    climatePoint2Desc: "نادراً ما تنخفض عن 10°م في الشتاء.",
    climatePoint3Title: "أقصى حصاد شمسي",
    climatePoint3Desc: "290+ يوم مشمس - حوالي 65% من الطاقة مجاناً من الشمس.",

    faqTitle: "الأسئلة الشائعة حول التركيب في ألانيا",
    faq1Q: "كم يستغرق تركيب نظام 4 في 1؟",
    faq1A: "التركيب النموذجي يستغرق 2-4 أيام.",
    faq2Q: "هل يعمل النظام أثناء انقطاع الكهرباء؟",
    faq2A: "نعم! مع تخزين البطارية لديك طاقة احتياطية.",
    faq3Q: "كيف يتم تنظيم الخدمة؟",
    faq3A: "فريقنا المحلي في ألانيا موجود لك.",
    faq4Q: "كم تكلفة نظام 4 في 1 لفيلا؟",
    faq4A: "لفيلا 200م² حوالي 35,000-50,000 يورو (جميع الأسعار تقريبية).",
    faq5Q: "هل هناك إعانات متاحة في تركيا؟",
    faq5A: "نعم، هناك برامج إعانات مختلفة.",
    
    processTitle: "عملية التركيب لدينا",
    processSubtitle: "من الاستشارة الأولى إلى النظام الجاهز",
    step1Title: "استشارة مجانية",
    step1Desc: "فريق ألانيا يحلل احتياجاتك.",
    step2Title: "التخطيط",
    step2Desc: "مهندسونا يخططون وفق معايير DIN الألمانية.",
    step3Title: "التركيب",
    step3Desc: "تركيب احترافي بواسطة فريقنا.",
    step4Title: "التشغيل",
    step4Desc: "نشغل النظام وندربك.",
    
    areasTitle: "مناطق خدمتنا من ألانيا",
    areasSubtitle: "ألانيا والمحيط - نصف قطر حوالي 30 كم",
    areas: ["وسط ألانيا", "محمودلار", "كستل", "أوبا", "توسمور", "كارغيجاك", "جيكجيللي", "بكتاش", "ديميرتاش", "بايالار", "تورکلر", "أفسالار", "أوكورجالار", "كوناكلي", "إنجيكوم", "كيزيلوت"],
    
    testimonialsTitle: "ماذا يقول عملاؤنا في ألانيا",
    testimonial1: "خدمة سريعة، استشارة كفؤة!",
    testimonial1Author: "عائلة فيبر، محمودلار",
    testimonial2: "جودة ألمانية مع ضيافة تركية!",
    testimonial2Author: "السيد باور، ألانيا",
    
    ctaTitle: "مستعد لاستقلالك في الطاقة؟",
    ctaSubtitle: "تواصل مع فرعنا في ألانيا",
    
    statsInstallations: "+150",
    statsInstallationsLabel: "تركيب ألانيا",
    statsYears: "+5",
    statsYearsLabel: "سنوات محلياً",
    statsWarranty: "10",
    statsWarrantyLabel: "سنوات ضمان",
  },
  hr: {
    badgeType: "Podružnica",
    badge: "4-u-1 Instalacija Alanya",
    title: "Instalacija Energetskog Sustava",
    titleHighlight: "u Alanyi",
    subtitle: "089 Bayern podružnica Alanya - Njemačka kvaliteta na licu mjesta. Instaliramo vaš kompletan 4-u-1 energetski sustav u Alanyi uz podršku našeg sjedišta u Antaliji.",
    ctaButton: "Besplatno Savjetovanje",
    callButton: "Nazovite Odmah",
    
    officeTitle: "089 Bayern Podružnica Alanya",
    officeSubtitle: "Vaš lokalni partner - sa snagom našeg sjedišta u Antaliji",
    officeDesc: "Kao podružnica 089 Bayern, nudimo kompletnu uslugu na licu mjesta u Alanyi.",
    
    whyAlanyaTitle: "Zašto je Alanya Savršena za Solarnu Energiju",
    whyAlanyaSubtitle: "290+ sunčanih dana čini Alanyu idealnom lokacijom",
    sunDays: "290+",
    sunDaysLabel: "Sunčanih Dana/God",
    avgTemp: "34°C",
    avgTempLabel: "Ljetni Prosjek",
    savings: "65%",
    savingsLabel: "Ušteda Moguća",
    
    systemsTitle: "Naši 4-u-1 Sustavi",
    systemsSubtitle: "Samsung i Vaillant - Premium brendovi za vaš dom",
    
    solarTitle: "Solarni Sustav",
    solarDesc: "Visokoučinkovita fotonaponska tehnologija s učinkovitošću do 22%.",
    solarFeatures: ["Tier-1 Moduli", "25 Godina Jamstva", "Vlastita Proizvodnja"],
    
    heatPumpTitle: "Vaillant Toplinska Pumpa",
    heatPumpDesc: "Premium toplinske pumpe od Vaillanta. Made in Germany.",
    heatPumpFeatures: ["COP do 5.0", "Tihi Rad", "Smart Home Spreman"],
    
    climaTitle: "Samsung Klima Uređaj",
    climaDesc: "Inverter tehnologija za maksimalnu učinkovitost.",
    climaFeatures: ["A+++ Učinkovitost", "Wind-Free Tehnologija", "WiFi Kontrola"],
    
    batteryTitle: "Samsung Pohrana",
    batteryDesc: "Pohranite višak energije za noć ili nestanke struje.",
    batteryFeatures: ["LiFePO4 Tehnologija", "10+ Godina Vijeka", "Rezervno Napajanje"],

    benefitsTitle: "Vaše Prednosti s 089 Bayern Alanya",
    benefitsSubtitle: "Njemačko inženjerstvo s lokalnom uslugom",
    benefit1Title: "Lokalna Prisutnost",
    benefit1Desc: "Naš tim u Alanyi brzo je kod vas.",
    benefit1Stat: "< 30 Min",
    benefit1StatLabel: "Vrijeme Odziva",
    benefit2Title: "Snaga Sjedišta",
    benefit2Desc: "Podržano od našeg sjedišta u Antaliji.",
    benefit2Stat: "500+",
    benefit2StatLabel: "Instalacija",
    benefit3Title: "Premium Komponente",
    benefit3Desc: "Samsung i Vaillant - njemačko i korejsko inženjerstvo.",
    benefit3Stat: "10 Godina",
    benefit3StatLabel: "Jamstvo",
    benefit4Title: "Potpuna Usluga",
    benefit4Desc: "Od savjetovanja do instalacije i održavanja.",
    benefit4Stat: "24/7",
    benefit4StatLabel: "Podrška",

    why4in1Title: "Zašto 4-u-1 Umjesto Zasebnih Komponenti?",
    why4in1Subtitle: "Inteligentno rješenje za mediteransku klimu Alanye",
    why4in1Point1Title: "Savršena Sinergija",
    why4in1Point1Desc: "Samsung i Vaillant - dva premium brenda, jedan savršen sustav.",
    why4in1Point2Title: "Jedna Kontakt Osoba",
    why4in1Point2Desc: "Nema koordinacije između različitih instalatera.",
    why4in1Point3Title: "Optimizirani Troškovi",
    why4in1Point3Desc: "Do 20% jeftinije od pojedinačne kupnje.",
    why4in1Point4Title: "Spremno za Budućnost",
    why4in1Point4Desc: "Vaš sustav raste s vašim potrebama.",

    climateTitle: "Klima Alanye - Vaša Prednost",
    climateSubtitle: "Mediteranska klima čini Alanyu savršenom",
    climatePoint1Title: "Mediteranski Raj",
    climatePoint1Desc: "Blage zime i vruća ljeta.",
    climatePoint2Title: "Minimalna Potreba za Grijanjem",
    climatePoint2Desc: "Rijetko ispod 10°C zimi.",
    climatePoint3Title: "Maksimalna Solarna Žetva",
    climatePoint3Desc: "290+ sunčanih dana - oko 65% energije besplatno od sunca.",

    faqTitle: "Česta Pitanja o Instalaciji u Alanyi",
    faq1Q: "Koliko traje instalacija 4-u-1 sustava?",
    faq1A: "Tipična instalacija traje 2-4 dana.",
    faq2Q: "Radi li sustav tijekom nestanka struje?",
    faq2A: "Da! S našom pohranom imate rezervno napajanje.",
    faq3Q: "Kako je organizirana usluga?",
    faq3A: "Naš lokalni tim u Alanyi je tu za vas.",
    faq4Q: "Koliko košta 4-u-1 sustav za vilu?",
    faq4A: "Za vilu od 200m² oko 35.000-50.000 EUR (sve cijene približne).",
    faq5Q: "Postoje li subvencije u Turskoj?",
    faq5A: "Da, postoje različiti programi subvencija.",
    
    processTitle: "Naš Proces Instalacije",
    processSubtitle: "Od prvog savjetovanja do gotovog sustava",
    step1Title: "Besplatno Savjetovanje",
    step1Desc: "Naš Alanya tim analizira vaše potrebe.",
    step2Title: "Planiranje",
    step2Desc: "Naši inženjeri planiraju prema njemačkim DIN standardima.",
    step3Title: "Instalacija",
    step3Desc: "Profesionalna montaža našeg tima.",
    step4Title: "Puštanje u Rad",
    step4Desc: "Pokrećemo sustav i obučavamo vas.",
    
    areasTitle: "Naša Područja Usluge iz Alanye",
    areasSubtitle: "Alanya i okolica - radijus oko 30 km",
    areas: ["Centar Alanye", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Kargıcak", "Cikcilli", "Bektas", "Demirtas", "Payallar", "Türkler", "Avsallar", "Okurcalar", "Konaklı", "Incekum", "Kızılot"],
    
    testimonialsTitle: "Što Kažu Naši Klijenti u Alanyi",
    testimonial1: "Brza usluga, stručno savjetovanje!",
    testimonial1Author: "Obitelj Weber, Mahmutlar",
    testimonial2: "Njemačka kvaliteta s turskim gostoprimstvom!",
    testimonial2Author: "G. Bauer, Alanya",
    
    ctaTitle: "Spremni za Vašu Energetsku Neovisnost?",
    ctaSubtitle: "Kontaktirajte našu podružnicu u Alanyi",
    
    statsInstallations: "150+",
    statsInstallationsLabel: "Instalacija Alanya",
    statsYears: "5+",
    statsYearsLabel: "Godina Lokalno",
    statsWarranty: "10",
    statsWarrantyLabel: "Godina Jamstva",
  },
};

export default function InstallationAlanya() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const c = content[language as keyof typeof content] || content.de;
  const isRTL = language === 'ar';

  const goToContact = () => {
    setIsLeadFormOpen(true);
  };

  const systems = [
    { title: c.solarTitle, desc: c.solarDesc, features: c.solarFeatures, icon: Sun, color: "from-amber-400 to-orange-500" },
    { title: c.heatPumpTitle, desc: c.heatPumpDesc, features: c.heatPumpFeatures, icon: Flame, color: "from-red-400 to-rose-500" },
    { title: c.climaTitle, desc: c.climaDesc, features: c.climaFeatures, icon: Wind, color: "from-blue-400 to-cyan-500" },
    { title: c.batteryTitle, desc: c.batteryDesc, features: c.batteryFeatures, icon: Battery, color: "from-emerald-400 to-green-500" },
  ];

  const steps = [
    { num: "1", title: c.step1Title, desc: c.step1Desc },
    { num: "2", title: c.step2Title, desc: c.step2Desc },
    { num: "3", title: c.step3Title, desc: c.step3Desc },
    { num: "4", title: c.step4Title, desc: c.step4Desc },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead page="installation-alanya" />
      <Header onCtaClick={goToContact} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center pt-16 sm:pt-20" data-testid="section-hero">
        <div className="absolute inset-0">
          <img src={heroImage} alt="089 Bayern güneş paneli Vaillant ısı pompası Samsung klima batarya kurulumu Alanya villası - 4'ü 1 arada premium enerji sistemi %70 tasarruf 300 güneşli gün Akdeniz Türkiye" title="4'ü 1 arada enerji sistemi kurulumu Alanya villa fiyatları 2026 - güneş paneli ısı pompası klima batarya %70 tasarruf" className="w-full h-full object-cover" decoding="async" fetchPriority="high" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Badge variant="secondary" className="bg-amber-500 text-white border-0 text-xs sm:text-sm">
              <Building2 className="w-3 h-3 mr-1" />
              {c.badgeType}
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30 text-xs sm:text-sm">
              <MapPin className="w-3 h-3 mr-1" />
              {c.badge}
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            {c.title}{" "}
            <span className="text-primary">{c.titleHighlight}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-6 sm:mb-8">
            {c.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button size="lg" onClick={goToContact} data-testid="button-hero-cta">
              {c.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-red-400/50 text-white bg-red-500/20 backdrop-blur-sm" asChild data-testid="button-hero-call-tr">
              <a href="tel:+905071832036">
                <Phone className="mr-2 w-4 h-4" />
                TR +90 507 183 2036
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-amber-400/50 text-white bg-black/30 backdrop-blur-sm" asChild data-testid="button-hero-call-de">
              <a href="tel:+491735994699">
                <Phone className="mr-2 w-4 h-4" />
                DE +49 173 5994699
              </a>
            </Button>
            <div className="flex gap-2 sm:gap-3">
              <Button size="lg" variant="outline" className="border-green-400/50 text-white bg-green-500/20 backdrop-blur-sm" onClick={() => window.open("https://wa.me/491735994699", "_blank")} data-testid="button-hero-whatsapp">
                WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400/50 text-white bg-blue-500/20 backdrop-blur-sm" asChild data-testid="button-hero-email">
                <a href="mailto:info@089bayern.com">Email</a>
              </Button>
            </div>
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
      <section className="py-16 bg-primary/5" data-testid="section-office">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              {c.badgeType}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.officeTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{c.officeSubtitle}</p>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">{c.officeDesc}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Alanya Section */}
      <section className="py-16" data-testid="section-why-alanya">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.whyAlanyaTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.whyAlanyaSubtitle}</p>
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
      <section className="py-16 bg-muted/30" data-testid="section-systems">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.systemsTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.systemsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((system, index) => (
              <Card key={index} className="overflow-visible hover-elevate">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${system.color} flex items-center justify-center mb-4`}>
                    <system.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{system.title}</h3>
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
      <section className="py-20" data-testid="section-benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">{c.benefitsTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {c.benefitsSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: c.benefit1Title, desc: c.benefit1Desc, stat: c.benefit1Stat, label: c.benefit1StatLabel, icon: Clock },
              { title: c.benefit2Title, desc: c.benefit2Desc, stat: c.benefit2Stat, label: c.benefit2StatLabel, icon: Building2 },
              { title: c.benefit3Title, desc: c.benefit3Desc, stat: c.benefit3Stat, label: c.benefit3StatLabel, icon: Award },
              { title: c.benefit4Title, desc: c.benefit4Desc, stat: c.benefit4Stat, label: c.benefit4StatLabel, icon: Shield },
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
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{benefit.title}</h3>
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

      {/* Team Work Gallery */}
      <section className="py-8 md:py-10 bg-background" data-testid="section-work-gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={teamWorkImage} 
                alt="089 Bayern kurulum ekibi Alanya villasında güneş paneli ve Vaillant ısı pompası montajı yapıyor profesyonel 4-in-1 enerji sistemi kurulumu Akdeniz sahili" 
                title="Güneş paneli ve ısı pompası montajı Alanya villa fiyatları 2026 - profesyonel 4-in-1 enerji sistemi kurulumu"
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                data-testid="img-team-work"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={deliveryImage} 
                alt="089 Bayern Samsung ve Vaillant premium enerji ekipmanları teslimi Alanya villasına profesyonel lojistik Alman kalitesi ısı pompası klima batarya Türkiye" 
                title="Samsung Vaillant premium enerji ekipmanları teslimi Alanya villa - profesyonel lojistik ısı pompası klima batarya"
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                data-testid="img-delivery"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why 4-in-1 Section */}
      <section className="py-20 bg-muted/30" data-testid="section-why-4in1">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.why4in1Title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.why4in1Subtitle}</p>
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
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{point.title}</h3>
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
      <section className="py-20" data-testid="section-climate">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.climateTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.climateSubtitle}</p>
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
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.faqTitle}</h2>
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
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-8"><LinkedText text={faq.a} language={language} /></p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.processTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.processSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.num}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
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
      <section className="py-16 bg-muted/30" data-testid="section-areas">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.areasTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.areasSubtitle}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.testimonialsTitle}</h2>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-sm sm:text-base md:text-lg opacity-90 mb-8">{c.ctaSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" onClick={goToContact} data-testid="button-cta-calculator">
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

      <TrustCallToAction />
      <CrossLinks currentPage="installation-alanya" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
