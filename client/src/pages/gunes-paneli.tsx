import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Check, ArrowRight, Shield, Clock, Zap, TrendingUp, Leaf, Award, Phone, ChevronDown, ChevronUp, Star, Users, ThumbsUp, Calculator } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CrossLinks from "@/components/CrossLinks";
import TrustCallToAction from "@/components/TrustCallToAction";
import SectionCTA from "@/components/SectionCTA";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@assets/images/hero-solar-panel.png";
import solarDetailImage from "@assets/images/solar-detail-wiring.png";
import solarTestingImage from "@assets/images/solar-testing.png";

export default function GunesPaneli() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const goToContact = () => {
    setIsLeadFormOpen(true);
  };

  const content = {
    tr: {
      badge: "Alman Kalitesi Güneş Paneli",
      heroTitle: "Elektrik Faturalarınızdan",
      heroHighlight: "Sonsuza Kadar Kurtulun",
      heroSubtitle: "Her ay yükselen elektrik faturalarına bakıp içiniz mi sızlıyor? Artık bu döngüyü kırmanın zamanı geldi. 089 Bayern güneş panelleri ile eviniz kendi elektriğini üretsin, siz de tasarrufun keyfini çıkarın.",
      ctaButton: "Ücretsiz Tasarruf Hesaplaması",
      ctaSecondary: "Hemen Arayın",
      
      problemTitle: "Tanıdık Geliyor mu?",
      problemSubtitle: "Birçok ev sahibi aynı sorunlarla mücadele ediyor",
      problems: [
        { title: "Sürekli Artan Faturalar", desc: "Her ay elektrik faturası geldiğinde içiniz kararmıyor mu? Türkiye'de elektrik fiyatları son 3 yılda %300 arttı." },
        { title: "Enerji Bağımlılığı", desc: "Şebekeden gelen elektriğe tamamen bağımlısınız. Fiyat artışlarına karşı hiçbir korumanız yok." },
        { title: "Kesinti Stresi", desc: "Yaz aylarında klimalar çalışınca sürekli kesintiler. İşinizi aksatıyor, konforunuzu bozuyor." },
        { title: "Çevre Endişesi", desc: "Fosil yakıtlardan üretilen elektriği kullanmak sizi rahatsız ediyor ama alternatif bulamıyorsunuz." },
      ],
      
      solutionTitle: "Çözüm: 089 Bayern Güneş Paneli Sistemi",
      solutionSubtitle: "Alman mühendisliği ile tasarlanmış, Akdeniz güneşine optimize edilmiş sistemler",
      
      benefitsTitle: "Size Sağladığımız Faydalar",
      benefits: [
        { icon: TrendingUp, title: "%70'e Varan Tasarruf", desc: "İlk aydan itibaren faturalarınızda dramatik düşüş görün. Ortalama müşterimiz yılda 25.000₺ tasarruf ediyor." },
        { icon: Shield, title: "25 Yıl Performans Garantisi", desc: "Alman kalitesi demek uzun ömür demek. Panellerimiz 25 yıl boyunca minimum %80 verimlilikle çalışır." },
        { icon: Leaf, title: "Çevre Dostu Enerji", desc: "Yılda ortalama 4 ton CO2 salınımını önleyin. 200 ağaç dikmiş kadar çevreye katkı sağlayın." },
        { icon: Zap, title: "Enerji Bağımsızlığı", desc: "Fiyat artışlarından etkilenmeyin. Kendi elektriğinizi üreterek tam bağımsızlık kazanın." },
        { icon: Clock, title: "4-5 Yıl Geri Dönüş", desc: "Yatırımınız kendini 4-5 yıl içinde amorti eder. Sonrası tamamen kar." },
        { icon: Award, title: "Premium Marka Paneller", desc: "JA Solar, Longi, Trina - dünya çapında en güvenilir markalarla çalışıyoruz." },
      ],
      
      howItWorksTitle: "Nasıl Çalışır?",
      howItWorksSubtitle: "Basit adımlarla enerji özgürlüğüne kavuşun",
      steps: [
        { step: "01", title: "Ücretsiz Keşif", desc: "Uzman ekibimiz evinizi ziyaret eder, çatınızı ve enerji tüketiminizi analiz eder." },
        { step: "02", title: "Özel Tasarım", desc: "Size özel sistem tasarımı hazırlarız. Kaç panel, ne kadar tasarruf - her detay netleşir." },
        { step: "03", title: "Profesyonel Kurulum", desc: "Alman standartlarında, sertifikalı ekibimiz kurulumu 1-2 günde tamamlar." },
        { step: "04", title: "Tasarruf Başlasın", desc: "Sistem devreye girer girmez tasarruf etmeye başlarsınız. İlk faturanızda farkı görün." },
      ],
      
      trustTitle: "Neden 089 Bayern?",
      trustSubtitle: "500+ mutlu müşteri ile kanıtlanmış kalite",
      trustPoints: [
        { icon: Star, title: "Alman Mühendisliği", desc: "Münih'ten Antalya'ya - Alman kalite standartları ve mühendislik yaklaşımı" },
        { icon: Users, title: "Deneyimli Ekip", desc: "15+ yıl sektör tecrübesi, 500+ başarılı kurulum" },
        { icon: ThumbsUp, title: "Müşteri Memnuniyeti", desc: "%98 müşteri memnuniyeti oranı - referanslarımız bizim için konuşuyor" },
        { icon: Shield, title: "Kapsamlı Garanti", desc: "10 yıl işçilik, 25 yıl panel performans garantisi" },
      ],
      
      testimonialTitle: "Müşterilerimiz Ne Diyor?",
      testimonials: [
        { name: "Mehmet K.", location: "Antalya", quote: "3 aydır sistem çalışıyor, elektrik faturam 1.800₺'den 400₺'ye düştü. Keşke daha önce yaptırsaydım.", rating: 5 },
        { name: "Hans M.", location: "Alanya", quote: "Als Deutscher in der Türkei war es mir wichtig, deutsche Qualität zu haben. 089 Bayern hat alle meine Erwartungen übertroffen.", rating: 5 },
        { name: "Ayşe T.", location: "Kemer", quote: "Hem tasarruf ediyorum hem de çevreye katkı sağlıyorum. Çocuklarıma temiz bir dünya bırakıyorum.", rating: 5 },
      ],
      
      faqTitle: "Sık Sorulan Sorular",
      faqs: [
        { q: "Güneş paneli kurulumu için çatım uygun mu?", a: "Çoğu çatı tipi için uygun çözümlerimiz var. Kiremit, beton, metal çatılar - hepsine kurulum yapabiliyoruz. Ücretsiz keşif ziyaretimizde çatınızı değerlendirir ve en uygun çözümü sunarız." },
        { q: "Bulutlu havalarda elektrik üretir mi?", a: "Evet! Modern paneller bulutlu havalarda da üretim yapar, sadece verim biraz düşer. Antalya'nın yıllık 2.900+ saat güneşlenme süresi ile bu nadiren sorun olur." },
        { q: "Ne kadar sürede kendini amorti eder?", a: "Ortalama 4-5 yıl. Elektrik fiyatlarındaki artışla bu süre daha da kısalıyor. Ücretsiz tasarruf hesaplamasıyla size özel süreyi görebilirsiniz." },
        { q: "Bakım gerektirir mi?", a: "Neredeyse hiç. Yılda 1-2 kez basit temizlik yeterli. Biz yine de yıllık ücretsiz bakım hizmeti sunuyoruz." },
        { q: "Devlet teşviki var mı?", a: "Türkiye'de net metering sistemi var - üretip kullanmadığınız elektriği şebekeye satabilirsiniz. Detayları görüşmemizde açıklarız." },
      ],
      
      urgencyTitle: "Şimdi Harekete Geçin",
      urgencySubtitle: "Her geçen ay tasarruf etmediğiniz paradır",
      urgencyText: "Elektrik fiyatları artmaya devam ediyor. Bugün başlasanız, önümüzdeki ay ilk tasarrufunuzu görürsünüz. Beklemek size para kaybettiriyor.",
      
      finalCta: "Ücretsiz Keşif Randevusu Alın",
      finalCtaDesc: "30 dakikalık ücretsiz danışmanlık ile ne kadar tasarruf edeceğinizi öğrenin",
    },
    de: {
      badge: "Deutsche Qualität Solaranlage",
      heroTitle: "Befreien Sie sich",
      heroHighlight: "Von Stromrechnungen",
      heroSubtitle: "Ärgern Sie sich jeden Monat über steigende Stromkosten? Es ist Zeit, diesen Kreislauf zu durchbrechen. Mit 089 Bayern Solaranlagen produziert Ihr Haus seinen eigenen Strom.",
      ctaButton: "Kostenlose Einsparungsberechnung",
      ctaSecondary: "Jetzt Anrufen",
      
      problemTitle: "Kommt Ihnen das bekannt vor?",
      problemSubtitle: "Viele Hausbesitzer kämpfen mit denselben Problemen",
      problems: [
        { title: "Ständig steigende Rechnungen", desc: "Macht Sie jede Stromrechnung traurig? Die Strompreise sind in den letzten Jahren stark gestiegen." },
        { title: "Energieabhängigkeit", desc: "Sie sind vollständig vom Netzstrom abhängig. Kein Schutz vor Preiserhöhungen." },
        { title: "Stromausfälle", desc: "Im Sommer, wenn Klimaanlagen laufen, häufige Ausfälle. Stört Arbeit und Komfort." },
        { title: "Umweltsorgen", desc: "Die Nutzung von Strom aus fossilen Brennstoffen belastet Sie, aber Sie finden keine Alternative." },
      ],
      
      solutionTitle: "Die Lösung: 089 Bayern Solaranlage",
      solutionSubtitle: "Mit deutscher Ingenieurskunst entwickelt, optimiert für die Mittelmeer-Sonne",
      
      benefitsTitle: "Ihre Vorteile",
      benefits: [
        { icon: TrendingUp, title: "Bis zu 70% Ersparnis", desc: "Sehen Sie ab dem ersten Monat dramatische Senkungen Ihrer Rechnungen." },
        { icon: Shield, title: "25 Jahre Leistungsgarantie", desc: "Deutsche Qualität bedeutet Langlebigkeit. Unsere Panels arbeiten 25 Jahre mit mind. 80% Effizienz." },
        { icon: Leaf, title: "Umweltfreundliche Energie", desc: "Vermeiden Sie jährlich durchschnittlich 4 Tonnen CO2-Emissionen." },
        { icon: Zap, title: "Energieunabhängigkeit", desc: "Nicht mehr von Preiserhöhungen betroffen. Vollständige Unabhängigkeit durch eigene Stromproduktion." },
        { icon: Clock, title: "4-5 Jahre Amortisation", desc: "Ihre Investition amortisiert sich in 4-5 Jahren. Danach nur noch Gewinn." },
        { icon: Award, title: "Premium-Marken", desc: "JA Solar, Longi, Trina - wir arbeiten mit den zuverlässigsten Marken weltweit." },
      ],
      
      howItWorksTitle: "Wie funktioniert es?",
      howItWorksSubtitle: "In einfachen Schritten zur Energiefreiheit",
      steps: [
        { step: "01", title: "Kostenlose Besichtigung", desc: "Unser Expertenteam besucht Ihr Haus, analysiert Ihr Dach und Ihren Energieverbrauch." },
        { step: "02", title: "Individuelle Planung", desc: "Wir erstellen ein maßgeschneidertes Systemdesign. Wie viele Panels, wie viel Ersparnis - jedes Detail wird geklärt." },
        { step: "03", title: "Professionelle Installation", desc: "Unser zertifiziertes Team installiert nach deutschen Standards in 1-2 Tagen." },
        { step: "04", title: "Sparen Sie los", desc: "Sobald das System läuft, beginnen Sie zu sparen. Sehen Sie den Unterschied auf Ihrer ersten Rechnung." },
      ],
      
      trustTitle: "Warum 089 Bayern?",
      trustSubtitle: "Bewährte Qualität mit 500+ zufriedenen Kunden",
      trustPoints: [
        { icon: Star, title: "Deutsche Ingenieurskunst", desc: "Von München nach Antalya - deutsche Qualitätsstandards und Ingenieursansatz" },
        { icon: Users, title: "Erfahrenes Team", desc: "15+ Jahre Branchenerfahrung, 500+ erfolgreiche Installationen" },
        { icon: ThumbsUp, title: "Kundenzufriedenheit", desc: "98% Kundenzufriedenheitsrate - unsere Referenzen sprechen für sich" },
        { icon: Shield, title: "Umfassende Garantie", desc: "10 Jahre Arbeit, 25 Jahre Panel-Leistungsgarantie" },
      ],
      
      testimonialTitle: "Was unsere Kunden sagen",
      testimonials: [
        { name: "Mehmet K.", location: "Antalya", quote: "Das System läuft seit 3 Monaten, meine Stromrechnung sank von 1.800₺ auf 400₺. Ich wünschte, ich hätte es früher gemacht.", rating: 5 },
        { name: "Hans M.", location: "Alanya", quote: "Als Deutscher in der Türkei war es mir wichtig, deutsche Qualität zu haben. 089 Bayern hat alle meine Erwartungen übertroffen.", rating: 5 },
        { name: "Ayşe T.", location: "Kemer", quote: "Ich spare und trage zur Umwelt bei. Ich hinterlasse meinen Kindern eine sauberere Welt.", rating: 5 },
      ],
      
      faqTitle: "Häufig gestellte Fragen",
      faqs: [
        { q: "Ist mein Dach für Solaranlagen geeignet?", a: "Wir haben Lösungen für die meisten Dachtypen. Ziegel, Beton, Metalldächer - wir können überall installieren. Bei unserer kostenlosen Besichtigung bewerten wir Ihr Dach und bieten die beste Lösung an." },
        { q: "Produziert es auch bei bewölktem Wetter Strom?", a: "Ja! Moderne Panels produzieren auch bei bewölktem Wetter, nur mit leicht reduzierter Effizienz. Mit Antalyas 2.900+ Sonnenstunden pro Jahr ist das selten ein Problem." },
        { q: "Wie lange dauert die Amortisation?", a: "Durchschnittlich 4-5 Jahre. Mit steigenden Strompreisen verkürzt sich diese Zeit weiter. Mit unserer kostenlosen Einsparungsberechnung können Sie Ihre individuelle Zeit sehen." },
        { q: "Erfordert es Wartung?", a: "Fast keine. 1-2 einfache Reinigungen pro Jahr reichen aus. Wir bieten trotzdem jährlichen kostenlosen Wartungsservice an." },
        { q: "Gibt es staatliche Förderung?", a: "In der Türkei gibt es Net-Metering - Sie können überschüssigen Strom ans Netz verkaufen. Details besprechen wir in unserem Gespräch." },
      ],
      
      urgencyTitle: "Handeln Sie jetzt",
      urgencySubtitle: "Jeder Monat ohne Aktion ist verlorenes Geld",
      urgencyText: "Die Strompreise steigen weiter. Wenn Sie heute beginnen, sehen Sie nächsten Monat Ihre erste Ersparnis. Warten kostet Sie Geld.",
      
      finalCta: "Kostenlosen Besichtigungstermin vereinbaren",
      finalCtaDesc: "30-minütige kostenlose Beratung - erfahren Sie, wie viel Sie sparen können",
    },
    en: {
      badge: "German Quality Solar Panels",
      heroTitle: "Free Yourself From",
      heroHighlight: "Electricity Bills Forever",
      heroSubtitle: "Tired of watching your electricity bills climb higher every month? It's time to break this cycle. With 089 Bayern solar panels, your home produces its own electricity while you enjoy the savings.",
      ctaButton: "Free Savings Calculation",
      ctaSecondary: "Call Now",
      
      problemTitle: "Sound Familiar?",
      problemSubtitle: "Many homeowners struggle with the same problems",
      problems: [
        { title: "Constantly Rising Bills", desc: "Does every electricity bill make your heart sink? Electricity prices have increased dramatically in recent years." },
        { title: "Energy Dependency", desc: "You're completely dependent on grid electricity. No protection against price increases." },
        { title: "Power Outage Stress", desc: "Constant blackouts in summer when ACs run. Disrupts your work and comfort." },
        { title: "Environmental Concerns", desc: "Using electricity from fossil fuels bothers you but you can't find an alternative." },
      ],
      
      solutionTitle: "The Solution: 089 Bayern Solar Panel System",
      solutionSubtitle: "Designed with German engineering, optimized for Mediterranean sunshine",
      
      benefitsTitle: "Benefits We Provide",
      benefits: [
        { icon: TrendingUp, title: "Up to 70% Savings", desc: "See dramatic drops in your bills from the first month. Our average customer saves 25,000₺ annually." },
        { icon: Shield, title: "25 Year Performance Warranty", desc: "German quality means longevity. Our panels work at minimum 80% efficiency for 25 years." },
        { icon: Leaf, title: "Eco-Friendly Energy", desc: "Prevent an average of 4 tons of CO2 emissions annually. Equivalent to planting 200 trees." },
        { icon: Zap, title: "Energy Independence", desc: "Don't be affected by price increases. Achieve complete independence by producing your own electricity." },
        { icon: Clock, title: "4-5 Year Payback", desc: "Your investment pays for itself in 4-5 years. After that, it's all profit." },
        { icon: Award, title: "Premium Brand Panels", desc: "JA Solar, Longi, Trina - we work with the most reliable brands worldwide." },
      ],
      
      howItWorksTitle: "How Does It Work?",
      howItWorksSubtitle: "Simple steps to energy freedom",
      steps: [
        { step: "01", title: "Free Survey", desc: "Our expert team visits your home, analyzes your roof and energy consumption." },
        { step: "02", title: "Custom Design", desc: "We prepare a system design specifically for you. How many panels, how much savings - every detail clarified." },
        { step: "03", title: "Professional Installation", desc: "Our certified team completes installation in 1-2 days following German standards." },
        { step: "04", title: "Start Saving", desc: "As soon as the system is active, you start saving. See the difference on your first bill." },
      ],
      
      trustTitle: "Why 089 Bayern?",
      trustSubtitle: "Proven quality with 500+ happy customers",
      trustPoints: [
        { icon: Star, title: "German Engineering", desc: "From Munich to Antalya - German quality standards and engineering approach" },
        { icon: Users, title: "Experienced Team", desc: "15+ years industry experience, 500+ successful installations" },
        { icon: ThumbsUp, title: "Customer Satisfaction", desc: "98% customer satisfaction rate - our references speak for themselves" },
        { icon: Shield, title: "Comprehensive Warranty", desc: "10 years workmanship, 25 years panel performance warranty" },
      ],
      
      testimonialTitle: "What Our Customers Say",
      testimonials: [
        { name: "Mehmet K.", location: "Antalya", quote: "The system has been running for 3 months, my electricity bill dropped from 1,800₺ to 400₺. I wish I had done it sooner.", rating: 5 },
        { name: "Hans M.", location: "Alanya", quote: "As a German in Turkey, it was important for me to have German quality. 089 Bayern exceeded all my expectations.", rating: 5 },
        { name: "Ayşe T.", location: "Kemer", quote: "I'm saving money and contributing to the environment. I'm leaving a cleaner world for my children.", rating: 5 },
      ],
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "Is my roof suitable for solar panel installation?", a: "We have solutions for most roof types. Tile, concrete, metal roofs - we can install on all of them. During our free survey, we evaluate your roof and offer the best solution." },
        { q: "Does it produce electricity on cloudy days?", a: "Yes! Modern panels produce even on cloudy days, just with slightly reduced efficiency. With Antalya's 2,900+ hours of sunshine per year, this is rarely an issue." },
        { q: "How long until it pays for itself?", a: "Average 4-5 years. With rising electricity prices, this period is getting shorter. With our free savings calculation, you can see your specific timeframe." },
        { q: "Does it require maintenance?", a: "Almost none. 1-2 simple cleanings per year are sufficient. We still offer free annual maintenance service." },
        { q: "Is there government incentive?", a: "Turkey has a net metering system - you can sell excess electricity you produce to the grid. We'll explain details during our meeting." },
      ],
      
      urgencyTitle: "Take Action Now",
      urgencySubtitle: "Every month you wait is money not saved",
      urgencyText: "Electricity prices continue to rise. If you start today, you'll see your first savings next month. Waiting costs you money.",
      
      finalCta: "Book Your Free Survey Appointment",
      finalCtaDesc: "30-minute free consultation - learn how much you can save",
    },
  };

  const c = content[language as keyof typeof content] || content.tr;
  const isRtl = language === "ar";

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-gunes-paneli">
      <SEOHead page="systeme" />
      <Header onCtaClick={goToContact} />
      
      <section className="relative pt-20 pb-16 overflow-hidden" data-testid="section-solar-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6 bg-amber-500/20 backdrop-blur-md border-amber-500/30 text-amber-300">
              <Sun className="w-4 h-4 mr-2" />
              {c.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {c.heroTitle}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {c.heroHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              {c.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 border-0 shadow-lg shadow-amber-500/30 px-8"
                data-testid="button-solar-cta"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {c.ctaButton}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8" 
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-solar-phone"
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
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <Sun className="w-5 h-5 text-amber-500" />
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

      <section className="py-8 md:py-10 bg-gradient-to-b from-amber-500/10 to-background" data-testid="section-solution">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-amber-500/20 border-amber-500/30">
              <Sun className="w-4 h-4 mr-2" />
              089 Bayern
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.solutionTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{c.solutionSubtitle}</p>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{c.benefitsTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.benefits.map((benefit, index) => (
              <Card key={index} className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30">
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
                src={solarDetailImage} 
                alt="Profesyonel güneş paneli kablo bağlantısı" 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                data-testid="img-solar-detail"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={solarTestingImage} 
                alt="Güneş paneli test ve ölçüm" 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                data-testid="img-solar-testing"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.howItWorksTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.howItWorksSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map((step, index) => (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="text-6xl font-bold text-amber-500/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {index < c.steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-6 h-6 text-amber-500/50" />
                )}
              </div>
            ))}
          </div>
          <SectionCTA />
        </div>
      </section>

      <section className="py-8 md:py-10 bg-background" data-testid="section-trust">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.trustTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.trustSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.trustPoints.map((point, index) => (
              <Card key={index} className="text-center border-border/50" data-testid={`card-trust-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
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

      <section className="py-8 md:py-10 bg-muted/30" data-testid="section-testimonials">
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
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
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

      <section className="py-8 md:py-10 bg-background" data-testid="section-faq">
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

      <section className="py-8 md:py-10 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20" data-testid="section-urgency">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.urgencyTitle}</h2>
          <p className="text-lg text-muted-foreground mb-6">{c.urgencySubtitle}</p>
          <p className="text-foreground mb-8 max-w-2xl mx-auto">{c.urgencyText}</p>
          
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-amber-500/20">
            <h3 className="text-2xl font-bold text-foreground mb-2">{c.finalCta}</h3>
            <p className="text-muted-foreground mb-6">{c.finalCtaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <Button 
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 border-0 shadow-lg shadow-amber-500/30 px-8"
                data-testid="button-final-cta"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {c.ctaButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.location.href = "tel:+4917647877177"}
                data-testid="button-final-phone-de"
              >
                <Phone className="w-4 h-4 mr-2" />
                +49 176 4787 7177
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-500/50 bg-green-500/10" 
                onClick={() => window.open("https://wa.me/905071832036", "_blank")}
                data-testid="button-final-whatsapp"
              >
                WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500/50 bg-blue-500/10" 
                onClick={() => window.location.href = "mailto:info@089bayern.de"}
                data-testid="button-final-email"
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustCallToAction />
      <CrossLinks currentPage="gunes-paneli" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
