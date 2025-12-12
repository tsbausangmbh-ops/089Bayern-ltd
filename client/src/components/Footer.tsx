import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">089</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Bayern</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Alman kalitesi ile üretilmiş 4'ü 1 arada enerji sistemi.
              Isıtma, soğutma, güneş enerjisi ve enerji depolama tek bir çatı altında.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Sistem", href: "#features" },
                { label: "Avantajlar", href: "#benefits" },
                { label: "Hesaplama", href: "#calculator" },
                { label: "Ekip", href: "#team" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Ürünlerimiz</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Isı Pompası",
                "Güneş Paneli",
                "Soğutma Sistemi",
                "Enerji Depolama",
              ].map((product) => (
                <li key={product}>
                  <span className="text-muted-foreground">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+905071922036"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-4 h-4" />
                  <span>+90 507 192 2036</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@089bayern.tr"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@089bayern.tr</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Antalya, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 089 Bayern. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
