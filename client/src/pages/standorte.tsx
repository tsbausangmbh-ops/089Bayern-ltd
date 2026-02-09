import { MapPin, Sun, Flame, Wind, Battery, Building, Wrench, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/LanguageContext";
import { getLocalizedUrl } from "@/lib/urlTranslations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroImage from "@assets/images/optimized/hero-villa-solar.jpg";

export default function Standorte() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const systemUrl = getLocalizedUrl("system", language);
  const calculatorUrl = getLocalizedUrl("calculator", language);
  const benefitsUrl = getLocalizedUrl("benefits", language);
  const aboutUrl = getLocalizedUrl("about", language);
  const faqUrl = getLocalizedUrl("faq", language);

  const seoLinks = {
    systems: [
      { label: "Güneş Paneli Antalya", href: systemUrl, title: "Antalya güneş paneli kurulumu fiyatları - 089 Bayern" },
      { label: "Solar Panel Alanya", href: systemUrl, title: "Alanya villa solar panel sistemleri kurulum" },
      { label: "Güneş Enerjisi Fethiye", href: systemUrl, title: "Fethiye güneş enerjisi kurulumu maliyeti" },
      { label: "Solar Sistem Bodrum", href: systemUrl, title: "Bodrum solar panel montajı Alman kalite" },
      { label: "Fotovoltaik Kaş", href: systemUrl, title: "Kaş fotovoltaik PV sistemler kurulum" },
      { label: "PV Anlage Side", href: systemUrl, title: "Side PV sistemleri güneş enerjisi" },
      { label: "Villa Güneş Paneli", href: systemUrl, title: "Villa için güneş paneli sistemi Akdeniz" },
      { label: "Çatı Solar Panel", href: systemUrl, title: "Çatı tipi solar panel kurulumu Türkiye" },
      { label: "Solar Panel Fiyat 2024", href: calculatorUrl, title: "2024 güneş paneli fiyatları hesaplama" },
      { label: "10kW Solar Sistem", href: systemUrl, title: "10kW güneş paneli sistemi villa için" },
    ],
    heatPumps: [
      { label: "Isı Pompası Antalya", href: systemUrl, title: "Antalya ısı pompası kurulumu fiyat" },
      { label: "Wärmepumpe Alanya", href: systemUrl, title: "Alanya Wärmepumpe ısı pompası sistemleri" },
      { label: "Isıtma Sistemi Türkiye", href: systemUrl, title: "Türkiye villa ısıtma çözümleri" },
      { label: "Vaillant Isı Pompası", href: systemUrl, title: "Vaillant ısı pompası yetkili bayi Türkiye" },
      { label: "Havuz Isıtma Sistemi", href: systemUrl, title: "Villa havuz ısıtma ısı pompası Antalya" },
      { label: "Yerden Isıtma", href: systemUrl, title: "Yerden ısıtma sistemi ısı pompası" },
      { label: "Isı Pompası Kurulum Maliyeti", href: calculatorUrl, title: "Isı pompası kurulum maliyeti hesaplama 2024" },
      { label: "Hava Kaynaklı Isı Pompası", href: systemUrl, title: "Hava kaynaklı ısı pompası villa Antalya" },
    ],
    climate: [
      { label: "Klima Sistemi Antalya", href: systemUrl, title: "Antalya klima kurulumu Samsung inverter" },
      { label: "Samsung Klima Türkiye", href: systemUrl, title: "Samsung klima sistemleri yetkili servis" },
      { label: "Inverter Klima Alanya", href: systemUrl, title: "Alanya inverter klima tasarruflu" },
      { label: "Soğutma Sistemi Bodrum", href: systemUrl, title: "Bodrum villa soğutma çözümleri" },
      { label: "VRF Klima Sistemi", href: systemUrl, title: "VRF multi split klima sistemi villa" },
      { label: "Merkezi Klima", href: systemUrl, title: "Merkezi klima sistemi villa otel" },
      { label: "Enerji Tasarruflu Klima", href: benefitsUrl, title: "Enerji tasarruflu inverter klima A++" },
      { label: "Villa Klima Montaj", href: systemUrl, title: "Villa klima montaj kurulum Antalya" },
    ],
    battery: [
      { label: "Enerji Depolama Türkiye", href: systemUrl, title: "Türkiye enerji depolama sistemleri lityum" },
      { label: "BYD Batarya Antalya", href: systemUrl, title: "BYD batarya depolama yetkili bayi" },
      { label: "Akü Sistemi Alanya", href: systemUrl, title: "Alanya lityum akü depolama sistemi" },
      { label: "Stromspeicher Türkei", href: systemUrl, title: "Stromspeicher Türkiye elektrik depolama" },
      { label: "Ev Bataryası", href: systemUrl, title: "Ev tipi batarya depolama sistemi" },
      { label: "Off-Grid Sistem", href: systemUrl, title: "Off-grid bağımsız enerji sistemi" },
      { label: "Lityum Batarya Fiyat", href: calculatorUrl, title: "Lityum batarya enerji depolama fiyat 2024" },
      { label: "Kesintisiz Enerji", href: systemUrl, title: "Kesintisiz enerji depolama sistemi villa" },
    ],
    brand: [
      { label: "089 Bayern Enerji", href: "/", title: "089 Bayern Alman enerji teknolojisi Türkiye" },
      { label: "Alman Kalitesi Türkiye", href: aboutUrl, title: "Almanya kalitesi enerji sistemleri Türkiye" },
      { label: "Deutsche Qualität Antalya", href: aboutUrl, title: "Deutsche Qualität Alman kalitesi Antalya" },
      { label: "German Engineering Turkey", href: aboutUrl, title: "German engineering solar systems Turkey" },
      { label: "Antalya Türkiye", href: aboutUrl, title: "Antalya Türkiye enerji sistemleri merkezi 089 Bayern" },
      { label: "DIN Standartları", href: systemUrl, title: "DIN standartları Alman kalite sertifikası" },
      { label: "TÜV Sertifikalı", href: benefitsUrl, title: "TÜV sertifikalı enerji sistemleri Almanya" },
      { label: "Made in Germany", href: aboutUrl, title: "Made in Germany Alman üretimi solar sistem" },
    ],
    services: [
      { label: "Enerji Tasarruf Hesaplama", href: calculatorUrl, title: "Ücretsiz enerji tasarruf hesaplayıcı online" },
      { label: "Ücretsiz Keşif", href: calculatorUrl, title: "Ücretsiz keşif ve teklif Antalya Alanya" },
      { label: "4'ü 1 Arada Sistem", href: systemUrl, title: "4 in 1 entegre enerji çözümleri villa" },
      { label: "Enerji Danışmanlığı", href: faqUrl, title: "Profesyonel enerji danışmanlık hizmetleri" },
      { label: "10 Yıl Garanti", href: benefitsUrl, title: "10 yıl sistem garantisi Alman kalite" },
      { label: "%70 Tasarruf", href: benefitsUrl, title: "Yıllık %70 enerji tasarrufu hesaplama" },
      { label: "Anahtar Teslim Kurulum", href: systemUrl, title: "Anahtar teslim solar panel kurulum hizmeti" },
      { label: "7/24 Teknik Destek", href: faqUrl, title: "7/24 teknik destek enerji sistemleri" },
    ],
    regionsturkey: [
      { label: "Antalya", href: systemUrl, title: "Antalya güneş paneli ısı pompası kurulum" },
      { label: "Alanya", href: systemUrl, title: "Alanya solar panel ısı pompası montaj" },
      { label: "Fethiye", href: systemUrl, title: "Fethiye güneş enerjisi sistemleri kurulum" },
      { label: "Bodrum", href: systemUrl, title: "Bodrum villa enerji sistemleri" },
      { label: "Marmaris", href: systemUrl, title: "Marmaris solar panel klima kurulum" },
      { label: "Kaş", href: systemUrl, title: "Kaş güneş paneli ısı pompası" },
      { label: "Side", href: systemUrl, title: "Side enerji sistemleri Alman kalite" },
      { label: "Kemer", href: systemUrl, title: "Kemer solar panel kurulum fiyat" },
      { label: "Belek", href: systemUrl, title: "Belek villa güneş enerjisi" },
      { label: "Manavgat", href: systemUrl, title: "Manavgat enerji sistemleri montaj" },
      { label: "İzmir", href: systemUrl, title: "İzmir güneş paneli ısı pompası" },
      { label: "Muğla", href: systemUrl, title: "Muğla solar enerji sistemleri" },
      { label: "Mersin", href: systemUrl, title: "Mersin güneş enerjisi kurulum" },
      { label: "Kuşadası", href: systemUrl, title: "Kuşadası solar panel montaj" },
      { label: "Didim", href: systemUrl, title: "Didim enerji sistemleri fiyat" },
      { label: "Gazipaşa", href: systemUrl, title: "Gazipaşa güneş paneli kurulum" },
      { label: "Mahmutlar", href: systemUrl, title: "Mahmutlar solar panel montaj" },
      { label: "Avsallar", href: systemUrl, title: "Avsallar enerji sistemleri" },
      { label: "Kalkan", href: systemUrl, title: "Kalkan villa güneş enerjisi kurulum" },
      { label: "Dalyan", href: systemUrl, title: "Dalyan solar panel ısı pompası" },
    ],
    regionscroatia: [
      { label: "Split", href: systemUrl, title: "Split solarni paneli toplinska pumpa Hrvatska" },
      { label: "Dubrovnik", href: systemUrl, title: "Dubrovnik solarna energija instalacija" },
      { label: "Zadar", href: systemUrl, title: "Zadar fotonapon toplinska pumpa montaža" },
      { label: "Šibenik", href: systemUrl, title: "Šibenik solarni sustavi vila" },
      { label: "Hvar", href: systemUrl, title: "Hvar otok solarna energija" },
      { label: "Makarska", href: systemUrl, title: "Makarska solarni paneli klima" },
      { label: "Trogir", href: systemUrl, title: "Trogir energetski sustavi" },
      { label: "Dalmatia", href: systemUrl, title: "Dalmacija solarni paneli toplinska pumpa" },
    ],
    regionsgreece: [
      { label: "Rhodes", href: systemUrl, title: "Rhodes solar panels heat pump installation" },
      { label: "Crete", href: systemUrl, title: "Crete photovoltaic systems German quality" },
      { label: "Corfu", href: systemUrl, title: "Corfu solar energy villa installation" },
      { label: "Kos", href: systemUrl, title: "Kos island solar panel heat pump" },
      { label: "Santorini", href: systemUrl, title: "Santorini solar energy systems" },
      { label: "Mykonos", href: systemUrl, title: "Mykonos villa solar installation" },
    ],
    longtail: [
      { label: "Villa Güneş Paneli Fiyat 2024", href: calculatorUrl, title: "Villa güneş paneli fiyat 2024 hesaplama Antalya" },
      { label: "Enerji Bağımsızlığı Hesaplama", href: calculatorUrl, title: "Enerji bağımsızlığı maliyet hesaplama 2024" },
      { label: "Solar Panel Elektrik Faturası", href: benefitsUrl, title: "Solar panel ile elektrik faturası düşürme" },
      { label: "Güneş Enerjisi Yatırım Geri Dönüş", href: benefitsUrl, title: "Güneş enerjisi yatırım geri dönüş süresi" },
      { label: "Yazlık Ev Enerji Çözümü", href: systemUrl, title: "Yazlık ev için enerji çözümü Akdeniz" },
      { label: "Alman Teknoloji Türkiye", href: aboutUrl, title: "Alman teknoloji enerji sistemleri Türkiye" },
      { label: "Akdeniz Villa Enerji", href: systemUrl, title: "Akdeniz villa enerji bağımsızlığı çözümü" },
      { label: "Hibrit Enerji Sistemi", href: systemUrl, title: "Hibrit enerji sistemi solar ısı pompası batarya" },
    ],
  };

  const categories = [
    { key: "systems", title: "Güneş Enerjisi", icon: Sun, color: "text-primary", bgColor: "bg-primary/10" },
    { key: "heatPumps", title: "Isı Pompası", icon: Flame, color: "text-orange-500", bgColor: "bg-orange-500/10" },
    { key: "climate", title: "Klima Sistemleri", icon: Wind, color: "text-sky-500", bgColor: "bg-sky-500/10" },
    { key: "battery", title: "Enerji Depolama", icon: Battery, color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
    { key: "brand", title: "089 Bayern", icon: Award, color: "text-amber-500", bgColor: "bg-amber-500/10" },
    { key: "services", title: "Hizmetlerimiz", icon: Wrench, color: "text-violet-500", bgColor: "bg-violet-500/10" },
  ];

  const regions = [
    { key: "regionsturkey", title: "Türkiye", color: "text-rose-400", bgColor: "bg-rose-400/10" },
    { key: "regionscroatia", title: "Hrvatska / Croatia", color: "text-blue-400", bgColor: "bg-blue-400/10" },
    { key: "regionsgreece", title: "Greece", color: "text-cyan-400", bgColor: "bg-cyan-400/10" },
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <SEOHead page="standorte" />
      <Header />
      
      <section className="relative py-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">Akdeniz Bölgesi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Türkiye'de Enerji Çözümleri
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Akdeniz, Ege, Dalmaçya ve Yunan Adaları'nda güneş enerjisi, ısı pompası, klima ve enerji depolama kurulumu
          </p>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              const links = seoLinks[category.key as keyof typeof seoLinks];
              return (
                <Card key={category.key} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h2 className={`text-xl font-bold mb-4 ${category.color}`}>{category.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {links.map((link) => (
                        <a 
                          key={link.label} 
                          href={link.href} 
                          title={link.title}
                          className="px-3 py-1.5 bg-muted rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-4">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Hizmet Bölgeleri</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bölgelerimiz
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Akdeniz havzasında profesyonel enerji çözümleri sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region) => {
              const links = seoLinks[region.key as keyof typeof seoLinks];
              return (
                <Card key={region.key} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${region.bgColor} flex items-center justify-center mb-4`}>
                      <MapPin className={`w-6 h-6 ${region.color}`} />
                    </div>
                    <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-4 ${region.color}`}>{region.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {links.map((link) => (
                        <a 
                          key={link.label} 
                          href={link.href} 
                          title={link.title}
                          className="px-3 py-1.5 bg-muted rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-yellow-600 mb-4 text-center">Popüler Aramalar</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {seoLinks.longtail.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    title={link.title}
                    className="px-4 py-2 bg-background rounded-lg text-sm text-muted-foreground hover:text-foreground hover:shadow-sm transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ücretsiz Enerji Analizi
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8">
            Bölgenize özel enerji tasarruf potansiyelinizi hesaplayın
          </p>
          <Button size="lg" asChild>
            <a href={getLocalizedUrl("calculator", language)} className="gap-2">
              Hesaplamaya Başla
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
