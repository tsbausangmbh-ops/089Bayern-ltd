import { Button } from "@/components/ui/button";
import { Check, Shield, Award, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";

interface HeroSectionProps {
  onCtaClick?: () => void;
  onLearnMoreClick?: () => void;
}

export default function HeroSection({ onCtaClick, onLearnMoreClick }: HeroSectionProps) {
  const { language } = useLanguage();
  const t = uiTranslations[language];

  return (
    <section
      className="relative pt-20 pb-8 overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center py-12">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-accent/80 to-orange-600/80 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 shadow-lg">
            <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">089</span>
            </div>
            <span className="text-white text-sm font-bold">Bayern 4-in-1 German System</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-white text-sm font-medium">{t.hero.badgeGerman}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-white text-sm font-medium">{t.hero.badgeGuarantee}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span className="text-white text-sm font-medium">{t.hero.badgeMediterranean}</span>
          </div>
        </div>

        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)' }}
        >
          {t.hero.title1}
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent drop-shadow-lg">
            {t.hero.titleHighlight}
          </span>
          <br />
          {t.hero.title2}
        </h1>

        <p 
          className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed font-medium"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          {t.hero.subtitle}
        </p>

        <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-2xl p-6 mb-5 max-w-xl mx-auto border border-white/10">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent mb-2">
            {t.hero.savingsPercent}
          </div>
          <div className="text-xl text-white font-medium mb-2">{t.hero.savingsLabel}</div>
          <p className="text-white/60 text-sm">
            {t.hero.savingsDescription}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="text-lg px-10 py-7 bg-gradient-to-r from-accent to-orange-600 border-0 shadow-xl shadow-accent/30 group"
            data-testid="button-hero-cta"
          >
            {t.hero.ctaButton}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onLearnMoreClick}
            className="text-lg px-10 py-7 bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
            data-testid="button-hero-learn-more"
          >
            {t.hero.learnMoreButton}
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {[t.hero.feature1, t.hero.feature2, t.hero.feature3].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10">
          <p className="text-white/50 text-sm mb-2">{t.hero.trustText}</p>
          <p className="text-white text-xl font-semibold">{t.hero.successText}</p>
        </div>
      </div>
    </section>
  );
}
