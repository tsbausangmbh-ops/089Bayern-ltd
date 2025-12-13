import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";

export default function Footer() {
  const { language } = useLanguage();
  const t = uiTranslations[language];

  const quickLinks = [
    { label: t.footer.system, href: "#features" },
    { label: t.footer.benefits, href: "#benefits" },
    { label: t.footer.calculator, href: "#calculator" },
    { label: t.footer.ourTeam, href: "#team" },
  ];

  const products = [
    { name: t.footer.vaillantHeatPump, desc: t.footer.vaillantDesc },
    { name: t.footer.solarPanel, desc: t.footer.solarDesc },
    { name: t.footer.samsungClimate, desc: t.footer.samsungDesc },
    { name: t.footer.bydBattery, desc: t.footer.bydDesc },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 md:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
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
            <h4 className="font-semibold text-white mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
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
                  <span className="text-white">{product.name}</span>
                  <span className="text-xs block">{product.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+905071922036"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <span className="block text-white font-medium">+90 507 192 2036</span>
                    <span className="text-xs text-white/60">{t.footer.turkeyLine}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905071922036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5 text-green-400" />
                  <div>
                    <span className="block text-white font-medium">{t.footer.whatsapp}</span>
                    <span className="text-xs text-white/60">{t.footer.quickComm}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@089bayern.tr"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <span className="block text-white font-medium">info@089bayern.tr</span>
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

        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="/kvkk" className="hover:text-white transition-colors" data-testid="link-kvkk">
                {t.footer.privacy}
              </a>
              <a href="/gizlilik" className="hover:text-white transition-colors" data-testid="link-privacy">
                {t.footer.privacyPolicy}
              </a>
              <a href="/cerez-politikasi" className="hover:text-white transition-colors" data-testid="link-cookies">
                Çerez Politikası
              </a>
              <a href="/sartlar" className="hover:text-white transition-colors" data-testid="link-terms">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
