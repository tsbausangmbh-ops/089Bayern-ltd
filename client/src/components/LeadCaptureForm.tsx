import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Shield, Phone, Calendar, Clock, Globe } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { translations, languageNames, isRTL, type Language } from "@/lib/translations";

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
  calculatorData?: {
    propertyType: string;
    monthlyBill: number;
    propertySize: number;
    location: string;
  };
  initialLanguage?: Language;
}

export default function LeadCaptureForm({ isOpen, onClose, calculatorData, initialLanguage = "de" }: LeadCaptureFormProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    consent: false,
  });

  const t = translations[language];
  const rtl = isRTL(language);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          calculatorData,
          language,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.error || t.formErrorGeneric || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
      }
    } catch (err) {
      setError(t.formErrorGeneric || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError(null);
    setFormData({ name: "", phone: "", email: "", location: "", message: "", consent: false });
    onClose();
  };

  const LanguageSelector = () => (
    <div className="flex items-center gap-2 mb-4">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex flex-wrap gap-1">
        {(Object.keys(languageNames) as Language[]).map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            className={`px-2 py-1 text-xs rounded-md transition-colors ${
              language === lang
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
            data-testid={`button-lang-${lang}`}
          >
            {languageNames[lang]}
          </button>
        ))}
      </div>
    </div>
  );

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg" data-testid="dialog-thank-you" dir={rtl ? "rtl" : "ltr"}>
          <LanguageSelector />
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground mb-4">
              {t.formSuccessTitle}
            </DialogTitle>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t.formSuccessMessage}
              <br />
              <strong className="text-foreground">{t.formSuccessResponseTime}</strong>
            </p>

            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left" dir={rtl ? "rtl" : "ltr"}>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {t.formNextStepsTitle}
              </h4>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">1</span>
                  <span>{t.formNextStep1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">2</span>
                  <span>{t.formNextStep2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">3</span>
                  <span>{t.formNextStep3}</span>
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">{t.formUrgentContact}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+905071832036"
                  className="flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>+90 507 183 2036</span>
                </a>
                <a
                  href="https://wa.me/905071832036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:underline font-medium"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <Button onClick={handleClose} className="mt-8" data-testid="button-close-thank-you">
              {t.formOkButton}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto" data-testid="dialog-lead-form" dir={rtl ? "rtl" : "ltr"}>
        <LanguageSelector />
        <DialogHeader>
          <div className="flex items-center gap-2 text-primary mb-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">{t.formBadge}</span>
          </div>
          <DialogTitle className="text-2xl font-bold">
            {t.formTitle}
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-2">
            {t.formSubtitle}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">{t.formNameLabel}</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.formNamePlaceholder}
              required
              className="mt-2 h-12"
              data-testid="input-name"
              dir={rtl ? "rtl" : "ltr"}
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">{t.formPhoneLabel}</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t.formPhonePlaceholder}
              required
              className="mt-2 h-12"
              data-testid="input-phone"
              dir="ltr"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">{t.formEmailLabel}</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t.formEmailPlaceholder}
              className="mt-2 h-12"
              data-testid="input-email"
              dir="ltr"
            />
          </div>

          <div>
            <Label htmlFor="location" className="text-sm font-medium">{t.formLocationLabel}</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder={t.formLocationPlaceholder}
              className="mt-2 h-12"
              data-testid="input-location"
              dir={rtl ? "rtl" : "ltr"}
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">{t.formMessageLabel}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.formMessagePlaceholder}
              className="mt-2 resize-none"
              rows={3}
              data-testid="input-message"
              dir={rtl ? "rtl" : "ltr"}
            />
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              className="mt-0.5"
              data-testid="checkbox-consent"
            />
            <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              {t.formConsentText}
            </Label>
          </div>

          {error && (
            <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-lg" data-testid="error-message">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-6 text-lg"
            size="lg"
            disabled={!formData.name || !formData.phone || !formData.consent || isSubmitting}
            data-testid="button-submit-lead"
          >
            {isSubmitting ? "..." : t.formSubmitButton}
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>{t.formSecurityNote}</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
