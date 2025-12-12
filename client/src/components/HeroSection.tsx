import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

interface HeroSectionProps {
  onCtaClick?: () => void;
  onLearnMoreClick?: () => void;
}

export default function HeroSection({ onCtaClick, onLearnMoreClick }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center py-32">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <span className="text-white/90 text-sm font-medium">
            Alman Kalitesi ile Enerji Bağımsızlığı
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          4'ü 1 Arada Akıllı
          <br />
          <span className="text-primary-foreground">Enerji Sistemi</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Isıtma, soğutma, güneş enerjisi ve enerji depolama - hepsi tek bir sistemde.
          Enerji maliyetlerinizi <strong className="text-white">%70'e kadar</strong> azaltın.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="text-lg px-8 py-6"
            data-testid="button-hero-cta"
          >
            Tasarruf Hesapla
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onLearnMoreClick}
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white"
            data-testid="button-hero-learn-more"
          >
            Daha Fazla Bilgi
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {[
            "Alman Kalitesi",
            "10+ Yıl Garanti",
            "Türkiye'ye Özel",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/90">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
