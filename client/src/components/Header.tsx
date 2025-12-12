import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header-main"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">089</span>
            </div>
            <span className={`font-semibold text-lg ${isScrolled ? "text-foreground" : "text-white"}`}>
              Bayern
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Sistem", id: "features" },
              { label: "Avantajlar", id: "benefits" },
              { label: "Hesaplama", id: "calculator" },
              { label: "Ekip", id: "team" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md ${
                  isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
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
              className="hidden md:flex"
              data-testid="button-header-cta"
            >
              Teklif Al
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className={`md:hidden ${isScrolled ? "" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col p-4 gap-2">
            {[
              { label: "Sistem", id: "features" },
              { label: "Avantajlar", id: "benefits" },
              { label: "Hesaplama", id: "calculator" },
              { label: "Ekip", id: "team" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-3 rounded-md hover-elevate active-elevate-2 text-foreground"
                data-testid={`link-mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button onClick={onCtaClick} className="mt-2" data-testid="button-mobile-cta">
              Teklif Al
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
