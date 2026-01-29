import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const content = {
  de: {
    text: "Fragen? Kontaktieren Sie uns jetzt!",
  },
  tr: {
    text: "Sorularınız mı var? Hemen bize ulaşın!",
  },
  en: {
    text: "Questions? Contact us now!",
  },
  ru: {
    text: "Вопросы? Свяжитесь с нами!",
  },
  uk: {
    text: "Питання? Зв'яжіться з нами!",
  },
  ar: {
    text: "أسئلة؟ اتصل بنا الآن!",
  },
  hr: {
    text: "Pitanja? Kontaktirajte nas sada!",
  },
};

export default function SectionCTA() {
  const { language } = useLanguage();
  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-8 pt-6 border-t border-border/30" data-testid="section-cta">
      <span className="text-sm text-muted-foreground font-medium">{c.text}</span>
      <div className="flex flex-wrap gap-2">
        <Button 
          size="sm"
          variant="outline"
          className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/30 hover:border-blue-500/50"
          onClick={() => window.location.href = "mailto:info@089bayern.com"}
          data-testid="button-section-cta-email"
        >
          <Mail className={`w-4 h-4 ${isRtl ? "ml-1" : "mr-1"}`} />
          Email
        </Button>
        <Button 
          size="sm"
          variant="outline"
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-500/50"
          onClick={() => window.open("https://wa.me/491735994699", "_blank")}
          data-testid="button-section-cta-whatsapp"
        >
          <MessageCircle className={`w-4 h-4 ${isRtl ? "ml-1" : "mr-1"}`} />
          WhatsApp
        </Button>
        <Button 
          size="sm"
          variant="outline"
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30 hover:border-amber-500/50"
          onClick={() => window.location.href = "tel:+905071832036"}
          data-testid="button-section-cta-phone"
        >
          <Phone className={`w-4 h-4 ${isRtl ? "ml-1" : "mr-1"}`} />
          +90 507 183 2036
        </Button>
      </div>
    </div>
  );
}
