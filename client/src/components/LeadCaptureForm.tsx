import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Shield, Phone, Calendar, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

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
    location: "",
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
    setFormData({ name: "", phone: "", email: "", location: "", message: "", consent: false });
    onClose();
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg" data-testid="dialog-thank-you">
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground mb-4">
              Talebiniz Başarıyla Alındı!
            </DialogTitle>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Enerji danışmanlarımız en kısa sürede sizinle iletişime geçecektir.
              <br />
              <strong className="text-foreground">Genellikle 2 saat içinde dönüş yapıyoruz.</strong>
            </p>

            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Sonraki Adımlar
              </h4>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">1</span>
                  <span>Uzmanımız sizi arayarak ihtiyaçlarınızı dinleyecek</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">2</span>
                  <span>Ücretsiz keşif için randevu planlanacak</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">3</span>
                  <span>Size özel teklif ve finansman seçenekleri sunulacak</span>
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Acil iletişim için:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+905071922036"
                  className="flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>+90 507 192 2036</span>
                </a>
                <a
                  href="https://wa.me/905071922036"
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
          <div className="flex items-center gap-2 text-primary mb-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Ücretsiz Danışmanlık</span>
          </div>
          <DialogTitle className="text-2xl font-bold">
            Ücretsiz Keşif Randevusu Alın
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-2">
            Bilgilerinizi bırakın, enerji uzmanlarımız sizi arasın. Satış baskısı yok!
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">Ad Soyad *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Adınız Soyadınız"
              required
              className="mt-2 h-12"
              data-testid="input-name"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">Telefon Numarası *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="0 5XX XXX XX XX"
              required
              className="mt-2 h-12"
              data-testid="input-phone"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">E-posta (Opsiyonel)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ornek@email.com"
              className="mt-2 h-12"
              data-testid="input-email"
            />
          </div>

          <div>
            <Label htmlFor="location" className="text-sm font-medium">Mülk Konumu</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Örn: Antalya, Konyaaltı"
              className="mt-2 h-12"
              data-testid="input-location"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">Mesajınız (Opsiyonel)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Projeniz hakkında kısaca bilgi verebilirsiniz..."
              className="mt-2 resize-none"
              rows={3}
              data-testid="input-message"
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
              KVKK kapsamında kişisel verilerimin işlenmesini ve tarafımla iletişime geçilmesini kabul ediyorum.
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full py-6 text-lg"
            size="lg"
            disabled={!formData.name || !formData.phone || !formData.consent}
            data-testid="button-submit-lead"
          >
            Ücretsiz Randevu Talep Et
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Bilgileriniz SSL ile korunur. Spam göndermiyoruz.</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
