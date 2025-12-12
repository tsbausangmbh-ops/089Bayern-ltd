import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const teamMembers = [
  {
    name: "Dalibor Bakmaz",
    role: "CEO / Genel Müdür",
    description: "Alman enerji sistemleri konusunda 15+ yıl deneyim. Türkiye pazarının kurucusu.",
    languages: ["Almanca"],
    email: "dbakmaz@089bayern.tr",
    phones: ["+90 507 192 2036", "+49 155 68855141"],
    whatsapp: "+905071922036",
    initials: "DB",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
  },
  {
    name: "Mustafa Sakar",
    role: "CEO / Kurucu Ortak",
    description: "Türkiye-Almanya iş köprüsü. Yenilenebilir enerji ve gayrimenkul yatırımları uzmanı.",
    languages: ["Almanca", "Türkçe"],
    email: "msakar@089bayern.tr",
    phones: ["+90 507 183 2036", "+49 173 5994699"],
    whatsapp: "+905071832036",
    initials: "MS",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600",
  },
  {
    name: "Ahmet Imrol",
    role: "Türkiye Bölge Müdürü",
    description: "Akdeniz bölgesi kurulum ve satış sonrası destek koordinatörü. Yerinde hizmet garantisi.",
    languages: ["Almanca", "Türkçe"],
    email: "info@089bayern.tr",
    phones: ["+90 (242) 5131352"],
    whatsapp: "+902425131352",
    initials: "AI",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-10 md:py-12 bg-muted/30" data-testid="section-team">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Uzman Ekip</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Sizinle İletişime Geçelim
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Almanya ve Türkiye'de konuşlanan uzman ekibimiz, projenizin her aşamasında 
            yanınızda. Türkçe ve Almanca destek alın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="overflow-visible" data-testid={`card-team-${index}`}>
              <CardContent className="p-5">
                <div className="text-center mb-6">
                  <Avatar className={`w-24 h-24 mx-auto mb-4 ${member.bgColor}`}>
                    <AvatarFallback className={`text-2xl font-bold ${member.textColor} ${member.bgColor}`}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>

                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {member.languages.join(" / ")}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm mb-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-2 rounded-lg hover-elevate"
                    data-testid={`link-email-${index}`}
                  >
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span>{member.email}</span>
                  </a>
                  {member.phones.map((phone, phoneIndex) => (
                    <a
                      key={phoneIndex}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-2 rounded-lg hover-elevate"
                      data-testid={`link-phone-${index}-${phoneIndex}`}
                    >
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.location.href = `tel:${member.phones[0].replace(/\s/g, "")}`}
                    data-testid={`button-call-${index}`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Ara
                  </Button>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(`https://wa.me/${member.whatsapp.replace(/\+/g, "")}`, "_blank")}
                    data-testid={`button-whatsapp-${index}`}
                  >
                    <SiWhatsapp className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-card rounded-xl p-6 md:p-8 border border-card-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Hemen Ücretsiz Danışmanlık Alın
            </h3>
            <p className="text-muted-foreground mb-6">
              Sorularınızı yanıtlayalım, projenizi değerlendirelim. 
              Satış baskısı yok, sadece bilgilendirme.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8">
                <Phone className="w-4 h-4 mr-2" />
                Hemen Ara: +90 507 192 2036
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
