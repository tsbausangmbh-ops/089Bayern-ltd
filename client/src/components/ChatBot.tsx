import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/lib/LanguageContext";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { language } = useLanguage();
  const t = translations[language];
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        { role: "assistant", content: t.chatbotError || "Bir hata olustu. Lutfen tekrar deneyin." },
      ]);
    },
  });

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || chatMutation.isPending) return;

    const userMessage = message.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setMessage("");
    chatMutation.mutate(userMessage);
  };

  return (
    <>
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
        data-testid="chatbot-container"
      >
        <div
          onClick={toggleChat}
          className="bg-gradient-to-b from-orange-500 to-orange-600 px-2 py-6 rounded-l-lg shadow-xl cursor-pointer hover:px-3 transition-all duration-200 flex flex-col items-center gap-2"
          data-testid="button-open-chat"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span
            className="text-white text-xs font-semibold whitespace-nowrap"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            089Bayern - KI Agent
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed right-0 top-0 h-full z-50 flex"
          data-testid="chatbot-panel"
        >
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeChat}
          />
          <Card className="relative ml-auto w-96 h-full shadow-2xl border-l border-primary/20 rounded-none overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {t.chatbotAssistant}
                  </h4>
                  <p className="text-white/70 text-xs">{t.chatbotOnline}</p>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={closeChat}
                className="text-white hover:bg-white/20"
                data-testid="button-close-chat"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div ref={messagesContainerRef} className="flex-1 p-4 bg-muted/30 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-card rounded-xl rounded-tl-none p-4 shadow-sm max-w-[95%]">
                    <p className="text-sm text-foreground">{t.chatbotGreeting}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {t.chatbotHelpText}
                    </p>
                  </div>
                </div>

                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.role === "user"
                          ? "bg-orange-500/20"
                          : "bg-primary/20"
                      }`}
                    >
                      <MessageCircle
                        className={`w-4 h-4 ${
                          msg.role === "user" ? "text-orange-500" : "text-primary"
                        }`}
                      />
                    </div>
                    <div
                      className={`rounded-xl p-4 shadow-sm max-w-[95%] ${
                        msg.role === "user"
                          ? "bg-orange-500 text-white rounded-tr-none"
                          : "bg-card rounded-tl-none"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {chatMutation.isPending && (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-card rounded-xl rounded-tl-none p-4 shadow-sm">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-3 border-t border-border bg-card">
              <form className="flex gap-2" onSubmit={handleSubmit}>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.chatbotPlaceholder}
                  className="flex-1 h-12 text-base"
                  data-testid="input-chat-message"
                  disabled={chatMutation.isPending}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 h-12 w-12"
                  data-testid="button-send-message"
                  disabled={chatMutation.isPending || !message.trim()}
                >
                  {chatMutation.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </form>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
