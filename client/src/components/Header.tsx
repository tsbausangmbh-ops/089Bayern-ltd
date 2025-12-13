import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import { Language, languageNames } from "@/lib/translations";

interface HeaderProps {
  onCtaClick?: () => void;
}

const languages: Language[] = ["de", "tr", "en", "ru", "uk", "ar"];

export default function Header({ onCtaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = uiTranslations[language];

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

  const aboutLabel = language === "de" ? "Über uns" : language === "en" ? "About" : language === "ru" ? "О нас" : language === "uk" ? "Про нас" : language === "ar" ? "من نحن" : "Hakkımızda";

  const navItems = [
    { label: aboutLabel, id: "about", isLink: true, href: "/ueber-uns" },
    { label: t.header.system, id: "features" },
    { label: t.header.benefits, id: "benefits" },
    { label: t.header.calculator, id: "calculator" },
    { label: t.header.team, id: "team" },
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
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`font-bold text-lg transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>089 Bayern</span>
              <span className={`hidden md:block text-xs transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/60"}`}>Energiesysteme</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.isLink ? (
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
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium px-4 py-2 rounded-lg hover-elevate active-elevate-2 transition-all ${
                    isScrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                  }`}
                  data-testid={`link-nav-${item.id}`}
                >
                  {item.label}
                </button>
              )
            ))}
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
              item.isLink ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-left px-4 py-3 rounded-lg hover-elevate active-elevate-2 text-foreground font-medium"
                  data-testid={`link-mobile-nav-${item.id}`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 rounded-lg hover-elevate active-elevate-2 text-foreground font-medium"
                  data-testid={`link-mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              )
            ))}
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
