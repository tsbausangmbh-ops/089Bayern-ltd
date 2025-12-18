import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Loader2, Bot, User, Sparkles } from "lucide-react";
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
  title: string;
  subtitle: string;
  placeholder: string;
  welcome: string;
  suggestions: string[];
}> = {
  de: {
    title: "KI-Energieberater",
    subtitle: "Stellen Sie Ihre Fragen zu Solar, Wärmepumpe & Klimaanlage",
    placeholder: "Ihre Frage eingeben...",
    welcome: "Hallo! Ich bin Ihr 089Bayern KI-Berater. Wie kann ich Ihnen bei Ihrer Energielösung helfen?",
    suggestions: [
      "Was kostet eine Solaranlage?",
      "Wie funktioniert die Wärmepumpe?",
      "Spart die Klimaanlage wirklich Strom?",
    ],
  },
  tr: {
    title: "Yapay Zeka Enerji Danışmanı",
    subtitle: "Güneş enerjisi, ısı pompası ve klima hakkında sorularınızı sorun",
    placeholder: "Sorunuzu yazın...",
    welcome: "Merhaba! Ben 089Bayern yapay zeka danışmanınızım. Enerji çözümünüz konusunda size nasıl yardımcı olabilirim?",
    suggestions: [
      "Güneş paneli ne kadar?",
      "Isı pompası nasıl çalışır?",
      "Klima gerçekten tasarruf sağlar mı?",
    ],
  },
  en: {
    title: "AI Energy Advisor",
    subtitle: "Ask your questions about solar, heat pump & air conditioning",
    placeholder: "Enter your question...",
    welcome: "Hello! I'm your 089Bayern AI advisor. How can I help you with your energy solution?",
    suggestions: [
      "How much does solar cost?",
      "How does the heat pump work?",
      "Does AC really save electricity?",
    ],
  },
  ru: {
    title: "ИИ Энергетический Консультант",
    subtitle: "Задайте вопросы о солнечных панелях, тепловом насосе и кондиционере",
    placeholder: "Введите ваш вопрос...",
    welcome: "Здравствуйте! Я ваш ИИ-консультант 089Bayern. Чем могу помочь с вашим энергетическим решением?",
    suggestions: [
      "Сколько стоят солнечные панели?",
      "Как работает тепловой насос?",
      "Кондиционер правда экономит электричество?",
    ],
  },
  uk: {
    title: "ШІ Енергетичний Консультант",
    subtitle: "Задайте питання про сонячні панелі, тепловий насос та кондиціонер",
    placeholder: "Введіть ваше питання...",
    welcome: "Вітаю! Я ваш ШІ-консультант 089Bayern. Чим можу допомогти з вашим енергетичним рішенням?",
    suggestions: [
      "Скільки коштують сонячні панелі?",
      "Як працює тепловий насос?",
      "Кондиціонер справді економить електрику?",
    ],
  },
  ar: {
    title: "مستشار الطاقة بالذكاء الاصطناعي",
    subtitle: "اطرح أسئلتك حول الطاقة الشمسية ومضخة الحرارة والتكييف",
    placeholder: "أدخل سؤالك...",
    welcome: "مرحباً! أنا مستشار الذكاء الاصطناعي من 089Bayern. كيف يمكنني مساعدتك في حل الطاقة الخاص بك؟",
    suggestions: [
      "كم تكلفة الألواح الشمسية؟",
      "كيف تعمل مضخة الحرارة؟",
      "هل التكييف يوفر الكهرباء فعلاً؟",
    ],
  },
  hr: {
    title: "AI Energetski Savjetnik",
    subtitle: "Postavite pitanja o solarnim panelima, toplinskoj pumpi i klimi",
    placeholder: "Unesite vaše pitanje...",
    welcome: "Pozdrav! Ja sam vaš 089Bayern AI savjetnik. Kako vam mogu pomoći s vašim energetskim rješenjem?",
    suggestions: [
      "Koliko košta solarna instalacija?",
      "Kako radi toplinska pumpa?",
      "Štedi li klima stvarno struju?",
    ],
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

  return (
    <section 
      className="py-8 bg-gradient-to-br from-orange-50 via-background to-amber-50 dark:from-orange-950/20 dark:via-background dark:to-amber-950/20" 
      id="ki-berater"
      dir={isRTL ? "rtl" : "ltr"}
      data-testid="section-embedded-chat"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span>KI-Powered</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {chatT.title}
          </h2>
          <p className="text-muted-foreground">
            {chatT.subtitle}
          </p>
        </div>

        <Card className="overflow-hidden border-orange-200 dark:border-orange-800/50 shadow-xl">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">089Bayern KI Agent</h3>
                <p className="text-white/80 text-sm">Online - Bereit zu helfen</p>
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
