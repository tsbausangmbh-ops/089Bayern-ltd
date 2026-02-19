import { Button } from "@/components/ui/button";
import { Check, Shield, Award, MapPin, ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import heroImage from "@assets/images/webp/hero-villa-solar.webp";
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
      className="relative pt-20 pb-2 overflow-hidden"
      data-testid="section-hero"
    >
      <img
        src={heroImage}
        alt="089 Bayern Premium 4'ü 1 arada enerji sistemleri Antalya villası çatısında güneş paneli Vaillant ısı pompası Samsung klima batarya depolama kurulumu Akdeniz Türkiye"
        title="089 Bayern 4-in-1 enerji sistemi villa çatısı güneş paneli kurulumu Antalya fiyatları 2026"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        decoding="async"
        fetchPriority="high"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center pt-2 sm:pt-4 pb-8 sm:pb-12">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-accent/80 to-orange-600/80 backdrop-blur-md rounded-full px-3 sm:px-5 py-2 sm:py-2.5 border border-white/20 shadow-lg">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-[10px] sm:text-xs">089</span>
            </div>
            <span className="text-white text-xs sm:text-sm font-bold">{t.hero.systemBadge}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4">
          <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 border border-white/10">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-white text-[11px] sm:text-sm font-medium">{t.hero.badgeGerman}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 border border-white/10">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-white text-[11px] sm:text-sm font-medium">{t.hero.badgeGuarantee}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 border border-white/10">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400" />
            <span className="text-white text-[11px] sm:text-sm font-medium">{t.hero.badgeMediterranean}</span>
          </div>
        </div>

        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 sm:mb-4 leading-tight tracking-tight"
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed font-medium px-2"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          {t.hero.subtitle}
        </p>

        <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-5 max-w-xl mx-auto border border-white/10">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-accent bg-clip-text text-transparent mb-1 sm:mb-2">
            {t.hero.savingsPercent}
          </div>
          <div className="text-lg sm:text-xl text-white font-medium mb-1 sm:mb-2">{t.hero.savingsLabel}</div>
          <p className="text-white/60 text-xs sm:text-sm">
            {t.hero.savingsDescription}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 bg-gradient-to-r from-accent to-orange-600 border-0 shadow-xl shadow-accent/30 group w-full sm:w-auto max-w-xs sm:max-w-none"
            data-testid="button-hero-cta"
          >
            {t.hero.ctaButton}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-1.5 sm:gap-2 w-full sm:w-auto max-w-sm sm:max-w-none">
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.location.href = "tel:+905071832036"}
              className="bg-red-500/20 backdrop-blur-sm border-red-400/50 text-white text-[10px] sm:text-xs px-2 sm:px-3 h-8 sm:h-9"
              data-testid="button-hero-phone-tr"
            >
              <Phone className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">TR +90 507</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.location.href = "tel:+491735994699"}
              className="bg-black/30 backdrop-blur-sm border-amber-400/50 text-white text-[10px] sm:text-xs px-2 sm:px-3 h-8 sm:h-9"
              data-testid="button-hero-phone-de"
            >
              <Phone className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">DE +49 173</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open("https://wa.me/491735994699", "_blank")}
              className="bg-green-500/20 backdrop-blur-sm border-green-400/50 text-white text-[10px] sm:text-xs px-2 sm:px-3 h-8 sm:h-9"
              data-testid="button-hero-whatsapp"
            >
              <MessageCircle className="w-3 h-3 mr-1 flex-shrink-0" />
              WhatsApp
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.location.href = "mailto:info@089bayern.com"}
              className="bg-blue-500/20 backdrop-blur-sm border-blue-400/50 text-white text-[10px] sm:text-xs px-2 sm:px-3 h-8 sm:h-9"
              data-testid="button-hero-email"
            >
              <Mail className="w-3 h-3 mr-1 flex-shrink-0" />
              Email
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {[t.hero.feature1, t.hero.feature2, t.hero.feature3].map((item) => (
            <div key={item} className="flex items-center gap-1 sm:gap-2 text-white/80">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
          <p className="text-white/50 text-xs sm:text-sm mb-1 sm:mb-2">{t.hero.trustText}</p>
          <p className="text-white text-base sm:text-lg md:text-xl font-semibold">{t.hero.successText}</p>
        </div>
      </div>
    </section>
  );
}
