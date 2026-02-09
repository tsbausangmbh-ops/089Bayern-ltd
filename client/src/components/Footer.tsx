import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import { getLocalizedUrl, getOfficeBadge } from "@/lib/urlTranslations";
import heroImage from "@assets/images/webp/hero-villa-solar.webp";
import logoImage from "@assets/logo-white.webp";

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
    { name: t.footer.vaillantHeatPump, desc: t.footer.vaillantDesc, href: getLocalizedUrl("system", language) },
    { name: t.footer.solarPanel, desc: t.footer.solarDesc, href: getLocalizedUrl("system", language) },
    { name: t.footer.samsungClimate, desc: t.footer.samsungDesc, href: getLocalizedUrl("system", language) },
    { name: t.footer.bydBattery, desc: t.footer.bydDesc, href: getLocalizedUrl("system", language) },
  ];

  const mainNavLinks = [
    { label: t.footer.home, href: "/" },
    { label: t.header.system, href: getLocalizedUrl("system", language) },
    { label: t.header.benefits, href: getLocalizedUrl("benefits", language) },
    { label: t.header.calculator, href: getLocalizedUrl("calculator", language) },
    { label: t.header.team, href: getLocalizedUrl("about", language) },
    { label: t.header.faq, href: getLocalizedUrl("faq", language) },
  ];

  const installationLabel = language === "de" ? "Installation" : language === "en" ? "Installation" : language === "ru" ? "Установка" : language === "uk" ? "Встановлення" : language === "ar" ? "التركيب" : language === "hr" ? "Instalacija" : "Kurulum";
  
  const installationLinks = [
    { label: `Antalya (${getOfficeBadge("headquarters", language)})`, href: getLocalizedUrl("installationAntalya", language) },
    { label: "Alanya", href: getLocalizedUrl("installationAlanya", language) },
    { label: "Ankara", href: getLocalizedUrl("installationAnkara", language) },
  ];

  const solutionLinks = [
    { label: language === "de" ? "Solaranlage" : language === "en" ? "Solar Panel" : language === "tr" ? "Güneş Paneli" : "Solar", href: getLocalizedUrl("solarPanel", language) },
    { label: language === "de" ? "Wärmepumpe" : language === "en" ? "Heat Pump" : language === "tr" ? "Isı Pompası" : "Wärmepumpe", href: getLocalizedUrl("heatPump", language) },
    { label: language === "de" ? "Klimaanlage" : language === "en" ? "Air Conditioning" : language === "tr" ? "Klima" : "Klima", href: getLocalizedUrl("airConditioning", language) },
    { label: language === "de" ? "Batteriespeicher" : language === "en" ? "Battery Storage" : language === "tr" ? "Enerji Depolama" : "Speicher", href: getLocalizedUrl("batteryStorage", language) },
  ];

  return (
    <footer className="relative text-white overflow-hidden" data-testid="footer-main">
      <img
        src={heroImage}
        alt="089 Bayern enerji sistemleri Türkiye footer arka plan güneş paneli Vaillant ısı pompası Samsung klima batarya villa kurulumu Antalya Alanya"
        title="089 Bayern enerji sistemleri Türkiye Antalya Alanya"
        className="absolute inset-0 w-full h-full object-cover"
        decoding="async"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6">
          <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img 
                src={logoImage} 
                alt="089 Bayern Premium 4'ü 1 arada enerji sistemleri Türkiye - Almanya kalitesi güneş paneli Vaillant ısı pompası Samsung klima batarya depolama kurulumu Antalya Alanya Akdeniz villaları" 
                title="089 Bayern Premium enerji sistemleri Türkiye - Vaillant Samsung yetkili bayi güneş paneli ısı pompası Antalya Alanya"
                className="h-12 sm:h-16 w-auto object-contain rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="block text-lg sm:text-xl font-bold text-white">089 Bayern</span>
                <span className="block text-xs sm:text-sm text-white/70">Turkey</span>
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-6">{t.footer.legal}</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
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
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-6">{t.footer.energySystems}</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {products.map((product) => (
                <li key={product.name} className="text-white/60">
                  <a 
                    href={product.href} 
                    className="text-white hover:text-primary transition-colors"
                    data-testid={`link-product-${product.name.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {product.name}
                  </a>
                  <span className="text-[10px] sm:text-xs block">{product.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-6">Sayfalar</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
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
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-6">{language === "de" ? "Lösungen" : language === "en" ? "Solutions" : language === "tr" ? "Çözümler" : "Çözümler"}</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid={`link-solution-${link.href.replace("/", "")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4 mt-4 sm:mt-6">{installationLabel}</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {installationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid={`link-installation-${link.href.replace("/installation-", "")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-1">
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-6">{t.footer.contact}</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="tel:+905071832036"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <div>
                    <span className="block text-white font-medium text-xs sm:text-sm">+90 507 183 2036</span>
                    <span className="text-[10px] sm:text-xs text-white/60">TR</span>
                  </div>
                </a>
                <a
                  href="tel:+491735994699"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-phone-de"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <div>
                    <span className="block text-white font-medium text-xs sm:text-sm">+49 173 5994699</span>
                    <span className="text-[10px] sm:text-xs text-white/60">DE</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/491735994699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  <SiWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <div>
                    <span className="block text-white font-medium text-xs sm:text-sm">{t.footer.whatsapp}</span>
                    <span className="text-[10px] sm:text-xs text-white/60">{t.footer.quickComm}</span>
                    <span className="text-[10px] sm:text-xs text-white/40 block mt-0.5">WhatsApp Inc. gizlilik politikasi gecerlidir</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@089bayern.com"
                  className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div>
                    <span className="block text-white font-medium text-xs sm:text-sm">info@089bayern.com</span>
                    <span className="text-[10px] sm:text-xs text-white/60">{t.footer.email}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-white/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5" />
                <div>
                  <span className="block text-white font-medium text-xs sm:text-sm">{t.footer.antalyaOffice}</span>
                  <span className="text-[10px] sm:text-xs text-white/60">{t.footer.regionalHQ}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-sm text-white/60">
            <p className="text-center md:text-left">
              &copy; 2024{" "}
              <a href="/" className="hover:text-white transition-colors underline" data-testid="link-089bayern">
                089Bayern ltd.
              </a>
              {" – Designed by "}
              <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline" data-testid="link-extrucon">
                ExtruCon GmbH
              </a>
              {" & "}
              <a href="https://kshwmont.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline" data-testid="link-kshwmont">
                KSHWmont d.o.o.
              </a>
              {". "}
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{t.footer.germanQuality}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{t.footer.guarantee}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
          <div className="text-[10px] sm:text-xs text-white/50 text-center space-y-0.5 sm:space-y-1" data-testid="footer-impressum">
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
