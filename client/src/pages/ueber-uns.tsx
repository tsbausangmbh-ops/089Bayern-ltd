import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sun, Users, MapPin, ArrowRight, Sparkles, Building2, Target, Handshake, Shield, Phone, Quote, Award, CheckCircle, Wrench, Clock, ThumbsUp, Zap, Lightbulb, TrendingDown, Home, Leaf, HeartHandshake, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroImage from "@assets/generated_images/modern_villa_with_solar_panels.png";

export default function UeberUns() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();

  const scrollToCalculator = () => {
    setLocation("/#calculator");
  };

  const content = {
    tr: {
      badge: "089 Bayern Hakkında",
      title: "Enerji Sorunlarınızı",
      titleHighlight: "Çözen Ekip",
      subtitle: "Yüksek elektrik faturaları, güvenilmez enerji kaynakları, karmaşık kurulum süreçleri... Tüm bu sorunları anlıyoruz çünkü müşterilerimiz bunları yaşadı. Şimdi sıra sizin rahatlamanızda.",
      ctaButton: "Ücretsiz Keşif Al",

      problemTitle: "Sizin Sorununuzu Anlıyoruz",
      problemSubtitle: "Her gün bunları yaşayan ailelerle konuşuyoruz",
      problem1Title: "Yüksek Elektrik Faturaları",
      problem1Text: "Her ay gelen fatura sizi strese mi sokuyor? Klima, ısıtma, elektrikli cihazlar... Hepsi para. Ama güneş bedava! Akdeniz'de yılda 300 gün güneş var. Bu enerjiyi kullanmamak israf.",
      problem2Title: "Güvenilmez Firmalar",
      problem2Text: "Daha önce kötü deneyim mi yaşadınız? Söz verip tutmayan, kurulum sonrası ortadan kaybolan firmalar... Biz farklıyız. Almanya'dan getirdiğimiz iş ahlakı ile buradayız.",
      problem3Title: "Karmaşık Süreçler",
      problem3Text: "Güneş paneli, ısı pompası, klima... Hangisini seçmeli? Nasıl çalışır? Ne kadar tasarruf sağlar? Kafanız mı karıştı? Biz tüm süreci sizin için basitleştiriyoruz.",

      solutionTitle: "Biz Nasıl Çözüyoruz?",
      solutionSubtitle: "Almanya'dan Akdeniz'e uzanan güvenilir köprü",
      solution1Title: "Alman Kalite Standartları",
      solution1Text: "Münih'ten getirdiğimiz DIN standartları ile çalışıyoruz. Her kurulum, Almanya'da yapılmış gibi titizlikle gerçekleştirilir. 10 yıl garanti - sözümüz, namusumuzdur.",
      solution2Title: "Tek Muhatap, Tam Destek",
      solution2Text: "Kurulum öncesi, sırası ve sonrası - her adımda yanınızdayız. Bir sorun mu var? Tek numara, tek kişi. Sizi tanıyoruz, sorununuzu biliyoruz, hızla çözüyoruz.",
      solution3Title: "Şeffaf Fiyatlandırma",
      solution3Text: "Gizli maliyet yok. Teklif aldığınızda ne ödeyeceğinizi net olarak görürsünüz. Sürpriz fatura yok, ek ücret yok. Güvenin temeli şeffaflıktır.",

      storyTitle: "Hikayemiz: München'den Antalya'ya",
      storyText1: "2018'de Dalibor Bakmaz, München'de gökyüzüne baktı ve düşündü: 'Türkiye'nin Akdeniz kıyısında güneş neredeyse hiç batmıyor. Bu muhteşem enerji kaynağını neden kullanmıyoruz?'",
      storyText2: "Mustafa Sakar ile tanıştığında, ikisi de aynı hayali paylaşıyordu: Alman mühendislik kalitesini Türk ailelere ulaştırmak. Bugün, üç şubemizle Antalya, Alanya ve tüm Akdeniz bölgesine hizmet veriyoruz.",
      storyText3: "Biz büyük bir şirket değiliz. Biz bir aileyiz. Ve sizin ailenizi de bu ailenin parçası yapmak istiyoruz.",

      benefitsTitle: "Sizin İçin Ne Yapıyoruz?",
      benefit1Title: "Faturalarınızı Düşürüyoruz",
      benefit1Text: "Ortalama %70'e varan enerji tasarrufu. İlk yıldan itibaren cebinizde para kalır.",
      benefit2Title: "Evinizi Değerlendiriyoruz",
      benefit2Text: "Güneş paneli kurulu bir ev, emlak piyasasında daha değerli. Yatırımınız geri döner.",
      benefit3Title: "Çevreyi Koruyoruz",
      benefit3Text: "Temiz enerji kullanarak karbon ayak izinizi azaltıyorsunuz. Gelecek nesillere daha yeşil bir dünya.",
      benefit4Title: "Bağımsızlık Sağlıyoruz",
      benefit4Text: "Elektrik kesintilerinden, zam haberlerinden etkilenmezsiniz. Kendi enerjinizi üretin.",

      promiseTitle: "089 Bayern Sözü",
      promiseText: "Size söz veriyoruz: Her kurulumda Alman kalitesi, her iletişimde Türk sıcaklığı. Sorunlarınızı dinler, çözümler üretiriz. Çünkü başarımız, sizin memnuniyetinizle ölçülür.",

      quoteText: "Artık elektrik faturası yok. Yaz-kış evimiz konforlu. Allah sizden razı olsun.",
      quoteAuthor: "Mehmet Bey, Alanya - İlk Müşterimiz",

      ctaTitle: "Enerji Sorunlarınıza Son Verelim",
      ctaText: "Ücretsiz keşif randevusu alın. Evinizi inceleyelim, size özel çözüm sunalım. Hiçbir bağlayıcılık yok - sadece bilgi ve şeffaflık.",
      ctaButton2: "Hemen Arayın",

      statsYears: "Yıl Deneyim",
      statsCustomers: "Mutlu Aile",
      statsSavings: "Tasarruf",
      statsWarranty: "Yıl Garanti",
    },
    de: {
      badge: "Über 089 Bayern",
      title: "Das Team, das Ihre",
      titleHighlight: "Energieprobleme löst",
      subtitle: "Hohe Stromrechnungen, unzuverlässige Energiequellen, komplizierte Installationsprozesse... Wir verstehen all diese Probleme, weil unsere Kunden sie erlebt haben. Jetzt ist es Zeit für Ihre Entspannung.",
      ctaButton: "Kostenlose Beratung",

      problemTitle: "Wir verstehen Ihr Problem",
      problemSubtitle: "Jeden Tag sprechen wir mit Familien, die das erleben",
      problem1Title: "Hohe Stromrechnungen",
      problem1Text: "Stresst Sie die monatliche Rechnung? Klimaanlage, Heizung, elektrische Geräte... Alles kostet Geld. Aber die Sonne ist kostenlos! Am Mittelmeer gibt es 300 Sonnentage im Jahr. Diese Energie nicht zu nutzen ist Verschwendung.",
      problem2Title: "Unzuverlässige Firmen",
      problem2Text: "Haben Sie schlechte Erfahrungen gemacht? Firmen, die Versprechen nicht halten, nach der Installation verschwinden... Wir sind anders. Wir sind hier mit der Arbeitsethik, die wir aus Deutschland mitgebracht haben.",
      problem3Title: "Komplizierte Prozesse",
      problem3Text: "Solarpanel, Wärmepumpe, Klimaanlage... Was soll ich wählen? Wie funktioniert es? Wie viel spare ich? Verwirrt? Wir vereinfachen den gesamten Prozess für Sie.",

      solutionTitle: "Wie lösen wir das?",
      solutionSubtitle: "Die zuverlässige Brücke von Deutschland ans Mittelmeer",
      solution1Title: "Deutsche Qualitätsstandards",
      solution1Text: "Wir arbeiten nach DIN-Standards aus München. Jede Installation wird mit der gleichen Sorgfalt wie in Deutschland durchgeführt. 10 Jahre Garantie - unser Wort ist Ehre.",
      solution2Title: "Ein Ansprechpartner, volle Unterstützung",
      solution2Text: "Vor, während und nach der Installation - wir sind bei jedem Schritt an Ihrer Seite. Ein Problem? Eine Nummer, eine Person. Wir kennen Sie, wir kennen Ihr Problem, wir lösen es schnell.",
      solution3Title: "Transparente Preise",
      solution3Text: "Keine versteckten Kosten. Wenn Sie ein Angebot erhalten, sehen Sie genau, was Sie bezahlen. Keine Überraschungsrechnungen, keine Zusatzgebühren. Vertrauen basiert auf Transparenz.",

      storyTitle: "Unsere Geschichte: Von München nach Antalya",
      storyText1: "2018 blickte Dalibor Bakmaz in München zum Himmel und dachte: 'An der türkischen Mittelmeerküste geht die Sonne fast nie unter. Warum nutzen wir diese großartige Energiequelle nicht?'",
      storyText2: "Als er Mustafa Sakar traf, teilten beide denselben Traum: Deutsche Ingenieursqualität zu türkischen Familien zu bringen. Heute bedienen wir mit drei Niederlassungen Antalya, Alanya und die gesamte Mittelmeerregion.",
      storyText3: "Wir sind kein großes Unternehmen. Wir sind eine Familie. Und wir möchten Ihre Familie zu einem Teil dieser Familie machen.",

      benefitsTitle: "Was tun wir für Sie?",
      benefit1Title: "Wir senken Ihre Rechnungen",
      benefit1Text: "Durchschnittlich bis zu 70% Energieeinsparung. Vom ersten Jahr an bleibt Geld in Ihrer Tasche.",
      benefit2Title: "Wir steigern Ihren Immobilienwert",
      benefit2Text: "Ein Haus mit Solaranlage ist auf dem Immobilienmarkt wertvoller. Ihre Investition zahlt sich aus.",
      benefit3Title: "Wir schützen die Umwelt",
      benefit3Text: "Durch die Nutzung sauberer Energie reduzieren Sie Ihren CO2-Fußabdruck. Eine grünere Welt für kommende Generationen.",
      benefit4Title: "Wir schaffen Unabhängigkeit",
      benefit4Text: "Stromausfälle und Preiserhöhungen betreffen Sie nicht mehr. Produzieren Sie Ihre eigene Energie.",

      promiseTitle: "Das 089 Bayern Versprechen",
      promiseText: "Wir versprechen Ihnen: Bei jeder Installation deutsche Qualität, bei jeder Kommunikation türkische Wärme. Wir hören Ihre Probleme und finden Lösungen. Denn unser Erfolg wird an Ihrer Zufriedenheit gemessen.",

      quoteText: "Keine Stromrechnung mehr. Sommer wie Winter ist unser Zuhause komfortabel. Gott segne euch.",
      quoteAuthor: "Herr Mehmet, Alanya - Unser erster Kunde",

      ctaTitle: "Beenden wir Ihre Energieprobleme",
      ctaText: "Vereinbaren Sie einen kostenlosen Beratungstermin. Wir prüfen Ihr Zuhause und bieten Ihnen eine maßgeschneiderte Lösung. Keine Verpflichtung - nur Information und Transparenz.",
      ctaButton2: "Jetzt anrufen",

      statsYears: "Jahre Erfahrung",
      statsCustomers: "Zufriedene Familien",
      statsSavings: "Ersparnis",
      statsWarranty: "Jahre Garantie",
    },
    en: {
      badge: "About 089 Bayern",
      title: "The Team That Solves",
      titleHighlight: "Your Energy Problems",
      subtitle: "High electricity bills, unreliable energy sources, complicated installation processes... We understand all these problems because our customers have experienced them. Now it's time for your peace of mind.",
      ctaButton: "Free Consultation",

      problemTitle: "We Understand Your Problem",
      problemSubtitle: "Every day we talk to families experiencing this",
      problem1Title: "High Electricity Bills",
      problem1Text: "Does the monthly bill stress you out? Air conditioning, heating, electrical appliances... Everything costs money. But the sun is free! There are 300 sunny days a year in the Mediterranean. Not using this energy is wasteful.",
      problem2Title: "Unreliable Companies",
      problem2Text: "Have you had bad experiences? Companies that don't keep promises, disappear after installation... We're different. We're here with the work ethic we brought from Germany.",
      problem3Title: "Complicated Processes",
      problem3Text: "Solar panel, heat pump, air conditioning... Which one to choose? How does it work? How much will I save? Confused? We simplify the entire process for you.",

      solutionTitle: "How Do We Solve It?",
      solutionSubtitle: "The reliable bridge from Germany to the Mediterranean",
      solution1Title: "German Quality Standards",
      solution1Text: "We work according to DIN standards from Munich. Every installation is carried out with the same care as in Germany. 10-year warranty - our word is our honor.",
      solution2Title: "One Contact, Full Support",
      solution2Text: "Before, during and after installation - we're by your side at every step. A problem? One number, one person. We know you, we know your problem, we solve it quickly.",
      solution3Title: "Transparent Pricing",
      solution3Text: "No hidden costs. When you receive a quote, you see exactly what you'll pay. No surprise bills, no extra fees. Trust is built on transparency.",

      storyTitle: "Our Story: From Munich to Antalya",
      storyText1: "In 2018, Dalibor Bakmaz looked up at the sky in Munich and thought: 'On Turkey's Mediterranean coast, the sun almost never sets. Why aren't we using this amazing energy source?'",
      storyText2: "When he met Mustafa Sakar, they both shared the same dream: bringing German engineering quality to Turkish families. Today, we serve Antalya, Alanya and the entire Mediterranean region with three branches.",
      storyText3: "We're not a big company. We're a family. And we want to make your family part of this family.",

      benefitsTitle: "What Do We Do For You?",
      benefit1Title: "We Lower Your Bills",
      benefit1Text: "Average energy savings of up to 70%. Money stays in your pocket from the first year.",
      benefit2Title: "We Increase Your Property Value",
      benefit2Text: "A house with solar panels is more valuable in the real estate market. Your investment pays off.",
      benefit3Title: "We Protect the Environment",
      benefit3Text: "By using clean energy, you reduce your carbon footprint. A greener world for future generations.",
      benefit4Title: "We Provide Independence",
      benefit4Text: "Power outages and price increases don't affect you anymore. Produce your own energy.",

      promiseTitle: "The 089 Bayern Promise",
      promiseText: "We promise you: German quality in every installation, Turkish warmth in every communication. We listen to your problems and create solutions. Because our success is measured by your satisfaction.",

      quoteText: "No more electricity bills. Summer and winter, our home is comfortable. God bless you.",
      quoteAuthor: "Mr. Mehmet, Alanya - Our First Customer",

      ctaTitle: "Let's End Your Energy Problems",
      ctaText: "Schedule a free consultation. We'll inspect your home and offer you a customized solution. No obligation - just information and transparency.",
      ctaButton2: "Call Now",

      statsYears: "Years Experience",
      statsCustomers: "Happy Families",
      statsSavings: "Savings",
      statsWarranty: "Year Warranty",
    },
    ru: {
      badge: "О компании 089 Bayern",
      title: "Команда, которая решает",
      titleHighlight: "ваши энергетические проблемы",
      subtitle: "Высокие счета за электричество, ненадёжные источники энергии, сложные процессы установки... Мы понимаем все эти проблемы, потому что наши клиенты их пережили. Теперь пришло время вашего спокойствия.",
      ctaButton: "Бесплатная консультация",

      problemTitle: "Мы понимаем вашу проблему",
      problemSubtitle: "Каждый день мы общаемся с семьями, которые это переживают",
      problem1Title: "Высокие счета за электричество",
      problem1Text: "Вас стрессирует ежемесячный счёт? Кондиционер, отопление, электроприборы... Всё стоит денег. Но солнце бесплатно! На Средиземноморье 300 солнечных дней в году. Не использовать эту энергию — расточительство.",
      problem2Title: "Ненадёжные компании",
      problem2Text: "У вас был плохой опыт? Компании, которые не держат обещания, исчезают после установки... Мы другие. Мы здесь с рабочей этикой, которую привезли из Германии.",
      problem3Title: "Сложные процессы",
      problem3Text: "Солнечная панель, тепловой насос, кондиционер... Что выбрать? Как это работает? Сколько я сэкономлю? Запутались? Мы упрощаем весь процесс для вас.",

      solutionTitle: "Как мы решаем это?",
      solutionSubtitle: "Надёжный мост из Германии на Средиземноморье",
      solution1Title: "Немецкие стандарты качества",
      solution1Text: "Мы работаем по стандартам DIN из Мюнхена. Каждая установка выполняется с той же тщательностью, что и в Германии. 10-летняя гарантия — наше слово — наша честь.",
      solution2Title: "Один контакт, полная поддержка",
      solution2Text: "До, во время и после установки — мы рядом на каждом шагу. Проблема? Один номер, один человек. Мы знаем вас, знаем вашу проблему, решаем быстро.",
      solution3Title: "Прозрачные цены",
      solution3Text: "Никаких скрытых расходов. Когда вы получаете предложение, вы видите точно, что заплатите. Никаких неожиданных счетов, никаких дополнительных сборов. Доверие строится на прозрачности.",

      storyTitle: "Наша история: Из Мюнхена в Анталию",
      storyText1: "В 2018 году Далибор Бакмаз посмотрел на небо в Мюнхене и подумал: 'На средиземноморском побережье Турции солнце почти никогда не заходит. Почему мы не используем этот удивительный источник энергии?'",
      storyText2: "Когда он встретил Мустафу Сакара, они оба разделяли одну мечту: принести немецкое инженерное качество турецким семьям. Сегодня мы обслуживаем Анталию, Аланью и весь Средиземноморский регион тремя филиалами.",
      storyText3: "Мы не большая компания. Мы семья. И мы хотим сделать вашу семью частью этой семьи.",

      benefitsTitle: "Что мы делаем для вас?",
      benefit1Title: "Снижаем ваши счета",
      benefit1Text: "Средняя экономия энергии до 70%. Деньги остаются в вашем кармане с первого года.",
      benefit2Title: "Повышаем стоимость недвижимости",
      benefit2Text: "Дом с солнечными панелями более ценен на рынке недвижимости. Ваши инвестиции окупаются.",
      benefit3Title: "Защищаем окружающую среду",
      benefit3Text: "Используя чистую энергию, вы уменьшаете углеродный след. Более зелёный мир для будущих поколений.",
      benefit4Title: "Обеспечиваем независимость",
      benefit4Text: "Отключения электричества и повышение цен вас больше не касаются. Производите собственную энергию.",

      promiseTitle: "Обещание 089 Bayern",
      promiseText: "Мы обещаем вам: немецкое качество в каждой установке, турецкое тепло в каждом общении. Мы слушаем ваши проблемы и создаём решения. Потому что наш успех измеряется вашей удовлетворённостью.",

      quoteText: "Больше нет счетов за электричество. Летом и зимой в нашем доме комфортно. Да благословит вас Бог.",
      quoteAuthor: "Господин Мехмет, Аланья - Наш первый клиент",

      ctaTitle: "Давайте решим ваши энергетические проблемы",
      ctaText: "Запишитесь на бесплатную консультацию. Мы осмотрим ваш дом и предложим индивидуальное решение. Никаких обязательств — только информация и прозрачность.",
      ctaButton2: "Позвоните сейчас",

      statsYears: "Лет опыта",
      statsCustomers: "Счастливых семей",
      statsSavings: "Экономии",
      statsWarranty: "Лет гарантии",
    },
    uk: {
      badge: "Про компанію 089 Bayern",
      title: "Команда, яка вирішує",
      titleHighlight: "ваші енергетичні проблеми",
      subtitle: "Високі рахунки за електрику, ненадійні джерела енергії, складні процеси встановлення... Ми розуміємо всі ці проблеми, тому що наші клієнти їх пережили. Тепер час для вашого спокою.",
      ctaButton: "Безкоштовна консультація",

      problemTitle: "Ми розуміємо вашу проблему",
      problemSubtitle: "Щодня ми спілкуємося з родинами, які це переживають",
      problem1Title: "Високі рахунки за електрику",
      problem1Text: "Вас стресує щомісячний рахунок? Кондиціонер, опалення, електроприлади... Все коштує грошей. Але сонце безкоштовне! На Середземномор'ї 300 сонячних днів на рік. Не використовувати цю енергію — марнотратство.",
      problem2Title: "Ненадійні компанії",
      problem2Text: "У вас був поганий досвід? Компанії, які не тримають обіцянок, зникають після встановлення... Ми інші. Ми тут з робочою етикою, яку привезли з Німеччини.",
      problem3Title: "Складні процеси",
      problem3Text: "Сонячна панель, тепловий насос, кондиціонер... Що обрати? Як це працює? Скільки я заощаджу? Заплуталися? Ми спрощуємо весь процес для вас.",

      solutionTitle: "Як ми це вирішуємо?",
      solutionSubtitle: "Надійний міст з Німеччини на Середземномор'я",
      solution1Title: "Німецькі стандарти якості",
      solution1Text: "Ми працюємо за стандартами DIN з Мюнхена. Кожне встановлення виконується з такою ж ретельністю, як у Німеччині. 10-річна гарантія — наше слово — наша честь.",
      solution2Title: "Один контакт, повна підтримка",
      solution2Text: "До, під час і після встановлення — ми поруч на кожному кроці. Проблема? Один номер, одна людина. Ми знаємо вас, знаємо вашу проблему, вирішуємо швидко.",
      solution3Title: "Прозорі ціни",
      solution3Text: "Жодних прихованих витрат. Коли ви отримуєте пропозицію, ви бачите точно, що заплатите. Жодних несподіваних рахунків, жодних додаткових зборів. Довіра будується на прозорості.",

      storyTitle: "Наша історія: З Мюнхена в Анталію",
      storyText1: "У 2018 році Далібор Бакмаз подивився на небо в Мюнхені і подумав: 'На середземноморському узбережжі Туреччини сонце майже ніколи не заходить. Чому ми не використовуємо це дивовижне джерело енергії?'",
      storyText2: "Коли він зустрів Мустафу Сакара, вони обидва поділяли одну мрію: принести німецьку інженерну якість турецьким родинам. Сьогодні ми обслуговуємо Анталію, Аланію та весь Середземноморський регіон трьома філіями.",
      storyText3: "Ми не велика компанія. Ми родина. І ми хочемо зробити вашу родину частиною цієї родини.",

      benefitsTitle: "Що ми робимо для вас?",
      benefit1Title: "Знижуємо ваші рахунки",
      benefit1Text: "Середня економія енергії до 70%. Гроші залишаються у вашій кишені з першого року.",
      benefit2Title: "Підвищуємо вартість нерухомості",
      benefit2Text: "Будинок із сонячними панелями більш цінний на ринку нерухомості. Ваші інвестиції окупаються.",
      benefit3Title: "Захищаємо довкілля",
      benefit3Text: "Використовуючи чисту енергію, ви зменшуєте вуглецевий слід. Зеленіший світ для майбутніх поколінь.",
      benefit4Title: "Забезпечуємо незалежність",
      benefit4Text: "Відключення електрики та підвищення цін вас більше не стосуються. Виробляйте власну енергію.",

      promiseTitle: "Обіцянка 089 Bayern",
      promiseText: "Ми обіцяємо вам: німецьку якість у кожному встановленні, турецьке тепло у кожному спілкуванні. Ми слухаємо ваші проблеми і створюємо рішення. Тому що наш успіх вимірюється вашою задоволеністю.",

      quoteText: "Більше немає рахунків за електрику. Влітку і взимку в нашому домі комфортно. Нехай Бог благословить вас.",
      quoteAuthor: "Пан Мехмет, Аланія - Наш перший клієнт",

      ctaTitle: "Давайте вирішимо ваші енергетичні проблеми",
      ctaText: "Запишіться на безкоштовну консультацію. Ми оглянемо ваш дім і запропонуємо індивідуальне рішення. Жодних зобов'язань — лише інформація та прозорість.",
      ctaButton2: "Зателефонуйте зараз",

      statsYears: "Років досвіду",
      statsCustomers: "Щасливих родин",
      statsSavings: "Економії",
      statsWarranty: "Років гарантії",
    },
    ar: {
      badge: "عن 089 Bayern",
      title: "الفريق الذي يحل",
      titleHighlight: "مشاكل الطاقة الخاصة بك",
      subtitle: "فواتير الكهرباء المرتفعة، مصادر الطاقة غير الموثوقة، عمليات التركيب المعقدة... نحن نفهم كل هذه المشاكل لأن عملاءنا عاشوها. الآن حان وقت راحة بالك.",
      ctaButton: "استشارة مجانية",

      problemTitle: "نحن نفهم مشكلتك",
      problemSubtitle: "كل يوم نتحدث مع عائلات تعاني من هذا",
      problem1Title: "فواتير الكهرباء المرتفعة",
      problem1Text: "هل تقلقك الفاتورة الشهرية؟ التكييف، التدفئة، الأجهزة الكهربائية... كل شيء يكلف مالاً. لكن الشمس مجانية! هناك 300 يوم مشمس في السنة على البحر المتوسط. عدم استخدام هذه الطاقة هدر.",
      problem2Title: "شركات غير موثوقة",
      problem2Text: "هل مررت بتجارب سيئة؟ شركات لا تفي بوعودها، تختفي بعد التركيب... نحن مختلفون. نحن هنا بأخلاقيات العمل التي جلبناها من ألمانيا.",
      problem3Title: "عمليات معقدة",
      problem3Text: "لوحة شمسية، مضخة حرارية، تكييف... أيها أختار؟ كيف يعمل؟ كم سأوفر؟ مرتبك؟ نحن نبسط العملية بأكملها لك.",

      solutionTitle: "كيف نحل ذلك؟",
      solutionSubtitle: "الجسر الموثوق من ألمانيا إلى البحر المتوسط",
      solution1Title: "معايير الجودة الألمانية",
      solution1Text: "نعمل وفقاً لمعايير DIN من ميونيخ. كل تركيب يتم بنفس العناية كما في ألمانيا. ضمان 10 سنوات - كلمتنا شرفنا.",
      solution2Title: "جهة اتصال واحدة، دعم كامل",
      solution2Text: "قبل وأثناء وبعد التركيب - نحن بجانبك في كل خطوة. مشكلة؟ رقم واحد، شخص واحد. نعرفك، نعرف مشكلتك، نحلها بسرعة.",
      solution3Title: "أسعار شفافة",
      solution3Text: "لا تكاليف خفية. عندما تتلقى عرضاً، ترى بالضبط ما ستدفع. لا فواتير مفاجئة، لا رسوم إضافية. الثقة مبنية على الشفافية.",

      storyTitle: "قصتنا: من ميونيخ إلى أنطاليا",
      storyText1: "في عام 2018، نظر داليبور باكماز إلى السماء في ميونيخ وفكر: 'على ساحل البحر المتوسط التركي، لا تغرب الشمس تقريباً أبداً. لماذا لا نستخدم مصدر الطاقة المذهل هذا؟'",
      storyText2: "عندما التقى بمصطفى ساكار، كانا يتشاركان نفس الحلم: جلب الجودة الهندسية الألمانية للعائلات التركية. اليوم، نخدم أنطاليا وألانيا ومنطقة البحر المتوسط بأكملها بثلاثة فروع.",
      storyText3: "نحن لسنا شركة كبيرة. نحن عائلة. ونريد أن نجعل عائلتك جزءاً من هذه العائلة.",

      benefitsTitle: "ماذا نفعل لك؟",
      benefit1Title: "نخفض فواتيرك",
      benefit1Text: "متوسط توفير الطاقة يصل إلى 70%. المال يبقى في جيبك من السنة الأولى.",
      benefit2Title: "نزيد قيمة عقارك",
      benefit2Text: "المنزل المزود بالألواح الشمسية أكثر قيمة في سوق العقارات. استثمارك يؤتي ثماره.",
      benefit3Title: "نحمي البيئة",
      benefit3Text: "باستخدام الطاقة النظيفة، تقلل بصمتك الكربونية. عالم أكثر خضرة للأجيال القادمة.",
      benefit4Title: "نوفر الاستقلالية",
      benefit4Text: "انقطاع الكهرباء وزيادة الأسعار لم تعد تؤثر عليك. أنتج طاقتك الخاصة.",

      promiseTitle: "وعد 089 Bayern",
      promiseText: "نعدك: الجودة الألمانية في كل تركيب، الدفء التركي في كل تواصل. نستمع لمشاكلك ونخلق حلولاً. لأن نجاحنا يُقاس برضاك.",

      quoteText: "لا مزيد من فواتير الكهرباء. صيفاً وشتاءً، منزلنا مريح. بارك الله فيكم.",
      quoteAuthor: "السيد محمد، ألانيا - أول عميل لنا",

      ctaTitle: "لننهِ مشاكل الطاقة الخاصة بك",
      ctaText: "احجز استشارة مجانية. سنفحص منزلك ونقدم لك حلاً مخصصاً. لا التزام - فقط معلومات وشفافية.",
      ctaButton2: "اتصل الآن",

      statsYears: "سنوات خبرة",
      statsCustomers: "عائلة سعيدة",
      statsSavings: "توفير",
      statsWarranty: "سنوات ضمان",
    },
  };

  const c = content[language as keyof typeof content] || content.de;
  const isRtl = language === "ar";

  const problems = [
    { icon: TrendingDown, title: c.problem1Title, text: c.problem1Text, color: "from-red-500 to-orange-600" },
    { icon: Shield, title: c.problem2Title, text: c.problem2Text, color: "from-amber-500 to-yellow-600" },
    { icon: Wrench, title: c.problem3Title, text: c.problem3Text, color: "from-blue-500 to-indigo-600" },
  ];

  const solutions = [
    { icon: Award, title: c.solution1Title, text: c.solution1Text },
    { icon: HeartHandshake, title: c.solution2Title, text: c.solution2Text },
    { icon: BadgeCheck, title: c.solution3Title, text: c.solution3Text },
  ];

  const benefits = [
    { icon: TrendingDown, title: c.benefit1Title, text: c.benefit1Text },
    { icon: Home, title: c.benefit2Title, text: c.benefit2Text },
    { icon: Leaf, title: c.benefit3Title, text: c.benefit3Text },
    { icon: Zap, title: c.benefit4Title, text: c.benefit4Text },
  ];

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : ""}`} dir={isRtl ? "rtl" : "ltr"} data-testid="page-ueber-uns">
      <SEOHead page="ueber-uns" />
      <Header onCtaClick={scrollToCalculator} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 overflow-hidden" data-testid="section-about-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <Sparkles className="w-4 h-4 mr-2" />
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
                data-testid="button-about-cta"
              >
                {c.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8" 
                onClick={() => window.location.href = "tel:+905071832036"}
                data-testid="button-about-phone"
              >
                <Phone className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
                +90 507 183 2036
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-muted/50" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">{c.statsYears}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">{c.statsCustomers}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">70%</div>
              <div className="text-sm text-muted-foreground">{c.statsSavings}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">10</div>
              <div className="text-sm text-muted-foreground">{c.statsWarranty}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-background" data-testid="section-problems">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.problemTitle}</h2>
            <p className="text-lg text-muted-foreground">{c.problemSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="border-border/50" data-testid={`card-problem-${index}`}>
                <CardContent className="p-6">
                  <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center`}>
                    <problem.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-muted/30" data-testid="section-solutions">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Lightbulb className="w-4 h-4 mr-2" />
              {c.solutionSubtitle}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{c.solutionTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-border/50" data-testid={`card-solution-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background" data-testid="section-story">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              089 Bayern
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{c.storyTitle}</h2>
          </div>
          
          <Card className="border-border/50">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{c.storyText1}</p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{c.storyText2}</p>
              <p className="text-lg text-foreground font-medium leading-relaxed">{c.storyText3}</p>
            </CardContent>
          </Card>

          {/* Quote */}
          <div className="mt-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <Quote className="w-10 h-10 text-accent mb-4" />
            <p className="text-xl text-foreground italic mb-4">"{c.quoteText}"</p>
            <p className="text-muted-foreground font-medium">— {c.quoteAuthor}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30" data-testid="section-benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{c.benefitsTitle}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-border/50" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16 bg-background" data-testid="section-promise">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.promiseTitle}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">{c.promiseText}</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" data-testid="section-final-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.ctaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{c.ctaText}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg px-8"
              data-testid="button-about-cta-bottom"
            >
              {c.ctaButton}
              <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 bg-white/50 backdrop-blur-sm px-8" 
              onClick={() => window.location.href = "tel:+905071832036"}
              data-testid="button-about-phone-bottom"
            >
              <Phone className={`w-5 h-5 ${isRtl ? "ml-2" : "mr-2"}`} />
              {c.ctaButton2}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
