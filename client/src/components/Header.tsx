import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown, MapPin, Sun, Thermometer, Wind, Battery, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/Logo_1765790073992.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import { Language, languageNames } from "@/lib/translations";
import { useLocation } from "wouter";

interface HeaderProps {
  onCtaClick?: () => void;
}

const languages: Language[] = ["de", "tr", "en", "ru", "uk", "ar", "hr"];

export default function Header({ onCtaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = uiTranslations[language];
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: { id: string; href: string; isHashLink?: boolean }) => {
    if (item.isHashLink) {
      const isOnHomePage = location === "/" || location.startsWith("/#");
      if (isOnHomePage) {
        scrollToSection(item.id);
      } else {
        setLocation(item.href);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  
  const aboutLabel = language === "de" ? "Über uns" : language === "en" ? "About" : language === "ru" ? "О нас" : language === "uk" ? "Про нас" : language === "ar" ? "من نحن" : language === "hr" ? "O nama" : "Hakkımızda";
  const locationsLabel = language === "de" ? "Installation" : language === "en" ? "Installation" : language === "ru" ? "Установка" : language === "uk" ? "Встановлення" : language === "ar" ? "التركيب" : language === "hr" ? "Instalacija" : "Kurulum";

  const locationItems = [
    { label: "Antalya", href: "/installation-antalya", badge: "Zentrale" },
    { label: "Alanya", href: "/installation-alanya", badge: "Niederlassung" },
    { label: "Ankara", href: "/installation-ankara", badge: "Niederlassung" },
  ];

  const solutionsLabel = language === "de" ? "Lösungen" : language === "en" ? "Solutions" : language === "ru" ? "Решения" : language === "uk" ? "Рішення" : language === "ar" ? "حلول" : language === "hr" ? "Rješenja" : "Çözümler";
  
  const solutionItems = [
    { label: language === "de" ? "Solaranlage" : language === "en" ? "Solar Panel" : language === "tr" ? "Güneş Paneli" : "Solar", href: "/gunes-paneli" },
    { label: language === "de" ? "Wärmepumpe" : language === "en" ? "Heat Pump" : language === "tr" ? "Isı Pompası" : "Wärmepumpe", href: "/isi-pompasi" },
    { label: language === "de" ? "Klimaanlage" : language === "en" ? "Air Conditioning" : language === "tr" ? "Klima" : "Klima", href: "/klima" },
    { label: language === "de" ? "Batteriespeicher" : language === "en" ? "Battery Storage" : language === "tr" ? "Enerji Depolama" : "Speicher", href: "/enerji-depolama" },
  ];

  const navItems = [
    { label: aboutLabel, id: "about", href: "/ueber-uns", isHashLink: false },
    { label: t.header.system, id: "system", href: "/systeme", isHashLink: false },
    { label: t.header.benefits, id: "benefits", href: "/vorteile", isHashLink: false },
    { label: t.header.calculator, id: "calculator", href: "/rechner", isHashLink: false },
    { label: t.header.faq, id: "faq", href: "/faq", isHashLink: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <a href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-lg" data-testid="link-logo-home">
            <div className="bg-white/90 rounded-lg p-1.5">
              <img 
                src={logoImage} 
                alt="089 Bayern Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className={`block text-lg font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>089 Bayern</span>
              <span className={`block text-xs ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>Germany</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.isHashLink ? (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-medium px-4 py-2 rounded-lg hover-elevate active-elevate-2 transition-all ${
                    isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                  }`}
                  data-testid={`link-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-sm font-medium px-4 py-2 rounded-lg hover-elevate active-elevate-2 transition-all ${
                    isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                  }`}
                  data-testid={`link-nav-${item.id}`}
                >
                  {item.label}
                </a>
              )
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-medium px-4 py-2 rounded-lg hover-elevate active-elevate-2 transition-all flex items-center gap-1 ${
                    isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                  }`}
                  data-testid="dropdown-nav-solutions"
                >
                  <Sun className="w-4 h-4" />
                  {solutionsLabel}
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {solutionItems.map((item, index) => {
                  const icons = [Sun, Thermometer, Wind, Battery];
                  const Icon = icons[index];
                  return (
                    <DropdownMenuItem key={item.href} asChild>
                      <a href={item.href} data-testid={`link-nav-solution-${index}`}>
                        <Icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-medium px-4 py-2 rounded-lg hover-elevate active-elevate-2 transition-all flex items-center gap-1 ${
                    isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                  }`}
                  data-testid="dropdown-nav-locations"
                >
                  <MapPin className="w-4 h-4" />
                  {locationsLabel}
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locationItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <a href={item.href} className="flex items-center justify-between w-full gap-4" data-testid={`link-nav-location-${item.label.toLowerCase()}`}>
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {item.label}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`transition-colors gap-1.5 ${isScrolled ? "text-foreground" : "text-white"}`}
                  data-testid="button-language-selector"
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={language === lang ? "bg-accent" : ""}
                    data-testid={`button-language-${lang}`}
                  >
                    {languageNames[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={onCtaClick}
              className="hidden md:flex bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg shadow-accent/20"
              data-testid="button-header-cta"
            >
              {t.header.ctaButton}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              item.isHashLink ? (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="text-left px-4 py-3 rounded-lg hover-elevate active-elevate-2 text-foreground font-medium"
                  data-testid={`link-mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-left px-4 py-3 rounded-lg hover-elevate active-elevate-2 text-foreground font-medium"
                  data-testid={`link-mobile-nav-${item.id}`}
                >
                  {item.label}
                </a>
              )
            ))}
            
            <Collapsible>
              <CollapsibleTrigger asChild>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover-elevate active-elevate-2 text-foreground font-medium"
                  data-testid="button-mobile-solutions-toggle"
                >
                  <span className="flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    {solutionsLabel}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 flex flex-col gap-1">
                  {solutionItems.map((item, index) => {
                    const icons = [Sun, Thermometer, Wind, Battery];
                    const Icon = icons[index];
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        className="px-4 py-2 rounded-lg hover-elevate active-elevate-2 text-foreground/80 font-medium flex items-center gap-2"
                        data-testid={`link-mobile-solution-${index}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-3 h-3" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible open={isLocationsOpen} onOpenChange={setIsLocationsOpen}>
              <CollapsibleTrigger asChild>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover-elevate active-elevate-2 text-foreground font-medium"
                  data-testid="button-mobile-locations-toggle"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {locationsLabel}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`} />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 flex flex-col gap-1">
                  {locationItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2 rounded-lg hover-elevate active-elevate-2 text-foreground/80 font-medium flex items-center justify-between"
                      data-testid={`link-mobile-location-${item.label.toLowerCase()}`}
                      onClick={() => {
                        setIsLocationsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <Building2 className="w-3 h-3" />
                        {item.label}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    </a>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Button 
              onClick={onCtaClick} 
              className="mt-3 bg-gradient-to-r from-accent to-orange-600 border-0" 
              data-testid="button-mobile-cta"
            >
              {t.header.ctaButton}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
