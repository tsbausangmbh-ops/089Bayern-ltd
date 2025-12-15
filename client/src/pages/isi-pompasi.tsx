import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Check, ArrowRight, Shield, Clock, Zap, TrendingUp, Leaf, Award, Phone, ChevronDown, ChevronUp, Star, Users, ThumbsUp, Calculator, Thermometer, Home } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function IsiPompasi() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToCalculator = () => {
    setLocation("/rechner");
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
  };

  const c = content[language as keyof typeof content] || content.tr;
  const isRtl = language === "ar";

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-isi-pompasi">
      <SEOHead page="systeme" />
      <Header onCtaClick={scrollToCalculator} />
      
      <section className="relative pt-20 pb-16 overflow-hidden" data-testid="section-heatpump-hero">
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
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCalculator}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 border-0 shadow-lg shadow-orange-500/30 px-8"
                data-testid="button-heatpump-cta"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {c.ctaButton}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8" 
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-heatpump-phone"
              >
                <Phone className="w-5 h-5 mr-2" />
                {c.ctaSecondary}
              </Button>
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
                   "089 Bayern 4in1 Sisteminin Parçası"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "de" ? "Kühlen + Heizen + Speichern + Energie & Warmwasser = EINE Lösung" : 
                   language === "en" ? "Cooling + Heating + Storage + Energy & Hot Water = ONE Solution" : 
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
                   "10 Ay Güneş"}
                </span>
              </div>
              <div className="text-lg font-bold text-primary">
                = {language === "de" ? "Kostenlose Energie!" : 
                   language === "en" ? "Free Energy!" : 
                   "Bedava Enerji!"}
              </div>
            </div>
          </div>
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
                      {faq.a}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20" data-testid="section-urgency">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.urgencyTitle}</h2>
          <p className="text-lg text-muted-foreground mb-6">{c.urgencySubtitle}</p>
          <p className="text-foreground mb-8 max-w-2xl mx-auto">{c.urgencyText}</p>
          
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-orange-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-2">{c.finalCta}</h3>
            <p className="text-muted-foreground mb-6">{c.finalCtaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToCalculator}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 border-0 shadow-lg shadow-orange-500/30 px-8"
                data-testid="button-final-cta"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {c.ctaButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8" 
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-final-phone"
              >
                <Phone className="w-5 h-5 mr-2" />
                +90 507 183 2036
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
