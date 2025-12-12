import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Shield, Phone, Mail } from "lucide-react";

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
  calculatorData?: {
    propertyType: string;
    monthlyBill: number;
    propertySize: number;
    location: string;
  };
}

export default function LeadCaptureForm({ isOpen, onClose, calculatorData }: LeadCaptureFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead submitted:", { ...formData, calculatorData });
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", phone: "", email: "", message: "", consent: false });
    onClose();
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg" data-testid="dialog-thank-you">
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground mb-4">
              Talebiniz Alındı!
            </DialogTitle>
            <p className="text-muted-foreground mb-6">
              En kısa sürede uzman ekibimiz sizinle iletişime geçecektir.
              Genellikle 24 saat içinde dönüş yapıyoruz.
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground mb-2">Acil iletişim için:</p>
              <div className="flex items-center justify-center gap-6">
                <a href="tel:+905071922036" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="w-4 h-4" />
                  <span>+90 507 192 2036</span>
                </a>
              </div>
            </div>
            <Button onClick={handleClose} data-testid="button-close-thank-you">
              Tamam
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto" data-testid="dialog-lead-form">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Ücretsiz Teklif Alın</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <Label htmlFor="name">Ad Soyad *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Adınız Soyadınız"
              required
              className="mt-2"
              data-testid="input-name"
            />
          </div>

          <div>
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+90 5XX XXX XX XX"
              required
              className="mt-2"
              data-testid="input-phone"
            />
          </div>

          <div>
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ornek@email.com"
              className="mt-2"
              data-testid="input-email"
            />
          </div>

          <div>
            <Label htmlFor="message">Mesajınız (Opsiyonel)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Enerji ihtiyaçlarınız hakkında bize bilgi verin..."
              className="mt-2 resize-none"
              rows={3}
              data-testid="input-message"
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              data-testid="checkbox-consent"
            />
            <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
              Kişisel verilerimin işlenmesini ve tarafımla iletişime geçilmesini kabul ediyorum.
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={!formData.name || !formData.phone || !formData.consent}
            data-testid="button-submit-lead"
          >
            Teklif Talep Et
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Verileriniz güvende</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
