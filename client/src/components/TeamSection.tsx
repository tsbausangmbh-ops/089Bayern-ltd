import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/lib/LanguageContext";
import { uiTranslations } from "@/lib/uiTranslations";

export default function TeamSection() {
  const { language } = useLanguage();
  const t = uiTranslations[language];

  const teamMembers = [
    {
      name: "Dalibor Bakmaz",
      role: t.team.member1Role,
      description: t.team.member1Description,
      languages: ["Deutsch", "Kroatisch", "Englisch"],
      email: "info@089bayern.com",
      phoneTR: "+90 507 192 2036",
      phoneDE: "+49 155 60990093",
      whatsapp: "+4915560990093",
      initials: "DB",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600",
    },
    {
      name: "Mustafa Sakar",
      role: t.team.member2Role,
      description: t.team.member2Description,
      languages: ["Deutsch", "Türkisch"],
      email: "info@089bayern.com",
      phoneTR: "+90 507 183 2036",
      phoneDE: "+49 173 5994699",
      whatsapp: "+491735994699",
      initials: "MS",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <section id="team" className="py-4 md:py-5 bg-muted/30" data-testid="section-team">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-foreground">{t.team.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.team.title}{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
              {t.team.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="overflow-visible h-full" data-testid={`card-team-${index}`}>
              <CardContent className="p-5 h-full flex flex-col">
                <div className="text-center mb-4">
                  <Avatar className={`w-20 h-20 mx-auto mb-3 ${member.bgColor}`}>
                    <AvatarFallback className={`text-xl font-bold ${member.textColor} ${member.bgColor}`}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-3 min-h-[2.5rem]">{member.description}</p>

                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {member.languages.join(" / ")}
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-2 text-sm mb-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors p-2 rounded-lg hover-elevate"
                    data-testid={`link-email-${index}`}
                  >
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${member.phoneDE.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors p-2 rounded-lg hover-elevate"
                      data-testid={`link-phone-de-${index}`}
                    >
                      <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground">DE</span>
                        <span className="text-xs">{member.phoneDE}</span>
                      </div>
                    </a>
                    <a
                      href={`tel:${member.phoneTR.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors p-2 rounded-lg hover-elevate"
                      data-testid={`link-phone-tr-${index}`}
                    >
                      <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground">TR</span>
                        <span className="text-xs">{member.phoneTR}</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(`mailto:${member.email}`, "_blank")}
                    data-testid={`button-email-${index}`}
                  >
                    <Mail className="w-4 h-4 mr-1.5" />
                    Email
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(`https://wa.me/${member.whatsapp.replace(/\+/g, "")}`, "_blank")}
                    data-testid={`button-whatsapp-${index}`}
                  >
                    <SiWhatsapp className="w-4 h-4 mr-1.5" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-5 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                {t.team.consultationTitle}
              </span>
              {" "}{t.team.consultationTitleHighlight}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.team.consultationDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8 bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg shadow-accent/30">
                <Phone className="w-4 h-4 mr-2" />
                {t.team.callNow}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
