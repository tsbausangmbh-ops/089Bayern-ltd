import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Shield, Clock, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const content = {
  de: {
    badge: "Wir sind für Sie da",
    title: "Vertrauen Sie uns Ihre Energiezukunft an",
    subtitle: "Haben Sie Fragen? Hohe Stromrechnungen? Unsichere Energieversorgung? Wir verstehen Ihre Sorgen und finden gemeinsam die beste Lösung für Ihre Villa.",
    callTitle: "Jetzt anrufen",
    callSubtitle: "Sofortige Beratung auf Deutsch & Türkisch",
    emailTitle: "Email senden",
    emailSubtitle: "Antwort innerhalb von 24 Stunden",
    whatsappTitle: "WhatsApp schreiben",
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
    callTitle: "Hemen Arayın",
    callSubtitle: "Türkçe & Almanca anında danışmanlık",
    emailTitle: "Email Gönderin",
    emailSubtitle: "24 saat içinde yanıt",
    whatsappTitle: "WhatsApp Yazın",
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
    callTitle: "Call Now",
    callSubtitle: "Instant consultation in German & Turkish",
    emailTitle: "Send Email",
    emailSubtitle: "Response within 24 hours",
    whatsappTitle: "WhatsApp Message",
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
    callTitle: "Позвоните сейчас",
    callSubtitle: "Консультация на немецком и турецком",
    emailTitle: "Отправить Email",
    emailSubtitle: "Ответ в течение 24 часов",
    whatsappTitle: "Написать в WhatsApp",
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
    callTitle: "Зателефонуйте зараз",
    callSubtitle: "Консультація німецькою та турецькою",
    emailTitle: "Надіслати Email",
    emailSubtitle: "Відповідь протягом 24 годин",
    whatsappTitle: "Написати в WhatsApp",
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
    callTitle: "اتصل الآن",
    callSubtitle: "استشارة فورية بالألمانية والتركية",
    emailTitle: "أرسل بريد إلكتروني",
    emailSubtitle: "رد خلال 24 ساعة",
    whatsappTitle: "رسالة واتساب",
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
    callTitle: "Nazovite sada",
    callSubtitle: "Trenutačno savjetovanje na njemačkom i turskom",
    emailTitle: "Pošaljite email",
    emailSubtitle: "Odgovor u roku od 24 sata",
    whatsappTitle: "WhatsApp poruka",
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50">
              <point.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{point.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50 bg-gradient-to-br from-green-500/10 to-emerald-500/5 hover-elevate cursor-pointer" data-testid="card-cta-call">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{c.callTitle}</h3>
              <p className="text-muted-foreground text-sm mb-4">{c.callSubtitle}</p>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-cta-call"
              >
                <Phone className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
                +90 507 183 2036
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 hover-elevate cursor-pointer" data-testid="card-cta-email">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{c.emailTitle}</h3>
              <p className="text-muted-foreground text-sm mb-4">{c.emailSubtitle}</p>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                onClick={() => window.location.href = "mailto:info@089bayern.de"}
                data-testid="button-cta-email"
              >
                <Mail className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
                info@089bayern.de
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-green-400/10 to-teal-500/5 hover-elevate cursor-pointer" data-testid="card-cta-whatsapp">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{c.whatsappTitle}</h3>
              <p className="text-muted-foreground text-sm mb-4">{c.whatsappSubtitle}</p>
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600"
                onClick={() => window.open("https://wa.me/905071832036", "_blank")}
                data-testid="button-cta-whatsapp"
              >
                <MessageCircle className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
                WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
