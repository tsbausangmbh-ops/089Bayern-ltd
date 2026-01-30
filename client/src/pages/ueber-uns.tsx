import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sun, Users, MapPin, ArrowRight, Sparkles, Building2, Target, Handshake, Shield, Phone, Quote, Award, CheckCircle, Wrench, Clock, ThumbsUp, Zap, Lightbulb, TrendingDown, Home, Leaf, HeartHandshake, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CrossLinks from "@/components/CrossLinks";
import TrustCallToAction from "@/components/TrustCallToAction";
import TeamSection from "@/components/TeamSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import heroImage from "@assets/images/optimized/hero-about.jpg";
import teamMeetingImage from "@assets/images/optimized/team-meeting.jpg";

export default function UeberUns() {
  const { language } = useLanguage();
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const goToContact = () => {
    setIsLeadFormOpen(true);
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
      storyText1: "Biz bunu bizzat yaşadık: Her ay elektrik faturası geldiğinde şok olan aileler. 'Bunu nasıl ödeyeceğiz?' diye düşünenler. Fiyatlar yükselirken çaresiz hissedenler. Bu bizi rahat bırakmadı. Dalibor Bakmaz - soyadı Osmanlı İmparatorluğu'ndan geliyor - her zaman Türkiye'ye derin bir bağ hissetti. Vizyonu açıktı: Bu insanların bu yükten kurtulmasına yardım etmek.",
      storyText2: "2018'de Dalibor, Ankaralı Mustafa Sakar ile tanıştı. Mustafa bu sorunu yakından biliyordu - ailelerin patlayan enerji maliyetleri altında nasıl ezildiğini görmüştü. Güçlü iş ilişkileri ve yerel bilgisiyle eksik parçaydı. Birlikte karar verdiler: 089 Bayern'i kurmak ve Alman mühendisliğini Türk misafirperverliğiyle birleştirmek - aileleri elektrik faturası korkusundan kurtarmak için.",
      storyText3: "Bugün misyonumuz için yanıyoruz. Bir müşterimiz elektrik faturasının %70 düştüğünü söylediğinde biliyoruz: İşte bunun için yapıyoruz. Bir şirketten fazlasıyız - rahat nefes almalarına yardım eden bir aileyiz. Dalibor'un Almanya'dan getirdiği kalite standartları ve Mustafa'nın Türkiye'deki özel bağlantıları sayesinde size söz veriyoruz: Siz de bu yükten kurtulana kadar durmayacağız.",

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
      storyText1: "Wir haben es selbst erlebt: Familien, die jeden Monat vor ihrer Stromrechnung erschrecken. Die sich fragen, wie sie das noch bezahlen sollen. Die sich hilflos fühlen, während die Preise immer weiter steigen. Das hat uns keine Ruhe gelassen. Dalibor Bakmaz - dessen Name aus dem Osmanischen Reich stammt - fühlte schon immer eine tiefe Verbindung zur Türkei. Seine Vision war klar: Diesen Menschen helfen, endlich frei von dieser Last zu werden.",
      storyText2: "2018 traf Dalibor Mustafa Sakar aus Ankara. Mustafa kannte das Problem aus erster Hand - er hatte gesehen, wie Familien unter den explodierenden Energiekosten litten. Mit seinen starken Geschäftsbeziehungen und seinem lokalen Wissen war er das fehlende Puzzlestück. Gemeinsam beschlossen sie: 089 Bayern gründen und deutsche Ingenieurskunst mit türkischer Gastfreundschaft vereinen - um Familien von der Strompreis-Angst zu befreien.",
      storyText3: "Heute brennen wir für unsere Mission. Jedes Mal, wenn ein Kunde uns erzählt, dass seine Stromrechnung um 70% gesunken ist, wissen wir: Dafür machen wir das. Wir sind mehr als ein Unternehmen - wir sind eine Familie, die Familien hilft, wieder durchzuatmen. Dank Dalibors Qualitätsstandards aus Deutschland und Mustafas besonderen Verbindungen in der Türkei können wir Ihnen versprechen: Wir werden nicht ruhen, bis auch Sie diese Last loswerden.",

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
      storyText1: "We've seen it ourselves: Families shocked every month when their electricity bill arrives. Asking themselves how they'll pay for it. Feeling helpless as prices keep climbing. This gave us no peace. Dalibor Bakmaz - whose name originates from the Ottoman Empire - always felt a deep connection to Turkey. His vision was clear: Help these people finally break free from this burden.",
      storyText2: "In 2018, Dalibor met Mustafa Sakar from Ankara. Mustafa knew the problem firsthand - he had seen families crushed by exploding energy costs. With his strong business relationships and local knowledge, he was the missing piece. Together they decided: to found 089 Bayern and unite German engineering with Turkish hospitality - to free families from the fear of electricity bills.",
      storyText3: "Today we burn for our mission. Every time a customer tells us their electricity bill dropped by 70%, we know: This is why we do it. We're more than a company - we're a family helping families breathe again. Thanks to Dalibor's quality standards from Germany and Mustafa's special connections in Turkey, we promise you: We won't rest until you're free from this burden too.",

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
      storyText1: "Мы видели это сами: Семьи, которые каждый месяц в шоке от счёта за электричество. Которые спрашивают себя, как это оплатить. Которые чувствуют беспомощность, пока цены растут. Это не давало нам покоя. Далибор Бакмаз - чья фамилия происходит из Османской империи - всегда чувствовал глубокую связь с Турцией. Его видение было ясным: Помочь этим людям наконец освободиться от этого бремени.",
      storyText2: "В 2018 году Далибор встретил Мустафу Сакара из Анкары. Мустафа знал проблему из первых рук - он видел, как семьи страдают от взлетающих расходов на энергию. С его сильными деловыми связями и местными знаниями он стал недостающим элементом. Вместе они решили: основать 089 Bayern и объединить немецкую инженерию с турецким гостеприимством - чтобы освободить семьи от страха перед счетами за электричество.",
      storyText3: "Сегодня мы горим нашей миссией. Каждый раз, когда клиент говорит, что его счёт за электричество упал на 70%, мы знаем: Вот для чего мы это делаем. Мы больше, чем компания - мы семья, которая помогает семьям снова дышать свободно. Благодаря стандартам качества Далибора из Германии и особым связям Мустафы в Турции, мы обещаем вам: Мы не остановимся, пока вы тоже не освободитесь от этого бремени.",

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
      storyText1: "Ми бачили це самі: Родини, які щомісяця в шоці від рахунку за електрику. Які питають себе, як це оплатити. Які відчувають безпорадність, поки ціни ростуть. Це не давало нам спокою. Далібор Бакмаз - чиє прізвище походить з Османської імперії - завжди відчував глибокий зв'язок з Туреччиною. Його бачення було ясним: Допомогти цим людям нарешті звільнитися від цього тягаря.",
      storyText2: "У 2018 році Далібор зустрів Мустафу Сакара з Анкари. Мустафа знав проблему з перших рук - він бачив, як родини страждають від вибухових витрат на енергію. З його сильними діловими зв'язками та місцевими знаннями він став недостаючим елементом. Разом вони вирішили: заснувати 089 Bayern та об'єднати німецьку інженерію з турецькою гостинністю - щоб звільнити родини від страху перед рахунками за електрику.",
      storyText3: "Сьогодні ми горимо нашою місією. Кожного разу, коли клієнт каже, що його рахунок за електрику впав на 70%, ми знаємо: Ось для чого ми це робимо. Ми більше, ніж компанія - ми родина, яка допомагає родинам знову вільно дихати. Завдяки стандартам якості Далібора з Німеччини та особливим зв'язкам Мустафи в Туреччині, ми обіцяємо вам: Ми не зупинимося, поки ви теж не звільнитеся від цього тягаря.",

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
      storyText1: "رأينا ذلك بأنفسنا: عائلات مصدومة كل شهر عند وصول فاتورة الكهرباء. يسألون أنفسهم كيف سيدفعون. يشعرون بالعجز بينما الأسعار ترتفع. هذا لم يمنحنا الراحة. داليبور باكماز - الذي يعود اسمه إلى الإمبراطورية العثمانية - شعر دائماً بارتباط عميق بتركيا. رؤيته كانت واضحة: مساعدة هؤلاء الناس للتحرر أخيراً من هذا العبء.",
      storyText2: "في عام 2018، التقى داليبور بمصطفى صقر من أنقرة. مصطفى عرف المشكلة عن كثب - رأى كيف تعاني العائلات من تكاليف الطاقة المتفجرة. بعلاقاته التجارية القوية ومعرفته المحلية، كان القطعة المفقودة. معاً قرروا: تأسيس 089 Bayern ودمج الهندسة الألمانية مع الضيافة التركية - لتحرير العائلات من خوف فواتير الكهرباء.",
      storyText3: "اليوم نحترق من أجل مهمتنا. في كل مرة يخبرنا عميل أن فاتورة الكهرباء انخفضت بنسبة 70%، نعرف: لهذا نفعل ذلك. نحن أكثر من شركة - نحن عائلة تساعد العائلات على التنفس مرة أخرى. بفضل معايير الجودة من داليبور من ألمانيا وعلاقات مصطفى الخاصة في تركيا، نعدكم: لن نتوقف حتى تتحرروا أيضاً من هذا العبء.",

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
    hr: {
      badge: "O tvrtki 089 Bayern",
      title: "Tim koji rješava",
      titleHighlight: "vaše energetske probleme",
      subtitle: "Visoki računi za struju, nepouzdani izvori energije, komplicirani procesi instalacije... Razumijemo sve te probleme jer su ih naši klijenti doživjeli. Sada je vrijeme za vaš mir.",
      ctaButton: "Besplatna konzultacija",

      problemTitle: "Razumijemo vaš problem",
      problemSubtitle: "Svaki dan razgovaramo s obiteljima koje to proživljavaju",
      problem1Title: "Visoki računi za struju",
      problem1Text: "Stresira vas mjesečni račun? Klima, grijanje, električni uređaji... Sve košta. Ali sunce je besplatno! Na Mediteranu ima 300 sunčanih dana godišnje. Ne koristiti tu energiju je rasipanje.",
      problem2Title: "Nepouzdane tvrtke",
      problem2Text: "Imali ste loša iskustva? Tvrtke koje ne drže obećanja, nestaju nakon instalacije... Mi smo drugačiji. Ovdje smo s radnom etikom koju smo donijeli iz Njemačke.",
      problem3Title: "Komplicirani procesi",
      problem3Text: "Solarni panel, toplinska pumpa, klima... Što odabrati? Kako funkcionira? Koliko ću uštedjeti? Zbunjeni? Mi pojednostavljujemo cijeli proces za vas.",

      solutionTitle: "Kako to rješavamo?",
      solutionSubtitle: "Pouzdani most od Njemačke do Mediterana",
      solution1Title: "Njemački standardi kvalitete",
      solution1Text: "Radimo prema DIN standardima iz Münchena. Svaka instalacija se provodi s istom pažnjom kao u Njemačkoj. 10 godina jamstva - naša riječ je naša čast.",
      solution2Title: "Jedan kontakt, puna podrška",
      solution2Text: "Prije, tijekom i nakon instalacije - uz vas smo na svakom koraku. Problem? Jedan broj, jedna osoba. Poznajemo vas, poznajemo vaš problem, brzo ga rješavamo.",
      solution3Title: "Transparentne cijene",
      solution3Text: "Nema skrivenih troškova. Kada dobijete ponudu, vidite točno što ćete platiti. Nema iznenađujućih računa, nema dodatnih naknada. Povjerenje se gradi na transparentnosti.",

      storyTitle: "Naša priča: Od Münchena do Antalije",
      storyText1: "Vidjeli smo to sami: Obitelji šokirane svakog mjeseca kada stigne račun za struju. Pitaju se kako će to platiti. Osjećaju se bespomoćno dok cijene rastu. To nam nije dalo mira. Dalibor Bakmaz - čije ime potječe iz Osmanskog Carstva - oduvijek je osjećao duboku povezanost s Turskom. Njegova vizija bila je jasna: Pomoći tim ljudima da se konačno oslobode tog tereta.",
      storyText2: "2018. godine Dalibor je upoznao Mustafu Sakara iz Ankare. Mustafa je problem poznavao iz prve ruke - vidio je kako obitelji pate od eksplodirajućih troškova energije. Sa svojim jakim poslovnim vezama i lokalnim znanjem, bio je dio koji je nedostajao. Zajedno su odlučili: osnovati 089 Bayern i ujediniti njemačko inženjerstvo s turskim gostoprimstvom - da oslobode obitelji od straha od računa za struju.",
      storyText3: "Danas gorimo za našu misiju. Svaki put kada nam klijent kaže da mu je račun za struju pao za 70%, znamo: Zato to radimo. Mi smo više od tvrtke - mi smo obitelj koja pomaže obiteljima da opet slobodno dišu. Zahvaljujući Daliborovim standardima kvalitete iz Njemačke i Mustafinim posebnim vezama u Turskoj, obećavamo vam: Nećemo stati dok se i vi ne oslobodite tog tereta.",

      benefitsTitle: "Što radimo za vas?",
      benefit1Title: "Smanjujemo vaše račune",
      benefit1Text: "Prosječna ušteda energije do 70%. Novac ostaje u vašem džepu od prve godine.",
      benefit2Title: "Povećavamo vrijednost nekretnine",
      benefit2Text: "Kuća sa solarnim panelima vrjednija je na tržištu nekretnina. Vaša investicija se isplati.",
      benefit3Title: "Štitimo okoliš",
      benefit3Text: "Korištenjem čiste energije smanjujete ugljični otisak. Zeleniji svijet za buduće generacije.",
      benefit4Title: "Osiguravamo neovisnost",
      benefit4Text: "Nestanci struje i povećanja cijena vas više ne pogađaju. Proizvodite vlastitu energiju.",

      promiseTitle: "Obećanje 089 Bayern",
      promiseText: "Obećavamo vam: njemačku kvalitetu u svakoj instalaciji, tursku toplinu u svakoj komunikaciji. Slušamo vaše probleme i stvaramo rješenja. Jer naš uspjeh se mjeri vašim zadovoljstvom.",

      quoteText: "Više nema računa za struju. Ljeti i zimi, naš dom je udoban. Bog vas blagoslovio.",
      quoteAuthor: "Gospodin Mehmet, Alanya - Naš prvi klijent",

      ctaTitle: "Riješimo vaše energetske probleme",
      ctaText: "Zakažite besplatnu konzultaciju. Pregledamo vaš dom i ponudimo vam prilagođeno rješenje. Bez obveza - samo informacije i transparentnost.",
      ctaButton2: "Nazovite sada",

      statsYears: "Godina iskustva",
      statsCustomers: "Sretnih obitelji",
      statsSavings: "Uštede",
      statsWarranty: "Godina jamstva",
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
      <Header onCtaClick={goToContact} />
      
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
            
            <div className="flex flex-col gap-3 items-center">
              <Button 
                onClick={goToContact}
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 border-0 shadow-lg px-8"
                data-testid="button-about-cta"
              >
                {c.ctaButton}
                <ArrowRight className={`w-5 h-5 ${isRtl ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
              <div className="flex flex-row gap-2 flex-wrap justify-center">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-red-400/50 text-white bg-red-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "tel:+905071832036"}
                  data-testid="button-about-phone-tr"
                >
                  <Phone className={`w-3 h-3 ${isRtl ? "ml-1" : "mr-1"}`} />
                  TR +90 507 183 2036
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-amber-400/50 text-white bg-black/30 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "tel:+491735994699"}
                  data-testid="button-about-phone-de"
                >
                  <Phone className={`w-3 h-3 ${isRtl ? "ml-1" : "mr-1"}`} />
                  DE +49 173 5994699
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-green-400/50 text-white bg-green-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.open("https://wa.me/491735994699", "_blank")}
                  data-testid="button-about-whatsapp"
                >
                  WhatsApp
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-blue-400/50 text-white bg-blue-500/20 backdrop-blur-sm text-xs px-3" 
                  onClick={() => window.location.href = "mailto:info@089bayern.com"}
                  data-testid="button-about-email"
                >
                  Email
                </Button>
              </div>
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

      {/* Team Gallery */}
      <section className="py-8 md:py-10 bg-background" data-testid="section-work-gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl mx-auto max-w-4xl w-full">
              <img 
                src={teamMeetingImage} 
                alt="089 Bayern profesyonel ekip" 
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                data-testid="img-team-meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-8 bg-background" data-testid="section-problems">
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
      <section className="py-8 bg-muted/30" data-testid="section-solutions">
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
      <section className="py-8 bg-background" data-testid="section-story">
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
      <section className="py-8 bg-muted/30" data-testid="section-benefits">
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
      <section className="py-8 bg-background" data-testid="section-promise">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.promiseTitle}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">{c.promiseText}</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" data-testid="section-final-cta">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.ctaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{c.ctaText}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={goToContact}
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

      <TeamSection />
      <CrossLinks currentPage="ueber-uns" />
      <Footer />
      <LeadCaptureForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        initialLanguage={language}
      />
    </div>
  );
}
