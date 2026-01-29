import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Shield, Clock, Users, CheckCircle, MapPin, Handshake } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const content = {
  de: {
    badge: "Wir sind für Sie da",
    title: "Vertrauen Sie uns Ihre Energiezukunft an",
    subtitle: "Haben Sie Fragen? Hohe Stromrechnungen? Unsichere Energieversorgung? Wir verstehen Ihre Sorgen und finden gemeinsam die beste Lösung für Ihre Villa.",
    locationNote: "Wir arbeiten sowohl in Deutschland als auch in der Türkei - rufen Sie uns an!",
    partnerNote: "Mit unserem großen Partnernetzwerk können wir Ihnen alle Lösungen aus einer Hand anbieten.",
    callTitleDE: "Deutschland",
    callTitleTR: "Türkei",
    emailTitle: "Email senden",
    emailSubtitle: "Antwort innerhalb von 24 Stunden",
    whatsappTitle: "WhatsApp",
    whatsappSubtitle: "Schnelle Antwort garantiert",
    trust1: "500+ zufriedene Kunden",
    trust2: "10 Jahre Garantie",
    trust3: "Deutsche Qualität",
    trust4: "Kostenlose Beratung",
  },
  tr: {
    badge: "Yanınızdayız",
    title: "Enerji Geleceğinizi Bize Emanet Edin",
    subtitle: "Sorularınız mı var? Yüksek elektrik faturaları? Güvensiz enerji arzı? Endişelerinizi anlıyoruz ve villanız için en iyi çözümü birlikte buluyoruz.",
    locationNote: "Hem Almanya'da hem de Türkiye'de çalışıyoruz - bizi arayın!",
    partnerNote: "Geniş iş ortağı ağımızla tüm çözümleri tek elden sunuyoruz.",
    callTitleDE: "Almanya",
    callTitleTR: "Türkiye",
    emailTitle: "Email Gönderin",
    emailSubtitle: "24 saat içinde yanıt",
    whatsappTitle: "WhatsApp",
    whatsappSubtitle: "Hızlı yanıt garantisi",
    trust1: "500+ mutlu müşteri",
    trust2: "10 yıl garanti",
    trust3: "Alman kalitesi",
    trust4: "Ücretsiz danışmanlık",
  },
  en: {
    badge: "We're here for you",
    title: "Trust Us With Your Energy Future",
    subtitle: "Have questions? High electricity bills? Unreliable energy supply? We understand your concerns and will find the best solution for your villa together.",
    locationNote: "We work in both Germany and Turkey - call us!",
    partnerNote: "With our large partner network, we can offer you all solutions from one source.",
    callTitleDE: "Germany",
    callTitleTR: "Turkey",
    emailTitle: "Send Email",
    emailSubtitle: "Response within 24 hours",
    whatsappTitle: "WhatsApp",
    whatsappSubtitle: "Quick response guaranteed",
    trust1: "500+ happy customers",
    trust2: "10 year warranty",
    trust3: "German quality",
    trust4: "Free consultation",
  },
  ru: {
    badge: "Мы рядом с вами",
    title: "Доверьте нам ваше энергетическое будущее",
    subtitle: "Есть вопросы? Высокие счета за электричество? Ненадежное энергоснабжение? Мы понимаем ваши проблемы и вместе найдем лучшее решение для вашей виллы.",
    locationNote: "Мы работаем в Германии и Турции - звоните нам!",
    partnerNote: "Благодаря нашей широкой партнерской сети мы предлагаем все решения из одних рук.",
    callTitleDE: "Германия",
    callTitleTR: "Турция",
    emailTitle: "Отправить Email",
    emailSubtitle: "Ответ в течение 24 часов",
    whatsappTitle: "WhatsApp",
    whatsappSubtitle: "Быстрый ответ гарантирован",
    trust1: "500+ довольных клиентов",
    trust2: "10 лет гарантии",
    trust3: "Немецкое качество",
    trust4: "Бесплатная консультация",
  },
  uk: {
    badge: "Ми поруч з вами",
    title: "Довірте нам ваше енергетичне майбутнє",
    subtitle: "Маєте питання? Високі рахунки за електрику? Ненадійне енергопостачання? Ми розуміємо ваші проблеми і разом знайдемо найкраще рішення для вашої вілли.",
    locationNote: "Ми працюємо в Німеччині та Туреччині - телефонуйте нам!",
    partnerNote: "Завдяки нашій широкій партнерській мережі ми пропонуємо всі рішення з одних рук.",
    callTitleDE: "Німеччина",
    callTitleTR: "Туреччина",
    emailTitle: "Надіслати Email",
    emailSubtitle: "Відповідь протягом 24 годин",
    whatsappTitle: "WhatsApp",
    whatsappSubtitle: "Швидка відповідь гарантована",
    trust1: "500+ задоволених клієнтів",
    trust2: "10 років гарантії",
    trust3: "Німецька якість",
    trust4: "Безкоштовна консультація",
  },
  ar: {
    badge: "نحن هنا من أجلك",
    title: "اعهد لنا بمستقبل الطاقة الخاص بك",
    subtitle: "هل لديك أسئلة؟ فواتير كهرباء عالية؟ إمداد طاقة غير موثوق؟ نحن نفهم مخاوفك وسنجد أفضل حل لفيلتك معاً.",
    locationNote: "نعمل في ألمانيا وتركيا - اتصل بنا!",
    partnerNote: "بفضل شبكة شركائنا الواسعة، نقدم جميع الحلول من مصدر واحد.",
    callTitleDE: "ألمانيا",
    callTitleTR: "تركيا",
    emailTitle: "أرسل بريد إلكتروني",
    emailSubtitle: "رد خلال 24 ساعة",
    whatsappTitle: "واتساب",
    whatsappSubtitle: "رد سريع مضمون",
    trust1: "500+ عميل سعيد",
    trust2: "ضمان 10 سنوات",
    trust3: "جودة ألمانية",
    trust4: "استشارة مجانية",
  },
  hr: {
    badge: "Tu smo za vas",
    title: "Povjerite nam svoju energetsku budućnost",
    subtitle: "Imate pitanja? Visoki računi za struju? Nepouzdana opskrba energijom? Razumijemo vaše brige i zajedno ćemo pronaći najbolje rješenje za vašu vilu.",
    locationNote: "Radimo u Njemačkoj i Turskoj - nazovite nas!",
    partnerNote: "Zahvaljujući našoj velikoj partnerskoj mreži, nudimo sva rješenja iz jednog izvora.",
    callTitleDE: "Njemačka",
    callTitleTR: "Turska",
    emailTitle: "Pošaljite email",
    emailSubtitle: "Odgovor u roku od 24 sata",
    whatsappTitle: "WhatsApp",
    whatsappSubtitle: "Brzi odgovor zajamčen",
    trust1: "500+ zadovoljnih kupaca",
    trust2: "10 godina jamstva",
    trust3: "Njemačka kvaliteta",
    trust4: "Besplatno savjetovanje",
  },
};

