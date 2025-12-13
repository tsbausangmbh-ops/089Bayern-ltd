import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sun, Users, MapPin, ArrowRight, Sparkles, Building2, Target, Handshake, Shield, Phone, Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function UeberUns() {
  const { language } = useLanguage();

  const scrollToContact = () => {
    window.location.href = "/#calculator";
  };

  const content = {
    tr: {
      badge: "Hikayemiz",
      title: "Bir Hayalden",
      titleHighlight: "Gerçeğe",
      subtitle: "Güneşin gücünü insanlara ulaştırma tutkusuyla başlayan yolculuğumuz",
      
      chapter1Title: "Bir Hayal Başladı",
      chapter1Year: "Münih, Almanya",
      chapter1Text: `Almanya'nın kalbinde, Münih'te, Dalibor Bakmaz bir gece gökyüzüne baktı ve düşündü: "Türkiye'de neredeyse 10 ay boyunca güneş bedava ışık saçıyor. Bu muhteşem enerji kaynağını insanlara nasıl ulaştırabilirim?"

Bu sadece bir iş fikri değildi. Bu, bir vizyondu. Yıllar boyunca Almanya'nın soğuk kışlarında çalışırken, aklı hep güneşin sıcaklığındaydı.`,

      chapter2Title: "Kader İki Yolu Birleştirdi",
      chapter2Year: "Ortaklık",
      chapter2Text: `Ve sonra, kader devreye girdi. Münih'in bir fabrikasında, Mustafa Sakar ile tanıştı. Mustafa, doğma büyüme Türk, hem Almanya'yı hem Türkiye'yi yüreğinde taşıyan biri.

"Birlikte yapabiliriz" dedi Mustafa. "Sen mühendislik bilgini, ben köprü olayım. Türkiye'deki aileler ucuz enerji hak ediyor."`,

      chapter3Title: "Alanya'da İlk Adım",
      chapter3Year: "Türkiye'de Başlangıç",
      chapter3Text: `İşte o zaman, Ahmet İmrol hayatlarına girdi. Alanya'da doğmuş, büyümüş, her sokağı, her aileyi tanıyan biri.

"Burası benim evim" dedi Ahmet. "Bu insanlar benim komşularım. Onlara en iyisini sunmak için her şeyimi veririm."`,

      chapter4Title: "Üç Şehir, Bir Aile",
      chapter4Year: "Bugün",
      chapter4Text: `Alanya'dan Antalya'ya, Antalya'dan Ankara'ya... Her şehirde aynı hikaye tekrarlandı.

Bugün, üç şubeyle Türkiye'nin dört bir yanına hizmet veriyoruz. Ama biz büyük bir şirket değiliz. Biz bir aileyiz.`,

      quote: "Artık elektrik faturası yok. Allah sizden razı olsun.",
      quoteAuthor: "İlk Müşterimiz, Alanya",

      visionTitle: "Vizyonumuz",
      visionText: "Güneşin bedava olduğu bu topraklarda, hiçbir aile karanlıkta kalmasın.",
      
      valuesTitle: "Değerlerimiz",
      value1Title: "Alman Kalitesi",
      value1Text: "Alman mühendisliği, Türk misafirperverliği",
      value2Title: "Aile Gibi",
      value2Text: "Her müşteri bir aile üyesi",
      value3Title: "Söz Namustur",
      value3Text: "Söz verdiğimizi yaparız",
      
      ctaTitle: "Hikayenizin Bir Parçası Olmak İstiyoruz",
      ctaText: "Siz de güneşin gücünü evinize taşımak ister misiniz?",
      ctaButton: "Ücretsiz Keşif Al",

      statsInstallations: "Kurulum",
      statsSavings: "Tasarruf",
      statsYears: "Yıl Deneyim",
      statsCustomers: "Mutlu Müşteri",

      locations: [
        { city: "Alanya", desc: "Hikayemizin başladığı yer", address: "Şekerhane Mah." },
        { city: "Antalya", desc: "Bölge merkezi", address: "Merkez" },
        { city: "Ankara", desc: "Başkent şubemiz", address: "Çankaya" },
      ],
    },
    de: {
      badge: "Unsere Geschichte",
      title: "Von einem Traum",
      titleHighlight: "zur Realität",
      subtitle: "Eine Reise, die mit der Leidenschaft begann, die Kraft der Sonne zu den Menschen zu bringen",
      
      chapter1Title: "Ein Traum begann",
      chapter1Year: "München, Deutschland",
      chapter1Text: `Im Herzen Deutschlands, in München, blickte Dalibor Bakmaz eines Nachts zum Himmel und dachte: "In der Türkei scheint die Sonne fast 10 Monate lang kostenlos. Wie kann ich diese wunderbare Energiequelle zu den Menschen bringen?"

Das war nicht nur eine Geschäftsidee. Es war eine Vision. Jahre lang arbeitete er in den kalten Wintern Deutschlands, aber seine Gedanken waren immer bei der Wärme der Sonne.`,

      chapter2Title: "Das Schicksal führte zusammen",
      chapter2Year: "Partnerschaft",
      chapter2Text: `Und dann griff das Schicksal ein. In einer Fabrik in München traf er Mustafa Sakar. Mustafa, ein gebürtiger Türke, der sowohl Deutschland als auch die Türkei in seinem Herzen trug.

"Wir können es gemeinsam schaffen" sagte Mustafa. "Du bringst das Ingenieurwissen, ich bin die Brücke."`,

      chapter3Title: "Der erste Schritt in Alanya",
      chapter3Year: "Start in der Türkei",
      chapter3Text: `Da kam Ahmet İmrol in ihr Leben. Geboren und aufgewachsen in Alanya, kannte er jede Straße, jede Familie.

"Das ist meine Heimat" sagte Ahmet. "Diese Menschen sind meine Nachbarn. Ich gebe alles, um ihnen das Beste zu bieten."`,

      chapter4Title: "Drei Städte, eine Familie",
      chapter4Year: "Heute",
      chapter4Text: `Von Alanya nach Antalya, von Antalya nach Ankara... In jeder Stadt wiederholte sich dieselbe Geschichte.

Heute bedienen wir mit drei Niederlassungen ganz Türkei. Aber wir sind kein großes Unternehmen. Wir sind eine Familie.`,

      quote: "Keine Stromrechnung mehr. Gott segne euch.",
      quoteAuthor: "Unser erster Kunde, Alanya",

      visionTitle: "Unsere Vision",
      visionText: "In diesem Land, wo die Sonne kostenlos scheint, soll keine Familie im Dunkeln bleiben.",
      
      valuesTitle: "Unsere Werte",
      value1Title: "Deutsche Qualität",
      value1Text: "Deutsche Ingenieurskunst, türkische Gastfreundschaft",
      value2Title: "Wie Familie",
      value2Text: "Jeder Kunde ist ein Familienmitglied",
      value3Title: "Wort ist Ehre",
      value3Text: "Wir halten, was wir versprechen",
      
      ctaTitle: "Wir möchten Teil Ihrer Geschichte werden",
      ctaText: "Möchten auch Sie die Kraft der Sonne in Ihr Zuhause bringen?",
      ctaButton: "Kostenlose Beratung",

      statsInstallations: "Installationen",
      statsSavings: "Ersparnis",
      statsYears: "Jahre Erfahrung",
      statsCustomers: "Zufriedene Kunden",

      locations: [
        { city: "Alanya", desc: "Wo unsere Geschichte begann", address: "Şekerhane Mah." },
        { city: "Antalya", desc: "Regionales Zentrum", address: "Zentrum" },
        { city: "Ankara", desc: "Hauptstadt-Filiale", address: "Çankaya" },
      ],
    },
    en: {
      badge: "Our Story",
      title: "From a Dream",
      titleHighlight: "to Reality",
      subtitle: "A journey that began with the passion to bring the power of the sun to the people",
      
      chapter1Title: "A Dream Began",
      chapter1Year: "Munich, Germany",
      chapter1Text: `In the heart of Germany, in Munich, Dalibor Bakmaz looked up at the sky one night and thought: "In Turkey, the sun shines for free almost 10 months a year. How can I bring this wonderful energy source to the people?"

This wasn't just a business idea. It was a vision. For years he worked in Germany's cold winters, but his mind was always on the warmth of the sun.`,

      chapter2Title: "Fate Brought Two Together",
      chapter2Year: "Partnership",
      chapter2Text: `And then, fate intervened. In a factory in Munich, he met Mustafa Sakar. Mustafa, a native Turk who carried both Germany and Turkey in his heart.

"We can do it together" said Mustafa. "You bring the engineering knowledge, I'll be the bridge."`,

      chapter3Title: "The First Step in Alanya",
      chapter3Year: "Starting in Turkey",
      chapter3Text: `That's when Ahmet İmrol came into their lives. Born and raised in Alanya, he knew every street, every family.

"This is my home" said Ahmet. "These people are my neighbors. I'll give everything to offer them the best."`,

      chapter4Title: "Three Cities, One Family",
      chapter4Year: "Today",
      chapter4Text: `From Alanya to Antalya, from Antalya to Ankara... In every city, the same story repeated.

Today, we serve all of Turkey with three branches. But we're not a big company. We're a family.`,

      quote: "No more electricity bills. God bless you.",
      quoteAuthor: "Our first customer, Alanya",

      visionTitle: "Our Vision",
      visionText: "In this land where the sun shines for free, no family should be left in the dark.",
      
      valuesTitle: "Our Values",
      value1Title: "German Quality",
      value1Text: "German engineering, Turkish hospitality",
      value2Title: "Like Family",
      value2Text: "Every customer is a family member",
      value3Title: "Word is Honor",
      value3Text: "We keep our promises",
      
      ctaTitle: "We Want to Be Part of Your Story",
      ctaText: "Would you also like to bring the power of the sun to your home?",
      ctaButton: "Free Consultation",

      statsInstallations: "Installations",
      statsSavings: "Savings",
      statsYears: "Years Experience",
      statsCustomers: "Happy Customers",

      locations: [
        { city: "Alanya", desc: "Where our story began", address: "Şekerhane Mah." },
        { city: "Antalya", desc: "Regional center", address: "Center" },
        { city: "Ankara", desc: "Capital branch", address: "Çankaya" },
      ],
    },
    ru: {
      badge: "Наша История",
      title: "От Мечты",
      titleHighlight: "к Реальности",
      subtitle: "Путешествие, которое началось со страсти донести силу солнца до людей",
      
      chapter1Title: "Мечта началась",
      chapter1Year: "Мюнхен, Германия",
      chapter1Text: `В сердце Германии, в Мюнхене, Далибор Бакмаз однажды ночью посмотрел на небо и подумал: "В Турции солнце светит бесплатно почти 10 месяцев в году. Как я могу донести этот источник энергии до людей?"

Это была не просто бизнес-идея. Это было видение.`,

      chapter2Title: "Судьба свела двоих",
      chapter2Year: "Партнёрство",
      chapter2Text: `И тогда вмешалась судьба. На заводе в Мюнхене он встретил Мустафу Сакара.

"Мы можем сделать это вместе" сказал Мустафа. "Ты принесёшь инженерные знания, я буду мостом."`,

      chapter3Title: "Первый шаг в Аланье",
      chapter3Year: "Старт в Турции",
      chapter3Text: `Тогда в их жизнь вошёл Ахмет Имрол. Родившийся и выросший в Аланье, он знал каждую улицу, каждую семью.

"Это мой дом" сказал Ахмет. "Эти люди - мои соседи."`,

      chapter4Title: "Три города, одна семья",
      chapter4Year: "Сегодня",
      chapter4Text: `Из Аланьи в Анталью, из Антальи в Анкару... В каждом городе повторялась та же история.

Сегодня мы обслуживаем всю Турцию. Но мы не большая компания. Мы семья.`,

      quote: "Больше нет счетов за электричество. Да благословит вас Бог.",
      quoteAuthor: "Наш первый клиент, Аланья",

      visionTitle: "Наше Видение",
      visionText: "В этой стране, где солнце светит бесплатно, ни одна семья не должна оставаться в темноте.",
      
      valuesTitle: "Наши Ценности",
      value1Title: "Немецкое Качество",
      value1Text: "Немецкая инженерия, турецкое гостеприимство",
      value2Title: "Как Семья",
      value2Text: "Каждый клиент - член семьи",
      value3Title: "Слово - Честь",
      value3Text: "Мы держим свои обещания",
      
      ctaTitle: "Мы хотим стать частью вашей истории",
      ctaText: "Хотите и вы принести силу солнца в свой дом?",
      ctaButton: "Бесплатная консультация",

      statsInstallations: "Установок",
      statsSavings: "Экономия",
      statsYears: "Лет опыта",
      statsCustomers: "Довольных клиентов",

      locations: [
        { city: "Аланья", desc: "Где началась наша история", address: "Şekerhane Mah." },
        { city: "Анталья", desc: "Региональный центр", address: "Центр" },
        { city: "Анкара", desc: "Филиал в столице", address: "Çankaya" },
      ],
    },
    uk: {
      badge: "Наша Історія",
      title: "Від Мрії",
      titleHighlight: "до Реальності",
      subtitle: "Подорож, яка почалася з пристрасті донести силу сонця до людей",
      
      chapter1Title: "Мрія почалася",
      chapter1Year: "Мюнхен, Німеччина",
      chapter1Text: `У серці Німеччини, в Мюнхені, Далібор Бакмаз подивився на небо і подумав: "У Туреччині сонце світить безкоштовно майже 10 місяців на рік. Як я можу донести це джерело енергії до людей?"

Це була не просто бізнес-ідея. Це було бачення.`,

      chapter2Title: "Доля звела двох",
      chapter2Year: "Партнерство",
      chapter2Text: `І тоді втрутилася доля. На заводі в Мюнхені він зустрів Мустафу Сакара.

"Ми можемо зробити це разом" сказав Мустафа. "Ти принесеш інженерні знання, я буду мостом."`,

      chapter3Title: "Перший крок в Аланії",
      chapter3Year: "Старт в Туреччині",
      chapter3Text: `Тоді в їхнє життя увійшов Ахмет Імрол. Народжений і вирослий в Аланії, він знав кожну вулицю.

"Це мій дім" сказав Ахмет. "Ці люди - мої сусіди."`,

      chapter4Title: "Три міста, одна родина",
      chapter4Year: "Сьогодні",
      chapter4Text: `З Аланії в Анталію, з Анталії в Анкару... У кожному місті повторювалася та сама історія.

Сьогодні ми обслуговуємо всю Туреччину. Але ми не велика компанія. Ми родина.`,

      quote: "Більше немає рахунків за електрику. Нехай Бог благословить вас.",
      quoteAuthor: "Наш перший клієнт, Аланія",

      visionTitle: "Наше Бачення",
      visionText: "У цій країні, де сонце світить безкоштовно, жодна родина не повинна залишатися в темряві.",
      
      valuesTitle: "Наші Цінності",
      value1Title: "Німецька Якість",
      value1Text: "Німецька інженерія, турецька гостинність",
      value2Title: "Як Родина",
      value2Text: "Кожен клієнт - член родини",
      value3Title: "Слово - Честь",
      value3Text: "Ми тримаємо свої обіцянки",
      
      ctaTitle: "Ми хочемо стати частиною вашої історії",
      ctaText: "Хочете і ви принести силу сонця у свій дім?",
      ctaButton: "Безкоштовна консультація",

      statsInstallations: "Установок",
      statsSavings: "Економія",
      statsYears: "Років досвіду",
      statsCustomers: "Задоволених клієнтів",

      locations: [
        { city: "Аланія", desc: "Де почалася наша історія", address: "Şekerhane Mah." },
        { city: "Анталія", desc: "Регіональний центр", address: "Центр" },
        { city: "Анкара", desc: "Філія в столиці", address: "Çankaya" },
      ],
    },
    ar: {
      badge: "قصتنا",
      title: "من حلم",
      titleHighlight: "إلى واقع",
      subtitle: "رحلة بدأت بشغف إيصال قوة الشمس إلى الناس",
      
      chapter1Title: "بدأ الحلم",
      chapter1Year: "ميونيخ، ألمانيا",
      chapter1Text: `في قلب ألمانيا، في ميونيخ، نظر داليبور باكماز إلى السماء وفكر: "في تركيا، تشرق الشمس مجاناً لمدة 10 أشهر في السنة. كيف يمكنني إيصال مصدر الطاقة هذا إلى الناس؟"

لم تكن هذه مجرد فكرة تجارية. كانت رؤية.`,

      chapter2Title: "القدر جمع اثنين",
      chapter2Year: "الشراكة",
      chapter2Text: `ثم تدخل القدر. في مصنع في ميونيخ، التقى بمصطفى ساكار.

"يمكننا فعل ذلك معاً" قال مصطفى. "أنت تجلب المعرفة الهندسية، وأنا سأكون الجسر."`,

      chapter3Title: "الخطوة الأولى في ألانيا",
      chapter3Year: "البداية في تركيا",
      chapter3Text: `ثم دخل أحمد إمرول حياتهم. ولد ونشأ في ألانيا، يعرف كل شارع، كل عائلة.

"هذا بيتي" قال أحمد. "هؤلاء الناس جيراني."`,

      chapter4Title: "ثلاث مدن، عائلة واحدة",
      chapter4Year: "اليوم",
      chapter4Text: `من ألانيا إلى أنطاليا، من أنطاليا إلى أنقرة... في كل مدينة تكررت نفس القصة.

اليوم، نخدم كل تركيا. لكننا لسنا شركة كبيرة. نحن عائلة.`,

      quote: "لا مزيد من فواتير الكهرباء. بارك الله فيكم.",
      quoteAuthor: "أول عميل لنا، ألانيا",

      visionTitle: "رؤيتنا",
      visionText: "في هذه الأرض حيث تشرق الشمس مجاناً، لا يجب أن تبقى أي عائلة في الظلام.",
      
      valuesTitle: "قيمنا",
      value1Title: "الجودة الألمانية",
      value1Text: "الهندسة الألمانية، الضيافة التركية",
      value2Title: "مثل العائلة",
      value2Text: "كل عميل هو فرد من العائلة",
      value3Title: "الكلمة شرف",
      value3Text: "نحن نفي بوعودنا",
      
      ctaTitle: "نريد أن نكون جزءاً من قصتك",
      ctaText: "هل تريد أيضاً جلب قوة الشمس إلى منزلك؟",
      ctaButton: "استشارة مجانية",

      statsInstallations: "تركيب",
      statsSavings: "توفير",
      statsYears: "سنوات خبرة",
      statsCustomers: "عملاء سعداء",

      locations: [
        { city: "ألانيا", desc: "حيث بدأت قصتنا", address: "Şekerhane Mah." },
        { city: "أنطاليا", desc: "المركز الإقليمي", address: "المركز" },
        { city: "أنقرة", desc: "فرع العاصمة", address: "Çankaya" },
      ],
    },
  };

  const t = content[language as keyof typeof content] || content.tr;
  const isRtl = language === "ar";

  const chapters = [
    { title: t.chapter1Title, year: t.chapter1Year, text: t.chapter1Text, icon: Sparkles, color: "from-amber-500 to-orange-500" },
    { title: t.chapter2Title, year: t.chapter2Year, text: t.chapter2Text, icon: Handshake, color: "from-blue-500 to-cyan-500" },
    { title: t.chapter3Title, year: t.chapter3Year, text: t.chapter3Text, icon: MapPin, color: "from-green-500 to-emerald-500" },
    { title: t.chapter4Title, year: t.chapter4Year, text: t.chapter4Text, icon: Users, color: "from-purple-500 to-pink-500" },
  ];

  const values = [
    { title: t.value1Title, text: t.value1Text, icon: Shield },
    { title: t.value2Title, text: t.value2Text, icon: Heart },
    { title: t.value3Title, text: t.value3Text, icon: Target },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"}>
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <Badge className="mb-6 bg-accent/90 text-white border-0 px-4 py-1.5" data-testid="badge-story">
            <Sun className="w-4 h-4 mr-2" />
            {t.badge}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" data-testid="heading-title">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
            {t.subtitle}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-white/70">{t.statsInstallations}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-accent">70%</div>
              <div className="text-sm text-white/70">{t.statsSavings}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
              <div className="text-sm text-white/70">{t.statsYears}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
              <div className="text-sm text-white/70">{t.statsCustomers}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30 hidden md:block" />
            
            {/* Chapters */}
            <div className="space-y-12 md:space-y-24">
              {chapters.map((chapter, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`chapter-${index + 1}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${chapter.color} flex items-center justify-center shadow-lg`}>
                      <chapter.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <Card className="overflow-hidden border-0 shadow-xl bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-6 md:p-8">
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${chapter.color} flex items-center justify-center md:hidden`}>
                            <chapter.icon className="w-5 h-5 text-white" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {chapter.year}
                          </Badge>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {chapter.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {chapter.text}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 mx-auto text-accent/50 mb-6" />
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-4">
            "{t.quote}"
          </blockquote>
          <cite className="text-muted-foreground">— {t.quoteAuthor}</cite>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="heading-vision">
              {t.visionTitle}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t.visionText}
            </p>
          </div>

          {/* Values */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10" data-testid="heading-values">
            {t.valuesTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card overflow-visible" data-testid={`value-card-${index + 1}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center shadow-lg shadow-accent/30">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {t.locations.map((location, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group" data-testid={`location-card-${location.city}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{location.city}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{location.desc}</p>
                      <p className="text-xs text-muted-foreground/70">{location.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sun className="w-16 h-16 mx-auto text-accent mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" data-testid="heading-cta">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-accent to-orange-600 border-0 text-lg px-8 py-6 shadow-lg shadow-accent/30"
              data-testid="button-cta-consultation"
            >
              {t.ctaButton}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-white/5 backdrop-blur-sm text-lg px-8 py-6"
              onClick={() => window.location.href = "tel:+905071832036"}
              data-testid="button-cta-phone"
            >
              <Phone className="mr-2 w-5 h-5" />
              +90 507 183 2036
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
