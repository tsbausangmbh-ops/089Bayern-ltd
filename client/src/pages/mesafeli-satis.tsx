import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function MesafeliSatis() {
  const { language } = useLanguage();

  const content = {
    tr: {
      backButton: "Ana Sayfa",
      badge: "Mesafeli Satış",
      title: "Mesafeli Satış Sözleşmesi",
      subtitle: "6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında",
      lastUpdate: "Son güncelleme",
      dateLocale: "tr-TR",

      article1Title: "Madde 1 - Taraflar",
      seller: "SATICI:",
      tradeName: "Ticari Unvan",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Adres",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Türkiye",
      phone: "Telefon",
      email: "E-posta",
      tradeRegNo: "Ticaret Sicil No",
      mersisNo: "MERSIS No",
      taxOffice: "Vergi Dairesi / No",
      toBeUpdated: "[Kayıt sonrası güncellenecektir]",
      buyer: "ALICI:",
      buyerText: "Sipariş formunda belirtilen kişi/kurumdur.",

      article2Title: "Madde 2 - Konu",
      article2Text: "İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait www.089bayern.com internet sitesinden elektronik ortamda siparişini verdiği aşağıda nitelikleri ve satış fiyatı belirtilen ürün/hizmetin satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereği tarafların hak ve yükümlülüklerinin belirlenmesidir.",

      article3Title: "Madde 3 - Sözleşme Konusu Ürün/Hizmet Bilgileri",
      article3Intro: "Sunulan ürün ve hizmetlerimiz:",
      product1: "Güneş paneli sistemleri kurulumu ve satışı",
      product2: "Isı pompası sistemleri kurulumu ve satışı (Vaillant yetkili)",
      product3: "Klima sistemleri kurulumu ve satışı (Samsung yetkili)",
      product4: "Enerji depolama (batarya) sistemleri (BYD)",
      product5: "Enerji verimliliği danışmanlığı",
      product6: "Bakım ve servis hizmetleri",
      article3Text: "Ürünün/hizmetin türü, miktarı, marka/modeli, rengi, adedi ve satış fiyatı sipariş onayında ve faturada belirtilmektedir.",

      article4Title: "Madde 4 - Genel Hükümler",
      general1: "ALICI, sözleşme konusu ürün/hizmetin temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiklerini beyan eder.",
      general2: "ALICI, bu sözleşmeyi elektronik ortamda teyit etmekle, mesafeli sözleşmeler ile ilgili yasal düzenleme ve yönetmeliklere uygun ön bilgilendirme formunu temin ettiğini kabul eder.",
      general3: "Sözleşme konusu ürün/hizmet, yasal 30 günlük süre içinde ALICI'ya teslim edilir.",
      general4: "Ürün/hizmet bedeli, ödeme şekline göre ALICI'nın tercih ettiği ödeme yöntemi ile tahsil edilir.",

      article5Title: "Madde 5 - Cayma Hakkı",
      article5Text: "ALICI, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişiye tesliminden itibaren 14 (ondört) gün içinde cayma hakkına sahiptir.",
      withdrawalExceptions: "Cayma Hakkı İstisnaları:",
      exception1: "Alıcının istekleri veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan, niteliği itibariyle geri gönderilmeye elverişsiz ürünler",
      exception2: "Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış ürünler",
      exception3: "Kurulum hizmeti başlamış veya tamamlanmış sistemler",
      exception4: "Özel sipariş üzerine üretilen veya temin edilen ürünler",
      article5TextEnd: "Cayma hakkının kullanımı için 14 günlük süre içinde SATICI'ya yazılı bildirimde bulunulması ve ürünün Madde 7'de belirtilen hükümler çerçevesinde kullanılmamış olması şarttır.",

      article6Title: "Madde 6 - Cayma Hakkı Kullanımında Usul",
      article6Intro: "Cayma hakkının kullanılması halinde:",
      procedure1: "ALICI, cayma kararı hakkında SATICI'yı info@089bayern.com adresine e-posta göndererek veya +90 507 192 2036 / +49 173 5994699 numarasını arayarak bilgilendirir.",
      procedure2: "Cayma bildiriminin SATICI'ya ulaşması tarihinden itibaren 14 gün içinde ürün iade edilir.",
      procedure3: "Ürün, SATICI tarafından teslim alınmasından itibaren 14 gün içinde ödeme iade edilir.",
      procedure4: "İade edilen ürünün kargo ücreti ALICI tarafından karşılanır.",

      article7Title: "Madde 7 - Ödeme ve Teslimat",
      payment1: "Ürün/hizmet bedeli, sipariş anında belirtilen fiyat üzerinden tahsil edilir.",
      payment2: "Ödeme yöntemleri: Nakit, banka havalesi/EFT, kredi kartı",
      payment3: "Taksitli ödeme seçenekleri mevcuttur.",
      payment4: "Teslimat süresi proje bazında belirlenir ve sözleşmede belirtilir.",
      payment5: "Kurulum gerektiren sistemlerde, kurulum tarihi karşılıklı mutabakatla belirlenir.",

      article8Title: "Madde 8 - Garanti Koşulları",
      warranty1: "Güneş Panelleri:",
      warranty1Value: "25 yıl performans garantisi",
      warranty2: "Vaillant Isı Pompası:",
      warranty2Value: "10 yıl üretici garantisi",
      warranty3: "Samsung Klima:",
      warranty3Value: "5 yıl üretici garantisi",
      warranty4: "BYD Batarya:",
      warranty4Value: "10 yıl üretici garantisi",
      warranty5: "İşçilik:",
      warranty5Value: "2 yıl kurulum garantisi",

      article9Title: "Madde 9 - Yetkili Mahkeme",
      article9Text: "İşbu sözleşmeden doğan uyuşmazlıklarda Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir. Uyuşmazlık halinde Antalya Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkili olacaktır.",

      article10Title: "Madde 10 - Yürürlük",
      article10Text: "ALICI, işbu sözleşmenin tüm maddelerini okumuş, anlamış ve kabul etmiş sayılır. Bu sözleşme, ALICI tarafından elektronik ortamda onaylandığı tarihte yürürlüğe girer.",

      contactTitle: "İletişim",
      contactText: "Sorularınız ve cayma hakkı kullanımınız için:",
      whatsapp: "WhatsApp",
    },
    de: {
      backButton: "Startseite",
      badge: "Fernabsatz",
      title: "Fernabsatzvertrag",
      subtitle: "Gemäß dem türkischen Verbraucherschutzgesetz Nr. 6502 und der Verordnung über Fernabsatzverträge",
      lastUpdate: "Letzte Aktualisierung",
      dateLocale: "de-DE",

      article1Title: "Artikel 1 - Vertragsparteien",
      seller: "VERKÄUFER:",
      tradeName: "Handelsname",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Adresse",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Türkei",
      phone: "Telefon",
      email: "E-Mail",
      tradeRegNo: "Handelsregisternummer",
      mersisNo: "MERSIS-Nr.",
      taxOffice: "Finanzamt / Steuernummer",
      toBeUpdated: "[Wird nach der Registrierung aktualisiert]",
      buyer: "KÄUFER:",
      buyerText: "Die im Bestellformular angegebene Person/Institution.",

      article2Title: "Artikel 2 - Vertragsgegenstand",
      article2Text: "Gegenstand dieses Vertrages ist die Festlegung der Rechte und Pflichten der Parteien gemäß dem türkischen Verbraucherschutzgesetz Nr. 6502 und der Verordnung über Fernabsatzverträge bezüglich des Verkaufs und der Lieferung der auf www.089bayern.com elektronisch bestellten Produkte/Dienstleistungen.",

      article3Title: "Artikel 3 - Produkt-/Dienstleistungsinformationen",
      article3Intro: "Unsere angebotenen Produkte und Dienstleistungen:",
      product1: "Installation und Verkauf von Solaranlagen",
      product2: "Installation und Verkauf von Wärmepumpensystemen (Vaillant autorisiert)",
      product3: "Installation und Verkauf von Klimaanlagen (Samsung autorisiert)",
      product4: "Energiespeichersysteme (Batterien) (BYD)",
      product5: "Energieeffizienzberatung",
      product6: "Wartungs- und Serviceleistungen",
      article3Text: "Art, Menge, Marke/Modell, Farbe, Stückzahl und Verkaufspreis des Produkts/der Dienstleistung werden in der Bestellbestätigung und Rechnung angegeben.",

      article4Title: "Artikel 4 - Allgemeine Bestimmungen",
      general1: "Der KÄUFER erklärt, dass er die Vorabinformationen über die wesentlichen Eigenschaften des Produkts/der Dienstleistung, den Verkaufspreis, die Zahlungsart und die Lieferung gelesen und verstanden hat und die erforderliche elektronische Bestätigung erteilt hat.",
      general2: "Der KÄUFER akzeptiert mit der elektronischen Bestätigung dieses Vertrages, dass er das Vorabinformationsformular gemäß den gesetzlichen Regelungen und Verordnungen über Fernabsatzverträge erhalten hat.",
      general3: "Das Produkt/die Dienstleistung wird dem KÄUFER innerhalb der gesetzlichen Frist von 30 Tagen geliefert.",
      general4: "Der Produkt-/Dienstleistungspreis wird mit der vom KÄUFER gewählten Zahlungsmethode eingezogen.",

      article5Title: "Artikel 5 - Widerrufsrecht",
      article5Text: "Der KÄUFER hat das Recht, innerhalb von 14 (vierzehn) Tagen nach Lieferung des Produkts an ihn oder an die von ihm angegebene Adresse vom Vertrag zurückzutreten.",
      withdrawalExceptions: "Ausnahmen vom Widerrufsrecht:",
      exception1: "Produkte, die nach den Wünschen oder eindeutig persönlichen Bedürfnissen des Käufers angefertigt wurden und ihrer Natur nach nicht zur Rücksendung geeignet sind",
      exception2: "Produkte, deren Schutzverpackung, Band, Siegel oder Verpackung nach der Lieferung geöffnet wurde",
      exception3: "Systeme, bei denen die Installation begonnen oder abgeschlossen wurde",
      exception4: "Produkte, die auf Sonderbestellung hergestellt oder beschafft wurden",
      article5TextEnd: "Für die Ausübung des Widerrufsrechts muss innerhalb der 14-tägigen Frist eine schriftliche Mitteilung an den VERKÄUFER erfolgen und das Produkt muss gemäß den in Artikel 7 genannten Bestimmungen unbenutzt sein.",

      article6Title: "Artikel 6 - Verfahren bei Widerrufsrecht",
      article6Intro: "Bei Ausübung des Widerrufsrechts:",
      procedure1: "Der KÄUFER informiert den VERKÄUFER über seinen Widerruf per E-Mail an info@089bayern.com oder telefonisch unter +90 507 192 2036 / +49 173 5994699.",
      procedure2: "Das Produkt wird innerhalb von 14 Tagen nach Eingang der Widerrufsmitteilung beim VERKÄUFER zurückgesandt.",
      procedure3: "Die Zahlung wird innerhalb von 14 Tagen nach Erhalt des Produkts durch den VERKÄUFER erstattet.",
      procedure4: "Die Versandkosten für die Rücksendung trägt der KÄUFER.",

      article7Title: "Artikel 7 - Zahlung und Lieferung",
      payment1: "Der Produkt-/Dienstleistungspreis wird zum bei Bestellung angegebenen Preis eingezogen.",
      payment2: "Zahlungsmethoden: Bar, Banküberweisung/EFT, Kreditkarte",
      payment3: "Ratenzahlungsoptionen sind verfügbar.",
      payment4: "Die Lieferzeit wird projektbezogen festgelegt und im Vertrag angegeben.",
      payment5: "Bei installationspflichtigen Systemen wird der Installationstermin in gegenseitiger Absprache festgelegt.",

      article8Title: "Artikel 8 - Garantiebedingungen",
      warranty1: "Solarmodule:",
      warranty1Value: "25 Jahre Leistungsgarantie",
      warranty2: "Vaillant Wärmepumpe:",
      warranty2Value: "10 Jahre Herstellergarantie",
      warranty3: "Samsung Klimaanlage:",
      warranty3Value: "5 Jahre Herstellergarantie",
      warranty4: "BYD Batterie:",
      warranty4Value: "10 Jahre Herstellergarantie",
      warranty5: "Arbeitsleistung:",
      warranty5Value: "2 Jahre Installationsgarantie",

      article9Title: "Artikel 9 - Zuständiges Gericht",
      article9Text: "Für Streitigkeiten aus diesem Vertrag sind die Verbraucherschlichtungsstellen und Verbrauchergerichte zuständig. Im Streitfall sind die Verbraucherschlichtungsstellen und Verbrauchergerichte in Antalya zuständig.",

      article10Title: "Artikel 10 - Inkrafttreten",
      article10Text: "Der KÄUFER gilt als alle Artikel dieses Vertrages gelesen, verstanden und akzeptiert habend. Dieser Vertrag tritt mit der elektronischen Bestätigung durch den KÄUFER in Kraft.",

      contactTitle: "Kontakt",
      contactText: "Für Fragen und zur Ausübung des Widerrufsrechts:",
      whatsapp: "WhatsApp",
    },
    en: {
      backButton: "Home",
      badge: "Distance Sales",
      title: "Distance Sales Contract",
      subtitle: "Under the Turkish Consumer Protection Law No. 6502 and the Distance Contracts Regulation",
      lastUpdate: "Last updated",
      dateLocale: "en-US",

      article1Title: "Article 1 - Parties",
      seller: "SELLER:",
      tradeName: "Trade Name",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Address",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Turkey",
      phone: "Phone",
      email: "Email",
      tradeRegNo: "Trade Registry No",
      mersisNo: "MERSIS No",
      taxOffice: "Tax Office / No",
      toBeUpdated: "[To be updated after registration]",
      buyer: "BUYER:",
      buyerText: "The person/institution specified in the order form.",

      article2Title: "Article 2 - Subject",
      article2Text: "The subject of this contract is to determine the rights and obligations of the parties pursuant to the Turkish Consumer Protection Law No. 6502 and the Distance Contracts Regulation regarding the sale and delivery of the products/services ordered electronically on www.089bayern.com.",

      article3Title: "Article 3 - Product/Service Information",
      article3Intro: "Our offered products and services:",
      product1: "Installation and sale of solar panel systems",
      product2: "Installation and sale of heat pump systems (Vaillant authorized)",
      product3: "Installation and sale of air conditioning systems (Samsung authorized)",
      product4: "Energy storage (battery) systems (BYD)",
      product5: "Energy efficiency consulting",
      product6: "Maintenance and service",
      article3Text: "The type, quantity, brand/model, color, number and sales price of the product/service are specified in the order confirmation and invoice.",

      article4Title: "Article 4 - General Provisions",
      general1: "The BUYER declares that they have read and understood the preliminary information about the essential characteristics of the product/service, the sales price, payment method and delivery, and have given the necessary electronic confirmation.",
      general2: "By electronically confirming this contract, the BUYER accepts that they have received the preliminary information form in accordance with the legal regulations and ordinances on distance contracts.",
      general3: "The product/service will be delivered to the BUYER within the legal period of 30 days.",
      general4: "The product/service fee will be collected through the payment method chosen by the BUYER.",

      article5Title: "Article 5 - Right of Withdrawal",
      article5Text: "The BUYER has the right to withdraw from the contract within 14 (fourteen) days from the delivery of the product to themselves or to the address they specified.",
      withdrawalExceptions: "Exceptions to the Right of Withdrawal:",
      exception1: "Products prepared according to the buyer's requests or clearly personal needs, which are not suitable for return by their nature",
      exception2: "Products whose protective packaging, tape, seal, or package has been opened after delivery",
      exception3: "Systems where installation has started or been completed",
      exception4: "Products manufactured or procured on special order",
      article5TextEnd: "To exercise the right of withdrawal, written notice must be given to the SELLER within 14 days and the product must be unused in accordance with the provisions stated in Article 7.",

      article6Title: "Article 6 - Procedure for Exercising Right of Withdrawal",
      article6Intro: "When exercising the right of withdrawal:",
      procedure1: "The BUYER informs the SELLER about their withdrawal decision by sending an email to info@089bayern.com or calling +90 507 192 2036 / +49 173 5994699.",
      procedure2: "The product is returned within 14 days from the date the withdrawal notice reaches the SELLER.",
      procedure3: "Payment is refunded within 14 days from the date the product is received by the SELLER.",
      procedure4: "The shipping cost of the returned product is borne by the BUYER.",

      article7Title: "Article 7 - Payment and Delivery",
      payment1: "The product/service fee is collected at the price specified at the time of order.",
      payment2: "Payment methods: Cash, bank transfer/EFT, credit card",
      payment3: "Installment payment options are available.",
      payment4: "Delivery time is determined on a project basis and specified in the contract.",
      payment5: "For systems requiring installation, the installation date is determined by mutual agreement.",

      article8Title: "Article 8 - Warranty Terms",
      warranty1: "Solar Panels:",
      warranty1Value: "25 years performance warranty",
      warranty2: "Vaillant Heat Pump:",
      warranty2Value: "10 years manufacturer warranty",
      warranty3: "Samsung Air Conditioning:",
      warranty3Value: "5 years manufacturer warranty",
      warranty4: "BYD Battery:",
      warranty4Value: "10 years manufacturer warranty",
      warranty5: "Workmanship:",
      warranty5Value: "2 years installation warranty",

      article9Title: "Article 9 - Authorized Court",
      article9Text: "Consumer Arbitration Committees and Consumer Courts are authorized for disputes arising from this contract. In case of dispute, Consumer Arbitration Committees and Consumer Courts in Antalya shall have jurisdiction.",

      article10Title: "Article 10 - Effectiveness",
      article10Text: "The BUYER is deemed to have read, understood and accepted all articles of this contract. This contract enters into force when electronically approved by the BUYER.",

      contactTitle: "Contact",
      contactText: "For questions and to exercise your right of withdrawal:",
      whatsapp: "WhatsApp",
    },
    ru: {
      backButton: "Главная",
      badge: "Дистанционная продажа",
      title: "Договор дистанционной продажи",
      subtitle: "В соответствии с турецким Законом о защите прав потребителей № 6502 и Положением о дистанционных договорах",
      lastUpdate: "Последнее обновление",
      dateLocale: "ru-RU",

      article1Title: "Статья 1 - Стороны",
      seller: "ПРОДАВЕЦ:",
      tradeName: "Торговое наименование",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Адрес",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Алания/Анталья, Турция",
      phone: "Телефон",
      email: "Электронная почта",
      tradeRegNo: "Регистрационный номер",
      mersisNo: "Номер MERSIS",
      taxOffice: "Налоговая инспекция / Номер",
      toBeUpdated: "[Будет обновлено после регистрации]",
      buyer: "ПОКУПАТЕЛЬ:",
      buyerText: "Лицо/организация, указанные в форме заказа.",

      article2Title: "Статья 2 - Предмет договора",
      article2Text: "Предметом настоящего договора является определение прав и обязанностей сторон в соответствии с турецким Законом о защите прав потребителей № 6502 и Положением о дистанционных договорах в отношении продажи и доставки товаров/услуг, заказанных электронным способом на сайте www.089bayern.com.",

      article3Title: "Статья 3 - Информация о товаре/услуге",
      article3Intro: "Предлагаемые нами товары и услуги:",
      product1: "Установка и продажа солнечных панелей",
      product2: "Установка и продажа тепловых насосов (авторизованный Vaillant)",
      product3: "Установка и продажа кондиционеров (авторизованный Samsung)",
      product4: "Системы накопления энергии (батареи) (BYD)",
      product5: "Консультации по энергоэффективности",
      product6: "Техническое обслуживание и сервис",
      article3Text: "Тип, количество, марка/модель, цвет, количество единиц и цена продажи товара/услуги указываются в подтверждении заказа и счёте.",

      article4Title: "Статья 4 - Общие положения",
      general1: "ПОКУПАТЕЛЬ заявляет, что прочитал и понял предварительную информацию об основных характеристиках товара/услуги, цене продажи, способе оплаты и доставке, и дал необходимое электронное подтверждение.",
      general2: "Электронным подтверждением настоящего договора ПОКУПАТЕЛЬ признаёт, что получил форму предварительного информирования в соответствии с законодательством о дистанционных договорах.",
      general3: "Товар/услуга доставляется ПОКУПАТЕЛЮ в течение установленного законом срока 30 дней.",
      general4: "Оплата товара/услуги производится выбранным ПОКУПАТЕЛЕМ способом оплаты.",

      article5Title: "Статья 5 - Право на отказ",
      article5Text: "ПОКУПАТЕЛЬ имеет право отказаться от договора в течение 14 (четырнадцати) дней с момента доставки товара ему или по указанному им адресу.",
      withdrawalExceptions: "Исключения из права на отказ:",
      exception1: "Товары, изготовленные по запросам покупателя или явно для личных нужд, которые по своей природе не подлежат возврату",
      exception2: "Товары, защитная упаковка, лента, пломба или упаковка которых была вскрыта после доставки",
      exception3: "Системы, установка которых началась или завершена",
      exception4: "Товары, изготовленные или приобретённые по специальному заказу",
      article5TextEnd: "Для осуществления права на отказ необходимо уведомить ПРОДАВЦА в письменной форме в течение 14 дней, и товар должен быть неиспользованным в соответствии с положениями статьи 7.",

      article6Title: "Статья 6 - Порядок осуществления права на отказ",
      article6Intro: "При осуществлении права на отказ:",
      procedure1: "ПОКУПАТЕЛЬ информирует ПРОДАВЦА о своём решении об отказе по электронной почте info@089bayern.com или по телефону +90 507 192 2036 / +49 173 5994699.",
      procedure2: "Товар возвращается в течение 14 дней с даты получения ПРОДАВЦОМ уведомления об отказе.",
      procedure3: "Оплата возвращается в течение 14 дней с даты получения товара ПРОДАВЦОМ.",
      procedure4: "Стоимость доставки возвращённого товара несёт ПОКУПАТЕЛЬ.",

      article7Title: "Статья 7 - Оплата и доставка",
      payment1: "Оплата товара/услуги производится по цене, указанной при заказе.",
      payment2: "Способы оплаты: наличные, банковский перевод/EFT, кредитная карта",
      payment3: "Доступны варианты оплаты в рассрочку.",
      payment4: "Сроки доставки определяются для каждого проекта и указываются в договоре.",
      payment5: "Для систем, требующих установки, дата установки определяется по взаимному согласованию.",

      article8Title: "Статья 8 - Гарантийные условия",
      warranty1: "Солнечные панели:",
      warranty1Value: "25 лет гарантии производительности",
      warranty2: "Тепловой насос Vaillant:",
      warranty2Value: "10 лет гарантии производителя",
      warranty3: "Кондиционер Samsung:",
      warranty3Value: "5 лет гарантии производителя",
      warranty4: "Батарея BYD:",
      warranty4Value: "10 лет гарантии производителя",
      warranty5: "Работа:",
      warranty5Value: "2 года гарантии на установку",

      article9Title: "Статья 9 - Компетентный суд",
      article9Text: "По спорам, возникающим из настоящего договора, компетентны Комиссии по защите прав потребителей и Суды по делам потребителей. В случае спора юрисдикцию имеют Комиссии и Суды по делам потребителей в Анталье.",

      article10Title: "Статья 10 - Вступление в силу",
      article10Text: "ПОКУПАТЕЛЬ считается прочитавшим, понявшим и принявшим все статьи настоящего договора. Настоящий договор вступает в силу с момента электронного подтверждения ПОКУПАТЕЛЕМ.",

      contactTitle: "Контакты",
      contactText: "По вопросам и для осуществления права на отказ:",
      whatsapp: "WhatsApp",
    },
    uk: {
      backButton: "Головна",
      badge: "Дистанційний продаж",
      title: "Договір дистанційного продажу",
      subtitle: "Відповідно до турецького Закону про захист прав споживачів № 6502 та Положення про дистанційні договори",
      lastUpdate: "Останнє оновлення",
      dateLocale: "uk-UA",

      article1Title: "Стаття 1 - Сторони",
      seller: "ПРОДАВЕЦЬ:",
      tradeName: "Торгова назва",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "Адреса",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Аланія/Анталія, Туреччина",
      phone: "Телефон",
      email: "Електронна пошта",
      tradeRegNo: "Реєстраційний номер",
      mersisNo: "Номер MERSIS",
      taxOffice: "Податкова інспекція / Номер",
      toBeUpdated: "[Буде оновлено після реєстрації]",
      buyer: "ПОКУПЕЦЬ:",
      buyerText: "Особа/організація, зазначені у формі замовлення.",

      article2Title: "Стаття 2 - Предмет договору",
      article2Text: "Предметом цього договору є визначення прав та обов'язків сторін відповідно до турецького Закону про захист прав споживачів № 6502 та Положення про дистанційні договори щодо продажу та доставки товарів/послуг, замовлених електронним способом на сайті www.089bayern.com.",

      article3Title: "Стаття 3 - Інформація про товар/послугу",
      article3Intro: "Пропоновані нами товари та послуги:",
      product1: "Встановлення та продаж сонячних панелей",
      product2: "Встановлення та продаж теплових насосів (авторизований Vaillant)",
      product3: "Встановлення та продаж кондиціонерів (авторизований Samsung)",
      product4: "Системи накопичення енергії (батареї) (BYD)",
      product5: "Консультації з енергоефективності",
      product6: "Технічне обслуговування та сервіс",
      article3Text: "Тип, кількість, марка/модель, колір, кількість одиниць та ціна продажу товару/послуги вказуються в підтвердженні замовлення та рахунку.",

      article4Title: "Стаття 4 - Загальні положення",
      general1: "ПОКУПЕЦЬ заявляє, що прочитав та зрозумів попередню інформацію про основні характеристики товару/послуги, ціну продажу, спосіб оплати та доставку, і надав необхідне електронне підтвердження.",
      general2: "Електронним підтвердженням цього договору ПОКУПЕЦЬ визнає, що отримав форму попереднього інформування відповідно до законодавства про дистанційні договори.",
      general3: "Товар/послуга доставляється ПОКУПЦЮ протягом встановленого законом терміну 30 днів.",
      general4: "Оплата товару/послуги здійснюється обраним ПОКУПЦЕМ способом оплати.",

      article5Title: "Стаття 5 - Право на відмову",
      article5Text: "ПОКУПЕЦЬ має право відмовитися від договору протягом 14 (чотирнадцяти) днів з моменту доставки товару йому або за вказаною ним адресою.",
      withdrawalExceptions: "Винятки з права на відмову:",
      exception1: "Товари, виготовлені за запитами покупця або явно для особистих потреб, які за своєю природою не підлягають поверненню",
      exception2: "Товари, захисна упаковка, стрічка, пломба або упаковка яких була розкрита після доставки",
      exception3: "Системи, встановлення яких розпочато або завершено",
      exception4: "Товари, виготовлені або придбані за спеціальним замовленням",
      article5TextEnd: "Для здійснення права на відмову необхідно повідомити ПРОДАВЦЯ у письмовій формі протягом 14 днів, і товар повинен бути невикористаним відповідно до положень статті 7.",

      article6Title: "Стаття 6 - Порядок здійснення права на відмову",
      article6Intro: "При здійсненні права на відмову:",
      procedure1: "ПОКУПЕЦЬ інформує ПРОДАВЦЯ про своє рішення про відмову електронною поштою info@089bayern.com або за телефоном +90 507 192 2036 / +49 173 5994699.",
      procedure2: "Товар повертається протягом 14 днів з дати отримання ПРОДАВЦЕМ повідомлення про відмову.",
      procedure3: "Оплата повертається протягом 14 днів з дати отримання товару ПРОДАВЦЕМ.",
      procedure4: "Вартість доставки поверненого товару несе ПОКУПЕЦЬ.",

      article7Title: "Стаття 7 - Оплата та доставка",
      payment1: "Оплата товару/послуги здійснюється за ціною, вказаною при замовленні.",
      payment2: "Способи оплати: готівка, банківський переказ/EFT, кредитна картка",
      payment3: "Доступні варіанти оплати в розстрочку.",
      payment4: "Терміни доставки визначаються для кожного проекту та вказуються в договорі.",
      payment5: "Для систем, що потребують встановлення, дата встановлення визначається за взаємною згодою.",

      article8Title: "Стаття 8 - Гарантійні умови",
      warranty1: "Сонячні панелі:",
      warranty1Value: "25 років гарантії продуктивності",
      warranty2: "Тепловий насос Vaillant:",
      warranty2Value: "10 років гарантії виробника",
      warranty3: "Кондиціонер Samsung:",
      warranty3Value: "5 років гарантії виробника",
      warranty4: "Батарея BYD:",
      warranty4Value: "10 років гарантії виробника",
      warranty5: "Робота:",
      warranty5Value: "2 роки гарантії на встановлення",

      article9Title: "Стаття 9 - Компетентний суд",
      article9Text: "За спорами, що виникають з цього договору, компетентні Комісії із захисту прав споживачів та Суди у справах споживачів. У разі спору юрисдикцію мають Комісії та Суди у справах споживачів в Анталії.",

      article10Title: "Стаття 10 - Набрання чинності",
      article10Text: "ПОКУПЕЦЬ вважається таким, що прочитав, зрозумів та прийняв усі статті цього договору. Цей договір набирає чинності з моменту електронного підтвердження ПОКУПЦЕМ.",

      contactTitle: "Контакти",
      contactText: "З питань та для здійснення права на відмову:",
      whatsapp: "WhatsApp",
    },
    ar: {
      backButton: "الصفحة الرئيسية",
      badge: "البيع عن بعد",
      title: "عقد البيع عن بعد",
      subtitle: "بموجب قانون حماية المستهلك التركي رقم 6502 ولائحة العقود عن بعد",
      lastUpdate: "آخر تحديث",
      dateLocale: "ar-SA",

      article1Title: "المادة 1 - الأطراف",
      seller: "البائع:",
      tradeName: "الاسم التجاري",
      tradeNameValue: "089 Bayern Enerji Sistemleri Ltd. Şti.",
      address: "العنوان",
      addressValue: "Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 ألانيا/أنطاليا، تركيا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      tradeRegNo: "رقم السجل التجاري",
      mersisNo: "رقم MERSIS",
      taxOffice: "مكتب الضرائب / الرقم",
      toBeUpdated: "[سيتم التحديث بعد التسجيل]",
      buyer: "المشتري:",
      buyerText: "الشخص/المؤسسة المحددة في نموذج الطلب.",

      article2Title: "المادة 2 - موضوع العقد",
      article2Text: "موضوع هذا العقد هو تحديد حقوق والتزامات الأطراف وفقاً لقانون حماية المستهلك التركي رقم 6502 ولائحة العقود عن بعد فيما يتعلق ببيع وتسليم المنتجات/الخدمات المطلوبة إلكترونياً على www.089bayern.com.",

      article3Title: "المادة 3 - معلومات المنتج/الخدمة",
      article3Intro: "منتجاتنا وخدماتنا المقدمة:",
      product1: "تركيب وبيع أنظمة الألواح الشمسية",
      product2: "تركيب وبيع أنظمة المضخات الحرارية (Vaillant معتمد)",
      product3: "تركيب وبيع أنظمة التكييف (Samsung معتمد)",
      product4: "أنظمة تخزين الطاقة (البطاريات) (BYD)",
      product5: "استشارات كفاءة الطاقة",
      product6: "الصيانة والخدمة",
      article3Text: "يتم تحديد نوع وكمية وعلامة/موديل ولون وعدد وسعر بيع المنتج/الخدمة في تأكيد الطلب والفاتورة.",

      article4Title: "المادة 4 - الأحكام العامة",
      general1: "يصرح المشتري بأنه قرأ وفهم المعلومات المسبقة حول الخصائص الأساسية للمنتج/الخدمة وسعر البيع وطريقة الدفع والتسليم، وقدم التأكيد الإلكتروني اللازم.",
      general2: "بالتأكيد الإلكتروني لهذا العقد، يقبل المشتري أنه حصل على نموذج المعلومات المسبقة وفقاً للوائح القانونية المتعلقة بالعقود عن بعد.",
      general3: "يتم تسليم المنتج/الخدمة للمشتري خلال المدة القانونية البالغة 30 يوماً.",
      general4: "يتم تحصيل رسوم المنتج/الخدمة بطريقة الدفع التي اختارها المشتري.",

      article5Title: "المادة 5 - حق الانسحاب",
      article5Text: "للمشتري الحق في الانسحاب من العقد خلال 14 (أربعة عشر) يوماً من تسليم المنتج إليه أو إلى العنوان الذي حدده.",
      withdrawalExceptions: "استثناءات حق الانسحاب:",
      exception1: "المنتجات المعدة حسب طلبات المشتري أو احتياجاته الشخصية الواضحة، والتي لا تصلح للإرجاع بطبيعتها",
      exception2: "المنتجات التي تم فتح عبوتها الواقية أو شريطها أو ختمها أو غلافها بعد التسليم",
      exception3: "الأنظمة التي بدأ تركيبها أو اكتمل",
      exception4: "المنتجات المصنعة أو المشتراة بطلب خاص",
      article5TextEnd: "لممارسة حق الانسحاب، يجب إخطار البائع كتابياً خلال 14 يوماً ويجب أن يكون المنتج غير مستخدم وفقاً للأحكام المنصوص عليها في المادة 7.",

      article6Title: "المادة 6 - إجراءات ممارسة حق الانسحاب",
      article6Intro: "عند ممارسة حق الانسحاب:",
      procedure1: "يقوم المشتري بإبلاغ البائع بقرار الانسحاب عبر البريد الإلكتروني info@089bayern.com أو الاتصال على +90 507 192 2036 / +49 173 5994699.",
      procedure2: "يتم إرجاع المنتج خلال 14 يوماً من تاريخ وصول إشعار الانسحاب إلى البائع.",
      procedure3: "يتم استرداد المبلغ خلال 14 يوماً من تاريخ استلام البائع للمنتج.",
      procedure4: "يتحمل المشتري تكلفة شحن المنتج المرتجع.",

      article7Title: "المادة 7 - الدفع والتسليم",
      payment1: "يتم تحصيل رسوم المنتج/الخدمة بالسعر المحدد وقت الطلب.",
      payment2: "طرق الدفع: نقداً، تحويل بنكي/EFT، بطاقة ائتمان",
      payment3: "تتوفر خيارات الدفع بالتقسيط.",
      payment4: "يتم تحديد وقت التسليم على أساس المشروع ويُذكر في العقد.",
      payment5: "بالنسبة للأنظمة التي تتطلب التركيب، يتم تحديد تاريخ التركيب بالاتفاق المتبادل.",

      article8Title: "المادة 8 - شروط الضمان",
      warranty1: "الألواح الشمسية:",
      warranty1Value: "ضمان الأداء 25 سنة",
      warranty2: "مضخة حرارية Vaillant:",
      warranty2Value: "ضمان الشركة المصنعة 10 سنوات",
      warranty3: "تكييف Samsung:",
      warranty3Value: "ضمان الشركة المصنعة 5 سنوات",
      warranty4: "بطارية BYD:",
      warranty4Value: "ضمان الشركة المصنعة 10 سنوات",
      warranty5: "العمالة:",
      warranty5Value: "ضمان التركيب سنتان",

      article9Title: "المادة 9 - المحكمة المختصة",
      article9Text: "لجان تحكيم المستهلك ومحاكم المستهلك مختصة بالنزاعات الناشئة عن هذا العقد. في حالة النزاع، تكون لجان ومحاكم المستهلك في أنطاليا هي المختصة.",

      article10Title: "المادة 10 - النفاذ",
      article10Text: "يُعتبر المشتري قد قرأ وفهم ووافق على جميع مواد هذا العقد. يدخل هذا العقد حيز التنفيذ عند الموافقة الإلكترونية من المشتري.",

      contactTitle: "الاتصال",
      contactText: "للاستفسارات ولممارسة حق الانسحاب:",
      whatsapp: "واتساب",
    },
  };

  const t = content[language as keyof typeof content] || content.tr;
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      <SEOHead page="legal" />
      <Header />
      
      <section className="relative pt-24 pb-16 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6">
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/">
              <Button variant="ghost" data-testid="button-back-home">
                <ArrowLeft className={`w-4 h-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
                {t.backButton}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <p className="text-sm text-muted-foreground mb-8">{t.lastUpdate}: {new Date().toLocaleDateString(t.dateLocale)}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article1Title}</h2>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <h3 className="font-medium">{t.seller}</h3>
              <p className="text-sm"><strong>{t.tradeName}:</strong> {t.tradeNameValue}</p>
              <p className="text-sm"><strong>{t.address}:</strong> {t.addressValue}</p>
              <p className="text-sm"><strong>{t.phone}:</strong> +90 507 192 2036 | +49 173 5994699</p>
              <p className="text-sm"><strong>{t.email}:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>{t.tradeRegNo}:</strong> {t.toBeUpdated}</p>
              <p className="text-sm"><strong>{t.mersisNo}:</strong> {t.toBeUpdated}</p>
              <p className="text-sm"><strong>{t.taxOffice}:</strong> {t.toBeUpdated}</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg mt-4 space-y-2">
              <h3 className="font-medium">{t.buyer}</h3>
              <p className="text-sm">{t.buyerText}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article2Title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.article2Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article3Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{t.article3Intro}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.product1}</li>
              <li>{t.product2}</li>
              <li>{t.product3}</li>
              <li>{t.product4}</li>
              <li>{t.product5}</li>
              <li>{t.product6}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">{t.article3Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article4Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.general1}</li>
              <li>{t.general2}</li>
              <li>{t.general3}</li>
              <li>{t.general4}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article5Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{t.article5Text}</p>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
              <h3 className="font-medium text-amber-800 dark:text-amber-200 mb-2">{t.withdrawalExceptions}</h3>
              <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
                <li>{t.exception1}</li>
                <li>{t.exception2}</li>
                <li>{t.exception3}</li>
                <li>{t.exception4}</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">{t.article5TextEnd}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article6Title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">{t.article6Intro}</p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>{t.procedure1}</li>
              <li>{t.procedure2}</li>
              <li>{t.procedure3}</li>
              <li>{t.procedure4}</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article7Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t.payment1}</li>
              <li>{t.payment2}</li>
              <li>{t.payment3}</li>
              <li>{t.payment4}</li>
              <li>{t.payment5}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article8Title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>{t.warranty1}</strong> {t.warranty1Value}</li>
              <li><strong>{t.warranty2}</strong> {t.warranty2Value}</li>
              <li><strong>{t.warranty3}</strong> {t.warranty3Value}</li>
              <li><strong>{t.warranty4}</strong> {t.warranty4Value}</li>
              <li><strong>{t.warranty5}</strong> {t.warranty5Value}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article9Title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.article9Text}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">{t.article10Title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.article10Text}</p>
          </section>

          <section className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{t.contactTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.contactText}</p>
            <p className="text-sm"><strong>{t.phone}:</strong> +90 507 192 2036 | +49 173 5994699</p>
            <p className="text-sm"><strong>{t.email}:</strong> info@089bayern.com</p>
            <p className="text-sm"><strong>{t.whatsapp}:</strong> +90 507 192 2036</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
