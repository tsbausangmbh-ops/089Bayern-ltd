import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Phone, Mail, ArrowRight, Sparkles, Building2, Heart, Target, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function Team() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const scrollToCalculator = () => {
    setLocation("/#calculator");
  };

  const content = {
    tr: {
      badge: "089 Bayern Ekibi",
      title: "Almanya'dan",
      titleHighlight: "Akdeniz'e Enerji",
      subtitle: "München'den Antalya'ya uzanan köprümüzle, Alman mühendislik kalitesini Türk Akdeniz'ine taşıyoruz. Güneş enerjisi, ısı pompası ve akıllı enerji çözümlerinde uzman ekibimizle tanışın.",
      ctaButton: "Ücretsiz Keşif Al",
      storyTitle: "Hikayemiz",
      storySubtitle: "Almanya-Türkiye enerji köprüsü",
      storyText1: "089 Bayern, München merkezli bir Alman-Türk enerji şirketidir. Amacımız, Almanya'nın yenilenebilir enerji teknolojilerini Türkiye'nin güneşli Akdeniz bölgesine taşımaktır.",
      storyText2: "Antalya, Alanya, Side, Belek ve çevre bölgelerde villa ve konut sahiplerine premium enerji çözümleri sunuyoruz. Her projemizde Alman kalite standartlarını uyguluyoruz.",
      valuesTitle: "Değerlerimiz",
      value1Title: "Alman Kalitesi",
      value1Desc: "Her projede DIN standartları ve Alman mühendislik hassasiyeti",
      value2Title: "Yerel Uzmanlık",
      value2Desc: "Akdeniz iklimini bilen, bölgeye hakim teknik ekip",
      value3Title: "Müşteri Odaklılık",
      value3Desc: "7/24 destek ve 10 yıl garanti ile yanınızdayız",
      value4Title: "Sürdürülebilirlik",
      value4Desc: "Çevre dostu çözümlerle geleceğe yatırım",
      contactTitle: "Bize Ulaşın",
      contactSubtitle: "Ücretsiz keşif ve danışmanlık için iletişime geçin",
      addressLabel: "Adres",
      address: "Antalya, Türkiye",
      phoneLabel: "Telefon",
      emailLabel: "E-posta",
    },
    de: {
      badge: "089 Bayern Team",
      title: "Von Deutschland",
      titleHighlight: "ans Mittelmeer",
      subtitle: "Mit unserer Brücke von München nach Antalya bringen wir deutsche Ingenieursqualität an die türkische Mittelmeerküste. Lernen Sie unser Expertenteam für Solar, Wärmepumpen und intelligente Energielösungen kennen.",
      ctaButton: "Kostenlose Beratung",
      storyTitle: "Unsere Geschichte",
      storySubtitle: "Die deutsch-türkische Energiebrücke",
      storyText1: "089 Bayern ist ein deutsch-türkisches Energieunternehmen mit Sitz in München. Unser Ziel ist es, Deutschlands erneuerbare Energietechnologien in die sonnige Mittelmeerregion der Türkei zu bringen.",
      storyText2: "Wir bieten Premium-Energielösungen für Villa- und Wohnungsbesitzer in Antalya, Alanya, Side, Belek und Umgebung. Bei jedem Projekt wenden wir deutsche Qualitätsstandards an.",
      valuesTitle: "Unsere Werte",
      value1Title: "Deutsche Qualität",
      value1Desc: "DIN-Standards und deutsche Ingenieurspräzision in jedem Projekt",
      value2Title: "Lokale Expertise",
      value2Desc: "Technisches Team mit Kenntnis des Mittelmeerklimas",
      value3Title: "Kundenorientierung",
      value3Desc: "24/7 Support und 10 Jahre Garantie",
      value4Title: "Nachhaltigkeit",
      value4Desc: "Umweltfreundliche Lösungen für die Zukunft",
      contactTitle: "Kontaktieren Sie uns",
      contactSubtitle: "Für kostenlose Beratung und Besichtigung",
      addressLabel: "Adresse",
      address: "Antalya, Türkei",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
    },
    en: {
      badge: "089 Bayern Team",
      title: "From Germany",
      titleHighlight: "to the Mediterranean",
      subtitle: "With our bridge from Munich to Antalya, we bring German engineering quality to the Turkish Mediterranean coast. Meet our expert team for solar, heat pumps and smart energy solutions.",
      ctaButton: "Free Consultation",
      storyTitle: "Our Story",
      storySubtitle: "The German-Turkish energy bridge",
      storyText1: "089 Bayern is a German-Turkish energy company based in Munich. Our goal is to bring Germany's renewable energy technologies to the sunny Mediterranean region of Turkey.",
      storyText2: "We offer premium energy solutions for villa and residential owners in Antalya, Alanya, Side, Belek and surrounding areas. We apply German quality standards to every project.",
      valuesTitle: "Our Values",
      value1Title: "German Quality",
      value1Desc: "DIN standards and German engineering precision in every project",
      value2Title: "Local Expertise",
      value2Desc: "Technical team with knowledge of Mediterranean climate",
      value3Title: "Customer Focus",
      value3Desc: "24/7 support and 10 year warranty",
      value4Title: "Sustainability",
      value4Desc: "Eco-friendly solutions for the future",
      contactTitle: "Contact Us",
      contactSubtitle: "For free consultation and site visit",
      addressLabel: "Address",
      address: "Antalya, Turkey",
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
    ru: {
      badge: "Команда 089 Bayern",
      title: "Из Германии",
      titleHighlight: "на Средиземноморье",
      subtitle: "Наш мост от Мюнхена до Анталии приносит немецкое инженерное качество на турецкое побережье Средиземного моря. Познакомьтесь с нашей командой экспертов по солнечной энергии, тепловым насосам и умным энергетическим решениям.",
      ctaButton: "Бесплатная консультация",
      storyTitle: "Наша история",
      storySubtitle: "Немецко-турецкий энергетический мост",
      storyText1: "089 Bayern — немецко-турецкая энергетическая компания со штаб-квартирой в Мюнхене. Наша цель — привнести возобновляемые энергетические технологии Германии в солнечный Средиземноморский регион Турции.",
      storyText2: "Мы предлагаем премиальные энергетические решения для владельцев вилл и жилых домов в Анталии, Аланье, Сиде, Белеке и окрестностях. В каждом проекте мы применяем немецкие стандарты качества.",
      valuesTitle: "Наши ценности",
      value1Title: "Немецкое качество",
      value1Desc: "Стандарты DIN и немецкая инженерная точность в каждом проекте",
      value2Title: "Местная экспертиза",
      value2Desc: "Техническая команда со знанием средиземноморского климата",
      value3Title: "Клиентоориентированность",
      value3Desc: "Поддержка 24/7 и гарантия 10 лет",
      value4Title: "Устойчивость",
      value4Desc: "Экологичные решения для будущего",
      contactTitle: "Свяжитесь с нами",
      contactSubtitle: "Для бесплатной консультации и осмотра",
      addressLabel: "Адрес",
      address: "Анталия, Турция",
      phoneLabel: "Телефон",
      emailLabel: "Эл. почта",
    },
    uk: {
      badge: "Команда 089 Bayern",
      title: "З Німеччини",
      titleHighlight: "на Середземномор'я",
      subtitle: "Наш міст від Мюнхена до Анталії приносить німецьку інженерну якість на турецьке узбережжя Середземного моря. Познайомтеся з нашою командою експертів із сонячної енергії, теплових насосів та розумних енергетичних рішень.",
      ctaButton: "Безкоштовна консультація",
      storyTitle: "Наша історія",
      storySubtitle: "Німецько-турецький енергетичний міст",
      storyText1: "089 Bayern — німецько-турецька енергетична компанія зі штаб-квартирою в Мюнхені. Наша мета — принести відновлювані енергетичні технології Німеччини в сонячний Середземноморський регіон Туреччини.",
      storyText2: "Ми пропонуємо преміальні енергетичні рішення для власників вілл та житлових будинків в Анталії, Аланії, Сіде, Белеку та околицях. У кожному проекті ми застосовуємо німецькі стандарти якості.",
      valuesTitle: "Наші цінності",
      value1Title: "Німецька якість",
      value1Desc: "Стандарти DIN та німецька інженерна точність у кожному проекті",
      value2Title: "Місцева експертиза",
      value2Desc: "Технічна команда зі знанням середземноморського клімату",
      value3Title: "Клієнтоорієнтованість",
      value3Desc: "Підтримка 24/7 та гарантія 10 років",
      value4Title: "Сталий розвиток",
      value4Desc: "Екологічні рішення для майбутнього",
      contactTitle: "Зв'яжіться з нами",
      contactSubtitle: "Для безкоштовної консультації та огляду",
      addressLabel: "Адреса",
      address: "Анталія, Туреччина",
      phoneLabel: "Телефон",
      emailLabel: "Ел. пошта",
    },
    ar: {
      badge: "فريق 089 Bayern",
      title: "من ألمانيا",
      titleHighlight: "إلى البحر المتوسط",
      subtitle: "من خلال جسرنا من ميونيخ إلى أنطاليا، نجلب جودة الهندسة الألمانية إلى ساحل البحر المتوسط التركي. تعرف على فريق خبرائنا في الطاقة الشمسية والمضخات الحرارية وحلول الطاقة الذكية.",
      ctaButton: "استشارة مجانية",
      storyTitle: "قصتنا",
      storySubtitle: "جسر الطاقة الألماني التركي",
      storyText1: "089 Bayern هي شركة طاقة ألمانية تركية مقرها ميونيخ. هدفنا هو جلب تقنيات الطاقة المتجددة الألمانية إلى منطقة البحر المتوسط المشمسة في تركيا.",
      storyText2: "نقدم حلول طاقة متميزة لأصحاب الفلل والمنازل في أنطاليا وألانيا وسيدي وبيليك والمناطق المحيطة. نطبق معايير الجودة الألمانية في كل مشروع.",
      valuesTitle: "قيمنا",
      value1Title: "الجودة الألمانية",
      value1Desc: "معايير DIN والدقة الهندسية الألمانية في كل مشروع",
      value2Title: "الخبرة المحلية",
      value2Desc: "فريق تقني على دراية بمناخ البحر المتوسط",
      value3Title: "التركيز على العملاء",
      value3Desc: "دعم على مدار الساعة وضمان 10 سنوات",
      value4Title: "الاستدامة",
      value4Desc: "حلول صديقة للبيئة للمستقبل",
      contactTitle: "اتصل بنا",
      contactSubtitle: "للاستشارة المجانية وزيارة الموقع",
      addressLabel: "العنوان",
      address: "أنطاليا، تركيا",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
    },
  };

  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  const values = [
    { icon: Award, title: c.value1Title, desc: c.value1Desc },
    { icon: Globe, title: c.value2Title, desc: c.value2Desc },
    { icon: Heart, title: c.value3Title, desc: c.value3Desc },
    { icon: Target, title: c.value4Title, desc: c.value4Desc },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-team">
      <Header onCtaClick={scrollToCalculator} />
      
      <section className="relative pt-20 pb-8 overflow-hidden" data-testid="section-team-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <Users className="w-4 h-4 mr-2" />
              {c.badge}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {c.title}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-accent bg-clip-text text-transparent">
                {c.titleHighlight}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {c.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToCalculator}
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg px-8"
                data-testid="button-team-cta"
              >
                {c.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8" 
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-team-phone"
              >
                <Phone className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
                +90 507 183 2036
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-our-story">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              {c.storySubtitle}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.storyTitle}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {c.storyText1}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {c.storyText2}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.valuesTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50" data-testid={`card-value-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.contactTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.contactSubtitle}</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{c.addressLabel}</h3>
                      <p className="text-muted-foreground">{c.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{c.phoneLabel}</h3>
                      <a href="tel:+905071832036" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-phone">
                        +90 507 183 2036
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{c.emailLabel}</h3>
                      <a href="mailto:info@089bayern.de" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-email">
                        info@089bayern.de
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 border-0"
              data-testid="button-team-cta-bottom"
            >
              {c.ctaButton}
              <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
