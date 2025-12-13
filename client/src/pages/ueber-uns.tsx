import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sun, Users, MapPin, ArrowRight, Sparkles, Building2, Target, Handshake, Shield, Phone, Quote, Award, CheckCircle, Wrench, Clock, ThumbsUp, Zap } from "lucide-react";
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
      title: "Güneş Enerjisi Uzmanları:",
      titleHighlight: "Akdeniz'in Güvenilir Ortağı",
      subtitle: "Antalya, Alanya ve tüm Akdeniz bölgesinde güneş paneli, ısı pompası ve enerji sistemleri kurulumu - Alman kalitesi, Türk hizmeti",
      
      seoH2Timeline: "089 Bayern Enerji - Münih'ten Akdeniz'e Uzanan Yolculuğumuz",
      
      chapter1Title: "Münih'te Bir Hayal Başladı",
      chapter1Year: "Münih, Bayern - Almanya",
      chapter1Text: `Almanya'nın kalbinde, Münih'te, Dalibor Bakmaz bir gece gökyüzüne baktı ve düşündü: "Türkiye'nin Akdeniz kıyısında neredeyse 10 ay boyunca güneş bedava ışık saçıyor. Bu muhteşem güneş enerjisi kaynağını Antalya ve Alanya'daki ailelere nasıl ulaştırabilirim?"

Bu sadece bir iş fikri değildi. Bayern'de öğrendiği Alman mühendisliği ile Akdeniz'in güneş potansiyelini birleştiren bir vizyondu.`,

      chapter2Title: "Alman-Türk Ortaklığı Kuruldu",
      chapter2Year: "Ortaklık",
      chapter2Text: `Ve sonra, kader devreye girdi. Münih'in bir fabrikasında, Mustafa Sakar ile tanıştı. Mustafa, doğma büyüme Türk, hem Almanya'yı hem Türkiye'yi yüreğinde taşıyan biri.

"Birlikte yapabiliriz" dedi Mustafa. "Sen Alman solar panel ve ısı pompası teknolojisini, ben Türkiye köprüsünü kurayım. Antalya, Alanya, Muğla, İzmir'deki aileler ucuz ve temiz enerji hak ediyor."`,

      chapter3Title: "Alanya'da İlk Güneş Enerjisi Kurulumu",
      chapter3Year: "Akdeniz'de Başlangıç",
      chapter3Text: `İşte o zaman, Ahmet İmrol hayatlarına girdi. Alanya'da doğmuş, büyümüş, Akdeniz'in her sokağını, her ailesini tanıyan biri.

"Burası benim evim" dedi Ahmet. "Bu insanlar benim komşularım. Onlara Alman kalitesinde güneş paneli ve ısı pompası sistemleri sunmak için her şeyimi veririm."`,

      chapter4Title: "Antalya'dan Tüm Akdeniz'e Hizmet",
      chapter4Year: "Bugün",
      chapter4Text: `Alanya'dan Antalya'ya, Antalya'dan Muğla ve İzmir'e... Her Akdeniz şehrinde aynı hikaye tekrarlandı.

Bugün, üç şubeyle Antalya, Alanya ve tüm Akdeniz bölgesine güneş enerjisi, ısı pompası ve klima sistemleri kuruyoruz. Ama biz büyük bir şirket değiliz. Biz bir aileyiz.`,

      quote: "Artık elektrik faturası yok. Allah sizden razı olsun.",
      quoteAuthor: "İlk Müşterimiz, Alanya",

      visionTitle: "Vizyonumuz: Akdeniz'de Enerji Bağımsızlığı",
      visionText: "Güneşin bedava olduğu Antalya, Alanya ve tüm Akdeniz kıyılarında, hiçbir aile karanlıkta kalmasın. Alman kalitesi, Türk hizmeti.",
      
      valuesTitle: "089 Bayern Değerleri",
      value1Title: "Alman Mühendislik Kalitesi",
      value1Text: "Bayern'den gelen Alman solar panel teknolojisi, Türk misafirperverliği",
      value2Title: "Aile Gibi Hizmet",
      value2Text: "Antalya'dan Alanya'ya her müşteri bir aile üyesi",
      value3Title: "Söz Namustur",
      value3Text: "Güneş enerjisi ve ısı pompası kurulumunda söz verdiğimizi yaparız",
      
      ctaTitle: "Akdeniz'de Güneş Enerjisi Hikayenizin Parçası Olalım",
      ctaText: "Siz de güneş paneli ve ısı pompası ile evinizi enerji bağımsızlığına kavuşturmak ister misiniz?",
      ctaButton: "Ücretsiz Keşif Al",

      statsInstallations: "Akdeniz'de Kurulum",
      statsSavings: "Enerji Tasarrufu",
      statsYears: "Yıl Deneyim",
      statsCustomers: "Mutlu Müşteri",

      locationsTitle: "Akdeniz Bölgesi Ofislerimiz",
      locations: [
        { city: "Alanya", desc: "Güneş enerjisi hikayemizin başladığı yer", address: "Şekerhane Mah." },
        { city: "Antalya", desc: "Akdeniz bölge merkezi", address: "Merkez" },
        { city: "Ankara", desc: "Başkent şubemiz", address: "Çankaya" },
      ],
    },
    de: {
      badge: "Unsere Geschichte",
      title: "Solaranlage & Wärmepumpe:",
      titleHighlight: "Deutsche Qualität in der Türkei",
      subtitle: "Solaranlagen, Wärmepumpen und Energiesysteme für Antalya, Alanya und die gesamte Mittelmeerregion - von München nach Antalya",
      
      seoH2Timeline: "089 Bayern Energie - Von München nach Antalya",
      
      chapter1Title: "Der Traum begann in München",
      chapter1Year: "München, Bayern - Deutschland",
      chapter1Text: `Im Herzen Bayerns, in München, blickte Dalibor Bakmaz eines Nachts zum Himmel und dachte: "An der türkischen Mittelmeerküste scheint die Sonne fast 10 Monate lang kostenlos. Wie kann ich Solaranlagen und Wärmepumpen zu den Familien in Antalya und Alanya bringen?"

Das war nicht nur eine Geschäftsidee. Es war eine Vision - deutsche Ingenieurskunst aus Bayern mit dem Sonnenpotenzial des Mittelmeers zu verbinden.`,

      chapter2Title: "Deutsch-Türkische Partnerschaft",
      chapter2Year: "Partnerschaft",
      chapter2Text: `Und dann griff das Schicksal ein. In einer Fabrik in München traf er Mustafa Sakar. Mustafa, ein gebürtiger Türke, der sowohl Deutschland als auch die Türkei in seinem Herzen trug.

"Wir können es gemeinsam schaffen" sagte Mustafa. "Du bringst deutsche Solarpanel- und Wärmepumpentechnologie, ich baue die Türkei-Brücke. Familien in Antalya, Alanya, Muğla und İzmir verdienen günstige, saubere Energie."`,

      chapter3Title: "Erste Solaranlage in Alanya",
      chapter3Year: "Start am Mittelmeer",
      chapter3Text: `Da kam Ahmet İmrol in ihr Leben. Geboren und aufgewachsen in Alanya, kannte er jede Straße, jede Familie an der Mittelmeerküste.

"Das ist meine Heimat" sagte Ahmet. "Diese Menschen sind meine Nachbarn. Ich gebe alles, um ihnen deutsche Qualität bei Solaranlagen und Wärmepumpen zu bieten."`,

      chapter4Title: "Von Antalya in die gesamte Mittelmeerregion",
      chapter4Year: "Heute",
      chapter4Text: `Von Alanya nach Antalya, von Antalya nach Muğla und İzmir... In jeder Mittelmeerstadt wiederholte sich dieselbe Geschichte.

Heute installieren wir mit drei Niederlassungen Solaranlagen, Wärmepumpen und Klimasysteme in Antalya, Alanya und der gesamten Mittelmeerregion. Aber wir sind kein großes Unternehmen. Wir sind eine Familie.`,

      quote: "Keine Stromrechnung mehr. Gott segne euch.",
      quoteAuthor: "Unser erster Kunde, Alanya",

      visionTitle: "Unsere Vision: Energieunabhängigkeit am Mittelmeer",
      visionText: "In Antalya, Alanya und an der gesamten Mittelmeerküste, wo die Sonne kostenlos scheint, soll keine Familie im Dunkeln bleiben. Deutsche Qualität, türkischer Service.",
      
      valuesTitle: "089 Bayern Werte",
      value1Title: "Deutsche Ingenieursqualität",
      value1Text: "Deutsche Solartechnik aus Bayern, türkische Gastfreundschaft",
      value2Title: "Familiärer Service",
      value2Text: "Von Antalya bis Alanya - jeder Kunde ist ein Familienmitglied",
      value3Title: "Wort ist Ehre",
      value3Text: "Bei Solaranlagen und Wärmepumpen halten wir, was wir versprechen",
      
      ctaTitle: "Ihre Solaranlage am Mittelmeer",
      ctaText: "Möchten auch Sie mit Solarpanels und Wärmepumpe Energieunabhängigkeit erreichen?",
      ctaButton: "Kostenlose Beratung",

      statsInstallations: "Installationen am Mittelmeer",
      statsSavings: "Energieersparnis",
      statsYears: "Jahre Erfahrung",
      statsCustomers: "Zufriedene Kunden",

      locationsTitle: "Unsere Standorte in der Mittelmeerregion",
      locations: [
        { city: "Alanya", desc: "Wo unsere Solargeschichte begann", address: "Şekerhane Mah." },
        { city: "Antalya", desc: "Mittelmeer-Regionszentrum", address: "Zentrum" },
        { city: "Ankara", desc: "Hauptstadt-Filiale", address: "Çankaya" },
      ],
    },
    en: {
      badge: "Our Story",
      title: "Solar Panels & Heat Pumps:",
      titleHighlight: "German Quality in Turkey",
      subtitle: "Solar panels, heat pumps and energy systems for Antalya, Alanya and the entire Mediterranean region - from Munich to Antalya",
      
      seoH2Timeline: "089 Bayern Energy - From Munich to the Mediterranean",
      
      chapter1Title: "The Dream Began in Munich",
      chapter1Year: "Munich, Bavaria - Germany",
      chapter1Text: `In the heart of Bavaria, in Munich, Dalibor Bakmaz looked up at the sky one night and thought: "On Turkey's Mediterranean coast, the sun shines for free almost 10 months a year. How can I bring solar panels and heat pumps to families in Antalya and Alanya?"

This wasn't just a business idea. It was a vision - combining German engineering from Bavaria with the solar potential of the Mediterranean.`,

      chapter2Title: "German-Turkish Partnership Formed",
      chapter2Year: "Partnership",
      chapter2Text: `And then, fate intervened. In a factory in Munich, he met Mustafa Sakar. Mustafa, a native Turk who carried both Germany and Turkey in his heart.

"We can do it together" said Mustafa. "You bring German solar panel and heat pump technology, I'll build the Turkey bridge. Families in Antalya, Alanya, Muğla and İzmir deserve affordable, clean energy."`,

      chapter3Title: "First Solar Installation in Alanya",
      chapter3Year: "Starting in the Mediterranean",
      chapter3Text: `That's when Ahmet İmrol came into their lives. Born and raised in Alanya, he knew every street, every family on the Mediterranean coast.

"This is my home" said Ahmet. "These people are my neighbors. I'll give everything to offer them German quality solar panels and heat pumps."`,

      chapter4Title: "From Antalya to the Entire Mediterranean",
      chapter4Year: "Today",
      chapter4Text: `From Alanya to Antalya, from Antalya to Muğla and İzmir... In every Mediterranean city, the same story repeated.

Today, we install solar panels, heat pumps and climate systems in Antalya, Alanya and the entire Mediterranean region with three branches. But we're not a big company. We're a family.`,

      quote: "No more electricity bills. God bless you.",
      quoteAuthor: "Our first customer, Alanya",

      visionTitle: "Our Vision: Energy Independence in the Mediterranean",
      visionText: "In Antalya, Alanya and across the Mediterranean coast, where the sun shines for free, no family should be left in the dark. German quality, Turkish service.",
      
      valuesTitle: "089 Bayern Values",
      value1Title: "German Engineering Quality",
      value1Text: "German solar technology from Bavaria, Turkish hospitality",
      value2Title: "Family-Like Service",
      value2Text: "From Antalya to Alanya - every customer is a family member",
      value3Title: "Word is Honor",
      value3Text: "We keep our promises on solar panels and heat pumps",
      
      ctaTitle: "Your Solar System in the Mediterranean",
      ctaText: "Would you also like to achieve energy independence with solar panels and heat pumps?",
      ctaButton: "Free Consultation",

      statsInstallations: "Mediterranean Installations",
      statsSavings: "Energy Savings",
      statsYears: "Years Experience",
      statsCustomers: "Happy Customers",

      locationsTitle: "Our Mediterranean Region Offices",
      locations: [
        { city: "Alanya", desc: "Where our solar story began", address: "Şekerhane Mah." },
        { city: "Antalya", desc: "Mediterranean regional center", address: "Center" },
        { city: "Ankara", desc: "Capital branch", address: "Çankaya" },
      ],
    },
    ru: {
      badge: "Наша История",
      title: "Солнечные панели и тепловые насосы:",
      titleHighlight: "Немецкое качество в Турции",
      subtitle: "Солнечные панели, тепловые насосы и энергосистемы для Анталии, Аланьи и всего Средиземноморья - из Мюнхена в Анталию",
      
      seoH2Timeline: "089 Bayern Энергия - Из Мюнхена на Средиземноморье",
      
      chapter1Title: "Мечта началась в Мюнхене",
      chapter1Year: "Мюнхен, Бавария - Германия",
      chapter1Text: `В сердце Баварии, в Мюнхене, Далибор Бакмаз однажды ночью посмотрел на небо и подумал: "На средиземноморском побережье Турции солнце светит бесплатно почти 10 месяцев в году. Как я могу привезти солнечные панели и тепловые насосы семьям в Анталии и Аланье?"

Это была не просто бизнес-идея. Это было видение - объединить немецкую инженерию из Баварии с солнечным потенциалом Средиземноморья.`,

      chapter2Title: "Немецко-турецкое партнёрство",
      chapter2Year: "Партнёрство",
      chapter2Text: `И тогда вмешалась судьба. На заводе в Мюнхене он встретил Мустафу Сакара. Мустафа - турок по рождению, который нёс в сердце и Германию, и Турцию.

"Мы можем сделать это вместе" сказал Мустафа. "Ты принесёшь немецкую технологию солнечных панелей и тепловых насосов, я построю мост в Турцию. Семьи в Анталии, Аланье, Мугле и Измире заслуживают доступной, чистой энергии."`,

      chapter3Title: "Первая солнечная установка в Аланье",
      chapter3Year: "Старт на Средиземноморье",
      chapter3Text: `Тогда в их жизнь вошёл Ахмет Имрол. Родившийся и выросший в Аланье, он знал каждую улицу, каждую семью на средиземноморском побережье.

"Это мой дом" сказал Ахмет. "Эти люди - мои соседи. Я отдам всё, чтобы предложить им немецкое качество солнечных панелей и тепловых насосов."`,

      chapter4Title: "Из Анталии на всё Средиземноморье",
      chapter4Year: "Сегодня",
      chapter4Text: `Из Аланьи в Анталию, из Анталии в Муглу и Измир... В каждом средиземноморском городе повторялась та же история.

Сегодня мы устанавливаем солнечные панели, тепловые насосы и климатические системы в Анталии, Аланье и всём регионе Средиземноморья с тремя филиалами. Но мы не большая компания. Мы семья.`,

      quote: "Больше нет счетов за электричество. Да благословит вас Бог.",
      quoteAuthor: "Наш первый клиент, Аланья",

      visionTitle: "Наше Видение: Энергонезависимость на Средиземноморье",
      visionText: "В Анталии, Аланье и на всём средиземноморском побережье, где солнце светит бесплатно, ни одна семья не должна оставаться в темноте. Немецкое качество, турецкий сервис.",
      
      valuesTitle: "Ценности 089 Bayern",
      value1Title: "Немецкое инженерное качество",
      value1Text: "Немецкая солнечная технология из Баварии, турецкое гостеприимство",
      value2Title: "Семейный сервис",
      value2Text: "От Анталии до Аланьи - каждый клиент член семьи",
      value3Title: "Слово - Честь",
      value3Text: "Мы держим обещания по солнечным панелям и тепловым насосам",
      
      ctaTitle: "Ваша солнечная система на Средиземноморье",
      ctaText: "Хотите и вы достичь энергонезависимости с солнечными панелями и тепловыми насосами?",
      ctaButton: "Бесплатная консультация",

      statsInstallations: "Установок на Средиземноморье",
      statsSavings: "Экономия энергии",
      statsYears: "Лет опыта",
      statsCustomers: "Довольных клиентов",

      locationsTitle: "Наши офисы в Средиземноморском регионе",
      locations: [
        { city: "Аланья", desc: "Где началась наша солнечная история", address: "Şekerhane Mah." },
        { city: "Анталья", desc: "Средиземноморский региональный центр", address: "Центр" },
        { city: "Анкара", desc: "Филиал в столице", address: "Çankaya" },
      ],
    },
    uk: {
      badge: "Наша Історія",
      title: "Сонячні панелі та теплові насоси:",
      titleHighlight: "Німецька якість в Туреччині",
      subtitle: "Сонячні панелі, теплові насоси та енергосистеми для Анталії, Аланії та всього Середземномор'я - з Мюнхена в Анталію",
      
      seoH2Timeline: "089 Bayern Енергія - З Мюнхена на Середземномор'я",
      
      chapter1Title: "Мрія почалася в Мюнхені",
      chapter1Year: "Мюнхен, Баварія - Німеччина",
      chapter1Text: `У серці Баварії, в Мюнхені, Далібор Бакмаз подивився на небо і подумав: "На середземноморському узбережжі Туреччини сонце світить безкоштовно майже 10 місяців на рік. Як я можу привезти сонячні панелі та теплові насоси родинам в Анталії та Аланії?"

Це була не просто бізнес-ідея. Це було бачення - поєднати німецьку інженерію з Баварії з сонячним потенціалом Середземномор'я.`,

      chapter2Title: "Німецько-турецьке партнерство",
      chapter2Year: "Партнерство",
      chapter2Text: `І тоді втрутилася доля. На заводі в Мюнхені він зустрів Мустафу Сакара. Мустафа - турок за народженням, який ніс у серці і Німеччину, і Туреччину.

"Ми можемо зробити це разом" сказав Мустафа. "Ти принесеш німецьку технологію сонячних панелей та теплових насосів, я побудую міст до Туреччини. Родини в Анталії, Аланії, Муглі та Ізмірі заслуговують на доступну, чисту енергію."`,

      chapter3Title: "Перша сонячна установка в Аланії",
      chapter3Year: "Старт на Середземномор'ї",
      chapter3Text: `Тоді в їхнє життя увійшов Ахмет Імрол. Народжений і вирослий в Аланії, він знав кожну вулицю, кожну родину на середземноморському узбережжі.

"Це мій дім" сказав Ахмет. "Ці люди - мої сусіди. Я віддам все, щоб запропонувати їм німецьку якість сонячних панелей та теплових насосів."`,

      chapter4Title: "З Анталії на все Середземномор'я",
      chapter4Year: "Сьогодні",
      chapter4Text: `З Аланії в Анталію, з Анталії в Муглу та Ізмір... У кожному середземноморському місті повторювалася та сама історія.

Сьогодні ми встановлюємо сонячні панелі, теплові насоси та кліматичні системи в Анталії, Аланії та всьому регіоні Середземномор'я з трьома філіями. Але ми не велика компанія. Ми родина.`,

      quote: "Більше немає рахунків за електрику. Нехай Бог благословить вас.",
      quoteAuthor: "Наш перший клієнт, Аланія",

      visionTitle: "Наше Бачення: Енергонезалежність на Середземномор'ї",
      visionText: "В Анталії, Аланії та на всьому середземноморському узбережжі, де сонце світить безкоштовно, жодна родина не повинна залишатися в темряві. Німецька якість, турецький сервіс.",
      
      valuesTitle: "Цінності 089 Bayern",
      value1Title: "Німецька інженерна якість",
      value1Text: "Німецька сонячна технологія з Баварії, турецька гостинність",
      value2Title: "Сімейний сервіс",
      value2Text: "Від Анталії до Аланії - кожен клієнт член родини",
      value3Title: "Слово - Честь",
      value3Text: "Ми тримаємо обіцянки щодо сонячних панелей та теплових насосів",
      
      ctaTitle: "Ваша сонячна система на Середземномор'ї",
      ctaText: "Хочете і ви досягти енергонезалежності з сонячними панелями та тепловими насосами?",
      ctaButton: "Безкоштовна консультація",

      statsInstallations: "Установок на Середземномор'ї",
      statsSavings: "Економія енергії",
      statsYears: "Років досвіду",
      statsCustomers: "Задоволених клієнтів",

      locationsTitle: "Наші офіси в Середземноморському регіоні",
      locations: [
        { city: "Аланія", desc: "Де почалася наша сонячна історія", address: "Şekerhane Mah." },
        { city: "Анталія", desc: "Середземноморський регіональний центр", address: "Центр" },
        { city: "Анкара", desc: "Філія в столиці", address: "Çankaya" },
      ],
    },
    ar: {
      badge: "قصتنا",
      title: "الألواح الشمسية والمضخات الحرارية:",
      titleHighlight: "الجودة الألمانية في تركيا",
      subtitle: "الألواح الشمسية والمضخات الحرارية وأنظمة الطاقة لأنطاليا وألانيا ومنطقة البحر المتوسط بأكملها - من ميونيخ إلى أنطاليا",
      
      seoH2Timeline: "089 Bayern للطاقة - من ميونيخ إلى البحر المتوسط",
      
      chapter1Title: "بدأ الحلم في ميونيخ",
      chapter1Year: "ميونيخ، بافاريا - ألمانيا",
      chapter1Text: `في قلب بافاريا، في ميونيخ، نظر داليبور باكماز إلى السماء وفكر: "على ساحل البحر المتوسط التركي، تشرق الشمس مجاناً لمدة 10 أشهر تقريباً في السنة. كيف يمكنني توصيل الألواح الشمسية والمضخات الحرارية إلى العائلات في أنطاليا وألانيا؟"

لم تكن هذه مجرد فكرة تجارية. كانت رؤية - الجمع بين الهندسة الألمانية من بافاريا مع إمكانات الطاقة الشمسية في البحر المتوسط.`,

      chapter2Title: "الشراكة الألمانية التركية",
      chapter2Year: "الشراكة",
      chapter2Text: `ثم تدخل القدر. في مصنع في ميونيخ، التقى بمصطفى ساكار. مصطفى، تركي الأصل يحمل في قلبه ألمانيا وتركيا معاً.

"يمكننا فعل ذلك معاً" قال مصطفى. "أنت تجلب تقنية الألواح الشمسية والمضخات الحرارية الألمانية، وأنا سأبني الجسر إلى تركيا. العائلات في أنطاليا وألانيا وموغلا وإزمير تستحق طاقة نظيفة وبأسعار معقولة."`,

      chapter3Title: "أول تركيب للطاقة الشمسية في ألانيا",
      chapter3Year: "البداية في البحر المتوسط",
      chapter3Text: `ثم دخل أحمد إمرول حياتهم. ولد ونشأ في ألانيا، يعرف كل شارع، كل عائلة على ساحل البحر المتوسط.

"هذا بيتي" قال أحمد. "هؤلاء الناس جيراني. سأقدم كل شيء لأقدم لهم الجودة الألمانية في الألواح الشمسية والمضخات الحرارية."`,

      chapter4Title: "من أنطاليا إلى كل البحر المتوسط",
      chapter4Year: "اليوم",
      chapter4Text: `من ألانيا إلى أنطاليا، من أنطاليا إلى موغلا وإزمير... في كل مدينة متوسطية تكررت نفس القصة.

اليوم، نقوم بتركيب الألواح الشمسية والمضخات الحرارية وأنظمة التكييف في أنطاليا وألانيا ومنطقة البحر المتوسط بأكملها مع ثلاثة فروع. لكننا لسنا شركة كبيرة. نحن عائلة.`,

      quote: "لا مزيد من فواتير الكهرباء. بارك الله فيكم.",
      quoteAuthor: "أول عميل لنا، ألانيا",

      visionTitle: "رؤيتنا: استقلال الطاقة في البحر المتوسط",
      visionText: "في أنطاليا وألانيا وعلى طول ساحل البحر المتوسط، حيث تشرق الشمس مجاناً، لا يجب أن تبقى أي عائلة في الظلام. الجودة الألمانية، الخدمة التركية.",
      
      valuesTitle: "قيم 089 Bayern",
      value1Title: "جودة الهندسة الألمانية",
      value1Text: "التقنية الشمسية الألمانية من بافاريا، الضيافة التركية",
      value2Title: "خدمة عائلية",
      value2Text: "من أنطاليا إلى ألانيا - كل عميل هو فرد من العائلة",
      value3Title: "الكلمة شرف",
      value3Text: "نحن نفي بوعودنا في الألواح الشمسية والمضخات الحرارية",
      
      ctaTitle: "نظامك الشمسي في البحر المتوسط",
      ctaText: "هل تريد أيضاً تحقيق استقلال الطاقة مع الألواح الشمسية والمضخات الحرارية؟",
      ctaButton: "استشارة مجانية",

      statsInstallations: "تركيب في البحر المتوسط",
      statsSavings: "توفير الطاقة",
      statsYears: "سنوات خبرة",
      statsCustomers: "عملاء سعداء",

      locationsTitle: "مكاتبنا في منطقة البحر المتوسط",
      locations: [
        { city: "ألانيا", desc: "حيث بدأت قصتنا الشمسية", address: "Şekerhane Mah." },
        { city: "أنطاليا", desc: "المركز الإقليمي للبحر المتوسط", address: "المركز" },
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
      <section className="py-8 md:py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30 hidden md:block" />
            
            {/* Chapters */}
            <div className="space-y-6 md:space-y-10">
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
      <section className="py-8 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 mx-auto text-accent/50 mb-6" />
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-4">
            "{t.quote}"
          </blockquote>
          <cite className="text-muted-foreground">— {t.quoteAuthor}</cite>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="heading-vision">
              {t.visionTitle}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t.visionText}
            </p>
          </div>

          {/* Values */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6" data-testid="heading-values">
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
      <section className="py-8 bg-muted/50">
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
      <section className="py-8 md:py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
