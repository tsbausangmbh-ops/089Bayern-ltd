import { MapPin, Sun, Flame, Wind, Battery, Building, Wrench, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function Standorte() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const seoLinks = {
    systems: [
      { label: "Güneş Paneli Antalya", href: "/systeme", title: "Antalya güneş paneli kurulumu fiyatları - 089 Bayern" },
      { label: "Solar Panel Alanya", href: "/systeme", title: "Alanya villa solar panel sistemleri kurulum" },
      { label: "Güneş Enerjisi Fethiye", href: "/systeme", title: "Fethiye güneş enerjisi kurulumu maliyeti" },
      { label: "Solar Sistem Bodrum", href: "/systeme", title: "Bodrum solar panel montajı Alman kalite" },
      { label: "Fotovoltaik Kaş", href: "/systeme", title: "Kaş fotovoltaik PV sistemler kurulum" },
      { label: "PV Anlage Side", href: "/systeme", title: "Side PV sistemleri güneş enerjisi" },
      { label: "Villa Güneş Paneli", href: "/systeme", title: "Villa için güneş paneli sistemi Akdeniz" },
      { label: "Çatı Solar Panel", href: "/systeme", title: "Çatı tipi solar panel kurulumu Türkiye" },
      { label: "Solar Panel Fiyat 2024", href: "/rechner", title: "2024 güneş paneli fiyatları hesaplama" },
      { label: "10kW Solar Sistem", href: "/systeme", title: "10kW güneş paneli sistemi villa için" },
    ],
    heatPumps: [
      { label: "Isı Pompası Antalya", href: "/systeme", title: "Antalya ısı pompası kurulumu fiyat" },
      { label: "Wärmepumpe Alanya", href: "/systeme", title: "Alanya Wärmepumpe ısı pompası sistemleri" },
      { label: "Isıtma Sistemi Türkiye", href: "/systeme", title: "Türkiye villa ısıtma çözümleri" },
      { label: "Vaillant Isı Pompası", href: "/systeme", title: "Vaillant ısı pompası yetkili bayi Türkiye" },
      { label: "Havuz Isıtma Sistemi", href: "/systeme", title: "Villa havuz ısıtma ısı pompası Antalya" },
      { label: "Yerden Isıtma", href: "/systeme", title: "Yerden ısıtma sistemi ısı pompası" },
      { label: "Isı Pompası Kurulum Maliyeti", href: "/rechner", title: "Isı pompası kurulum maliyeti hesaplama 2024" },
      { label: "Hava Kaynaklı Isı Pompası", href: "/systeme", title: "Hava kaynaklı ısı pompası villa Antalya" },
    ],
    climate: [
      { label: "Klima Sistemi Antalya", href: "/systeme", title: "Antalya klima kurulumu Samsung inverter" },
      { label: "Samsung Klima Türkiye", href: "/systeme", title: "Samsung klima sistemleri yetkili servis" },
      { label: "Inverter Klima Alanya", href: "/systeme", title: "Alanya inverter klima tasarruflu" },
      { label: "Soğutma Sistemi Bodrum", href: "/systeme", title: "Bodrum villa soğutma çözümleri" },
      { label: "VRF Klima Sistemi", href: "/systeme", title: "VRF multi split klima sistemi villa" },
      { label: "Merkezi Klima", href: "/systeme", title: "Merkezi klima sistemi villa otel" },
      { label: "Enerji Tasarruflu Klima", href: "/vorteile", title: "Enerji tasarruflu inverter klima A++" },
      { label: "Villa Klima Montaj", href: "/systeme", title: "Villa klima montaj kurulum Antalya" },
    ],
    battery: [
      { label: "Enerji Depolama Türkiye", href: "/systeme", title: "Türkiye enerji depolama sistemleri lityum" },
      { label: "BYD Batarya Antalya", href: "/systeme", title: "BYD batarya depolama yetkili bayi" },
      { label: "Akü Sistemi Alanya", href: "/systeme", title: "Alanya lityum akü depolama sistemi" },
      { label: "Stromspeicher Türkei", href: "/systeme", title: "Stromspeicher Türkiye elektrik depolama" },
      { label: "Ev Bataryası", href: "/systeme", title: "Ev tipi batarya depolama sistemi" },
      { label: "Off-Grid Sistem", href: "/systeme", title: "Off-grid bağımsız enerji sistemi" },
      { label: "Lityum Batarya Fiyat", href: "/rechner", title: "Lityum batarya enerji depolama fiyat 2024" },
      { label: "Kesintisiz Enerji", href: "/systeme", title: "Kesintisiz enerji depolama sistemi villa" },
    ],
    brand: [
      { label: "089 Bayern Enerji", href: "/", title: "089 Bayern Alman enerji teknolojisi Türkiye" },
      { label: "Alman Kalitesi Türkiye", href: "/ueber-uns", title: "Almanya kalitesi enerji sistemleri Türkiye" },
      { label: "Deutsche Qualität Antalya", href: "/ueber-uns", title: "Deutsche Qualität Alman kalitesi Antalya" },
      { label: "German Engineering Turkey", href: "/ueber-uns", title: "German engineering solar systems Turkey" },
      { label: "München Antalya", href: "/ueber-uns", title: "München Antalya enerji köprüsü 089 Bayern" },
      { label: "DIN Standartları", href: "/systeme", title: "DIN standartları Alman kalite sertifikası" },
      { label: "TÜV Sertifikalı", href: "/vorteile", title: "TÜV sertifikalı enerji sistemleri Almanya" },
      { label: "Made in Germany", href: "/ueber-uns", title: "Made in Germany Alman üretimi solar sistem" },
    ],
    services: [
      { label: "Enerji Tasarruf Hesaplama", href: "/rechner", title: "Ücretsiz enerji tasarruf hesaplayıcı online" },
      { label: "Ücretsiz Keşif", href: "/rechner", title: "Ücretsiz keşif ve teklif Antalya Alanya" },
      { label: "4'ü 1 Arada Sistem", href: "/systeme", title: "4 in 1 entegre enerji çözümleri villa" },
      { label: "Enerji Danışmanlığı", href: "/faq", title: "Profesyonel enerji danışmanlık hizmetleri" },
      { label: "10 Yıl Garanti", href: "/vorteile", title: "10 yıl sistem garantisi Alman kalite" },
      { label: "%70 Tasarruf", href: "/vorteile", title: "Yıllık %70 enerji tasarrufu hesaplama" },
      { label: "Anahtar Teslim Kurulum", href: "/systeme", title: "Anahtar teslim solar panel kurulum hizmeti" },
      { label: "7/24 Teknik Destek", href: "/faq", title: "7/24 teknik destek enerji sistemleri" },
    ],
    regionsturkey: [
      { label: "Antalya", href: "/systeme", title: "Antalya güneş paneli ısı pompası kurulum" },
      { label: "Alanya", href: "/systeme", title: "Alanya solar panel ısı pompası montaj" },
      { label: "Fethiye", href: "/systeme", title: "Fethiye güneş enerjisi sistemleri kurulum" },
      { label: "Bodrum", href: "/systeme", title: "Bodrum villa enerji sistemleri" },
      { label: "Marmaris", href: "/systeme", title: "Marmaris solar panel klima kurulum" },
      { label: "Kaş", href: "/systeme", title: "Kaş güneş paneli ısı pompası" },
      { label: "Side", href: "/systeme", title: "Side enerji sistemleri Alman kalite" },
      { label: "Kemer", href: "/systeme", title: "Kemer solar panel kurulum fiyat" },
      { label: "Belek", href: "/systeme", title: "Belek villa güneş enerjisi" },
      { label: "Manavgat", href: "/systeme", title: "Manavgat enerji sistemleri montaj" },
      { label: "İzmir", href: "/systeme", title: "İzmir güneş paneli ısı pompası" },
      { label: "Muğla", href: "/systeme", title: "Muğla solar enerji sistemleri" },
      { label: "Mersin", href: "/systeme", title: "Mersin güneş enerjisi kurulum" },
      { label: "Kuşadası", href: "/systeme", title: "Kuşadası solar panel montaj" },
      { label: "Didim", href: "/systeme", title: "Didim enerji sistemleri fiyat" },
      { label: "Gazipaşa", href: "/systeme", title: "Gazipaşa güneş paneli kurulum" },
      { label: "Mahmutlar", href: "/systeme", title: "Mahmutlar solar panel montaj" },
      { label: "Avsallar", href: "/systeme", title: "Avsallar enerji sistemleri" },
      { label: "Kalkan", href: "/systeme", title: "Kalkan villa güneş enerjisi kurulum" },
      { label: "Dalyan", href: "/systeme", title: "Dalyan solar panel ısı pompası" },
    ],
    regionscroatia: [
      { label: "Split", href: "/systeme", title: "Split solarni paneli toplinska pumpa Hrvatska" },
      { label: "Dubrovnik", href: "/systeme", title: "Dubrovnik solarna energija instalacija" },
      { label: "Zadar", href: "/systeme", title: "Zadar fotonapon toplinska pumpa montaža" },
      { label: "Šibenik", href: "/systeme", title: "Šibenik solarni sustavi vila" },
      { label: "Hvar", href: "/systeme", title: "Hvar otok solarna energija" },
      { label: "Makarska", href: "/systeme", title: "Makarska solarni paneli klima" },
      { label: "Trogir", href: "/systeme", title: "Trogir energetski sustavi" },
      { label: "Dalmatia", href: "/systeme", title: "Dalmacija solarni paneli toplinska pumpa" },
    ],
    regionsgreece: [
      { label: "Rhodes", href: "/systeme", title: "Rhodes solar panels heat pump installation" },
      { label: "Crete", href: "/systeme", title: "Crete photovoltaic systems German quality" },
      { label: "Corfu", href: "/systeme", title: "Corfu solar energy villa installation" },
      { label: "Kos", href: "/systeme", title: "Kos island solar panel heat pump" },
      { label: "Santorini", href: "/systeme", title: "Santorini solar energy systems" },
      { label: "Mykonos", href: "/systeme", title: "Mykonos villa solar installation" },
    ],
    longtail: [
      { label: "Villa Güneş Paneli Fiyat 2024", href: "/rechner", title: "Villa güneş paneli fiyat 2024 hesaplama Antalya" },
      { label: "Enerji Bağımsızlığı Hesaplama", href: "/rechner", title: "Enerji bağımsızlığı maliyet hesaplama 2024" },
      { label: "Solar Panel Elektrik Faturası", href: "/vorteile", title: "Solar panel ile elektrik faturası düşürme" },
      { label: "Güneş Enerjisi Yatırım Geri Dönüş", href: "/vorteile", title: "Güneş enerjisi yatırım geri dönüş süresi" },
      { label: "Yazlık Ev Enerji Çözümü", href: "/systeme", title: "Yazlık ev için enerji çözümü Akdeniz" },
      { label: "Alman Teknoloji Türkiye", href: "/ueber-uns", title: "Alman teknoloji enerji sistemleri Türkiye" },
      { label: "Akdeniz Villa Enerji", href: "/systeme", title: "Akdeniz villa enerji bağımsızlığı çözümü" },
      { label: "Hibrit Enerji Sistemi", href: "/systeme", title: "Hibrit enerji sistemi solar ısı pompası batarya" },
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
      <Header />
      
      <section className="relative py-20 overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Türkiye'de Enerji Çözümleri
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Akdeniz, Ege, Dalmaçya ve Yunan Adaları'nda güneş enerjisi, ısı pompası, klima ve enerji depolama kurulumu
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
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

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-4">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Hizmet Bölgeleri</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bölgelerimiz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                    <h3 className={`text-xl font-bold mb-4 ${region.color}`}>{region.title}</h3>
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

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-yellow-600 mb-4 text-center">Popüler Aramalar</h3>
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

      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ücretsiz Enerji Analizi
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Bölgenize özel enerji tasarruf potansiyelinizi hesaplayın
          </p>
          <Button size="lg" asChild>
            <a href="/rechner" className="gap-2">
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