export default function TrustCallToAction() {
  const { language } = useLanguage();
  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  const trustPoints = [
    { icon: Users, text: c.trust1 },
    { icon: Shield, text: c.trust2 },
    { icon: CheckCircle, text: c.trust3 },
    { icon: Clock, text: c.trust4 },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-trust-cta">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 border-primary/20">
            <MessageCircle className="w-4 h-4 mr-2" />
            {c.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {c.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            {c.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-primary font-medium">
              <MapPin className="w-5 h-5" />
              <span>{c.locationNote}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Handshake className="w-5 h-5 text-emerald-500" />
              <span>{c.partnerNote}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50">
              <point.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{point.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border/50 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 hover-elevate cursor-pointer" data-testid="card-cta-call-de">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <Badge variant="outline" className="mb-3 bg-black/80 text-amber-400 border-amber-500/50">
                {c.callTitleDE}
              </Badge>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"
                onClick={() => window.location.href = "tel:+491735994699"}
                data-testid="button-cta-call-de"
              >
                <Phone className={`w-4 h-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                +49 173 5994699
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-red-500/10 to-rose-500/5 hover-elevate cursor-pointer" data-testid="card-cta-call-tr">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <Badge variant="outline" className="mb-3 bg-red-900/80 text-red-200 border-red-500/50">
                {c.callTitleTR}
              </Badge>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-cta-call-tr"
              >
                <Phone className={`w-4 h-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                +90 507 183 2036
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-green-400/10 to-emerald-500/5 hover-elevate cursor-pointer" data-testid="card-cta-whatsapp">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{c.whatsappTitle}</h3>
              <p className="text-muted-foreground text-xs mb-3">{c.whatsappSubtitle}</p>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600"
                onClick={() => window.open("https://wa.me/491735994699", "_blank")}
                data-testid="button-cta-whatsapp"
              >
                <MessageCircle className={`w-4 h-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 hover-elevate cursor-pointer" data-testid="card-cta-email">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{c.emailTitle}</h3>
              <p className="text-muted-foreground text-xs mb-3">{c.emailSubtitle}</p>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                onClick={() => window.location.href = "mailto:info@089bayern.de"}
                data-testid="button-cta-email"
              >
                <Mail className={`w-4 h-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
