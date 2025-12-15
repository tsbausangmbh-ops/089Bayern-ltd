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
      { label: "Güneş Paneli Antalya", href: "/systeme", title: "Antalya güneş paneli kurulumu - 089 Bayern" },
      { label: "Solar Panel Alanya", href: "/systeme", title: "Alanya solar panel sistemleri" },
      { label: "Güneş Enerjisi Fethiye", href: "/systeme", title: "Fethiye güneş enerjisi kurulumu" },
      { label: "Solar Sistem Bodrum", href: "/systeme", title: "Bodrum solar panel montajı" },
      { label: "Fotovoltaik Kaş", href: "/systeme", title: "Kaş fotovoltaik sistemler" },
      { label: "PV Anlage Side", href: "/systeme", title: "Side PV sistemleri" },
    ],
    heatPumps: [
      { label: "Isı Pompası Antalya", href: "/systeme", title: "Antalya ısı pompası kurulumu" },
      { label: "Wärmepumpe Alanya", href: "/systeme", title: "Alanya ısı pompası sistemleri" },
      { label: "Isıtma Sistemi Türkiye", href: "/systeme", title: "Türkiye ısıtma çözümleri" },
      { label: "Vaillant Isı Pompası", href: "/systeme", title: "Vaillant ısı pompası Türkiye" },
    ],
    climate: [
      { label: "Klima Sistemi Antalya", href: "/systeme", title: "Antalya klima kurulumu" },
      { label: "Samsung Klima Türkiye", href: "/systeme", title: "Samsung klima sistemleri" },
      { label: "Inverter Klima Alanya", href: "/systeme", title: "Alanya inverter klima" },
      { label: "Soğutma Sistemi Bodrum", href: "/systeme", title: "Bodrum soğutma çözümleri" },
    ],
    battery: [
      { label: "Enerji Depolama Türkiye", href: "/systeme", title: "Türkiye enerji depolama sistemleri" },
      { label: "BYD Batarya Antalya", href: "/systeme", title: "BYD batarya depolama" },
      { label: "Akü Sistemi Alanya", href: "/systeme", title: "Alanya akü depolama" },
      { label: "Stromspeicher Türkei", href: "/systeme", title: "Türkiye elektrik depolama" },
    ],
    brand: [
      { label: "089 Bayern Enerji", href: "/", title: "089 Bayern - Alman enerji teknolojisi" },
      { label: "Alman Kalitesi Türkiye", href: "/ueber-uns", title: "Almanya kalitesi Türkiye'de" },
      { label: "Deutsche Qualität Antalya", href: "/ueber-uns", title: "Alman kalitesi Antalya" },
      { label: "German Engineering Turkey", href: "/ueber-uns", title: "German engineering in Turkey" },
    ],
    services: [
      { label: "Enerji Tasarruf Hesaplama", href: "/rechner", title: "Tasarruf hesaplayıcı" },
      { label: "Ücretsiz Teklif Al", href: "/rechner", title: "Ücretsiz enerji teklifi" },
      { label: "4'ü 1 Arada Sistem", href: "/systeme", title: "Entegre enerji çözümleri" },
      { label: "Enerji Danışmanlığı", href: "/faq", title: "Enerji danışmanlık hizmetleri" },
    ],
    regions: [
      { label: "Antalya", href: "/systeme", title: "Antalya enerji sistemleri" },
      { label: "Alanya", href: "/systeme", title: "Alanya enerji sistemleri" },
      { label: "Fethiye", href: "/systeme", title: "Fethiye enerji sistemleri" },
      { label: "Bodrum", href: "/systeme", title: "Bodrum enerji sistemleri" },
      { label: "Marmaris", href: "/systeme", title: "Marmaris enerji sistemleri" },
      { label: "Kaş", href: "/systeme", title: "Kaş enerji sistemleri" },
      { label: "Side", href: "/systeme", title: "Side enerji sistemleri" },
      { label: "Kemer", href: "/systeme", title: "Kemer enerji sistemleri" },
      { label: "Belek", href: "/systeme", title: "Belek enerji sistemleri" },
      { label: "Manavgat", href: "/systeme", title: "Manavgat enerji sistemleri" },
      { label: "İzmir", href: "/systeme", title: "İzmir enerji sistemleri" },
      { label: "Muğla", href: "/systeme", title: "Muğla enerji sistemleri" },
      { label: "Mersin", href: "/systeme", title: "Mersin enerji sistemleri" },
      { label: "Kuşadası", href: "/systeme", title: "Kuşadası enerji sistemleri" },
      { label: "Didim", href: "/systeme", title: "Didim enerji sistemleri" },
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
              {["Antalya", "Alanya", "Kemer", "Belek", "Side", "Manavgat", "Mahmutlar", "Konaklı", "Gazipaşa", "Kaş", "Fethiye", "Muğla", "Bodrum", "Marmaris", "İzmir", "Kuşadası", "Didim", "Aydın", "Mersin", "Split", "Dalmatia"].map((city) => (
                <span key={city} className="px-2 py-1 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-3">
              {t.footer.serviceAreasNote || "Akdeniz Bölgesi ve Dalmaçya'da güneş enerjisi, ısı pompası, klima ve enerji depolama kurulumu"}
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

          <div>
            <h5 className="text-xs font-semibold text-white/80 mb-2 text-center">Hizmet Bölgelerimiz</h5>
            <div className="flex flex-wrap justify-center gap-1">
              {seoLinks.regions.map((link) => (
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
