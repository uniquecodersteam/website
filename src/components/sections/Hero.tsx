"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export function Hero() {
  const handleValidateClick = () => {
    const whatsappNumber = "8801885975808";
    const msg = encodeURIComponent("I would like to validate my business idea.");
    window.location.href = `https://wa.me/${whatsappNumber}?text=${msg}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Abstract Background Element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center perspective-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full glass border-white/10 animate-fade-in card-3d">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-muted-foreground">The Best AI Agent Developer & Idea Validator</span>
        </div>
        
        <h1 className="mb-6 text-6xl font-bold leading-tight md:text-8xl lg:text-9xl font-headline tracking-tighter card-3d">
          ENGINEERING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-destructive">AI REVOLUTION</span>
        </h1>
        
        <p className="max-w-3xl mx-auto mb-10 text-xl md:text-2xl text-muted-foreground font-body card-3d leading-relaxed">
          Voted the <strong>best AI agent developer</strong>, we serve as your lead <strong>idea validator</strong>—turning visionary concepts into autonomous systems and high-ROI MVPs.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row card-3d">
          <a href="#services">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 rounded-full glow-purple group">
              Explore Our Expertise
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-lg font-semibold rounded-full glass border-white/20 hover:bg-white/10"
            onClick={handleValidateClick}
          >
            <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
            Validate Your Idea
          </Button>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center justify-center font-headline font-bold text-2xl tracking-widest">TECHNO</div>
          <div className="flex items-center justify-center font-headline font-bold text-2xl tracking-widest">NEXUS</div>
          <div className="flex items-center justify-center font-headline font-bold text-2xl tracking-widest">VOID</div>
          <div className="flex items-center justify-center font-headline font-bold text-2xl tracking-widest">AETHER</div>
        </div>
      </div>
    </section>
  );
}
