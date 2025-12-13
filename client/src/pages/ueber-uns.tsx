import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sun, Users, MapPin, ArrowRight, Sparkles, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      chapter1Text: `Almanya'nın kalbinde, Münih'te, Dalibor Bakmaz bir gece gökyüzüne baktı ve düşündü: "Türkiye'de neredeyse 10 ay boyunca güneş bedava ışık saçıyor. Bu muhteşem enerji kaynağını insanlara nasıl ulaştırabilirim?"

Bu sadece bir iş fikri değildi. Bu, bir vizyondu. Yıllar boyunca Almanya'nın soğuk kışlarında çalışırken, aklı hep güneşin sıcaklığındaydı. Akdeniz'in o altın sarısı ışıkları, çocukların gülen yüzleri, ailelerin terasta geçirdiği akşamlar...

Ama gerçek soru şuydu: Nasıl? Türkiye'yi tanımıyordu. Dili bilmiyordu. Sadece kalbinde yanan bir ateş vardı.`,

      chapter2Title: "Kader İki Yolu Birleştirdi",
      chapter2Text: `Ve sonra, kader devreye girdi. Münih'in bir fabrikasında, Mustafa Sakar ile tanıştı. Mustafa, doğma büyüme Türk, hem Almanya'yı hem Türkiye'yi yüreğinde taşıyan biri.

İlk konuşmalarında, Dalibor gözleri parlayarak anlattı hayalini. Mustafa dinledi. Ve o an, ikisi de aynı şeyi hissetti: Bu yapılmalıydı.

"Birlikte yapabiliriz" dedi Mustafa. "Sen mühendislik bilgini, ben köprü olayım. Türkiye'deki aileler ucuz enerji hak ediyor."

O gece, iki adam el sıkıştı. Sıfırdan başlayacaklardı. Hiçbir şeyleri yoktu - sadece bir hayal ve birbirlerine olan güvenleri.`,

      chapter3Title: "Alanya'da İlk Adım",
      chapter3Text: `Ama Türkiye'de kime güveneceklerdi? Nasıl başlayacaklardı?

İşte o zaman, Ahmet İmrol hayatlarına girdi. Alanya'da doğmuş, büyümüş, her sokağı, her aileyi tanıyan biri. Ahmet, sadece bir iş ortağı değildi - o, bu hayalin Türkiye'deki kalbi oldu.

"Burası benim evim" dedi Ahmet. "Bu insanlar benim komşularım. Onlara en iyisini sunmak için her şeyimi veririm."

Ve öyle yaptı. Alanya'nın dar sokaklarında, villa villa, ev ev dolaştılar. İlk güneş panelini bir yaşlı çiftin çatısına monte ettiklerinde, üçü de gözyaşlarını tutamadı.

"Artık elektrik faturası yok" dedi yaşlı teyze, ellerini göğe kaldırarak. "Allah sizden razı olsun."`,

      chapter4Title: "Üç Şehir, Bir Aile",
      chapter4Text: `Alanya'dan Antalya'ya, Antalya'dan Ankara'ya... Her şehirde aynı hikaye tekrarlandı. Aileler, işletmeler, oteller - herkes güneşin gücünü keşfediyordu.

Bugün, üç şubeyle Türkiye'nin dört bir yanına hizmet veriyoruz. Ama biz büyük bir şirket değiliz. Biz bir aileyiz.

Her sabah güneş doğduğunda, binlerce evin çatısındaki panellerimiz enerji üretiyor. Ve biz biliyoruz ki, her panel bir ailenin geleceğine yatırım.`,

      visionTitle: "Vizyonumuz",
      visionText: "Güneşin bedava olduğu bu topraklarda, hiçbir aile karanlıkta kalmasın. Hiçbir anne çocuğuna 'ışığı kapat' demesin. Hiçbir baba elektrik faturasından uykusuz kalmasın.",
      
      valuesTitle: "Değerlerimiz",
      value1: "Alman mühendisliği, Türk misafirperverliği",
      value2: "Her müşteri bir aile üyesi",
      value3: "Söz verdiğimizi yaparız",
      
      ctaTitle: "Hikayenizin Bir Parçası Olmak İstiyoruz",
      ctaText: "Siz de güneşin gücünü evinize taşımak ister misiniz? Ücretsiz keşif için hemen arayın.",
      ctaButton: "Ücretsiz Keşif Al",

      locations: [
        { city: "Alanya", desc: "Hikayemizin başladığı yer" },
        { city: "Antalya", desc: "Bölge merkezi" },
        { city: "Ankara", desc: "Başkent şubemiz" },
      ],
    },
    de: {
      badge: "Unsere Geschichte",
      title: "Von einem Traum",
      titleHighlight: "zur Realität",
      subtitle: "Eine Reise, die mit der Leidenschaft begann, die Kraft der Sonne zu den Menschen zu bringen",
      
      chapter1Title: "Ein Traum begann",
      chapter1Text: `Im Herzen Deutschlands, in München, blickte Dalibor Bakmaz eines Nachts zum Himmel und dachte: "In der Türkei scheint die Sonne fast 10 Monate lang kostenlos. Wie kann ich diese wunderbare Energiequelle zu den Menschen bringen?"

Das war nicht nur eine Geschäftsidee. Es war eine Vision. Jahre lang arbeitete er in den kalten Wintern Deutschlands, aber seine Gedanken waren immer bei der Wärme der Sonne. Das goldene Licht des Mittelmeers, die lachenden Gesichter der Kinder, die Abende, die Familien auf der Terrasse verbringen...

Aber die wahre Frage war: Wie? Er kannte die Türkei nicht. Er sprach die Sprache nicht. Er hatte nur ein Feuer in seinem Herzen.`,

      chapter2Title: "Das Schicksal führte zwei Wege zusammen",
      chapter2Text: `Und dann griff das Schicksal ein. In einer Fabrik in München traf er Mustafa Sakar. Mustafa, ein gebürtiger Türke, der sowohl Deutschland als auch die Türkei in seinem Herzen trug.

Bei ihrem ersten Gespräch erzählte Dalibor mit leuchtenden Augen von seinem Traum. Mustafa hörte zu. Und in diesem Moment fühlten beide dasselbe: Das musste getan werden.

"Wir können es gemeinsam schaffen" sagte Mustafa. "Du bringst das Ingenieurwissen, ich bin die Brücke. Die Familien in der Türkei verdienen günstige Energie."

An diesem Abend schüttelten sich zwei Männer die Hände. Sie würden bei Null anfangen. Sie hatten nichts - nur einen Traum und das Vertrauen zueinander.`,

      chapter3Title: "Der erste Schritt in Alanya",
      chapter3Text: `Aber wem sollten sie in der Türkei vertrauen? Wie sollten sie anfangen?

Da kam Ahmet İmrol in ihr Leben. Geboren und aufgewachsen in Alanya, kannte er jede Straße, jede Familie. Ahmet war nicht nur ein Geschäftspartner - er wurde das Herz dieses Traums in der Türkei.

"Das ist meine Heimat" sagte Ahmet. "Diese Menschen sind meine Nachbarn. Ich gebe alles, um ihnen das Beste zu bieten."

Und das tat er. In den engen Gassen von Alanya gingen sie von Villa zu Villa, von Haus zu Haus. Als sie das erste Solarpanel auf dem Dach eines älteren Ehepaars installierten, konnten alle drei ihre Tränen nicht zurückhalten.

"Keine Stromrechnung mehr" sagte die alte Dame und hob ihre Hände zum Himmel. "Gott segne euch."`,

      chapter4Title: "Drei Städte, eine Familie",
      chapter4Text: `Von Alanya nach Antalya, von Antalya nach Ankara... In jeder Stadt wiederholte sich dieselbe Geschichte. Familien, Unternehmen, Hotels - alle entdeckten die Kraft der Sonne.

Heute bedienen wir mit drei Niederlassungen ganz Türkei. Aber wir sind kein großes Unternehmen. Wir sind eine Familie.

Jeden Morgen, wenn die Sonne aufgeht, erzeugen unsere Panels auf tausenden Dächern Energie. Und wir wissen: Jedes Panel ist eine Investition in die Zukunft einer Familie.`,

      visionTitle: "Unsere Vision",
      visionText: "In diesem Land, wo die Sonne kostenlos scheint, soll keine Familie im Dunkeln bleiben. Keine Mutter soll zu ihrem Kind sagen müssen 'Mach das Licht aus'. Kein Vater soll wegen der Stromrechnung schlaflose Nächte haben.",
      
      valuesTitle: "Unsere Werte",
      value1: "Deutsche Ingenieurskunst, türkische Gastfreundschaft",
      value2: "Jeder Kunde ist ein Familienmitglied",
      value3: "Wir halten, was wir versprechen",
      
      ctaTitle: "Wir möchten Teil Ihrer Geschichte werden",
      ctaText: "Möchten auch Sie die Kraft der Sonne in Ihr Zuhause bringen? Rufen Sie jetzt für eine kostenlose Besichtigung an.",
      ctaButton: "Kostenlose Beratung",

      locations: [
        { city: "Alanya", desc: "Wo unsere Geschichte begann" },
        { city: "Antalya", desc: "Regionales Zentrum" },
        { city: "Ankara", desc: "Unsere Hauptstadt-Filiale" },
      ],
    },
    en: {
      badge: "Our Story",
      title: "From a Dream",
      titleHighlight: "to Reality",
      subtitle: "A journey that began with the passion to bring the power of the sun to the people",
      
      chapter1Title: "A Dream Began",
      chapter1Text: `In the heart of Germany, in Munich, Dalibor Bakmaz looked up at the sky one night and thought: "In Turkey, the sun shines for free almost 10 months a year. How can I bring this wonderful energy source to the people?"

This wasn't just a business idea. It was a vision. For years he worked in Germany's cold winters, but his mind was always on the warmth of the sun. The golden light of the Mediterranean, the laughing faces of children, the evenings families spend on their terraces...

But the real question was: How? He didn't know Turkey. He didn't speak the language. He only had a fire burning in his heart.`,

      chapter2Title: "Fate Brought Two Paths Together",
      chapter2Text: `And then, fate intervened. In a factory in Munich, he met Mustafa Sakar. Mustafa, a native Turk who carried both Germany and Turkey in his heart.

In their first conversation, Dalibor shared his dream with shining eyes. Mustafa listened. And at that moment, both felt the same thing: This had to be done.

"We can do it together" said Mustafa. "You bring the engineering knowledge, I'll be the bridge. The families in Turkey deserve affordable energy."

That night, two men shook hands. They would start from zero. They had nothing - just a dream and trust in each other.`,

      chapter3Title: "The First Step in Alanya",
      chapter3Text: `But who would they trust in Turkey? How would they start?

That's when Ahmet İmrol came into their lives. Born and raised in Alanya, he knew every street, every family. Ahmet wasn't just a business partner - he became the heart of this dream in Turkey.

"This is my home" said Ahmet. "These people are my neighbors. I'll give everything to offer them the best."

And he did. In the narrow streets of Alanya, they went from villa to villa, house to house. When they installed the first solar panel on an elderly couple's roof, all three couldn't hold back their tears.

"No more electricity bills" said the old lady, raising her hands to the sky. "God bless you."`,

      chapter4Title: "Three Cities, One Family",
      chapter4Text: `From Alanya to Antalya, from Antalya to Ankara... In every city, the same story repeated. Families, businesses, hotels - everyone discovered the power of the sun.

Today, we serve all of Turkey with three branches. But we're not a big company. We're a family.

Every morning when the sun rises, our panels on thousands of roofs generate energy. And we know: Every panel is an investment in a family's future.`,

      visionTitle: "Our Vision",
      visionText: "In this land where the sun shines for free, no family should be left in the dark. No mother should have to tell her child 'turn off the light'. No father should have sleepless nights over electricity bills.",
      
      valuesTitle: "Our Values",
      value1: "German engineering, Turkish hospitality",
      value2: "Every customer is a family member",
      value3: "We keep our promises",
      
      ctaTitle: "We Want to Be Part of Your Story",
      ctaText: "Would you also like to bring the power of the sun to your home? Call now for a free site visit.",
      ctaButton: "Free Consultation",

      locations: [
        { city: "Alanya", desc: "Where our story began" },
        { city: "Antalya", desc: "Regional center" },
        { city: "Ankara", desc: "Our capital branch" },
      ],
    },
    ru: {
      badge: "Наша История",
      title: "От Мечты",
      titleHighlight: "к Реальности",
      subtitle: "Путешествие, которое началось со страсти донести силу солнца до людей",
      
      chapter1Title: "Мечта началась",
      chapter1Text: `В сердце Германии, в Мюнхене, Далибор Бакмаз однажды ночью посмотрел на небо и подумал: "В Турции солнце светит бесплатно почти 10 месяцев в году. Как я могу донести этот замечательный источник энергии до людей?"

Это была не просто бизнес-идея. Это было видение. Годами он работал в холодные зимы Германии, но его мысли всегда были о тепле солнца. Золотой свет Средиземноморья, смеющиеся лица детей, вечера, которые семьи проводят на террасах...

Но настоящий вопрос был: Как? Он не знал Турцию. Он не говорил на языке. У него был только огонь в сердце.`,

      chapter2Title: "Судьба свела два пути",
      chapter2Text: `И тогда вмешалась судьба. На заводе в Мюнхене он встретил Мустафу Сакара. Мустафа, коренной турок, который носил в сердце и Германию, и Турцию.

В первом разговоре Далибор с сияющими глазами рассказал о своей мечте. Мустафа слушал. И в этот момент оба почувствовали одно и то же: Это должно быть сделано.

"Мы можем сделать это вместе" сказал Мустафа. "Ты принесёшь инженерные знания, я буду мостом. Семьи в Турции заслуживают доступную энергию."

В тот вечер двое мужчин пожали руки. Они начнут с нуля. У них ничего не было - только мечта и доверие друг к другу.`,

      chapter3Title: "Первый шаг в Аланье",
      chapter3Text: `Но кому они будут доверять в Турции? Как они начнут?

Тогда в их жизнь вошёл Ахмет Имрол. Родившийся и выросший в Аланье, он знал каждую улицу, каждую семью. Ахмет был не просто деловым партнёром - он стал сердцем этой мечты в Турции.

"Это мой дом" сказал Ахмет. "Эти люди - мои соседи. Я отдам всё, чтобы предложить им лучшее."

И он сделал это. По узким улочкам Аланьи они ходили от виллы к вилле, от дома к дому. Когда они установили первую солнечную панель на крыше пожилой пары, все трое не могли сдержать слёзы.

"Больше нет счетов за электричество" сказала старая женщина, подняв руки к небу. "Да благословит вас Бог."`,

      chapter4Title: "Три города, одна семья",
      chapter4Text: `Из Аланьи в Анталью, из Антальи в Анкару... В каждом городе повторялась та же история. Семьи, предприятия, отели - все открывали для себя силу солнца.

Сегодня мы обслуживаем всю Турцию с тремя филиалами. Но мы не большая компания. Мы семья.

Каждое утро, когда восходит солнце, наши панели на тысячах крыш производят энергию. И мы знаем: Каждая панель - это инвестиция в будущее семьи.`,

      visionTitle: "Наше Видение",
      visionText: "В этой стране, где солнце светит бесплатно, ни одна семья не должна оставаться в темноте. Ни одна мать не должна говорить ребёнку 'выключи свет'. Ни один отец не должен проводить бессонные ночи из-за счетов за электричество.",
      
      valuesTitle: "Наши Ценности",
      value1: "Немецкая инженерия, турецкое гостеприимство",
      value2: "Каждый клиент - член семьи",
      value3: "Мы держим свои обещания",
      
      ctaTitle: "Мы хотим стать частью вашей истории",
      ctaText: "Хотите и вы принести силу солнца в свой дом? Позвоните сейчас для бесплатного осмотра.",
      ctaButton: "Бесплатная консультация",

      locations: [
        { city: "Аланья", desc: "Где началась наша история" },
        { city: "Анталья", desc: "Региональный центр" },
        { city: "Анкара", desc: "Наш филиал в столице" },
      ],
    },
    uk: {
      badge: "Наша Історія",
      title: "Від Мрії",
      titleHighlight: "до Реальності",
      subtitle: "Подорож, яка почалася з пристрасті донести силу сонця до людей",
      
      chapter1Title: "Мрія почалася",
      chapter1Text: `У серці Німеччини, в Мюнхені, Далібор Бакмаз одного разу вночі подивився на небо і подумав: "У Туреччині сонце світить безкоштовно майже 10 місяців на рік. Як я можу донести це чудове джерело енергії до людей?"

Це була не просто бізнес-ідея. Це було бачення. Роками він працював у холодні зими Німеччини, але його думки завжди були про тепло сонця. Золоте світло Середземномор'я, усміхнені обличчя дітей, вечори, які родини проводять на терасах...

Але справжнє питання було: Як? Він не знав Туреччину. Він не говорив мовою. У нього був лише вогонь у серці.`,

      chapter2Title: "Доля звела два шляхи",
      chapter2Text: `І тоді втрутилася доля. На заводі в Мюнхені він зустрів Мустафу Сакара. Мустафа, корінний турок, який носив у серці і Німеччину, і Туреччину.

У першій розмові Далібор із сяючими очима розповів про свою мрію. Мустафа слухав. І в цю мить обидва відчули одне й те саме: Це має бути зроблено.

"Ми можемо зробити це разом" сказав Мустафа. "Ти принесеш інженерні знання, я буду мостом. Родини в Туреччині заслуговують на доступну енергію."

Того вечора двоє чоловіків потиснули руки. Вони почнуть з нуля. У них нічого не було - лише мрія і довіра один до одного.`,

      chapter3Title: "Перший крок в Аланії",
      chapter3Text: `Але кому вони будуть довіряти в Туреччині? Як вони почнуть?

Тоді в їхнє життя увійшов Ахмет Імрол. Народжений і вирослий в Аланії, він знав кожну вулицю, кожну родину. Ахмет був не просто діловим партнером - він став серцем цієї мрії в Туреччині.

"Це мій дім" сказав Ахмет. "Ці люди - мої сусіди. Я віддам все, щоб запропонувати їм найкраще."

І він це зробив. Вузькими вуличками Аланії вони ходили від вілли до вілли, від дому до дому. Коли вони встановили першу сонячну панель на даху літнього подружжя, всі троє не могли стримати сльози.

"Більше немає рахунків за електрику" сказала стара жінка, піднявши руки до неба. "Нехай Бог благословить вас."`,

      chapter4Title: "Три міста, одна родина",
      chapter4Text: `З Аланії в Анталію, з Анталії в Анкару... У кожному місті повторювалася та сама історія. Родини, підприємства, готелі - всі відкривали для себе силу сонця.

Сьогодні ми обслуговуємо всю Туреччину з трьома філіями. Але ми не велика компанія. Ми родина.

Щоранку, коли сходить сонце, наші панелі на тисячах дахів виробляють енергію. І ми знаємо: Кожна панель - це інвестиція в майбутнє родини.`,

      visionTitle: "Наше Бачення",
      visionText: "У цій країні, де сонце світить безкоштовно, жодна родина не повинна залишатися в темряві. Жодна мати не повинна говорити дитині 'вимкни світло'. Жоден батько не повинен проводити безсонні ночі через рахунки за електрику.",
      
      valuesTitle: "Наші Цінності",
      value1: "Німецька інженерія, турецька гостинність",
      value2: "Кожен клієнт - член родини",
      value3: "Ми тримаємо свої обіцянки",
      
      ctaTitle: "Ми хочемо стати частиною вашої історії",
      ctaText: "Хочете і ви принести силу сонця у свій дім? Зателефонуйте зараз для безкоштовного огляду.",
      ctaButton: "Безкоштовна консультація",

      locations: [
        { city: "Аланія", desc: "Де почалася наша історія" },
        { city: "Анталія", desc: "Регіональний центр" },
        { city: "Анкара", desc: "Наша філія в столиці" },
      ],
    },
    ar: {
      badge: "قصتنا",
      title: "من حلم",
      titleHighlight: "إلى واقع",
      subtitle: "رحلة بدأت بشغف إيصال قوة الشمس إلى الناس",
      
      chapter1Title: "بدأ الحلم",
      chapter1Text: `في قلب ألمانيا، في ميونيخ، نظر داليبور باكماز إلى السماء ذات ليلة وفكر: "في تركيا، تشرق الشمس مجاناً لمدة 10 أشهر تقريباً في السنة. كيف يمكنني إيصال مصدر الطاقة الرائع هذا إلى الناس؟"

لم تكن هذه مجرد فكرة تجارية. كانت رؤية. لسنوات عمل في شتاءات ألمانيا الباردة، لكن أفكاره كانت دائماً عن دفء الشمس. الضوء الذهبي للبحر المتوسط، وجوه الأطفال الضاحكة، الأمسيات التي تقضيها العائلات على الشرفات...

لكن السؤال الحقيقي كان: كيف؟ لم يكن يعرف تركيا. لم يتحدث اللغة. كان لديه فقط نار تشتعل في قلبه.`,

      chapter2Title: "القدر جمع طريقين",
      chapter2Text: `ثم تدخل القدر. في مصنع في ميونيخ، التقى بمصطفى ساكار. مصطفى، تركي أصيل يحمل في قلبه ألمانيا وتركيا معاً.

في محادثتهما الأولى، شارك داليبور حلمه بعيون متلألئة. استمع مصطفى. وفي تلك اللحظة، شعر كلاهما بنفس الشيء: يجب أن يتم هذا.

"يمكننا فعل ذلك معاً" قال مصطفى. "أنت تجلب المعرفة الهندسية، وأنا سأكون الجسر. العائلات في تركيا تستحق طاقة ميسورة التكلفة."

في تلك الليلة، تصافح رجلان. سيبدآن من الصفر. لم يكن لديهما شيء - فقط حلم وثقة ببعضهما البعض.`,

      chapter3Title: "الخطوة الأولى في ألانيا",
      chapter3Text: `لكن من سيثقون به في تركيا؟ كيف سيبدأون؟

عندها دخل أحمد إمرول حياتهم. ولد ونشأ في ألانيا، يعرف كل شارع، كل عائلة. لم يكن أحمد مجرد شريك تجاري - أصبح قلب هذا الحلم في تركيا.

"هذا وطني" قال أحمد. "هؤلاء الناس جيراني. سأعطي كل شيء لأقدم لهم الأفضل."

وهذا ما فعله. في الأزقة الضيقة في ألانيا، ذهبوا من فيلا إلى فيلا، من منزل إلى منزل. عندما ركبوا أول لوحة شمسية على سطح زوجين مسنين، لم يستطع الثلاثة كتم دموعهم.

"لا مزيد من فواتير الكهرباء" قالت السيدة العجوز رافعة يديها إلى السماء. "بارك الله فيكم."`,

      chapter4Title: "ثلاث مدن، عائلة واحدة",
      chapter4Text: `من ألانيا إلى أنطاليا، من أنطاليا إلى أنقرة... في كل مدينة تكررت نفس القصة. العائلات، الشركات، الفنادق - الجميع اكتشف قوة الشمس.

اليوم، نخدم كل تركيا بثلاثة فروع. لكننا لسنا شركة كبيرة. نحن عائلة.

كل صباح عندما تشرق الشمس، ألواحنا على آلاف الأسطح تولد الطاقة. ونحن نعلم: كل لوحة هي استثمار في مستقبل عائلة.`,

      visionTitle: "رؤيتنا",
      visionText: "في هذه الأرض حيث تشرق الشمس مجاناً، لا يجب أن تبقى أي عائلة في الظلام. لا يجب أن تقول أي أم لطفلها 'أطفئ النور'. لا يجب أن يقضي أي أب ليالي بلا نوم بسبب فواتير الكهرباء.",
      
      valuesTitle: "قيمنا",
      value1: "الهندسة الألمانية، الضيافة التركية",
      value2: "كل عميل هو فرد من العائلة",
      value3: "نحافظ على وعودنا",
      
      ctaTitle: "نريد أن نكون جزءاً من قصتك",
      ctaText: "هل تريد أنت أيضاً جلب قوة الشمس إلى منزلك؟ اتصل الآن للحصول على زيارة مجانية.",
      ctaButton: "استشارة مجانية",

      locations: [
        { city: "ألانيا", desc: "حيث بدأت قصتنا" },
        { city: "أنطاليا", desc: "المركز الإقليمي" },
        { city: "أنقرة", desc: "فرعنا في العاصمة" },
      ],
    },
  };

  const t = content[language] || content.tr;

  return (
    <div className="min-h-screen bg-background" data-testid="page-about">
      <Header />
      
      <main className="pt-20">
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-yellow-950/20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-72 h-72 bg-amber-200/30 dark:bg-amber-800/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/30 dark:bg-orange-800/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/60 dark:bg-white/10 backdrop-blur-md border border-amber-200/50 dark:border-amber-700/30 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-foreground">{t.badge}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {t.title}{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="space-y-20">
              <article className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.chapter1Title}</h2>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{t.chapter1Text}</p>
                  </div>
                </div>
              </article>

              <article className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.chapter2Title}</h2>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{t.chapter2Text}</p>
                  </div>
                </div>
              </article>

              <article className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-transparent rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.chapter3Title}</h2>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{t.chapter3Text}</p>
                  </div>
                </div>
              </article>

              <article className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-rose-400 to-transparent rounded-full" />
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-rose-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.chapter4Title}</h2>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{t.chapter4Text}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <Sun className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.visionTitle}</h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto italic">
              "{t.visionText}"
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">{t.valuesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🇩🇪🇹🇷</span>
                  </div>
                  <p className="font-medium text-foreground">{t.value1}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/30 dark:to-rose-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-rose-500" />
                  </div>
                  <p className="font-medium text-foreground">{t.value2}</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-emerald-600">100%</span>
                  </div>
                  <p className="font-medium text-foreground">{t.value3}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.locations.map((loc, index) => (
                <Card key={loc.city} className="text-center overflow-visible" data-testid={`card-location-${index}`}>
                  <CardContent className="pt-8 pb-6">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-foreground mb-1">{loc.city}</h3>
                    <p className="text-sm text-muted-foreground">{loc.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
            <p className="text-lg text-white/70 mb-8">{t.ctaText}</p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="px-10 bg-gradient-to-r from-amber-500 to-orange-600 border-0 shadow-lg shadow-amber-500/30 text-lg"
              data-testid="button-about-cta"
            >
              {t.ctaButton}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
