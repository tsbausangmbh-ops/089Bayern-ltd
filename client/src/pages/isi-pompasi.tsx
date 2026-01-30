import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Check, ArrowRight, Shield, Clock, Zap, TrendingUp, Leaf, Award, Phone, ChevronDown, ChevronUp, Star, Users, ThumbsUp, Calculator, Thermometer, Home } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CrossLinks from "@/components/CrossLinks";
import TrustCallToAction from "@/components/TrustCallToAction";
import SectionCTA from "@/components/SectionCTA";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { LinkedText } from "@/components/LinkedText";
import heroImage from "@assets/images/optimized/hero-heat-pump.jpg";
import heatpumpDetailImage from "@assets/images/optimized/heatpump-detail.jpg";
import heatpumpConsultationImage from "@assets/images/optimized/heatpump-consultation.jpg";

export default function IsiPompasi() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const goToContact = () => {
    setIsLeadFormOpen(true);
  };

  const content = {
    tr: {
      badge: "Vaillant Isı Pompası Yetkili Bayi",
      heroTitle: "Kış Aylarında",
      heroHighlight: "Doğalgaz Faturasından Kurtulun",
      heroSubtitle: "Kış geldiğinde doğalgaz faturasından mı korkuyorsunuz? Vaillant ısı pompası ile evinizi hem ısıtın hem de soğutun - üstelik %60 daha az enerji harcayarak. Alman teknolojisi, Akdeniz konforunda.",
      ctaButton: "Ücretsiz Tasarruf Hesaplaması",
      ctaSecondary: "Hemen Arayın",
      
      problemTitle: "Bu Durumlar Size Tanıdık mı?",
      problemSubtitle: "Geleneksel ısıtma sistemlerinin getirdiği sorunlar",
      problems: [
        { title: "Korkunç Kış Faturaları", desc: "Kış aylarında doğalgaz faturası 3.000₺'yi geçiyor, yaz-kış elektrik + gaz toplam maliyetiniz sürekli artıyor." },
        { title: "Eski Kazan Sorunları", desc: "Kombininiz ya da kazanınız eskidi, verim düştü, arızalar başladı. Tamirler artık ekonomik değil." },
        { title: "Konfor Yetersizliği", desc: "Yazın klima, kışın kazan - iki ayrı sistem, iki ayrı masraf. Üstelik havuz ısıtması ayrı bir dert." },
        { title: "Çevre ve Gelecek Kaygısı", desc: "Fosil yakıtlara bağımlılık hem cebinizi hem de çevreyi yaralıyor. Daha temiz bir alternatif istiyorsunuz." },
      ],
      
      solutionTitle: "Çözüm: Vaillant Isı Pompası Sistemi",
      solutionSubtitle: "Havadaki enerjiyi kullanarak ısıtma ve soğutma - tek sistemle 4 mevsim konfor",
      
      benefitsTitle: "Isı Pompası Avantajları",
      benefits: [
        { icon: TrendingUp, title: "%60 Enerji Tasarrufu", desc: "Geleneksel sistemlere göre %60 daha az enerji tüketimi. Harcadığınız her 1 kWh elektrik için 3-4 kWh ısı üretir." },
        { icon: Thermometer, title: "4 Mevsim Konfor", desc: "Tek sistem ile hem ısıtma hem soğutma. Yaz ve kış - aynı cihaz her mevsim çalışır." },
        { icon: Home, title: "Havuz Isıtması Dahil", desc: "Villanızın havuzunu da ısıtır. Yılın daha büyük bölümünde havuz keyfi." },
        { icon: Leaf, title: "Sıfır Emisyon", desc: "Fosil yakıt kullanmaz, CO2 salınımı neredeyse sıfır. Çevre dostu yaşam." },
        { icon: Shield, title: "Vaillant Kalitesi", desc: "Almanya'nın 150 yıllık markası. %99 müşteri memnuniyeti ile dünya lideri." },
        { icon: Clock, title: "30+ Yıl Ömür", desc: "Doğru bakımla 30 yılı aşkın sorunsuz çalışma. Kombilerin 2 katı ömür." },
      ],
      
      howItWorksTitle: "Isı Pompası Nasıl Çalışır?",
      howItWorksSubtitle: "Doğanın enerjisini evinize taşıyoruz",
      howItWorksText: "Isı pompası, dışarıdaki havadan (hatta -15°C'de bile!) enerji çeker ve bu enerjiyi yoğunlaştırarak evinizi ısıtır. Yazın ise tersi çalışarak serinletir. Buzdolabınızın prensibiyle aynı - ama çok daha verimli ve büyük ölçekli.",
      steps: [
        { step: "01", title: "Ücretsiz Keşif", desc: "Uzmanlarımız evinizi ziyaret eder, mevcut sisteminizi ve ihtiyaçlarınızı analiz eder." },
        { step: "02", title: "Özel Tasarım", desc: "Evinizin metrekaresine, yalıtımına ve kullanım alışkanlıklarınıza göre ideal sistem belirlenir." },
        { step: "03", title: "Profesyonel Kurulum", desc: "Vaillant sertifikalı ekibimiz kurulumu 2-3 günde tamamlar. Mevcut radyatörlerinizi de kullanabilirsiniz." },
        { step: "04", title: "Tasarruf Başlasın", desc: "İlk kış faturanızda farkı görün. Ortalama müşterimiz yılda 15.000₺+ tasarruf ediyor." },
      ],
      
      trustTitle: "Neden 089 Bayern & Vaillant?",
      trustSubtitle: "Alman mühendisliği, yerel uzmanlık",
      trustPoints: [
        { icon: Award, title: "Vaillant Yetkili Bayi", desc: "Türkiye'nin en deneyimli Vaillant ısı pompası kurulum ekiplerinden biriyiz" },
        { icon: Users, title: "200+ Kurulum", desc: "Akdeniz bölgesinde 200+ başarılı ısı pompası kurulumu" },
        { icon: ThumbsUp, title: "%98 Memnuniyet", desc: "Müşterilerimizin %98'i bizi tavsiye ediyor" },
        { icon: Shield, title: "10 Yıl Garanti", desc: "Vaillant fabrika garantisi + 089 Bayern işçilik garantisi" },
      ],
      
      comparisonTitle: "Isı Pompası vs Geleneksel Sistemler",
      comparisonHeaders: ["Özellik", "Isı Pompası", "Doğalgaz Kombisi"],
      comparisonRows: [
        ["Yıllık Isıtma Maliyeti (200m²)", "~8.000₺", "~20.000₺"],
        ["Soğutma Yapabilir mi?", "Evet", "Hayır"],
        ["Havuz Isıtması", "Evet", "Ek Sistem Gerekli"],
        ["CO2 Salınımı", "Sıfır", "Yüksek"],
        ["Ortalama Ömür", "25-30 Yıl", "12-15 Yıl"],
        ["Bakım Sıklığı", "Yılda 1 Kez", "Yılda 2+ Kez"],
      ],
      
      testimonialTitle: "Müşterilerimiz Ne Diyor?",
      testimonials: [
        { name: "Ahmet B.", location: "Belek", quote: "Villam 280m², geçen kış doğalgaz faturası 4.500₺'ydi. Bu kış ısı pompası ile elektrik dahil toplam 1.800₺ ödedim.", rating: 5 },
        { name: "Klaus W.", location: "Alanya", quote: "In Deutschland hatte ich schon eine Wärmepumpe. Hier in der Türkei arbeitet sie noch effizienter wegen des milden Klimas.", rating: 5 },
        { name: "Fatma Ö.", location: "Antalya", quote: "Hem ısıtıyor hem soğutuyor. Klimayı da söktürdük. Tek sistem her şeyi yapıyor.", rating: 5 },
      ],
      
      faqTitle: "Sık Sorulan Sorular",
      faqs: [
        { q: "Isı pompası çok soğuk havalarda çalışır mı?", a: "Kesinlikle! Vaillant aroTHERM modelleri -25°C'ye kadar verimli çalışır. Antalya'nın ılıman ikliminde performans maksimum seviyededir." },
        { q: "Mevcut radyatörlerimi kullanabilir miyim?", a: "Çoğu durumda evet. Yerden ısıtma en verimli seçenek olsa da, mevcut radyatörlerinizle de sistem çalışır. Keşif ziyaretinde değerlendiririz." },
        { q: "Kurulum ne kadar sürer?", a: "Standart bir villa için 2-3 gün yeterli. Mevcut sisteminizin sökümü dahil." },
        { q: "Elektrik tüketimi ne kadar?", a: "Geleneksel elektrikli ısıtıcının 1/3-1/4'ü kadar. Her 1 kWh elektrik için 3-4 kWh ısı üretir. Bu da devasa tasarruf demek." },
        { q: "Ses yapar mı?", a: "Modern Vaillant ısı pompaları fısıltı kadar sessiz çalışır. Dış üniteler 35-45 dB seviyesinde - normal konuşmadan bile sessiz." },
        { q: "Güneş paneli ile birlikte kullanabilir miyim?", a: "Mükemmel kombinasyon! Güneş paneli elektriği ile ısı pompasını çalıştırarak neredeyse bedava ısıtma elde edersiniz." },
      ],
      
      urgencyTitle: "Kış Gelmeden Harekete Geçin",
      urgencySubtitle: "Kurulum için en ideal dönem şimdi",
      urgencyText: "Kış aylarında kurulum talebi yoğunlaşıyor ve bekleme süreleri uzuyor. Şimdi planlayın, kışa hazır girin. Her geçen kış, tasarruf etmediğiniz paradır.",
      
      finalCta: "Ücretsiz Keşif Randevusu Alın",
      finalCtaDesc: "Evinize özel tasarruf hesaplaması - hiçbir yükümlülük olmadan",
    },
    de: {
      badge: "Vaillant Wärmepumpen Vertragshändler",
      heroTitle: "Befreien Sie sich von",
      heroHighlight: "Gasrechnungen im Winter",
      heroSubtitle: "Fürchten Sie die Gasrechnung im Winter? Mit Vaillant Wärmepumpen heizen und kühlen Sie Ihr Zuhause - und verbrauchen dabei 60% weniger Energie. Deutsche Technologie, mediterraner Komfort.",
      ctaButton: "Kostenlose Einsparungsberechnung",
      ctaSecondary: "Jetzt Anrufen",
      
      problemTitle: "Kommen Ihnen diese Situationen bekannt vor?",
      problemSubtitle: "Probleme durch herkömmliche Heizsysteme",
      problems: [
        { title: "Schreckliche Winterrechnungen", desc: "Im Winter übersteigt die Gasrechnung 3.000₺, die Gesamtkosten für Strom + Gas steigen ständig." },
        { title: "Alte Kesselprobleme", desc: "Ihr Kessel ist alt, die Effizienz sinkt, Störungen häufen sich. Reparaturen sind nicht mehr wirtschaftlich." },
        { title: "Mangelnder Komfort", desc: "Klimaanlage im Sommer, Kessel im Winter - zwei Systeme, doppelte Kosten. Pool-Heizung ist ein weiteres Problem." },
        { title: "Umwelt- und Zukunftssorgen", desc: "Die Abhängigkeit von fossilen Brennstoffen schadet sowohl Ihrem Geldbeutel als auch der Umwelt." },
      ],
      
      solutionTitle: "Die Lösung: Vaillant Wärmepumpensystem",
      solutionSubtitle: "Heizen und Kühlen mit Luftenergie - 4-Jahreszeiten-Komfort mit einem System",
      
      benefitsTitle: "Vorteile der Wärmepumpe",
      benefits: [
        { icon: TrendingUp, title: "60% Energieersparnis", desc: "60% weniger Energieverbrauch als herkömmliche Systeme. Für jede 1 kWh Strom werden 3-4 kWh Wärme erzeugt." },
        { icon: Thermometer, title: "4-Jahreszeiten-Komfort", desc: "Ein System für Heizen und Kühlen. Sommer und Winter - dasselbe Gerät arbeitet in jeder Jahreszeit." },
        { icon: Home, title: "Pool-Heizung inklusive", desc: "Heizt auch Ihren Pool. Mehr Poolvergnügen im Jahr." },
        { icon: Leaf, title: "Null Emissionen", desc: "Keine fossilen Brennstoffe, nahezu null CO2-Emissionen. Umweltfreundliches Leben." },
        { icon: Shield, title: "Vaillant Qualität", desc: "150 Jahre deutsche Marke. Weltmarktführer mit 99% Kundenzufriedenheit." },
        { icon: Clock, title: "30+ Jahre Lebensdauer", desc: "Bei richtiger Wartung über 30 Jahre problemloser Betrieb. Doppelt so lang wie Kessel." },
      ],
      
      howItWorksTitle: "Wie funktioniert eine Wärmepumpe?",
      howItWorksSubtitle: "Wir bringen die Energie der Natur in Ihr Zuhause",
      howItWorksText: "Die Wärmepumpe entzieht der Außenluft Energie (selbst bei -15°C!) und verdichtet diese, um Ihr Zuhause zu heizen. Im Sommer funktioniert sie umgekehrt zur Kühlung. Das gleiche Prinzip wie Ihr Kühlschrank - aber viel effizienter und in größerem Maßstab.",
      steps: [
        { step: "01", title: "Kostenlose Besichtigung", desc: "Unsere Experten besuchen Ihr Haus, analysieren Ihr bestehendes System und Ihre Bedürfnisse." },
        { step: "02", title: "Individuelle Planung", desc: "Das ideale System wird basierend auf Quadratmeter, Isolierung und Nutzungsgewohnheiten bestimmt." },
        { step: "03", title: "Professionelle Installation", desc: "Unser Vaillant-zertifiziertes Team schließt die Installation in 2-3 Tagen ab." },
        { step: "04", title: "Sparen Sie los", desc: "Sehen Sie den Unterschied auf Ihrer ersten Winterrechnung. Durchschnittliche Ersparnis: 15.000₺+ pro Jahr." },
      ],
      
      trustTitle: "Warum 089 Bayern & Vaillant?",
      trustSubtitle: "Deutsche Ingenieurskunst, lokale Expertise",
      trustPoints: [
        { icon: Award, title: "Vaillant Vertragshändler", desc: "Eines der erfahrensten Vaillant-Wärmepumpen-Teams in der Türkei" },
        { icon: Users, title: "200+ Installationen", desc: "200+ erfolgreiche Wärmepumpen-Installationen in der Mittelmeerregion" },
        { icon: ThumbsUp, title: "98% Zufriedenheit", desc: "98% unserer Kunden empfehlen uns weiter" },
        { icon: Shield, title: "10 Jahre Garantie", desc: "Vaillant Werksgarantie + 089 Bayern Installationsgarantie" },
      ],
      
      comparisonTitle: "Wärmepumpe vs. herkömmliche Systeme",
      comparisonHeaders: ["Eigenschaft", "Wärmepumpe", "Gaskessel"],
      comparisonRows: [
        ["Jährliche Heizkosten (200m²)", "~8.000₺", "~20.000₺"],
        ["Kann kühlen?", "Ja", "Nein"],
        ["Pool-Heizung", "Ja", "Zusätzliches System nötig"],
        ["CO2-Emissionen", "Null", "Hoch"],
        ["Durchschnittliche Lebensdauer", "25-30 Jahre", "12-15 Jahre"],
        ["Wartungshäufigkeit", "1x pro Jahr", "2+ pro Jahr"],
      ],
      
      testimonialTitle: "Was unsere Kunden sagen",
      testimonials: [
        { name: "Ahmet B.", location: "Belek", quote: "Meine Villa ist 280m², letzten Winter war die Gasrechnung 4.500₺. Diesen Winter habe ich mit Wärmepumpe insgesamt 1.800₺ gezahlt.", rating: 5 },
        { name: "Klaus W.", location: "Alanya", quote: "In Deutschland hatte ich schon eine Wärmepumpe. Hier in der Türkei arbeitet sie noch effizienter wegen des milden Klimas.", rating: 5 },
        { name: "Fatma Ö.", location: "Antalya", quote: "Heizt und kühlt. Wir haben auch die Klimaanlage abgebaut. Ein System macht alles.", rating: 5 },
      ],
      
      faqTitle: "Häufig gestellte Fragen",
      faqs: [
        { q: "Funktioniert die Wärmepumpe bei sehr kaltem Wetter?", a: "Absolut! Vaillant aroTHERM Modelle arbeiten effizient bis -25°C. Im milden Klima von Antalya ist die Leistung maximal." },
        { q: "Kann ich meine bestehenden Heizkörper verwenden?", a: "In den meisten Fällen ja. Fußbodenheizung ist am effizientesten, aber das System funktioniert auch mit bestehenden Heizkörpern." },
        { q: "Wie lange dauert die Installation?", a: "Für eine Standard-Villa reichen 2-3 Tage. Einschließlich Demontage des alten Systems." },
        { q: "Wie hoch ist der Stromverbrauch?", a: "1/3 bis 1/4 eines herkömmlichen Elektroheizers. Für jede 1 kWh Strom werden 3-4 kWh Wärme erzeugt." },
        { q: "Ist sie laut?", a: "Moderne Vaillant Wärmepumpen arbeiten flüsterleise. Außeneinheiten bei 35-45 dB - leiser als normale Gespräche." },
        { q: "Kann ich sie mit Solaranlagen kombinieren?", a: "Perfekte Kombination! Mit Solarstrom betreiben Sie die Wärmepumpe und heizen nahezu kostenlos." },
      ],
      
      urgencyTitle: "Handeln Sie vor dem Winter",
      urgencySubtitle: "Jetzt ist die ideale Zeit für die Installation",
      urgencyText: "Im Winter steigt die Installationsnachfrage und Wartezeiten verlängern sich. Planen Sie jetzt, seien Sie auf den Winter vorbereitet.",
      
      finalCta: "Kostenlosen Besichtigungstermin vereinbaren",
      finalCtaDesc: "Individuelle Einsparungsberechnung für Ihr Zuhause - ohne Verpflichtung",
    },
    en: {
      badge: "Vaillant Heat Pump Authorized Dealer",
      heroTitle: "Free Yourself From",
      heroHighlight: "Winter Gas Bills",
      heroSubtitle: "Dreading the gas bill when winter comes? With Vaillant heat pumps, heat and cool your home while using 60% less energy. German technology, Mediterranean comfort.",
      ctaButton: "Free Savings Calculation",
      ctaSecondary: "Call Now",
      
      problemTitle: "Do These Situations Sound Familiar?",
      problemSubtitle: "Problems caused by traditional heating systems",
      problems: [
        { title: "Horrifying Winter Bills", desc: "Gas bill exceeding 3,000₺ in winter, total electricity + gas costs constantly rising." },
        { title: "Old Boiler Problems", desc: "Your boiler is old, efficiency dropped, breakdowns started. Repairs are no longer economical." },
        { title: "Insufficient Comfort", desc: "AC in summer, boiler in winter - two systems, double costs. Pool heating is another headache." },
        { title: "Environmental Concerns", desc: "Dependency on fossil fuels hurts both your wallet and the environment." },
      ],
      
      solutionTitle: "The Solution: Vaillant Heat Pump System",
      solutionSubtitle: "Heating and cooling using air energy - 4-season comfort with one system",
      
      benefitsTitle: "Heat Pump Advantages",
      benefits: [
        { icon: TrendingUp, title: "60% Energy Savings", desc: "60% less energy consumption than traditional systems. For every 1 kWh electricity, it produces 3-4 kWh heat." },
        { icon: Thermometer, title: "4-Season Comfort", desc: "One system for both heating and cooling. Summer and winter - same device works every season." },
        { icon: Home, title: "Pool Heating Included", desc: "Also heats your villa's pool. More pool enjoyment throughout the year." },
        { icon: Leaf, title: "Zero Emissions", desc: "No fossil fuels, nearly zero CO2 emissions. Eco-friendly living." },
        { icon: Shield, title: "Vaillant Quality", desc: "Germany's 150-year-old brand. World leader with 99% customer satisfaction." },
        { icon: Clock, title: "30+ Year Lifespan", desc: "With proper maintenance, over 30 years of trouble-free operation. Twice the lifespan of boilers." },
      ],
      
      howItWorksTitle: "How Does a Heat Pump Work?",
      howItWorksSubtitle: "We bring nature's energy to your home",
      howItWorksText: "A heat pump extracts energy from outdoor air (even at -15°C!) and compresses it to heat your home. In summer, it works in reverse to cool. Same principle as your refrigerator - but much more efficient and on a larger scale.",
      steps: [
        { step: "01", title: "Free Survey", desc: "Our experts visit your home, analyze your existing system and needs." },
        { step: "02", title: "Custom Design", desc: "The ideal system is determined based on square meters, insulation, and usage habits." },
        { step: "03", title: "Professional Installation", desc: "Our Vaillant-certified team completes installation in 2-3 days." },
        { step: "04", title: "Start Saving", desc: "See the difference on your first winter bill. Average customer saves 15,000₺+ per year." },
      ],
      
      trustTitle: "Why 089 Bayern & Vaillant?",
      trustSubtitle: "German engineering, local expertise",
      trustPoints: [
        { icon: Award, title: "Vaillant Authorized Dealer", desc: "One of the most experienced Vaillant heat pump installation teams in Turkey" },
        { icon: Users, title: "200+ Installations", desc: "200+ successful heat pump installations in the Mediterranean region" },
        { icon: ThumbsUp, title: "98% Satisfaction", desc: "98% of our customers recommend us" },
        { icon: Shield, title: "10 Year Warranty", desc: "Vaillant factory warranty + 089 Bayern workmanship warranty" },
      ],
      
      comparisonTitle: "Heat Pump vs Traditional Systems",
      comparisonHeaders: ["Feature", "Heat Pump", "Gas Boiler"],
      comparisonRows: [
        ["Annual Heating Cost (200m²)", "~8,000₺", "~20,000₺"],
        ["Can Cool?", "Yes", "No"],
        ["Pool Heating", "Yes", "Additional System Required"],
        ["CO2 Emissions", "Zero", "High"],
        ["Average Lifespan", "25-30 Years", "12-15 Years"],
        ["Maintenance Frequency", "Once/Year", "2+/Year"],
      ],
      
      testimonialTitle: "What Our Customers Say",
      testimonials: [
        { name: "Ahmet B.", location: "Belek", quote: "My villa is 280m², last winter gas bill was 4,500₺. This winter with heat pump I paid total 1,800₺ including electricity.", rating: 5 },
        { name: "Klaus W.", location: "Alanya", quote: "In Germany I already had a heat pump. Here in Turkey it works even more efficiently due to the mild climate.", rating: 5 },
        { name: "Fatma Ö.", location: "Antalya", quote: "Heats and cools. We also removed the AC. One system does everything.", rating: 5 },
      ],
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "Does the heat pump work in very cold weather?", a: "Absolutely! Vaillant aroTHERM models work efficiently down to -25°C. In Antalya's mild climate, performance is at maximum." },
        { q: "Can I use my existing radiators?", a: "In most cases, yes. Underfloor heating is most efficient, but the system also works with existing radiators." },
        { q: "How long does installation take?", a: "2-3 days is sufficient for a standard villa. Including removal of your old system." },
        { q: "How much electricity does it use?", a: "1/3 to 1/4 of a conventional electric heater. For every 1 kWh electricity, it produces 3-4 kWh heat." },
        { q: "Is it noisy?", a: "Modern Vaillant heat pumps operate whisper-quiet. Outdoor units at 35-45 dB - quieter than normal conversation." },
        { q: "Can I use it with solar panels?", a: "Perfect combination! Running the heat pump with solar electricity gives you nearly free heating." },
      ],
      
      urgencyTitle: "Act Before Winter Comes",
      urgencySubtitle: "Now is the ideal time for installation",
      urgencyText: "Installation demand increases in winter and waiting times extend. Plan now, be ready for winter. Every winter that passes is money not saved.",
      
      finalCta: "Book Your Free Survey Appointment",
      finalCtaDesc: "Custom savings calculation for your home - no obligation",
    },
    ru: {
      badge: "Официальный дилер тепловых насосов Vaillant",
      heroTitle: "Освободитесь от",
      heroHighlight: "зимних счетов за газ",
      heroSubtitle: "Боитесь счета за газ зимой? С тепловыми насосами Vaillant обогревайте и охлаждайте дом, потребляя на 60% меньше энергии. Немецкие технологии, средиземноморский комфорт.",
      ctaButton: "Бесплатный расчет экономии",
      ctaSecondary: "Позвонить сейчас",
      
      problemTitle: "Знакомы ли вам эти ситуации?",
      problemSubtitle: "Проблемы традиционных систем отопления",
      problems: [
        { title: "Ужасающие зимние счета", desc: "Счет за газ зимой превышает 3 000₺, общие расходы на электричество + газ постоянно растут." },
        { title: "Проблемы со старым котлом", desc: "Ваш котел устарел, эффективность упала, начались поломки. Ремонт уже не выгоден." },
        { title: "Недостаточный комфорт", desc: "Кондиционер летом, котел зимой - две системы, двойные расходы. Подогрев бассейна - отдельная проблема." },
        { title: "Забота об экологии и будущем", desc: "Зависимость от ископаемого топлива вредит и вашему кошельку, и окружающей среде." },
      ],
      
      solutionTitle: "Решение: система тепловых насосов Vaillant",
      solutionSubtitle: "Отопление и охлаждение с использованием энергии воздуха - комфорт 4 сезона в одной системе",
      
      benefitsTitle: "Преимущества теплового насоса",
      benefits: [
        { icon: TrendingUp, title: "60% экономии энергии", desc: "На 60% меньше потребления энергии по сравнению с традиционными системами. На каждый 1 кВт·ч электричества производит 3-4 кВт·ч тепла." },
        { icon: Thermometer, title: "Комфорт 4 сезона", desc: "Одна система для отопления и охлаждения. Лето и зима - одно устройство работает круглый год." },
        { icon: Home, title: "Подогрев бассейна включен", desc: "Также обогревает бассейн вашей виллы. Больше удовольствия от бассейна в течение года." },
        { icon: Leaf, title: "Нулевые выбросы", desc: "Без ископаемого топлива, практически нулевые выбросы CO2. Экологичная жизнь." },
        { icon: Shield, title: "Качество Vaillant", desc: "150-летний немецкий бренд. Мировой лидер с 99% удовлетворенностью клиентов." },
        { icon: Clock, title: "Срок службы 30+ лет", desc: "При правильном обслуживании более 30 лет безотказной работы. Вдвое дольше котлов." },
      ],
      
      howItWorksTitle: "Как работает тепловой насос?",
      howItWorksSubtitle: "Мы приносим энергию природы в ваш дом",
      howItWorksText: "Тепловой насос извлекает энергию из наружного воздуха (даже при -15°C!) и сжимает её для обогрева дома. Летом работает в обратном режиме для охлаждения. Тот же принцип, что и у холодильника - но гораздо эффективнее и в большем масштабе.",
      steps: [
        { step: "01", title: "Бесплатный осмотр", desc: "Наши эксперты посетят ваш дом, проанализируют существующую систему и потребности." },
        { step: "02", title: "Индивидуальный проект", desc: "Идеальная система определяется на основе площади, изоляции и привычек использования." },
        { step: "03", title: "Профессиональная установка", desc: "Наша сертифицированная команда Vaillant завершает установку за 2-3 дня." },
        { step: "04", title: "Начните экономить", desc: "Увидите разницу в первом зимнем счете. Средняя экономия клиентов: 15 000₺+ в год." },
      ],
      
      trustTitle: "Почему 089 Bayern и Vaillant?",
      trustSubtitle: "Немецкое инженерство, местный опыт",
      trustPoints: [
        { icon: Award, title: "Официальный дилер Vaillant", desc: "Одна из самых опытных команд по установке тепловых насосов Vaillant в Турции" },
        { icon: Users, title: "200+ установок", desc: "200+ успешных установок тепловых насосов в Средиземноморском регионе" },
        { icon: ThumbsUp, title: "98% удовлетворенности", desc: "98% наших клиентов рекомендуют нас" },
        { icon: Shield, title: "10 лет гарантии", desc: "Заводская гарантия Vaillant + гарантия на работы 089 Bayern" },
      ],
      
      comparisonTitle: "Тепловой насос vs традиционные системы",
      comparisonHeaders: ["Характеристика", "Тепловой насос", "Газовый котел"],
      comparisonRows: [
        ["Годовые затраты на отопление (200м²)", "~8 000₺", "~20 000₺"],
        ["Может охлаждать?", "Да", "Нет"],
        ["Подогрев бассейна", "Да", "Требуется дополнительная система"],
        ["Выбросы CO2", "Ноль", "Высокие"],
        ["Средний срок службы", "25-30 лет", "12-15 лет"],
        ["Частота обслуживания", "1 раз/год", "2+/год"],
      ],
      
      testimonialTitle: "Что говорят наши клиенты",
      testimonials: [
        { name: "Ahmet B.", location: "Белек", quote: "Моя вилла 280м², прошлой зимой счет за газ был 4 500₺. Этой зимой с тепловым насосом я заплатил всего 1 800₺ включая электричество.", rating: 5 },
        { name: "Klaus W.", location: "Аланья", quote: "В Германии у меня уже был тепловой насос. Здесь в Турции он работает ещё эффективнее из-за мягкого климата.", rating: 5 },
        { name: "Fatma Ö.", location: "Анталья", quote: "Обогревает и охлаждает. Мы также сняли кондиционер. Одна система делает всё.", rating: 5 },
      ],
      
      faqTitle: "Часто задаваемые вопросы",
      faqs: [
        { q: "Работает ли тепловой насос в очень холодную погоду?", a: "Абсолютно! Модели Vaillant aroTHERM эффективно работают до -25°C. В мягком климате Анталии производительность максимальна." },
        { q: "Могу ли я использовать существующие радиаторы?", a: "В большинстве случаев да. Теплый пол наиболее эффективен, но система также работает с существующими радиаторами." },
        { q: "Сколько времени занимает установка?", a: "2-3 дня достаточно для стандартной виллы. Включая демонтаж старой системы." },
        { q: "Сколько электроэнергии потребляет?", a: "1/3 до 1/4 от обычного электронагревателя. На каждый 1 кВт·ч электричества производит 3-4 кВт·ч тепла." },
        { q: "Шумит ли?", a: "Современные тепловые насосы Vaillant работают бесшумно. Наружные блоки 35-45 дБ - тише обычного разговора." },
        { q: "Можно ли использовать с солнечными панелями?", a: "Идеальная комбинация! Питая тепловой насос солнечной энергией, вы получаете практически бесплатное отопление." },
      ],
      
      urgencyTitle: "Действуйте до зимы",
      urgencySubtitle: "Сейчас идеальное время для установки",
      urgencyText: "Зимой спрос на установку возрастает, а сроки ожидания увеличиваются. Планируйте сейчас, будьте готовы к зиме. Каждая прошедшая зима - это несэкономленные деньги.",
      
      finalCta: "Запишитесь на бесплатный осмотр",
      finalCtaDesc: "Индивидуальный расчет экономии для вашего дома - без обязательств",
    },
    uk: {
      badge: "Офіційний дилер теплових насосів Vaillant",
      heroTitle: "Звільніться від",
      heroHighlight: "зимових рахунків за газ",
      heroSubtitle: "Боїтеся рахунку за газ взимку? З тепловими насосами Vaillant обігрівайте та охолоджуйте дім, споживаючи на 60% менше енергії. Німецькі технології, середземноморський комфорт.",
      ctaButton: "Безкоштовний розрахунок економії",
      ctaSecondary: "Зателефонувати зараз",
      
      problemTitle: "Чи знайомі вам ці ситуації?",
      problemSubtitle: "Проблеми традиційних систем опалення",
      problems: [
        { title: "Жахливі зимові рахунки", desc: "Рахунок за газ взимку перевищує 3 000₺, загальні витрати на електрику + газ постійно зростають." },
        { title: "Проблеми зі старим котлом", desc: "Ваш котел застарів, ефективність впала, почалися поломки. Ремонт вже не вигідний." },
        { title: "Недостатній комфорт", desc: "Кондиціонер влітку, котел взимку - дві системи, подвійні витрати. Підігрів басейну - окрема проблема." },
        { title: "Турбота про екологію та майбутнє", desc: "Залежність від викопного палива шкодить і вашому гаманцю, і довкіллю." },
      ],
      
      solutionTitle: "Рішення: система теплових насосів Vaillant",
      solutionSubtitle: "Опалення та охолодження з використанням енергії повітря - комфорт 4 сезони в одній системі",
      
      benefitsTitle: "Переваги теплового насоса",
      benefits: [
        { icon: TrendingUp, title: "60% економії енергії", desc: "На 60% менше споживання енергії порівняно з традиційними системами. На кожен 1 кВт·год електрики виробляє 3-4 кВт·год тепла." },
        { icon: Thermometer, title: "Комфорт 4 сезони", desc: "Одна система для опалення та охолодження. Літо і зима - один пристрій працює цілий рік." },
        { icon: Home, title: "Підігрів басейну включено", desc: "Також обігріває басейн вашої вілли. Більше задоволення від басейну протягом року." },
        { icon: Leaf, title: "Нульові викиди", desc: "Без викопного палива, практично нульові викиди CO2. Екологічне життя." },
        { icon: Shield, title: "Якість Vaillant", desc: "150-річний німецький бренд. Світовий лідер з 99% задоволеності клієнтів." },
        { icon: Clock, title: "Термін служби 30+ років", desc: "При правильному обслуговуванні понад 30 років безвідмовної роботи. Вдвічі довше котлів." },
      ],
      
      howItWorksTitle: "Як працює тепловий насос?",
      howItWorksSubtitle: "Ми приносимо енергію природи у ваш дім",
      howItWorksText: "Тепловий насос витягує енергію із зовнішнього повітря (навіть при -15°C!) і стискає її для обігріву дому. Влітку працює у зворотному режимі для охолодження. Той самий принцип, що й у холодильника - але набагато ефективніше і в більшому масштабі.",
      steps: [
        { step: "01", title: "Безкоштовний огляд", desc: "Наші експерти відвідають ваш дім, проаналізують існуючу систему та потреби." },
        { step: "02", title: "Індивідуальний проект", desc: "Ідеальна система визначається на основі площі, ізоляції та звичок використання." },
        { step: "03", title: "Професійна установка", desc: "Наша сертифікована команда Vaillant завершує установку за 2-3 дні." },
        { step: "04", title: "Починайте економити", desc: "Побачите різницю у першому зимовому рахунку. Середня економія клієнтів: 15 000₺+ на рік." },
      ],
      
      trustTitle: "Чому 089 Bayern та Vaillant?",
      trustSubtitle: "Німецька інженерія, місцевий досвід",
      trustPoints: [
        { icon: Award, title: "Офіційний дилер Vaillant", desc: "Одна з найдосвідченіших команд з установки теплових насосів Vaillant у Туреччині" },
        { icon: Users, title: "200+ установок", desc: "200+ успішних установок теплових насосів у Середземноморському регіоні" },
        { icon: ThumbsUp, title: "98% задоволеності", desc: "98% наших клієнтів рекомендують нас" },
        { icon: Shield, title: "10 років гарантії", desc: "Заводська гарантія Vaillant + гарантія на роботи 089 Bayern" },
      ],
      
      comparisonTitle: "Тепловий насос vs традиційні системи",
      comparisonHeaders: ["Характеристика", "Тепловий насос", "Газовий котел"],
      comparisonRows: [
        ["Річні витрати на опалення (200м²)", "~8 000₺", "~20 000₺"],
        ["Може охолоджувати?", "Так", "Ні"],
        ["Підігрів басейну", "Так", "Потрібна додаткова система"],
        ["Викиди CO2", "Нуль", "Високі"],
        ["Середній термін служби", "25-30 років", "12-15 років"],
        ["Частота обслуговування", "1 раз/рік", "2+/рік"],
      ],
      
      testimonialTitle: "Що кажуть наші клієнти",
      testimonials: [
        { name: "Ahmet B.", location: "Белек", quote: "Моя вілла 280м², минулої зими рахунок за газ був 4 500₺. Цієї зими з тепловим насосом я заплатив всього 1 800₺ включаючи електрику.", rating: 5 },
        { name: "Klaus W.", location: "Аланья", quote: "У Німеччині я вже мав тепловий насос. Тут у Туреччині він працює ще ефективніше через м'який клімат.", rating: 5 },
        { name: "Fatma Ö.", location: "Анталья", quote: "Обігріває і охолоджує. Ми також зняли кондиціонер. Одна система робить все.", rating: 5 },
      ],
      
      faqTitle: "Часті запитання",
      faqs: [
        { q: "Чи працює тепловий насос у дуже холодну погоду?", a: "Абсолютно! Моделі Vaillant aroTHERM ефективно працюють до -25°C. У м'якому кліматі Анталії продуктивність максимальна." },
        { q: "Чи можу я використовувати існуючі радіатори?", a: "У більшості випадків так. Тепла підлога найефективніша, але система також працює з існуючими радіаторами." },
        { q: "Скільки часу займає установка?", a: "2-3 дні достатньо для стандартної вілли. Включаючи демонтаж старої системи." },
        { q: "Скільки електроенергії споживає?", a: "1/3 до 1/4 від звичайного електронагрівача. На кожен 1 кВт·год електрики виробляє 3-4 кВт·год тепла." },
        { q: "Чи шумить?", a: "Сучасні теплові насоси Vaillant працюють беззвучно. Зовнішні блоки 35-45 дБ - тихіше звичайної розмови." },
        { q: "Чи можна використовувати з сонячними панелями?", a: "Ідеальна комбінація! Живлячи тепловий насос сонячною енергією, ви отримуєте практично безкоштовне опалення." },
      ],
      
      urgencyTitle: "Дійте до зими",
      urgencySubtitle: "Зараз ідеальний час для установки",
      urgencyText: "Взимку попит на установку зростає, а терміни очікування збільшуються. Плануйте зараз, будьте готові до зими. Кожна минула зима - це незаощаджені гроші.",
      
      finalCta: "Запишіться на безкоштовний огляд",
      finalCtaDesc: "Індивідуальний розрахунок економії для вашого дому - без зобов'язань",
    },
    ar: {
      badge: "وكيل معتمد لمضخات Vaillant الحرارية",
      heroTitle: "تحرر من",
      heroHighlight: "فواتير الغاز الشتوية",
      heroSubtitle: "هل تخشى فاتورة الغاز عند قدوم الشتاء؟ مع مضخات Vaillant الحرارية، سخّن وبرّد منزلك مع استهلاك طاقة أقل بنسبة 60%. التكنولوجيا الألمانية، راحة البحر المتوسط.",
      ctaButton: "حساب التوفير المجاني",
      ctaSecondary: "اتصل الآن",
      
      problemTitle: "هل تبدو هذه المواقف مألوفة؟",
      problemSubtitle: "مشاكل أنظمة التدفئة التقليدية",
      problems: [
        { title: "فواتير الشتاء المرعبة", desc: "فاتورة الغاز تتجاوز 3,000₺ في الشتاء، تكاليف الكهرباء + الغاز الإجمالية ترتفع باستمرار." },
        { title: "مشاكل الغلاية القديمة", desc: "غلايتك قديمة، الكفاءة انخفضت، بدأت الأعطال. الإصلاحات لم تعد اقتصادية." },
        { title: "راحة غير كافية", desc: "مكيف في الصيف، غلاية في الشتاء - نظامان، تكاليف مضاعفة. تسخين المسبح مشكلة أخرى." },
        { title: "مخاوف بيئية ومستقبلية", desc: "الاعتماد على الوقود الأحفوري يضر بميزانيتك والبيئة معاً." },
      ],
      
      solutionTitle: "الحل: نظام مضخات Vaillant الحرارية",
      solutionSubtitle: "التدفئة والتبريد باستخدام طاقة الهواء - راحة 4 فصول بنظام واحد",
      
      benefitsTitle: "مميزات المضخة الحرارية",
      benefits: [
        { icon: TrendingUp, title: "توفير 60% من الطاقة", desc: "استهلاك طاقة أقل بنسبة 60% من الأنظمة التقليدية. لكل 1 كيلوواط ساعة كهرباء، تنتج 3-4 كيلوواط ساعة حرارة." },
        { icon: Thermometer, title: "راحة 4 فصول", desc: "نظام واحد للتدفئة والتبريد. الصيف والشتاء - نفس الجهاز يعمل طوال العام." },
        { icon: Home, title: "تسخين المسبح مشمول", desc: "يسخن أيضاً مسبح فيلتك. المزيد من متعة المسبح طوال العام." },
        { icon: Leaf, title: "صفر انبعاثات", desc: "بدون وقود أحفوري، انبعاثات CO2 شبه صفرية. حياة صديقة للبيئة." },
        { icon: Shield, title: "جودة Vaillant", desc: "علامة ألمانية عمرها 150 عاماً. رائدة عالمياً مع 99% رضا العملاء." },
        { icon: Clock, title: "عمر +30 سنة", desc: "مع الصيانة الصحيحة، أكثر من 30 عاماً من التشغيل بدون مشاكل. ضعف عمر الغلايات." },
      ],
      
      howItWorksTitle: "كيف تعمل المضخة الحرارية؟",
      howItWorksSubtitle: "نجلب طاقة الطبيعة إلى منزلك",
      howItWorksText: "المضخة الحرارية تستخلص الطاقة من الهواء الخارجي (حتى عند -15 درجة مئوية!) وتضغطها لتدفئة منزلك. في الصيف، تعمل بالعكس للتبريد. نفس مبدأ الثلاجة - لكن أكثر كفاءة وعلى نطاق أوسع.",
      steps: [
        { step: "01", title: "معاينة مجانية", desc: "يزور خبراؤنا منزلك، ويحللون نظامك الحالي واحتياجاتك." },
        { step: "02", title: "تصميم مخصص", desc: "يتم تحديد النظام المثالي بناءً على المساحة والعزل وعادات الاستخدام." },
        { step: "03", title: "تركيب احترافي", desc: "فريقنا المعتمد من Vaillant ينهي التركيب في 2-3 أيام." },
        { step: "04", title: "ابدأ بالتوفير", desc: "سترى الفرق في أول فاتورة شتوية. متوسط توفير العملاء: +15,000₺ سنوياً." },
      ],
      
      trustTitle: "لماذا 089 Bayern و Vaillant؟",
      trustSubtitle: "الهندسة الألمانية، الخبرة المحلية",
      trustPoints: [
        { icon: Award, title: "وكيل Vaillant المعتمد", desc: "أحد أكثر فرق تركيب مضخات Vaillant الحرارية خبرة في تركيا" },
        { icon: Users, title: "+200 تركيب", desc: "+200 تركيب ناجح لمضخات حرارية في منطقة البحر المتوسط" },
        { icon: ThumbsUp, title: "98% رضا", desc: "98% من عملائنا يوصون بنا" },
        { icon: Shield, title: "10 سنوات ضمان", desc: "ضمان مصنع Vaillant + ضمان تركيب 089 Bayern" },
      ],
      
      comparisonTitle: "المضخة الحرارية مقابل الأنظمة التقليدية",
      comparisonHeaders: ["الميزة", "المضخة الحرارية", "غلاية الغاز"],
      comparisonRows: [
        ["تكلفة التدفئة السنوية (200م²)", "~8,000₺", "~20,000₺"],
        ["يمكنها التبريد؟", "نعم", "لا"],
        ["تسخين المسبح", "نعم", "يتطلب نظاماً إضافياً"],
        ["انبعاثات CO2", "صفر", "عالية"],
        ["متوسط العمر", "25-30 سنة", "12-15 سنة"],
        ["تكرار الصيانة", "مرة/سنة", "+2/سنة"],
      ],
      
      testimonialTitle: "ماذا يقول عملاؤنا",
      testimonials: [
        { name: "Ahmet B.", location: "بيلك", quote: "فيلتي 280م²، فاتورة الغاز الشتاء الماضي كانت 4,500₺. هذا الشتاء مع المضخة الحرارية دفعت 1,800₺ إجمالي شاملة الكهرباء.", rating: 5 },
        { name: "Klaus W.", location: "ألانيا", quote: "في ألمانيا كان لدي مضخة حرارية. هنا في تركيا تعمل بكفاءة أعلى بسبب المناخ المعتدل.", rating: 5 },
        { name: "Fatma Ö.", location: "أنطاليا", quote: "تسخن وتبرد. أزلنا المكيف أيضاً. نظام واحد يفعل كل شيء.", rating: 5 },
      ],
      
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        { q: "هل تعمل المضخة الحرارية في الطقس البارد جداً؟", a: "بالتأكيد! موديلات Vaillant aroTHERM تعمل بكفاءة حتى -25 درجة مئوية. في مناخ أنطاليا المعتدل، الأداء في أقصى مستوى." },
        { q: "هل يمكنني استخدام الرادياتورات الموجودة؟", a: "في معظم الحالات، نعم. التدفئة الأرضية أكثر كفاءة، لكن النظام يعمل أيضاً مع الرادياتورات الموجودة." },
        { q: "كم تستغرق التركيب؟", a: "2-3 أيام كافية لفيلا قياسية. شاملة إزالة نظامك القديم." },
        { q: "كم الكهرباء التي تستهلكها؟", a: "1/3 إلى 1/4 من السخان الكهربائي التقليدي. لكل 1 كيلوواط ساعة كهرباء، تنتج 3-4 كيلوواط ساعة حرارة." },
        { q: "هل هي صاخبة؟", a: "مضخات Vaillant الحرارية الحديثة تعمل بهدوء شديد. الوحدات الخارجية 35-45 ديسيبل - أهدأ من المحادثة العادية." },
        { q: "هل يمكنني استخدامها مع الألواح الشمسية؟", a: "تركيبة مثالية! بتشغيل المضخة الحرارية بالكهرباء الشمسية، تحصل على تدفئة شبه مجانية." },
      ],
      
      urgencyTitle: "تصرف قبل الشتاء",
      urgencySubtitle: "الآن هو الوقت المثالي للتركيب",
      urgencyText: "في الشتاء يزداد الطلب على التركيب وتطول أوقات الانتظار. خطط الآن، كن مستعداً للشتاء. كل شتاء يمر هو أموال لم توفرها.",
      
      finalCta: "احجز موعد معاينة مجاني",
      finalCtaDesc: "حساب توفير مخصص لمنزلك - بدون التزام",
    },
    hr: {
      badge: "Ovlašteni zastupnik Vaillant dizalica topline",
      heroTitle: "Oslobodite se",
      heroHighlight: "zimskih računa za plin",
      heroSubtitle: "Strahujete od računa za plin kad dođe zima? S Vaillant dizalicama topline grijte i hladite dom koristeći 60% manje energije. Njemačka tehnologija, mediteranski komfor.",
      ctaButton: "Besplatni izračun uštede",
      ctaSecondary: "Nazovite odmah",
      
      problemTitle: "Prepoznajete li ove situacije?",
      problemSubtitle: "Problemi tradicionalnih sustava grijanja",
      problems: [
        { title: "Zastrašujući zimski računi", desc: "Račun za plin zimi prelazi 3.000₺, ukupni troškovi struje + plina stalno rastu." },
        { title: "Problemi sa starim kotlom", desc: "Vaš kotao je star, učinkovitost je pala, kvarovi su počeli. Popravci više nisu ekonomični." },
        { title: "Nedovoljan komfor", desc: "Klima ljeti, kotao zimi - dva sustava, dvostruki troškovi. Grijanje bazena je dodatni problem." },
        { title: "Briga za okoliš i budućnost", desc: "Ovisnost o fosilnim gorivima šteti i vašem novčaniku i okolišu." },
      ],
      
      solutionTitle: "Rješenje: Vaillant sustav dizalica topline",
      solutionSubtitle: "Grijanje i hlađenje korištenjem energije zraka - komfor 4 godišnja doba s jednim sustavom",
      
      benefitsTitle: "Prednosti dizalice topline",
      benefits: [
        { icon: TrendingUp, title: "60% uštede energije", desc: "60% manja potrošnja energije od tradicionalnih sustava. Za svaki 1 kWh struje proizvodi 3-4 kWh topline." },
        { icon: Thermometer, title: "Komfor 4 godišnja doba", desc: "Jedan sustav za grijanje i hlađenje. Ljeto i zima - isti uređaj radi cijelu godinu." },
        { icon: Home, title: "Grijanje bazena uključeno", desc: "Također grije bazen vaše vile. Više uživanja u bazenu tijekom godine." },
        { icon: Leaf, title: "Nula emisija", desc: "Bez fosilnih goriva, gotovo nula emisija CO2. Ekološki život." },
        { icon: Shield, title: "Vaillant kvaliteta", desc: "150 godina stara njemačka marka. Svjetski lider s 99% zadovoljstva kupaca." },
        { icon: Clock, title: "Životni vijek 30+ godina", desc: "S pravilnim održavanjem, preko 30 godina besprijekornog rada. Dvostruko duže od kotlova." },
      ],
      
      howItWorksTitle: "Kako radi dizalica topline?",
      howItWorksSubtitle: "Donosimo energiju prirode u vaš dom",
      howItWorksText: "Dizalica topline izvlači energiju iz vanjskog zraka (čak i pri -15°C!) i komprimira je za grijanje vašeg doma. Ljeti radi obrnuto za hlađenje. Isti princip kao vaš hladnjak - ali puno učinkovitije i u većem mjerilu.",
      steps: [
        { step: "01", title: "Besplatni pregled", desc: "Naši stručnjaci posjećuju vaš dom, analiziraju postojeći sustav i potrebe." },
        { step: "02", title: "Prilagođeni dizajn", desc: "Idealan sustav se određuje na temelju kvadrature, izolacije i navika korištenja." },
        { step: "03", title: "Profesionalna instalacija", desc: "Naš Vaillant certificirani tim završava instalaciju u 2-3 dana." },
        { step: "04", title: "Počnite štedjeti", desc: "Vidite razliku na prvom zimskom računu. Prosječna ušteda kupaca: 15.000₺+ godišnje." },
      ],
      
      trustTitle: "Zašto 089 Bayern i Vaillant?",
      trustSubtitle: "Njemačko inženjerstvo, lokalna stručnost",
      trustPoints: [
        { icon: Award, title: "Vaillant ovlašteni zastupnik", desc: "Jedan od najiskusnijih timova za instalaciju Vaillant dizalica topline u Turskoj" },
        { icon: Users, title: "200+ instalacija", desc: "200+ uspješnih instalacija dizalica topline u mediteranskoj regiji" },
        { icon: ThumbsUp, title: "98% zadovoljstva", desc: "98% naših kupaca nas preporučuje" },
        { icon: Shield, title: "10 godina jamstva", desc: "Vaillant tvorničko jamstvo + 089 Bayern jamstvo na rad" },
      ],
      
      comparisonTitle: "Dizalica topline vs tradicionalni sustavi",
      comparisonHeaders: ["Svojstvo", "Dizalica topline", "Plinski kotao"],
      comparisonRows: [
        ["Godišnji troškovi grijanja (200m²)", "~8.000₺", "~20.000₺"],
        ["Može hladiti?", "Da", "Ne"],
        ["Grijanje bazena", "Da", "Potreban dodatni sustav"],
        ["Emisije CO2", "Nula", "Visoke"],
        ["Prosječni životni vijek", "25-30 godina", "12-15 godina"],
        ["Učestalost održavanja", "1x/godišnje", "2+/godišnje"],
      ],
      
      testimonialTitle: "Što kažu naši kupci",
      testimonials: [
        { name: "Ahmet B.", location: "Belek", quote: "Moja vila je 280m², prošle zime račun za plin bio je 4.500₺. Ove zime s dizalicom topline platio sam ukupno 1.800₺ uključujući struju.", rating: 5 },
        { name: "Klaus W.", location: "Alanya", quote: "U Njemačkoj sam već imao dizalicu topline. Ovdje u Turskoj radi još učinkovitije zbog blage klime.", rating: 5 },
        { name: "Fatma Ö.", location: "Antalya", quote: "Grije i hladi. Maknuli smo i klimu. Jedan sustav radi sve.", rating: 5 },
      ],
      
      faqTitle: "Često postavljana pitanja",
      faqs: [
        { q: "Radi li dizalica topline u vrlo hladnom vremenu?", a: "Apsolutno! Vaillant aroTHERM modeli učinkovito rade do -25°C. U blagoj klimi Antalije performanse su maksimalne." },
        { q: "Mogu li koristiti postojeće radijatore?", a: "U većini slučajeva da. Podno grijanje je najučinkovitije, ali sustav također radi s postojećim radijatorima." },
        { q: "Koliko traje instalacija?", a: "2-3 dana je dovoljno za standardnu vilu. Uključujući uklanjanje starog sustava." },
        { q: "Koliko struje troši?", a: "1/3 do 1/4 konvencionalnog električnog grijača. Za svaki 1 kWh struje proizvodi 3-4 kWh topline." },
        { q: "Je li bučna?", a: "Moderne Vaillant dizalice topline rade tiho kao šapat. Vanjske jedinice 35-45 dB - tiše od normalnog razgovora." },
        { q: "Mogu li je koristiti sa solarnim panelima?", a: "Savršena kombinacija! Pokretanjem dizalice topline solarnom strujom dobivate gotovo besplatno grijanje." },
      ],
      
      urgencyTitle: "Djelujte prije zime",
      urgencySubtitle: "Sada je idealno vrijeme za instalaciju",
      urgencyText: "Zimi se povećava potražnja za instalacijom i produžuju se rokovi čekanja. Planirajte sada, budite spremni za zimu. Svaka prošla zima su neuštede.",
      
      finalCta: "Rezervirajte besplatni pregled",
      finalCtaDesc: "Prilagođeni izračun uštede za vaš dom - bez obveza",
    },
  };

  const c = content[language as keyof typeof content] || content.tr;
  const isRtl = language === "ar";

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-isi-pompasi">
      <SEOHead page="systeme" />
      <Header onCtaClick={goToContact} />
      
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden" data-testid="section-heatpump-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-orange-500/20 backdrop-blur-md border-orange-500/30 text-orange-300">
              <Flame className="w-4 h-4 mr-2" />
              {c.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {c.heroTitle}{" "}
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
                {c.heroHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              {c.heroSubtitle}
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 border-0 shadow-lg shadow-orange-500/30 px-8"
                data-testid="button-heatpump-cta"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {c.ctaButton}
              </Button>
              <div className="flex flex-row gap-2 flex-wrap">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-red-400/50 text-white bg-red-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "tel:+905071832036"}
                  data-testid="button-heatpump-phone-tr"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  TR +90 507 183 2036
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-amber-400/50 text-white bg-black/30 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "tel:+491735994699"}
                  data-testid="button-heatpump-phone-de"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  DE +49 173 5994699
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-green-400/50 text-white bg-green-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.open("https://wa.me/491735994699", "_blank")}
                  data-testid="button-heatpump-whatsapp"
                >
                  WhatsApp
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-blue-400/50 text-white bg-blue-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "mailto:info@089bayern.com"}
                  data-testid="button-heatpump-email"
                >
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4in1 System Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20" data-testid="section-4in1-banner">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">4in1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "de" ? "Teil des 089 Bayern 4in1 Systems" : 
                   language === "en" ? "Part of 089 Bayern 4in1 System" : 
                   language === "ru" ? "Часть системы 089 Bayern 4in1" :
                   language === "uk" ? "Частина системи 089 Bayern 4in1" :
                   language === "ar" ? "جزء من نظام 089 Bayern 4in1" :
                   language === "hr" ? "Dio 089 Bayern 4in1 sustava" :
                   "089 Bayern 4in1 Sisteminin Parçası"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "de" ? "Kühlen + Heizen + Speichern + Energie & Warmwasser = EINE Lösung" : 
                   language === "en" ? "Cooling + Heating + Storage + Energy & Hot Water = ONE Solution" : 
                   language === "ru" ? "Охлаждение + Отопление + Хранение + Энергия и горячая вода = ОДНО решение" :
                   language === "uk" ? "Охолодження + Опалення + Зберігання + Енергія та гаряча вода = ОДНЕ рішення" :
                   language === "ar" ? "تبريد + تدفئة + تخزين + طاقة وماء ساخن = حل واحد" :
                   language === "hr" ? "Hlađenje + Grijanje + Pohrana + Energija i topla voda = JEDNO rješenje" :
                   "Soğutma + Isıtma + Depolama + Enerji & Sıcak Su = TEK Çözüm"}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-foreground">
                  {language === "de" ? "10 Monate Sonne" : 
                   language === "en" ? "10 Months Sun" : 
                   language === "ru" ? "10 месяцев солнца" :
                   language === "uk" ? "10 місяців сонця" :
                   language === "ar" ? "10 أشهر شمس" :
                   language === "hr" ? "10 mjeseci sunca" :
                   "10 Ay Güneş"}
                </span>
              </div>
              <div className="text-lg font-bold text-primary">
                = {language === "de" ? "Kostenlose Energie!" : 
                   language === "en" ? "Free Energy!" : 
                   language === "ru" ? "Бесплатная энергия!" :
                   language === "uk" ? "Безкоштовна енергія!" :
                   language === "ar" ? "طاقة مجانية!" :
                   language === "hr" ? "Besplatna energija!" :
                   "Bedava Enerji!"}
              </div>
            </div>
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-problems">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.problemTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.problemSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.problems.map((problem, index) => (
              <Card key={index} className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent" data-testid={`card-problem-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-gradient-to-b from-orange-500/10 to-background" data-testid="section-solution">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-orange-500/20 border-orange-500/30">
              <Flame className="w-4 h-4 mr-2" />
              Vaillant
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.solutionTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{c.solutionSubtitle}</p>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{c.benefitsTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.benefits.map((benefit, index) => (
              <Card key={index} className="border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-background" data-testid="section-work-gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={heatpumpDetailImage} 
                alt={{
                  tr: "089 Bayern Vaillant ısı pompası teknik detay ve kurulum Antalya villasında Alman kalitesi",
                  de: "089 Bayern Vaillant Wärmepumpe technisches Detail und Installation in Antalya Villa deutsche Qualität",
                  en: "089 Bayern Vaillant heat pump technical detail and installation in Antalya villa German quality",
                  ru: "089 Bayern технические детали и установка теплового насоса Vaillant на вилле в Анталии немецкое качество",
                  uk: "089 Bayern технічні деталі та встановлення теплового насоса Vaillant на віллі в Анталії німецька якість",
                  ar: "089 Bayern تفاصيل تقنية ومضخة حرارية Vaillant وتركيب في فيلا أنطاليا جودة ألمانية",
                  hr: "089 Bayern Vaillant toplinska pumpa tehnički detalji i instalacija u vili Antalya njemačka kvaliteta"
                }[language] || "089 Bayern Vaillant heat pump installation Antalya villa"} 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                data-testid="img-heatpump-detail"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={heatpumpConsultationImage} 
                alt={{
                  tr: "089 Bayern enerji danışmanı Vaillant ısı pompası sistemi hakkında müşteriye bilgi veriyor",
                  de: "089 Bayern Energieberater erklärt Vaillant Wärmepumpensystem dem Kunden in der Türkei",
                  en: "089 Bayern energy consultant explaining Vaillant heat pump system to customer in Turkey",
                  ru: "089 Bayern энергетический консультант объясняет систему теплового насоса Vaillant клиенту в Турции",
                  uk: "089 Bayern енергетичний консультант пояснює систему теплового насоса Vaillant клієнту в Туреччині",
                  ar: "089 Bayern مستشار طاقة يشرح نظام مضخة الحرارة Vaillant للعميل في تركيا",
                  hr: "089 Bayern energetski konzultant objašnjava Vaillant sustav toplinske pumpe klijentu u Turskoj"
                }[language] || "089 Bayern heat pump consultation Turkey"} 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                data-testid="img-heatpump-consultation"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.howItWorksTitle}</h2>
            <p className="text-lg text-muted-foreground mb-6">{c.howItWorksSubtitle}</p>
            <p className="text-foreground max-w-3xl mx-auto">{c.howItWorksText}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {c.steps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="text-6xl font-bold text-orange-500/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {index < c.steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-orange-500/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-background" data-testid="section-comparison">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.comparisonTitle}</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {c.comparisonHeaders.map((header, i) => (
                    <th key={i} className={`py-4 px-4 text-left font-semibold ${i === 1 ? "text-orange-500" : i === 2 ? "text-muted-foreground" : ""}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{row[0]}</td>
                    <td className="py-4 px-4 text-orange-500 font-semibold">{row[1]}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-trust">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.trustTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.trustSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.trustPoints.map((point, index) => (
              <Card key={index} className="text-center border-border/50" data-testid={`card-trust-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-background" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.testimonialTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.faqTitle}</h2>
          </div>
          
          <div className="space-y-4">
            {c.faqs.map((faq, index) => (
              <Card key={index} className="border-border/50" data-testid={`card-faq-${index}`}>
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                    data-testid={`button-faq-${index}`}
                  >
                    <span className="font-semibold text-foreground">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      <LinkedText text={faq.a} language={language} />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TrustCallToAction />
      <CrossLinks currentPage="isi-pompasi" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
