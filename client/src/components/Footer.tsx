import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
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
                <span className="block text-xs text-white/60">Energiesysteme</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Installation von Solarenergie-, Wärmepumpen- und Energiespeichersystemen in 
              Antalya, Mugla, Izmir, Aydin und Mersin. Deutsche Ingenieurskunst, türkischer Service. 
              Autorisierter Händler von Vaillant, Samsung und BYD.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Award className="w-4 h-4" />
                <span>Deutsche Qualität</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Shield className="w-4 h-4" />
                <span>10 Jahre Garantie</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Schnelllinks</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "4-in-1 System", href: "#features" },
                { label: "Vorteile", href: "#benefits" },
                { label: "Ersparnis berechnen", href: "#calculator" },
                { label: "Unser Team", href: "#team" },
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
            <h4 className="font-semibold text-white mb-6">Unsere Energiesysteme</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Vaillant Wärmepumpe", desc: "Deutsche Qualitätsheizung" },
                { name: "Solarenergie-Panel", desc: "Premium Solar-Installation" },
                { name: "Samsung Klimasystem", desc: "Inverter-Technologie" },
                { name: "BYD Energiebatterie", desc: "Lithium-Speicher" },
              ].map((product) => (
                <li key={product.name} className="text-white/60">
                  <span className="text-white">{product.name}</span>
                  <span className="text-xs block">{product.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Kontakt</h4>
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
                    <span className="text-xs text-white/60">Türkei-Leitung</span>
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
                    <span className="text-xs text-white/60">Schnelle Kommunikation</span>
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
                    <span className="text-xs text-white/60">E-Mail</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Antalya Büro</span>
                  <span className="text-xs text-white/60">Mittelmeer-Regionszentrale</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} 089 Bayern Energiesysteme. Alle Rechte vorbehalten.</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors" data-testid="link-kvkk">
                Datenschutzerklärung
              </a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">
                Datenschutzrichtlinie
              </a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-terms">
                Nutzungsbedingungen
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
