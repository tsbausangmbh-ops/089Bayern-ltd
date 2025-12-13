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

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center py-20">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-white text-sm font-medium">Deutsche Ingenieurskunst</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-white text-sm font-medium">10+ Jahre Garantie</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span className="text-white text-sm font-medium">Speziell für die Mittelmeerregion</span>
          </div>
        </div>

        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)' }}
        >
          Antalya und Mittelmeer
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent drop-shadow-lg">
            Solarenergie
          </span>
          <br />
          und Wärmepumpen
        </h1>

        <p 
          className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed font-medium"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          Mit deutscher Ingenieurskunst: <span className="text-amber-300 font-bold">4-in-1 Smart Energy System</span>: 
          Solarpanele, Wärmepumpe, Smart-Klima und Energiespeicher. Service in Mugla, Izmir, Aydin und Mersin.
        </p>

        <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-2xl p-6 mb-5 max-w-xl mx-auto border border-white/10">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent mb-2">
            Bis zu 70%
          </div>
          <div className="text-xl text-white font-medium mb-2">Energieeinsparung</div>
          <p className="text-white/60 text-sm">
            Mit der Mittelmeersonne Tausende TL pro Jahr sparen
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="text-lg px-10 py-7 bg-gradient-to-r from-accent to-orange-600 border-0 shadow-xl shadow-accent/30 group"
            data-testid="button-hero-cta"
          >
            Kostenlose Berechnung
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onLearnMoreClick}
            className="text-lg px-10 py-7 bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
            data-testid="button-hero-learn-more"
          >
            System entdecken
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            "Vaillant & Samsung Produkte",
            "Professionelle Installation",
            "Kostenlose Besichtigung",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-white/50 text-sm mb-2">Ihr vertrauenswürdiger Partner in Antalya, Mugla, Izmir, Aydin und Mersin</p>
          <p className="text-white text-xl font-semibold">500+ erfolgreiche Solarinstallationen in Villen und Wohnhäusern</p>
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
