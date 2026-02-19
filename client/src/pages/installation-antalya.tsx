import { useState } from "react";
import { MapPin, Sun, Flame, Wind, Battery, CheckCircle, ArrowRight, Phone, Star, Shield, Award, Clock, Users, Building2, Zap, Wallet, TrendingUp } from "lucide-react";
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
import heroImage from "@assets/images/webp/hero-antalya.webp";
import roofInstallationImage from "@assets/images/webp/antalya-roof-installation.webp";
import heatpumpInspectionImage from "@assets/images/webp/antalya-heatpump-inspection.webp";
import teamCompletedImage from "@assets/images/webp/antalya-team-completed-system.webp";

const content = {
  de: {
    badgeType: "Zentrale",
    badge: "4-in-1 Installation Antalya",
    title: "Energiesystem-Installation",
    titleHighlight: "in Antalya",
    subtitle: "089 Bayern Zentrale Antalya - Deutsche Qualität trifft mediterranes Klima. Wir installieren Ihr komplettes 4-in-1 Energiesystem entlang der gesamten Küste von Antalya bis Alanya - inklusive 20 km Umkreis ins Landesinnere.",
    ctaButton: "Kostenlose Beratung",
    callButton: "Jetzt anrufen",
    
    officeTitle: "089 Bayern Zentrale Antalya",
    officeSubtitle: "Unser Hauptstandort für die Mittelmeerregion",
    officeDesc: "Von unserem Hauptsitz in Antalya aus koordinieren wir alle Installationen an der Mittelmeerküste. Mit Niederlassungen in Alanya und Ankara sind wir immer in Ihrer Nähe.",
    
    officeNlp1: "Stellen Sie sich vor: Sie rufen an und sprechen direkt mit einem deutschen Experten - nicht mit einem Callcenter. Mustafa Sakar, unser Mitgründer, nimmt sich persönlich Zeit für Ihre Fragen.",
    officeNlp2: "Während andere Anbieter aus Istanbul anreisen müssen, sind wir bereits hier. Das bedeutet: schnellere Reaktionszeit, persönlicher Service und jahrelange Erfahrung mit dem Mittelmeerklima.",
    officeNlp3: "Ihre Villa verdient das Beste. Deshalb arbeiten wir ausschließlich mit Premium-Komponenten von Vaillant und Samsung - Qualität, die Sie sehen und spüren werden.",
    officeCtaText: "Rufen Sie jetzt an und erleben Sie den Unterschied",
    
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
    areasSubtitle: "Die gesamte Küste von Antalya bis Alanya + 20 km Umkreis ins Landesinnere",
    areas: ["Antalya Zentrum", "Konyaaltı", "Lara", "Kundu", "Belek", "Kadriye", "Serik", "Boğazkent", "Side", "Kumköy", "Çolaklı", "Evrenseki", "Manavgat", "Kızılağaç", "Kızılot", "Okurcalar", "Avsallar", "İncekum", "Alanya Zentrum", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Kargıcak", "Kemer", "Beldibi", "Göynük", "Çamyuva", "Tekirova", "Çıralı", "Olympos", "Döşemealtı", "Aksu", "Kepez"],
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Was Sie wirklich gewinnen",
    benefitsSubtitle: "Stellen Sie sich vor: Keine hohen Stromrechnungen mehr, keine Abhängigkeit von steigenden Energiepreisen, keine Sorgen bei Stromausfällen",
    
    benefit1Title: "Finanzielle Freiheit",
    benefit1Desc: "Während andere jedes Jahr mehr für Energie zahlen, sinken Ihre Kosten auf nahezu null. Das gesparte Geld bleibt in Ihrer Tasche - für das, was Ihnen wirklich wichtig ist.",
    benefit1Stat: "ca. 70%",
    benefit1StatLabel: "Ersparnis",
    
    benefit2Title: "Absolute Unabhängigkeit",
    benefit2Desc: "Sie produzieren Ihren eigenen Strom. Sie sind nicht mehr abhängig von Energieversorgern und deren Preiserhöhungen. Das ist wahre Freiheit.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "Energie",
    
    benefit3Title: "Wertsteigerung Ihrer Immobilie",
    benefit3Desc: "Eine Villa mit modernem Energiesystem ist deutlich mehr wert. Käufer zahlen Premiumpreise für energieautarke Immobilien an der türkischen Riviera.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "Immobilienwert",
    
    benefit4Title: "Sorgenfreie Zukunft",
    benefit4Desc: "Mit 10 Jahren Garantie und 25+ Jahren Lebensdauer können Sie sich entspannt zurücklehnen. Ihre Energieversorgung ist für Jahrzehnte gesichert.",
    benefit4Stat: "10 Jahre",
    benefit4StatLabel: "Garantie",
    
    // Climate Advantages Section
    climateTitle: "Das Mittelmeerklima - Ihr größter Verbündeter",
    climateSubtitle: "Antalya bietet ideale Bedingungen für Solarenergie - besser als fast jeder Ort in Europa",
    
    climatePoint1Title: "300+ Sonnentage pro Jahr",
    climatePoint1Desc: "Während München nur 65 Sonnentage hat, genießt Antalya über 300. Das bedeutet: Ihre Solaranlage produziert fast das ganze Jahr auf Höchstleistung.",
    
    climatePoint2Title: "Milde Winter, heiße Sommer",
    climatePoint2Desc: "Im Sommer kühlt Ihre Samsung Klimaanlage mit kostenlosem Solarstrom. Im Winter reicht die Wärmepumpe für angenehme Temperaturen - ohne teure Gasheizung.",
    
    climatePoint3Title: "Höchste Sonneneinstrahlung Europas",
    climatePoint3Desc: "Die türkische Riviera erhält mehr Sonneneinstrahlung als Spanien, Italien oder Griechenland. Ihr 4-in-1 System nutzt jeden einzelnen Sonnenstrahl.",
    
    // Why 4-in-1 Section
    why4in1Title: "Warum 4-in-1 besser ist als Einzellösungen",
    why4in1Subtitle: "Stellen Sie sich ein Orchester vor: Einzelne Musiker sind gut, aber zusammen erschaffen sie eine Symphonie",
    
    why4in1Point1Title: "Perfekte Synergie",
    why4in1Point1Desc: "Solar, Wärmepumpe, Klima und Speicher arbeiten wie ein eingespieltes Orchester zusammen. Die Solaranlage lädt den Speicher, der Speicher versorgt die Wärmepumpe, die Klima kühlt mit eigenem Strom.",
    
    why4in1Point2Title: "Ein Ansprechpartner",
    why4in1Point2Desc: "Keine Koordination zwischen verschiedenen Installateuren. Keine Schuldzuweisungen bei Problemen. Ein Team, eine Verantwortung, eine Lösung. So einfach sollte es sein.",
    
    why4in1Point3Title: "Optimierte Kosten",
    why4in1Point3Desc: "Einzeln kaufen bedeutet: 4x Anfahrt, 4x Installation, 4x Verwaltung. Bei uns: Alles aus einer Hand, optimal aufeinander abgestimmt, ein Preis - und Sie sparen bis zu 20%.",
    
    why4in1Point4Title: "Zukunftssicher",
    why4in1Point4Desc: "Ihr System wächst mit Ihren Bedürfnissen. Elektroauto? Kein Problem, der Speicher lädt es nachts mit Sonnenstrom vom Tag. Pool-Heizung? Die Wärmepumpe übernimmt das mit.",
    
    // FAQ Section
    faqTitle: "Häufige Fragen zur 4-in-1 Installation in Antalya",
    
    faq1Q: "Wie lange dauert die Installation eines 4-in-1 Systems in Antalya?",
    faq1A: "Die komplette Installation dauert typischerweise 3-5 Werktage, abhängig von der Größe Ihrer Immobilie. Für eine Standard-Villa mit 200m² planen wir 3 Tage ein. Größere Villen oder komplexere Anforderungen können bis zu 5 Tage dauern.",
    
    faq2Q: "Funktioniert das System bei einem Stromausfall?",
    faq2A: "Ja! Der integrierte Batteriespeicher versorgt Ihr Haus bis zu 24 Stunden mit Strom. Bei Sonnenschein noch länger, da die Solaranlage weiter produziert. Sie bemerken den Stromausfall kaum.",
    
    faq3Q: "Wie viel kann ich wirklich sparen mit dem mediterranen Klima?",
    faq3A: "In Antalya mit 300+ Sonnentagen erreichen unsere Kunden typischerweise 60-70% Ersparnis bei den Energiekosten. Einige Villen sind sogar komplett energieautark und zahlen keine Stromrechnung mehr.",
    
    faq4Q: "Was kostet ein 4-in-1 System für meine Villa in Antalya?",
    faq4A: "Die Kosten hängen von Ihrer Wohnfläche und Ihrem Energiebedarf ab. Für eine Villa mit 200m² rechnen Sie mit ca. 31.200-50.000 EUR. Der genaue Preis wird bei der kostenlosen Vor-Ort-Beratung ermittelt.",
    
    faq5Q: "Warum deutsche Qualität in der Türkei?",
    faq5A: "Unsere Gründer Dalibor Bakmaz und Mustafa Sakar verbinden das Beste aus beiden Welten: Deutsche Ingenieurskunst und Qualitätsstandards mit türkischer Marktkenntnisund lokaler Präsenz. Sie erhalten Premium-Komponenten von Vaillant und Samsung mit der Zuverlässigkeit deutscher Handwerkskunst.",
  },
  tr: {
    badgeType: "Merkez",
    badge: "4'ü 1 Arada Kurulum Antalya",
    title: "Enerji Sistemi Kurulumu",
    titleHighlight: "Antalya'da",
    subtitle: "089 Bayern Antalya Merkezi - Alman kalitesi Akdeniz ikliminde. Antalya'dan Alanya'ya tüm kıyı boyunca ve 20 km iç bölge dahil komple 4'ü 1 arada enerji sisteminizi kuruyoruz.",
    ctaButton: "Ücretsiz Danışmanlık",
    callButton: "Hemen Arayın",
    
    officeTitle: "089 Bayern Antalya Merkezi",
    officeSubtitle: "Akdeniz bölgesi için ana merkezimiz",
    officeDesc: "Antalya merkezimizden tüm Akdeniz kıyısı kurulumlarını koordine ediyoruz. Alanya ve Ankara şubelerimizle her zaman yanınızdayız.",
    
    officeNlp1: "Hayal edin: Aradığınızda direkt bir uzmanla konuşuyorsunuz - çağrı merkezi değil. Mustafa Sakar, kurucu ortağımız, sorularınız için kişisel olarak zaman ayırıyor.",
    officeNlp2: "Diğer firmalar İstanbul'dan gelmek zorundayken, biz zaten buradayız. Bu demektir ki: daha hızlı tepki süresi, kişisel hizmet ve Akdeniz iklimiyle yıllarca deneyim.",
    officeNlp3: "Villanız en iyisini hak ediyor. Bu yüzden sadece Vaillant ve Samsung premium bileşenleriyle çalışıyoruz - göreceğiniz ve hissedeceğiniz kalite.",
    officeCtaText: "Şimdi arayın ve farkı yaşayın",
    
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
    areasSubtitle: "Antalya'dan Alanya'ya tüm kıyı + 20 km iç bölge",
    areas: ["Antalya Merkez", "Konyaaltı", "Lara", "Kundu", "Belek", "Kadriye", "Serik", "Boğazkent", "Side", "Kumköy", "Çolaklı", "Evrenseki", "Manavgat", "Kızılağaç", "Kızılot", "Okurcalar", "Avsallar", "İncekum", "Alanya Merkez", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Kargıcak", "Kemer", "Beldibi", "Göynük", "Çamyuva", "Tekirova", "Çıralı", "Olympos", "Döşemealtı", "Aksu", "Kepez"],
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Gerçekten Ne Kazanıyorsunuz",
    benefitsSubtitle: "Hayal edin: Artık yüksek elektrik faturaları yok, artan enerji fiyatlarına bağımlılık yok, elektrik kesintilerinde endişe yok",
    
    benefit1Title: "Finansal Özgürlük",
    benefit1Desc: "Başkaları her yıl enerji için daha fazla öderken, sizin maliyetleriniz neredeyse sıfıra düşüyor. Tasarruf ettiğiniz para cebinizde kalıyor - sizin için gerçekten önemli olan şeyler için.",
    benefit1Stat: "yakl. %70",
    benefit1StatLabel: "Tasarruf",
    
    benefit2Title: "Tam Bağımsızlık",
    benefit2Desc: "Kendi elektriğinizi üretiyorsunuz. Artık enerji şirketlerine ve onların zam kararlarına bağımlı değilsiniz. Bu gerçek özgürlük.",
    benefit2Stat: "7/24",
    benefit2StatLabel: "Enerji",
    
    benefit3Title: "Gayrimenkul Değer Artışı",
    benefit3Desc: "Modern enerji sistemli bir villa çok daha değerli. Alıcılar Türk Rivierası'ndaki enerji bağımsız mülkler için premium fiyatlar ödüyor.",
    benefit3Stat: "+%15",
    benefit3StatLabel: "Değer Artışı",
    
    benefit4Title: "Kaygısız Gelecek",
    benefit4Desc: "10 yıl garanti ve 25+ yıl ömür ile rahatlıkla arkanıza yaslanabilirsiniz. Enerji tedarikininiz onlarca yıl güvende.",
    benefit4Stat: "10 Yıl",
    benefit4StatLabel: "Garanti",
    
    // Climate Advantages Section
    climateTitle: "Akdeniz İklimi - En Büyük Müttefikiniz",
    climateSubtitle: "Antalya güneş enerjisi için ideal koşullar sunuyor - Avrupa'daki hemen hemen her yerden daha iyi",
    
    climatePoint1Title: "Yılda 300+ Güneşli Gün",
    climatePoint1Desc: "Münih'te sadece 65 güneşli gün varken, Antalya 300'ün üzerinde güneşli güne sahip. Bu, güneş panelinizin neredeyse tüm yıl maksimum kapasitede üretim yapması demek.",
    
    climatePoint2Title: "Ilıman Kışlar, Sıcak Yazlar",
    climatePoint2Desc: "Yazın Samsung klimanız ücretsiz güneş elektriğiyle soğutuyor. Kışın ısı pompası konforlu sıcaklıklar sağlıyor - pahalı doğalgaz ısıtması olmadan.",
    
    climatePoint3Title: "Avrupa'nın En Yüksek Güneş Işınımı",
    climatePoint3Desc: "Türk Rivierası, İspanya, İtalya veya Yunanistan'dan daha fazla güneş ışınımı alıyor. 4'ü 1 arada sisteminiz her bir güneş ışınını değerlendiriyor.",
    
    // Why 4-in-1 Section
    why4in1Title: "Neden 4'ü 1 Arada Tek Çözümlerden Daha İyi",
    why4in1Subtitle: "Bir orkestra hayal edin: Bireysel müzisyenler iyidir, ama birlikte bir senfoni yaratırlar",
    
    why4in1Point1Title: "Mükemmel Sinerji",
    why4in1Point1Desc: "Güneş paneli, ısı pompası, klima ve batarya uyumlu bir orkestra gibi birlikte çalışır. Güneş paneli bataryayı şarj eder, batarya ısı pompasını besler, klima kendi elektriğiyle soğutur.",
    
    why4in1Point2Title: "Tek Muhatap",
    why4in1Point2Desc: "Farklı kurulumcular arasında koordinasyon yok. Problemlerde suçlama yok. Bir ekip, bir sorumluluk, bir çözüm. Bu kadar basit olmalı.",
    
    why4in1Point3Title: "Optimize Edilmiş Maliyetler",
    why4in1Point3Desc: "Ayrı ayrı satın almak: 4x ulaşım, 4x kurulum, 4x yönetim demek. Bizde: Tek elden, optimal uyum, tek fiyat - ve %20'ye kadar tasarruf.",
    
    why4in1Point4Title: "Geleceğe Hazır",
    why4in1Point4Desc: "Sisteminiz ihtiyaçlarınızla birlikte büyür. Elektrikli araba? Sorun değil, batarya onu gece gündüz güneş elektriğiyle şarj eder. Havuz ısıtma? Isı pompası bunu da halleder.",
    
    // FAQ Section
    faqTitle: "Antalya'da 4'ü 1 Arada Kurulum Hakkında Sık Sorulan Sorular",
    
    faq1Q: "Antalya'da 4'ü 1 arada sistem kurulumu ne kadar sürer?",
    faq1A: "Komple kurulum mülkünüzün boyutuna bağlı olarak genellikle 3-5 iş günü sürer. 200m²'lik standart bir villa için 3 gün planlıyoruz. Daha büyük villalar veya daha karmaşık gereksinimler 5 güne kadar sürebilir.",
    
    faq2Q: "Sistem elektrik kesintisinde çalışır mı?",
    faq2A: "Evet! Entegre batarya depolaması evinize 24 saate kadar elektrik sağlar. Güneşli havalarda daha da uzun, çünkü güneş paneli üretmeye devam eder. Elektrik kesintisini neredeyse fark etmezsiniz.",
    
    faq3Q: "Akdeniz ikliminde gerçekten ne kadar tasarruf edebilirim?",
    faq3A: "300+ güneşli günüyle Antalya'da müşterilerimiz genellikle enerji maliyetlerinde %60-70 tasarruf sağlıyor. Bazı villalar tamamen enerji bağımsız ve hiç elektrik faturası ödemiyor.",
    
    faq4Q: "Antalya'daki villam için 4'ü 1 arada sistem ne kadar?",
    faq4A: "Maliyet yaşam alanınıza ve enerji ihtiyacınıza bağlı. 200m²'lik bir villa için yakl. 31.200-50.000 EUR bekleyebilirsiniz. Kesin fiyat ücretsiz yerinde danışmanlıkta belirlenir.",
    
    faq5Q: "Türkiye'de neden Alman kalitesi?",
    faq5A: "Kurucularımız Dalibor Bakmaz ve Mustafa Sakar her iki dünyanın en iyisini birleştiriyor: Türk pazar bilgisi ve yerel varlıkla Alman mühendislik ve kalite standartları. Alman işçiliğinin güvenilirliğiyle Vaillant ve Samsung'dan premium bileşenler alıyorsunuz.",
  },
  en: {
    badgeType: "Headquarters",
    badge: "4-in-1 Installation Antalya",
    title: "Energy System Installation",
    titleHighlight: "in Antalya",
    subtitle: "089 Bayern Headquarters Antalya - German quality meets Mediterranean climate. We install your complete 4-in-1 energy system along the entire coast from Antalya to Alanya - including a 20 km inland radius.",
    ctaButton: "Free Consultation",
    callButton: "Call Now",
    
    officeTitle: "089 Bayern Headquarters Antalya",
    officeSubtitle: "Our main location for the Mediterranean region",
    officeDesc: "From our headquarters in Antalya, we coordinate all installations along the Mediterranean coast. With branches in Alanya and Ankara, we are always near you.",
    
    officeNlp1: "Imagine this: You call and speak directly with a German expert - not a call center. Mustafa Sakar, our co-founder, personally takes time for your questions.",
    officeNlp2: "While other providers have to travel from Istanbul, we're already here. This means: faster response times, personal service, and years of experience with the Mediterranean climate.",
    officeNlp3: "Your villa deserves the best. That's why we work exclusively with premium components from Vaillant and Samsung - quality you'll see and feel.",
    officeCtaText: "Call now and experience the difference",
    
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
    areasSubtitle: "The entire coast from Antalya to Alanya + 20 km inland radius",
    areas: ["Antalya Center", "Konyaaltı", "Lara", "Kundu", "Belek", "Kadriye", "Serik", "Boğazkent", "Side", "Kumköy", "Çolaklı", "Evrenseki", "Manavgat", "Kızılağaç", "Kızılot", "Okurcalar", "Avsallar", "İncekum", "Alanya Center", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Kargıcak", "Kemer", "Beldibi", "Göynük", "Çamyuva", "Tekirova", "Çıralı", "Olympos", "Döşemealtı", "Aksu", "Kepez"],
    
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
    
    // NLP Benefits Section
    benefitsTitle: "What You Really Gain",
    benefitsSubtitle: "Imagine: No more high electricity bills, no dependence on rising energy prices, no worries during power outages",
    
    benefit1Title: "Financial Freedom",
    benefit1Desc: "While others pay more for energy every year, your costs drop to almost zero. The saved money stays in your pocket - for what truly matters to you.",
    benefit1Stat: "approx. 70%",
    benefit1StatLabel: "Savings",
    
    benefit2Title: "Complete Independence",
    benefit2Desc: "You produce your own electricity. You're no longer dependent on energy providers and their price increases. This is true freedom.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "Energy",
    
    benefit3Title: "Property Value Increase",
    benefit3Desc: "A villa with a modern energy system is worth significantly more. Buyers pay premium prices for energy-independent properties on the Turkish Riviera.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "Property Value",
    
    benefit4Title: "Worry-Free Future",
    benefit4Desc: "With 10 years warranty and 25+ years lifespan, you can lean back and relax. Your energy supply is secured for decades.",
    benefit4Stat: "10 Years",
    benefit4StatLabel: "Warranty",
    
    // Climate Advantages Section
    climateTitle: "The Mediterranean Climate - Your Greatest Ally",
    climateSubtitle: "Antalya offers ideal conditions for solar energy - better than almost anywhere in Europe",
    
    climatePoint1Title: "300+ Sunny Days Per Year",
    climatePoint1Desc: "While Munich has only 65 sunny days, Antalya enjoys over 300. This means: Your solar system produces at peak performance almost all year.",
    
    climatePoint2Title: "Mild Winters, Hot Summers",
    climatePoint2Desc: "In summer, your Samsung air conditioning cools with free solar electricity. In winter, the heat pump provides comfortable temperatures - without expensive gas heating.",
    
    climatePoint3Title: "Highest Solar Irradiation in Europe",
    climatePoint3Desc: "The Turkish Riviera receives more solar irradiation than Spain, Italy, or Greece. Your 4-in-1 system utilizes every single sunray.",
    
    // Why 4-in-1 Section
    why4in1Title: "Why 4-in-1 is Better Than Individual Solutions",
    why4in1Subtitle: "Imagine an orchestra: Individual musicians are good, but together they create a symphony",
    
    why4in1Point1Title: "Perfect Synergy",
    why4in1Point1Desc: "Solar, heat pump, air conditioning, and storage work together like a well-rehearsed orchestra. The solar system charges the storage, the storage powers the heat pump, the AC cools with its own electricity.",
    
    why4in1Point2Title: "One Point of Contact",
    why4in1Point2Desc: "No coordination between different installers. No blame-shifting when problems occur. One team, one responsibility, one solution. It should be that simple.",
    
    why4in1Point3Title: "Optimized Costs",
    why4in1Point3Desc: "Buying separately means: 4x travel, 4x installation, 4x administration. With us: Everything from one source, optimally coordinated, one price - and you save up to 20%.",
    
    why4in1Point4Title: "Future-Proof",
    why4in1Point4Desc: "Your system grows with your needs. Electric car? No problem, the storage charges it at night with solar electricity from the day. Pool heating? The heat pump handles that too.",
    
    // FAQ Section
    faqTitle: "Frequently Asked Questions About 4-in-1 Installation in Antalya",
    
    faq1Q: "How long does a 4-in-1 system installation take in Antalya?",
    faq1A: "The complete installation typically takes 3-5 working days, depending on the size of your property. For a standard villa of 200m², we plan 3 days. Larger villas or more complex requirements can take up to 5 days.",
    
    faq2Q: "Does the system work during a power outage?",
    faq2A: "Yes! The integrated battery storage powers your home for up to 24 hours. With sunshine even longer, as the solar system continues to produce. You'll hardly notice the power outage.",
    
    faq3Q: "How much can I really save with the Mediterranean climate?",
    faq3A: "In Antalya with 300+ sunny days, our customers typically achieve 60-70% savings on energy costs. Some villas are even completely energy-independent and pay no electricity bills anymore.",
    
    faq4Q: "What does a 4-in-1 system cost for my villa in Antalya?",
    faq4A: "Costs depend on your living area and energy needs. For a villa of 200m², expect approx. 31,200-50,000 EUR. The exact price is determined during the free on-site consultation.",
    
    faq5Q: "Why German quality in Turkey?",
    faq5A: "Our founders Dalibor Bakmaz and Mustafa Sakar combine the best of both worlds: German engineering and quality standards with Turkish market knowledge and local presence. You receive premium components from Vaillant and Samsung with the reliability of German craftsmanship.",
  },
  ru: {
    badgeType: "Главный офис",
    badge: "Установка 4-в-1 Анталия",
    title: "Установка энергосистемы",
    titleHighlight: "в Анталии",
    subtitle: "Главный офис 089 Bayern Анталия - Немецкое качество встречает средиземноморский климат. Устанавливаем вашу полную энергосистему 4-в-1 вдоль всего побережья от Анталии до Алании.",
    ctaButton: "Бесплатная консультация",
    callButton: "Позвонить",
    
    officeTitle: "Главный офис 089 Bayern Анталия",
    officeSubtitle: "Наша основная локация для Средиземноморского региона",
    officeDesc: "Из нашего главного офиса в Анталии мы координируем все установки на Средиземноморском побережье. С филиалами в Аланье и Анкаре мы всегда рядом с вами.",
    
    officeNlp1: "Представьте: Вы звоните и говорите напрямую с немецким экспертом - не с колл-центром. Mustafa Sakar, наш сооснователь, лично уделяет время вашим вопросам.",
    officeNlp2: "Пока другие поставщики должны ехать из Стамбула, мы уже здесь. Это значит: быстрое реагирование, персональный сервис и многолетний опыт работы со средиземноморским климатом.",
    officeNlp3: "Ваша вилла заслуживает лучшего. Поэтому мы работаем исключительно с премиум-компонентами Vaillant и Samsung - качество, которое вы увидите и почувствуете.",
    officeCtaText: "Позвоните сейчас и почувствуйте разницу",
    
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
    areasSubtitle: "Всё побережье от Анталии до Алании + 20 км вглубь",
    areas: ["Центр Анталии", "Коньяалты", "Лара", "Кунду", "Белек", "Кадрие", "Серик", "Богазкент", "Сиде", "Кумкёй", "Чолаклы", "Эвренсеки", "Манавгат", "Кызылагач", "Кызылот", "Окуджалар", "Авсаллар", "Инджекум", "Центр Алании", "Махмутлар", "Кестель", "Оба", "Тосмур", "Каргыджак", "Кемер", "Бельдиби", "Гёйнюк", "Чамьюва", "Текирова", "Чиралы", "Олимпос", "Дёшемеалты", "Аксу", "Кепез"],
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Что вы действительно получаете",
    benefitsSubtitle: "Представьте: Больше никаких высоких счетов за электричество, никакой зависимости от растущих цен на энергию, никаких забот при отключениях",
    
    benefit1Title: "Финансовая свобода",
    benefit1Desc: "Пока другие каждый год платят за энергию всё больше, ваши расходы падают почти до нуля. Сэкономленные деньги остаются в вашем кармане.",
    benefit1Stat: "прим. 70%",
    benefit1StatLabel: "Экономия",
    
    benefit2Title: "Полная независимость",
    benefit2Desc: "Вы производите собственное электричество. Вы больше не зависите от энергопоставщиков и их повышений цен. Это настоящая свобода.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "Энергия",
    
    benefit3Title: "Рост стоимости недвижимости",
    benefit3Desc: "Вилла с современной энергосистемой стоит значительно дороже. Покупатели платят премиальные цены за энергонезависимую недвижимость на Турецкой Ривьере.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "Стоимость",
    
    benefit4Title: "Беззаботное будущее",
    benefit4Desc: "С 10-летней гарантией и сроком службы 25+ лет вы можете расслабиться. Ваше энергоснабжение обеспечено на десятилетия.",
    benefit4Stat: "10 лет",
    benefit4StatLabel: "Гарантия",
    
    // Climate Advantages Section
    climateTitle: "Средиземноморский климат - ваш главный союзник",
    climateSubtitle: "Анталия предлагает идеальные условия для солнечной энергии - лучше, чем почти где-либо в Европе",
    
    climatePoint1Title: "300+ солнечных дней в году",
    climatePoint1Desc: "В то время как в Мюнхене только 65 солнечных дней, Анталия наслаждается более чем 300. Это означает: ваша солнечная система работает на пике почти весь год.",
    
    climatePoint2Title: "Мягкие зимы, жаркое лето",
    climatePoint2Desc: "Летом ваш кондиционер Samsung охлаждает бесплатным солнечным электричеством. Зимой тепловой насос обеспечивает комфортную температуру - без дорогого газового отопления.",
    
    climatePoint3Title: "Высочайшая солнечная радиация в Европе",
    climatePoint3Desc: "Турецкая Ривьера получает больше солнечной радиации, чем Испания, Италия или Греция. Ваша система 4-в-1 использует каждый солнечный луч.",
    
    // Why 4-in-1 Section
    why4in1Title: "Почему 4-в-1 лучше отдельных решений",
    why4in1Subtitle: "Представьте оркестр: отдельные музыканты хороши, но вместе они создают симфонию",
    
    why4in1Point1Title: "Идеальная синергия",
    why4in1Point1Desc: "Солнечная система, тепловой насос, кондиционер и накопитель работают вместе как слаженный оркестр.",
    
    why4in1Point2Title: "Один контакт",
    why4in1Point2Desc: "Никакой координации между разными установщиками. Никаких обвинений при проблемах. Одна команда, одна ответственность, одно решение.",
    
    why4in1Point3Title: "Оптимизированные расходы",
    why4in1Point3Desc: "Покупать отдельно означает: 4x выезд, 4x установка, 4x администрирование. У нас: всё из одних рук, оптимально согласовано - и вы экономите до 20%.",
    
    why4in1Point4Title: "Готовность к будущему",
    why4in1Point4Desc: "Ваша система растёт с вашими потребностями. Электромобиль? Без проблем. Подогрев бассейна? Тепловой насос справится.",
    
    // FAQ Section
    faqTitle: "Часто задаваемые вопросы об установке 4-в-1 в Анталии",
    
    faq1Q: "Сколько времени занимает установка системы 4-в-1 в Анталии?",
    faq1A: "Полная установка обычно занимает 3-5 рабочих дней. Для стандартной виллы 200м² мы планируем 3 дня.",
    
    faq2Q: "Работает ли система при отключении электричества?",
    faq2A: "Да! Встроенный аккумулятор обеспечивает ваш дом электричеством до 24 часов. При солнечной погоде ещё дольше.",
    
    faq3Q: "Сколько я могу реально сэкономить со средиземноморским климатом?",
    faq3A: "В Анталии с 300+ солнечными днями наши клиенты обычно достигают экономии 60-70% на энергозатратах.",
    
    faq4Q: "Сколько стоит система 4-в-1 для моей виллы в Анталии?",
    faq4A: "Для виллы 200м² рассчитывайте на прим. 31.200-50.000 EUR. Точная цена определяется на бесплатной консультации.",
    
    faq5Q: "Почему немецкое качество в Турции?",
    faq5A: "Наши основатели Dalibor Bakmaz и Mustafa Sakar объединяют лучшее из обоих миров: немецкое инженерное качество с турецким знанием рынка.",
  },
  uk: {
    badgeType: "Головний офіс",
    badge: "Встановлення 4-в-1 Анталія",
    title: "Встановлення енергосистеми",
    titleHighlight: "в Анталії",
    subtitle: "Головний офіс 089 Bayern Анталія - Німецька якість зустрічає середземноморський клімат. Встановлюємо вашу повну енергосистему 4-в-1 вздовж усього узбережжя від Анталії до Аланії.",
    ctaButton: "Безкоштовна консультація",
    callButton: "Зателефонувати",
    
    officeTitle: "Головний офіс 089 Bayern Анталія",
    officeSubtitle: "Наша основна локація для Середземноморського регіону",
    officeDesc: "З нашого головного офісу в Анталії ми координуємо всі встановлення на Середземноморському узбережжі. З філіями в Аланії та Анкарі ми завжди поруч з вами.",
    
    officeNlp1: "Уявіть: Ви телефонуєте і спілкуєтесь напряму з німецьким експертом - не з кол-центром. Mustafa Sakar, наш співзасновник, особисто приділяє час вашим питанням.",
    officeNlp2: "Поки інші постачальники мусять їхати зі Стамбула, ми вже тут. Це означає: швидше реагування, персональний сервіс та багаторічний досвід роботи із середземноморським кліматом.",
    officeNlp3: "Ваша вілла заслуговує найкращого. Тому ми працюємо виключно з преміум-компонентами Vaillant та Samsung - якість, яку ви побачите та відчуєте.",
    officeCtaText: "Зателефонуйте зараз і відчуйте різницю",
    
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
    areasSubtitle: "Все узбережжя від Анталії до Аланії + 20 км углиб",
    areas: ["Центр Анталії", "Коньяалти", "Лара", "Кунду", "Белек", "Кадріє", "Серік", "Богазкент", "Сіде", "Кумкьой", "Чолакли", "Евренсекі", "Манавгат", "Кизилагач", "Кизилот", "Окуджалар", "Авсаллар", "Інджекум", "Центр Аланії", "Махмутлар", "Кестель", "Оба", "Тосмур", "Каргиджак", "Кемер", "Бельдібі", "Гьойнюк", "Чамьюва", "Текірова", "Чірали", "Олімпос", "Дьошемеалти", "Аксу", "Кепез"],
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Що ви дійсно отримуєте",
    benefitsSubtitle: "Уявіть: Більше ніяких високих рахунків за електрику, ніякої залежності від зростаючих цін на енергію",
    
    benefit1Title: "Фінансова свобода",
    benefit1Desc: "Поки інші щороку платять за енергію все більше, ваші витрати падають майже до нуля.",
    benefit1Stat: "прибл. 70%",
    benefit1StatLabel: "Економія",
    
    benefit2Title: "Повна незалежність",
    benefit2Desc: "Ви виробляєте власну електрику. Ви більше не залежите від енергопостачальників.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "Енергія",
    
    benefit3Title: "Зростання вартості нерухомості",
    benefit3Desc: "Вілла з сучасною енергосистемою коштує значно дорожче.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "Вартість",
    
    benefit4Title: "Безтурботне майбутнє",
    benefit4Desc: "З 10-річною гарантією та терміном служби 25+ років ви можете розслабитися.",
    benefit4Stat: "10 років",
    benefit4StatLabel: "Гарантія",
    
    // Climate Advantages Section
    climateTitle: "Середземноморський клімат - ваш головний союзник",
    climateSubtitle: "Анталія пропонує ідеальні умови для сонячної енергії",
    
    climatePoint1Title: "300+ сонячних днів на рік",
    climatePoint1Desc: "В той час як у Мюнхені лише 65 сонячних днів, Анталія насолоджується понад 300.",
    
    climatePoint2Title: "М'які зими, спекотне літо",
    climatePoint2Desc: "Влітку ваш кондиціонер Samsung охолоджує безкоштовною сонячною електрикою.",
    
    climatePoint3Title: "Найвища сонячна радіація в Європі",
    climatePoint3Desc: "Турецька Рив'єра отримує більше сонячної радіації, ніж Іспанія, Італія чи Греція.",
    
    // Why 4-in-1 Section
    why4in1Title: "Чому 4-в-1 краще окремих рішень",
    why4in1Subtitle: "Уявіть оркестр: окремі музиканти хороші, але разом вони створюють симфонію",
    
    why4in1Point1Title: "Ідеальна синергія",
    why4in1Point1Desc: "Сонячна система, тепловий насос, кондиціонер та накопичувач працюють разом як злагоджений оркестр.",
    
    why4in1Point2Title: "Один контакт",
    why4in1Point2Desc: "Ніякої координації між різними монтажниками. Одна команда, одна відповідальність.",
    
    why4in1Point3Title: "Оптимізовані витрати",
    why4in1Point3Desc: "Купувати окремо означає: 4x виїзд, 4x монтаж. У нас: все з одних рук - і ви економите до 20%.",
    
    why4in1Point4Title: "Готовність до майбутнього",
    why4in1Point4Desc: "Ваша система росте з вашими потребами. Електромобіль? Без проблем.",
    
    // FAQ Section
    faqTitle: "Часті питання про встановлення 4-в-1 в Анталії",
    
    faq1Q: "Скільки часу займає встановлення системи 4-в-1 в Анталії?",
    faq1A: "Повне встановлення зазвичай займає 3-5 робочих днів.",
    
    faq2Q: "Чи працює система при відключенні електрики?",
    faq2A: "Так! Вбудований акумулятор забезпечує ваш будинок електрикою до 24 годин.",
    
    faq3Q: "Скільки я можу реально заощадити із середземноморським кліматом?",
    faq3A: "В Анталії з 300+ сонячними днями наші клієнти зазвичай досягають економії 60-70%.",
    
    faq4Q: "Скільки коштує система 4-в-1 для моєї вілли в Анталії?",
    faq4A: "Для вілли 200м² розраховуйте на прибл. 31.200-50.000 EUR.",
    
    faq5Q: "Чому німецька якість в Туреччині?",
    faq5A: "Наші засновники Dalibor Bakmaz та Mustafa Sakar поєднують найкраще з обох світів.",
  },
  ar: {
    badgeType: "المقر الرئيسي",
    badge: "تركيب 4 في 1 أنطاليا",
    title: "تركيب نظام الطاقة",
    titleHighlight: "في أنطاليا",
    subtitle: "المقر الرئيسي 089 Bayern أنطاليا - الجودة الألمانية تلتقي بمناخ البحر المتوسط. نقوم بتركيب نظام الطاقة الكامل 4 في 1 على طول الساحل بأكمله من أنطاليا إلى ألانيا.",
    ctaButton: "استشارة مجانية",
    callButton: "اتصل الآن",
    
    officeTitle: "المقر الرئيسي 089 Bayern أنطاليا",
    officeSubtitle: "موقعنا الرئيسي لمنطقة البحر المتوسط",
    officeDesc: "من مقرنا الرئيسي في أنطاليا، ننسق جميع التركيبات على ساحل البحر المتوسط. مع فروع في ألانيا وأنقرة، نحن دائماً بالقرب منك.",
    
    officeNlp1: "تخيل: أنت تتصل وتتحدث مباشرة مع خبير ألماني - ليس مركز اتصال. Mustafa Sakar، شريكنا المؤسس، يخصص وقتاً شخصياً لأسئلتك.",
    officeNlp2: "بينما يجب على مزودين آخرين السفر من إسطنبول، نحن هنا بالفعل. هذا يعني: وقت استجابة أسرع، خدمة شخصية، وسنوات من الخبرة مع مناخ البحر المتوسط.",
    officeNlp3: "فيلتك تستحق الأفضل. لذلك نعمل حصرياً مع مكونات متميزة من Vaillant و Samsung - جودة ستراها وتشعر بها.",
    officeCtaText: "اتصل الآن واشعر بالفرق",
    
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
    areasSubtitle: "الساحل بأكمله من أنطاليا إلى ألانيا + 20 كم داخلياً",
    areas: ["مركز أنطاليا", "كونيالتي", "لارا", "كوندو", "بيليك", "قادرية", "سيريك", "بوغازكنت", "سيدا", "كومكوي", "تشولاكلي", "إيفرنسيكي", "مانافغات", "كيزيلاغاتش", "كيزيلوت", "أوكورجالار", "أفساللار", "إنجيكوم", "مركز ألانيا", "محمودلار", "كستيل", "أوبا", "توسمور", "كارجيجاك", "كيمر", "بيلديبي", "غوينوك", "تشامويوفا", "تيكيروفا", "تشيرالي", "أوليمبوس", "دوشمالتي", "أكسو", "كيبيز"],
    
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
    
    // NLP Benefits Section
    benefitsTitle: "ما تكسبه حقاً",
    benefitsSubtitle: "تخيل: لا مزيد من فواتير الكهرباء المرتفعة، لا اعتماد على أسعار الطاقة المتزايدة",
    
    benefit1Title: "الحرية المالية",
    benefit1Desc: "بينما يدفع الآخرون أكثر كل عام مقابل الطاقة، تنخفض تكاليفك إلى ما يقرب من الصفر.",
    benefit1Stat: "حوالي 70%",
    benefit1StatLabel: "توفير",
    
    benefit2Title: "الاستقلال الكامل",
    benefit2Desc: "أنت تنتج الكهرباء الخاصة بك. لم تعد تعتمد على موردي الطاقة.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "طاقة",
    
    benefit3Title: "زيادة قيمة العقار",
    benefit3Desc: "فيلا بنظام طاقة حديث تستحق أكثر بكثير.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "القيمة",
    
    benefit4Title: "مستقبل بلا قلق",
    benefit4Desc: "مع ضمان 10 سنوات وعمر 25+ سنة، يمكنك الاسترخاء.",
    benefit4Stat: "10 سنوات",
    benefit4StatLabel: "ضمان",
    
    // Climate Advantages Section
    climateTitle: "مناخ البحر المتوسط - حليفك الأكبر",
    climateSubtitle: "أنطاليا توفر ظروفاً مثالية للطاقة الشمسية",
    
    climatePoint1Title: "300+ يوم مشمس في السنة",
    climatePoint1Desc: "بينما ميونخ لديها 65 يوم مشمس فقط، أنطاليا تتمتع بأكثر من 300.",
    
    climatePoint2Title: "شتاء معتدل، صيف حار",
    climatePoint2Desc: "في الصيف، مكيف Samsung الخاص بك يبرد بالكهرباء الشمسية المجانية.",
    
    climatePoint3Title: "أعلى إشعاع شمسي في أوروبا",
    climatePoint3Desc: "الريفييرا التركية تتلقى إشعاعاً شمسياً أكثر من إسبانيا أو إيطاليا أو اليونان.",
    
    // Why 4-in-1 Section
    why4in1Title: "لماذا 4 في 1 أفضل من الحلول الفردية",
    why4in1Subtitle: "تخيل أوركسترا: الموسيقيون الفرديون جيدون، لكن معاً يخلقون سيمفونية",
    
    why4in1Point1Title: "تآزر مثالي",
    why4in1Point1Desc: "النظام الشمسي والمضخة الحرارية والمكيف والتخزين يعملون معاً كأوركسترا متناغمة.",
    
    why4in1Point2Title: "جهة اتصال واحدة",
    why4in1Point2Desc: "لا تنسيق بين مركبين مختلفين. فريق واحد، مسؤولية واحدة.",
    
    why4in1Point3Title: "تكاليف محسنة",
    why4in1Point3Desc: "الشراء منفصلاً يعني: 4x سفر، 4x تركيب. عندنا: كل شيء من مصدر واحد - وتوفر حتى 20%.",
    
    why4in1Point4Title: "جاهز للمستقبل",
    why4in1Point4Desc: "نظامك ينمو مع احتياجاتك. سيارة كهربائية؟ لا مشكلة.",
    
    // FAQ Section
    faqTitle: "الأسئلة الشائعة حول تركيب 4 في 1 في أنطاليا",
    
    faq1Q: "كم يستغرق تركيب نظام 4 في 1 في أنطاليا؟",
    faq1A: "التركيب الكامل عادة يستغرق 3-5 أيام عمل.",
    
    faq2Q: "هل يعمل النظام أثناء انقطاع التيار الكهربائي؟",
    faq2A: "نعم! البطارية المدمجة تزود منزلك بالكهرباء لمدة تصل إلى 24 ساعة.",
    
    faq3Q: "كم يمكنني توفيره فعلياً مع مناخ البحر المتوسط؟",
    faq3A: "في أنطاليا مع 300+ يوم مشمس، عملاؤنا يحققون عادة توفير 60-70%.",
    
    faq4Q: "كم يكلف نظام 4 في 1 لفيلتي في أنطاليا؟",
    faq4A: "لفيلا 200م² توقع حوالي 31,200-50,000 يورو.",
    
    faq5Q: "لماذا الجودة الألمانية في تركيا؟",
    faq5A: "مؤسسونا Dalibor Bakmaz و Mustafa Sakar يجمعون أفضل ما في العالمين.",
  },
  hr: {
    badgeType: "Sjedište",
    badge: "4-u-1 Instalacija Antalya",
    title: "Instalacija Energetskog Sustava",
    titleHighlight: "u Antalyi",
    subtitle: "Sjedište 089 Bayern Antalya - Njemačka kvaliteta susreće mediteransku klimu. Instaliramo vaš kompletan 4-u-1 energetski sustav duž cijele obale od Antalye do Alanye.",
    ctaButton: "Besplatna Konzultacija",
    callButton: "Nazovite Odmah",
    
    officeTitle: "Sjedište 089 Bayern Antalya",
    officeSubtitle: "Naša glavna lokacija za mediteransku regiju",
    officeDesc: "Iz našeg sjedišta u Antalyi koordiniramo sve instalacije na mediteranskoj obali. S podružnicama u Alanyi i Ankari, uvijek smo blizu vas.",
    
    officeNlp1: "Zamislite: Zovete i razgovarate izravno s njemačkim stručnjakom - ne s pozivnim centrom. Mustafa Sakar, naš suosnivač, osobno odvaja vrijeme za vaša pitanja.",
    officeNlp2: "Dok drugi dobavljači moraju putovati iz Istanbula, mi smo već ovdje. To znači: brže vrijeme reakcije, osobna usluga i dugogodišnje iskustvo s mediteranskom klimom.",
    officeNlp3: "Vaša vila zaslužuje najbolje. Zato radimo isključivo s premium komponentama Vaillant i Samsung - kvaliteta koju ćete vidjeti i osjetiti.",
    officeCtaText: "Nazovite sada i osjetite razliku",
    
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
    areasSubtitle: "Cijela obala od Antalye do Alanye + 20 km u unutrašnjost",
    areas: ["Centar Antalye", "Konyaaltı", "Lara", "Kundu", "Belek", "Kadriye", "Serik", "Boğazkent", "Side", "Kumköy", "Çolaklı", "Evrenseki", "Manavgat", "Kızılağaç", "Kızılot", "Okurcalar", "Avsallar", "İncekum", "Centar Alanye", "Mahmutlar", "Kestel", "Oba", "Tosmur", "Kargıcak", "Kemer", "Beldibi", "Göynük", "Çamyuva", "Tekirova", "Çıralı", "Olympos", "Döşemealtı", "Aksu", "Kepez"],
    
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
    
    // NLP Benefits Section
    benefitsTitle: "Što Stvarno Dobivate",
    benefitsSubtitle: "Zamislite: Nema više visokih računa za struju, nema ovisnosti o rastućim cijenama energije",
    
    benefit1Title: "Financijska Sloboda",
    benefit1Desc: "Dok drugi svake godine plaćaju više za energiju, vaši troškovi padaju gotovo na nulu.",
    benefit1Stat: "oko 70%",
    benefit1StatLabel: "Ušteda",
    
    benefit2Title: "Potpuna Neovisnost",
    benefit2Desc: "Proizvodite vlastitu struju. Više ne ovisite o dobavljačima energije.",
    benefit2Stat: "24/7",
    benefit2StatLabel: "Energija",
    
    benefit3Title: "Povećanje Vrijednosti Nekretnine",
    benefit3Desc: "Vila s modernim energetskim sustavom vrijedi značajno više.",
    benefit3Stat: "+15%",
    benefit3StatLabel: "Vrijednost",
    
    benefit4Title: "Bezbrižna Budućnost",
    benefit4Desc: "S 10 godina jamstva i 25+ godina životnog vijeka, možete se opustiti.",
    benefit4Stat: "10 Godina",
    benefit4StatLabel: "Jamstvo",
    
    // Climate Advantages Section
    climateTitle: "Mediteranska Klima - Vaš Najveći Saveznik",
    climateSubtitle: "Antalya nudi idealne uvjete za solarnu energiju",
    
    climatePoint1Title: "300+ Sunčanih Dana Godišnje",
    climatePoint1Desc: "Dok München ima samo 65 sunčanih dana, Antalya uživa više od 300.",
    
    climatePoint2Title: "Blage Zime, Vruća Ljeta",
    climatePoint2Desc: "Ljeti vaša Samsung klimatizacija hladi besplatnom solarnom strujom.",
    
    climatePoint3Title: "Najveće Sunčevo Zračenje u Europi",
    climatePoint3Desc: "Turska Rivijera prima više sunčevog zračenja od Španjolske, Italije ili Grčke.",
    
    // Why 4-in-1 Section
    why4in1Title: "Zašto je 4-u-1 Bolji od Pojedinačnih Rješenja",
    why4in1Subtitle: "Zamislite orkestar: pojedinačni glazbenici su dobri, ali zajedno stvaraju simfoniju",
    
    why4in1Point1Title: "Savršena Sinergija",
    why4in1Point1Desc: "Solarni sustav, toplinska pumpa, klima i pohrana rade zajedno kao usklađen orkestar.",
    
    why4in1Point2Title: "Jedna Kontaktna Točka",
    why4in1Point2Desc: "Nema koordinacije između različitih instalatera. Jedan tim, jedna odgovornost.",
    
    why4in1Point3Title: "Optimizirani Troškovi",
    why4in1Point3Desc: "Kupovina odvojeno znači: 4x dolazak, 4x instalacija. Kod nas: sve iz jednog izvora - i štedite do 20%.",
    
    why4in1Point4Title: "Spremno za Budućnost",
    why4in1Point4Desc: "Vaš sustav raste s vašim potrebama. Električni automobil? Nema problema.",
    
    // FAQ Section
    faqTitle: "Česta Pitanja o 4-u-1 Instalaciji u Antalyi",
    
    faq1Q: "Koliko dugo traje instalacija 4-u-1 sustava u Antalyi?",
    faq1A: "Kompletna instalacija obično traje 3-5 radnih dana.",
    
    faq2Q: "Radi li sustav tijekom nestanka struje?",
    faq2A: "Da! Ugrađena baterija opskrbljuje vaš dom strujom do 24 sata.",
    
    faq3Q: "Koliko stvarno mogu uštedjeti s mediteranskom klimom?",
    faq3A: "U Antalyi s 300+ sunčanih dana, naši klijenti obično postižu uštedu od 60-70%.",
    
    faq4Q: "Koliko košta 4-u-1 sustav za moju vilu u Antalyi?",
    faq4A: "Za vilu od 200m² očekujte oko 31.200-50.000 EUR.",
    
    faq5Q: "Zašto njemačka kvaliteta u Turskoj?",
    faq5A: "Naši osnivači Dalibor Bakmaz i Mustafa Sakar kombiniraju najbolje iz oba svijeta.",
  },
};

export default function InstallationAntalya() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  const goToContact = () => {
    setIsLeadFormOpen(true);
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
      <Header onCtaClick={goToContact} />
      
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 overflow-hidden" data-testid="section-antalya-hero">
        <img src={heroImage} alt="089 Bayern 4'ü 1 arada enerji sistemi kurulumu Antalya Akdeniz villası güneş paneli Vaillant ısı pompası Samsung klima batarya depolama profesyonel montaj Kemer Belek Side Alanya Türkiye" title="4-in-1 enerji sistemi kurulumu Antalya villa fiyatları 2026 - güneş paneli ısı pompası klima batarya Kemer Belek Side" className="absolute inset-0 w-full h-full object-cover" decoding="async" fetchPriority="high" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30 text-xs sm:text-sm">
                <Building2 className="w-3 h-3 mr-1" />
                {c.badgeType}
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/30 text-xs sm:text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                {c.badge}
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              {c.title} <span className="text-primary">{c.titleHighlight}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
              {c.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button size="lg" onClick={goToContact} className="bg-gradient-to-r from-primary to-orange-600" data-testid="button-antalya-cta">
                {c.ctaButton}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-400/50 text-white bg-red-500/20 backdrop-blur-sm" asChild data-testid="button-antalya-call-tr">
                <a href="tel:+905071832036">
                  <Phone className="w-4 h-4 mr-2" />
                  TR +90 507 183 2036
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-amber-400/50 text-white bg-black/30 backdrop-blur-sm" asChild data-testid="button-antalya-call-de">
                <a href="tel:+491735994699">
                  <Phone className="w-4 h-4 mr-2" />
                  DE +49 173 5994699
                </a>
              </Button>
              <div className="flex gap-2 sm:gap-3">
                <Button size="lg" variant="outline" className="border-green-400/50 text-white bg-green-500/20 backdrop-blur-sm" onClick={() => window.open("https://wa.me/491735994699", "_blank")} data-testid="button-antalya-whatsapp">
                  WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400/50 text-white bg-blue-500/20 backdrop-blur-sm" asChild data-testid="button-antalya-email">
                  <a href="mailto:info@089bayern.com">Email</a>
                </Button>
              </div>
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

      {/* Office Info Section */}
      <section className="py-16" data-testid="section-office-info">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              {c.badgeType}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.officeTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{c.officeSubtitle}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-6">
              <CardContent className="p-8 text-center">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-0">{c.officeDesc}</p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{c.officeNlp1}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-amber-500/20">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{c.officeNlp2}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-emerald-500/5 to-green-500/5 border-emerald-500/20">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{c.officeNlp3}</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-primary mb-4">{c.officeCtaText}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" onClick={goToContact} className="bg-gradient-to-r from-primary to-orange-600" data-testid="button-office-cta">
                  {c.ctaButton}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-red-400/50 bg-red-500/10" asChild data-testid="button-office-call-tr">
                  <a href="tel:+905071832036">
                    <Phone className="w-4 h-4 mr-2" />
                    TR +90 507 183 2036
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-green-500/50 bg-green-500/10" onClick={() => window.open("https://wa.me/491735994699", "_blank")} data-testid="button-office-whatsapp">
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Antalya Section */}
      <section className="py-16 bg-muted/30" data-testid="section-why-antalya">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.whyAntalyaTitle}</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">{c.whyAntalyaSubtitle}</p>
        </div>
      </section>

      {/* NLP Benefits Section */}
      <section className="py-20" data-testid="section-nlp-benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.benefitsTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">{c.benefitsSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{c.benefit1Stat}</div>
              <div className="text-sm text-muted-foreground mb-4">{c.benefit1StatLabel}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{c.benefit1Title}</h3>
              <p className="text-sm text-muted-foreground">{c.benefit1Desc}</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{c.benefit2Stat}</div>
              <div className="text-sm text-muted-foreground mb-4">{c.benefit2StatLabel}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{c.benefit2Title}</h3>
              <p className="text-sm text-muted-foreground">{c.benefit2Desc}</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{c.benefit3Stat}</div>
              <div className="text-sm text-muted-foreground mb-4">{c.benefit3StatLabel}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{c.benefit3Title}</h3>
              <p className="text-sm text-muted-foreground">{c.benefit3Desc}</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{c.benefit4Stat}</div>
              <div className="text-sm text-muted-foreground mb-4">{c.benefit4StatLabel}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{c.benefit4Title}</h3>
              <p className="text-sm text-muted-foreground">{c.benefit4Desc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Climate Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20" data-testid="section-climate-advantages">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <Sun className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.climateTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">{c.climateSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background/80 backdrop-blur rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{c.climatePoint1Title}</h3>
              <LinkedText text={c.climatePoint1Desc} language={language} as="p" className="text-muted-foreground" />
            </div>
            
            <div className="bg-background/80 backdrop-blur rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{c.climatePoint2Title}</h3>
              <LinkedText text={c.climatePoint2Desc} language={language} as="p" className="text-muted-foreground" />
            </div>
            
            <div className="bg-background/80 backdrop-blur rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3">{c.climatePoint3Title}</h3>
              <LinkedText text={c.climatePoint3Desc} language={language} as="p" className="text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Work Gallery */}
      <section className="py-8 md:py-10 bg-background" data-testid="section-work-gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={roofInstallationImage} 
                alt="089 Bayern güneş paneli kurulumu Antalya villa çatısında profesyonel montaj ekibi solar panel sistemi fiyatları 2026 Kemer Belek Side Alanya" 
                title="Güneş paneli kurulumu Antalya villa çatısı fiyatları 2026 - profesyonel montaj Kemer Belek Side Alanya"
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                data-testid="img-roof-installation"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={heatpumpInspectionImage} 
                alt="089 Bayern Vaillant ısı pompası kurulum kontrolü ve kalite denetimi Antalya Alman DIN standartları yetkili servis 10 yıl garanti Akdeniz villası" 
                title="Vaillant ısı pompası kurulum kontrolü Antalya villa - Alman DIN standartları kalite denetimi 10 yıl garanti"
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                data-testid="img-heatpump-inspection"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Success Image - Full Width */}
      <section className="py-8 md:py-12 bg-muted/30" data-testid="section-team-success-image">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={teamCompletedImage} 
              alt="089 Bayern kurulum ekibi tamamlanmış 4-in-1 enerji sistemi önünde Antalya villası güneş paneli ısı pompası klima batarya başarılı proje referans Türkiye" 
              title="089 Bayern tamamlanmış 4-in-1 enerji sistemi projesi Antalya villa - güneş paneli ısı pompası klima batarya referans"
              className="w-full h-80 md:h-[500px] object-cover"
              loading="lazy"
              decoding="async"
              data-testid="img-team-completed"
            />
          </div>
        </div>
      </section>

      {/* Why 4-in-1 Section */}
      <section className="py-20" data-testid="section-why-4in1">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.why4in1Title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto italic">{c.why4in1Subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.why4in1Point1Title}</h3>
                  <p className="text-muted-foreground">{c.why4in1Point1Desc}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.why4in1Point2Title}</h3>
                  <p className="text-muted-foreground">{c.why4in1Point2Desc}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.why4in1Point3Title}</h3>
                  <p className="text-muted-foreground">{c.why4in1Point3Desc}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.why4in1Point4Title}</h3>
                  <p className="text-muted-foreground">{c.why4in1Point4Desc}</p>
                </div>
              </div>
            </Card>
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
            <Card className="p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.faq1Q}</h3>
              <LinkedText text={c.faq1A} language={language} as="p" className="text-muted-foreground" />
            </Card>
            
            <Card className="p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.faq2Q}</h3>
              <LinkedText text={c.faq2A} language={language} as="p" className="text-muted-foreground" />
            </Card>
            
            <Card className="p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.faq3Q}</h3>
              <LinkedText text={c.faq3A} language={language} as="p" className="text-muted-foreground" />
            </Card>
            
            <Card className="p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.faq4Q}</h3>
              <LinkedText text={c.faq4A} language={language} as="p" className="text-muted-foreground" />
            </Card>
            
            <Card className="p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{c.faq5Q}</h3>
              <LinkedText text={c.faq5A} language={language} as="p" className="text-muted-foreground" />
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
              <Card key={index} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${system.color}`} />
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${system.color} flex items-center justify-center mb-4`}>
                    <system.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{system.title}</h3>
                  <LinkedText text={system.desc} language={language} as="p" className="text-muted-foreground text-sm mb-4" />
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.processTitle}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{c.processSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{step.num}</span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg mb-4 italic">"{c.testimonial1}"</p>
              <p className="text-sm text-muted-foreground">{c.testimonial1Author}</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg mb-4 italic">"{c.testimonial2}"</p>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{c.ctaTitle}</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8">{c.ctaSubtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={goToContact} className="bg-gradient-to-r from-primary to-orange-600" data-testid="button-cta-consultation">
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

      <TrustCallToAction />
      <CrossLinks currentPage="installation-antalya" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
