import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Loader2, Bot, User, Sparkles, Calculator, Package, Clock, HelpCircle, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const chatTranslations: Record<string, {
  badge: string;
  headline: string;
  title: string;
  subtitle: string;
  placeholder: string;
  welcome: string;
  suggestions: string[];
  features: string[];
}> = {
  de: {
    badge: "KI-Berater",
    headline: "Ihr persönlicher 089Bayern-Berater",
    title: "Ihr Energieberater Hasan",
    subtitle: "Stellen Sie Ihre Fragen zu Kosten, Ablauf, Materialien und mehr. Unser KI-Berater gibt Ihnen sofort Auskunft.",
    placeholder: "Ihre Frage eingeben...",
    welcome: "Grüß Gott!\nIch bin Hasan, Ihr persönlicher Energieberater bei 089 Bayern.\n\nIch weiß genau, wie frustrierend es ist, wenn jeden Monat eine Stromrechnung kommt, die einen schockiert. Viele unserer Kunden haben uns erzählt, wie sie sich hilflos gefühlt haben - die Preise steigen und steigen, und man weiß nicht, wie man das stoppen kann.\n\nGenau dafür bin ich hier. Mit Herzblut und 15 Jahren Erfahrung helfe ich Familien, endlich frei von diesen Sorgen zu werden. Gemeinsam finden wir eine Lösung, die zu Ihnen passt.\n\nWas beschäftigt Sie gerade am meisten?",
    suggestions: [
      "Ich habe eine Villa in Antalya",
      "Wie funktioniert das 4-in-1 System?",
      "300 Sonnentage - wie viel spare ich?",
      "Was kostet eine komplette Anlage?",
      "Vaillant oder Samsung - was ist besser?",
      "Wie lange dauert die Installation?",
    ],
    features: ["Kostenvoranschläge", "Materialberatung", "Ablaufplanung", "Allgemeine Fragen"],
  },
  tr: {
    badge: "Yapay Zeka Danışmanı",
    headline: "Kişisel 089Bayern Danışmanınız",
    title: "Enerji Danışmanınız Mustafa",
    subtitle: "Maliyet, süreç, malzeme ve daha fazlası hakkında sorularınızı sorun. Yapay zeka danışmanımız size anında bilgi verir.",
    placeholder: "Sorunuzu yazın...",
    welcome: "Merhaba!\nBen Mustafa, 089 Bayern'de kişisel enerji danışmanınızım.\n\nHer ay gelen elektrik faturasının sizi ne kadar strese soktuğunu çok iyi biliyorum. Müşterilerimiz bize anlattı - fiyatlar sürekli yükseliyor ve çaresiz hissediyorsunuz.\n\nİşte tam da bu yüzden buradayım. 15 yıllık tecrübem ve tüm kalbimle, ailelerinizi bu yükten kurtarmak için çalışıyorum. Birlikte size özel bir çözüm bulacağız.\n\nSizi en çok ne endişelendiriyor?",
    suggestions: [
      "Antalya'da yazlık evim var",
      "4'ü 1 arada sistem nasıl çalışır?",
      "Türkiye'de teşvik var mı?",
      "Komple sistem ne kadar?",
      "Vaillant mı Samsung mu daha iyi?",
      "Kurulum ne kadar sürer?",
    ],
    features: ["Maliyet Tahminleri", "Malzeme Danışmanlığı", "Süreç Planlama", "Genel Sorular"],
  },
  en: {
    badge: "AI Advisor",
    headline: "Your Personal 089Bayern Advisor",
    title: "Your Energy Advisor Mustafa",
    subtitle: "Ask your questions about costs, processes, materials and more. Our AI advisor provides instant answers.",
    placeholder: "Enter your question...",
    welcome: "Merhaba!\nI'm Mustafa, your personal energy advisor at 089 Bayern.\n\nI know exactly how frustrating it is when the electricity bill arrives every month and shocks you. Many of our customers have told us how helpless they felt - prices keep rising and rising, and you don't know how to stop it.\n\nThat's exactly why I'm here. With passion and 15 years of experience, I help families finally become free from these worries. Together, we'll find a solution that's right for you.\n\nWhat concerns you the most right now?",
    suggestions: [
      "I have a holiday home in Antalya",
      "How does the 4-in-1 system work?",
      "Are there incentives in Turkey?",
      "What does a complete system cost?",
      "Vaillant or Samsung - which is better?",
      "How long does installation take?",
    ],
    features: ["Cost Estimates", "Material Advice", "Process Planning", "General Questions"],
  },
  ru: {
    badge: "ИИ-консультант",
    headline: "Ваш личный консультант 089Bayern",
    title: "Ваш энергетический консультант Мустафа",
    subtitle: "Задайте вопросы о стоимости, процессе, материалах и многом другом. Наш ИИ-консультант даст вам мгновенный ответ.",
    placeholder: "Введите ваш вопрос...",
    welcome: "Мерхаба!\nЯ Мустафа, ваш личный энергетический консультант в 089 Bayern.\n\nЯ прекрасно понимаю, как это раздражает, когда каждый месяц приходит счёт за электричество и шокирует вас. Многие наши клиенты рассказывали, как чувствовали себя беспомощными - цены растут и растут, и непонятно, как это остановить.\n\nИменно для этого я здесь. С душой и 15-летним опытом я помогаю семьям наконец освободиться от этих забот. Вместе мы найдём решение, которое подойдёт именно вам.\n\nЧто вас сейчас больше всего беспокоит?",
    suggestions: [
      "У меня дом в Анталии",
      "Как работает система 4-в-1?",
      "Есть ли субсидии в Турции?",
      "Сколько стоит полная система?",
      "Vaillant или Samsung - что лучше?",
      "Сколько длится установка?",
    ],
    features: ["Расчёт стоимости", "Консультация по материалам", "Планирование процесса", "Общие вопросы"],
  },
  uk: {
    badge: "ШІ-консультант",
    headline: "Ваш особистий консультант 089Bayern",
    title: "Ваш енергетичний консультант Мустафа",
    subtitle: "Задайте питання про вартість, процес, матеріали та інше. Наш ШІ-консультант надасть вам миттєву відповідь.",
    placeholder: "Введіть ваше питання...",
    welcome: "Мерхаба!\nЯ Мустафа, ваш особистий енергетичний консультант у 089 Bayern.\n\nЯ чудово розумію, як це дратує, коли щомісяця приходить рахунок за електрику і шокує вас. Багато наших клієнтів розповідали, як почувалися безпорадними - ціни ростуть і ростуть, і незрозуміло, як це зупинити.\n\nСаме для цього я тут. З душею та 15-річним досвідом я допомагаю родинам нарешті звільнитися від цих турбот. Разом ми знайдемо рішення, яке підійде саме вам.\n\nЩо вас зараз найбільше турбує?",
    suggestions: [
      "У мене будинок в Анталії",
      "Як працює система 4-в-1?",
      "Чи є субсидії в Туреччині?",
      "Скільки коштує повна система?",
      "Vaillant чи Samsung - що краще?",
      "Скільки триває встановлення?",
    ],
    features: ["Розрахунок вартості", "Консультація з матеріалів", "Планування процесу", "Загальні питання"],
  },
  ar: {
    badge: "مستشار الذكاء الاصطناعي",
    headline: "مستشارك الشخصي من 089Bayern",
    title: "مستشار الطاقة مصطفى",
    subtitle: "اطرح أسئلتك حول التكاليف والعمليات والمواد والمزيد. يقدم لك مستشار الذكاء الاصطناعي إجابات فورية.",
    placeholder: "أدخل سؤالك...",
    welcome: "مرحبا!\nأنا مصطفى، مستشار الطاقة الشخصي في 089 Bayern.\n\nأعرف تماماً كم هو محبط عندما تصل فاتورة الكهرباء كل شهر وتصدمك. أخبرنا الكثير من عملائنا كيف شعروا بالعجز - الأسعار ترتفع باستمرار، ولا تعرف كيف توقف ذلك.\n\nلهذا السبب بالذات أنا هنا. بشغف و15 عاماً من الخبرة، أساعد العائلات على التحرر أخيراً من هذه المخاوف. معاً سنجد الحل المناسب لك.\n\nما الذي يقلقك أكثر الآن؟",
    suggestions: [
      "لدي منزل في أنطاليا",
      "كيف يعمل نظام 4 في 1؟",
      "هل توجد حوافز في تركيا؟",
      "كم تكلفة النظام الكامل؟",
      "فايانت أم سامسونج - أيهما أفضل؟",
      "كم يستغرق التركيب؟",
    ],
    features: ["تقدير التكاليف", "استشارات المواد", "تخطيط العملية", "أسئلة عامة"],
  },
  hr: {
    badge: "AI Savjetnik",
    headline: "Vaš osobni 089Bayern savjetnik",
    title: "Vaš energetski savjetnik Hasan",
    subtitle: "Postavite pitanja o troškovima, procesu, materijalima i više. Naš AI savjetnik daje vam trenutne odgovore.",
    placeholder: "Unesite vaše pitanje...",
    welcome: "Pozdrav!\nJa sam Hasan, vaš osobni energetski savjetnik u 089 Bayern.\n\nTočno znam koliko je frustrirajuće kada svaki mjesec stigne račun za struju koji vas šokira. Mnogi naši klijenti su nam ispričali kako su se osjećali bespomoćno - cijene rastu i rastu, a ne znate kako to zaustaviti.\n\nUpravo zato sam ovdje. Sa srcem i 15 godina iskustva pomažem obiteljima da se konačno oslobode tih briga. Zajedno ćemo pronaći rješenje koje vam odgovara.\n\nŠto vas trenutno najviše brine?",
    suggestions: [
      "Imam vilu u Antaliji",
      "Kako radi sustav 4-u-1?",
      "300 sunčanih dana - koliko štedim?",
      "Koliko košta kompletni sustav?",
      "Vaillant ili Samsung - što je bolje?",
      "Koliko traje instalacija?",
    ],
    features: ["Procjene troškova", "Savjeti o materijalima", "Planiranje procesa", "Opća pitanja"],
  },
};

