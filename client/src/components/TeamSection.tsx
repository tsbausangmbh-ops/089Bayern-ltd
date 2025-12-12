import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Dalibor Bakmaz",
    role: "CEO / General Manager",
    languages: ["Deutsch"],
    email: "dbakmaz@089bayern.tr",
    phones: ["+90 507 192 2036", "+49 155 68855141"],
    initials: "DB",
  },
  {
    name: "Mustafa Sakar",
    role: "CEO",
    languages: ["Deutsch", "Türkisch"],
    email: "msakar@089bayern.tr",
    phones: ["+90 507 183 2036", "+49 173 5994699"],
    initials: "MS",
  },
  {
    name: "Ahmet Imrol",
    role: "Manager Turkei",
    languages: ["Deutsch", "Türkisch"],
    email: "info@089bayern.tr",
    phones: ["+90 (242) 5131352"],
    initials: "AI",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 lg:py-32 bg-muted/30" data-testid="section-team">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Uzman Ekibimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4'ü 1 arada enerji sisteminiz için profesyonel danışmanlık ve kurulum hizmeti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="overflow-visible" data-testid={`card-team-${index}`}>
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 bg-primary/10">
                  <AvatarFallback className="text-xl font-semibold text-primary bg-primary/10">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-3">{member.role}</p>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {member.languages.join(" / ")}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors"
                    data-testid={`link-email-${index}`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </a>
                  {member.phones.map((phone, phoneIndex) => (
                    <a
                      key={phoneIndex}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors"
                      data-testid={`link-phone-${index}-${phoneIndex}`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6"
                  onClick={() => window.location.href = `tel:${member.phones[0].replace(/\s/g, "")}`}
                  data-testid={`button-call-${index}`}
                >
                  Hemen Ara
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
