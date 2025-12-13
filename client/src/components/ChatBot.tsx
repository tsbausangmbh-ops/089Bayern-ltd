import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed right-4 bottom-24 z-50" data-testid="chatbot-container">
      {isOpen && (
        <Card className="mb-3 w-72 shadow-2xl border-primary/20 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-blue-600 p-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">089 Bayern Assistent</h4>
                <p className="text-white/70 text-xs">Online - Jetzt antworten</p>
              </div>
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
              data-testid="button-close-chat"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="h-56 p-3 bg-muted/30 overflow-y-auto">
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-card rounded-xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
                  <p className="text-sm text-foreground">
                    Merhaba! Ben 089 Bayern enerji danışmanınızım. Size nasıl yardımcı olabilirim?
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Güneş paneli, ısı pompası veya enerji tasarrufu hakkında sorularınızı yanıtlayabilirim.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-2 border-t border-border bg-card">
            <form 
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setMessage("");
              }}
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="flex-1"
                data-testid="input-chat-message"
              />
              <Button 
                type="submit" 
                size="icon"
                className="bg-gradient-to-r from-primary to-blue-600"
                data-testid="button-send-message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}
      
      <div className="flex items-end gap-1.5">
        <div className="bg-card/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border/50 text-right w-56">
          <p className="text-sm font-semibold text-foreground">KI Assistent von 089Bayern</p>
          <p className="text-xs text-muted-foreground mt-1">Beratung, Tipps und 24h Termine vereinbaren</p>
        </div>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-14 h-14 rounded-full shadow-xl bg-gradient-to-r from-primary to-blue-600 border-0 flex-shrink-0"
          data-testid="button-open-chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>
    </div>
  );
}
