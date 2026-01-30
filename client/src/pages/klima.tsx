import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Snowflake, Check, ArrowRight, Shield, Clock, Zap, TrendingUp, Leaf, Award, Phone, ChevronDown, ChevronUp, Star, Users, ThumbsUp, Calculator, Wind, Thermometer } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CrossLinks from "@/components/CrossLinks";
import TrustCallToAction from "@/components/TrustCallToAction";
import SectionCTA from "@/components/SectionCTA";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { LinkedText } from "@/components/LinkedText";
import heroImage from "@assets/images/optimized/hero-climate.jpg";
import climateIndoorImage from "@assets/images/optimized/climate-indoor-unit.jpg";
import climateOutdoorImage from "@assets/images/optimized/climate-outdoor-install.jpg";

export default function Klima() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const goToContact = () => {
    setIsLeadFormOpen(true);
  };

  const content = {
    tr: {
      badge: "Samsung Klima Yetkili Bayi",
      heroTitle: "Akdeniz Sıcağında",
      heroHighlight: "Ferah Bir Yaşam",
      heroSubtitle: "Antalya'nın kavurucu yazlarında bile evinizde bahar havası. Samsung inverter klimalar ile hem serinleyin hem de elektrik faturanızdan tasarruf edin. Akıllı teknoloji, sessiz çalışma, üstün konfor.",
      ctaButton: "Ücretsiz Keşif Al",
      ctaSecondary: "Hemen Arayın",
      
      problemTitle: "Bu Sorunları Yaşıyor musunuz?",
      problemSubtitle: "Eski veya yanlış seçilmiş klimaların getirdiği sorunlar",
      problems: [
        { title: "Astronomik Elektrik Faturaları", desc: "Eski klimanız yazın elektrik faturanızı 2.000₺'nin üzerine çıkarıyor. Serinlemek için servet ödüyorsunuz." },
        { title: "Gürültü ve Rahatsızlık", desc: "Klimanız o kadar gürültülü ki gece uyanıyorsunuz. Misafirlerinizle sohbet edemiyorsunuz." },
        { title: "Dengesiz Soğutma", desc: "Bir oda buz gibi olurken diğeri sıcak kalıyor. Sürekli ayar yapmak zorunda kalıyorsunuz." },
        { title: "Sağlık Endişeleri", desc: "Kuru hava, boğaz ağrısı, baş ağrısı... Klimanız sizi hasta mı ediyor?" },
      ],
      
      solutionTitle: "Çözüm: Samsung Inverter Klima Sistemleri",
      solutionSubtitle: "Akıllı sensörler, sessiz çalışma, maksimum verimlilik",
      
      benefitsTitle: "Samsung Klima Avantajları",
      benefits: [
        { icon: TrendingUp, title: "%60 Enerji Tasarrufu", desc: "Inverter teknolojisi ile eski klimlara göre %60 daha az elektrik tüketimi. İlk faturada farkı görün." },
        { icon: Wind, title: "WindFree Teknolojisi", desc: "23.000 mikro delikten yumuşak hava akışı. Doğrudan rüzgar yok, sadece serin konfor." },
        { icon: Thermometer, title: "AI Oto Kontrol", desc: "Yapay zeka odanızı analiz eder, en ideal sıcaklığı otomatik ayarlar. Siz hiçbir şey yapmayın." },
        { icon: Shield, title: "Bakteri ve Virüs Filtresi", desc: "PM 1.0 filtresi ile havadaki zararlı partikülleri %99.9 oranında temizler." },
        { icon: Clock, title: "Sessiz Çalışma", desc: "16 dB iç ünite sesi - yaprak hışırtısından bile sessiz. Gece huzurla uyuyun." },
        { icon: Leaf, title: "Çevre Dostu", desc: "R32 soğutucu gaz ile düşük çevre etkisi. Geleceğe yatırım." },
      ],
      
      systemTypesTitle: "Hangi Sistem Size Uygun?",
      systemTypes: [
        { 
          title: "Split Klima", 
          desc: "Tek oda için ideal. Yatak odası, salon veya ofis.", 
          ideal: "1-2 Oda",
          features: ["Kolay kurulum", "Uygun fiyat", "Verimli soğutma"]
        },
        { 
          title: "Multi Split Sistem", 
          desc: "Tek dış ünite ile birden fazla odayı soğutun.", 
          ideal: "3-5 Oda",
          features: ["Tek dış ünite", "Merkezi kontrol", "Estetik görünüm"]
        },
        { 
          title: "VRF Sistem", 
          desc: "Büyük villalar ve ticari alanlar için profesyonel çözüm.", 
          ideal: "Büyük Alanlar",
          features: ["Merkezi yönetim", "Zon bazlı kontrol", "Maksimum verim"]
        },
      ],
      
      howItWorksTitle: "Kurulum Süreci",
      howItWorksSubtitle: "Hızlı ve profesyonel kurulum",
      steps: [
        { step: "01", title: "Ücretsiz Keşif", desc: "Uzmanlarımız evinizi ziyaret eder, ihtiyaç analizi yapar, en uygun sistemi belirler." },
        { step: "02", title: "Sistem Seçimi", desc: "Oda sayısı, metrekare ve bütçenize göre ideal Samsung modeli belirlenir." },
        { step: "03", title: "Profesyonel Kurulum", desc: "Samsung sertifikalı ekibimiz aynı gün kurulumu tamamlar. Temiz iş, profesyonel sonuç." },
        { step: "04", title: "Konfor Başlasın", desc: "Klimanız çalışmaya başlar. 5 yıl garanti, 2 yıl ücretsiz bakım." },
      ],
      
      trustTitle: "Neden 089 Bayern & Samsung?",
      trustSubtitle: "Güvenilir marka, deneyimli ekip",
      trustPoints: [
        { icon: Award, title: "Samsung Yetkili Bayi", desc: "Türkiye'nin en deneyimli Samsung klima kurulum ekiplerinden biri" },
        { icon: Users, title: "1000+ Kurulum", desc: "Akdeniz bölgesinde 1000+ başarılı klima kurulumu" },
        { icon: ThumbsUp, title: "%99 Memnuniyet", desc: "Müşterilerimizin %99'u memnun ve tavsiye ediyor" },
        { icon: Shield, title: "5 Yıl Garanti", desc: "Samsung fabrika garantisi + 089 Bayern işçilik garantisi" },
      ],
      
      testimonialTitle: "Müşterilerimiz Ne Diyor?",
      testimonials: [
        { name: "Zeynep A.", location: "Alanya", quote: "Eski klimamız yazda 1.800₺ elektrik yakıyordu. Samsung WindFree ile 700₺'ye düştü. Hem sessiz hem tasarruflu.", rating: 5 },
        { name: "Michael R.", location: "Kemer", quote: "Die deutsche Qualität der Installation hat mich überzeugt. Das Samsung-System läuft perfekt und ist unglaublich leise.", rating: 5 },
        { name: "Hüseyin K.", location: "Antalya", quote: "4 odalı villama multi split sistem kuruldu. Her oda bağımsız kontrol edilebiliyor. Mükemmel!", rating: 5 },
      ],
      
      faqTitle: "Sık Sorulan Sorular",
      faqs: [
        { q: "Inverter klima normal klimadan ne farkı var?", a: "Normal klima sürekli aç-kapat yapar ve enerji harcar. Inverter klima ise istenen sıcaklığa ulaşınca yavaşlar ama kapanmaz. Bu sayede %60 daha az enerji harcar ve oda sıcaklığı sabit kalır." },
        { q: "Kaç metrekare için hangi kapasiteyi seçmeliyim?", a: "Genel kural: Her 12-15m² için 1 kW (9000 BTU). Ancak yalıtım, güneş ışığı, kat gibi faktörler de önemli. Ücretsiz keşifte tam hesaplama yapıyoruz." },
        { q: "Kurulum ne kadar sürer?", a: "Standart split klima kurulumu 2-4 saat. Multi split sistemler 1 gün. VRF sistemler 2-3 gün sürebilir." },
        { q: "Kışın ısıtma yapabilir mi?", a: "Evet! Modern inverter klimalar -15°C'ye kadar verimli ısıtma yapar. Antalya'nın ılık kışlarında harika çalışır." },
        { q: "Bakım gerektirir mi?", a: "Yılda 2 kez filtre temizliği tavsiye edilir. Biz 2 yıl ücretsiz bakım hizmeti sunuyoruz." },
        { q: "Güneş paneli ile çalışabilir mi?", a: "Kesinlikle! Güneş paneli elektriği ile klimanızı çalıştırarak neredeyse bedava serinlik elde edersiniz." },
      ],
      
      urgencyTitle: "Yaz Gelmeden Kurulumu Tamamlayın",
      urgencySubtitle: "Yaz aylarında kurulum talebi yoğunlaşıyor",
      urgencyText: "Her yıl yaz geldiğinde klima talebi patlar ve bekleme süreleri uzar. Şimdi kurulum yaptırın, yaza hazır girin. Kampanyalı fiyatlardan yararlanın.",
      
      finalCta: "Ücretsiz Keşif Randevusu Alın",
      finalCtaDesc: "Evinize özel klima çözümü - hiçbir yükümlülük olmadan",
    },
    de: {
      badge: "Samsung Klima Vertragshändler",
      heroTitle: "Angenehmes Leben",
      heroHighlight: "In der Mittelmeerhitze",
      heroSubtitle: "Selbst in den heißesten Sommern von Antalya herrscht in Ihrem Zuhause Frühlingsluft. Mit Samsung Inverter-Klimaanlagen kühlen Sie und sparen gleichzeitig bei der Stromrechnung.",
      ctaButton: "Kostenlose Besichtigung",
      ctaSecondary: "Jetzt Anrufen",
      
      problemTitle: "Haben Sie diese Probleme?",
      problemSubtitle: "Probleme durch alte oder falsch gewählte Klimaanlagen",
      problems: [
        { title: "Astronomische Stromrechnungen", desc: "Ihre alte Klimaanlage treibt die Stromrechnung im Sommer auf über 2.000₺. Sie zahlen ein Vermögen zum Kühlen." },
        { title: "Lärm und Unbehagen", desc: "Ihre Klimaanlage ist so laut, dass Sie nachts aufwachen. Sie können sich nicht mit Gästen unterhalten." },
        { title: "Ungleichmäßige Kühlung", desc: "Ein Raum ist eiskalt, während der andere heiß bleibt. Sie müssen ständig nachregulieren." },
        { title: "Gesundheitsbedenken", desc: "Trockene Luft, Halsschmerzen, Kopfschmerzen... Macht Ihre Klimaanlage Sie krank?" },
      ],
      
      solutionTitle: "Die Lösung: Samsung Inverter-Klimasysteme",
      solutionSubtitle: "Intelligente Sensoren, leiser Betrieb, maximale Effizienz",
      
      benefitsTitle: "Vorteile der Samsung Klimaanlage",
      benefits: [
        { icon: TrendingUp, title: "60% Energieersparnis", desc: "Mit Inverter-Technologie 60% weniger Stromverbrauch als alte Klimaanlagen." },
        { icon: Wind, title: "WindFree-Technologie", desc: "Sanfter Luftstrom durch 23.000 Mikrolöcher. Kein direkter Wind, nur kühler Komfort." },
        { icon: Thermometer, title: "AI Automatik", desc: "KI analysiert Ihren Raum, stellt automatisch die ideale Temperatur ein." },
        { icon: Shield, title: "Bakterien- & Virenfilter", desc: "PM 1.0 Filter entfernt 99,9% der schädlichen Partikel aus der Luft." },
        { icon: Clock, title: "Leiser Betrieb", desc: "16 dB Innengeräusch - leiser als Blätterrascheln. Schlafen Sie nachts ruhig." },
        { icon: Leaf, title: "Umweltfreundlich", desc: "R32 Kältemittel mit geringer Umweltbelastung. Eine Investition in die Zukunft." },
      ],
      
      systemTypesTitle: "Welches System passt zu Ihnen?",
      systemTypes: [
        { 
          title: "Split-Klimaanlage", 
          desc: "Ideal für einen Raum. Schlafzimmer, Wohnzimmer oder Büro.", 
          ideal: "1-2 Räume",
          features: ["Einfache Installation", "Günstiger Preis", "Effiziente Kühlung"]
        },
        { 
          title: "Multi-Split-System", 
          desc: "Kühlen Sie mehrere Räume mit einer Außeneinheit.", 
          ideal: "3-5 Räume",
          features: ["Eine Außeneinheit", "Zentrale Steuerung", "Ästhetisches Erscheinungsbild"]
        },
        { 
          title: "VRF-System", 
          desc: "Professionelle Lösung für große Villen und Gewerberäume.", 
          ideal: "Große Flächen",
          features: ["Zentrales Management", "Zonensteuerung", "Maximale Effizienz"]
        },
      ],
      
      howItWorksTitle: "Installationsprozess",
      howItWorksSubtitle: "Schnelle und professionelle Installation",
      steps: [
        { step: "01", title: "Kostenlose Besichtigung", desc: "Unsere Experten besuchen Ihr Haus, analysieren den Bedarf, bestimmen das beste System." },
        { step: "02", title: "Systemauswahl", desc: "Das ideale Samsung-Modell wird basierend auf Raumzahl, Quadratmeter und Budget bestimmt." },
        { step: "03", title: "Professionelle Installation", desc: "Unser Samsung-zertifiziertes Team schließt die Installation am selben Tag ab." },
        { step: "04", title: "Komfort beginnt", desc: "Ihre Klimaanlage beginnt zu arbeiten. 5 Jahre Garantie, 2 Jahre kostenlose Wartung." },
      ],
      
      trustTitle: "Warum 089 Bayern & Samsung?",
      trustSubtitle: "Zuverlässige Marke, erfahrenes Team",
      trustPoints: [
        { icon: Award, title: "Samsung Vertragshändler", desc: "Eines der erfahrensten Samsung-Klimainstallationsteams in der Türkei" },
        { icon: Users, title: "1000+ Installationen", desc: "1000+ erfolgreiche Klimainstallationen in der Mittelmeerregion" },
        { icon: ThumbsUp, title: "99% Zufriedenheit", desc: "99% unserer Kunden sind zufrieden und empfehlen uns weiter" },
        { icon: Shield, title: "5 Jahre Garantie", desc: "Samsung Werksgarantie + 089 Bayern Installationsgarantie" },
      ],
      
      testimonialTitle: "Was unsere Kunden sagen",
      testimonials: [
        { name: "Zeynep A.", location: "Alanya", quote: "Unsere alte Klimaanlage verbrauchte im Sommer 1.800₺ Strom. Mit Samsung WindFree sind es nur noch 700₺. Leise und sparsam.", rating: 5 },
        { name: "Michael R.", location: "Kemer", quote: "Die deutsche Qualität der Installation hat mich überzeugt. Das Samsung-System läuft perfekt und ist unglaublich leise.", rating: 5 },
        { name: "Hüseyin K.", location: "Antalya", quote: "Multi-Split-System für meine 4-Zimmer-Villa installiert. Jeder Raum kann unabhängig gesteuert werden. Perfekt!", rating: 5 },
      ],
      
      faqTitle: "Häufig gestellte Fragen",
      faqs: [
        { q: "Was ist der Unterschied zwischen Inverter und normaler Klimaanlage?", a: "Normale Klimaanlagen schalten ständig ein und aus und verbrauchen Energie. Inverter-Klimaanlagen verlangsamen sich bei Erreichen der gewünschten Temperatur, schalten aber nicht ab. Dadurch sparen sie 60% Energie." },
        { q: "Welche Kapazität sollte ich für wie viele Quadratmeter wählen?", a: "Faustregel: 1 kW (9000 BTU) pro 12-15m². Faktoren wie Isolierung, Sonnenlicht, Etage sind auch wichtig. Bei der kostenlosen Besichtigung machen wir eine genaue Berechnung." },
        { q: "Wie lange dauert die Installation?", a: "Standard-Split-Klimaanlage: 2-4 Stunden. Multi-Split-Systeme: 1 Tag. VRF-Systeme können 2-3 Tage dauern." },
        { q: "Kann sie im Winter heizen?", a: "Ja! Moderne Inverter-Klimaanlagen heizen effizient bis -15°C. Funktioniert hervorragend in Antalyas milden Wintern." },
        { q: "Erfordert sie Wartung?", a: "2x jährliche Filterreinigung wird empfohlen. Wir bieten 2 Jahre kostenlose Wartung an." },
        { q: "Kann sie mit Solaranlagen betrieben werden?", a: "Absolut! Mit Solarstrom betreiben Sie Ihre Klimaanlage und erhalten nahezu kostenlose Kühlung." },
      ],
      
      urgencyTitle: "Installation vor dem Sommer abschließen",
      urgencySubtitle: "Im Sommer steigt die Installationsnachfrage",
      urgencyText: "Jedes Jahr im Sommer explodiert die Klimanachfrage und Wartezeiten verlängern sich. Installieren Sie jetzt, seien Sie auf den Sommer vorbereitet.",
      
      finalCta: "Kostenlosen Besichtigungstermin vereinbaren",
      finalCtaDesc: "Maßgeschneiderte Klimalösung für Ihr Zuhause - ohne Verpflichtung",
    },
    en: {
      badge: "Samsung Climate Authorized Dealer",
      heroTitle: "Comfortable Living",
      heroHighlight: "In Mediterranean Heat",
      heroSubtitle: "Even in Antalya's scorching summers, enjoy spring-like air in your home. With Samsung inverter air conditioners, stay cool while saving on electricity bills. Smart technology, quiet operation, superior comfort.",
      ctaButton: "Free Survey",
      ctaSecondary: "Call Now",
      
      problemTitle: "Are You Experiencing These Problems?",
      problemSubtitle: "Problems caused by old or wrongly chosen air conditioners",
      problems: [
        { title: "Astronomical Electricity Bills", desc: "Your old AC drives your summer electricity bill above 2,000₺. You're paying a fortune to stay cool." },
        { title: "Noise and Discomfort", desc: "Your AC is so loud you wake up at night. You can't have conversations with guests." },
        { title: "Uneven Cooling", desc: "One room is freezing while another stays hot. You constantly need to adjust settings." },
        { title: "Health Concerns", desc: "Dry air, sore throat, headaches... Is your AC making you sick?" },
      ],
      
      solutionTitle: "The Solution: Samsung Inverter Climate Systems",
      solutionSubtitle: "Smart sensors, quiet operation, maximum efficiency",
      
      benefitsTitle: "Samsung AC Advantages",
      benefits: [
        { icon: TrendingUp, title: "60% Energy Savings", desc: "With inverter technology, 60% less electricity consumption than old ACs. See the difference on your first bill." },
        { icon: Wind, title: "WindFree Technology", desc: "Gentle air flow through 23,000 micro holes. No direct wind, just cool comfort." },
        { icon: Thermometer, title: "AI Auto Control", desc: "AI analyzes your room, automatically sets the ideal temperature. You don't need to do anything." },
        { icon: Shield, title: "Bacteria & Virus Filter", desc: "PM 1.0 filter removes 99.9% of harmful particles from the air." },
        { icon: Clock, title: "Quiet Operation", desc: "16 dB indoor unit noise - quieter than rustling leaves. Sleep peacefully at night." },
        { icon: Leaf, title: "Eco-Friendly", desc: "R32 refrigerant with low environmental impact. An investment in the future." },
      ],
      
      systemTypesTitle: "Which System Suits You?",
      systemTypes: [
        { 
          title: "Split AC", 
          desc: "Ideal for single room. Bedroom, living room or office.", 
          ideal: "1-2 Rooms",
          features: ["Easy installation", "Affordable price", "Efficient cooling"]
        },
        { 
          title: "Multi Split System", 
          desc: "Cool multiple rooms with a single outdoor unit.", 
          ideal: "3-5 Rooms",
          features: ["Single outdoor unit", "Central control", "Aesthetic appearance"]
        },
        { 
          title: "VRF System", 
          desc: "Professional solution for large villas and commercial spaces.", 
          ideal: "Large Areas",
          features: ["Central management", "Zone control", "Maximum efficiency"]
        },
      ],
      
      howItWorksTitle: "Installation Process",
      howItWorksSubtitle: "Fast and professional installation",
      steps: [
        { step: "01", title: "Free Survey", desc: "Our experts visit your home, analyze needs, determine the best system." },
        { step: "02", title: "System Selection", desc: "The ideal Samsung model is determined based on room count, square meters and budget." },
        { step: "03", title: "Professional Installation", desc: "Our Samsung-certified team completes installation the same day. Clean work, professional results." },
        { step: "04", title: "Comfort Begins", desc: "Your AC starts working. 5 year warranty, 2 years free maintenance." },
      ],
      
      trustTitle: "Why 089 Bayern & Samsung?",
      trustSubtitle: "Reliable brand, experienced team",
      trustPoints: [
        { icon: Award, title: "Samsung Authorized Dealer", desc: "One of the most experienced Samsung AC installation teams in Turkey" },
        { icon: Users, title: "1000+ Installations", desc: "1000+ successful AC installations in the Mediterranean region" },
        { icon: ThumbsUp, title: "99% Satisfaction", desc: "99% of our customers are satisfied and recommend us" },
        { icon: Shield, title: "5 Year Warranty", desc: "Samsung factory warranty + 089 Bayern workmanship warranty" },
      ],
      
      testimonialTitle: "What Our Customers Say",
      testimonials: [
        { name: "Zeynep A.", location: "Alanya", quote: "Our old AC used 1,800₺ electricity in summer. With Samsung WindFree it dropped to 700₺. Quiet and economical.", rating: 5 },
        { name: "Michael R.", location: "Kemer", quote: "The German quality of installation convinced me. The Samsung system runs perfectly and is incredibly quiet.", rating: 5 },
        { name: "Hüseyin K.", location: "Antalya", quote: "Multi split system installed for my 4-room villa. Each room can be controlled independently. Perfect!", rating: 5 },
      ],
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "What's the difference between inverter and regular AC?", a: "Regular AC constantly turns on and off, wasting energy. Inverter AC slows down when reaching desired temperature but doesn't turn off. This saves 60% energy and keeps room temperature stable." },
        { q: "What capacity should I choose for my space?", a: "General rule: 1 kW (9000 BTU) per 12-15m². However, factors like insulation, sunlight, and floor level also matter. We do exact calculations during the free survey." },
        { q: "How long does installation take?", a: "Standard split AC: 2-4 hours. Multi split systems: 1 day. VRF systems can take 2-3 days." },
        { q: "Can it heat in winter?", a: "Yes! Modern inverter ACs heat efficiently down to -15°C. Works great in Antalya's mild winters." },
        { q: "Does it require maintenance?", a: "2x yearly filter cleaning is recommended. We offer 2 years free maintenance." },
        { q: "Can it work with solar panels?", a: "Absolutely! Running your AC with solar electricity gives you nearly free cooling." },
      ],
      
      urgencyTitle: "Complete Installation Before Summer",
      urgencySubtitle: "Installation demand increases in summer months",
      urgencyText: "Every year when summer comes, AC demand explodes and waiting times extend. Install now, be ready for summer. Take advantage of campaign prices.",
      
      finalCta: "Book Your Free Survey Appointment",
      finalCtaDesc: "Custom AC solution for your home - no obligation",
    },
  };

  const c = content[language as keyof typeof content] || content.tr;
  const isRtl = language === "ar";

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-klima">
      <SEOHead page="systeme" />
      <Header onCtaClick={goToContact} />
      
      <section className="relative pt-20 pb-16 overflow-hidden" data-testid="section-climate-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-sky-500/20 backdrop-blur-md border-sky-500/30 text-sky-300">
              <Snowflake className="w-4 h-4 mr-2" />
              {c.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {c.heroTitle}{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-sky-500 to-blue-600 border-0 shadow-lg shadow-sky-500/30 px-8"
                data-testid="button-climate-cta"
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
                  data-testid="button-climate-phone-tr"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  TR +90 507 183 2036
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-amber-400/50 text-white bg-black/30 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "tel:+491735994699"}
                  data-testid="button-climate-phone-de"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  DE +49 173 5994699
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-green-400/50 text-white bg-green-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.open("https://wa.me/491735994699", "_blank")}
                  data-testid="button-climate-whatsapp"
                >
                  WhatsApp
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-blue-400/50 text-white bg-blue-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "mailto:info@089bayern.com"}
                  data-testid="button-climate-email"
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
              <div className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 rounded-lg border border-sky-500/30">
                <Snowflake className="w-5 h-5 text-sky-500" />
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

      <section className="py-8 md:py-10 bg-gradient-to-b from-sky-500/10 to-background" data-testid="section-solution">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-sky-500/20 border-sky-500/30">
              <Snowflake className="w-4 h-4 mr-2" />
              Samsung
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.solutionTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{c.solutionSubtitle}</p>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{c.benefitsTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.benefits.map((benefit, index) => (
              <Card key={index} className="border-sky-500/20 bg-gradient-to-br from-sky-500/5 to-transparent" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-sky-500/30">
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
                src={climateIndoorImage} 
                alt={{
                  tr: "089 Bayern Samsung WindFree klima iç ünite kurulumu Akdeniz villasında enerji tasarrufu",
                  de: "089 Bayern Samsung WindFree Klimaanlage Innengerät Installation in Mittelmeer-Villa Energieeinsparung",
                  en: "089 Bayern Samsung WindFree air conditioning indoor unit installation Mediterranean villa energy saving",
                  ru: "089 Bayern установка внутреннего блока кондиционера Samsung WindFree на средиземноморской вилле энергосбережение",
                  uk: "089 Bayern встановлення внутрішнього блоку кондиціонера Samsung WindFree на середземноморській віллі енергозбереження",
                  ar: "089 Bayern تركيب وحدة تكييف Samsung WindFree الداخلية في فيلا البحر المتوسط توفير الطاقة",
                  hr: "089 Bayern Samsung WindFree klima uređaj unutarnja jedinica instalacija u mediteranskoj vili ušteda energije"
                }[language] || "089 Bayern Samsung climate indoor unit installation"} 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                data-testid="img-climate-indoor"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={climateOutdoorImage} 
                alt={{
                  tr: "089 Bayern Samsung klima dış ünite montajı profesyonel ekip tarafından Antalya",
                  de: "089 Bayern Samsung Klimaanlage Außengerät Montage durch professionelles Team Antalya",
                  en: "089 Bayern Samsung air conditioning outdoor unit installation by professional team Antalya",
                  ru: "089 Bayern установка наружного блока кондиционера Samsung профессиональной командой Анталия",
                  uk: "089 Bayern встановлення зовнішнього блоку кондиціонера Samsung професійною командою Анталія",
                  ar: "089 Bayern تركيب وحدة التكييف الخارجية Samsung بواسطة فريق محترف أنطاليا",
                  hr: "089 Bayern Samsung klima uređaj vanjska jedinica montaža od strane profesionalnog tima Antalya"
                }[language] || "089 Bayern Samsung climate outdoor unit installation Antalya"} 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                data-testid="img-climate-outdoor"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-system-types">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.systemTypesTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.systemTypes.map((system, index) => (
              <Card key={index} className="border-sky-500/20" data-testid={`card-system-${index}`}>
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-sky-500/20 text-sky-600 border-sky-500/30">{system.ideal}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">{system.title}</h3>
                  <p className="text-muted-foreground mb-4">{system.desc}</p>
                  <ul className="space-y-2">
                    {system.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-sky-500" />
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

      <section className="py-8 md:py-10 bg-background" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.howItWorksTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.howItWorksSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="text-6xl font-bold text-sky-500/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {index < c.steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-sky-500/50" />
                )}
              </div>
            ))}
          </div>
          <SectionCTA />
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
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
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
                      <Star key={i} className="w-5 h-5 fill-sky-400 text-sky-400" />
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

      <section className="py-8 md:py-10 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-sky-500/20" data-testid="section-urgency">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.urgencyTitle}</h2>
          <p className="text-lg text-muted-foreground mb-6">{c.urgencySubtitle}</p>
          <p className="text-foreground mb-8 max-w-2xl mx-auto">{c.urgencyText}</p>
          
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-sky-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-2">{c.finalCta}</h3>
            <p className="text-muted-foreground mb-6">{c.finalCtaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <Button 
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 border-0 shadow-lg shadow-sky-500/30 px-8"
                data-testid="button-final-cta"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {c.ctaButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.location.href = "tel:+491735994699"}
                data-testid="button-final-phone-de"
              >
                <Phone className="w-4 h-4 mr-2" />
                +49 173 5994699
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-500/50 bg-green-500/10" 
                onClick={() => window.open("https://wa.me/491735994699", "_blank")}
                data-testid="button-final-whatsapp"
              >
                WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500/50 bg-blue-500/10" 
                onClick={() => window.location.href = "mailto:info@089bayern.com"}
                data-testid="button-final-email"
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustCallToAction />
      <CrossLinks currentPage="klima" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
