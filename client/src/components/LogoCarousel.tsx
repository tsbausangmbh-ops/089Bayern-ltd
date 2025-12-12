const logos = [
  { name: "Vaillant", color: "text-foreground" },
  { name: "Samsung", color: "text-foreground" },
  { name: "SMA", color: "text-foreground" },
  { name: "BYD", color: "text-foreground" },
  { name: "Fronius", color: "text-foreground" },
];

export default function LogoCarousel() {
  return (
    <section className="py-12 md:py-16 bg-background border-y border-border" data-testid="section-logos">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Dünya Lideri Markalarla Çalışıyoruz
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`text-2xl font-bold ${logo.color} opacity-60 hover:opacity-100 transition-opacity`}
              data-testid={`logo-${logo.name.toLowerCase()}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
