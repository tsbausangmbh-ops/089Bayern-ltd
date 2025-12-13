import { Shield, Award, Wrench } from "lucide-react";

const logos = [
  { name: "Vaillant", tagline: "Isıtma Lideri" },
  { name: "Viessmann", tagline: "Alman Mühendisliği" },
  { name: "Samsung", tagline: "Klima & Depolama" },
  { name: "SMA", tagline: "İnverter Teknolojisi" },
  { name: "BYD", tagline: "Batarya Sistemleri" },
  { name: "Fronius", tagline: "Solar Çözümler" },
];

export default function LogoCarousel() {
  return (
    <section className="py-4 md:py-6 bg-gradient-to-b from-background to-card/50 border-y border-border/50" data-testid="section-logos">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-foreground">Premium Markalar</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Türkiye'de Yetkili Kurulum:{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              Premium Enerji Markaları
            </span>
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Vaillant, Samsung, BYD ve Fronius yetkili bayisi olarak Antalya ve Akdeniz'de 
            orijinal ürün garantisi ile kurulum yapıyoruz. 10-25 yıl üretici garantisi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="bg-card/80 rounded-xl p-6 border border-border/50 hover-elevate transition-all group flex flex-col items-center justify-center"
              data-testid={`logo-${logo.name.toLowerCase()}`}
            >
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1 text-center">
                {logo.name}
              </div>
              <div className="text-xs text-muted-foreground text-center">{logo.tagline}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-3 bg-card/50 px-4 py-2 rounded-full border border-border/50">
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
            <span className="text-sm text-foreground">Orijinal Ürün Garantisi</span>
          </div>
          <div className="flex items-center gap-3 bg-card/50 px-4 py-2 rounded-full border border-border/50">
            <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
            <span className="text-sm text-foreground">Yetkili Servis Ağı</span>
          </div>
          <div className="flex items-center gap-3 bg-card/50 px-4 py-2 rounded-full border border-border/50">
            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
            <span className="text-sm text-foreground">10+ Yıl Parça Garantisi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
