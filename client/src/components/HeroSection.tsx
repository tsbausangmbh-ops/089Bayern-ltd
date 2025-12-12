import { Button } from "@/components/ui/button";
import { Check, Shield, Award, MapPin } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center py-32">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-white/95 text-sm font-medium">Alman Mühendisliği</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-white/95 text-sm font-medium">10+ Yıl Garanti</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-white/95 text-sm font-medium">Akdeniz'e Özel</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Evinizi Enerji
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Bağımsızlığına
          </span>{" "}
          Kavuşturun
        </h1>

        <p className="text-xl md:text-2xl text-white/85 mb-6 max-w-3xl mx-auto leading-relaxed">
          <strong className="text-white">4'ü 1 Arada Akıllı Enerji Sistemi</strong> ile ısıtma, soğutma, 
          güneş enerjisi ve enerji depolama tek bir çatı altında.
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
          <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">%70'e Kadar</div>
          <div className="text-lg text-white/90">Enerji Faturalarınızda Tasarruf</div>
          <p className="text-white/70 text-sm mt-2">
            Akdeniz iklimi için özel tasarlanmış sistem ile yılda binlerce TL kazanın
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-blue-600 border-0"
            data-testid="button-hero-cta"
          >
            Ücretsiz Hesaplama Yap
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onLearnMoreClick}
            className="text-lg px-10 py-7 bg-white/10 backdrop-blur-sm border-white/40 text-white"
            data-testid="button-hero-learn-more"
          >
            Sistemi Keşfet
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            "Vaillant & Samsung Ürünleri",
            "Profesyonel Montaj",
            "Ücretsiz Keşif",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/85">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm mb-2">Akdeniz Bölgesinde Güvenilen Çözüm Ortağı</p>
          <p className="text-white/90 text-lg font-medium">500+ Villada Başarıyla Kurulum Yapıldı</p>
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
