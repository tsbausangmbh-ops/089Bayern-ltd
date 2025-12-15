import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function Footer() {
  const { language } = useLanguage();
  const t = uiTranslations[language];

  const legalLinks = [
    { label: t.footer.privacy, href: "/kvkk" },
    { label: t.footer.privacyPolicy, href: "/gizlilik" },
    { label: t.footer.cookiePolicy, href: "/cerez-politikasi" },
    { label: t.footer.terms, href: "/sartlar" },
    { label: t.footer.distanceSales, href: "/mesafeli-satis" },
    { label: t.footer.preInfo, href: "/on-bilgilendirme" },
  ];

  const products = [
    { name: t.footer.vaillantHeatPump, desc: t.footer.vaillantDesc, href: "/systeme" },
    { name: t.footer.solarPanel, desc: t.footer.solarDesc, href: "/systeme" },
    { name: t.footer.samsungClimate, desc: t.footer.samsungDesc, href: "/systeme" },
    { name: t.footer.bydBattery, desc: t.footer.bydDesc, href: "/systeme" },
  ];

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

  const mainNavLinks = [
    { label: t.nav?.home || "Ana Sayfa", href: "/" },
    { label: t.nav?.systems || "4-in-1 Sistem", href: "/systeme" },
    { label: t.nav?.benefits || "Avantajlar", href: "/vorteile" },
    { label: t.nav?.calculator || "Tasarruf Hesaplama", href: "/rechner" },
    { label: t.nav?.about || "Hakkımızda", href: "/ueber-uns" },
    { label: t.nav?.faq || "SSS", href: "/faq" },
  ];

  return (
    <footer className="relative text-white overflow-hidden" data-testid="footer-main">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xl">089</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">Bayern</span>
                <span className="block text-xs text-white/60">{t.footer.tagline}</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Award className="w-4 h-4" />
                <span>{t.footer.germanQuality}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Shield className="w-4 h-4" />
                <span>{t.footer.guarantee}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">{t.footer.legal}</h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid={`link-footer-${link.href.replace("/", "")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">{t.footer.energySystems}</h4>
            <ul className="space-y-3 text-sm">
              {products.map((product) => (
                <li key={product.name} className="text-white/60">
                  <a 
                    href={product.href} 
                    className="text-white hover:text-primary transition-colors"
                    data-testid={`link-product-${product.name.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {product.name}
                  </a>
                  <span className="text-xs block">{product.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">{t.nav?.pages || "Sayfalar"}</h4>
            <ul className="space-y-3 text-sm">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-wrap gap-4">
                <a
                  href="tel:+905071832036"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-4 h-4" />
                  <div>
                    <span className="block text-white font-medium text-sm">+90 507 183 2036</span>
                    <span className="text-xs text-white/60">TR</span>
                  </div>
                </a>
                <a
                  href="tel:+491735994699"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-phone-de"
                >
                  <Phone className="w-4 h-4" />
                  <div>
                    <span className="block text-white font-medium text-sm">+49 173 5994699</span>
                    <span className="text-xs text-white/60">DE</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905071832036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="block text-white font-medium">{t.footer.whatsapp}</span>
                    <span className="text-xs text-white/60">{t.footer.quickComm}</span>
                    <span className="text-xs text-white/40 block mt-0.5">WhatsApp Inc. gizlilik politikasi gecerlidir</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@089bayern.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <span className="block text-white font-medium">info@089bayern.com</span>
                    <span className="text-xs text-white/60">{t.footer.email}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">{t.footer.antalyaOffice}</span>
                  <span className="text-xs text-white/60">{t.footer.regionalHQ}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-white mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              {t.footer.serviceAreas || "Hizmet Bölgelerimiz"}
            </h4>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-white/60">
              {["Antalya", "Alanya", "Kemer", "Belek", "Side", "Manavgat", "Mahmutlar", "Konaklı", "Gazipaşa", "Kaş", "Fethiye", "Muğla", "Bodrum", "Marmaris", "İzmir", "Kuşadası", "Didim", "Aydın", "Mersin", "Kalkan", "Dalyan", "Split", "Dubrovnik", "Zadar", "Šibenik", "Hvar", "Makarska", "Trogir", "Dalmatia", "Rhodes", "Crete", "Corfu", "Kos", "Santorini", "Mykonos"].map((city) => (
                <span key={city} className="px-2 py-1 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-3">
              {t.footer.serviceAreasNote || "Akdeniz, Ege, Dalmaçya ve Yunan Adaları'nda güneş enerjisi, ısı pompası, klima ve enerji depolama kurulumu"}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10">
          <h4 className="font-semibold text-white mb-4 text-center">Türkiye'de Enerji Çözümleri</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <h5 className="text-xs font-semibold text-primary mb-2">Güneş Enerjisi</h5>
              <div className="flex flex-wrap gap-1">
                {seoLinks.systems.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-orange-400 mb-2">Isı Pompası</h5>
              <div className="flex flex-wrap gap-1">
                {seoLinks.heatPumps.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-sky-400 mb-2">Klima Sistemleri</h5>
              <div className="flex flex-wrap gap-1">
                {seoLinks.climate.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-emerald-400 mb-2">Enerji Depolama</h5>
              <div className="flex flex-wrap gap-1">
                {seoLinks.battery.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-amber-400 mb-2">089 Bayern</h5>
              <div className="flex flex-wrap gap-1">
                {seoLinks.brand.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-violet-400 mb-2">Hizmetlerimiz</h5>
              <div className="flex flex-wrap gap-1">
                {seoLinks.services.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <h5 className="text-xs font-semibold text-rose-400 mb-2 text-center">Türkiye</h5>
              <div className="flex flex-wrap justify-center gap-1">
                {seoLinks.regionsturkey.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-blue-400 mb-2 text-center">Hrvatska / Croatia</h5>
              <div className="flex flex-wrap justify-center gap-1">
                {seoLinks.regionscroatia.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-cyan-400 mb-2 text-center">Greece</h5>
              <div className="flex flex-wrap justify-center gap-1">
                {seoLinks.regionsgreece.map((link) => (
                  <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h5 className="text-xs font-semibold text-yellow-400 mb-2 text-center">Popüler Aramalar</h5>
            <div className="flex flex-wrap justify-center gap-1">
              {seoLinks.longtail.map((link) => (
                <a key={link.label} href={link.href} title={link.title} className="px-2 py-1 bg-white/5 rounded text-xs text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>&copy; 2024 <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline" data-testid="link-extrucon">{t.footer.copyright}</a></p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="text-xs text-white/50 text-center space-y-1" data-testid="footer-impressum">
            <p className="font-medium text-white/70">089 Bayern Enerji Sistemleri Ltd. Sti.</p>
            <p>Sekerhane Mah. Halimaga Sk. Lale Tokus Plaza 6/14, Alanya/Antalya, Turkiye</p>
            <p>Tel: +90 507 183 2036 | +49 173 5994699 | E-posta: info@089bayern.com</p>
            <p>Yoneticiler: Dalibor Bakmaz (dbakmaz@089bayern.com) | Mustafa Sakar (msakar@089bayern.com)</p>
            <p>Ticaret Sicil No: [Kayit sonrasi] | MERSIS No: [Kayit sonrasi]</p>
            <p>Vergi Dairesi: [Kayit sonrasi] | Vergi No: [Kayit sonrasi]</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
