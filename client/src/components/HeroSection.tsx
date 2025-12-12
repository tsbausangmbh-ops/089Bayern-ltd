import { Button } from "@/components/ui/button";
import { Check, Shield, Award, MapPin, ArrowRight } from "lucide-react";
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center py-32">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-white text-sm font-medium">Alman Mühendisliği</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-white text-sm font-medium">10+ Yıl Garanti</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span className="text-white text-sm font-medium">Akdeniz'e Özel</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Evinizi Enerji
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
            Bağımsızlığına
          </span>
          <br />
          Kavuşturun
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          <span className="text-white font-semibold">4'ü 1 Arada Akıllı Enerji Sistemi</span> ile ısıtma, soğutma, 
          güneş enerjisi ve enerji depolama tek bir çatı altında.
        </p>

        <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-2xl p-8 mb-12 max-w-xl mx-auto border border-white/10">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent mb-2">
            %70'e Kadar
          </div>
          <div className="text-xl text-white font-medium mb-2">Enerji Tasarrufu</div>
          <p className="text-white/60 text-sm">
            Akdeniz güneşiyle yılda binlerce TL kazanın
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="text-lg px-10 py-7 bg-gradient-to-r from-accent to-orange-600 border-0 shadow-xl shadow-accent/30 group"
            data-testid="button-hero-cta"
          >
            Ücretsiz Hesaplama Yap
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onLearnMoreClick}
            className="text-lg px-10 py-7 bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
            data-testid="button-hero-learn-more"
          >
            Sistemi Keşfet
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            "Vaillant & Samsung Ürünleri",
            "Profesyonel Kurulum",
            "Ücretsiz Keşif",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm mb-2">Akdeniz Bölgesinde Güvenilen Çözüm Ortağı</p>
          <p className="text-white text-xl font-semibold">500+ Villada Başarıyla Kurulum</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
