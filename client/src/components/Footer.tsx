import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xl">089</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">Bayern</span>
                <span className="block text-xs text-white/60">Enerji Sistemleri</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Alman mühendisliği ile tasarlanmış, Türkiye'nin Akdeniz iklimi için 
              özelleştirilmiş 4'ü 1 arada enerji çözümleri.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Award className="w-4 h-4" />
                <span>Alman Kalitesi</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Shield className="w-4 h-4" />
                <span>10 Yıl Garanti</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "4'ü 1 Arada Sistem", href: "#features" },
                { label: "Avantajlar", href: "#benefits" },
                { label: "Tasarruf Hesapla", href: "#calculator" },
                { label: "Ekibimiz", href: "#team" },
              ].map((link) => (
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
            <h4 className="font-semibold text-white mb-6">Sistemlerimiz</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Isı Pompası", desc: "Verimli ısıtma" },
                { name: "Güneş Paneli", desc: "Elektrik üretimi" },
                { name: "Akıllı Soğutma", desc: "Konforlu serinlik" },
                { name: "Enerji Depolama", desc: "7/24 bağımsızlık" },
              ].map((product) => (
                <li key={product.name} className="text-white/60">
                  <span className="text-white">{product.name}</span>
                  <span className="text-xs block">{product.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">İletişim</h4>
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
                    <span className="text-xs text-white/60">Türkiye Hattı</span>
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
                    <span className="block text-white font-medium">WhatsApp</span>
                    <span className="text-xs text-white/60">Hızlı İletişim</span>
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
                    <span className="text-xs text-white/60">E-posta</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Antalya Ofis</span>
                  <span className="text-xs text-white/60">Akdeniz Bölge Merkezi</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} 089 Bayern Enerji Sistemleri. Tüm hakları saklıdır.</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors" data-testid="link-kvkk">
                KVKK Aydınlatma Metni
              </a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-terms">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