export default function EmbeddedChatSection() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { language } = useLanguage();
  const t = translations[language];
  const chatT = chatTranslations[language] || chatTranslations.en;
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const isRTL = language === "ar";

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([{ role: "assistant", content: chatT.welcome }]);
  }, [language]);

  const chatMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const res = await apiRequest("POST", "/api/chat", {
        message: userMessage,
        language,
      });
      return res.json();
    },
    onSuccess: (data) => {
      if (data.success && data.response) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      }
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: t.chatbotError || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      ]);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || chatMutation.isPending) return;

    const userMessage = message.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setMessage("");
    chatMutation.mutate(userMessage);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessages((prev) => [...prev, { role: "user", content: suggestion }]);
    chatMutation.mutate(suggestion);
  };

  const featureIcons = [Calculator, Package, Clock, HelpCircle];

  return (
    <section 
      className="py-8 bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:via-background dark:to-amber-950/20" 
      id="ki-berater"
      dir={isRTL ? "rtl" : "ltr"}
      data-testid="section-embedded-chat"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
            <MessageCircle className="w-4 h-4" />
            <span>{chatT.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {chatT.headline}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            {chatT.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {chatT.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-1.5 rounded-full"
                >
                  <Icon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-orange-700 dark:text-orange-300 text-xs font-medium">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>

        <Card className="overflow-hidden border-orange-200 dark:border-orange-800/50 shadow-xl">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{language === "de" || language === "hr" ? "Hasan" : "Mustafa Sakar"} - 089 Bayern</h3>
                <p className="text-white/80 text-sm">Online - {language === "tr" ? "Yardıma hazır" : language === "de" ? "Bereit zu helfen" : language === "ar" ? "جاهز للمساعدة" : language === "ru" ? "Готов помочь" : language === "uk" ? "Готовий допомогти" : language === "hr" ? "Spreman pomoći" : "Ready to help"}</p>
              </div>
            </div>
          </div>

          <div ref={messagesContainerRef} className="h-80 overflow-y-auto p-4 bg-muted/30" data-testid="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 mb-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {chatMutation.isPending && (
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-card border rounded-xl px-4 py-2">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {chatT.suggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick(suggestion)}
                  disabled={chatMutation.isPending}
                  className="text-xs"
                  data-testid={`button-suggestion-${index}`}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-4 border-t bg-card">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={chatT.placeholder}
                disabled={chatMutation.isPending}
                className="flex-1"
                data-testid="input-chat-message"
              />
              <Button
                type="submit"
                disabled={!message.trim() || chatMutation.isPending}
                className="bg-orange-500 hover:bg-orange-600"
                data-testid="button-send-message"
              >
                {chatMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
