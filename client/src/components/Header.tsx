import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

interface HeaderProps {
  onCtaClick?: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <span className={`hidden md:block text-xs transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/60"}`}>Enerji Sistemleri</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Sistem", id: "features" },
              { label: "Avantajlar", id: "benefits" },
              { label: "Hesaplama", id: "calculator" },
              { label: "Ekip", id: "team" },
            ].map((item) => (
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
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              onClick={onCtaClick}
              className="hidden md:flex bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg shadow-accent/20"
              data-testid="button-header-cta"
            >
              Ücretsiz Teklif Al
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
            {[
              { label: "Sistem", id: "features" },
              { label: "Avantajlar", id: "benefits" },
              { label: "Hesaplama", id: "calculator" },
              { label: "Ekip", id: "team" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 rounded-lg hover-elevate active-elevate-2 text-foreground font-medium"
                data-testid={`link-mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={onCtaClick} 
              className="mt-3 bg-gradient-to-r from-accent to-orange-600 border-0" 
              data-testid="button-mobile-cta"
            >
              Ücretsiz Teklif Al
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
