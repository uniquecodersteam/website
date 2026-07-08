"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Loader2, Send, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AiDiscovery() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim() || loading) return;

    const currentMsg = message;
    setMessage("");
    setLoading(true);

    const newHistory = [...chatHistory, { role: "user", content: currentMsg }];
    setChatHistory(newHistory);

    // Artificial delay for "processing" feel
    setTimeout(() => {
      const whatsappNumber = "8801885975808";
      const encodedMsg = encodeURIComponent(currentMsg);
      window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
    }, 1200);
  }

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full border-primary/30 text-primary">
            <Wand2 className="w-3 h-3" />
            AI Architect
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 uppercase">
            DISCOVER YOUR <br/><span className="text-secondary italic">AI SOLUTION</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Describe your business challenge. Our AI architect will process your needs and connect you directly with our lead strategist on WhatsApp.
          </p>
        </div>

        <div className="max-w-2xl mx-auto perspective-1000">
          <Card className="glass border-white/5 overflow-hidden card-3d">
            <CardContent className="p-0">
              <div className="h-[400px] overflow-y-auto p-6 space-y-4">
                {chatHistory.length === 0 && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground opacity-50">
                    <BrainCircuit className="w-12 h-12 mb-4 animate-float-slow" />
                    <p>Describe your business challenges or goals to begin.</p>
                  </div>
                )}
                {chatHistory.map((chat, i) => (
                  <div key={i} className={cn(
                    "flex flex-col max-w-[85%] rounded-2xl p-4",
                    chat.role === 'user' ? "ml-auto bg-primary/20 text-white rounded-tr-none" : "mr-auto bg-white/5 text-muted-foreground rounded-tl-none"
                  )}>
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">
                      {chat.role === 'user' ? 'You' : 'Unique AI'}
                    </span>
                    <p className="text-sm md:text-base leading-relaxed">{chat.content}</p>
                  </div>
                ))}
                
                {loading && (
                  <div className="flex flex-col max-w-[85%] mr-auto bg-white/5 text-muted-foreground rounded-2xl rounded-tl-none p-4 animate-pulse">
                    <p className="text-sm">Architecting your solution... Connecting to Lead Developer...</p>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 flex gap-2 bg-background/50">
                <Input 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your business challenge..."
                  className="bg-transparent border-none focus-visible:ring-0 text-base"
                  disabled={loading}
                />
                <Button 
                  type="submit" 
                  disabled={loading || !message.trim()}
                  size="icon"
                  className="bg-primary hover:bg-primary/80 shrink-0 rounded-full"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </form>
            </CardContent>
          </Card>
          <p className="text-center text-[10px] text-muted-foreground mt-4 uppercase tracking-widest font-bold opacity-30">
            Powered by Genkit & UniqueCoders Intelligence
          </p>
        </div>
      </div>
    </section>
  );
}
