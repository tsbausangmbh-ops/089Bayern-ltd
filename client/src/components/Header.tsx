import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logoImage from "@assets/Logo_1765790073992.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";
import { Language, languageNames } from "@/lib/translations";
import { useLocation } from "wouter";

interface HeaderProps {
  onCtaClick?: () => void;
}

const languages: Language[] = ["de", "tr", "en", "ru", "uk", "ar"];

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

  const aboutLabel = language === "de" ? "Über uns" : language === "en" ? "About" : language === "ru" ? "О нас" : language === "uk" ? "Про нас" : language === "ar" ? "من نحن" : "Hakkımızda";

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
          <a href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-lg" data-testid="link-logo-home">
            <img 
              src={logoImage} 
              alt="089 Bayern Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
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
