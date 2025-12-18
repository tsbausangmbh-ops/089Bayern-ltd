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
    title: "Ihr Energieberater Dalibor",
    subtitle: "Stellen Sie Ihre Fragen zu Kosten, Ablauf, Materialien und mehr. Unser KI-Berater gibt Ihnen sofort Auskunft.",
    placeholder: "Ihre Frage eingeben...",
    welcome: "Grüß Gott!\nIch bin Dalibor, Ihr Digitaler Energieberater bei 089 Bayern.\nIch helfe Deutschen und Kroaten seit 15 Jahren mit Energielösungen im Mittelmeerraum. Wie kann ich Ihnen heute helfen?",
    suggestions: [
      "Ich habe ein Ferienhaus in Kroatien",
      "Wie funktioniert das 4-in-1 System?",
      "Gibt es Förderungen in Kroatien?",
    ],
    features: ["Kostenvoranschläge", "Materialberatung", "Ablaufplanung", "Allgemeine Fragen"],
  },
  tr: {
    badge: "Yapay Zeka Danışmanı",
    headline: "Kişisel 089Bayern Danışmanınız",
    title: "Enerji Danışmanınız Mustafa",
    subtitle: "Maliyet, süreç, malzeme ve daha fazlası hakkında sorularınızı sorun. Yapay zeka danışmanımız size anında bilgi verir.",
    placeholder: "Sorunuzu yazın...",
    welcome: "Merhaba!\nBen Mustafa, 089 Bayern'de dijital enerji danışmanınızım.\n15 yıldır Akdeniz bölgesinde Almanlara ve Türklere enerji çözümleri sunuyorum. Size nasıl yardımcı olabilirim?",
    suggestions: [
      "Antalya'da yazlık evim var",
      "4'ü 1 arada sistem nasıl çalışır?",
      "Türkiye'de teşvik var mı?",
    ],
    features: ["Maliyet Tahminleri", "Malzeme Danışmanlığı", "Süreç Planlama", "Genel Sorular"],
  },
  en: {
    badge: "AI Advisor",
    headline: "Your Personal 089Bayern Advisor",
    title: "Your Energy Advisor Mustafa",
    subtitle: "Ask your questions about costs, processes, materials and more. Our AI advisor provides instant answers.",
    placeholder: "Enter your question...",
    welcome: "Merhaba!\nI'm Mustafa, your digital energy advisor at 089 Bayern.\nI've been helping Germans and Turks with energy solutions in the Mediterranean for 15 years. How can I help you today?",
    suggestions: [
      "I have a holiday home in Antalya",
      "How does the 4-in-1 system work?",
      "Are there incentives in Turkey?",
    ],
    features: ["Cost Estimates", "Material Advice", "Process Planning", "General Questions"],
  },
  ru: {
    badge: "ИИ-консультант",
    headline: "Ваш личный консультант 089Bayern",
    title: "Ваш энергетический консультант Мустафа",
    subtitle: "Задайте вопросы о стоимости, процессе, материалах и многом другом. Наш ИИ-консультант даст вам мгновенный ответ.",
    placeholder: "Введите ваш вопрос...",
    welcome: "Мерхаба!\nЯ Мустафа, ваш цифровой энергетический консультант в 089 Bayern.\nУже 15 лет помогаю немцам и туркам с энергетическими решениями в Средиземноморье. Чем могу помочь?",
    suggestions: [
      "У меня дом в Анталии",
      "Как работает система 4-в-1?",
      "Есть ли субсидии в Турции?",
    ],
    features: ["Расчёт стоимости", "Консультация по материалам", "Планирование процесса", "Общие вопросы"],
  },
  uk: {
    badge: "ШІ-консультант",
    headline: "Ваш особистий консультант 089Bayern",
    title: "Ваш енергетичний консультант Мустафа",
    subtitle: "Задайте питання про вартість, процес, матеріали та інше. Наш ШІ-консультант надасть вам миттєву відповідь.",
    placeholder: "Введіть ваше питання...",
    welcome: "Мерхаба!\nЯ Мустафа, ваш цифровий енергетичний консультант у 089 Bayern.\nВже 15 років допомагаю німцям та туркам з енергетичними рішеннями в Середземномор'ї. Чим можу допомогти?",
    suggestions: [
      "У мене будинок в Анталії",
      "Як працює система 4-в-1?",
      "Чи є субсидії в Туреччині?",
    ],
    features: ["Розрахунок вартості", "Консультація з матеріалів", "Планування процесу", "Загальні питання"],
  },
  ar: {
    badge: "مستشار الذكاء الاصطناعي",
    headline: "مستشارك الشخصي من 089Bayern",
    title: "مستشار الطاقة مصطفى",
    subtitle: "اطرح أسئلتك حول التكاليف والعمليات والمواد والمزيد. يقدم لك مستشار الذكاء الاصطناعي إجابات فورية.",
    placeholder: "أدخل سؤالك...",
    welcome: "مرحبا!\nأنا مصطفى، مستشار الطاقة الرقمي في 089 Bayern.\nأساعد الألمان والأتراك في حلول الطاقة بمنطقة البحر المتوسط منذ 15 عاماً. كيف يمكنني مساعدتك؟",
    suggestions: [
      "لدي منزل في أنطاليا",
      "كيف يعمل نظام 4 في 1؟",
      "هل توجد حوافز في تركيا؟",
    ],
    features: ["تقدير التكاليف", "استشارات المواد", "تخطيط العملية", "أسئلة عامة"],
  },
  hr: {
    badge: "AI Savjetnik",
    headline: "Vaš osobni 089Bayern savjetnik",
    title: "Vaš energetski savjetnik Dalibor",
    subtitle: "Postavite pitanja o troškovima, procesu, materijalima i više. Naš AI savjetnik daje vam trenutne odgovore.",
    placeholder: "Unesite vaše pitanje...",
    welcome: "Pozdrav!\nJa sam Dalibor, vaš digitalni energetski savjetnik u 089 Bayern.\nVeć 15 godina pomažem Nijemcima i Hrvatima s energetskim rješenjima na Mediteranu. Kako vam mogu pomoći?",
    suggestions: [
      "Imam kuću u Hrvatskoj",
      "Kako radi sustav 4-u-1?",
      "Postoje li poticaji u Hrvatskoj?",
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isRTL = language === "ar";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
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
                <h3 className="text-white font-semibold">{language === "de" || language === "hr" ? "Dalibor Bakmaz" : "Mustafa Sakar"} - 089 Bayern</h3>
                <p className="text-white/80 text-sm">Online - {language === "tr" ? "Yardıma hazır" : language === "de" ? "Bereit zu helfen" : language === "ar" ? "جاهز للمساعدة" : language === "ru" ? "Готов помочь" : language === "uk" ? "Готовий допомогти" : language === "hr" ? "Spreman pomoći" : "Ready to help"}</p>
              </div>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-muted/30" data-testid="chat-messages">
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

            <div ref={messagesEndRef} />
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
