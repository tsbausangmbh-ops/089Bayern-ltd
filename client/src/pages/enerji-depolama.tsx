import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Battery, Check, ArrowRight, Shield, Clock, Zap, TrendingUp, Leaf, Award, Phone, ChevronDown, ChevronUp, Star, Users, ThumbsUp, Calculator, Moon, Sun, BatteryCharging } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CrossLinks from "@/components/CrossLinks";
import TrustCallToAction from "@/components/TrustCallToAction";
import SectionCTA from "@/components/SectionCTA";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { LinkedText } from "@/components/LinkedText";
import heroImage from "@assets/images/webp/hero-battery-storage.webp";
import batterySystemImage from "@assets/images/webp/battery-system-installed.webp";
import batteryMonitoringImage from "@assets/images/webp/battery-monitoring.webp";

export default function EnerjiDepolama() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const goToContact = () => {
    setIsLeadFormOpen(true);
  };

  const content = {
    tr: {
      badge: "Alman Teknolojisi Enerji Depolama",
      heroTitle: "Güneş Battığında Bile",
      heroHighlight: "Enerjiniz Bitmesin",
      heroSubtitle: "Gündüz ürettiğiniz enerjiyi gece kullanın. 089 Bayern enerji depolama sistemleri ile elektrik kesintilerinden etkilenmeyin, faturalarınızı minimuma indirin ve tam enerji bağımsızlığına kavuşun.",
      ctaButton: "Ücretsiz Tasarruf Hesaplaması",
      ctaSecondary: "Hemen Arayın",
      
      problemTitle: "Bu Durumlar Size Tanıdık mı?",
      problemSubtitle: "Güneş paneli sahiplerinin çoğu aynı hayal kırıklığını yaşıyor",
      problems: [
        { title: "Gündüz Üret, Gece Satın Al", desc: "Gündüz ürettiğiniz fazla enerji şebekeye ucuza gidiyor, gece ise pahalı fiyatlarla elektrik satın alıyorsunuz." },
        { title: "Elektrik Kesintisi Kabusu", desc: "Her kesintide karanlıkta kalıyorsunuz. Buzdolabınız, klimanız, iş bilgisayarınız - hepsi duraksıyor." },
        { title: "Şebekeye Bağımlılık", desc: "Güneş paneliniz olsa bile şebekeye bağımlısınız. Tam enerji özgürlüğü hayal gibi görünüyor." },
        { title: "Boşa Giden Enerji", desc: "Öğle saatlerinde ürettiğiniz fazla enerji ziyan oluyor. O enerjiyi kullanamazsınız." },
      ],
      
      solutionTitle: "Çözüm: 089 Bayern Enerji Depolama Sistemi",
      solutionSubtitle: "Alman mühendisliği ile tasarlanmış, akıllı batarya sistemleri",
      
      benefitsTitle: "Size Sağladığımız Faydalar",
      benefits: [
        { icon: Moon, title: "Gece de Güneş Enerjisi", desc: "Gündüz ürettiğiniz enerjiyi depolayın, akşam ve gece kullanın. Şebekeye bağlı kalmadan yaşayın." },
        { icon: Shield, title: "Kesintisiz Güç", desc: "Elektrik kesintilerinde bile eviniz aydınlık. Buzdolabı, klima, internet - her şey çalışmaya devam eder." },
        { icon: TrendingUp, title: "%90'a Varan Tasarruf", desc: "Güneş paneli + batarya kombinasyonuyla elektrik faturanızı neredeyse sıfıra indirebilirsiniz." },
        { icon: Zap, title: "Akıllı Enerji Yönetimi", desc: "Yapay zeka destekli sistem, enerji tüketiminizi optimize eder. Ucuz saatlerde depolar, pahalı saatlerde kullanır." },
        { icon: BatteryCharging, title: "10.000+ Şarj Döngüsü", desc: "Premium LiFePO4 bataryalar 10 yıldan fazla dayanır. Günde 1 tam döngü ile 27+ yıl ömür." },
        { icon: Award, title: "Premium Markalar", desc: "BYD, LG Chem, Huawei - dünya çapında kanıtlanmış güvenilirlik ve performans." },
      ],
      
      howItWorksTitle: "Nasıl Çalışır?",
      howItWorksSubtitle: "Basit ama güçlü teknoloji",
      steps: [
        { step: "01", title: "Gündüz Depolama", desc: "Güneş panelleriniz gün boyunca enerji üretir. Fazla enerji bataryalara aktarılır." },
        { step: "02", title: "Akıllı Yönetim", desc: "Sistem anlık tüketimi, üretimi ve batarya durumunu izler. En verimli kullanımı sağlar." },
        { step: "03", title: "Gece Kullanım", desc: "Güneş battığında bataryadaki enerjiyi kullanırsınız. Şebekeden çekim minimum olur." },
        { step: "04", title: "Acil Durum Modu", desc: "Elektrik kesintisi olduğunda sistem anında devreye girer. Hiç kesinti yaşamazsınız." },
      ],
      
      trustTitle: "Neden 089 Bayern?",
      trustSubtitle: "Enerji depolama konusunda güvenilir partneriniz",
      trustPoints: [
        { icon: Star, title: "Alman Mühendisliği", desc: "Münih'ten Antalya'ya - Alman kalite standartları ve entegrasyon uzmanlığı" },
        { icon: Users, title: "Uzman Ekip", desc: "Batarya sistemleri konusunda özel eğitimli, sertifikalı teknisyenler" },
        { icon: ThumbsUp, title: "Entegrasyon Garantisi", desc: "Mevcut güneş sisteminizle mükemmel uyum garantisi" },
        { icon: Shield, title: "10 Yıl Garanti", desc: "Batarya performansı için kapsamlı, uzun süreli garanti" },
      ],
      
      testimonialTitle: "Müşterilerimiz Ne Diyor?",
      testimonials: [
        { name: "Osman Y.", location: "Antalya", quote: "Güneş panelim vardı ama gece hala yüksek fatura ödüyordum. Batarya sistemi ekledim, artık faturam 50₺ bile değil.", rating: 5 },
        { name: "Klaus B.", location: "Side", quote: "Die Kombination aus Solar und Speicher ist genial. Bei Stromausfällen merken wir nichts - alles läuft weiter.", rating: 5 },
        { name: "Fatma S.", location: "Belek", quote: "Yazın sık sık kesinti oluyordu. Artık buzdolabım için endişelenmiyorum, her şey çalışıyor.", rating: 5 },
      ],
      
      faqTitle: "Sık Sorulan Sorular",
      faqs: [
        { q: "Güneş panelim olmadan batarya kurabilir miyim?", a: "Evet, şebekeden şarj olan batarya sistemleri de mümkün. Ancak maksimum tasarruf için güneş paneli ile kombinasyon öneriyoruz." },
        { q: "Batarya ne kadar enerji depolar?", a: "Ev tipi sistemler genellikle 5kWh ile 20kWh arası kapasiteye sahip. Ortalama bir ev için 10kWh batarya, akşam/gece tüketimini rahatlıkla karşılar." },
        { q: "Batarya ömrü ne kadar?", a: "LiFePO4 teknolojisi ile 10.000+ şarj döngüsü, yani günlük kullanımda 27 yıldan fazla ömür. 10 yıl garanti veriyoruz." },
        { q: "Kesinti sırasında tüm evi besler mi?", a: "Batarya kapasitesine bağlı. Kritik yükleri (buzdolabı, aydınlatma, internet) saatlerce besleyebilir. Tam ev için büyük kapasite planlanır." },
        { q: "Mevcut güneş sistemime eklenebilir mi?", a: "Evet! Çoğu güneş paneli sistemine batarya eklenebilir. Ücretsiz keşifte uyumluluk kontrolü yapıyoruz." },
        { q: "Batarya güvenli mi, yangın riski var mı?", a: "LiFePO4 bataryalar en güvenli Li-ion teknolojisidir. Termal kaçak riski yoktur. Tüm sistemlerimiz Alman güvenlik standartlarında kurulur." },
      ],
      
      urgencyTitle: "Her Kesinti Bir Kayıptır",
      urgencySubtitle: "Her gün beklemek = her gün boşa giden enerji",
      urgencyText: "Gündüz ürettiğiniz fazla enerji şimdi şebekeye ucuza gidiyor. Batarya ile onu saklayın, gece kendiniz kullanın. Artık kesintilerde de konforlu kalın.",
      
      finalCta: "Ücretsiz Keşif Randevusu Alın",
      finalCtaDesc: "30 dakikalık ücretsiz danışmanlık ile tam enerji bağımsızlığınızı planlayın",
    },
    de: {
      badge: "Deutsche Technologie Energiespeicher",
      heroTitle: "Auch Wenn die Sonne Untergeht",
      heroHighlight: "Geht Ihre Energie Nicht Aus",
      heroSubtitle: "Nutzen Sie tagsüber produzierte Energie auch nachts. Mit 089 Bayern Energiespeichern sind Sie bei Stromausfällen geschützt, minimieren Ihre Rechnungen und erreichen vollständige Energieunabhängigkeit.",
      ctaButton: "Kostenlose Einsparungsberechnung",
      ctaSecondary: "Jetzt Anrufen",
      
      problemTitle: "Kommen Ihnen diese Situationen bekannt vor?",
      problemSubtitle: "Viele Solaranlagenbesitzer erleben dieselbe Enttäuschung",
      problems: [
        { title: "Tagsüber Produzieren, Nachts Kaufen", desc: "Ihr überschüssiger Tagesstrom geht günstig ins Netz, nachts kaufen Sie teuer ein." },
        { title: "Stromausfall-Albtraum", desc: "Bei jedem Ausfall stehen Sie im Dunkeln. Kühlschrank, Klimaanlage, Arbeitscomputer - alles stoppt." },
        { title: "Netzabhängigkeit", desc: "Trotz Solaranlage sind Sie netzabhängig. Vollständige Energiefreiheit scheint unmöglich." },
        { title: "Verschwendete Energie", desc: "Die Mittagsüberschüsse gehen verloren. Sie können diese Energie nicht nutzen." },
      ],
      
      solutionTitle: "Die Lösung: 089 Bayern Energiespeicher",
      solutionSubtitle: "Mit deutscher Ingenieurskunst entwickelte, intelligente Batteriesysteme",
      
      benefitsTitle: "Ihre Vorteile",
      benefits: [
        { icon: Moon, title: "Solarstrom auch Nachts", desc: "Speichern Sie tagsüber produzierte Energie, nutzen Sie sie abends und nachts. Leben Sie netzunabhängig." },
        { icon: Shield, title: "Unterbrechungsfreie Stromversorgung", desc: "Auch bei Stromausfällen bleibt Ihr Haus beleuchtet. Kühlschrank, Klima, Internet - alles läuft weiter." },
        { icon: TrendingUp, title: "Bis zu 90% Ersparnis", desc: "Mit der Kombination Solar + Batterie können Sie Ihre Stromrechnung fast auf null reduzieren." },
        { icon: Zap, title: "Intelligentes Energiemanagement", desc: "KI-gestütztes System optimiert Ihren Verbrauch. Speichert in günstigen Zeiten, nutzt in teuren." },
        { icon: BatteryCharging, title: "10.000+ Ladezyklen", desc: "Premium LiFePO4-Batterien halten über 10 Jahre. Bei einem Zyklus pro Tag über 27 Jahre Lebensdauer." },
        { icon: Award, title: "Premium-Marken", desc: "BYD, LG Chem, Huawei - weltweit bewährte Zuverlässigkeit und Leistung." },
      ],
      
      howItWorksTitle: "Wie funktioniert es?",
      howItWorksSubtitle: "Einfache aber kraftvolle Technologie",
      steps: [
        { step: "01", title: "Tagsüber Speichern", desc: "Ihre Solaranlage produziert den ganzen Tag Energie. Überschüsse werden in die Batterie geladen." },
        { step: "02", title: "Intelligentes Management", desc: "Das System überwacht Verbrauch, Produktion und Batteriestatus. Sichert optimale Nutzung." },
        { step: "03", title: "Nächtliche Nutzung", desc: "Nach Sonnenuntergang nutzen Sie Batteriestrom. Minimaler Netzbezug." },
        { step: "04", title: "Notfallmodus", desc: "Bei Stromausfall schaltet das System sofort um. Sie bemerken keine Unterbrechung." },
      ],
      
      trustTitle: "Warum 089 Bayern?",
      trustSubtitle: "Ihr verlässlicher Partner für Energiespeicher",
      trustPoints: [
        { icon: Star, title: "Deutsche Ingenieurskunst", desc: "Deutsche Qualitätsstandards und Integrationsexpertise - Standort Türkei, Antalya" },
        { icon: Users, title: "Expertenteam", desc: "Speziell geschulte, zertifizierte Techniker für Batteriesysteme" },
        { icon: ThumbsUp, title: "Integrationsgarantie", desc: "Garantierte perfekte Kompatibilität mit Ihrer bestehenden Solaranlage" },
        { icon: Shield, title: "10 Jahre Garantie", desc: "Umfassende, langfristige Garantie auf Batterieleistung" },
      ],
      
      testimonialTitle: "Was unsere Kunden sagen",
      testimonials: [
        { name: "Osman Y.", location: "Antalya", quote: "Ich hatte eine Solaranlage, zahlte aber nachts noch hohe Rechnungen. Mit dem Batteriesystem ist meine Rechnung jetzt unter 50₺.", rating: 5 },
        { name: "Klaus B.", location: "Side", quote: "Die Kombination aus Solar und Speicher ist genial. Bei Stromausfällen merken wir nichts - alles läuft weiter.", rating: 5 },
        { name: "Fatma S.", location: "Belek", quote: "Im Sommer gab es häufig Ausfälle. Jetzt mache ich mir keine Sorgen mehr um meinen Kühlschrank, alles funktioniert.", rating: 5 },
      ],
      
      faqTitle: "Häufig gestellte Fragen",
      faqs: [
        { q: "Kann ich eine Batterie ohne Solaranlage installieren?", a: "Ja, netzgespeiste Batteriesysteme sind möglich. Für maximale Ersparnis empfehlen wir jedoch die Kombination mit Solar." },
        { q: "Wie viel Energie speichert die Batterie?", a: "Haushaltssysteme haben typischerweise 5-20 kWh Kapazität. Für einen durchschnittlichen Haushalt deckt eine 10kWh-Batterie den Abend-/Nachtverbrauch problemlos ab." },
        { q: "Wie lange hält die Batterie?", a: "Mit LiFePO4-Technologie über 10.000 Ladezyklen, also bei täglicher Nutzung über 27 Jahre. Wir geben 10 Jahre Garantie." },
        { q: "Versorgt sie das ganze Haus bei einem Ausfall?", a: "Abhängig von der Kapazität. Kritische Lasten (Kühlschrank, Beleuchtung, Internet) werden stundenlang versorgt. Für das ganze Haus planen wir größere Kapazitäten." },
        { q: "Kann sie zu meiner bestehenden Solaranlage hinzugefügt werden?", a: "Ja! Die meisten Solaranlagen können mit Batterien erweitert werden. Bei der kostenlosen Besichtigung prüfen wir die Kompatibilität." },
        { q: "Ist die Batterie sicher, besteht Brandgefahr?", a: "LiFePO4-Batterien sind die sicherste Li-Ionen-Technologie. Kein thermisches Durchgehen möglich. Alle Systeme werden nach deutschen Sicherheitsstandards installiert." },
      ],
      
      urgencyTitle: "Jeder Ausfall ist ein Verlust",
      urgencySubtitle: "Jeder Tag Warten = Jeden Tag verschwendete Energie",
      urgencyText: "Ihr tagsüber produzierter Überschuss geht jetzt günstig ins Netz. Mit einer Batterie speichern Sie ihn und nutzen ihn nachts selbst. Bleiben Sie auch bei Ausfällen komfortabel.",
      
      finalCta: "Kostenlosen Besichtigungstermin vereinbaren",
      finalCtaDesc: "30-minütige kostenlose Beratung - planen Sie Ihre vollständige Energieunabhängigkeit",
    },
    en: {
      badge: "German Technology Energy Storage",
      heroTitle: "Even When the Sun Sets",
      heroHighlight: "Your Energy Doesn't Stop",
      heroSubtitle: "Use energy produced during the day at night. With 089 Bayern energy storage systems, stay protected during power outages, minimize your bills, and achieve complete energy independence.",
      ctaButton: "Free Savings Calculation",
      ctaSecondary: "Call Now",
      
      problemTitle: "Do These Situations Sound Familiar?",
      problemSubtitle: "Many solar panel owners experience the same frustration",
      problems: [
        { title: "Produce by Day, Buy at Night", desc: "Your excess daytime energy goes to the grid cheaply, while you buy expensive electricity at night." },
        { title: "Power Outage Nightmare", desc: "Every outage leaves you in the dark. Refrigerator, AC, work computer - everything stops." },
        { title: "Grid Dependency", desc: "Even with solar panels, you're grid-dependent. Complete energy freedom seems like a dream." },
        { title: "Wasted Energy", desc: "Your midday excess production goes to waste. You can't use that energy." },
      ],
      
      solutionTitle: "The Solution: 089 Bayern Energy Storage System",
      solutionSubtitle: "Smart battery systems designed with German engineering",
      
      benefitsTitle: "Benefits We Provide",
      benefits: [
        { icon: Moon, title: "Solar Power at Night", desc: "Store energy produced during the day, use it in the evening and night. Live grid-independent." },
        { icon: Shield, title: "Uninterrupted Power", desc: "Your home stays lit even during power outages. Refrigerator, AC, internet - everything keeps running." },
        { icon: TrendingUp, title: "Up to 90% Savings", desc: "With the solar + battery combination, you can reduce your electricity bill to almost zero." },
        { icon: Zap, title: "Smart Energy Management", desc: "AI-powered system optimizes your consumption. Stores during cheap hours, uses during expensive ones." },
        { icon: BatteryCharging, title: "10,000+ Charge Cycles", desc: "Premium LiFePO4 batteries last over 10 years. With 1 cycle per day, that's 27+ years of life." },
        { icon: Award, title: "Premium Brands", desc: "BYD, LG Chem, Huawei - globally proven reliability and performance." },
      ],
      
      howItWorksTitle: "How Does It Work?",
      howItWorksSubtitle: "Simple but powerful technology",
      steps: [
        { step: "01", title: "Daytime Storage", desc: "Your solar panels produce energy throughout the day. Excess energy is transferred to batteries." },
        { step: "02", title: "Smart Management", desc: "The system monitors real-time consumption, production, and battery status. Ensures optimal use." },
        { step: "03", title: "Nighttime Use", desc: "When the sun sets, you use battery power. Grid draw becomes minimal." },
        { step: "04", title: "Emergency Mode", desc: "When power goes out, the system switches instantly. You experience no interruption." },
      ],
      
      trustTitle: "Why 089 Bayern?",
      trustSubtitle: "Your reliable partner for energy storage",
      trustPoints: [
        { icon: Star, title: "German Engineering", desc: "German quality standards and integration expertise - based in Antalya, Turkey" },
        { icon: Users, title: "Expert Team", desc: "Specially trained, certified technicians for battery systems" },
        { icon: ThumbsUp, title: "Integration Guarantee", desc: "Guaranteed perfect compatibility with your existing solar system" },
        { icon: Shield, title: "10 Year Warranty", desc: "Comprehensive, long-term warranty on battery performance" },
      ],
      
      testimonialTitle: "What Our Customers Say",
      testimonials: [
        { name: "Osman Y.", location: "Antalya", quote: "I had solar panels but still paid high bills at night. With the battery system, my bill is now under 50₺.", rating: 5 },
        { name: "Klaus B.", location: "Side", quote: "The combination of solar and storage is genius. During power outages, we don't notice anything - everything keeps running.", rating: 5 },
        { name: "Fatma S.", location: "Belek", quote: "There were frequent outages in summer. Now I don't worry about my refrigerator, everything works.", rating: 5 },
      ],
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "Can I install a battery without solar panels?", a: "Yes, grid-charged battery systems are possible. However, for maximum savings, we recommend combining with solar." },
        { q: "How much energy does the battery store?", a: "Home systems typically have 5-20 kWh capacity. For an average home, a 10kWh battery easily covers evening/night consumption." },
        { q: "How long does the battery last?", a: "With LiFePO4 technology, 10,000+ charge cycles, meaning over 27 years with daily use. We provide a 10-year warranty." },
        { q: "Does it power the whole house during an outage?", a: "Depends on capacity. Critical loads (refrigerator, lighting, internet) can be powered for hours. For the whole house, larger capacity is planned." },
        { q: "Can it be added to my existing solar system?", a: "Yes! Most solar panel systems can have batteries added. We check compatibility during our free survey." },
        { q: "Is the battery safe, is there a fire risk?", a: "LiFePO4 batteries are the safest Li-ion technology. No thermal runaway risk. All our systems are installed to German safety standards." },
      ],
      
      urgencyTitle: "Every Outage is a Loss",
      urgencySubtitle: "Every day waiting = every day wasted energy",
      urgencyText: "Your daytime excess is now going to the grid cheaply. With a battery, store it and use it yourself at night. Stay comfortable even during outages.",
      
      finalCta: "Book Your Free Survey Appointment",
      finalCtaDesc: "30-minute free consultation - plan your complete energy independence",
    },
  };

  const c = content[language as keyof typeof content] || content.tr;
  const isRtl = language === "ar";

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-enerji-depolama">
      <SEOHead page="enerji-depolama" />
      <Header onCtaClick={goToContact} />
      
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden" data-testid="section-battery-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-green-800/70 to-teal-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-emerald-500/20 backdrop-blur-md border-emerald-500/30 text-emerald-300">
              <Battery className="w-4 h-4 mr-2" />
              {c.badge}
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {c.heroTitle}{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                {c.heroHighlight}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              {c.heroSubtitle}
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-600 border-0 shadow-lg shadow-emerald-500/30 px-8"
                data-testid="button-battery-cta"
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
                  data-testid="button-battery-phone-tr"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  TR +90 507 183 2036
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-amber-400/50 text-white bg-black/30 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "tel:+491735994699"}
                  data-testid="button-battery-phone-de"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  DE +49 173 5994699
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-green-400/50 text-white bg-green-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.open("https://wa.me/491735994699", "_blank")}
                  data-testid="button-battery-whatsapp"
                >
                  WhatsApp
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-blue-400/50 text-white bg-blue-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "mailto:info@089bayern.com"}
                  data-testid="button-battery-email"
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
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">
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
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                <Battery className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-foreground">
                  {language === "de" ? "10 Monate Sonne" : 
                   language === "en" ? "10 Months Sun" : 
                   "10 Ay Güneş"}
                </span>
              </div>
              <div className="text-sm sm:text-base md:text-lg font-bold text-primary">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{c.problemTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.problemSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.problems.map((problem, index) => (
              <Card key={index} className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent" data-testid={`card-problem-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-gradient-to-b from-emerald-500/10 to-background" data-testid="section-solution">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-emerald-500/20 border-emerald-500/30">
              <Battery className="w-4 h-4 mr-2" />
              089 Bayern
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{c.solutionTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{c.solutionSubtitle}</p>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-8">{c.benefitsTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.benefits.map((benefit, index) => (
              <Card key={index} className="border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
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
                src={batterySystemImage} 
                alt="089 Bayern Samsung All-in-One lityum iyon batarya depolama sistemi kurulumu Antalya villasında 10 kWh 15 kWh kapasite 7/24 kesintisiz enerji güneş paneli entegrasyonu" 
                title="Samsung lityum iyon batarya depolama sistemi kurulumu fiyatları 2026 Antalya villa - 10 kWh 15 kWh kesintisiz enerji"
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                data-testid="img-battery-system"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={batteryMonitoringImage} 
                alt="089 Bayern enerji izleme ve akıllı kontrol sistemi villa enerji yönetimi güneş paneli batarya depolama performans takibi Antalya Alanya Akdeniz Türkiye" 
                title="Akıllı enerji izleme kontrol sistemi Antalya villa - güneş paneli batarya depolama performans takibi 2026"
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                data-testid="img-battery-monitoring"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{c.howItWorksTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.howItWorksSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="text-6xl font-bold text-emerald-500/20 mb-4">{step.step}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {index < c.steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-emerald-500/40" />
                )}
              </div>
            ))}
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="py-8 md:py-10" data-testid="section-trust">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{c.trustTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.trustSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.trustPoints.map((point, index) => (
              <div key={index} className="text-center" data-testid={`trust-point-${index}`}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{c.testimonialTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-emerald-500/20" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{c.faqTitle}</h2>
          </div>
          
          <div className="space-y-4">
            {c.faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="border-border cursor-pointer hover-elevate"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                data-testid={`faq-${index}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{faq.q}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                  {openFaq === index && (
                    <p className="mt-4 text-muted-foreground leading-relaxed"><LinkedText text={faq.a} language={language} /></p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-gradient-to-b from-emerald-500/10 to-emerald-500/5" data-testid="section-urgency">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{c.urgencyTitle}</h2>
          <p className="text-sm sm:text-base md:text-lg text-emerald-600 font-medium mb-4">{c.urgencySubtitle}</p>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{c.urgencyText}</p>
          
          <Button 
            onClick={goToContact}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-green-600 border-0 shadow-lg shadow-emerald-500/30 px-8"
            data-testid="button-urgency-cta"
          >
            <Calculator className="w-5 h-5 mr-2" />
            {c.finalCta}
          </Button>
          <p className="text-sm text-muted-foreground mt-4">{c.finalCtaDesc}</p>
        </div>
      </section>

      <TrustCallToAction />
      <CrossLinks currentPage="enerji-depolama" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
