import { Shield } from "lucide-react";

const logos = [
  { name: "Vaillant", tagline: "Isıtma Lideri" },
  { name: "Samsung", tagline: "Klima & Depolama" },
  { name: "SMA", tagline: "İnverter Teknolojisi" },
  { name: "BYD", tagline: "Batarya Sistemleri" },
  { name: "Fronius", tagline: "Solar Çözümler" },
  { name: "Viessmann", tagline: "Alman Mühendisliği" },
];

export default function LogoCarousel() {
  return (
    <section className="py-16 md:py-20 bg-card border-y border-border" data-testid="section-logos">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Dünya Lideri Markalar</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Sadece En İyi Markalarla Çalışıyoruz
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alman ve dünya kalite standartlarında, uzun ömürlü ve garantili ürünler kullanıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="bg-background rounded-xl p-6 text-center border border-border hover-elevate transition-all"
              data-testid={`logo-${logo.name.toLowerCase()}`}
            >
              <div className="text-2xl font-bold text-foreground mb-1">{logo.name}</div>
              <div className="text-xs text-muted-foreground">{logo.tagline}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Orijinal Ürün Garantisi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span>Yetkili Servis Ağı</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span>10+ Yıl Parça Garantisi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
